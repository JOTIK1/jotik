import Link from "next/link";
import { Zap } from "lucide-react";

export default function BrandLogo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-cyan-600 shadow-lg shadow-blue-500/25">
        <Zap className="h-5 w-5 text-white" />
      </span>
      <span className="font-bold tracking-tight text-slate-900">JOTIK</span>
    </Link>
  );
}
