import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            res.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // مهم: هذا يعمل refresh للجلسة تلقائيًا
  await supabase.auth.getUser();

  return res;
}

// طبّقها على كل الصفحات ما عدا static و api
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
