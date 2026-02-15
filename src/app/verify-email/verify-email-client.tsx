"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyEmailClient() {
  const sp = useSearchParams();
  const router = useRouter();
  const [msg, setMsg] = useState("Checking...");

  useEffect(() => {
    const ok = sp.get("ok");
    const error = sp.get("error");

    if (ok === "1" || ok === "true") {
      setMsg(":white_check_mark: Email verified successfully. Redirecting to login...");
      const t = setTimeout(() => router.replace("/login"), 1200);
      return () => clearTimeout(t);
    }

    if (error === "1" || error === "true") {
      setMsg(":x: Verification failed. Please request a new verification email.");
      return;
    }

    setMsg(" Email verified successfully.");
  }, [sp, router]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Verify your email</h1>
        <p className="mt-3 text-slate-700">{msg}</p>

        <div className="mt-6 text-sm text-slate-600">
          now you can go to {" "}
          <button
            className="font-semibold text-blue-600 hover:text-blue-700"
            onClick={() => router.replace("/login")}
          >
            Login
          </button>
          .
        </div>
      </div>
    </div>
  );
}