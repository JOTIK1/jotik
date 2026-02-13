"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseClient } from "../../../lib/supabaseClient";

export default function DashboardGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const supabase = createSupabaseClient();

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data?.user) {
        router.replace("/login");
        return;
      }

      // :white_check_mark: تحقق من تأكيد الإيميل
      if (!data.user.email_confirmed_at) {
        router.replace("/verify-email");
        return;
      }

      setLoading(false);
    };

    checkUser();
  }, [router]);

  if (loading) return null; // تقدر تحط Spinner هنا

  return <>{children}</>;
}