import React from "react";

export default function AuthCard({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.14),transparent_60%)]">
      <div className="mx-auto flex min-h-screen max-w-[1100px] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-8 shadow-xl backdrop-blur">
            {children}
            {footer ? <div className="mt-6 text-center text-sm text-slate-600">{footer}</div> : null}
          </div>

          <div className="mt-6 flex items-center justify-center gap-5 text-xs text-slate-500">
            <a className="hover:text-slate-700" href="/">Home</a>
            <span>•</span>
            <a className="hover:text-slate-700" href="/terms">Terms</a>
            <span>•</span>
            <a className="hover:text-slate-700" href="/privacy">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
