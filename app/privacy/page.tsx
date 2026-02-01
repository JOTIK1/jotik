import Link from "next/link";

export default function Privacy() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-gray-700">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">JOTIK – Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6"><strong>Last Updated:</strong> 31-01-2026</p>

      <p className="mb-4">
        JOTIK (&quot;<strong>we</strong>,&quot; &quot;<strong>our</strong>,&quot; or &quot;<strong>us</strong>&quot;) provides a software-as-a-service platform that connects to the TikTok Ads API to help users monitor advertising performance and manage campaigns, including pausing active campaigns.
      </p>
      <p className="mb-8">
        Your privacy matters to us. This Privacy Policy explains how we collect, use, store, and protect your information when you use JOTIK.
      </p>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Scope of This Policy</h2>
        <p className="mb-3">This policy applies to:</p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Users of the JOTIK web application and services</li>
          <li>Data accessed via the TikTok Ads API through authorized user connections</li>
        </ul>
        <p>It does <strong>not</strong> apply to how TikTok handles your data. Please review TikTok&apos;s privacy policy separately.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">2. Information We Collect</h2>
        <p className="mb-6">JOTIK only accesses data necessary to provide campaign monitoring and management features.</p>

        <h3 className="text-lg font-medium mb-2 text-gray-900">A. Information You Provide Directly</h3>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Account login credentials (hashed)</li>
          <li>Billing information (handled securely by third-party payment processors)</li>
        </ul>

        <h3 className="text-lg font-medium mb-2 text-gray-900">B. TikTok Ads Data (via API Access)</h3>
        <p className="mb-3">With your explicit authorization, JOTIK may read:</p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Ad account ID</li>
          <li>Campaign, ad group, and ad performance metrics:
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Impressions</li>
              <li>Clicks</li>
              <li>Conversions</li>
              <li>Spend</li>
              <li>CPC / CPM / CPA</li>
            </ul>
          </li>
          <li>Campaign status (active, paused, etc.)</li>
        </ul>

        <h3 className="text-lg font-medium mb-2 text-gray-900">C. Actions Performed Through JOTIK</h3>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Campaign pause actions</li>
          <li>Time of action</li>
          <li>Associated ad account</li>
        </ul>

        <h3 className="text-lg font-medium mb-2 text-gray-900">D. Technical Data</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device type</li>
          <li>Usage logs</li>
          <li>Cookies and session identifiers</li>
        </ul>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">3. How We Use Your Information</h2>
        <ol className="list-decimal pl-6 mb-4 space-y-1">
          <li>Provide campaign analytics dashboards</li>
          <li>Enable users to pause TikTok ad campaigns</li>
          <li>Improve system performance and reliability</li>
          <li>Prevent fraud and abuse</li>
          <li>Provide customer support</li>
          <li>Comply with legal obligations</li>
        </ol>
        <p>We <strong>do not sell</strong> your personal data.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Legal Basis for Processing (GDPR Users)</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Contractual necessity</strong> — to provide JOTIK services</li>
          <li><strong>Legitimate interests</strong> — product improvement and security</li>
          <li><strong>Consent</strong> — for connecting TikTok accounts</li>
          <li><strong>Legal compliance</strong></li>
        </ul>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">5. Data Sharing</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border border-gray-300 border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Recipient</th>
                <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">Cloud hosting providers</td>
                <td className="border border-gray-300 p-3">Secure infrastructure</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">Payment processors</td>
                <td className="border border-gray-300 p-3">Billing</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Security and monitoring tools</td>
                <td className="border border-gray-300 p-3">Fraud prevention</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">Legal authorities</td>
                <td className="border border-gray-300 p-3">When required by law</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>We do <strong>not</strong> share TikTok performance data with advertisers, networks, or third parties.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">6. Data Retention</h2>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Account data: while your account is active</li>
          <li>TikTok data: until you disconnect your TikTok account or delete your JOTIK account</li>
          <li>Logs: up to 12 months for security</li>
        </ul>
        <p>Users may request deletion at any time.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">7. Data Security</h2>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>HTTPS encryption</li>
          <li>Encrypted storage</li>
          <li>Role-based access control</li>
          <li>API token protection</li>
          <li>Monitoring for unauthorized access</li>
        </ul>
        <p>No system is 100% secure, but we continuously improve our defenses.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">8. Your Rights</h2>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Access your data</li>
          <li>Correct inaccurate data</li>
          <li>Delete your data</li>
          <li>Restrict processing</li>
          <li>Object to processing</li>
          <li>Data portability</li>
        </ul>
        <p>Requests can be sent to: <strong>tradedjamel@gmail.com</strong></p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">9. Account Disconnection</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>API access tokens are deleted</li>
          <li>No new data is collected</li>
          <li>Historical data may remain until account deletion unless requested</li>
        </ul>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">10. Cookies</h2>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Login sessions</li>
          <li>Security</li>
          <li>Usage analytics</li>
        </ul>
        <p>You can disable cookies in your browser settings.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">11. Children&apos;s Privacy</h2>
        <p>JOTIK is not intended for individuals under 18. We do not knowingly collect data from minors.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">12. International Data Transfers</h2>
        <p>Data may be processed on servers outside your country. We use safeguards such as contractual protections to ensure compliance with privacy laws.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">13. Changes to This Policy</h2>
        <p>We may update this policy. Continued use of JOTIK after updates means you accept the changes.</p>
      </section>

      <hr className="my-8 border-gray-200" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">14. Contact Us</h2>
        <p className="mb-1"><strong>JOTIK</strong></p>
        <p className="mb-1">Email: <strong>joteam@jotik.online</strong></p>
        <p className="mb-4">Address: <strong>Bab Ezzouar, Algiers, Algeria</strong></p>
        <p>
          See also our <Link href="/terms" className="text-gray-900 font-medium underline hover:no-underline">Terms of Service</Link>.
        </p>
      </section>
    </main>
  );
}
