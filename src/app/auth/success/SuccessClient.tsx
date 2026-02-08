"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Inner() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status") ?? "success";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold mb-2">TikTok authorization completed</h1>
      <p className="text-gray-600">Status: {status}</p>
    </div>
  );
}

export default function SuccessClient() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-gray-600">
          Loading...
        </div>
      }
    >
      <Inner />
    </Suspense>
  );
}
