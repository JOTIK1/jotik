import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function htmlEmail(link: string) {
  return `
  <div style="font-family:Arial,sans-serif;line-height:1.6">
    <h2>Confirm your email</h2>
    <p>Click the button below to confirm your email for JOTIK:</p>
    <p>
      <a href="${link}" style="display:inline-block;padding:12px 18px;background:#111827;color:#fff;text-decoration:none;border-radius:8px">
        Confirm Email
      </a>
    </p>
    <p>If the button doesn’t work, copy this link:</p>
    <p style="word-break:break-all">${link}</p>
  </div>
  `;
}

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
    return NextResponse.json(
      { ok: false, field: "username", message: "This name is already taken." },
      { status: 409 }
    );
  }

  // 2) تحقق من invite إن وُجد
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

  // 3) أنشئ المستخدم بدون تأكيد الإيميل
  const { data: created, error: createErr } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: false, // ✅ لازم يبقى false
  });

  if (createErr || !created.user) {
    return NextResponse.json({ ok: false, message: createErr?.message || "Failed to create user." }, { status: 400 });
  }

  const userId = created.user.id;

  // 4) اكتب profile (يفضل upsert لو كان عندك trigger)
  const { error: profErr } = await admin.from("profiles").update({ username }).eq("id", userId);
  if (profErr) {
    await admin.auth.admin.deleteUser(userId);
    return NextResponse.json({ ok: false, message: "Failed to save profile." }, { status: 500 });
  }

  // 5) سجّل invite (مبسطة وآمنة)
  if (invite) {
    const { data: codeRow, error: codeErr } = await admin
      .from("invite_codes")
      .select("uses_count, created_by")
      .eq("code", invite)
      .maybeSingle();

    if (codeErr || !codeRow) {
      await admin.auth.admin.deleteUser(userId);
      return NextResponse.json({ ok: false, message: "Invite code error." }, { status: 400 });
    }

    const nextUses = (codeRow.uses_count || 0) + 1;

    const { error: upErr } = await admin
      .from("invite_codes")
      .update({ uses_count: nextUses })
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

  // 6) توليد رابط تأكيد الإيميل + إرساله عبر Resend
  const redirectTo = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/success`;

  const { data: linkData, error: linkErr } = await admin.auth.admin.generateLink({
    type: "signup",
    email,
    password,
    options: { redirectTo },
  });

  if (linkErr || !linkData?.properties?.action_link) {
    await admin.auth.admin.deleteUser(userId);
    return NextResponse.json({ ok: false, message: linkErr?.message || "Failed to generate confirmation link." }, { status: 500 });
  }

  const actionLink = linkData.properties.action_link;

  const resendKey = process.env.RESEND_API_KEY!;
  const from = process.env.RESEND_FROM!;
  const subject = "Confirm your email - JOTIK";

  const sendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject,
      html: htmlEmail(actionLink),
    }),
  });

  if (!sendRes.ok) {
    await admin.auth.admin.deleteUser(userId);
    return NextResponse.json({ ok: false, message: "Failed to send email via Resend." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}