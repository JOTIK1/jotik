"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSend = async () => {
    setMsg(null);
    setLoading(true);

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;
    const redirectTo = `${siteUrl}/reset-password`;

    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo,
    });

    setLoading(false);

    if (error) setMsg(error.message);
    else setMsg("✅ Password reset link sent. Check your email.");
  };

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold text-slate-900">Forgot password</h1>
      <p className="mt-2 text-sm text-slate-600">
        Enter your email and we will send you a reset link.
      </p>

      <input
        className="mt-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={onSend}
        disabled={loading}
        className="mt-4 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send reset link"}
      </button>

      {msg && <p className="mt-4 text-sm text-slate-700">{msg}</p>}

      <div className="mt-6 text-sm">
        <Link className="text-blue-600 hover:text-blue-700" href="/login">
          Back to login
        </Link>
      </div>
    </div>
  );
}