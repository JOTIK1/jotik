import SiteNavbar from "@/app/components/site-navbar";
import SiteFooter from "@/app/components/site-footer";
import Link from "next/link";
import { CheckCircle2, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    desc: "Try JOTIK with basic tracking.",
    features: [
      "Connect 1 ad account",
      "Core performance metrics (spend, CPA, conversions)",
      "Manual refresh",
      "Basic support",
    ],
    cta: "Start Free",
    href: "/signup",
    popular: false,
  },
  {
    name: "Pro",
    price: "$20",
    period: "/month",
    desc: "Best for performance marketers who need fast control.",
    features: [
      "Connect up to 5 ad accounts",
      "Real-time dashboard (near real-time via API)",
      "One-click campaign pause",
      "Export reporting (CSV)",
      "Priority support",
    ],
    cta: "Start Pro",
    href: "/signup",
    popular: true,
  },
  {
    name: "Agency",
    price: "$49",
    period: "/month",
    desc: "For agencies managing multiple brands and accounts.",
    features: [
      "Connect up to 20 ad accounts",
      "Multi-account overview",
      "Advanced reporting & history",
      "Team access (coming soon)",
      "Dedicated support",
    ],
    cta: "Start Agency",
    href: "/signup",
    popular: false,
  },
];

function TierCard({
  tier,
}: {
  tier: (typeof tiers)[number];
}) {
  return (
    <div
      className={`relative rounded-3xl border bg-white p-8 shadow-sm ${
        tier.popular
          ? "border-blue-200 shadow-lg shadow-blue-500/15"
          : "border-slate-200"
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-blue-500/25">
            <Sparkles className="h-3.5 w-3.5" />
            Most Popular
          </span>
        </div>
      )}

      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
          {tier.name}
        </h3>
      </div>

      <p className="mt-2 text-sm text-slate-600">{tier.desc}</p>

      <div className="mt-6 flex items-end gap-2">
        <span className="text-4xl font-extrabold tracking-tight text-slate-900">
          {tier.price}
        </span>
        <span className="pb-1 text-sm text-slate-500">{tier.period}</span>
      </div>

      <ul className="mt-6 space-y-3 text-sm text-slate-700">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={tier.href}
        className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
          tier.popular
            ? "bg-gradient-to-r from-blue-700 to-cyan-600 text-white shadow-lg shadow-blue-500/25 hover:opacity-95"
            : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
        }`}
      >
        {tier.cta}
      </Link>

      <p className="mt-4 text-center text-xs text-slate-500">
        Cancel anytime. No TikTok credentials stored.
      </p>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <SiteNavbar />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Simple pricing for{" "}
          <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
            serious advertisers
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Start free, then upgrade when you need more accounts and faster control.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <TierCard key={t.name} tier={t} />
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-600 shadow-sm">
          JOTIK uses the official TikTok OAuth + Marketing API. We request only
          the minimum scopes needed and you can revoke access anytime.
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-14 max-w-4xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
            FAQ
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-semibold text-slate-900">
                Do you store my TikTok password?
              </p>
              <p className="mt-2 text-sm text-slate-600">
                No. Authentication is done through TikTok OAuth. JOTIK never
                stores your TikTok login credentials.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-semibold text-slate-900">
                Can I revoke access anytime?
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Yes. You can revoke JOTIK access from your TikTok settings at any
                time.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-semibold text-slate-900">
                Is JOTIK affiliated with TikTok?
              </p>
              <p className="mt-2 text-sm text-slate-600">
                No. JOTIK is an independent SaaS tool and is not affiliated with
                or endorsed by TikTok or ByteDance Ltd.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-semibold text-slate-900">
                Can I cancel anytime?
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Yes. You can cancel your subscription at any time from your
                account settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
