import { cn } from "@/lib/utils";

const variants = {
  navy: "from-brand-navy-900 to-brand-navy-700",
  emerald: "from-brand-emerald-700 to-brand-emerald-600",
  slate: "from-brand-navy-800 to-brand-grey-700",
} as const;

interface AbstractPanelProps {
  variant?: keyof typeof variants;
  pattern?: 1 | 2 | 3 | 4;
  className?: string;
  children?: React.ReactNode;
}

export function AbstractPanel({ variant = "navy", pattern = 1, className, children }: AbstractPanelProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        variants[variant],
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full text-white/[0.09]"
        viewBox="0 0 400 300"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {pattern === 1 && (
          <>
            <path d="M200 30 L340 270 L60 270 Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M200 90 L290 250 L110 250 Z" stroke="currentColor" strokeWidth="1.5" />
          </>
        )}
        {pattern === 2 && (
          <>
            <circle cx="320" cy="60" r="120" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="320" cy="60" r="80" stroke="currentColor" strokeWidth="1.5" />
          </>
        )}
        {pattern === 3 && (
          <>
            <line x1="0" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="140" x2="400" y2="140" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="220" x2="400" y2="220" stroke="currentColor" strokeWidth="1" />
            <line x1="100" y1="0" x2="100" y2="300" stroke="currentColor" strokeWidth="1" />
            <line x1="300" y1="0" x2="300" y2="300" stroke="currentColor" strokeWidth="1" />
          </>
        )}
        {pattern === 4 && (
          <>
            <rect x="40" y="40" width="150" height="150" rx="16" stroke="currentColor" strokeWidth="1.5" />
            <rect x="210" y="110" width="150" height="150" rx="16" stroke="currentColor" strokeWidth="1.5" />
          </>
        )}
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.10),transparent)]" />
      {children}
    </div>
  );
}
