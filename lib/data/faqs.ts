export interface Faq {
  question: string;
  answer: string;
}

export function getSuburbFaqs(suburbName: string): Faq[] {
  return [
    {
      question: `Does Arise Property Care service ${suburbName}?`,
      answer: `Yes, Arise Property Care provides residential, commercial and end of lease cleaning throughout ${suburbName} and the surrounding Sydney suburbs. Request a free quote and we'll confirm availability for your address.`,
    },
    {
      question: `How quickly can you book a clean in ${suburbName}?`,
      answer: `Most bookings in ${suburbName} are confirmed within 24–48 hours of your enquiry, and we can often accommodate short-notice end of lease or one-off cleans depending on team availability.`,
    },
    {
      question: `Are your ${suburbName} cleaners insured and police checked?`,
      answer: `Yes, every cleaner we send to ${suburbName} properties is fully insured and has passed a national police check, so you can feel confident having our team in your home or workplace.`,
    },
  ];
}

export const homepageFaqs: Faq[] = [
  {
    question: "How long does an end of lease clean take?",
    answer:
      "A 1–2 bedroom apartment typically takes 3–5 hours, while a 3–4 bedroom house takes 5–8 hours. We work to a detailed exit-condition checklist and back every job with a 72-hour bond-back guarantee.",
  },
  {
    question: "Do you bring your own equipment and products?",
    answer:
      "Yes. Every Arise Property Care team arrives fully equipped with commercial-grade, eco-friendly cleaning products and equipment at no extra cost, so there's nothing for you to organise before we arrive.",
  },
  {
    question: "Do you provide eco-friendly cleaning products?",
    answer:
      "Yes, we use eco-friendly, non-toxic cleaning products as standard across all residential and commercial services, safe for children, pets and staff with allergies or sensitivities.",
  },
  {
    question: "How often should offices be professionally cleaned?",
    answer:
      "Most Sydney offices are cleaned 2–3 times per week to maintain hygiene and presentation standards. High-traffic offices or medical-adjacent workplaces often require daily servicing — we'll recommend a frequency during your free quote.",
  },
  {
    question: "Are your cleaners insured and police checked?",
    answer:
      "Yes, every Arise Property Care cleaner is fully covered by public liability insurance and has passed a national police check before joining our team, so you can feel confident having us in your home or workplace.",
  },
  {
    question: "Do I need to be home during the clean?",
    answer:
      "No. Many clients provide key access, a lockbox code or building instructions and continue with their day. We always secure the property and confirm with you once the job is complete.",
  },
  {
    question: "Can I reschedule or cancel a booking?",
    answer:
      "Yes, you can reschedule or pause a booking with at least 24 hours' notice at no charge. Just contact our team by phone or email and we'll adjust your schedule.",
  },
  {
    question: "How do I book a clean with Arise Property Care?",
    answer:
      "Request a free quote online or call 0469 864 885. We'll confirm scope and pricing, lock in a date and time that suits you, and send a confirmation — most bookings can be made within 24–48 hours.",
  },
  {
    question: "What areas of Sydney do you service?",
    answer:
      "We service the entire Sydney metro, from the CBD and Inner West through to Western Sydney, the Hills District, the Northern Beaches, Sutherland Shire and everywhere between — including Parramatta, Blacktown, Castle Hill, Norwest, Merrylands and surrounding suburbs. See our full list of service areas for details.",
  },
];
