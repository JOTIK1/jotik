import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach((cookie) => {
              // Next 15 types: cookieStore is readonly in Server Components
              (cookieStore as any).set(cookie.name, cookie.value, cookie.options);
            });
          } catch {
            // OK in Server Components render phase
          }
        },
      },
    }
  );
}