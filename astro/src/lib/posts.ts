import type { ImageMetadata } from "astro";
import invisalignTucson from "../assets/blog/invisalign-tucson.jpg";
import monitorAlignerTherapy from "../assets/blog/monitor-aligner-therapy.jpg";
import planningImplantCbct from "../assets/blog/planning-implant-cbct.jpg";
import planningImplantXrayRoom from "../assets/blog/planning-implant-xray-room.jpg";
import bioclearTechnique from "../assets/blog/bioclear-technique.jpg";
import bioclearTile from "../assets/blog/bioclear-tile.png";
import { liveAssets } from "./data";

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; text: string }
  | { type: "ol"; items: string[] }
  | { type: "table"; caption: string; columns: string[]; rows: string[][] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] }
  | { type: "terms"; items: [string, string][] }
  | { type: "image"; image: ImageMetadata; alt: string; caption?: string };

export interface Post {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  hero: ImageMetadata;
  heroAlt: string;
  heroPosition?: string;
  blocks: PostBlock[];
  sources?: (string | { label: string; url: string })[];
  // Optional fields used by the Nov 2026 rewrites. Paragraph, list and FAQ text may contain inline HTML links.
  seoTitle?: string;
  description?: string;
  updated?: string;
  author?: string;
  faqHeading?: string;
  faqs?: [string, string][];
  authorBio?: string;
  closing?: string;
}

// Content mirrors the live site's posts (brianmitchelldds.com); light copyediting only.
export const posts: Post[] = [
  {
    slug: "the-importance-of-soft-tissue-in-successful-dental-implant-surgery",
    title: "The Importance of Soft Tissue in Successful Dental Implant Surgery",
    category: "Dental Implants",
    excerpt: "Soft tissue management plays a critical role in the stability, aesthetics, and long-term success of dental implants. A closer look at why it matters and how it is handled.",
    date: "2026-06-01",
    hero: liveAssets.blogImplant,
    heroAlt: "A dental model showing an implant post beneath a crown",
    blocks: [
      { type: "p", text: "The extensive experience and expertise with dental implants by Dr. Brian Mitchell and Associates are why you can trust your implant surgery to be successful. Dr. Mitchell understands the importance of soft tissue and connective tissue with implant placement. He uses the most up-to-date procedures and a commitment to excellence that assures your comfort and superior results." },
      { type: "h2", id: "soft-tissue-management", text: "Soft tissue management" },
      { type: "quote", text: "Soft tissue management plays a crucial role in ensuring long-term implant stability, preventing complications, and enhancing esthetic outcomes.", cite: "National Library of Medicine" },
      { type: "quote", text: "Achieving aesthetic excellence in dental implant restorations involves more than just placing implants in the right position and choosing the right materials. It requires a comprehensive understanding of the surrounding soft tissues, as the appearance of the gums around an implant is critical to the overall success of the restoration. Aesthetic implant outcomes are largely determined by how well the soft tissues are managed before, during, and after implant placement.", cite: "American Dental Institute" },
      { type: "p", text: "The success of dental implant therapy relies on achieving optimal osseointegration (the permanent, structural and functional bonding of living bone tissue to an artificial, biocompatible implant) while maintaining the esthetics and function of the surrounding soft tissues." },
      { type: "image", image: liveAssets.blogSoftTissue, alt: "Illustration of a dental implant crown being placed onto its post" },
      { type: "h2", id: "high-tech-method", text: "Dr. Mitchell and Associates' high-tech method" },
      { type: "p", text: "Dr. Brian Mitchell and Associates uses a high-tech 3D X-ray technology that ensures the precise placement of implants for excellent results. This advanced system surpasses traditional \"free-hand\" methods, delivering outcomes that are not only precise but also provide beautiful results." },
      { type: "h2", id: "how-it-works", text: "How does it work?" },
      { type: "p", text: "A \"conebeam\" X-ray machine captures three-dimensional images of your mouth. With state-of-the-art software, Dr. Brian Mitchell & Associates places your implants virtually, so you can see the cosmetic results in advance. Next, 3D prints are made to be used as a surgical guide. This guide serves as a blueprint for precise implant placement." },
      { type: "h2", id: "why-soft-tissue-matters", text: "Why soft tissue matters" },
      { type: "terms", items: [
        ["The biological seal", "Unlike natural teeth, implants lack connective tissue fibers that anchor directly into the root. Instead, the soft tissue creates a specialized barrier called the permucosal seal. This seal protects the vulnerable titanium threads and prevents bacterial buildup that can lead to peri-implantitis (an infection causing bone loss)."],
        ["Aesthetics", "The thickness and color of the gum tissue determine how natural the final crown looks. Thick, healthy soft tissue hides the metallic or dark components of the implant from showing through."],
      ] },
      { type: "p", text: "The quality of soft tissue is measured by three main components:" },
      { type: "terms", items: [
        ["Mucosal thickness", "The thickness of the gums. Thick tissue is desired because it resists recession and minimizes the chance of the implant's metal showing through."],
        ["Keratinized mucosa width", "The band of tough, firm tissue around the base of the implant. It makes daily cleaning easier and prevents irritation."],
        ["Supracrestal tissue height", "The vertical height of the tissue resting above the bone, which ensures the biological seal remains intact."],
      ] },
      { type: "h2", id: "common-procedures", text: "Common soft tissue procedures" },
      { type: "p", text: "If there is insufficient gum tissue at the implant site, a dentist or periodontist may recommend:" },
      { type: "terms", items: [
        ["Soft tissue grafting", "Surgically taking donor tissue (usually from the roof of the mouth) and attaching it to the implant area to increase thickness or keratinized tissue."],
        ["Soft tissue manipulation", "Using customized temporary crowns (provisional restorations) during the healing phase to \"sculpt\" the gums into a natural, tooth-like shape before the final crown is placed."],
      ] },
      { type: "image", image: liveAssets.brian, alt: "Dr. Brian Mitchell" },
      { type: "h2", id: "dr-mitchell-shares", text: "Dr. Brian Mitchell shares" },
      { type: "quote", text: "My Dental Implant System has transformed the implant process into a nearly painless experience. Patients often express surprise at the speed and ease with which implants are placed using this groundbreaking technology.", cite: "Dr. Brian Mitchell" },
      { type: "p", text: "If you are considering dental implants, choose Dr. Brian Mitchell and Associates. The extensive experience and expertise with dental implants and tissue augmentation by Dr. Brian Mitchell and Associates is why you will receive the best dental implant. Dr. Brian Mitchell & Associates, where innovation meets compassionate care. Call (520) 881-6767. Located at 6383 E Grant Rd. Suite 155, Tucson, AZ 85715." },
      { type: "h2", id: "terms", text: "Terms and definitions" },
      { type: "terms", items: [
        ["Connective tissue", "The foundational supporting and binding tissues, such as the gums (gingiva), dental pulp, and periodontal ligament, that anchor, nourish, and protect the teeth."],
        ["Connective tissue graft", "A periodontal surgical procedure that treats gum recession by transplanting soft tissue from beneath the roof of the mouth (palate) to the exposed tooth root."],
        ["Free gingival graft", "A periodontal surgical procedure used to treat receding or thin gums."],
        ["Implant design", "In implant surgery this refers to the macroscopic and microscopic structural characteristics of an artificial tooth root. It dictates how the implant integrates with the jawbone (osseointegration) and handles chewing."],
        ["Implant dentistry", "The specialized branch of dentistry focused on replacing missing teeth by surgically anchoring artificial tooth roots into the jawbone."],
        ["Keratinized tissue", "(Or keratinized mucosa) the firm, protective band of gum tissue that covers the teeth and dental implants. Keratinized mucosa is rich in keratin, a tough, fibrous protein that makes the tissue highly resistant to the daily mechanical stress of chewing and brushing."],
        ["Peri-implant soft tissue", "(Peri-implant mucosa) the seal of gum tissue surrounding a dental implant."],
        ["Soft tissue", "The non-hardened, flexible structures in and around the oral cavity."],
        ["Soft tissue augmentation", "Surgical procedures used to restore volume, contour, and structural health to the gums (implant soft tissue) or jawbone (hard tissue)."],
        ["Tissue graft", "A surgical procedure where healthy tissue is transplanted to areas where the gums have receded or are too thin."],
      ] },
    ],
    sources: [
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC11946930/",
      "https://americandentalinstitute.com/the-role-of-soft-tissue-management-in-aesthetic-implant-success/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC3416938/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC10477659/",
      "https://myoms.org/what-we-do/oral-soft-tissue-surgery/soft-tissue-grafts/",
      "https://www.colgate.com/en-us/oral-health/mouth-and-teeth-anatomy/the-role-of-keratinized-tissue-in-dental-implants",
      "https://hellopearl.com/glossary/connective-tissue-graft",
      "https://aap.onlinelibrary.wiley.com/doi/10.1002/JPER.16-0424",
      "https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know",
      "https://www.sidneydental.ca/blog/connective-tissue-graft-vs-free-gingival-graft-choosing-the-right-option/",
    ],
  },
  {
    slug: "bioclear-restorative-technique",
    title: "Bioclear Restorative Technique",
    category: "Restorative Dentistry",
    excerpt: "A modern, minimally invasive alternative to fillings, veneers, and crowns that builds onto your natural tooth instead of grinding it down.",
    date: "2025-07-28",
    hero: bioclearTechnique,
    heroAlt: "A dentist examining a patient in the treatment chair",
    heroPosition: "center 40%",
    blocks: [
      { type: "p", text: "The Bioclear Restorative Technique is the latest and most modern approach to restorative dentistry. Bioclear, founded in 2007, offers you superior results with a less invasive and much more affordable investment. Dr. Brian Mitchell is a certified Bioclear provider. He has completed advanced training in the Bioclear Method, having studied directly at the Bioclear Learning Center. Bioclear is an affordable, minimally invasive procedure." },
      { type: "p", text: "It is a revolutionary approach to cosmetic and restorative dentistry. While traditional methods require the destruction and removal of your existing teeth, Bioclear protects your original tooth. This makes the Bioclear method a less radical option while providing excellent, more natural results. Bioclear is an excellent alternative to traditional fillings, veneers, and crowns." },
      { type: "h2", id: "how-bioclear-works", text: "How Bioclear works" },
      { type: "p", text: "A specially designed form called a matrix is fitted around your tooth. A composite resin, matched to your natural tooth color, is warmed and then injected into the matrix. Once the resin hardens, the matrix is removed and the tooth is polished, giving it a natural finish." },
      { type: "p", text: "In the past, a procedure such as this called for the existing tooth to be ground down, with the original enamel replaced with a cap or veneer. The older method could cause a lot of destruction to the original tooth, which may lead to needing further repair in the future, such as a root canal and removal. Bioclear is an additive process, meaning it builds onto your existing tooth. The Bioclear method preserves the tooth's enamel, which protects the integrity of your teeth." },
      { type: "p", text: "The hardened Bioclear resin looks and feels natural and wears like your original enamel, making it durable and long-lasting. The technique leaves no gaps or ridges that may collect bacteria, reducing the chance for tooth decay. Bioclear can help with:" },
      { type: "list", items: [
        "Eliminating black triangles (gaps between teeth near the gums)",
        "Closing gaps between teeth",
        "Restoring worn or broken teeth",
        "Improving gum health",
      ] },
      { type: "image", image: bioclearTile, alt: "Dr. Brian Mitchell has advanced training and years of experience in applying the Bioclear Restorative Technique. It is a noninvasive and the most affordable way to restore your smile. Dr. Brian Mitchell & Associates offers a modern and welcoming atmosphere. For a dental experience that surpasses the ordinary, schedule an appointment with Dr. Brian Mitchell & Associates." },
    ],
  },
  {
    // Rewritten Nov 2026 (Blog Rewrite: Dental Implant Planning). Original publish date kept.
    slug: "planning-for-a-dental-implant",
    title: "Dental Implant Planning: How 3D Imaging Makes Implants More Precise",
    seoTitle: "Dental Implant Planning: How 3D Imaging Improves Results",
    description: "How Dr. Brian Mitchell plans every dental implant in 3D with cone-beam imaging and guided surgery, and what to expect at your Tucson implant visit.",
    category: "Dental Implants",
    excerpt: "How Dr. Mitchell maps your jawbone, nerves and gums in 3D before an implant is placed, and what to expect from consultation to final tooth.",
    date: "2025-04-22",
    updated: "2026-11-18",
    author: "Dr. Brian Mitchell, DDS",
    hero: planningImplantCbct,
    heroAlt: "Cone-beam CT scan for dental implant planning in Tucson",
    heroPosition: "center 40%",
    blocks: [
      { type: "p", text: "Good dental implant planning is the difference between an implant that feels like a natural tooth for decades and one that causes problems. Before any implant is placed at our Tucson office, Dr. Brian Mitchell maps your jawbone, nerves and gums in 3D, then plans the exact position, angle and depth of the implant on screen. Here is what that planning involves, why it matters, and what to expect." },
      { type: "h2", id: "why-planning-matters", text: "Why Dental Implant Planning Matters" },
      { type: "p", text: "A dental implant is a small post placed in the jawbone to replace the root of a missing tooth. Once it bonds with the bone, it supports a crown, bridge or denture. Because the implant becomes part of your jaw, where it goes matters a great deal." },
      { type: "p", text: "Careful planning helps:" },
      { type: "list", items: [
        "Place the implant in the strongest, healthiest bone",
        "Avoid nerves, sinuses and the roots of neighboring teeth",
        "Line the implant up with your bite so the crown feels natural when you chew",
        "Support healthy gums around the implant for a natural-looking result",
        "Reduce surprises during the procedure and shorten recovery",
      ] },
      { type: "p", text: "The U.S. Food and Drug Administration notes that your overall health affects whether you are a good candidate, how long healing takes and how long an implant may last. That is why planning starts with you, not the implant." },
      { type: "h2", id: "implant-consultation", text: "What Happens at Your Implant Consultation" },
      { type: "p", text: "Your first visit is a conversation as much as an exam. Dr. Mitchell believes every patient deserves time to understand their options before agreeing to treatment." },
      { type: "quote", text: "I am a firm believer you should conduct a candid interview with a potential dentist before doing any complex dental work. I also strongly believe a dentist should be willing to give you thirty minutes of their time to explain their treatment plan and answer your questions.", cite: "Dr. Brian Mitchell" },
      { type: "p", text: "At your consultation, we will:" },
      { type: "ol", items: [
        "<strong>Review your health history,</strong> including medications, smoking and conditions like diabetes that can affect healing.",
        "<strong>Examine your teeth and gums</strong> to check for gum disease or decay that should be treated first.",
        "<strong>Talk through your options:</strong> a single implant, an implant-supported bridge, implant-supported dentures, or a metal-free <a href=\"/service/zirconia-dental-implants/\">zirconia implant</a>.",
        "<strong>Take your records:</strong> a cone-beam 3D scan of your jaw and a digital intraoral scan of your teeth at a quick records appointment (more on this below).",
        "<strong>Give you a clear plan and estimate,</strong> including timing, cost and payment options.",
      ] },
      { type: "h3", text: "Your Dental Implant Timeline" },
      { type: "ol", items: [
        "<strong>Records appointment:</strong> one quick visit for your cone-beam CT scan and intraoral scan.",
        "<strong>About two weeks of planning:</strong> Dr. Mitchell uses your scans to plan the exact position, angle and depth of your implant.",
        "<strong>Implant placement:</strong> your implant is placed following that plan, usually about two weeks after your records appointment.",
        "<strong>Healing and your final tooth:</strong> once the implant has bonded with the bone, your crown, bridge or denture is attached.",
      ] },
      { type: "h2", id: "candidate", text: "Are You a Candidate for Dental Implants?" },
      { type: "p", text: "Most adults who are missing one or more teeth can have implants. You are likely a good candidate if you:" },
      { type: "list", items: [
        "Have healthy gums, or are willing to treat gum disease first",
        "Have enough jawbone to hold the implant, or can have a bone graft",
        "Are in good general health, with conditions like diabetes well managed",
        "Don't smoke, or are willing to stop during healing, since smoking slows healing and raises the risk of implant failure",
      ] },
      { type: "p", text: "If a tooth still needs to come out, we can often plan the <a href=\"/service/extractions/\">tooth extraction</a> and the implant together." },
      { type: "h2", id: "cone-beam-imaging", text: "Cone-Beam 3D Imaging Explained" },
      { type: "p", text: "A regular dental X-ray shows your teeth in two dimensions. A cone-beam computed tomography (CBCT) scan rotates around your head and builds a three-dimensional image of your teeth, jaw and surrounding structures." },
      { type: "p", text: "With a CBCT scan, Dr. Mitchell can see:" },
      { type: "list", items: [
        "The height, width and density of your jawbone",
        "The exact location of nerves and sinuses",
        "How your bite lines up",
        "Whether you need a bone graft before the implant",
      ] },
      { type: "p", text: "The scan takes less than a minute and doesn't hurt. You simply stand or sit still while the machine circles your head." },
      { type: "image", image: planningImplantXrayRoom, alt: "Dentist reviewing X-ray during dental implant planning" },
      { type: "h3", text: "Is a CBCT Scan Safe?" },
      { type: "p", text: "According to the FDA, a dental CBCT scan uses less radiation than other types of CT scans but more than a standard dental X-ray. For implant planning, the detail it provides usually outweighs the small extra exposure. We only take a scan when it helps plan your care, and we're happy to discuss radiation with you, especially for younger patients." },
      { type: "h2", id: "guided-surgery", text: "Guided Implant Surgery vs. Freehand Placement" },
      { type: "p", text: "Once your scans are complete, Dr. Mitchell uses planning software to place a virtual implant in your 3D image. He adjusts its position until it sits in the best bone, clear of nerves and lined up with your future crown." },
      { type: "p", text: "That digital plan then guides the placement itself, so the implant goes exactly where it was planned. This is called guided implant surgery, and it's how every implant is placed at our office." },
      { type: "table", caption: "Guided implant surgery compared with freehand placement", columns: ["", "Guided implant surgery", "Freehand placement"], rows: [
        ["Planning", "3D scan and digital plan before surgery", "Based on 2D X-rays and judgment during surgery"],
        ["Accuracy", "Implant follows the planned position, angle and depth", "Depends on the dentist's estimate in the moment"],
        ["Procedure", "Often shorter and less invasive", "Can take longer if adjustments are needed"],
        ["Comfort", "Often less swelling and a smoother recovery", "Varies more from case to case"],
      ] },
      { type: "quote", text: "The last few years have brought amazing technological advances in our ability to place dental implants quickly and more accurately than ever before. Patients often express surprise at the speed and ease with which implants are placed using this groundbreaking technology.", cite: "Dr. Brian Mitchell" },
      { type: "h2", id: "bone-graft", text: "When Is a Bone Graft Needed?" },
      { type: "p", text: "After a tooth is lost, the jawbone in that area slowly shrinks. If there isn't enough bone to hold an implant securely, a bone graft adds or rebuilds bone first. Your 3D scan shows exactly how much bone you have, so you'll know before treatment whether a graft is part of your plan. Healthy gums matter just as much as bone. Read more in our article on <a href=\"/the-importance-of-soft-tissue-in-successful-dental-implant-surgery/\">why soft tissue matters for dental implants</a>." },
      { type: "h2", id: "questions-to-ask", text: "Questions to Ask Your Implant Dentist" },
      { type: "p", text: "Before you commit, it's worth asking any dentist:" },
      { type: "ol", items: [
        "Will you take a 3D cone-beam scan before placing my implant?",
        "Do you use guided surgery or place implants freehand?",
        "Will I need a bone graft or extraction first?",
        "What type of implant and crown do you recommend, and why?",
        "How long will treatment take from start to finish?",
        "What is included in the cost, and what payment options are available?",
      ] },
    ],
    faqHeading: "Dental Implant Planning FAQs",
    faqs: [
      ["How long does dental implant planning take?", "Usually about two weeks. At a quick records appointment, we take a cone-beam CT scan and an intraoral scan of your teeth. Dr. Mitchell then spends about two weeks planning your treatment, and your implant is placed at your next appointment."],
      ["Does implant planning cost extra?", "Yes. The records appointment, where we take your CT scan and intraoral scan, has a separate fee. We'll tell you the cost upfront, and you can ask about payment options such as Cherry and CareCredit."],
      ["How long does it take for an implant to heal?", "The implant usually takes a few months to fully bond with the jawbone before the final crown is placed. Your plan will include a timeline for your case."],
      ["Can I get an implant if I've been missing a tooth for years?", "Often, yes. You may need a bone graft if the bone has shrunk, and your 3D scan will show whether that's the case."],
      ["Are zirconia implants planned the same way?", "Yes. Metal-free zirconia implants go through the same 3D planning process. Learn more about <a href=\"/service/zirconia-dental-implants/\">zirconia dental implants in Tucson</a>."],
    ],
    authorBio: "<strong>Dr. Brian Mitchell, DDS</strong> earned his dental degree from the Baltimore College of Dental Surgery and has practiced dentistry in Arizona for 20 years. He uses cone-beam imaging and fully guided surgery to plan and place dental implants at his east Tucson office. <a href=\"/about/\">Read more about Dr. Mitchell</a>.",
    closing: "<strong>Thinking about a dental implant?</strong> <a href=\"/contact/\">Book an implant consultation</a> with Dr. Mitchell at our Tucson office on East Grant Road. Call <a href=\"tel:5208816767\">(520) 881-6767</a> or learn more about <a href=\"/service/dental-implants/\">dental implants in Tucson</a>. Ask about our <a href=\"/patient-info/financial/\">financing and payment options</a>.",
    sources: [
      { label: "U.S. FDA: Dental Implants, What You Should Know", url: "https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know" },
      { label: "U.S. FDA: Dental Cone-Beam Computed Tomography", url: "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/dental-cone-beam-computed-tomography" },
    ],
  },
  {
    slug: "where-to-find-the-best-invisalign-orthodontic-treatment-in-tucson",
    title: "Where To Find The Best Invisalign® Orthodontic Treatment In Tucson",
    category: "Orthodontics",
    excerpt: "Clear aligners are a popular alternative to metal braces. Here is how Invisalign works, who is a candidate, and why a consultation is the right first step.",
    date: "2024-05-24",
    hero: invisalignTucson,
    heroAlt: "A smiling patient holding up a clear aligner",
    heroPosition: "center 45%",
    blocks: [
      { type: "p", text: "When it comes to straightening teeth, many of us have memories of silver metal braces that are evident in the childhood photographs of our friends and classmates. But a modern treatment plan for crooked teeth is clear aligners, which are a popular alternative to metal braces." },
      { type: "p", text: "Dr. Brian Mitchell is the premier Invisalign provider in Tucson. If you are looking for clear aligners, including treatment options for adult orthodontics, Dr. Mitchell and his staff are among the best offering orthodontic treatment, including Invisalign clear braces." },
      { type: "p", text: "Invisalign braces are the industry leader in clear braces. \"Pioneered 25 years ago by Align Technology, the Invisalign® system uses patented SmartTrack thermoplastic aligner material to help correct smiles.\"" },
      { type: "quote", text: "Treatment with Invisalign consists of wearing removable, clear aligners to move your teeth gradually over time. Invisalign works in the same way as traditional braces, but without the restriction of crunchy, chewy, sticky and sugary food, as the aligners must be removed before eating. What's more, because they are nearly invisible, the aligners aren't as noticeable as metal wires and brackets on other types of braces.", cite: "Forbes" },
      { type: "p", text: "The Invisalign treatment allows for much improved oral hygiene over traditional braces, as the Invisalign aligners may be removed for brushing and flossing your teeth." },
      { type: "quote", text: "As the name suggests, this product is designed to make orthodontic treatment 'less conspicuous,' as the American Association of Orthodontists puts it. Although Invisalign aligners may not be completely invisible, these clear coverings fit tightly over your teeth and are much less noticeable than the brackets and wires of traditional braces.", cite: "Healthline" },
      { type: "h2", id: "am-i-a-candidate", text: "Am I a candidate?" },
      { type: "p", text: "Even if you have worn metal braces in the past, you can still use Invisalign clear aligners to improve your smile. There may be a few limiting factors that prevent you from being a candidate for Invisalign braces, including any underlying dental problems that must first be addressed. Severe gum disease such as periodontitis may need treatment in advance of using Invisalign. Invisalign may not be prescribed in the rare instance of severe overbite or a severely turned tooth; however, most people, after consulting a dentist, should qualify for the treatment." },
      { type: "p", text: "Your priority should be consulting an orthodontist who will determine if you are a candidate for Invisalign. Dr. Mitchell is the premier orthodontist specialist of Tucson who will guide you through the process." },
      { type: "h2", id: "about-dr-mitchell", text: "About Dr. Mitchell" },
      { type: "p", text: "Dr. Mitchell graduated from the Baltimore College of Dental Surgery in Maryland. He was born and raised in Salt Lake City, Utah, where he studied Exercise Physiology at the University of Utah. His well-established practice in Tucson specializes in general dentistry, including implants, dentures, and orthodontics, which includes expertise in Invisalign clear braces." },
      { type: "p", text: "The Invisalign treatment is also affordable, with payment options offered by Dr. Mitchell. The first step for exploring affordable braces in Tucson is to set up an appointment with Dr. Mitchell, the best orthodontist Tucson has to offer. To request an appointment, use the contact form on this site or call (520) 881-6767." },
    ],
    sources: [
      "https://www.forbes.com/health/dental/what-is-invisalign/",
      "https://www.healthline.com/health/does-invisalign-work#about",
    ],
  },
  {
    // Rewritten Nov 2026 (Blog Rewrite: Mail-Order Aligners vs Invisalign). Original publish date kept.
    // Absorbs the old "Why You Need a Dentist to Monitor Your Clear Aligner Therapy" post, which now 301s here.
    slug: "the-dangers-of-do-it-yourself-mail-order-aligners",
    title: "Mail-Order Aligners vs. Invisalign: The Risks of DIY Teeth Straightening",
    seoTitle: "Mail-Order Aligners vs Invisalign: The Real Risks of DIY Straightening",
    description: "Thinking about mail-order aligners? Learn the risks, what happened to SmileDirectClub patients, and how dentist-supervised Invisalign compares.",
    category: "Invisalign & Orthodontics",
    excerpt: "What can go wrong with mail-order aligners, what happened when SmileDirectClub shut down, and how dentist-supervised Invisalign compares.",
    date: "2024-05-22",
    updated: "2026-11-18",
    author: "Dr. Brian Mitchell, DDS",
    // Placeholder until the brief's photo (Invisalign trays beside a phone showing the DentalMonitoring app) is supplied.
    hero: monitorAlignerTherapy,
    heroAlt: "Dentist holding a clear aligner in front of a patient in Tucson",
    heroPosition: "center 55%",
    blocks: [
      { type: "p", text: "Mail-order aligners promise a straighter smile without ever seeing a dentist in person. The trouble is that moving teeth is a medical treatment, and skipping the exam, the X-rays and the in-person check-ins can turn a simple fix into a bigger problem. Here's what can go wrong with mail-order aligners, what happened when the biggest brand shut down, and how dentist-supervised Invisalign compares, including remote check-ins from home." },
      { type: "h2", id: "what-are-mail-order-aligners", text: "What Are Mail-Order Aligners?" },
      { type: "p", text: "Mail-order (or direct-to-consumer) aligners are clear plastic trays you buy online. You usually take impressions of your teeth at home or get a quick scan at a retail location, and the trays are shipped to your door. A dentist you never meet may sign off on the plan remotely, but in most cases no one examines your teeth, gums or bone in person before treatment starts." },
      { type: "p", text: "They look similar to Invisalign, and they are often marketed as cheaper and faster. The difference is what happens before and during treatment." },
      { type: "h2", id: "risks", text: "The Risks of DIY Teeth Straightening" },
      { type: "h3", text: "No Exam, No X-Rays" },
      { type: "p", text: "Before teeth can move safely, a dentist needs to check that your gums are healthy, your roots are strong enough to move, and there's no hidden decay or infection. That requires an in-person exam and X-rays. Mail-order treatment usually skips both, so problems like gum disease or a failing filling can be missed and made worse by the pressure of aligners." },
      { type: "h3", text: "Problems With Your Bite" },
      { type: "p", text: "Straight-looking front teeth don't always mean a healthy bite. If teeth are moved without looking at how your upper and lower jaws fit together, you can end up with a bite that feels off, jaw discomfort or uneven wear on your teeth." },
      { type: "h3", text: "Damage to Teeth and Gums" },
      { type: "p", text: "Moving teeth too fast or in the wrong direction can cause gum recession, loose teeth or damage to tooth roots. In one case reported by the BBC, a man said mail-order aligners had weakened his front teeth so much that he could no longer bite into an apple." },
      { type: "h3", text: "No One to Call When Something Goes Wrong" },
      { type: "p", text: "Aligners don't always track as planned. A tray might stop fitting, a tooth might fall behind, or you might feel pain. With in-person care, your dentist spots this early and adjusts the plan. With mail-order treatment, you may be left sending photos to a support team or giving up altogether." },
      { type: "h3", text: "Results That Don't Last" },
      { type: "p", text: "Without the right retainers and follow-up, teeth tend to drift back. Some mail-order customers report little or no change in their smile, or watch their teeth shift again after treatment ends." },
      { type: "h2", id: "smiledirectclub", text: "What Happened to SmileDirectClub Patients?" },
      { type: "p", text: "SmileDirectClub was the best-known mail-order aligner company. It filed for bankruptcy in September 2023 and shut down on December 8, 2023. Its aligner service, app and customer support ended, along with its lifetime guarantee. Customers partway through treatment did not receive the rest of their aligners, and the company told them to see a local dentist. Patients who had financed treatment were told they were still expected to keep making payments." },
      { type: "p", text: "The lesson is not just about one company. When your treatment depends on a business rather than a dentist you can see in person, you have no one to finish your care if that business changes or closes." },
      { type: "h2", id: "in-person-supervision", text: "Why In-Person Supervision Matters" },
      { type: "p", text: "Even Michael Jordan had a coach. The best results come from having an expert watch your progress and step in when something needs to change. That's what a dentist does during aligner treatment." },
      { type: "h3", text: "The Right Fit and the Right Candidate" },
      { type: "p", text: "At your first visit, we examine your teeth and gums, take photos and a digital scan, and check whether aligners are the right tool for your case. Issues like gum disease, a severe overbite or a badly turned tooth may need to be handled differently, and it's far better to know that before you start." },
      { type: "h3", text: "A Plan Built Around Your Exam" },
      { type: "p", text: "Your scans and records are used to design every tooth movement, in the right order, guiding teeth into healthy positions. Dr. Mitchell is a Gold Tier Invisalign provider and offers comprehensive orthodontic treatment for adults and children." },
      { type: "h3", text: "Progress Checks That Catch Problems Early" },
      { type: "p", text: "Regular check-ins let us confirm your teeth are moving as planned and make changes if one falls behind. Refinement trays fine-tune the result before you finish." },
      { type: "h2", id: "dentalmonitoring", text: "Home Convenience, With a Real Dentist: DentalMonitoring" },
      { type: "p", text: "One reason people choose mail-order aligners is that they don't want frequent office visits. You don't have to give up supervision to get that convenience." },
      { type: "p", text: "With DentalMonitoring, our <a href=\"/service/orthodontics/\">Invisalign</a> patients use an app to send scans of their teeth from home. Our team reviews them and tracks your progress between office visits, so we can spot a problem early without you taking time off work. There is no extra charge for DentalMonitoring." },
      { type: "h2", id: "comparison", text: "Mail-Order Aligners vs. Dentist-Supervised Invisalign" },
      { type: "table", caption: "Mail-order aligners compared with Invisalign at Dr. Mitchell's office", columns: ["", "Mail-order aligners", "Invisalign at Dr. Mitchell's office"], rows: [
        ["In-person exam and X-rays", "Usually not", "Yes, before treatment starts"],
        ["Who plans your treatment", "A remote reviewer you may never meet", "A dentist who has examined you in person"],
        ["Bite and gum health checked", "Limited", "Yes"],
        ["Progress checks", "Photos or none", "In-office visits plus DentalMonitoring from home"],
        ["Refinement trays", "Varies by company", "Included in one price"],
        ["Retainers", "Often extra", "Included in one price"],
        ["Help if something goes wrong", "Customer support", "Your dentist, in person"],
        ["Payment options", "Varies", "Insurance, HSA/FSA, Cherry and CareCredit"],
      ] },
      { type: "h2", id: "worth-the-cost", text: "Is Invisalign Worth the Extra Cost?" },
      { type: "p", text: "Mail-order aligners can look cheaper upfront, but the price often leaves out exams, refinements, retainers and help if something goes wrong. Fixing problems caused by unsupervised treatment can cost far more than doing it right the first time." },
      { type: "p", text: "At our office, one price covers all of your aligners, refinements and retainers, as well as your aligner check visits. Many PPO plans include orthodontic benefits, you can use HSA or FSA funds, and monthly payments are available through Cherry and CareCredit. See our <a href=\"/patient-info/financial/\">financing options</a> for details." },
    ],
    faqHeading: "Mail-Order Aligner FAQs",
    faqs: [
      ["Are mail-order aligners safe?", "They can cause problems when no one examines your teeth, gums and bite in person first. Risks include gum recession, bite problems, damage to roots and results that don't last."],
      ["Can a dentist fix problems caused by mail-order aligners?", "In many cases, yes. A dentist can examine your teeth, take X-rays and recommend options such as Invisalign or braces to finish or correct treatment."],
      ["What should I do if I was a SmileDirectClub customer?", "If you stopped partway through or your teeth have shifted, book an exam with a local dentist before wearing any remaining trays. They can check your teeth and gums and explain your options."],
      ["Do I have to visit the office often with Invisalign?", "No. Check-ins are short, and DentalMonitoring lets you send scans from home between visits at no extra cost."],
      ["Can adults get Invisalign?", "Yes. The average orthodontic patient at our practice is over 50. Learn more about <a href=\"/service/adult-braces/\">adult braces and aligners in Tucson</a>."],
    ],
    authorBio: "<strong>Dr. Brian Mitchell, DDS</strong> is a Gold Tier Invisalign provider who has practiced dentistry in Arizona for 20 years. He earned his dental degree from the Baltimore College of Dental Surgery and offers comprehensive orthodontic treatment for adults and children at his east Tucson office. <a href=\"/about/\">Read more about Dr. Mitchell</a>.",
    closing: "<strong>Want straighter teeth without the risk?</strong> <a href=\"/contact/\">Book a free Invisalign consultation</a> with Dr. Mitchell, or learn more about <a href=\"/service/orthodontics/\">Invisalign in Tucson</a>. Call <a href=\"tel:5208816767\">(520) 881-6767</a>.",
    sources: [
      { label: "BBC News: Dentists warn of harm from online aligners", url: "https://www.bbc.com/news/uk-58038752" },
      { label: "NewMouth: What SmileDirectClub's Closure Means for Its Customers", url: "https://www.newmouth.com/blog/smile-direct-whitening-reviews/" },
      { label: "Global News: SmileDirectClub officially shuts down", url: "https://globalnews.ca/news/10164616/smiledirectclub-shut-down-bankruptcy-canada" },
      { label: "CNN via ABC17: SmileDirectClub shuts down", url: "https://abc17news.com/?p=1254185" },
      { label: "American Association of Orthodontists: Orthodontic treatment with clear aligners", url: "https://aaoinfo.org/whats-trending/orthodontic-treatment-with-clear-aligners/" },
    ],
  },
];

export const formatPostDate = (iso: string) => new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", { month: "long", year: "numeric" });
