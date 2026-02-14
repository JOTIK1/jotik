import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);

  // Supabase يرسل عادة: token_hash + type
  const token_hash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type") || "signup";

  // نرجع المستخدم لصفحة تغيير كلمة السر لو type=recovery
  const next =
    type === "recovery"
      ? "/reset-password"
      : "/login?verified=1";

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || url.origin;

  // نمرر نفس البرامز للواجهة عند الحاجة
  if (!token_hash) {
    return NextResponse.redirect(`${siteUrl}/verify-email?error=missing_token`);
  }

  // نخلي صفحة reset-password هي اللي تعمل exchange للسيشن (عندك)
  // وللتأكيد signup، مجرد redirect للـ login يكفي (Supabase يفعّل تلقائياً عند الضغط)
  return NextResponse.redirect(`${siteUrl}${next}`);
}