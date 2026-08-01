export interface Industry {
  name: string;
  icon: string;
  description: string;
}

export const industries: Industry[] = [
  {
    name: "Office",
    icon: "Briefcase",
    description: "Corporate offices and coworking spaces across Sydney.",
  },
  {
    name: "Medical",
    icon: "Stethoscope",
    description: "Clinics, allied health and dental practices.",
  },
  {
    name: "Retail",
    icon: "ShoppingBag",
    description: "Shopfronts, shopping strips and showrooms.",
  },
  {
    name: "Schools",
    icon: "GraduationCap",
    description: "Education facilities and childcare centres.",
  },
  {
    name: "Warehouses",
    icon: "Warehouse",
    description: "Industrial and logistics facilities.",
  },
  {
    name: "Apartments",
    icon: "Building",
    description: "Strata buildings and residential complexes.",
  },
  {
    name: "Real Estate",
    icon: "KeyRound",
    description: "Property managers and end of lease turnovers.",
  },
  {
    name: "Construction",
    icon: "HardHat",
    description: "Builders cleaning and handover-ready sites.",
  },
  {
    name: "Hospitality",
    icon: "UtensilsCrossed",
    description: "Cafes, restaurants and short-stay accommodation.",
  },
  {
    name: "Government",
    icon: "Landmark",
    description: "Public facilities and government-leased sites.",
  },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Request a Quote",
    description:
      "Tell us about your property and the service you need — you'll receive a transparent, no-obligation quote, usually within the same business day.",
    icon: "FileText",
  },
  {
    step: 2,
    title: "Schedule Cleaning",
    description:
      "Choose a date and time that suits you, from a one-off visit to a recurring weekly, fortnightly or monthly plan.",
    icon: "CalendarCheck",
  },
  {
    step: 3,
    title: "Professional Clean",
    description:
      "A fully insured, police-checked team arrives on time and works through a detailed, service-specific checklist.",
    icon: "Sparkles",
  },
  {
    step: 4,
    title: "Quality Inspection",
    description:
      "Every job is reviewed against our checklist before we consider it complete, so nothing is left to chance.",
    icon: "ClipboardCheck",
  },
  {
    step: 5,
    title: "Enjoy Your Clean Space",
    description:
      "Step into a spotless home or workplace — and if anything doesn't meet expectations, we'll come back and make it right.",
    icon: "Home",
  },
];
