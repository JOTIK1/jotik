"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function VerifyEmailPage() {
  const sp = useSearchParams();
  const email = sp.get("email");
  const error = sp.get("error");

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold text-slate-900">Verify your email</h1>

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          Error: {error}
        </div>
      )}

      <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4 text-slate-700">
        <p>
          We sent a verification link to{" "}
          <span className="font-semibold">{email || "your email"}</span>.
        </p>
        <p className="mt-2">
          Open your inbox and click <b>Verify Email</b> to activate your account.
        </p>
      </div>

      <div className="mt-6 flex gap-3">
        <Link
          href="/login"
          className="rounded-lg bg-slate-900 px-4 py-2 text-white"
        >
          Go to Login
        </Link>
        <Link
          href="/signup"
          className="rounded-lg border border-slate-300 px-4 py-2 text-slate-800"
        >
          Back to Signup
        </Link>
      </div>
    </div>
  );
}