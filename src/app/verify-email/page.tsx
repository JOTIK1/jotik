"use client";

import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

export default function VerifyEmailPage() {
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const resend = async () => {
    setMsg(null);
    setLoading(true);

    const { data } = await supabase.auth.getUser();
    const email = data?.user?.email;

    if (!email) {
      setLoading(false);
      setMsg("Please log in first.");
      return;
    }

    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
    });

    setLoading(false);
    setMsg(error ? error.message : ":white_check_mark: Verification email sent. Check your inbox.");
  };

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold text-slate-900">Verify your email</h1>
      <p className="mt-2 text-slate-600">
        Please confirm your email to access the dashboard.
      </p>

      <button
        onClick={resend}
        disabled={loading}
        className="mt-5 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white disabled:opacity-60"
      >
        {loading ? "Sending..." : "Resend verification email"}
      </button>

      {msg && <p className="mt-4 text-sm text-slate-700">{msg}</p>}

      <div className="mt-6 text-sm">
        <Link className="text-blue-600 hover:underline" href="/login">
          Back to login
        </Link>
      </div>
    </div>
  );
}