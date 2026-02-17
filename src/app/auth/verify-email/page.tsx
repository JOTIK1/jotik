import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-sm font-semibold text-slate-500">JOTIK</div>

        <h1 className="mt-2 text-2xl font-bold text-slate-900">Confirm your email :envelope_with_arrow:</h1>
        <p className="mt-2 text-slate-600">
          We sent you a confirmation link to your email address.
          Please open your inbox and click the verification link to activate your account.
        </p>

        <div className="mt-5 flex flex-col gap-3">
          <Link
            href="/login"
            className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white"
          >
            Go to Login
          </Link>

          <p className="text-xs text-slate-500 text-center">
            If you don’t see the email, check Spam/Junk and wait 1–2 minutes.
          </p>
        </div>
      </div>
    </main>
  );
}