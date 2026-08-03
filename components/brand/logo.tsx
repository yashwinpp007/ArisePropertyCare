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
}: LogoProps) {
  const resolvedMarkSize = markSize ?? (size === "lg" ? 64 : 40);
  const text = wordmarkSizes[size];

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn("group flex items-center", text.gap, className)}
    >
      <Image
        src="/brand/logo-mark.png"
        alt=""
        width={resolvedMarkSize}
        height={resolvedMarkSize}
        priority
        className="shrink-0"
      />
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
