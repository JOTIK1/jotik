"use client";

import { createSupabaseClient } from "../../../lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthCard from "../../app/components/AuthCard";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";
import BrandLogo from "../../app/components/brand-logo";

export default function LoginClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createSupabaseClient();


  const onLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <AuthCard title="Welcome back" subtitle="Sign in to your account to continue">
      <BrandLogo />

      <h1 className="text-center text-2xl font-bold text-slate-900">Welcome back</h1>
      <p className="mt-2 text-center text-sm text-slate-600">
        Sign in to your account to continue
      </p>

      <div className="mt-8 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              className="w-full rounded-xl border border-slate-200 bg-white px-10 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
              Forgot password?
            </button>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="password"
              className="w-full rounded-xl border border-slate-200 bg-white px-10 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={onLogin}
          className="mt-2 w-full rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 py-3 font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-[0.99]"
        >
          Login
        </button>

        <div className="pt-3">
          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-500">or</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <Link
            href="/signup"
            className="block w-full rounded-xl border border-slate-200 bg-white py-3 text-center font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            Create account
          </Link>
        </div>
      </div>
    </AuthCard>
  );
}
