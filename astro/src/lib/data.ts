export const liveAssets = {
  logo: "/assets/practice/brian-mitchell-live-logo_02f81e9c.png",
  brian: "/assets/practice/brian_c0d844bb.jpg",
  diana: "/assets/practice/diana_4c83a6c1.jpg",
  dianaHome: "/assets/practice/dr-diana-zhen-live_c8e7cb59.jpg",
  office: "/assets/practice/brian-mitchell-live-office_d91a92cb.jpg",
  cosmetics: "/assets/practice/cosmetics_48be418b.png",
  orthodontics: "/assets/practice/ortho_9f9f5437.png",
  brianAbout: "/assets/practice/brian_c0d844bb.jpg",
  dianaAbout: "/assets/practice/diana_4c83a6c1.jpg",
  team: "/assets/practice/team-practice_c32289f8.jpg",
  blogSoftTissue: "/assets/practice/blog-soft-tissue_118170c6.png",
  blogImplant: "/assets/practice/blog-implant_6ad9e8fd.png",
  bioclear: "/assets/practice/bioclear-certified-dr-brian-mitchell_489e77d8.png",
  heroVideo: "/assets/practice/brian-mitchell-full-composition-practice-tour_5757208e.mp4",
};

export const navigation = [
  { label: "Services", href: "/services", active: "services" },
  { label: "About", href: "/about-us", active: "about" },
  { label: "Patient Info", href: "/blogs", active: "blogs" },
  { label: "New Patients", href: "/contact-us", active: "new" },
  { label: "Contact", href: "/contact-us", active: "contact" },
];

export const team = [
  {
    name: "Camille",
    role: "Treatment Plan Coordinator",
    image: "/assets/practice/camille_06a39838.jpg",
    bio: "During my off time I appreciate that I get to exercise. Reading is a favorite of mine. I enjoy a good murder mystery, and I care deeply about Alzheimer's, diabetes, and domestic-abuse education and awareness. If you asked what I do with friends in my spare time, I would say: what spare time?",
  },
  {
    name: "Roxanne",
    role: "Dental Hygienist",
    image: "/assets/practice/roxanne_50319ff2.jpg",
    bio: "One of my favorite parts of my career is the way patients introduce the world to me. From travel and careers to sharing life perspectives, I appreciate their knowledge and wisdom. I love adventure and all sports—especially the University of Arizona Wildcats. Bear Down!",
  },
  {
    name: "Tenzi",
    role: "Dental Hygienist",
    image: "/assets/practice/tenzi_625460fa.jpg",
    bio: "I have worked in dentistry for more than 15 years and have lived in Tucson since 1992. I take pride in tailoring care to each patient and improving dental awareness. I speak Hungarian, Romanian, and English, and enjoy hiking, reading, movies, and time with family and friends.",
  },
  {
    name: "Crystal",
    role: "Financial / Orthodontic Coordinator",
    image: "/assets/practice/crystal_cf908663.jpg",
    bio: "As a Tucson native with more than 19 years in the dental field, I am passionate about numbers and managing office finances. Outside of work, I enjoy spending quality time with my family and going shopping.",
  },
  {
    name: "Monique",
    role: "Dental Hygienist",
    image: "/assets/practice/monique_166d66e2.jpg",
    bio: "I bring more than 25 years of dental experience and a passion for oral-health education. I also mentor future dental hygienists at Pima Community College. As a mother of four, I value family, continuing education, volunteering, and giving every patient compassionate, tailored care.",
  },
  {
    name: "Nita",
    role: "Dental Assistant",
    image: "/assets/practice/nita_74b0856c.jpg",
    bio: "I was born in Utah, raised in Los Angeles, and came to Tucson in 2000. I began as a dental technician in the U.S. Navy in 1985. I enjoy the arts, music, painting, sculpture, and jewelry-making, and I am passionate about helping patients enhance their smiles.",
  },
  {
    name: "Jackie",
    role: "Dental Hygienist",
    image: "/assets/practice/jackie_99712114.jpg",
    bio: "I was born and raised in Tucson and love our desert landscape. Patient care and education led me to dental hygiene, and my goal is to give every patient the most comfortable and comprehensive care possible. Weekends near any body of water with family are a favorite.",
  },
  {
    name: "Kiana",
    role: "Patient Coordinator",
    image: "/assets/practice/kiana_d5850992.jpg",
    bio: "As one of the first people you will meet, I work to make each visit smooth and welcoming. Clear communication—whether managing calls or keeping patients informed about appointments—is central to my role. I am passionate about music, authenticity, balance, and compassion.",
  },
  {
    name: "Yuri",
    role: "Patient Care Team",
    image: "/assets/practice/yuri_059e611a.jpg",
    bio: "Yuri helps create a calm, welcoming experience for every patient, supporting the thoughtful and personal care that defines the practice from the first hello through each visit.",
  },
  {
    name: "Gisselle",
    role: "Dental Assistant",
    image: "/assets/practice/gisselle_06071191.jpg",
    bio: "I am a Tucson native and have worked in the dental field for 20 years. I still love seeing patients smile. When I am not assisting, I enjoy baking and spending time with my grandchildren.",
  },
];

export const serviceList = [
  ["Cosmetic Dentistry", "A personalised approach to a smile that feels like you.", liveAssets.cosmetics, "/cosmetic-dentistry"],
  ["Orthodontics", "Traditional and Invisalign options for patients of every age.", liveAssets.orthodontics, "/services"],
  ["Dental Implants", "Modern tooth-replacement plans with comfort at the centre.", liveAssets.office, "/services"],
] as const;

export const featuredServices = [
  { number: "01", name: "Cosmetic Dentistry", copy: "Thoughtful aesthetic care for a smile that feels unmistakably like you.", image: liveAssets.cosmetics, href: "/cosmetic-dentistry" },
  { number: "02", name: "Orthodontics", copy: "Traditional and Invisalign options that fit your life and your smile goals.", image: liveAssets.orthodontics, href: "/services" },
  { number: "03", name: "Dental Implants", copy: "Modern tooth-replacement plans with comfort, function, and confidence at the centre.", image: liveAssets.office, href: "/services" },
] as const;

export const additionalServiceList = [
  ["04", "Bioclear", "Conservative, aesthetic solutions for natural teeth."],
  ["05", "Whitening", "A brighter smile planned around your goals."],
  ["06", "Preventative Dentistry", "Thoughtful check-ups and cleaning for lasting oral health."],
  ["07", "Extractions", "Clear guidance and gentle care when a tooth needs attention."],
  ["08", "Bridges", "Restorative options designed to renew everyday confidence."],
  ["09", "Root Canals", "Comfort-led treatment to protect and preserve your natural tooth."],
  ["10", "Adult Braces", "A considered path toward better alignment at any stage of life."],
  ["11", "Professional Teeth Cleaning", "A fresh, healthy foundation for your ongoing care."],
  ["12", "Routine Dental Care", "The essentials of a healthy smile, thoughtfully delivered."],
] as const;

export const cosmeticOptions = [
  ["Porcelain veneers", "Refine shape, shade, or small imperfections with a natural-looking result."],
  ["Whitening", "A brighter smile planned around your goals and your existing dental health."],
  ["Dental crowns", "Restore strength and appearance when a tooth needs more complete support."],
  ["Bioclear", "A conservative aesthetic option designed to preserve your natural tooth structure."],
] as const;

export const articles = [
  ["The Importance of Soft Tissue in Successful Dental Implant Surgery", "Dental Implants", "A closer look at the tissue that supports aesthetics, stability, and long-term implant success.", liveAssets.blogSoftTissue],
  ["Soft Tissue Management", "Dental Implants", "How careful planning supports the natural form and function around a restored tooth.", liveAssets.blogImplant],
  ["Dr. Mitchell and Associates' High-tech Method", "Technology", "Why 3D X-ray technology is a valuable part of a precise implant-planning process.", liveAssets.brianAbout],
] as const;
