import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { default: "Kamaljit Kaur | Insurance Advisor in BC & Manitoba", template: "%s | Kamaljit Kaur" },
  description: "Personal insurance and savings advice shaped around your needs, priorities and budget. Kamaljit Kaur serves clients in British Columbia and Manitoba.",
  openGraph: { title: `${site.name} | ${site.title}`, description: "Thoughtful insurance advice shaped around you, serving British Columbia and Manitoba.", type: "website" },
  icons: { icon: "/brand/kamaljit-kaur-logo.png" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><a href="#main" className="skip-link">Skip to content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html> }
