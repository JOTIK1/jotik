import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user!;

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 flex items-center justify-center text-white font-bold">
              ⚡
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">JOTIK</div>
              <div className="text-xs text-slate-500">Dashboard</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/settings"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Settings
            </Link>

            <Link
              href="/logout"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Log out
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">
            Welcome back 👋
          </h1>
          <p className="mt-2 text-slate-600">
            Your TikTok Ads integration is currently under review. Once approved,
            you’ll be able to connect your TikTok Business Center and track campaigns from your phone.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-xs text-slate-500">Signed in as</div>
              <div className="mt-1 font-semibold text-slate-900 break-all">{user.email}</div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-xs text-slate-500">Status</div>
              <div className="mt-1 font-semibold text-slate-900">Waiting TikTok approval</div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <div className="font-semibold text-slate-900">Connect TikTok (coming soon)</div>
            <p className="mt-1 text-sm text-slate-700">
              This feature will appear here after TikTok approves the requested permissions.
            </p>

            <button
              disabled
              className="mt-4 w-full rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 py-3 font-semibold text-white opacity-60"
            >
              Connect TikTok Account
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
