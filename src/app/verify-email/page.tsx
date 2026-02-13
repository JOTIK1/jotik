export default function VerifyEmail() {
    return (
      <div className="mx-auto max-w-lg p-6">
        <h1 className="text-2xl font-bold">Verify your email</h1>
        <p className="mt-2 text-slate-600">
          We sent a verification link to your email. Open it to activate your account.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Check spam/junk if you don’t see it.
        </p>
      </div>
    );
  }