import Link from "next/link";
import {
  BarChart3,
  Bolt,
  CheckCircle2,
  Gauge,
  LineChart,
  Lock,
  PauseCircle,
  ShoppingCart,
  Target,
  Zap,
} from "lucide-react";
import BrandLogo from "@/app/components/brand-logo";
import Footer from "./components/Footer";
import SiteNavbar from "./components/site-navbar";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 lg:px-8 pt-20">
      <Navbar />

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl leading-[1.05]">
              Take Full Control of
              <br />
              Your TikTok Ads{" "}
              <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                Performance
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Track spend, CPA, and conversions in real time. Pause campaigns
              instantly when performance drops — all from one simple dashboard.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/signup"
                className="rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
              >
                Start Now
              </Link>

              <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">
                  ▶
                </span>
                Watch Demo
              </button>
            </div>

            <div className="mt-10">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Built for performance marketers & eCommerce brands
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-8 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4 text-slate-500" />
                  eCommerce
                </div>
                <div className="flex items-center gap-2">
                  <LineChart className="h-4 w-4 text-slate-500" />
                  Growth
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-slate-500" />
                  Performance
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-slate-500" />
                  Marketing
                </div>
              </div>
            </div>
          </div>

          {/* Right mock dashboard */}
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-blue-100/60 to-cyan-100/60 blur-2xl" />
            <DashboardMock />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900">
          Everything you need to manage{" "}
          <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
            TikTok Ads smarter
          </span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<Gauge className="h-5 w-5 text-blue-700" />}
            title="Performance Tracking"
            desc="Monitor spend, CPA, and conversions live with real-time data updates."
          />
          <FeatureCard
            icon={<PauseCircle className="h-5 w-5 text-blue-700" />}
            title="Instant Pause Control"
            desc="Stop losing money with one click. Take action before it is too late."
          />
          <FeatureCard
            icon={<BarChart3 className="h-5 w-5 text-blue-700" />}
            title="Clean Dashboard"
            desc="No complexity. Just what matters. See everything at a glance."
          />

          <FeatureCard
            icon={<Bolt className="h-5 w-5 text-blue-700" />}
            title="Real-Time Updates"
            desc="Data refreshed continuously so you always have the latest insights."
          />
          <FeatureCard
            icon={<Lock className="h-5 w-5 text-blue-700" />}
            title="Safe & Secure"
            desc="Enterprise-grade security with encrypted connections to TikTok."
          />
          <FeatureCard
            icon={<Zap className="h-5 w-5 text-blue-700" />}
            title="Lightning Fast"
            desc="Optimized for speed. Make decisions in milliseconds, not minutes."
          />
        </div>
      </section>

      {/* STEPS */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <h3 className="text-center text-3xl font-extrabold tracking-tight text-slate-900">
          Start in{" "}
          <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
            3 simple steps
          </span>
        </h3>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <StepCard
            n={1}
            title="Create your account"
            desc="Sign up in seconds. No credit card required to get started."
          />
          <StepCard
            n={2}
            title="Connect TikTok Ads"
            desc="Securely link your TikTok Ads account with one simple click."
          />
          <StepCard
            n={3}
            title="Monitor & control campaigns"
            desc="Track performance and pause campaigns instantly from your dashboard."
          />
        </div>
      </section>

      {/* DASHBOARD CLARITY */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-blue-100/60 to-cyan-100/60 blur-2xl" />
            <MetricsMock />
          </div>

          <div>
            <h3 className="text-4xl font-extrabold tracking-tight text-slate-900">
              A dashboard designed for{" "}
              <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                clarity
              </span>
            </h3>
            <p className="mt-4 max-w-xl text-slate-600">
              See your key metrics instantly without digging through complicated
              ad manager interfaces. Everything you need, nothing you don’t.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-700" />
                Real-time performance data
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-700" />
                Customizable metric views
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-700" />
                One-click campaign controls
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-700" />
                Export reports instantly
              </li>
            </ul>

            <Link
              href="/signup"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
            >
              Start Now
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <h3 className="text-4xl font-extrabold tracking-tight text-slate-900">
          Why top marketers choose{" "}
          <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
            JOTIK
          </span>
        </h3>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <WhyItem
              icon={<span className="text-blue-700">$</span>}
              title="Save ad spend"
              desc="Stop campaigns before they drain your budget"
            />
            <WhyItem
              icon={<span className="text-blue-700">↘</span>}
              title="Spot performance drops instantly"
              desc="Get alerted the moment metrics fall below target"
            />
            <WhyItem
              icon={<Zap className="h-5 w-5 text-blue-700" />}
              title="Act faster than competitors"
              desc="Make decisions in real-time, not hours later"
            />
            <WhyItem
              icon={<CheckCircle2 className="h-5 w-5 text-blue-700" />}
              title="No complex setup"
              desc="Connect and start monitoring in under 2 minutes"
            />
          </div>

          <ImpactMock />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h3 className="text-center text-4xl font-extrabold tracking-tight text-slate-900">
          Loved by{" "}
          <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
            performance marketers
          </span>
        </h3>

        <div className="mt-8 rounded-3xl bg-white/70 p-6 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.25)] ring-1 ring-slate-200/70">
          <div className="grid gap-6 md:grid-cols-3">
            <Testimonial
              quote="JOTIK helped us stop wasting ad budget. We’ve saved thousands in the first month alone."
              name="Sarah Chen"
              role="Performance Marketing Lead"
              company="GrowthBrand Co."
            />
            <Testimonial
              quote="Our CPA dropped by 35% after we started using JOTIK. The instant pause feature is a game-changer."
              name="Marcus Johnson"
              role="eCommerce Director"
              company="TrendShop"
            />
            <Testimonial
              quote="Finally, a dashboard that doesn’t overwhelm. I can see everything I need at a glance and act fast."
              name="Emily Rodriguez"
              role="Paid Ads Specialist"
              company="Digital Edge"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-600 px-8 py-14 text-white shadow-2xl">
          <h3 className="text-center text-4xl font-extrabold tracking-tight">
            Ready to take control of your
            <br />
            TikTok Ads?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/85">
            Join hundreds of performance marketers who’ve already transformed
            their ad campaigns with JOTIK.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-blue-800 shadow-lg transition hover:brightness-95"
            >
              Start Now →
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-white/55 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* -------------------- Components -------------------- */

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <BrandLogo />

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <Link href="/features" className="hover:text-slate-900">
            Features
          </Link>
          <Link href="/how-it-works" className="hover:text-slate-900">
            How it Works
          </Link>
          <Link href="/pricing" className="hover:text-slate-900">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-slate-900">
            About
          </Link>
          <Link href="/login" className="hover:text-slate-900">
            Login
          </Link>
        </nav>

        <Link
          href="/signup"
          className="rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
        >
          Start Now
        </Link>
      </div>
    </header>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl bg-white/70 p-6 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.25)] ring-1 ring-slate-200/70 backdrop-blur">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
        {icon}
      </div>
      <h4 className="mt-4 font-semibold text-slate-900">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
    </div>
  );
}

function StepCard({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="text-center">
      <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white shadow-md">
        {n}
      </div>
      <div className="mx-auto mt-5 h-12 w-12 rounded-2xl bg-white/70 p-3 shadow-sm ring-1 ring-slate-200/70">
        <span className="grid h-full w-full place-items-center text-blue-700">
          {n === 1 ? "👤" : n === 2 ? "🔗" : "📊"}
        </span>
      </div>
      <h4 className="mt-4 font-semibold text-slate-900">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
    </div>
  );
}

function WhyItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-slate-900">{title}</div>
        <div className="mt-1 text-sm text-slate-600">{desc}</div>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex gap-1 text-[13px] text-amber-400">
      {"★★★★★".split("").map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </div>
  );
}

function Testimonial({
  quote,
  name,
  role,
  company,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
      <Stars />
      <p className="mt-4 text-sm leading-6 text-slate-700">“{quote}”</p>
      <div className="mt-6 text-sm">
        <div className="font-semibold text-slate-900">{name}</div>
        <div className="text-slate-500">
          {role}
          <br />
          <span className="text-blue-700">{company}</span>
        </div>
      </div>
    </div>
  );
}

/* -------------------- Mock UI blocks -------------------- */

function DashboardMock() {
  return (
    <div className="rounded-3xl bg-white/70 p-6 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/70 backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-800">Campaign Overview</div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Live
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <MiniStat label="Total Spend" value="$2,847" sub="12% vs yesterday" />
        <MiniStat label="CPA" value="$8.42" sub="18% improvement" />
        <MiniStat label="Conversions" value="338" sub="24% increase" />
        <div className="rounded-2xl border border-slate-200/70 bg-white p-4">
          <div className="text-xs text-slate-500">Status</div>
          <div className="mt-2 text-sm font-semibold text-emerald-600">Active</div>
          <button className="mt-3 text-xs font-semibold text-blue-700 hover:underline">
            Pause Campaign
          </button>
        </div>
      </div>

      <div className="mt-6">
        <div className="grid grid-cols-7 items-end gap-2">
          {[40, 55, 45, 70, 62, 80, 75].map((h, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-lg bg-gradient-to-b from-cyan-400 to-blue-700"
                style={{ height: `${h}px` }}
              />
              <div className="text-[10px] text-slate-400">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MiniStat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-4">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-2 text-xl font-extrabold text-slate-900">{value}</div>
      <div className="mt-1 text-xs text-emerald-600">{sub}</div>
    </div>
  );
}

function MetricsMock() {
  return (
    <div className="rounded-3xl bg-white/70 p-6 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/70 backdrop-blur">
      <div className="text-sm font-semibold text-slate-800">Key Metrics</div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <MetricRow label="Ad Spend" value="$12,485" change="+8.2%" />
        <MetricRow label="ROAS" value="3.4x" change="+12.5%" />
        <MetricRow label="Reach" value="284K" change="+18.7%" />
        <MetricRow label="Impressions" value="1.2M" change="+24.1%" />
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white p-4">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>Campaign Performance</span>
          <span>87%</span>
        </div>
        <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
          <div className="h-2 w-[87%] rounded-full bg-gradient-to-r from-blue-700 to-cyan-500" />
        </div>
      </div>
    </div>
  );
}

function MetricRow({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-4">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-2 text-lg font-extrabold text-slate-900">{value}</div>
      <div className="mt-1 text-xs text-emerald-600">{change}</div>
    </div>
  );
}

function ImpactMock() {
  return (
    <div className="rounded-3xl bg-white/70 p-6 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/70 backdrop-blur">
      <div className="text-sm font-semibold text-slate-800">Performance Impact</div>

      <div className="mt-5 space-y-5">
        <Bar label="Before JOTIK" pct={45} />
        <Bar label="After JOTIK" pct={85} highlight />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">
        <div className="text-center">
          <div className="text-3xl font-extrabold text-slate-900">40%</div>
          <div className="mt-1 text-xs text-slate-500">Lower CPA</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-extrabold text-slate-900">2.5x</div>
          <div className="mt-1 text-xs text-slate-500">Better ROAS</div>
        </div>
      </div>
    </div>
  );
}

function Bar({ label, pct, highlight }: { label: string; pct: number; highlight?: boolean }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
        <div
          className={`h-2 rounded-full ${
            highlight
              ? "bg-gradient-to-r from-blue-700 to-cyan-500"
              : "bg-slate-300"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
