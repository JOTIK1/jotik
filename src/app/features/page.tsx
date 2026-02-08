import SiteNavbar from "@/app/components/site-navbar";
import SiteFooter from "@/app/components/site-footer";
import { Activity, PauseCircle, Users, Shield, FileText, CheckCircle2 } from "lucide-react";

function FeatureHighlight() {
  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-medium text-slate-500">Feature Highlight</p>
      <div className="mt-4 space-y-3">
        <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-blue-700 to-cyan-600" />
        <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 opacity-80" />
        <div className="h-2 w-[60%] rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 opacity-70" />
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <span>Live</span>
        <span className="inline-flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Active
        </span>
      </div>
    </div>
  );
}

function Row({
  icon,
  title,
  desc,
  bullets,
  flip,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bullets: string[];
  flip?: boolean;
}) {
  return (
    <div className={`grid items-center gap-10 md:grid-cols-2 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div>
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
          {icon}
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">{title}</h3>
        <p className="mt-3 text-slate-600">{desc}</p>
        <ul className="mt-5 space-y-2 text-sm text-slate-600">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <FeatureHighlight />
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <SiteNavbar />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Powerful Features for{" "}
          <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
            TikTok Advertisers
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Everything you need to track, monitor, and control your TikTok ad campaigns from one simple dashboard.
        </p>

        <div className="mt-14 space-y-16">
          <Row
            icon={<Activity className="h-6 w-6" />}
            title="Real-Time Campaign Tracking"
            desc="Monitor spend, CPA, and conversions in near real-time using official TikTok Marketing API data."
            bullets={[
              "Live performance metrics",
              "Automatic data refresh",
              "Mobile-friendly dashboard",
            ]}
          />

          <Row
            flip
            icon={<PauseCircle className="h-6 w-6" />}
            title="One-Click Campaign Pause"
            desc="Pause underperforming campaigns instantly to protect your ad budget."
            bullets={[
              "Instant campaign control",
              "Reduce unnecessary spend",
              "Fast decision-making",
            ]}
          />

          <Row
            icon={<Users className="h-6 w-6" />}
            title="Multi-Account Support"
            desc="Manage multiple TikTok ad accounts from one centralized dashboard."
            bullets={[
              "Switch between accounts easily",
              "Consolidated performance view",
              "Agency-friendly setup",
            ]}
          />

          <Row
            flip
            icon={<Shield className="h-6 w-6" />}
            title="Secure OAuth Connection"
            desc="Connect your TikTok Ads account securely via OAuth."
            bullets={[
              "We never store your TikTok credentials",
              "Official authentication flow",
              "Access can be revoked anytime",
            ]}
          />

          <Row
            icon={<FileText className="h-6 w-6" />}
            title="Reporting Overview"
            desc="View consolidated reports and export data for analysis."
            bullets={[
              "Campaign-level insights",
              "Export to CSV",
              "Historical performance view",
            ]}
          />
        </div>

        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-600 shadow-sm">
          JOTIK is an independent SaaS tool and is not affiliated with or endorsed by TikTok or ByteDance Ltd.
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
