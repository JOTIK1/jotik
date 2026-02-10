"use client";

import { createSupabaseClient } from "../../../lib/supabaseClient";
import { useState } from "react";
import AuthCard from "../../app/components/AuthCard";
import { Mail, Lock, User, Tag } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BrandLogo from "../../app/components/brand-logo";

export default function SignupClient() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referral, setReferral] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldError, setFieldError] = useState<{
    username?: boolean;
    email?: boolean;
    password?: boolean;
    invite?: boolean;
  }>({});

  const router = useRouter();
  const supabase = createSupabaseClient();
 

  const onRegister = async () => {
    const username = fullName.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();
    const invite = referral.trim();
  
    setFormError(null);
    setFieldError({});
    setLoading(true);
  
    // validations
    if (!username) {
      setFieldError({ username: true });
      setFormError("الاسم ضروري.");
      setLoading(false);
      return;
    }
    if (!cleanEmail) {
      setFieldError({ email: true });
      setFormError("الإيميل ضروري.");
      setLoading(false);
      return;
    }
    if (!cleanPassword) {
      setFieldError({ password: true });
      setFormError("كلمة السر ضرورية.");
      setLoading(false);
      return;
    }
  
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 15000); // 15s timeout
  
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({ email: cleanEmail, password: cleanPassword, username, invite }),
      });
  
      let data: any = null;
      try { data = await res.json(); } catch {}
  
      // لو السيرفر يرجّع ok:false لكنه 200
      if (!res.ok || data?.ok === false) {
        const msg = data?.message || "Signup فشل. شوف السيرفر.";
        setFormError(msg);
  
        const field = data?.field;
        if (field === "username") setFieldError({ username: true });
        else if (field === "invite") setFieldError({ invite: true });
        else if (field === "email") setFieldError({ email: true });
        else if (field === "password") setFieldError({ password: true });
  
        return;
      }
  
      const { error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password: cleanPassword,
      });
  
      if (error) {
        setFormError(error.message);
        setFieldError({ email: true, password: true });
        return;
      }
  
      router.push("/login");
    } catch (e: any) {
      if (e?.name === "AbortError") {
        setFormError("الطلب علّق أكثر من 15 ثانية: /api/signup ما يردّش.");
      } else {
        setFormError(e?.message || "خطأ غير معروف.");
      }
    } finally {
      clearTimeout(t);
      setLoading(false);
    }
  };

  const inputClass = (bad?: boolean) =>
    `w-full rounded-xl border bg-white px-10 py-3 text-slate-900 outline-none transition
     ${bad ? "border-red-400 ring-4 ring-red-100" : "border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"}`;

  return (
    <AuthCard title="Create your account" subtitle="Start tracking your TikTok campaigns today">
      <BrandLogo />

      <h1 className="text-center text-2xl font-bold text-slate-900">Create your account</h1>
      <p className="mt-2 text-center text-sm text-slate-600">
        Start tracking your TikTok campaigns today
      </p>

      {formError && (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {formError}
        </div>
      )}

      <div className="mt-8 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              className={inputClass(fieldError.username)}
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              className={inputClass(fieldError.email)}
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="password"
              className={inputClass(fieldError.password)}
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Referral Code <span className="text-slate-400">(optional)</span>
          </label>
          <div className="relative">
            <Tag className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              className={inputClass(fieldError.invite)}
              placeholder="Enter referral code if you have one"
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
            />
          </div>
        </div>

        <p className="pt-2 text-center text-xs text-slate-600">
          By creating an account, you agree to our{" "}
          <Link className="font-medium text-blue-600 hover:text-blue-700" href="/terms">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="font-medium text-blue-600 hover:text-blue-700" href="/privacy">
            Privacy Policy
          </Link>
          .
        </p>

        <button
          onClick={onRegister}
          disabled={loading}
          className="mt-2 w-full rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 py-3 font-semibold text-white shadow-lg transition hover:brightness-110 disabled:opacity-60"
        >
          {loading ? "Creating..." : "Create Account"}
        </button>

        <div className="mt-4 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link className="font-semibold text-blue-600 hover:text-blue-700" href="/login">
            Login
          </Link>
        </div>
      </div>
    </AuthCard>
  );
}
