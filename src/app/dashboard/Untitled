import Link from "next/link";
import {
  AlertCircle,
  Clock,
  ShieldCheck,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Top bar */}
      <div className="border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 shadow-sm">
              <ShieldCheck className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900">JOTIK</div>
              <div className="text-xs text-slate-500">Dashboard</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Log out
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Dashboard
          </h1>
          <p className="max-w-2xl text-slate-600">
            Your workspace for tracking performance and controlling campaigns — all in one place.
          </p>
        </div>

        {/* Main notice card */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-4">
              <div className="mt-0.5 grid h-11 w-11 place-items-center rounded-xl bg-blue-50">
                <AlertCircle className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  We’re currently under development & review
                </h2>
                <p className="mt-2 max-w-2xl text-slate-600">
                  JOTIK is still being developed and is currently under review by TikTok to obtain
                  the required API permissions. Some features may be unavailable for now.
                </p>

                <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
                  <div className="flex items-center gap-2 font-semibold text-slate-900">
                    <Clock className="h-4 w-4" />
                    Please wait for approval
                  </div>
                  <p className="mt-1 text-slate-600">
                    Thank you for your patience — we’ll enable full functionality as soon as access is granted.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:min-w-[240px]">
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:opacity-95"
              >
                How it works <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="mailto:support@jotik.online"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Contact support <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Placeholder cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <PlaceholderCard
            title="Campaign Overview"
            desc="Metrics will appear here once TikTok API access is approved."
          />
          <PlaceholderCard
            title="Accounts"
            desc="Connect and select ad accounts after OAuth is enabled."
          />
          <PlaceholderCard
            title="Controls"
            desc="Pause and manage campaigns once permissions are granted."
          />
        </div>

        {/* Compliance note */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
          <div className="font-semibold text-slate-900">Important note</div>
          <p className="mt-2">
            JOTIK is an independent SaaS tool and is not affiliated with, endorsed by, or connected
            to TikTok or ByteDance Ltd. TikTok is a registered trademark of ByteDance Ltd.
          </p>
        </div>
      </div>
    </main>
  );
}

function PlaceholderCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{desc}</div>

      <div className="mt-5 space-y-3">
        <div className="h-3 w-3/4 rounded-full bg-slate-100" />
        <div className="h-3 w-2/3 rounded-full bg-slate-100" />
        <div className="h-3 w-1/2 rounded-full bg-slate-100" />
      </div>
    </div>
  );
}
