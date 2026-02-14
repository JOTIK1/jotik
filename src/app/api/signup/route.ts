import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email = (body.email || "").trim().toLowerCase();
    const password = (body.password || "").trim();
    const username = (body.username || "").trim();
    const invite = (body.invite || "").trim();

    if (!email || !password || !username) {
      return NextResponse.json(
        { ok: false, message: "Name, email, and password are required." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
    const admin = createClient(supabaseUrl, serviceKey);

    // 1) username unique (case-insensitive)
    const { data: existingName, error: nameErr } = await admin
      .from("profiles")
      .select("id")
      .ilike("username", username)
      .limit(1)
      .maybeSingle();

    if (nameErr) {
      return NextResponse.json({ ok: false, message: nameErr.message }, { status: 500 });
    }
    if (existingName) {
      return NextResponse.json(
        { ok: false, field: "username", message: "This name is already taken." },
        { status: 409 }
      );
    }

    // 2) invite validate (optional)
    if (invite) {
      const { data: codeRow, error: codeErr } = await admin
        .from("invite_codes")
        .select("code, is_active, max_uses, uses_count, created_by")
        .eq("code", invite)
        .maybeSingle();

      if (codeErr) {
        return NextResponse.json({ ok: false, message: codeErr.message }, { status: 500 });
      }
      if (!codeRow) {
        return NextResponse.json({ ok: false, field: "invite", message: "Invite code is invalid." }, { status: 400 });
      }
      if (codeRow.is_active === false) {
        return NextResponse.json({ ok: false, field: "invite", message: "Invite code is disabled." }, { status: 400 });
      }
      if (codeRow.max_uses !== null && codeRow.uses_count >= codeRow.max_uses) {
        return NextResponse.json({ ok: false, field: "invite", message: "Invite code reached its limit." }, { status: 400 });
      }
    }

    // 3) Create user (NOT confirmed)
    const { data: created, error: createErr } = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: false,
    });

    if (createErr || !created.user) {
      return NextResponse.json({ ok: false, message: createErr?.message || "Failed to create user." }, { status: 400 });
    }

    const userId = created.user.id;

    // 4) profile
    const { error: profErr } = await admin.from("profiles").update({ username }).eq("id", userId);
    if (profErr) {
      await admin.auth.admin.deleteUser(userId);
      return NextResponse.json({ ok: false, message: "Failed to save profile." }, { status: 500 });
    }

    // 5) referrals (optional)
    if (invite) {
      const { data: codeRow } = await admin
        .from("invite_codes")
        .select("code, uses_count, created_by")
        .eq("code", invite)
        .maybeSingle();

      if (!codeRow) {
        await admin.auth.admin.deleteUser(userId);
        return NextResponse.json({ ok: false, message: "Invite code error." }, { status: 400 });
      }

      const { error: upErr } = await admin
        .from("invite_codes")
        .update({ uses_count: (codeRow.uses_count || 0) + 1 })
        .eq("code", invite);

      if (upErr) {
        await admin.auth.admin.deleteUser(userId);
        return NextResponse.json({ ok: false, message: "Failed updating invite usage." }, { status: 500 });
      }

      const { error: refErr } = await admin.from("referrals").insert({
        new_user_id: userId,
        inviter_user_id: codeRow.created_by,
        code: invite,
      });

      if (refErr) {
        await admin.auth.admin.deleteUser(userId);
        return NextResponse.json({ ok: false, message: "Failed saving referral." }, { status: 500 });
      }

      const { error: rcErr } = await admin.from("profiles").update({ referral_code: invite }).eq("id", userId);
      if (rcErr) {
        await admin.auth.admin.deleteUser(userId);
        return NextResponse.json({ ok: false, message: "Failed saving referral_code." }, { status: 500 });
      }
    }

    // 6) Send verify email via Resend (manual verify link)
    const resendKey = process.env.RESEND_API_KEY!;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const verifyUrl = `${siteUrl}/api/verify-email?email=${encodeURIComponent(email)}`;

    const resend = new Resend(resendKey);
    await resend.emails.send({
      from: process.env.RESEND_FROM! ,
      to: email,
      subject: "Confirm your email - JOTIK",
      html: `
        <div style="font-family:Arial,sans-serif">
          <h2>Confirm your email</h2>
          <p>Click the button to confirm your email for JOTIK.</p>
          <p><a href="${verifyUrl}" style="display:inline-block;padding:12px 18px;background:#2563eb;color:#fff;border-radius:8px;text-decoration:none">Confirm Email</a></p>
          <p>If the button doesn’t work, open this link:</p>
          <p>${verifyUrl}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, message: e?.message || "Failed" },
      { status: 500 }
    );
  }
}