import SiteNavbar from "@/app/components/site-navbar";
import SiteFooter from "@/app/components/site-footer";
import { UserPlus, Link2, LayoutGrid, BarChart3, PauseCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    n: 1,
    icon: <UserPlus className="h-5 w-5 text-blue-700" />,
    title: "Create your account",
    desc: "Sign up using your email address. No credit card required to get started.",
  },
  {
    n: 2,
    icon: <Link2 className="h-5 w-5 text-blue-700" />,
    title: "Connect your TikTok Ads account",
    desc: "Securely connect using TikTok OAuth. We never store your login credentials.",
  },
  {
    n: 3,
    icon: <LayoutGrid className="h-5 w-5 text-blue-700" />,
    title: "Select your ad account",
    desc: "Choose which TikTok ad accounts you want to monitor and manage.",
  },
  {
    n: 4,
    icon: <BarChart3 className="h-5 w-5 text-blue-700" />,
    title: "View performance metrics",
    desc: "See spend, CPA, conversions, and campaign status in one dashboard.",
  },
  {
    n: 5,
    icon: <PauseCircle className="h-5 w-5 text-blue-700" />,
    title: "Pause campaigns when needed",
    desc: "Pause campaigns instantly if performance drops to avoid unnecessary spend.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <SiteNavbar />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          How{" "}
          <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
            JOTIK
          </span>{" "}
          Works
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Get started in minutes. Track your campaigns. Take action when it matters.
        </p>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative space-y-6">
            {/* line */}
            <div className="absolute left-6 top-0 h-full w-px bg-slate-200" />

            {steps.map((s) => (
              <div key={s.n} className="relative flex gap-6">
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-600 shadow-lg shadow-blue-500/20">
                    <span className="text-white">{s.icon}</span>
                  </div>
                  <div className="-mt-2 flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-700">
                    {s.n}
                  </div>
                </div>

                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
              <CheckCircle2 className="h-7 w-7 text-emerald-600" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-slate-900">You are all set!</h3>
            <p className="mx-auto mt-2 max-w-2xl text-slate-600">
              Now you can monitor your campaigns, track performance, and pause underperforming ads instantly.
            </p>

            <Link
              href="/signup"
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:opacity-95"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
