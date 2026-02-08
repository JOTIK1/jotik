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

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
          <p className="font-semibold text-slate-900">Questions about your privacy?</p>
          <p className="mt-1">
            Contact us at{" "}
            <a className="font-medium text-blue-700 hover:underline" href="mailto:support@jotik.online">
              support@jotik.online
            </a>
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

export default function PrivacyPage() {
  return (
    <DocShell title="Privacy Policy" updated="February 2, 2026">
      <p>
        At JOTIK, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard
        your information when you use our service.
      </p>

      <div>
        <h2 className="text-base font-bold text-slate-900">1. Information We Collect</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Account Information: full name, email address, and encrypted password.</li>
          <li>
            TikTok Ads Data: campaign performance metrics (spend, CPA, conversions, status) accessed via the official TikTok
            Marketing API (with your authorization).
          </li>
          <li>Usage Data: basic logs (e.g., login time, feature usage) to improve stability and security.</li>
          <li>Technical Data: device and browser details, IP address (for security & fraud prevention).</li>
        </ul>
      </div>

      <div>
        <h2 className="text-base font-bold text-slate-900">2. How We Use Your Data</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Provide and maintain the service functionality.</li>
          <li>Display your campaign performance inside your dashboard.</li>
          <li>Account management and customer support communications.</li>
          <li>Security monitoring, abuse prevention, and troubleshooting.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-base font-bold text-slate-900">3. Data Sharing and Disclosure</h2>
        <p className="mt-3">
          We do not sell your personal data. We may share limited data only when necessary:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Service providers (hosting, analytics, payment processors) under strict agreements.</li>
          <li>Legal requirements (lawful requests, court orders, compliance).</li>
          <li>Business transfers (merger/acquisition) with notice where required.</li>
          <li>With your consent.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-base font-bold text-slate-900">4. TikTok API Data Usage Disclosure</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>JOTIK accesses TikTok Ads data only via the official TikTok Marketing API.</li>
          <li>We request only the minimum scopes needed to provide the service.</li>
          <li>We never store your TikTok login credentials.</li>
          <li>You can revoke JOTIK access at any time through TikTok settings.</li>
          <li>JOTIK is not affiliated with or endorsed by TikTok or ByteDance Ltd.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-base font-bold text-slate-900">5. Data Security Measures</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Encrypted connections (HTTPS/TLS).</li>
          <li>Secure authentication and access controls.</li>
          <li>Regular monitoring for suspicious activity.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-base font-bold text-slate-900">6. Data Retention</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Account data is retained while your account remains active.</li>
          <li>Logs may be retained for a limited period for security and troubleshooting.</li>
          <li>Upon account deletion, we remove personal data within a reasonable period unless legally required.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-base font-bold text-slate-900">7. Your Rights</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Request access, correction, or deletion of your personal data.</li>
          <li>Withdraw consent where applicable.</li>
        </ul>
      </div>
    </DocShell>
  );
}

