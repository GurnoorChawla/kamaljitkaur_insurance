import Script from "next/script";
import { site } from "@/lib/site";

export function CalendlyEmbed() {
  return <>
    <div className="calendly-embed" aria-label="Calendly appointment booking calendar">
      <div className="calendly-inline-widget" data-url={site.bookingUrl} style={{ minWidth: "320px", height: "760px" }} />
    </div>
    <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    <div className="booking-fallback">
      <a href={site.bookingUrl} target="_blank" rel="noreferrer">Open the booking calendar in a new tab</a>
    </div>
  </>;
}
