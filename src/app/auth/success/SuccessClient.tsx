"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status") ?? "success";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold mb-2">
        TikTok authorization completed
      </h1>
      <p className="text-gray-600">Status: {status}</p>
    </div>
  );
}
