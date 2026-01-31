import Link from "next/link";

export default function Terms() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-gray-700">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">JOTIK – Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>

      <p className="mb-6">
        Welcome to <strong>JOTIK</strong>. By using our service, you agree to these Terms. Please read them carefully.
      </p>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">1. What JOTIK Does</h2>
        <p className="mb-3">JOTIK is a SaaS tool that connects to your <strong>TikTok Ads</strong> account to:</p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Read advertising campaign data</li>
          <li>Display analytics and performance information</li>
          <li>Allow you to manually pause campaigns from within JOTIK</li>
        </ul>
        <p>JOTIK does <strong>not</strong> create ads, modify budgets automatically, or guarantee ad performance.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">2. Acceptance of Terms</h2>
        <p className="mb-3">By creating an account or using JOTIK, you confirm that:</p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>You are at least 18 years old</li>
          <li>You have the legal authority to manage the TikTok Ads account you connect</li>
          <li>You agree to follow these Terms and all applicable laws</li>
        </ul>
        <p>If you do not agree, do not use the service.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">3. Your Account</h2>
        <p className="mb-3">You are responsible for:</p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Keeping your login credentials secure</li>
          <li>All activity that happens under your account</li>
          <li>Ensuring your TikTok Ads permissions are valid</li>
        </ul>
        <p>You must notify us immediately if you suspect unauthorized access.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Connection to TikTok Ads</h2>
        <p className="mb-3">When you connect your TikTok Ads account:</p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>You authorize JOTIK to access ad data through official APIs</li>
          <li>JOTIK can read campaign information and send pause commands when you choose</li>
          <li>JOTIK acts only on <strong>your manual actions</strong></li>
        </ul>
        <p className="mb-3">We are not responsible for:</p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>API outages</li>
          <li>TikTok platform changes</li>
          <li>Data delays or inaccuracies coming from TikTok</li>
        </ul>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">5. Your Responsibilities</h2>
        <p className="mb-3">You agree that you will <strong>not</strong>:</p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Use JOTIK for illegal, fraudulent, or misleading advertising</li>
          <li>Attempt to reverse engineer, hack, or disrupt the service</li>
          <li>Use the service in a way that violates TikTok’s policies</li>
        </ul>
        <p>You remain fully responsible for your ad content and compliance.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">6. Data & Privacy</h2>
        <p className="mb-3">JOTIK may process:</p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Campaign performance data</li>
          <li>Account identifiers</li>
          <li>Usage logs</li>
        </ul>
        <p className="mb-3">We do <strong>not</strong> sell your data. We only use your data to operate and improve the service.</p>
        <p>See our <Link href="/privacy" className="text-gray-900 font-medium underline hover:no-underline">Privacy Policy</Link> for full details.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">7. Service Availability</h2>
        <p className="mb-3">We aim for reliable uptime but do not guarantee uninterrupted service. JOTIK may be temporarily unavailable due to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Maintenance</li>
          <li>Server issues</li>
          <li>Third-party API failures</li>
        </ul>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">8. Payments (If Applicable)</h2>
        <p className="mb-3">If JOTIK offers paid plans:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Fees are billed in advance</li>
          <li>Payments are non-refundable unless required by law</li>
          <li>Failure to pay may result in account suspension</li>
        </ul>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">9. Intellectual Property</h2>
        <p className="mb-3">All software, branding, and technology behind JOTIK belong to us.</p>
        <p>You receive a limited, non-exclusive right to use the service — not ownership.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">10. Suspension or Termination</h2>
        <p className="mb-3">We may suspend or terminate accounts that:</p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Violate these Terms</li>
          <li>Abuse the system</li>
          <li>Pose security risks</li>
        </ul>
        <p>You may stop using JOTIK at any time.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">11. Disclaimer</h2>
        <p className="mb-3">JOTIK is provided <strong>“as is.”</strong> We do not guarantee:</p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Ad performance</li>
          <li>Revenue results</li>
          <li>Platform compatibility at all times</li>
        </ul>
        <p>You use the service at your own risk.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">12. Limitation of Liability</h2>
        <p className="mb-3">To the maximum extent allowed by law, JOTIK is not liable for:</p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Lost profits</li>
          <li>Advertising losses</li>
          <li>Data issues from third-party platforms</li>
        </ul>
        <p>Our total liability is limited to the amount you paid us in the last 3 months.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">13. Changes to Terms</h2>
        <p>We may update these Terms. Continued use of JOTIK after updates means you accept the changes.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">14. Contact</h2>
        <p>For questions, contact us at: <strong>tradedjamel@gmail.com</strong></p>
      </section>
    </main>
  );
}
