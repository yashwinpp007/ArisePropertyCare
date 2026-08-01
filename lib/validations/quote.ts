import { z } from "zod";

export const propertyTypes = [
  "House",
  "Apartment / Unit",
  "Townhouse",
  "Office",
  "Retail / Commercial",
  "Other",
] as const;

export const quoteFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number")
    .max(20)
    .regex(/^[0-9+()\s-]+$/, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  propertyType: z.string().min(1, "Please select a property type"),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  preferredDate: z.string().optional(),
  message: z.string().trim().max(1000).optional(),
  // Honeypot — must stay empty; bots that auto-fill every field trip this.
  company: z.string().max(0, "Spam detected").optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
