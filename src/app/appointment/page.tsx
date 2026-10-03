import type { Metadata } from "next";
import { CalendarDays, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { CalendlyEmbed } from "@/components/calendly-embed";

export const metadata: Metadata = {
  title: "Book a Conversation",
  description: "Book a time to speak with Kamaljit Kaur about your insurance needs.",
};

export default function AppointmentPage() {
  return <>
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow light">Make time for what matters</span>
        <h1>A little time now can bring more clarity.</h1>
        <p>Choose a time that works for you and let’s talk through your questions.</p>
      </div>
    </section>
    <section className="section appointment-section">
      <div className="container">
        <div className="centered-block booking-intro">
          <span className="eyebrow">Book online</span>
          <h2>Choose a time to connect.</h2>
          <p>Available appointment times are shown below. You’ll receive a confirmation from Calendly after booking.</p>
        </div>
        <CalendlyEmbed />
        <div className="booking-contact">
          <span><CalendarDays size={19}/> Prefer to arrange a time directly?</span>
          <div className="booking-actions">
            <a className="button button-primary" href={`tel:${site.phoneLink}`}><Phone size={16}/> Call {site.phone}</a>
            <a className="button button-outline" href={`mailto:${site.email}`}><Mail size={16}/> Email Kamaljit</a>
          </div>
        </div>
        <small className="booking-disclaimer">Appointments do not issue or bind insurance coverage.</small>
      </div>
    </section>
  </>;
}
