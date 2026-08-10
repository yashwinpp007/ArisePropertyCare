"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send, Phone } from "lucide-react";
import { quoteFormSchema, propertyTypes, type QuoteFormValues } from "@/lib/validations/quote";
import { services } from "@/lib/data/services";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const bedroomOptions = ["Studio", "1", "2", "3", "4", "5+"];
const bathroomOptions = ["1", "2", "3", "4+"];

interface QuoteFormProps {
  defaultService?: string;
  /** Condensed layout for tight spaces (e.g. embedded in the hero) — smaller controls, no message field. */
  compact?: boolean;
}

export function QuoteForm({ defaultService, compact = false }: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: defaultService ?? "",
      propertyType: "",
      bedrooms: "",
      bathrooms: "",
      preferredDate: "",
      message: "",
      company: "",
    },
  });

  const onSubmit = async (values: QuoteFormValues) => {
    setStatus("submitting");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center rounded-2xl border border-brand-emerald-200 bg-brand-emerald-50 px-8 py-14 text-center"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
          className="flex size-16 items-center justify-center rounded-full bg-brand-emerald-600 text-white"
        >
          <CheckCircle2 className="size-8" />
        </motion.span>
        <h3 className="mt-5 font-heading text-2xl font-bold text-brand-navy-900">
          Quote request received
        </h3>
        <p className="mt-2 max-w-sm text-brand-grey-600">
          Thanks — a member of our team will be in touch within one business day to confirm the
          details and pricing.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-full"
          onClick={() => setStatus("idle")}
        >
          Submit another request
        </Button>
      </motion.div>
    );
  }

  const fieldGap = compact ? "gap-3" : "gap-5";
  const formSpace = compact ? "space-y-3" : "space-y-5";
  const controlHeight = compact ? "h-9" : "h-11";
  const labelClass = compact
    ? "mb-1 block text-xs font-medium text-brand-navy-800"
    : "mb-1.5 block text-sm font-medium text-brand-navy-800";
  const errorClass = compact ? "mt-1 text-[0.7rem] text-destructive" : "mt-1.5 text-xs text-destructive";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={formSpace}>
      {/* Honeypot field — hidden from real users, catches basic bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <div className={`grid grid-cols-1 ${fieldGap} sm:grid-cols-2`}>
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-brand-emerald-600">*</span>
          </label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Jane Smith"
            className={`${controlHeight} rounded-lg`}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-brand-emerald-600">*</span>
          </label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            className={`${controlHeight} rounded-lg`}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div className={`grid grid-cols-1 ${fieldGap} sm:grid-cols-2`}>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-brand-emerald-600">*</span>
          </label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="04XX XXX XXX"
            className={`${controlHeight} rounded-lg`}
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Service Required <span className="text-brand-emerald-600">*</span>
          </label>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  id="service"
                  className={`${controlHeight} w-full rounded-lg`}
                  aria-invalid={!!errors.service}
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s.slug} value={s.name}>
                      {s.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.service && <p className={errorClass}>{errors.service.message}</p>}
        </div>
      </div>

      <div className={`grid grid-cols-1 ${fieldGap} sm:grid-cols-3`}>
        <div>
          <label htmlFor="propertyType" className={labelClass}>
            Property Type <span className="text-brand-emerald-600">*</span>
          </label>
          <Controller
            control={control}
            name="propertyType"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  id="propertyType"
                  className={`${controlHeight} w-full rounded-lg`}
                  aria-invalid={!!errors.propertyType}
                >
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.propertyType && <p className={errorClass}>{errors.propertyType.message}</p>}
        </div>

        <div>
          <label htmlFor="bedrooms" className={labelClass}>
            Bedrooms
          </label>
          <Controller
            control={control}
            name="bedrooms"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="bedrooms" className={`${controlHeight} w-full rounded-lg`}>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {bedroomOptions.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div>
          <label htmlFor="bathrooms" className={labelClass}>
            Bathrooms
          </label>
          <Controller
            control={control}
            name="bathrooms"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="bathrooms" className={`${controlHeight} w-full rounded-lg`}>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {bathroomOptions.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>

      <div>
        <label htmlFor="preferredDate" className={labelClass}>
          Preferred Date
        </label>
        <Input
          id="preferredDate"
          type="date"
          className={`${controlHeight} rounded-lg`}
          min={new Date().toISOString().split("T")[0]}
          {...register("preferredDate")}
        />
      </div>

      {!compact && (
        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <Textarea
            id="message"
            rows={4}
            placeholder="Tell us anything else that will help us quote accurately — access instructions, specific areas of focus, etc."
            className="rounded-lg"
            {...register("message")}
          />
        </div>
      )}

      <AnimatePresence>
        {status === "error" && errorMessage && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-start gap-2.5 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
          >
            <Phone className="mt-0.5 size-4 shrink-0" />
            <span>{errorMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        size={compact ? "lg" : "xl"}
        disabled={status === "submitting"}
        className="w-full rounded-full bg-brand-emerald-600 text-white hover:bg-brand-emerald-700 disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-5 animate-spin" data-icon="inline-start" /> Sending your request…
          </>
        ) : (
          <>
            Get My Free Quote <Send className="size-4.5" data-icon="inline-end" />
          </>
        )}
      </Button>

      <p className={compact ? "text-center text-[0.7rem] text-brand-grey-500" : "text-center text-xs text-brand-grey-500"}>
        By submitting, you agree to be contacted about your quote request. We never share your
        details with third parties.
      </p>
    </form>
  );
}
