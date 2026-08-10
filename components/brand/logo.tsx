import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

interface LogoProps {
  onDark?: boolean;
  className?: string;
  markSize?: number;
  showWordmark?: boolean;
  size?: "default" | "lg";
  /** Adds the animated diagonal accent shape behind the mark — reserved for the main navbar. */
  accent?: boolean;
}

const wordmarkSizes = {
  default: { title: "text-[1.05rem]", sub: "text-[0.62rem]", gap: "gap-2.5" },
  lg: { title: "text-2xl sm:text-[1.75rem]", sub: "text-[0.72rem] sm:text-xs", gap: "gap-3" },
} as const;

export function Logo({
  onDark = false,
  className,
  markSize,
  showWordmark = true,
  size = "default",
  accent = false,
}: LogoProps) {
  const resolvedMarkSize = markSize ?? (size === "lg" ? 64 : 40);
  const text = wordmarkSizes[size];

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn("group flex items-center", text.gap, className)}
    >
      <span
        className="relative shrink-0"
        style={{ width: resolvedMarkSize, height: resolvedMarkSize }}
      >
        {accent && (
          <span
            aria-hidden="true"
            className="animate-logo-accent absolute -right-2 top-1/2 -z-10 h-[130%] w-1/2 rounded-sm bg-gradient-to-br from-brand-emerald-400 to-brand-emerald-600"
          />
        )}
        <Image
          src="/brand/logo-mark.png"
          alt=""
          width={resolvedMarkSize}
          height={resolvedMarkSize}
          priority
          className="relative shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-2 group-hover:scale-105"
        />
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-heading font-bold tracking-tight",
              text.title,
              onDark ? "text-white" : "text-brand-navy-800"
            )}
          >
            Arise
          </span>
          <span
            className={cn(
              "font-semibold tracking-[0.18em] uppercase",
              text.sub,
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
