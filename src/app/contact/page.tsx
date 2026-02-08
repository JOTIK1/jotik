import LegalShell from "../components/LegalShell";

export default function ContactPage() {
  return (
    <LegalShell
      title="Contact & Support"
      subtitle="If you have questions about JOTIK, data usage, or need support, you can contact us using the information below."
    >
      <h2>Support</h2>
      <p>
        For any technical issues, questions about your account, or data-related
        requests, please contact our support team:
      </p>

      <p>
        <strong>Email:</strong>{" "}
        <a
          href="mailto:support@jotik.online"
          className="text-blue-600 hover:underline"
        >
          support@jotik.online
        </a>
      </p>

      <h2>Business inquiries</h2>
      <p>
        For partnerships or business inquiries related to JOTIK, please contact
        us at the same email address. We typically respond within 24–48 hours.
      </p>

      <h2>Data & privacy requests</h2>
      <p>
        If you would like to request access, correction, or deletion of your data,
        please email us with the subject line <em>“Data Request – JOTIK”</em>.
      </p>

      <h2>About JOTIK</h2>
      <p>
        JOTIK is a third-party software tool designed to help advertisers monitor
        TikTok Ads performance and manage campaigns through authorized API access.
        JOTIK is not affiliated with or endorsed by TikTok.
      </p>
    </LegalShell>
  );
}
