import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

interface LogoProps {
  onDark?: boolean;
  className?: string;
  markSize?: number;
  showWordmark?: boolean;
}

export function Logo({ onDark = false, className, markSize = 40, showWordmark = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn("group flex items-center gap-2.5", className)}
    >
      <Image
        src="/brand/logo-mark.png"
        alt=""
        width={markSize}
        height={markSize}
        priority
        className="shrink-0"
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-heading text-[1.05rem] font-bold tracking-tight",
              onDark ? "text-white" : "text-brand-navy-800"
            )}
          >
            Arise
          </span>
          <span
            className={cn(
              "text-[0.62rem] font-semibold tracking-[0.18em] uppercase",
              onDark ? "text-brand-emerald-300" : "text-brand-emerald-600"
            )}
          >
            Property Care
          </span>
        </span>
      )}
    </Link>
  );
}
