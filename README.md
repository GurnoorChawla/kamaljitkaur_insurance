# Kamaljit Kaur | Insurance Advisor

Professional Next.js website for Kamaljit Kaur, Insurance Advisor. The public site includes Home, Services, About, FAQs, Contact, Appointment and Privacy pages. It serves prospective clients in British Columbia and Manitoba. The contact form validates quote requests and emails them to Kamaljit using Resend when its API key and verified sender address are configured. The website does not maintain a separate submissions database.

## Run locally

1. Install Node.js 20.9 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add `RESEND_API_KEY` and `RESEND_FROM_EMAIL` to enable quote-request emails.
4. Run `npm run dev` and open `http://localhost:3000`.

## Booking calendar

The Appointment page embeds the advisor's Calendly event page. Calendly availability, calendar conflict checking, lunch breaks and host SMS notifications must be configured in the Calendly account. Connect and verify the advisor's calendar there, configure the schedule and verify the host phone for SMS.

## Before launch

- Configure `RESEND_API_KEY` and `RESEND_FROM_EMAIL` in the deployment environment. Verify the sender domain in Resend and submit a real end-to-end form request to confirm delivery to `punjabinsurancekelowna@gmail.com`.
- Configure and verify the public booking URL if online scheduling is wanted.
- Review the privacy notice, consent wording, applicable BC/Manitoba and federal requirements, disclosures, data practices and vendor terms with the advisor or qualified counsel. This implementation does not itself establish compliance.
- Confirm online booking works before describing it as operational.
- Replace canonical metadata URL if needed, add professionally reviewed Punjabi translations for key pages/forms, and proofread all public copy.
- Run `npm test`, `npm run build`, accessibility checks, responsive review and form/error-state review before deployment.
