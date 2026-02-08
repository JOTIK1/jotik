export const dynamic = "force-dynamic";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border bg-white p-6 text-center shadow-sm">
        <h1 className="text-2xl font-bold mb-2">TikTok authorization received</h1>
        <p className="text-gray-600">
          Thanks! We received your authorization. You can close this page and return to JOTIK.
        </p>
      </div>
    </main>
  );
}
