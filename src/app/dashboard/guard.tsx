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

      useEffect(() => {
        const check = async () => {
          const { data } = await supabase.auth.getUser();
      
          if (!data?.user) {
            router.replace("/login");
            return;
          }
      
          if (!data.user.email_confirmed_at) {
            router.replace("/verify-email");
            return;
          }
      
          setOk(true);
        };
      
        check();
      }, [router]);

    check();
  }, [router]);

  if (ok !== true) return null; // loading / redirect
  return <>{children}</>;
}