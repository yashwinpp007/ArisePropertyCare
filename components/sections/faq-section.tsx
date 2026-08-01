import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { faqSchema, jsonLdScript } from "@/lib/schema";
import type { Faq } from "@/lib/data/faqs";

interface FaqSectionProps {
  faqs: Faq[];
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  includeSchema?: boolean;
  className?: string;
}

export function FaqSection({
  faqs,
  title = "Frequently asked questions",
  subtitle = "Straight answers to the questions we hear most from Sydney homes and businesses.",
  eyebrow = "FAQ",
  includeSchema = true,
  className = "bg-brand-grey-50",
}: FaqSectionProps) {
  return (
    <section className={`py-24 sm:py-32 ${className}`}>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(faqSchema(faqs)) }}
        />
      )}
      <div className="container-premium">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <Accordion className="divide-y divide-brand-grey-200 rounded-2xl border border-brand-grey-200 bg-white px-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="py-1">
                <AccordionTrigger className="py-5 text-base font-semibold text-brand-navy-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[0.95rem] leading-relaxed text-brand-grey-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-6 text-center text-sm text-brand-grey-500">
            Still have questions?{" "}
            <Link href="/contact" className="font-medium text-brand-emerald-600 underline underline-offset-2">
              Get in touch
            </Link>{" "}
            and we&apos;ll get back to you within the same business day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
