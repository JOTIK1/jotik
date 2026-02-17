"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function SuccessClient() {
  const sp = useSearchParams();
  const router = useRouter();
  const email = sp.get("email") || "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
            ✓
          </div>
          <div>
            <div className="text-sm text-slate-600">JOTIK</div>
            <div className="text-lg font-bold text-slate-900">Account created</div>
          </div>
        </div>

        <h1 className="mt-4 text-2xl font-bold text-slate-900">Your account is created</h1>
        <p className="mt-2 text-slate-600">
          We sent you a verification email{email ? ` to ${email}` : ""}. Please open your inbox and click
          the verification link to activate your account.
        </p>

        <button
          onClick={() => router.replace("/login")}
          className="mt-5 w-full rounded-xl bg-blue-600 px-4 py-3 text-white font-semibold hover:bg-blue-700"
        >
          Go to Login
        </button>

        <p className="mt-3 text-xs text-slate-500">
          Didn’t receive the email? Check spam/junk, or wait 1–2 minutes then try again.
        </p>
      </div>
    </div>
  );
}