export default function Footer() {
    return (
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            
            {/* Left */}
            <div className="text-sm text-slate-600">
              © {new Date().getFullYear()} JOTIK. All rights reserved.
            </div>
  
            {/* Center links */}
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-slate-600 hover:text-slate-900">
                Privacy Policy
              </a>
              <a href="/terms" className="text-slate-600 hover:text-slate-900">
                Terms of Service
              </a>
              <a href="mailto:support@jotik.online" className="text-slate-600 hover:text-slate-900">
                Contact
              </a>
            </div>
          </div>
  
          {/* Disclaimer */}
          <div className="mt-6 rounded-xl bg-slate-50 px-4 py-3 text-center text-xs text-slate-500">
            JOTIK is an independent SaaS tool and is not affiliated with, endorsed by,
            or connected to TikTok or ByteDance Ltd. TikTok is a registered trademark
            of ByteDance Ltd.
          </div>
        </div>
      </footer>
    );
  }
  