"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ConfirmedPage() {
  const router = useRouter();
  const [sec, setSec] = useState(3);

  useEffect(() => {
    const i = setInterval(() => setSec((s) => (s > 1 ? s - 1 : 1)), 1000);
    const t = setTimeout(() => router.replace("/dashboard"), 3000);
    return () => {
      clearInterval(i);
      clearTimeout(t);
    };
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 flex items-center justify-center text-white text-lg">
            ✓
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">JOTIK</div>
            <div className="text-xs text-slate-500">Email confirmed</div>
          </div>
        </div>

        <h1 className="mt-6 text-2xl font-bold text-slate-900">
          Email verified successfully :white_check_mark:
        </h1>
        <p className="mt-2 text-slate-700">
          Redirecting you to your dashboard in <span className="font-semibold">{sec}</span> seconds.
        </p>

        <div className="mt-6 grid gap-3">
          <Link
            href="/dashboard"
            className="w-full rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 py-3 text-center font-semibold text-white"
          >
            Go now
          </Link>

          <Link
            href="/login"
            className="w-full rounded-xl border border-slate-200 bg-white py-3 text-center font-semibold text-slate-900 hover:bg-slate-50"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </main>
  );
}