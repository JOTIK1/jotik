// src/app/auth/success/SuccessClient.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Authentication Success</h1>
      <p className="text-gray-600">
        TikTok authorization completed successfully.
      </p>

      {status && (
        <p className="text-sm text-gray-500">
          Status: <strong>{status}</strong>
        </p>
      )}
    </div>
  );
}
