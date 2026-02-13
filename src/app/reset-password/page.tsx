"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onUpdate = async () => {
    setMsg(null);
    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: password.trim(),
    });

    setLoading(false);

    if (error) setMsg(error.message);
    else {
      setMsg("✅ Password updated. Redirecting to login...");
      setTimeout(() => router.push("/login"), 1200);
    }
  };

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold text-slate-900">Reset password</h1>
      <p className="mt-2 text-sm text-slate-600">
        Enter your new password.
      </p>

      <input
        type="password"
        className="mt-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
        placeholder="New password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={onUpdate}
        disabled={loading}
        className="mt-4 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? "Saving..." : "Update password"}
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