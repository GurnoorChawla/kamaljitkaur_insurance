import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export function SiteFooter() {
  return <footer className="footer"><div className="container footer-grid"><div><Link href="/" className="brand footer-brand"><span className="brand-logo-wrap"><Image src="/brand/kamaljit-kaur-logo.png" alt="" width={753} height={610} className="brand-logo"/></span><span><strong>{site.name}</strong><small>{site.title}</small></span></Link><p>Thoughtful insurance and savings advice, shaped around what matters to you.</p><small>Affiliated with {site.agency}</small></div><div><h3>Reach Kamaljit</h3><a href={`tel:${site.phoneLink}`}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><p>{site.address}</p></div><div><h3>Explore</h3><Link href="/services">Services</Link><Link href="/faqs">FAQs & resources</Link><Link href="/privacy">Privacy</Link></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span><span>Website information is general in nature. Coverage is not issued or bound through this site.</span></div></footer>;
}
