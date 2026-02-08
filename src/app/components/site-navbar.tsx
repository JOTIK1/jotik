"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap } from "lucide-react";

const nav = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/login", label: "Login" },
];

export default function SiteNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-600 shadow-lg shadow-blue-500/20">
            <Zap className="h-5 w-5 text-white" strokeWidth={2.5} fill="currentColor" />
          </span>
          <span className="font-bold tracking-tight text-slate-900">JOTIK</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          {nav.map((i) => {
            const active = pathname === i.href;
            return (
              <Link
                key={i.href}
                href={i.href}
                className={`hover:text-slate-900 ${
                  active ? "text-slate-900" : ""
                }`}
              >
                {i.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/signup"
            className="rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:opacity-95"
          >
            Start Now
          </Link>
        </div>
      </div>
    </header>
  );
}
