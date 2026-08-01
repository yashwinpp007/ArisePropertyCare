export interface Testimonial {
  name: string;
  location: string;
  service: string;
  rating: number;
  quote: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Parramatta",
    service: "Residential Cleaning",
    rating: 5,
    quote:
      "We've had the same cleaner from Arise Property Care every fortnight for over a year now. They know exactly how we like things done and always leave the house spotless. Genuinely can't fault them.",
    initials: "SM",
  },
  {
    name: "David L.",
    location: "Castle Hill",
    service: "End of Lease Cleaning",
    rating: 5,
    quote:
      "Got our full bond back with zero issues raised by the agent. The oven and windows looked brand new. Booked them after a friend's recommendation and would do the same for anyone moving out.",
    initials: "DL",
  },
  {
    name: "Priya K.",
    location: "Norwest",
    service: "Office Cleaning",
    rating: 5,
    quote:
      "Switched our office contract to Arise Property Care six months ago and the difference in consistency has been huge. Same team every time, always on schedule, and the invoicing is dead simple.",
    initials: "PK",
  },
  {
    name: "Michael T.",
    location: "Blacktown",
    service: "Carpet Cleaning",
    rating: 5,
    quote:
      "Had some serious pet stains I thought were permanent. They came out completely and the whole house smelled fresh for weeks after. Booking was easy and they turned up right on time.",
    initials: "MT",
  },
  {
    name: "Amanda R.",
    location: "Merrylands",
    service: "Deep Cleaning",
    rating: 5,
    quote:
      "Booked a deep clean before hosting a family event and they went above and beyond — inside the oven, behind the fridge, all the skirting boards. Worth every dollar.",
    initials: "AR",
  },
  {
    name: "James W.",
    location: "Baulkham Hills",
    service: "Commercial Cleaning",
    rating: 5,
    quote:
      "We run a busy retail store and they clean after hours without fail. Never had a single complaint from staff about presentation since we started with Arise Property Care.",
    initials: "JW",
  },
  {
    name: "Emily C.",
    location: "Westmead",
    service: "NDIS Cleaning",
    rating: 5,
    quote:
      "The cleaner assigned to my mother's home has been wonderful — patient, respectful and reliable every single visit. It's made a real difference to her independence.",
    initials: "EC",
  },
  {
    name: "Ben H.",
    location: "Guildford",
    service: "Builders Cleaning",
    rating: 5,
    quote:
      "Used them for the final clean on a townhouse development. Handled the dust and adhesive residue perfectly and hit our tight handover deadline without any issues.",
    initials: "BH",
  },
];
