"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";

export default function VerifyEmailClient() {
  const sp = useSearchParams();
  const router = useRouter();

  const state = useMemo(() => {
    const ok = sp.get("ok");
    const err = sp.get("error");

    if (ok) return { type: "ok" as const, msg: ":white_check_mark: Email verified successfully. You can login now." };
    if (err) return { type: "err" as const, msg: ":x: Verification failed. Please request a new email." };
    return { type: "info" as const, msg: "Checking verification status..." };
  }, [sp]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Verify your email</h1>

        <div
          className={`mt-4 rounded-xl p-3 text-sm ${
            state.type === "ok"
              ? "bg-green-50 text-green-800 border border-green-200"
              : state.type === "err"
              ? "bg-red-50 text-red-800 border border-red-200"
              : "bg-slate-50 text-slate-700 border border-slate-200"
          }`}
        >
          {state.msg}
        </div>

        <button
          onClick={() => router.replace("/login")}
          className="mt-5 w-full rounded-xl bg-blue-600 px-4 py-3 text-white font-semibold hover:bg-blue-700"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}