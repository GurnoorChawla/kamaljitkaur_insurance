"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="topline"><div className="container topline-inner"><span>Serving clients across British Columbia & Manitoba</span><a href={`tel:${site.phoneLink}`}><Phone size={14} /> {site.phone}</a></div></div><div className="container header-inner"><Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-logo-wrap"><Image src="/brand/kamaljit-kaur-logo.png" alt="" width={753} height={610} priority className="brand-logo"/></span><span><strong>{site.name}</strong><small>{site.title}</small></span></Link><button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav className={open ? "nav open" : "nav"}>{nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<a className="nav-cta" href={site.bookingUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Get a free quote</a></nav></div></header>;
}
