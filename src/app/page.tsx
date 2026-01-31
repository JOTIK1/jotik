import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">JOTIK</h1>

      <p className="text-gray-600 text-center max-w-md mb-8">
        Simple TikTok campaign tracking: Spend, Conversions, CPA, and one Pause button.
      </p>

      <Link href="/dashboard">
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80">
          Login with TikTok Business
        </button>
      </Link>
    </main>
  );
}
