import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex lg:hidden border-t border-brand-grey-200 bg-white/95 backdrop-blur-md [padding-bottom:env(safe-area-inset-bottom)]">
      <a
        href={siteConfig.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-brand-navy-900 border-r border-brand-grey-200"
      >
        <Phone className="size-4" /> Call Now
      </a>
      <Link
        href="/quote"
        className="flex flex-1 items-center justify-center gap-2 bg-brand-emerald-600 py-3.5 text-sm font-semibold text-white"
      >
        <FileText className="size-4" /> Get Free Quote
      </Link>
    </div>
  );
}
