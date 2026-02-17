"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function VerifyEmailPage() {
  const supabase = createSupabaseBrowserClient();
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [message, setMessage] = useState("");

  const resendEmail = async () => {
    setLoading(true);
    setMessage("");

    const { data } = await supabase.auth.getUser();
    const email = data.user?.email;

    if (!email) {
      setMessage("Unable to detect your email.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/confirmed`,
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setMessage("Verification email sent successfully :white_check_mark:");
    setCooldown(30);

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">
          Confirm your email
        </h1>

        <p className="mt-2 text-slate-700">
          We’ve sent a verification link to your email address. Please check your inbox.
        </p>

        {message && (
          <div className="mt-4 rounded-xl bg-green-50 p-3 text-sm text-green-700">
            {message}
          </div>
        )}

        <button
          onClick={resendEmail}
          disabled={loading || cooldown > 0}
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 py-3 font-semibold text-white disabled:opacity-50"
        >
          {cooldown > 0
            ? `Resend in ${cooldown}s`
            : loading
            ? "Sending..."
            : "Resend verification email"}
        </button>
      </div>
    </main>
  );
}