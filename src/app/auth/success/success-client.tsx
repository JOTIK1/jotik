"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status") || "success";
  const message = searchParams.get("message") || "";

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-lg rounded-3xl bg-white shadow-lg border border-slate-200 p-8 text-center">
        <h1 className="text-2xl font-bold text-slate-900">
          {status === "success" ? "Connected successfully" : "Connection status"}
        </h1>

        <p className="mt-3 text-slate-600">
          {message || "Your TikTok Ads account connection is being verified. Please wait."}
        </p>

        <div className="mt-6 flex gap-3 justify-center">
          <Link
            href="/dashboard"
            className="rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-2.5 text-white font-medium shadow-md"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/"
            className="rounded-full border border-slate-200 px-6 py-2.5 text-slate-700 font-medium hover:bg-slate-50"
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
