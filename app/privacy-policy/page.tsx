import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Arise Property Care",
  description: "How Arise Property Care collects, uses and protects your personal information.",
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <div className="container-premium py-16 sm:py-20">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }]} />

        <div className="mt-8 max-w-3xl">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-brand-navy-900">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-brand-grey-500">Last updated: 1 August 2026</p>

          <div className="prose-custom mt-10 space-y-8 text-[1.02rem] leading-relaxed text-brand-grey-700">
            <section>
              <h2 className="font-heading text-xl font-semibold text-brand-navy-900">1. Introduction</h2>
              <p className="mt-3">
                {siteConfig.legalName} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy and is
                committed to protecting your personal information in accordance with the Privacy
                Act 1988 (Cth) and the Australian Privacy Principles. This policy explains how we
                collect, use, store and disclose personal information.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-brand-navy-900">2. Information we collect</h2>
              <p className="mt-3">We may collect the following information when you use our website or services:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Name, email address, phone number and postal address</li>
                <li>Property details relevant to a quote or booking (property type, size, service required)</li>
                <li>Payment information processed by our third-party payment providers</li>
                <li>Website usage data collected via cookies and analytics tools</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-brand-navy-900">3. How we use your information</h2>
              <p className="mt-3">We use personal information to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Provide quotes and deliver cleaning services you request</li>
                <li>Communicate with you about bookings, invoices and enquiries</li>
                <li>Improve our website, services and customer experience</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-brand-navy-900">4. Disclosure of information</h2>
              <p className="mt-3">
                We do not sell your personal information. We may share information with trusted
                service providers who assist us in operating our business (such as scheduling,
                payment processing and email delivery), each bound by confidentiality obligations,
                or where required by law.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-brand-navy-900">5. Data security</h2>
              <p className="mt-3">
                We take reasonable technical and organisational steps to protect your personal
                information from misuse, loss and unauthorised access. However, no method of
                transmission over the internet is completely secure.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-brand-navy-900">6. Your rights</h2>
              <p className="mt-3">
                You may request access to, correction of, or deletion of your personal
                information at any time by contacting us using the details below. You may also
                opt out of marketing communications at any time.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-brand-navy-900">7. Cookies</h2>
              <p className="mt-3">
                Our website may use cookies and similar technologies to improve functionality and
                analyse site usage. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-brand-navy-900">8. Contact us</h2>
              <p className="mt-3">
                If you have questions about this policy or how we handle your personal
                information, contact us at{" "}
                <a href={siteConfig.emailHref} className="text-brand-emerald-600 underline underline-offset-2">
                  {siteConfig.email}
                </a>{" "}
                or {siteConfig.phone}.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
