import Link from "next/link";
import { Zap, Twitter, Github, Linkedin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-600 shadow-lg shadow-blue-500/20">
                <Zap className="h-5 w-5 text-white" strokeWidth={2.5} fill="currentColor" />
              </span>
              <span className="font-bold tracking-tight text-slate-900">
                JOTIK
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-slate-600">
              A marketing technology SaaS tool built to help TikTok advertisers
              monitor performance and control campaign spending.
            </p>
            <p className="mt-3 text-xs text-slate-500">
              JOTIK is an independent SaaS tool and is not affiliated with or
              endorsed by TikTok or ByteDance Ltd.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-semibold text-slate-900">Product</p>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <Link className="block hover:text-slate-900" href="/features">
                  Features
                </Link>
                <Link className="block hover:text-slate-900" href="/how-it-works">
                  How it Works
                </Link>
                <Link className="block hover:text-slate-900" href="/pricing">
                  Pricing
                </Link>
                <Link className="block hover:text-slate-900" href="/about">
                  About
                </Link>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Support</p>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <Link className="block hover:text-slate-900" href="/login">
                  Login
                </Link>
                <Link className="block hover:text-slate-900" href="/terms">
                  Terms
                </Link>
                <Link className="block hover:text-slate-900" href="/privacy">
                  Privacy
                </Link>
                <a className="block hover:text-slate-900" href="mailto:support@jotik.online">
                  support@jotik.online
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Social</p>
            <div className="mt-3 flex items-center gap-3 text-slate-600">
              <a className="rounded-full border border-slate-200 p-2 hover:text-slate-900" href="#">
                <Twitter className="h-4 w-4" />
              </a>
              <a className="rounded-full border border-slate-200 p-2 hover:text-slate-900" href="#">
                <Github className="h-4 w-4" />
              </a>
              <a className="rounded-full border border-slate-200 p-2 hover:text-slate-900" href="#">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
          <div>© {new Date().getFullYear()} JOTIK. All rights reserved.</div>
          <div className="flex gap-6">
            <Link className="hover:text-slate-900" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-slate-900" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
