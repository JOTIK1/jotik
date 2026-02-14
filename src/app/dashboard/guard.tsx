"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function DashboardGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ok, setOk] = useState<boolean | null>(null);

  useEffect(() => {
    const check = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data?.user) {
        router.replace("/login");
        setOk(false);
        return;
      }

      const confirmed = !!data.user.email_confirmed_at;

      if (!confirmed) {
        router.replace(`/verify-email?email=${encodeURIComponent(data.user.email || "")}`);
        setOk(false);
        return;
      }

      setOk(true);
    };

    check();
  }, [router]);

  if (ok !== true) return null; // loading / redirect
  return <>{children}</>;
}