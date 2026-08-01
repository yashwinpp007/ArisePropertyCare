import { Sparkles } from "lucide-react";

export function QuickAnswer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-brand-emerald-200 bg-brand-emerald-50/60 p-6">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-emerald-600 text-white">
        <Sparkles className="size-4.5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-emerald-700">
          In short
        </p>
        <p className="mt-1.5 text-[0.95rem] leading-relaxed text-brand-navy-900">{children}</p>
      </div>
    </div>
  );
}
