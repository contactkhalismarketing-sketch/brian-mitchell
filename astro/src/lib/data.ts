import logo from "../assets/practice/brian-mitchell-live-logo_02f81e9c.png";
import brian from "../assets/practice/brian_c0d844bb.jpg";
import amanKaur from "../assets/practice/aman-kaur.jpg";
import office from "../assets/practice/brian-mitchell-live-office_d91a92cb.jpg";
import cosmetics from "../assets/practice/cosmetics_48be418b.png";
import orthodontics from "../assets/practice/ortho_9f9f5437.png";
import teamPracticePhoto from "../assets/practice/team-practice_c32289f8.jpg";
import practiceBuildingMobile from "../assets/practice/practice-building-mobile.jpg";
import blogSoftTissue from "../assets/practice/blog-soft-tissue_118170c6.png";
import blogImplant from "../assets/practice/blog-implant_6ad9e8fd.png";
import bioclear from "../assets/practice/bioclear-certified-dr-brian-mitchell_489e77d8.png";
import cosmeticHeroPoster from "../assets/practice/cosmetic-hero-poster_7f4095a0.jpg";
import cosmeticYoutubeThumb from "../assets/practice/brian-cosmetic-youtube-thumb_7a5e79b6.jpg";
import roxanne from "../assets/practice/roxanne_50319ff2.jpg";
import tenzi from "../assets/practice/tenzi_625460fa.jpg";
import monique from "../assets/practice/monique_166d66e2.jpg";
import nita from "../assets/practice/nita_74b0856c.jpg";
import jackie from "../assets/practice/jackie_99712114.jpg";
import kiana from "../assets/practice/kiana_d5850992.jpg";
import gisselle from "../assets/practice/gisselle_06071191.jpg";
import adrianna from "../assets/practice/adrianna.jpg";
import carolina from "../assets/practice/carolina.jpg";
import francisca from "../assets/practice/francisca.jpg";
import hannah from "../assets/practice/hannah.jpg";
import jessica from "../assets/practice/jessica.jpg";
import jasai from "../assets/practice/jasai.jpg";
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
  // Temporary: shares the implants hero until a dedicated zirconia hero is supplied.
  zirconia: { image: heroImplants, mobile: heroImplantsMobile, position: "100% 67%" },
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
  office,
  cosmetics,
  orthodontics,
  brianAbout: brian,
  amanKaur,
  team: teamPracticePhoto,
  // Top of the group photo only (building front, no people) for the About hero on phones.
  practiceBuildingMobile,
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
  { label: "Zirconia Dental Implants", href: "/service/zirconia-dental-implants/" },
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
// (brianmitchelldds.com): First Time Visit, Financial, Forms, FAQ, plus the New Patient Specials page.
export const patientInfoMenu = [
  { label: "First Time Visit", href: "/first-visit/" },
  { label: "Financial", href: "/patient-info/financial/" },
  { label: "Forms", href: "/patient-info/forms/" },
  { label: "FAQ", href: "/patient-info/faq/" },
  { label: "New Patient Specials", href: "/new-patient-specials/" },
];

// Sourced from the live Forms page (brianmitchelldds.com/forms/).
// PDFs are the practice's own forms, copied from brianmitchelldds.com/patient-info/forms/ into public/forms/.
// The live site links "Endo (Root Canal)" to the tooth-extraction consent PDF, which looks like an error, so it has no file here.
export const formCategories = [
  {
    name: "New Patient Forms",
    items: [
      { label: "New Patient Information", file: "/forms/NewPatientInformation.pdf" },
      { label: "Financial Office Policies", file: "/forms/FinancialOfficePolicies.pdf" },
    ],
  },
  {
    name: "Post-Operative Care Instructions",
    items: [
      { label: "Tooth Removal", file: "/forms/Post-Treatment-Instructions-Tooth-Removal.pdf" },
      { label: "Implant Placement", file: "/forms/Implant-placement-post-operative-instructions.pdf" },
      { label: "Mitchell Whitening", file: "/forms/MitchellWhitening.pdf" },
    ],
  },
  {
    name: "Consent Forms",
    items: [
      { label: "Tooth Extractions", file: "/forms/Consent-Tooth-Extraction-Removal-1.pdf" },
      { label: "Endo (Root Canal)", file: null },
      { label: "Surgical Implant", file: "/forms/Surgical-Implant-Informed-Consent.pdf" },
    ],
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

// Staff roster and bios supplied by the practice (Staff Biographies.pdf, Oct 2026), in their order.
// Members without `image` are awaiting photos from the practice's photoshoot; the About page shows initials until then.
export const team: { name: string; role: string; image?: ImageMetadata; bio: string }[] = [
  {
    name: "Kiana",
    role: "Office Manager",
    image: kiana,
    bio: "Growing up in a Filipino-American household as a military kid, I moved often and learned how to adapt to new places, people, and experiences. Those experiences have shaped how I approach my role as Office Manager, where I solve problems, bring people together, and create the structure that helps our office run smoothly. I enjoy bringing my values into my work to help both our patients and our team feel right at home. I also love music, art, traveling, trying new food, camping, and spending time with loved ones.",
  },
  {
    name: "Jasai",
    role: "Patient Care Coordinator",
    image: jasai,
    bio: "As your Patient Care Coordinator, I’m here to help you feel welcome, answer your questions, and make scheduling your dental care easier. I enjoy connecting with people and building relationships. I want every patient to feel comfortable and supported. Outside of work, I’m a proud mom and first-generation college student studying History. I love caring for my plants, spending time with my daughter, exploring my creative side, and going on new adventures. I plan to bring that same warmth and curiosity to our office every day!",
  },
  {
    name: "Francisca",
    role: "Treatment Coordinator",
    image: francisca,
    bio: "As a Tucson native, I enjoy the desert scenery through hiking and long drives. Over the past 16 years, my experience as a dental coordinator has provided me with valuable tools that I utilize in my current role as a Treatment Coordinator. I enjoy helping patients navigate insurance questions and am eager to continue learning new skills in this position.",
  },
  {
    name: "Jessica",
    role: "Insurance Specialist",
    image: jessica,
    bio: "I grew up in a small town on the western slope of Colorado and have lived in Tucson for 19 years. I’ve been blessed to work in the dental field for 22 years, 16 of those with Dr. Mitchell and Associates. I’ve found my niche in insurance processing and pride myself on using my knowledge to get claims paid for both our patients and the Dr.’s benefit. I love helping patients navigate insurance. Personally, I enjoy reading, hiking, camping, rock hounding, and finding hidden treasures. I’m also certified in Reiki and QHHT.",
  },
  {
    name: "Adrianna",
    role: "Lead Dental Assistant",
    image: adrianna,
    bio: "I’m 23 years old and have five years of experience in dentistry. I truly love working with people of all ages and helping transform smiles while restoring confidence. I feel so fortunate to be part of such a beautiful office and to build meaningful connections with all my patients. Outside of work, I love spending time with my family and friends, making memories, and enjoying life with my Goldendoodle, who always keeps me smiling!",
  },
  {
    name: "Giselle",
    role: "Dental Assistant",
    image: gisselle,
    bio: "With 21 years of experience in dentistry, I am a dedicated dental professional with a strong background in both general and pediatric dentistry. I have developed a broad range of clinical skills and built lasting relationships with patients and families. My goal is to deliver high-quality dental care while helping patients and families feel informed, comfortable, and confident in their oral health.",
  },
  {
    name: "Carolina",
    role: "Dental Assistant",
    image: carolina,
    bio: "Hi, I’m Carolina! I’ve had a passion for dentistry since I was 12 years old, so getting to work in a field I’ve always loved makes me really happy. I enjoy learning something new every day and growing in my career. Outside of work, I love spending my weekends downtown with my friends, trying yoga or Pilates, and getting creative with art—especially when the seasonal holidays come around!",
  },
  {
    name: "Hannah",
    role: "Dental Assistant",
    image: hannah,
    bio: "I’m currently 26 years old and have been working in dentistry for about two years now. My favorite part of my job is helping our patients feel confident in their oral care and build lasting connections with them. Sitting in the dental chair can feel stressful, so I always strive to bring a warm, welcoming energy to make your experience as smooth and easy as possible! When I’m not at the office, you can usually find me out with my friends, at concerts, or doing something creative.",
  },
  {
    name: "Nita",
    role: "Dental Assistant",
    image: nita,
    bio: "With 40 years of experience in dentistry, I’ve had the opportunity to work in every aspect of the field. I especially love working with children and helping patients maintain healthy smiles throughout every stage of life. I also enjoy creating dental appliances in our lab. Most of all, I love my team and the personal connections we share.",
  },
  {
    name: "Tenzi",
    role: "Dental Hygienist",
    image: tenzi,
    bio: "I have lived in Tucson since 1992 and I have been in the dental field for over 20 years. Having grown up in Romania where dental care was poor, I realized the importance of good oral health and try to improve every patient’s dental awareness. As a dedicated hygienist, I take pride in providing each patient with tailored care. I love nature, and enjoy hiking, biking, swimming, gardening, and also love spending time with my boyfriend, family, and friends.",
  },
  {
    name: "Monique",
    role: "Dental Hygienist",
    image: monique,
    bio: "I am a native Tucsonan and have been a clinical dental hygienist for over 25 years. In addition to my clinical practice, I have the privilege of mentoring and inspiring future dental hygienists as an instructor at Pima Community College. I love learning new things in and out of the dental field. I enjoy reading, cooking for family and friends, and spending time with my husband and our four grown children. Creating meaningful relationships with people is what I value most in my dental career, teaching, and personal life.",
  },
  {
    name: "Roxanne",
    role: "Dental Hygienist",
    image: roxanne,
    bio: "With 29 years in dentistry and 15 years as a clinical instructor and educator, I’ve had the privilege of caring for patients while helping shape the next generation of dental professionals. I’m a wife and mother of two, and my family keeps me grounded and going. One of my favorite parts of dentistry is that my patients introduce the world to me through their stories and perspectives. If I could be anywhere? I’d grab a globe, spin it, and see where my finger lands next. I love sports, adventure, and my Arizona Wildcats. Bear Down!",
  },
  {
    name: "Jacqueline",
    role: "Dental Hygienist",
    image: jackie,
    bio: "Hi, I’m Jackie! I’m a Tucson native, mom of three, and possibly your hygienist! I originally began my education obtaining my EMT certification before discovering my passion for dental hygiene. I love building lasting relationships with my patients while helping them achieve a healthy smile and better overall wellness. I strive to provide thorough, comfortable, and high-quality care while making every patient feel at ease. I’m also Botox certified, providing therapeutic and select aesthetic treatments. I look forward to being part of your oral health journey!",
  },
];

// Doctors, from the same document.
export const doctors = [
  {
    name: "Dr. Brian Mitchell",
    role: "Owner and Dentist",
    image: brian,
    heading: "Dedicated to your smile.",
    bio: "Born and raised in Salt Lake City, Dr. Mitchell studied Exercise Physiology at the University of Utah before earning his dental degree from the Baltimore College of Dental Surgery in Baltimore, Maryland. For the past 20 years he has practiced dentistry in Arizona and is proud to call Tucson home. What he enjoys most is helping people improve not only their smiles but also their confidence, health, and quality of life, and he believes great dental care begins with listening, treating every person with kindness, and tailoring care to each patient’s needs. He is grateful for his team and for the relationships built with patients over the years, which he counts among the greatest joys of his career. Outside the office he enjoys time with his wife and daughters, reading, exercising, and playing guitar.",
  },
  {
    name: "Dr. Aman Kaur",
    role: "Dentist",
    image: amanKaur,
    heading: "Prevention-first, patient-centred care.",
    bio: "A graduate of the University of Arizona with degrees in Public Health and Molecular & Cellular Biology, Dr. Kaur earned her doctorate and public health certificate from the ATSU Arizona School of Dentistry and Oral Health. She has worked with community health clinics across the U.S. and internationally, serving diverse populations in Arizona, California, Washington, Virginia, Peru, Mexico, and India, and was honored as ATSU Woman of the Year in 2016. Committed to continuing education, she strives to provide innovative, high-quality, comprehensive care, with a strong emphasis on patient education and preventive care that empowers patients to take an active role in their oral health. Born and raised in Arizona, she enjoys time with her husband, family, and friends, as well as traveling, hiking, and exploring.",
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
  ["04", "Zirconia Dental Implants", "Metal-free ceramic implants, planned in 3D and placed to the plan.", "/service/zirconia-dental-implants/"],
  ["05", "Bioclear", "Conservative, aesthetic solutions for natural teeth.", "/service/bioclear/"],
  ["06", "Whitening", "A brighter smile planned around your goals.", "/service/whitening/"],
  ["07", "Preventative Dentistry", "Thoughtful check-ups and cleaning for lasting oral health.", "/service/preventative-dentistry/"],
  ["08", "Extractions", "Clear guidance and gentle care when a tooth needs attention.", "/service/extractions/"],
  ["09", "Bridges", "Restorative options designed to renew everyday confidence.", "/service/bridges/"],
  ["10", "Root Canals", "Comfort-led treatment to protect and preserve your natural tooth.", "/service/root-canals/"],
  ["11", "Adult Braces", "A considered path toward better alignment at any stage of life.", "/service/adult-braces/"],
  ["12", "Professional Teeth Cleaning", "A fresh, healthy foundation for your ongoing care.", "/service/professional-teeth-cleaning/"],
  ["13", "Routine Dental Care", "The essentials of a healthy smile, thoughtfully delivered.", "/service/preventative-dentistry/"],
  ["14", "Jeuveau Injections", "Relief for clenching, grinding, and TMJ symptoms, plus wrinkle reduction.", "/jeuveau-injections-in-tucson-effective-tmd-treatment-and-wrinkle-reduction/"],
] as const;

export const cosmeticOptions = [
  ["Porcelain veneers", "Refine shape, shade, or small imperfections with a natural-looking result."],
  ["Whitening", "A brighter smile planned around your goals and your existing dental health."],
  ["Dental crowns", "Restore strength and appearance when a tooth needs more complete support."],
  ["Bioclear", "A conservative aesthetic option designed to preserve your natural tooth structure."],
] as const;

