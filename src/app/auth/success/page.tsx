"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AuthSuccessPage() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") || "/dashboard";

  const [sec, setSec] = useState(5);

  useEffect(() => {
    const t = setInterval(() => setSec((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (sec <= 0) router.push(next);
  }, [sec, next, router]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold">
          ⚡
        </div>
        <h1 className="text-2xl font-bold text-slate-900">تم تسجيل الدخول بنجاح ✅</h1>
        <p className="mt-2 text-slate-600">
          سيتم توجيهك إلى صفحة العمل بعد <span className="font-bold">{sec}</span> ثواني
        </p>

        <div className="mt-6 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-700 to-cyan-600 transition-all"
            style={{ width: `${(sec / 5) * 100}%` }}
          />
        </div>

        <button
          onClick={() => router.push(next)}
          className="mt-6 w-full rounded-xl bg-slate-900 py-3 font-semibold text-white hover:opacity-90"
        >
          الذهاب الآن
        </button>
      </div>
    </main>
  );
}
