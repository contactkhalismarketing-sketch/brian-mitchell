import logo from "../assets/practice/brian-mitchell-live-logo_02f81e9c.png";
import brian from "../assets/practice/brian_c0d844bb.jpg";
import diana from "../assets/practice/diana_4c83a6c1.jpg";
import dianaHome from "../assets/practice/dr-diana-zhen-live_c8e7cb59.jpg";
import office from "../assets/practice/brian-mitchell-live-office_d91a92cb.jpg";
import cosmetics from "../assets/practice/cosmetics_48be418b.png";
import orthodontics from "../assets/practice/ortho_9f9f5437.png";
import teamPracticePhoto from "../assets/practice/team-practice_c32289f8.jpg";
import blogSoftTissue from "../assets/practice/blog-soft-tissue_118170c6.png";
import blogImplant from "../assets/practice/blog-implant_6ad9e8fd.png";
import bioclear from "../assets/practice/bioclear-certified-dr-brian-mitchell_489e77d8.png";
import cosmeticHeroPoster from "../assets/practice/cosmetic-hero-poster_7f4095a0.jpg";
import cosmeticYoutubeThumb from "../assets/practice/brian-cosmetic-youtube-thumb_7a5e79b6.jpg";
import camille from "../assets/practice/camille_06a39838.jpg";
import roxanne from "../assets/practice/roxanne_50319ff2.jpg";
import tenzi from "../assets/practice/tenzi_625460fa.jpg";
import crystal from "../assets/practice/crystal_cf908663.jpg";
import monique from "../assets/practice/monique_166d66e2.jpg";
import nita from "../assets/practice/nita_74b0856c.jpg";
import jackie from "../assets/practice/jackie_99712114.jpg";
import kiana from "../assets/practice/kiana_d5850992.jpg";
import yuri from "../assets/practice/yuri_059e611a.jpg";
import gisselle from "../assets/practice/gisselle_06071191.jpg";
import heroAdultBraces from "../assets/practice/heroes/adult-braces-hero.jpg";
import heroAdultBracesMobile from "../assets/practice/heroes/adult-braces-hero-mobile.jpg";
import heroBioclear from "../assets/practice/heroes/bioclear-hero.jpg";
import heroBioclearMobile from "../assets/practice/heroes/bioclear-hero-mobile.jpg";
import heroBridges from "../assets/practice/heroes/bridges-hero.jpg";
import heroBridgesMobile from "../assets/practice/heroes/bridges-hero-mobile.jpg";
import heroCosmetic from "../assets/practice/heroes/cosmetic-dentistry-hero.jpg";
import heroCosmeticMobile from "../assets/practice/heroes/cosmetic-dentistry-hero-mobile.jpg";
import heroImplants from "../assets/practice/heroes/dental-implants-hero.jpg";
import heroImplantsMobile from "../assets/practice/heroes/dental-implants-hero-mobile.jpg";
import heroExtractions from "../assets/practice/heroes/extractions-hero.jpg";
import heroExtractionsMobile from "../assets/practice/heroes/extractions-hero-mobile.jpg";
import heroOrthodontics from "../assets/practice/heroes/orthodontics-hero.jpg";
import heroOrthodonticsMobile from "../assets/practice/heroes/orthodontics-hero-mobile.jpg";
import heroPreventative from "../assets/practice/heroes/preventative-dentistry-hero.jpg";
import heroPreventativeMobile from "../assets/practice/heroes/preventative-dentistry-hero-mobile.jpg";
import heroCleaning from "../assets/practice/heroes/professional-teeth-cleaning-hero.jpg";
import heroCleaningMobile from "../assets/practice/heroes/professional-teeth-cleaning-hero-mobile.jpg";
import heroRootCanals from "../assets/practice/heroes/root-canals-hero.jpg";
import heroRootCanalsMobile from "../assets/practice/heroes/root-canals-hero-mobile.jpg";
import heroRoutine from "../assets/practice/heroes/routine-dental-care-hero.jpg";
import heroRoutineMobile from "../assets/practice/heroes/routine-dental-care-hero-mobile.jpg";
import heroWhitening from "../assets/practice/heroes/whitening-hero.jpg";
import heroWhiteningMobile from "../assets/practice/heroes/whitening-hero-mobile.jpg";
import heroJeuveau from "../assets/practice/heroes/jeuveau-hero.jpg";
import heroJeuveauMobile from "../assets/practice/heroes/jeuveau-hero-mobile.jpg";
import heroBlogs from "../assets/practice/heroes/blogs-hero.jpg";
import heroBlogsMobile from "../assets/practice/heroes/blogs-hero-mobile.jpg";

// Service hero set: subject sits right of centre with clear space on the left, so the desktop
// copy card overlays the empty side. `position` is the desktop focal point (x anchored right,
// y centred on the subject); the mobile crop is already tight around the subject.
export const serviceHeroes = {
  adultBraces: { image: heroAdultBraces, mobile: heroAdultBracesMobile, position: "100% 58%" },
  bioclear: { image: heroBioclear, mobile: heroBioclearMobile, position: "100% 62%" },
  bridges: { image: heroBridges, mobile: heroBridgesMobile, position: "100% 58%" },
  cosmetic: { image: heroCosmetic, mobile: heroCosmeticMobile, position: "100% 69%" },
  implants: { image: heroImplants, mobile: heroImplantsMobile, position: "100% 67%" },
  extractions: { image: heroExtractions, mobile: heroExtractionsMobile, position: "100% 69%" },
  orthodontics: { image: heroOrthodontics, mobile: heroOrthodonticsMobile, position: "100% 69%" },
  preventative: { image: heroPreventative, mobile: heroPreventativeMobile, position: "100% 62%" },
  cleaning: { image: heroCleaning, mobile: heroCleaningMobile, position: "100% 60%" },
  rootCanals: { image: heroRootCanals, mobile: heroRootCanalsMobile, position: "100% 64%" },
  routine: { image: heroRoutine, mobile: heroRoutineMobile, position: "100% 53%" },
  whitening: { image: heroWhitening, mobile: heroWhiteningMobile, position: "100% 69%" },
  jeuveau: { image: heroJeuveau, mobile: heroJeuveauMobile, position: "100% 67%" },
  // Composed in-house from the blog photos (editorial spread on the sand tone), not a stock image.
  blogs: { image: heroBlogs, mobile: heroBlogsMobile, position: "100% 50%" },
};

export const liveAssets = {
  logo,
  brian,
  diana,
  dianaHome,
  office,
  cosmetics,
  orthodontics,
  brianAbout: brian,
  dianaAbout: diana,
  team: teamPracticePhoto,
  blogSoftTissue,
  blogImplant,
  bioclear,
  cosmeticHeroPoster,
  cosmeticYoutubeThumb,
  heroVideo: "/assets/practice/brian-mitchell-hero-loop_5757208e.mp4",
  logoPublicPath: "/assets/practice/brian-mitchell-live-logo_02f81e9c.png",
};

export const navigation = [
  { label: "Services", href: "/services/", active: "services" },
  { label: "About", href: "/about/", active: "about" },
  { label: "Blogs", href: "/patient-info/blogs/", active: "blogs" },
  { label: "Contact", href: "/contact/", active: "contact" },
];

export const servicesMenu = [
  { label: "Cosmetic Dentistry", href: "/service/cosmetic-dentistry/" },
  { label: "Orthodontics", href: "/service/orthodontics/" },
  { label: "Dental Implants", href: "/service/dental-implants/" },
  { label: "Bioclear", href: "/service/bioclear/" },
  { label: "Whitening", href: "/service/whitening/" },
  { label: "Preventative Dentistry", href: "/service/preventative-dentistry/" },
  { label: "Extractions", href: "/service/extractions/" },
  { label: "Bridges", href: "/service/bridges/" },
  { label: "Root Canals", href: "/service/root-canals/" },
  { label: "Adult Braces", href: "/service/adult-braces/" },
  { label: "Professional Teeth Cleaning", href: "/service/professional-teeth-cleaning/" },
  { label: "Routine Dental Care", href: "/service/preventative-dentistry/" },
  { label: "Jeuveau Injections", href: "/jeuveau-injections-in-tucson-effective-tmd-treatment-and-wrinkle-reduction/" },
];

// Matches the live site's "Patient Info" dropdown structure
// (brianmitchelldds.com): First Time Visit, Financial, Forms, FAQ.
export const patientInfoMenu = [
  { label: "First Time Visit", href: "/first-visit/" },
  { label: "Financial", href: "/patient-info/financial/" },
  { label: "Forms", href: "/patient-info/forms/" },
  { label: "FAQ", href: "/patient-info/faq/" },
];

// Sourced from the live Forms page (brianmitchelldds.com/forms/).
export const formCategories = [
  {
    name: "New Patient Forms",
    items: ["New Patient Information", "Financial Office Policies"],
  },
  {
    name: "Post-Operative Care Instructions",
    items: ["Tooth Removal", "Implant Placement", "Mitchell Whitening"],
  },
  {
    name: "Consent Forms",
    items: ["Tooth Extractions", "Endo (Root Canal)", "Surgical Implant"],
  },
];

// Sourced from the live practice site (brianmitchelldds.com) — real pricing,
// financing terms, first-visit process, and a real published patient review.
// Do not replace with invented figures or fabricated testimonials.
export const testimonial = {
  quote: "This is a spectacular dental office! If you are looking for a new dentist, I cannot recommend this place enough.",
  author: "Autumn S.",
};

// Real, verified reviews sourced directly from the practice's Google
// Business Profile (screenshots supplied by the client). Quotes are
// trimmed to the punchiest sentence(s) — every word here is a direct
// excerpt of what the reviewer wrote, nothing paraphrased or invented.
export const testimonials = [
  {
    quote: "Dr. Brian Mitchell is truly a magician. He installed two implants on my lower jaw in less than an hour, and I didn't feel a thing.",
    author: "SV Shay",
    source: "Google review",
  },
  {
    quote: "Best dental care in Tucson! Dr Mitchell did my Invisalign and got my smile exactly where I wanted it!",
    author: "Linzi E.",
    source: "Google review",
  },
  {
    quote: "I was very nervous but the staff at Dr. Mitchell's was amazing! They all made me feel very comfortable.",
    author: "Ashley S.",
    source: "Google review",
  },
  {
    quote: "From the front door everyone at this dental office treated you like you were a friend.",
    author: "Derra Conyer",
    source: "Google review",
  },
  {
    quote: "I had a great experience! The entire staff was friendly and welcoming, and everything was explained clearly.",
    author: "Alexa Leal Celaya",
    source: "Google review",
  },
  {
    quote: "The most stress-free dental experience I've had in years, thanks to a wonderfully talented doctor, caring staff, and beautiful setting.",
    author: "Path Finder",
    source: "Google review",
  },
  {
    quote: "This is a spectacular dental office! If you are looking for a new dentist, I cannot recommend this place enough.",
    author: "Autumn S.",
    source: "Google review",
  },
];

export const practiceStats = {
  combinedExperience: "50 years",
  googleRating: "4.9",
  reviewCount: 422,
};

export const specials = [
  {
    name: "Dental Implant Special",
    price: "$3,500",
    detail: "Includes the final crown. Does not include bone or soft tissue grafting, if needed.",
  },
  {
    name: "Invisalign® Treatment",
    price: "Free consultation",
    detail: "A complimentary consultation to talk through comprehensive clear-aligner treatment.",
  },
  {
    name: "In-House Dental Savings Plan",
    price: "$650 / year",
    detail: "For patients without insurance. Call the practice for full plan details.",
  },
];

export const financingOptions = [
  {
    name: "PPO Insurance",
    detail: "We bill PPO insurance plans directly. Your plan must allow you to see any healthcare provider — HMO plans cannot be billed.",
  },
  {
    name: "Mitchell Savings Plan",
    detail: "Our in-house plan for uninsured patients: $650 per year. Call the practice for full details.",
  },
  {
    name: "CareCredit®",
    detail: "A convenient way to make interest-free payments on your dental work.",
  },
];

export const firstVisitSteps = [
  {
    name: "Medical & dental history",
    detail: "A thorough review of your background so your plan accounts for your full health picture.",
  },
  {
    name: "Diagnostic imaging",
    detail: "Any necessary X-rays, intraoral photos, and a full digital scan of your teeth.",
  },
  {
    name: "Clinical evaluation",
    detail: "Dr. Mitchell personally reviews TMJ (jaw joint) health, performs an oral cancer screening, and evaluates your bite, periodontal health, and orthodontic needs.",
  },
  {
    name: "Your custom plan",
    detail: "This visit sets the baseline for a dental plan tailored to your individual oral health — built for the long-term health of your teeth and smile.",
  },
];

export const team = [
  {
    name: "Camille",
    role: "Treatment Plan Coordinator",
    image: camille,
    bio: "During my off time I appreciate that I get to exercise. Reading is a favorite of mine. I enjoy a good murder mystery, and I care deeply about Alzheimer's, diabetes, and domestic-abuse education and awareness. If you asked what I do with friends in my spare time, I would say: what spare time?",
  },
  {
    name: "Roxanne",
    role: "Dental Hygienist",
    image: roxanne,
    bio: "One of my favorite parts of my career is the way patients introduce the world to me. From travel and careers to sharing life perspectives, I appreciate their knowledge and wisdom. I love adventure and all sports—especially the University of Arizona Wildcats. Bear Down!",
  },
  {
    name: "Tenzi",
    role: "Dental Hygienist",
    image: tenzi,
    bio: "I have worked in dentistry for more than 15 years and have lived in Tucson since 1992. I take pride in tailoring care to each patient and improving dental awareness. I speak Hungarian, Romanian, and English, and enjoy hiking, reading, movies, and time with family and friends.",
  },
  {
    name: "Crystal",
    role: "Financial / Orthodontic Coordinator",
    image: crystal,
    bio: "As a Tucson native with more than 19 years in the dental field, I am passionate about numbers and managing office finances. Outside of work, I enjoy spending quality time with my family and going shopping.",
  },
  {
    name: "Monique",
    role: "Dental Hygienist",
    image: monique,
    bio: "I bring more than 25 years of dental experience and a passion for oral-health education. I also mentor future dental hygienists at Pima Community College. As a mother of four, I value family, continuing education, volunteering, and giving every patient compassionate, tailored care.",
  },
  {
    name: "Nita",
    role: "Dental Assistant",
    image: nita,
    bio: "I was born in Utah, raised in Los Angeles, and came to Tucson in 2000. I began as a dental technician in the U.S. Navy in 1985. I enjoy the arts, music, painting, sculpture, and jewelry-making, and I am passionate about helping patients enhance their smiles.",
  },
  {
    name: "Jackie",
    role: "Dental Hygienist",
    image: jackie,
    bio: "I was born and raised in Tucson and love our desert landscape. Patient care and education led me to dental hygiene, and my goal is to give every patient the most comfortable and comprehensive care possible. Weekends near any body of water with family are a favorite.",
  },
  {
    name: "Kiana",
    role: "Patient Coordinator",
    image: kiana,
    bio: "As one of the first people you will meet, I work to make each visit smooth and welcoming. Clear communication—whether managing calls or keeping patients informed about appointments—is central to my role. I am passionate about music, authenticity, balance, and compassion.",
  },
  {
    name: "Yuri",
    role: "Patient Care Team",
    image: yuri,
    bio: "Yuri helps create a calm, welcoming experience for every patient, supporting the thoughtful and personal care that defines the practice from the first hello through each visit.",
  },
  {
    name: "Gisselle",
    role: "Dental Assistant",
    image: gisselle,
    bio: "I am a Tucson native and have worked in the dental field for 20 years. I still love seeing patients smile. When I am not assisting, I enjoy baking and spending time with my grandchildren.",
  },
];

export const serviceList = [
  ["Cosmetic Dentistry", "A personalised approach to a smile that feels like you.", serviceHeroes.cosmetic.mobile, "/service/cosmetic-dentistry/"],
  ["Orthodontics", "Traditional and Invisalign options for patients of every age.", serviceHeroes.orthodontics.mobile, "/service/orthodontics/"],
  ["Dental Implants", "Modern tooth-replacement plans with comfort at the centre.", serviceHeroes.implants.mobile, "/service/dental-implants/"],
] as const;

export const featuredServices = [
  { number: "01", name: "Cosmetic Dentistry", copy: "Thoughtful aesthetic care for a smile that feels unmistakably like you.", image: serviceHeroes.cosmetic.mobile, href: "/service/cosmetic-dentistry/" },
  { number: "02", name: "Orthodontics", copy: "Traditional and Invisalign options that fit your life and your smile goals.", image: serviceHeroes.orthodontics.mobile, href: "/service/orthodontics/" },
  { number: "03", name: "Dental Implants", copy: "Modern tooth-replacement plans with comfort, function, and confidence at the centre.", image: serviceHeroes.implants.mobile, href: "/service/dental-implants/" },
] as const;

export const additionalServiceList = [
  ["04", "Bioclear", "Conservative, aesthetic solutions for natural teeth.", "/service/bioclear/"],
  ["05", "Whitening", "A brighter smile planned around your goals.", "/service/whitening/"],
  ["06", "Preventative Dentistry", "Thoughtful check-ups and cleaning for lasting oral health.", "/service/preventative-dentistry/"],
  ["07", "Extractions", "Clear guidance and gentle care when a tooth needs attention.", "/service/extractions/"],
  ["08", "Bridges", "Restorative options designed to renew everyday confidence.", "/service/bridges/"],
  ["09", "Root Canals", "Comfort-led treatment to protect and preserve your natural tooth.", "/service/root-canals/"],
  ["10", "Adult Braces", "A considered path toward better alignment at any stage of life.", "/service/adult-braces/"],
  ["11", "Professional Teeth Cleaning", "A fresh, healthy foundation for your ongoing care.", "/service/professional-teeth-cleaning/"],
  ["12", "Routine Dental Care", "The essentials of a healthy smile, thoughtfully delivered.", "/service/preventative-dentistry/"],
  ["13", "Jeuveau Injections", "Relief for clenching, grinding, and TMJ symptoms, plus wrinkle reduction.", "/jeuveau-injections-in-tucson-effective-tmd-treatment-and-wrinkle-reduction/"],
] as const;

export const cosmeticOptions = [
  ["Porcelain veneers", "Refine shape, shade, or small imperfections with a natural-looking result."],
  ["Whitening", "A brighter smile planned around your goals and your existing dental health."],
  ["Dental crowns", "Restore strength and appearance when a tooth needs more complete support."],
  ["Bioclear", "A conservative aesthetic option designed to preserve your natural tooth structure."],
] as const;

