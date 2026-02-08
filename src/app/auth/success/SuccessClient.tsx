"use client";

export default function SuccessClient({ status }: { status: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-2xl font-bold mb-2">TikTok authorization completed</h1>
      <p className="text-gray-600">Status: {status}</p>
    </div>
  );
}
