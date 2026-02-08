import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
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

  // 1) تحقق من username (unique, case-insensitive)
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
    return NextResponse.json({ ok: false, field: "username", message: "This name is already taken." }, { status: 409 });
  }

  // 2) إذا كاين invite code: تحقق منه (فعال + limit)
  if (invite) {
    const { data: codeRow, error: codeErr } = await admin
      .from("invite_codes")
      .select("code, is_active, max_uses, uses_count")
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

  // 3) الآن فقط: أنشئ المستخدم (إذا فشل أي شيء فوق، ما يتخلقش حساب نهائياً)
  const { data: created, error: createErr } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true, // أثناء التطوير: يدخل مباشرة بدون تأكيد
  });

  if (createErr || !created.user) {
    return NextResponse.json({ ok: false, message: createErr?.message || "Failed to create user." }, { status: 400 });
  }

  const userId = created.user.id;

  // 4) اكتب profile
  const { error: profErr } = await admin.from("profiles").update({ username }).eq("id", userId);
  if (profErr) {
    // rollback: احذف المستخدم إذا فشل حفظ البروفايل
    await admin.auth.admin.deleteUser(userId);
    return NextResponse.json({ ok: false, message: "Failed to save profile." }, { status: 500 });
  }

  // 5) إذا invite موجود: سجّل الاستعمال + زِد العداد + خزّن referral_code
  if (invite) {
    const { data: inviter, error: invErr } = await admin
      .from("invite_codes")
      .select("created_by")
      .eq("code", invite)
      .maybeSingle();

    if (invErr || !inviter) {
      await admin.auth.admin.deleteUser(userId);
      return NextResponse.json({ ok: false, message: "Invite code error." }, { status: 400 });
    }

    // زيد uses_count
    const { error: upErr } = await admin
      .from("invite_codes")
      .update({ uses_count: (await admin.from("invite_codes").select("uses_count").eq("code", invite).maybeSingle()).data?.uses_count + 1 })
      .eq("code", invite);

    if (upErr) {
      await admin.auth.admin.deleteUser(userId);
      return NextResponse.json({ ok: false, message: "Failed updating invite usage." }, { status: 500 });
    }

    // سجّل referral
    const { error: refErr } = await admin.from("referrals").insert({
      new_user_id: userId,
      inviter_user_id: inviter.created_by,
      code: invite,
    });

    if (refErr) {
      await admin.auth.admin.deleteUser(userId);
      return NextResponse.json({ ok: false, message: "Failed saving referral." }, { status: 500 });
    }

    // خزّن referral_code في profile
    const { error: rcErr } = await admin.from("profiles").update({ referral_code: invite }).eq("id", userId);
    if (rcErr) {
      await admin.auth.admin.deleteUser(userId);
      return NextResponse.json({ ok: false, message: "Failed saving referral_code." }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
