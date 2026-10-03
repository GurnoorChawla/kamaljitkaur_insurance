import { NextResponse } from "next/server";
import { z } from "zod";
import { site } from "../../../lib/site";

const quoteInterests = [
  "Life insurance",
  "Mortgage insurance",
  "Disability insurance",
  "Critical illness insurance",
  "Super Visa insurance",
  "Visitor insurance",
  "Travel insurance",
  "International student insurance",
  "Health plans",
  "Dental plans",
  "RESP",
  "RRSP",
  "TFSA",
] as const;

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.email().max(254),
  phone: z.string().trim().min(1).max(24),
  interest: z.union([z.enum(quoteInterests), z.literal("")]).optional(),
  message: z.string().trim().min(1).max(1000),
  consent: z.literal("on"),
});

const sensitiveDetails = /\b(?:policy\s+(?:number|details?|documents?)|diagnos\w*|medical\s+(?:history|information|condition|records?)|health\s+(?:history|information|condition|records?)|income\s+(?:details?|information|amount)|bank(?:ing)?\s+(?:details?|information|account)|SIN|social insurance number|passport\s+(?:number|details?)|date of birth|birth date)\b/i;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Please check the information and try again." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: "Please check the required fields and try again." }, { status: 400 });
  }

  if (sensitiveDetails.test(parsed.data.message)) {
    return NextResponse.json({ message: "Please leave personal health, financial, identity and policy details out of this form. You can call or email Kamaljit to discuss a safe way to share anything needed for a quote." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    return NextResponse.json({ message: "The quote form is temporarily unavailable. Please call or email Kamaljit directly." }, { status: 503 });
  }

  const { name, email, phone, interest, message } = parsed.data;
  const text = [
    "New free quote request from the Kamaljit Kaur website",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Interested in: ${interest || "Not specified"}`,
    "Consent to be contacted: Yes",
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [site.email],
        reply_to: email,
        subject: "New free quote request — Kamaljit Kaur website",
        text,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ message: "Your request couldn’t be emailed right now. Please call or email Kamaljit directly." }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ message: "Your request couldn’t be emailed right now. Please call or email Kamaljit directly." }, { status: 502 });
  }

  return NextResponse.json({ message: "Thanks — your quote request has been sent. Kamaljit will follow up using the contact details you provided." });
}
