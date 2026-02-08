import SiteNavbar from "@/app/components/site-navbar";
import SiteFooter from "@/app/components/site-footer";
import Link from "next/link";
import { Target, Users, Bolt, Shield, Lock, ShieldCheck } from "lucide-react";

function Card({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <SiteNavbar />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          About{" "}
          <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
            JOTIK
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
          JOTIK is a marketing technology SaaS tool built to help TikTok advertisers monitor performance and control ad spend
          with clarity and speed.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card
            icon={<Target className="h-6 w-6" />}
            title="Our Mission"
            desc="To simplify TikTok ads management by providing real-time visibility and instant control without unnecessary complexity."
          />
          <Card
            icon={<Users className="h-6 w-6" />}
            title="Who We Help"
            desc="Performance marketers, eCommerce brands, and agencies who need clear insights and fast actions."
          />
          <Card
            icon={<Bolt className="h-6 w-6" />}
            title="Why JOTIK Exists"
            desc="Many advertisers struggle with delayed data and complex ad managers. JOTIK provides a focused and efficient alternative."
          />
        </div>

        <h2 className="mt-16 text-center text-3xl font-bold tracking-tight text-slate-900">Trust & Security</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card
            icon={<Shield className="h-6 w-6" />}
            title="Independent SaaS"
            desc="JOTIK is an independent software service and is not affiliated with TikTok or ByteDance Ltd."
          />
          <Card
            icon={<Lock className="h-6 w-6" />}
            title="Secure Data Handling"
            desc="We use secure connections and OAuth for integrations. We never store TikTok login credentials."
          />
          <Card
            icon={<ShieldCheck className="h-6 w-6" />}
            title="User-Controlled Access"
            desc="You control what you connect. Access can be revoked at any time through TikTok settings."
          />
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-14 text-center text-white shadow-2xl shadow-blue-500/25">
          <h3 className="text-3xl font-extrabold tracking-tight">Ready to simplify your TikTok ads?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">
            Monitor performance, track spending, and stay in control from your dashboard.
          </p>
          <Link
            href="/signup"
            className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:opacity-95"
          >
            Get Started
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
