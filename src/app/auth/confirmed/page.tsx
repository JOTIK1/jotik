import Link from "next/link";

export default function ConfirmedPage({
  searchParams,
}: {
  searchParams?: { error?: string };
}) {
  const error = searchParams?.error;

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-sm font-semibold text-slate-500">JOTIK</div>

        {!error ? (
          <>
            <h1 className="mt-2 text-2xl font-bold text-slate-900">Account verified :white_check_mark:</h1>
            <p className="mt-2 text-slate-600">
              Your email has been confirmed successfully. You can login now.
            </p>
            <Link
              href="/login"
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white"
            >
              Login
            </Link>
          </>
        ) : (
          <>
            <h1 className="mt-2 text-2xl font-bold text-slate-900">Verification failed :x:</h1>
            <p className="mt-2 text-slate-600 break-words">{error}</p>
            <Link
              href="/signup"
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900"
            >
              Back to Signup
            </Link>
          </>
        )}
      </div>
    </main>
  );
}