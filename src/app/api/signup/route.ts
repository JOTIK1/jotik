import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "").trim();
    const username = String(body.username || "").trim();
    const invite = String(body.invite || "").trim();

    if (!email || !password || !username) {
      return NextResponse.json(
        { ok: false, message: "Name, email, and password are required." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

    const admin = createClient(supabaseUrl, serviceKey);

    // 1) username unique
    const { data: existingName, error: nameErr } = await admin
      .from("profiles")
      .select("id")
      .ilike("username", username)
      .limit(1)
      .maybeSingle();

    if (nameErr) return NextResponse.json({ ok: false, message: nameErr.message }, { status: 500 });
    if (existingName) {
      return NextResponse.json({ ok: false, field: "username", message: "This name is already taken." }, { status: 409 });
    }

    // 2) invite optional (validate)
    if (invite) {
      const { data: codeRow, error: codeErr } = await admin
        .from("invite_codes")
        .select("code, is_active, max_uses, uses_count")
        .eq("code", invite)
        .maybeSingle();

      if (codeErr) return NextResponse.json({ ok: false, message: codeErr.message }, { status: 500 });
      if (!codeRow) return NextResponse.json({ ok: false, field: "invite", message: "Invite code is invalid." }, { status: 400 });
      if (codeRow.is_active === false) return NextResponse.json({ ok: false, field: "invite", message: "Invite code is disabled." }, { status: 400 });
      if (codeRow.max_uses !== null && codeRow.uses_count >= codeRow.max_uses) {
        return NextResponse.json({ ok: false, field: "invite", message: "Invite code reached its limit." }, { status: 400 });
      }
    }

    // 3) IMPORTANT: use AUTH signup (this sends confirmation email)
    const auth = createClient(supabaseUrl, anonKey);

    const redirectTo = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/confirm`;

    const { data, error } = await auth.auth.signUp({
      email,
      password,
      options: {
        data: { username, invite: invite || null },
        emailRedirectTo: redirectTo,
      },
    });

    if (error) return NextResponse.json({ ok: false, message: error.message }, { status: 400 });

    // user is created but unconfirmed until they verify
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, message: e?.message || "Server error" }, { status: 500 });
  }
}