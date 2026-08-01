import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions | Arise Property Care",
  description: "Terms and conditions for booking and using Arise Property Care's cleaning services.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <div className="pt-20">
      <div className="container-premium py-16 sm:py-20">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Terms & Conditions", path: "/terms" }]} />

        <div className="mt-8 max-w-3xl">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-brand-navy-900">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-sm text-brand-grey-500">Last updated: 1 August 2026</p>

          <div className="prose-custom mt-10 space-y-8 text-[1.02rem] leading-relaxed text-brand-grey-700">
            <section>
              <h2 className="font-heading text-xl font-semibold text-brand-navy-900">1. Acceptance of terms</h2>
              <p className="mt-3">
                By requesting a quote, making a booking or using our services, you agree to be
                bound by these Terms &amp; Conditions. If you do not agree, please do not use our
                services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-brand-navy-900">2. Quotes and bookings</h2>
              <p className="mt-3">
                Quotes are provided in good faith based on the information supplied and may be
                adjusted if the property size, condition or scope differs from what was described.
                Bookings are confirmed once a date and time are agreed.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-brand-navy-900">3. Cancellations and rescheduling</h2>
              <p className="mt-3">
                We ask for at least 24 hours&apos; notice to reschedule or cancel a booking at no
                charge. Cancellations made with less notice may incur a fee to cover allocated
                staff time.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-brand-navy-900">4. Access to the property</h2>
              <p className="mt-3">
                You are responsible for providing safe and reasonable access to the property at
                the agreed time, including keys, access codes or building instructions where
                relevant. Additional charges may apply if our team cannot access the property at
                the scheduled time.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-brand-navy-900">5. Satisfaction guarantee</h2>
              <p className="mt-3">
                If you are not satisfied with an area of your clean, contact us within 24 hours
                (or 72 hours for end of lease cleans) and we will arrange a re-clean of the
                affected area at no additional cost.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-brand-navy-900">6. Liability</h2>
              <p className="mt-3">
                Arise Property Care carries public liability insurance. Claims for damage must be
                reported within 24 hours of the service. We are not liable for pre-existing damage,
                normal wear and tear, or items of significant sentimental or high value not
                disclosed prior to the service.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-brand-navy-900">7. Payment</h2>
              <p className="mt-3">
                Payment terms will be confirmed at the time of booking or on your invoice. Late
                payments may incur additional administrative fees.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-brand-navy-900">8. Changes to these terms</h2>
              <p className="mt-3">
                We may update these terms from time to time. Continued use of our services after
                changes are published constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-brand-navy-900">9. Contact us</h2>
              <p className="mt-3">
                Questions about these terms can be directed to{" "}
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
