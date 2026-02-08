import SiteNavbar from "@/app/components/site-navbar";
import SiteFooter from "@/app/components/site-footer";

function DocShell({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-50">
      <SiteNavbar />
      <section className="mx-auto max-w-5xl px-6 py-14">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-8 text-sm leading-7 text-slate-700">{children}</div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-xs text-slate-600 shadow-sm">
          JOTIK is an independent SaaS tool and is not affiliated with or endorsed by TikTok or ByteDance Ltd.
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

export default function TermsPage() {
  return (
    <DocShell title="Terms of Service" updated="February 2, 2026">
      <div>
        <h2 className="text-base font-bold text-slate-900">1. Acceptance of Terms</h2>
        <p className="mt-3">
          By accessing or using JOTIK, you agree to be bound by these Terms of Service. If you do not agree, do not use the
          service.
        </p>
      </div>

      <div>
        <h2 className="text-base font-bold text-slate-900">2. Description of Service</h2>
        <p className="mt-3">
          JOTIK provides tools for TikTok Ads performance tracking and campaign control through a centralized dashboard.
          JOTIK connects to TikTok using the official TikTok Marketing API and OAuth authorization.
        </p>
      </div>

      <div>
        <h2 className="text-base font-bold text-slate-900">3. User Responsibilities</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>You are responsible for activities performed under your account.</li>
          <li>You must provide accurate information and keep your account secure.</li>
          <li>You agree not to misuse the service or violate applicable laws.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-base font-bold text-slate-900">4. Account Security</h2>
        <p className="mt-3">
          You are responsible for safeguarding your password and maintaining the confidentiality of your account.
        </p>
      </div>

      <div>
        <h2 className="text-base font-bold text-slate-900">5. TikTok API Usage</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>JOTIK uses the TikTok Marketing API in compliance with TikTok policies.</li>
          <li>JOTIK does not store TikTok login credentials.</li>
          <li>Users can revoke access at any time via TikTok settings.</li>
          <li>JOTIK does not influence TikTok ad delivery or ranking.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-base font-bold text-slate-900">6. Disclaimers</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>JOTIK is provided “as is” without warranties of any kind.</li>
          <li>We do not guarantee results (ROAS, CPA improvements, conversions).</li>
          <li>Service availability may vary and can be interrupted for maintenance.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-base font-bold text-slate-900">7. Termination</h2>
        <p className="mt-3">
          We may suspend or terminate accounts that violate these terms or misuse the service. You may stop using the service
          at any time.
        </p>
      </div>

      <div>
        <h2 className="text-base font-bold text-slate-900">8. Contact</h2>
        <p className="mt-3">
          For questions about these Terms, contact{" "}
          <a className="font-medium text-blue-700 hover:underline" href="mailto:support@jotik.online">
            support@jotik.online
          </a>
          .
        </p>
      </div>
    </DocShell>
  );
}
