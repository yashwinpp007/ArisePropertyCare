import { NextRequest, NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validations/quote";
import { siteConfig } from "@/lib/site-config";

// Best-effort in-memory rate limit. Resets on server restart / cold start —
// swap for a durable store (e.g. Upstash Redis) if traffic justifies it.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly or call us directly." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = quoteFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form for errors and try again." },
      { status: 400 }
    );
  }

  // Honeypot tripped — pretend success so bots don't learn anything.
  if (parsed.data.company) {
    return NextResponse.json({ success: true });
  }

  const { name, email, phone, service, propertyType, bedrooms, bathrooms, preferredDate, message } =
    parsed.data;

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error(
      "RESEND_API_KEY is not configured — quote request captured but not emailed:",
      { name, email, phone, service }
    );
    return NextResponse.json(
      {
        error:
          "Our online quote form isn't fully connected yet. Please call us on " +
          siteConfig.phone +
          " or email " +
          siteConfig.email +
          " and we'll help right away.",
      },
      { status: 503 }
    );
  }

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${siteConfig.name} Website <quotes@${new URL(siteConfig.url).hostname}>`,
        to: siteConfig.email,
        reply_to: email,
        subject: `New quote request from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Service: ${service}`,
          `Property Type: ${propertyType}`,
          bedrooms ? `Bedrooms: ${bedrooms}` : null,
          bathrooms ? `Bathrooms: ${bathrooms}` : null,
          preferredDate ? `Preferred Date: ${preferredDate}` : null,
          message ? `Message:\n${message}` : null,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (!emailResponse.ok) {
      throw new Error(`Resend API responded with ${emailResponse.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send quote request email:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your request. Please call us directly." },
      { status: 500 }
    );
  }
}
