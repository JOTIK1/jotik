import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSupabaseServerClient();

  const { data } = await supabase.auth.getUser();
  const user = data.user;
  
  if (!user) redirect("/login");

  // ممنوع Dashboard قبل تأكيد الإيميل
  if (!user.email_confirmed_at) {
    redirect(`/verify-email?email=${encodeURIComponent(user.email ?? "")}`);
  }

  return <>{children}</>;
}
