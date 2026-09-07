/**
 * DESIGN SYSTEM — Sonoran Quiet Luxury, live practice materials
 * This approval mockup retains public Dr. Brian Mitchell & Associates assets/copy,
 * with warm ivory, Saguaro Green, night fig and terracotta sun-portal architecture.
 * Homepage services use three image-led gateways plus compact service cards to keep the
 * complete care offering legible without creating a visually heavy, tall section.
 */
import { ArrowRight, CalendarDays, Clock3, MapPin, Menu, Phone, Star, X } from "lucide-react";
import { useState } from "react";

const liveAssets = {
  logo: "/assets/practice/brian-mitchell-live-logo_02f81e9c.png",
  brian: "/assets/practice/brian_c0d844bb.jpg",
  diana: "/assets/practice/dr-diana-zhen-live_c8e7cb59.jpg",
  office: "/assets/practice/brian-mitchell-live-office_d91a92cb.jpg",
  cosmetics: "/assets/practice/cosmetics_48be418b.png",
  orthodontics: "/assets/practice/ortho_9f9f5437.png",
  bioclear: "/assets/practice/bioclear-certified-dr-brian-mitchell_489e77d8.png",
};

function PracticeHeroVisual() {
  return (
    <div className="video-hero inset-0" aria-label="Dr. Brian Mitchell & Associates treatment room and dental technology">
      <video className="video-fallback" autoPlay loop muted playsInline preload="metadata" poster={liveAssets.office} aria-label="Dr. Brian Mitchell & Associates building and dental technology tour">
        <source src="/assets/practice/brian-mitchell-full-composition-practice-tour_5757208e.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

const featuredServices = [
  { number: "01", name: "Cosmetic Dentistry", copy: "Thoughtful aesthetic care for a smile that feels unmistakably like you.", image: liveAssets.cosmetics, position: "object-center", href: "/cosmetic-dentistry" },
  { number: "02", name: "Orthodontics", copy: "Traditional and Invisalign options that fit your life and your smile goals.", image: liveAssets.orthodontics, position: "object-center", href: "/services" },
  { number: "03", name: "Dental Implants", copy: "Modern tooth-replacement plans with comfort, function, and confidence at the centre.", image: liveAssets.office, position: "object-center", href: "/services" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page-shell min-h-screen overflow-x-hidden">
      <header className="relative z-20 bg-[#fffaf3]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
          <a className="block w-[160px] sm:w-[205px]" href="#top" aria-label="Dr. Brian Mitchell & Associates home"><img src={liveAssets.logo} className="h-auto w-full" alt="Dr. Brian Mitchell & Associates Dentistry, Dental Implants, Orthodontics" /></a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation"><a className="nav-link" href="#services">Services</a><a className="nav-link" href="#about">About</a><a className="nav-link" href="#patient-info">Patient Info</a><a className="nav-link" href="#new-patients">New Patients</a><a className="nav-link" href="#contact">Contact</a></nav>
          <div className="hidden items-center gap-3 sm:flex"><a className="action-button outline" href="tel:5205234860"><Phone className="h-3.5 w-3.5" />Call us</a><a className="action-button primary" href="#contact"><CalendarDays className="h-3.5 w-3.5" />Book an appointment</a></div>
          <button className="rounded-full border border-[#77a49f]/40 p-3 text-[#27594e] sm:hidden" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
        {menuOpen && <nav className="border-t border-[#77a49f]/15 bg-[#fffaf3] px-5 py-5 sm:hidden" aria-label="Mobile navigation"><div className="grid gap-4"><a className="nav-link" href="#services" onClick={() => setMenuOpen(false)}>Services</a><a className="nav-link" href="#about" onClick={() => setMenuOpen(false)}>About</a><a className="nav-link" href="#patient-info" onClick={() => setMenuOpen(false)}>Patient Info</a><a className="nav-link" href="#new-patients" onClick={() => setMenuOpen(false)}>New Patients</a><a className="nav-link" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a><a className="action-button primary mt-2 w-full" href="#contact" onClick={() => setMenuOpen(false)}>Book an appointment <ArrowRight className="h-4 w-4" /></a></div></nav>}
      </header>

      <main id="top">
        <section className="homepage-hero relative isolate overflow-hidden bg-[#e9f1ed] text-[#2b2930]">
          <div className="homepage-hero__video-band relative">
            <PracticeHeroVisual />
            <div className="hero-overlay absolute inset-0 hidden lg:block" />
            <div className="homepage-hero__video-scrim absolute inset-x-0 bottom-0 lg:hidden" aria-hidden="true" />
            <div className="sun-portal tall -bottom-24 -right-36 hidden opacity-55 lg:block" aria-hidden="true" />
            <div className="sun-portal wide -right-10 top-14 hidden opacity-45 lg:block" aria-hidden="true" />
            <div className="hero-media-label">Practice · equipment · technology</div>
          </div>
          <div className="homepage-hero__copy-band relative">
            <div className="homepage-hero__content relative mx-auto flex max-w-[1440px] items-end px-5 pb-10 pt-9 sm:px-8 lg:px-12 lg:pb-20 lg:pt-16 xl:pl-20">
              <div className="homepage-hero__copy-panel max-w-2xl"><div className="fade-up"><span className="stamp">Tucson, Arizona · Practice tour</span></div><p className="fade-up delay-1 mt-8 text-[.67rem] font-extrabold uppercase tracking-[.2em] text-[#47766c]">Dentistry · Dental Implants · Orthodontics</p><h1 className="fade-up delay-2 display-face mt-4 max-w-xl text-6xl leading-[.9] tracking-[-.04em] sm:text-7xl lg:text-[5.5rem] xl:text-[5.85rem]">Dentistry<br />Redefined</h1><p className="fade-up delay-3 mt-7 max-w-lg text-base leading-8 text-[#4f645f]">Experience the refined world of dentistry at Dr. Brian Mitchell & Associates. Our team is committed to cultivating strong, healthy, and aesthetically pleasing smiles.</p><div className="fade-up delay-3 mt-9 flex flex-col gap-3 sm:flex-row"><a className="action-button primary" href="/contact"><CalendarDays className="h-4 w-4" />Book an appointment</a><a className="action-button hero-outline" href="tel:5205234860"><Phone className="h-4 w-4" />Call (520) 523-4860</a></div><div className="fade-up delay-3 mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#27594e]/20 pt-5"><div className="flex gap-1">{[0, 1, 2, 3, 4].map((star) => <Star className="h-4 w-4 fill-[#77a49f] text-[#77a49f]" key={star} />)}</div><p className="text-sm font-semibold text-[#2b2930]"><strong>4.9</strong> Google rating</p><span className="hidden h-4 w-px bg-[#27594e]/25 sm:block" /><p className="text-sm text-[#52736b]">Same-day appointments available</p></div></div>
            </div>
          </div>
        </section>

        <section className="homepage-trust-strip bg-[#e8f1ed] text-[#27594e]"><div className="mx-auto grid max-w-[1440px] gap-6 px-5 py-7 sm:px-8 md:grid-cols-3 md:gap-0 lg:px-12"><div className="flex items-center gap-4 md:border-r md:border-[#27594e]/18 md:pr-8"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#27594e]/10"><Star className="h-4 w-4 fill-[#27594e] text-[#27594e]" /></span><p className="text-sm leading-6"><strong className="font-extrabold">Why Dr. Mitchell?</strong><br /><span className="text-[#52736b]">A sophisticated approach to care.</span></p></div><div className="flex items-center gap-4 md:border-r md:border-[#27594e]/18 md:px-8"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#27594e]/10"><Clock3 className="h-4 w-4" /></span><p className="text-sm leading-6"><strong className="font-extrabold">Time for your smile</strong><br /><span className="text-[#52736b]">Clear, personal treatment planning.</span></p></div><div className="flex items-center gap-4 md:pl-8"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#27594e]/10"><MapPin className="h-4 w-4" /></span><p className="text-sm leading-6"><strong className="font-extrabold">In Tucson</strong><br /><span className="text-[#52736b]">Comprehensive care close to home.</span></p></div></div></section>

        <section id="about" className="relative mx-auto max-w-[1440px] overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="sun-portal wide -left-44 bottom-9 border-[#df8b64]/50" aria-hidden="true" /><div className="relative grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div className="relative"><div className="absolute -left-3 -top-3 h-full w-full border border-[#d77c55]/55" /><img src={liveAssets.brian} alt="Dr. Brian Mitchell" className="relative aspect-[4/4.6] w-full object-cover object-[center_22%]" /></div><div><p className="eyebrow">Why Dr. Mitchell?</p><h2 className="display-face mt-4 max-w-xl text-4xl leading-[.98] tracking-[-.025em] text-[#2b2930] sm:text-5xl">A personal touch to dentistry.</h2><p className="mt-6 max-w-xl text-base leading-8 text-[#596966]">In our serene environment, we go beyond routine dental care, providing personalized services designed to meet your individual needs. Your well-being and comfort take center stage.</p><p className="mt-5 max-w-xl text-base leading-8 text-[#596966]">While we excel in the essentials of maintaining optimal oral health, we recognize the importance of your smile and are devoted to preserving and improving its natural beauty.</p><a className="action-button dark mt-8" href="#contact">Learn more about our practice <ArrowRight className="h-4 w-4" /></a></div></div></section>

        <section id="services" className="bg-[#f7efe5]"><div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="grid gap-9 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><div><p className="eyebrow">Our services</p><h2 className="display-face mt-4 max-w-md text-4xl leading-[.98] tracking-[-.025em] text-[#2b2930] sm:text-5xl">Care for the smile you want to share.</h2></div><p className="max-w-xl text-sm leading-7 text-[#596966]">Welcome to our dental family. At our office, we believe in making your dental journey as comfortable as possible. Dr. Brian Mitchell & Associates bring a personal touch to dentistry.</p></div><div className="featured-service-grid mt-12">{featuredServices.map((service) => <a className="homepage-service-card group block no-underline" href={service.href} key={service.name}><img src={service.image} alt="" className={`absolute inset-0 h-full w-full object-cover ${service.position}`} /><div className="absolute inset-0 bg-gradient-to-t from-[#2b2930]/90 via-[#2b2930]/12 to-transparent" /><div className="absolute right-4 top-4 h-11 w-11 rounded-full border border-[#df8b64]/80" aria-hidden="true" /><div className="relative flex min-h-[330px] flex-col justify-end p-6 text-white"><p className="text-[.62rem] font-extrabold uppercase tracking-[.15em] text-[#d7e9e6]">{service.number} · Care tailored to you</p><div className="mt-3 flex items-end justify-between gap-3"><div><h3 className="display-face text-3xl leading-none">{service.name}</h3><p className="mt-3 max-w-[245px] text-sm leading-6 text-white/85">{service.copy}</p></div><span className="service-arrow flex-none"><ArrowRight className="h-4 w-4" /></span></div></div></a>)}</div><div className="mt-9 flex justify-center"><a className="action-button outline" href="/services">Explore all services <ArrowRight className="h-4 w-4" /></a></div></div></section>

        <section id="new-patients" className="bg-[#fffaf3]"><div className="mx-auto grid max-w-[1440px] overflow-hidden lg:grid-cols-[.92fr_1.08fr]"><div className="relative overflow-hidden bg-[#2b2930] px-5 py-16 text-white sm:px-8 lg:px-16 lg:py-24"><div className="sun-portal wide -bottom-24 -left-16 border-[#df8b64]/80" aria-hidden="true" /><div className="relative"><p className="eyebrow text-[#bde0da]">New patient specials</p><h2 className="display-face mt-4 max-w-lg text-4xl leading-[.98] tracking-[-.025em] sm:text-5xl">A clearer next step starts here.</h2><p className="mt-6 max-w-lg text-sm leading-7 text-[#d8e8e5]">Explore payment options, an in-house dental savings plan, Invisalign treatment, and dental implant care with a team ready to talk through your choices.</p><a className="action-button primary mt-8" href="#contact">Explore new patient specials <ArrowRight className="h-4 w-4" /></a></div></div><div className="relative min-h-[460px] bg-[#d8e5df]"><img src={liveAssets.diana} alt="Dr. Diana Zhen" className="absolute inset-0 h-full w-full object-contain object-center" /><div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#2b2930]/78 via-[#2b2930]/20 to-transparent" /><div className="absolute right-7 top-7 h-16 w-16 rounded-full border border-[#df8b64]" aria-hidden="true" /><div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10"><p className="text-[.63rem] font-extrabold uppercase tracking-[.17em] text-[#bfe1dc]">Meet our new doctor</p><h3 className="display-face mt-2 text-4xl leading-none">Dr. Diana Zhen</h3><a className="mt-5 inline-flex items-center gap-2 text-[.7rem] font-extrabold uppercase tracking-[.1em] text-white no-underline" href="#contact">Learn more <ArrowRight className="h-4 w-4" /></a></div></div></div></section>

        <section id="patient-info" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="relative overflow-hidden border-y border-[#77a49f]/24 py-12 text-center"><div className="sun-portal wide -top-24 right-10 border-[#df8b64]/55" aria-hidden="true" /><div className="relative"><p className="eyebrow">Patient information</p><h2 className="display-face mx-auto mt-4 max-w-2xl text-4xl leading-[.98] tracking-[-.025em] text-[#2b2930] sm:text-5xl">A more confident smile starts with a conversation.</h2><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a className="action-button dark" href="#contact">Let’s connect <ArrowRight className="h-4 w-4" /></a><a className="action-button outline" href="tel:5205234860"><Phone className="h-4 w-4" />Call the practice</a></div></div></div></section>

        <section id="contact" className="relative overflow-hidden bg-[#27594e] text-white"><div className="sun-portal tall -right-44 -bottom-28 border-[#f6c3a9]/70" aria-hidden="true" /><div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1.15fr_.85fr] lg:px-12 lg:py-28"><div><p className="eyebrow text-[#f6d1bd]">Book an appointment</p><h2 className="display-face mt-4 max-w-xl text-5xl leading-[.94] tracking-[-.035em] sm:text-6xl">Your next step can be simple.</h2><p className="mt-7 max-w-lg text-base leading-8 text-white/85">Call our team today to schedule your appointment. We are here to help you feel welcome, informed, and ready to care for your smile.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a className="action-button dark" href="tel:5205234860"><Phone className="h-4 w-4" />Call (520) 523-4860</a><a className="action-button light" href="#top"><CalendarDays className="h-4 w-4" />Online booking to connect</a></div></div><div className="border-l border-white/35 pl-6 sm:pl-8"><p className="text-[.62rem] font-extrabold uppercase tracking-[.16em] text-[#f6d1bd]">Visit us</p><p className="mt-4 text-base font-bold leading-7">6383 E. Grant Road, Suite 155<br />Tucson, AZ 85715</p><div className="hairline my-7" /><p className="text-[.62rem] font-extrabold uppercase tracking-[.16em] text-[#f6d1bd]">Office hours</p><p className="mt-3 text-sm leading-7 text-white/85">Monday · 8am to 4pm<br />Tuesday · 8am to 4pm<br />Wednesday · 7am to 4pm<br />Thursday · 7am to 4pm<br />Friday · 7am to 4pm</p></div></div></section>
      </main>

      <footer className="bg-[#fffaf3]"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-7 px-5 py-10 sm:px-8 md:flex-row md:items-center lg:px-12"><img src={liveAssets.logo} alt="Dr. Brian Mitchell & Associates" className="w-[210px]" /><p className="max-w-md text-[.62rem] leading-5 text-[#72827f]">Dentistry · Dental Implants · Orthodontics · 6383 E. Grant Road, Suite 155, Tucson, AZ 85715</p><div className="flex items-center gap-3 border-l-2 border-[#bb6846] pl-3"><img src={liveAssets.bioclear} alt="Dr. Brian Mitchell BioClear Certified" className="h-16 w-16 object-contain" /><p className="max-w-[155px] text-[0.64rem] font-extrabold uppercase leading-4 tracking-[0.11em] text-[#27594e]">Dr. Brian Mitchell<br />BioClear Certified</p></div></div></footer>
      <div className="fixed inset-x-0 bottom-0 z-30 flex items-center gap-3 bg-[#fffaf3]/95 px-4 py-3 shadow-[0_-6px_30px_rgba(26,29,30,.13)] backdrop-blur md:hidden"><a className="action-button outline flex-1 py-3" href="tel:5205234860"><Phone className="h-3.5 w-3.5" />Call</a><a className="action-button primary flex-1 py-3" href="#contact"><CalendarDays className="h-3.5 w-3.5" />Book</a></div>
    </div>
  );
}
