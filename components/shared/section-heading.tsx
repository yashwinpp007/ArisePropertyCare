import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
  as?: "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  onDark = false,
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase",
            onDark
              ? "bg-white/10 text-brand-emerald-300"
              : "bg-brand-emerald-50 text-brand-emerald-700"
          )}
        >
          {eyebrow}
        </span>
      )}
      <Heading
        className={cn(
          "text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]",
          onDark ? "text-white" : "text-brand-navy-900"
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-balance text-lg leading-relaxed",
            onDark ? "text-white/70" : "text-brand-grey-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
