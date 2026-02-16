import Link from "next/link";

export const dynamic = "force-dynamic";

type Props = {
  searchParams?: { email?: string };
};

export default function SuccessPage({ searchParams }: Props) {
  const email = searchParams?.email ?? "";

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 flex items-center justify-center text-white text-lg">
            ✓
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">JOTIK</div>
            <div className="text-xs text-slate-500">Account created</div>
          </div>
        </div>

        <h1 className="mt-6 text-2xl font-bold text-slate-900">
          Your account is created 
        </h1>

        <p className="mt-2 text-slate-700">
          We sent you a verification email. Please open your inbox and click the
          verification link to activate your account.
        </p>

        {email ? (
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm">
            <div className="text-slate-500">Verification sent to</div>
            <div className="font-semibold text-slate-900 break-all">{email}</div>
          </div>
        ) : null}

        <div className="mt-6 grid gap-3">
          <Link
            href="/login"
            className="w-full rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 py-3 text-center font-semibold text-white"
          >
            Go to Login
          </Link>

        </div>

        <p className="mt-5 text-xs text-slate-500">
          Didn’t receive the email? Check spam/junk, or wait 1–2 minutes then try
          again.
        </p>
      </div>
    </main>
  );
}