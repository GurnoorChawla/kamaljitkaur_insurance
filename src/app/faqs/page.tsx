import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export const metadata: Metadata = { title: "FAQs & Resources", description: "Answers to common questions about talking with an insurance advisor in BC and Manitoba." };
const faqs = [
  ["Which areas do you serve?", "Kamaljit serves clients in British Columbia and Manitoba. Conversations can be arranged remotely."],
  ["What should I bring to an initial conversation?", "Bring your questions and a sense of what you’d like to sort out. We can take it from there. Please don’t send sensitive information through the public contact form."],
  ["Can I request a quote online?", "Yes. Use the contact form to tell Kamaljit what type of coverage you’re interested in. Please don’t include health, financial, identity or policy details in the public form."],
  ["Can I get coverage through this website?", "No. This website provides general information and a way to connect. It does not issue or bind insurance coverage."],
  ["How do I book a time?", "Choose an available time on the Appointment page, or call or email Kamaljit to arrange a conversation."],
  ["Is my information private?", "We ask for only basic contact information on public forms. Please don’t share health, financial, identity or policy details there. Read the privacy page for current information and review notes."],
];
export default function FaqPage() { return <><section className="page-hero"><div className="container"><span className="eyebrow light">FAQs & resources</span><h1>Before we get started.</h1><p>Useful details about how I work and what to expect.</p></div></section><section className="section"><div className="container faq-layout"><div><span className="eyebrow">A few things people ask</span><h2>It’s okay to start with questions.</h2></div><div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section><section className="section section-tint"><div className="container centered-block"><span className="eyebrow">Need a hand?</span><h2>Ask me directly.</h2><p>I’ll help you figure out the right next step.</p><Link href="/contact" className="button button-primary">Send Kamaljit a note <ArrowRight size={16}/></Link></div></section></> }
