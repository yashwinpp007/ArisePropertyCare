import type { SVGProps } from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const whatsappNumber = siteConfig.phoneHref.replace("tel:+", "");
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hi Arise Property Care, I'd like a free quote."
)}`;

/**
 * Desktop-only floating contact buttons — WhatsApp (left) and Call (right).
 * Hidden on mobile, where the sticky bottom bar already covers Call + Quote.
 */
export function FloatingContactWidgets() {
  return (
    <>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
        className="fixed bottom-6 left-6 z-40 hidden size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition-transform duration-200 hover:scale-105 lg:flex"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      <a
        href={siteConfig.phoneHref}
        aria-label={`Call ${siteConfig.name} on ${siteConfig.phone}`}
        className="fixed bottom-6 right-6 z-40 hidden size-14 items-center justify-center rounded-full bg-brand-navy-900 text-white shadow-[0_12px_30px_-8px_rgba(0,32,80,0.55)] transition-transform duration-200 hover:scale-105 lg:flex"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand-navy-900/40" />
        <Phone className="size-6" />
      </a>
    </>
  );
}

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.9.529 3.674 1.447 5.19L2 22l4.955-1.412A9.94 9.94 0 0 0 12.001 22C17.523 22 22 17.522 22 12S17.523 2 12.001 2zm0 18.2a8.18 8.18 0 0 1-4.166-1.14l-.299-.177-3.21.916.86-3.12-.194-.31A8.19 8.19 0 1 1 20.19 12a8.2 8.2 0 0 1-8.189 8.2z" />
    </svg>
  );
}
