import type { Metadata } from "next";
import { CheckCircle2, Clock, Phone, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { QuoteForm } from "@/components/forms/quote-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Get a Free Cleaning Quote | Arise Property Care Sydney",
  description:
    "Request a free, no-obligation cleaning quote from Arise Property Care. Fast response, transparent pricing, fully insured cleaners across Sydney.",
  path: "/quote",
});

const highlights = [
  { icon: Clock, text: "Most quotes answered within the same business day" },
  { icon: ShieldCheck, text: "Fully insured, police-checked cleaning teams" },
  { icon: CheckCircle2, text: "No obligation, no hidden call-out fees" },
];

export default function QuotePage() {
  return (
    <div className="bg-brand-grey-50 pt-20">
      <div className="container-premium py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="inline-flex items-center rounded-full bg-brand-emerald-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-emerald-700">
              Free Quote
            </span>
            <h1 className="mt-4 text-balance font-heading text-4xl font-bold tracking-tight text-brand-navy-900 sm:text-5xl">
              Get your free cleaning quote
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-brand-grey-600">
              Tell us a little about your property and the service you need. We&apos;ll come back
              with transparent, upfront pricing — no site visit required for most jobs.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-brand-emerald-600 shadow-sm ring-1 ring-brand-grey-200">
                    <Icon className="size-4.5" />
                  </span>
                  <span className="pt-1.5 text-sm font-medium text-brand-navy-800">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-brand-grey-200 bg-white p-6">
              <p className="text-sm font-semibold text-brand-navy-900">Prefer to talk it through?</p>
              <p className="mt-1 text-sm text-brand-grey-500">
                Call us directly and we&apos;ll help you get a quote over the phone.
              </p>
              <a
                href={siteConfig.phoneHref}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-navy-800"
              >
                <Phone className="size-4" /> {siteConfig.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-brand-grey-200 bg-white p-6 shadow-[0_24px_60px_-24px_rgba(0,32,80,0.15)] sm:p-9">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
