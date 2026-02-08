import Link from "next/link";

export default function LegalShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#f6f8fb]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl bg-white/80 p-8 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)] ring-1 ring-slate-200/70 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                {title}
              </h1>
              {subtitle ? (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                  {subtitle}
                </p>
              ) : null}
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Link className="text-slate-600 hover:text-slate-900" href="/">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <Link className="text-slate-600 hover:text-slate-900" href="/pricing">
                Pricing
              </Link>
              <span className="text-slate-300">/</span>
              <Link className="text-slate-600 hover:text-slate-900" href="/login">
                Login
              </Link>
            </div>
          </div>

          <div className="mt-8 prose prose-slate max-w-none prose-h2:mt-10 prose-h2:text-xl prose-h2:font-bold prose-h2:text-slate-900 prose-h3:text-base prose-h3:font-semibold prose-h3:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700">
            {children}
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
            JOTIK is a third-party tool and is not endorsed by or affiliated with TikTok.
          </div>
        </div>
      </section>
    </main>
  );
}
