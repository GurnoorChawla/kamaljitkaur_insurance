import type { Metadata } from "next";
import { Mail, MapPin, Phone, CalendarDays } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";
import { ContactForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kamaljit Kaur by phone or email. Serving insurance clients in British Columbia and Manitoba.",
};

export default function ContactPage() {
  return <>
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow light">Contact</span>
        <h1>Tell me what you’re looking for.</h1>
        <p>Request a free quote or get in touch with a question.</p>
      </div>
    </section>
    <section className="section">
      <div className="container contact-layout">
        <div>
          <span className="eyebrow">I’m easy to reach</span>
          <h2>Let’s find the right fit for you.</h2>
          <p>Call or email directly, or use the form to request a free quote. Please keep sensitive health, financial, identity and policy details out of the form.</p>
          <div className="contact-list">
            <a href={`tel:${site.phoneLink}`}><span className="contact-icon"><Phone/></span><span><small>Call or text</small><strong>{site.phone}</strong></span></a>
            <a href={`mailto:${site.email}`}><span className="contact-icon"><Mail/></span><span><small>Email</small><strong>{site.email}</strong></span></a>
            <div><span className="contact-icon"><MapPin/></span><span><small>Office address</small><strong>{site.address}</strong></span></div>
            <div><span className="contact-icon"><CalendarDays/></span><span><small>Calls & appointments</small><strong>Monday–Friday, 9 a.m.–7 p.m.</strong></span></div>
          </div>
          <Link href="/appointment" className="text-link"><CalendarDays size={17}/> Arrange a time to talk</Link>
        </div>
        <div id="contact-form"><ContactForm/></div>
      </div>
    </section>
  </>;
}
