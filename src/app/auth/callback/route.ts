import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(req: Request) {
  const url = new URL(req.url);

  // Supabase email confirm غالباً يجي بـ token_hash + type
  const token_hash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type"); // signup / recovery / ...

  // أحياناً يجي بـ code (PKCE)
  const code = url.searchParams.get("code");

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  try {
    // 1) لو جا code
    if (code) {
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (error) {
        return NextResponse.redirect(
          new URL(`/auth/confirmed?error=${encodeURIComponent(error.message)}`, url.origin)
        );
      }
      return NextResponse.redirect(new URL("/auth/confirmed", url.origin));
    }

    // 2) لو جا token_hash + type
    if (token_hash && type) {
      const { error } = await supabase.auth.verifyOtp({
        token_hash,
        type: type as any,
      });

      if (error) {
        return NextResponse.redirect(
          new URL(`/auth/confirmed?error=${encodeURIComponent(error.message)}`, url.origin)
        );
      }

      return NextResponse.redirect(new URL("/auth/confirmed", url.origin));
    }

    return NextResponse.redirect(
      new URL("/auth/confirmed?error=missing_token", url.origin)
    );
  } catch (e: any) {
    return NextResponse.redirect(
      new URL(`/auth/confirmed?error=${encodeURIComponent(e?.message || "unknown_error")}`, url.origin)
    );
  }
}