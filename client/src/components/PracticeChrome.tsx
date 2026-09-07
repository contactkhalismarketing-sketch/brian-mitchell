/**
 * DESIGN SYSTEM — Sonoran Quiet Luxury / live practice materials
 * Shared page chrome keeps the practice experience quiet, clear, and personal:
 * live logo, airy ivory field, sage actions, and terracotta architectural accents.
 */
import { CalendarDays, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export const liveAssets = {
  logo: "/assets/practice/brian-mitchell-live-logo_02f81e9c.png",
  brian: "/assets/practice/brian_c0d844bb.jpg",
  diana: "/assets/practice/diana_4c83a6c1.jpg",
  office: "/assets/practice/brian-mitchell-live-office_d91a92cb.jpg",
  cosmetics: "/assets/practice/cosmetics_48be418b.png",
  orthodontics: "/assets/practice/ortho_9f9f5437.png",
  brianAbout: "/assets/practice/brian_c0d844bb.jpg",
  dianaAbout: "/assets/practice/diana_4c83a6c1.jpg",
  team: "/assets/practice/team-practice_c32289f8.jpg",
  blogSoftTissue: "/assets/practice/blog-soft-tissue_118170c6.png",
  blogImplant: "/assets/practice/blog-implant_6ad9e8fd.png",
  bioclear: "/assets/practice/bioclear-certified-dr-brian-mitchell_489e77d8.png",
};

const navigation = [
  { label: "Services", href: "/services", active: "services" },
  { label: "About", href: "/about", active: "about" },
  { label: "Patient Info", href: "/blogs", active: "blogs" },
  { label: "New Patients", href: "/contact", active: "new" },
  { label: "Contact", href: "/contact", active: "contact" },
];

export function PracticeHeader({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="relative z-30 bg-[#fffaf3]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="block w-[160px] sm:w-[205px]" aria-label="Dr. Brian Mitchell & Associates home">
          <img src={liveAssets.logo} className="h-auto w-full" alt="Dr. Brian Mitchell & Associates Dentistry, Dental Implants, Orthodontics" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => <Link href={item.href} className={`nav-link ${active === item.active ? "text-[#27594e]" : ""}`} key={item.label}>{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 sm:flex"><a className="action-button outline" href="tel:5205234860"><Phone className="h-3.5 w-3.5" />Call us</a><Link href="/contact" className="action-button primary"><CalendarDays className="h-3.5 w-3.5" />Book an appointment</Link></div>
        <button className="rounded-full border border-[#77a49f]/40 p-3 text-[#27594e] sm:hidden" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {menuOpen && <nav className="border-t border-[#77a49f]/15 bg-[#fffaf3] px-5 py-5 sm:hidden" aria-label="Mobile navigation"><div className="grid gap-4">{navigation.map((item) => <Link key={item.label} className="nav-link" href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}<Link className="action-button primary mt-2 w-full" href="/contact" onClick={() => setMenuOpen(false)}>Book an appointment <CalendarDays className="h-4 w-4" /></Link></div></nav>}
    </header>
  );
}

export function PracticeFooter() {
  return (
    <>
      <footer className="bg-[#fffaf3]"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-7 px-5 py-10 sm:px-8 md:flex-row md:items-center lg:px-12"><img src={liveAssets.logo} alt="Dr. Brian Mitchell & Associates" className="w-[210px]" /><div className="text-xs leading-6 text-[#72827f]"><p>6383 E. Grant Road, Suite 155 · Tucson, AZ 85715</p><p>Monday–Tuesday 8am–4pm · Wednesday–Friday 7am–4pm</p></div><div className="flex items-center gap-3 border-l-2 border-[#bb6846] pl-3"><img src={liveAssets.bioclear} alt="Dr. Brian Mitchell BioClear Certified" className="h-16 w-16 object-contain" /><p className="max-w-[155px] text-[0.64rem] font-extrabold uppercase leading-4 tracking-[0.11em] text-[#27594e]">Dr. Brian Mitchell<br />BioClear Certified</p></div></div></footer>
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 bg-[#fffaf3]/95 px-4 py-3 shadow-[0_-6px_30px_rgba(26,29,30,.13)] backdrop-blur md:hidden"><a className="action-button outline flex-1 py-3" href="tel:5205234860"><Phone className="h-3.5 w-3.5" />Call</a><Link className="action-button primary flex-1 py-3" href="/contact"><CalendarDays className="h-3.5 w-3.5" />Book</Link></div>
    </>
  );
}
