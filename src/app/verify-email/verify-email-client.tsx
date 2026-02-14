"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function VerifyEmailClient() {
  const sp = useSearchParams();
  const router = useRouter();
  const [msg, setMsg] = useState("Checking...");

  useEffect(() => {
    // تقدر تستعمل هذا الملف فقط كواجهة،
    // وإذا عندك endpoint verify-email خلّيه هو اللي يخدم.
    const ok = sp.get("ok");
    const error = sp.get("error");

    if (ok) {
      setMsg(":white_check_mark: Email verified successfully. Redirecting to login...");
      setTimeout(() => router.replace("/login"), 1200);
      return;
    }

    if (error) {
      setMsg(":x: Verification failed. Please request a new verification email.");
      return;
    }

    setMsg(":envelope_with_arrow: Please check your email and click the verification link.");
  }, [sp, router]);

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold text-slate-900">Verify your email</h1>
      <p className="mt-3 text-slate-700">{msg}</p>
    </div>
  );
}