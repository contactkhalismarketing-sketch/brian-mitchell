import type { ImageMetadata } from "astro";
import invisalignTucson from "../assets/blog/invisalign-tucson.jpg";
import mailOrderAligners from "../assets/blog/mail-order-aligners.jpg";
import monitorAlignerTherapy from "../assets/blog/monitor-aligner-therapy.jpg";
import planningImplant from "../assets/blog/planning-implant.jpg";
import planningImplantCbct from "../assets/blog/planning-implant-cbct.jpg";
import planningImplantXrayRoom from "../assets/blog/planning-implant-xray-room.jpg";
import bioclearTechnique from "../assets/blog/bioclear-technique.jpg";
import bioclearTile from "../assets/blog/bioclear-tile.png";
import { liveAssets } from "./data";

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
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
  sources?: string[];
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
      { type: "p", text: "If you are considering dental implants, choose Dr. Brian Mitchell and Associates. The extensive experience and expertise with dental implants and tissue augmentation by Dr. Brian Mitchell and Associates is why you will receive the best dental implant. Dr. Brian Mitchell & Associates, where innovation meets compassionate care. Call (520) 523-4860. Located at 6383 E Grant Rd. Suite 155, Tucson, AZ 85715." },
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
    slug: "planning-for-a-dental-implant",
    title: "Planning for a Dental Implant",
    category: "Dental Implants",
    excerpt: "What to weigh before implant surgery, from your overall health and your dentist's experience to how cone-beam 3D imaging guides precise placement.",
    date: "2025-04-22",
    hero: planningImplant,
    heroAlt: "A smiling patient pointing at a dental implant model held by a dentist",
    heroPosition: "center 35%",
    blocks: [
      { type: "p", text: "If you are considering having a dental implant, it is a good idea to investigate the surgery's benefits and risks and determine your dentist's experience. According to the U.S. Food and Drug Administration, implant planning should include your specific patient needs. \"Your overall health is an important factor in determining whether you are a good candidate for dental implants, how long it will take to heal, and how long the implant may stay in place.\" Finding a surgeon who has the proper experience and education, and uses the latest technology, is an important part of your treatment planning. Your dentist should be willing to meet with you in a pretreatment consultation." },
      { type: "quote", text: "I am a firm believer you should conduct a candid interview with a potential dentist before doing any complex dental work. I also strongly believe a dentist should be willing to give you thirty minutes of their time to explain their treatment plan and answer your questions.", cite: "Dr. Brian Mitchell" },
      { type: "p", text: "Dr. Brian Mitchell uses computer-guided surgery and cutting-edge 3D X-ray technology, allowing him to navigate the intricacies of implant placement with unprecedented accuracy." },
      { type: "h2", id: "cone-beam-imaging", text: "Cone-beam imaging" },
      { type: "quote", text: "Cone-beam computed tomography systems (CBCT) are a variation of traditional computed tomography (CT) systems. The CBCT systems used by dental professionals rotate around the patient, capturing data using a cone-shaped X-ray beam. These data are used to reconstruct a three-dimensional (3D) image of the following regions of the patient's anatomy: dental (teeth); oral and maxillofacial region (mouth, jaw, and neck); and ears, nose, and throat.", cite: "U.S. Food and Drug Administration" },
      { type: "p", text: "The cone beam CT is used for various clinical applications, including dental implant planning. CBCT imaging is an effective surgical tool used for dental implants. Beam computed tomography, and the value of the increased image quality, is an excellent surgical guide for implant surgery and should be discussed as part of your treatment planning for implant dentistry." },
      { type: "image", image: planningImplantXrayRoom, alt: "A dental team member reviewing a panoramic X-ray while a patient stands at the imaging machine" },
      { type: "image", image: planningImplantCbct, alt: "A patient positioned in a cone-beam CT scanner while a clinician operates the controls" },
      { type: "h2", id: "radiation-and-benefits", text: "Weighing radiation and benefits" },
      { type: "quote", text: "X-ray imaging, including dental CBCT, provides a fast, non-invasive way of answering a number of clinical questions. Dental CBCT images provide three-dimensional (3-D) information, rather than the two-dimensional (2-D) information provided by a conventional X-ray image. This may help with the diagnosis, treatment, and evaluation of certain conditions.", cite: "U.S. Food and Drug Administration" },
      { type: "p", text: "Radiation exposure from CBCT imaging is lower than from other CT exams; however, the CBCT scan could expose you to more radiation than a conventional X-ray. This additional radiation exposure dose should be discussed with your dentist while conducting your implant planning. Concerns about radiation dose from beam computed tomography are larger with youthful patients because they may be more sensitive to radiation exposure throughout a longer life expectancy. The benefits of beam CT, with better image quality and precise implant placement with cone beam computed implant dentistry, outweigh the risks involved in implant dentistry treatment planning." },
      { type: "p", text: "Dr. Brian Mitchell and Associates uses cone beam radiography and fully guided surgical placement for implants." },
      { type: "quote", text: "The last few years have brought amazing technological advances in our ability to place dental implants quickly and more accurately than ever before. My Dental Implant System has transformed the implant process into a nearly painless experience. Patients often express surprise at the speed and ease with which implants are placed using this groundbreaking technology.", cite: "Dr. Brian Mitchell" },
      { type: "p", text: "Cone beam computed imagery will ensure your implant placement is meticulous, allowing superior results." },
    ],
    sources: [
      "https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know",
      "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/dental-cone-beam-computed-tomography",
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
      { type: "p", text: "The Invisalign treatment is also affordable, with payment options offered by Dr. Mitchell. The first step for exploring affordable braces in Tucson is to set up an appointment with Dr. Mitchell, the best orthodontist Tucson has to offer. To request an appointment, use the contact form on this site or call (520) 523-4860." },
    ],
    sources: [
      "https://www.forbes.com/health/dental/what-is-invisalign/",
      "https://www.healthline.com/health/does-invisalign-work#about",
    ],
  },
  {
    slug: "why-you-need-a-dentist-to-monitor-your-clear-aligner-therapy",
    title: "Why You Need a Dentist to Monitor Your Clear Aligner Therapy",
    category: "Orthodontics",
    excerpt: "Clear aligners move teeth a little at a time. A dentist makes sure the fit is right, you are a good candidate, and your progress stays on track.",
    date: "2024-05-22",
    hero: monitorAlignerTherapy,
    heroAlt: "A dentist in blue gloves holding a clear aligner in front of a patient",
    heroPosition: "center 55%",
    blocks: [
      { type: "p", text: "Even Michael Jordan had a coach. Jordan is widely considered to be the greatest basketball player of all time. But even Jordan was mentored by some of the best coaches, including Phil Jackson with the Chicago Bulls and Dean Smith as his college coach at North Carolina." },
      { type: "p", text: "Dr. Brian Mitchell and his staff are your Invisalign treatment experts in Tucson. Clear aligner therapy is a modern approach to straightening teeth." },
      { type: "quote", text: "Clear aligners are designed to move teeth a little at a time. The aligners are plastic replicas of your teeth. Wearing them puts gentle pressure on the teeth, ever-so-slightly repositioning them. Clear aligners are one of many technological advancements that have made orthodontic treatment less conspicuous and one of many 'appliances' orthodontists use to move teeth and align jaws to create a healthy, beautiful smile.", cite: "American Association of Orthodontists" },
      { type: "h2", id: "the-right-fit", text: "The right fit, and the right candidate" },
      { type: "p", text: "There are many reasons why you should consult a dentist to discuss your treatment planning for teeth straightening. The first is ensuring you have a proper fit with your clear aligner treatment. This initial consultation is also important to make sure you are a good candidate for this treatment. You will discover if you have any underlying dental problems, such as gum disease, severe overbite, or a severely turned tooth, that might call for a different treatment." },
      { type: "h2", id: "monitoring-progress", text: "Monitoring your progress" },
      { type: "p", text: "Dental monitoring is the second reason you should use a dentist: to keep track of your progress and modify your treatment." },
      { type: "quote", text: "Like traditional braces, aligners are designed to move teeth a little at a time. Before treatment begins, the dentist will examine the patient, and take diagnostic records including x-rays, photographs, and impressions or digital scans of the teeth. From that information, the dentist can arrive at a diagnosis, and then work within the aligner software to design your smile and plan the treatment process, which tooth moves where, and in what order, guiding teeth into healthy positions.", cite: "American Association of Orthodontists" },
    ],
    sources: ["https://aaoinfo.org/whats-trending/orthodontic-treatment-with-clear-aligners/"],
  },
  {
    slug: "the-dangers-of-do-it-yourself-mail-order-aligners",
    title: "The Dangers of Do-It-Yourself Mail-Order Aligners",
    category: "Orthodontics",
    excerpt: "Mail-order aligners skip the exam, the X-rays, and the monitoring. Here is why that matters, and what a qualified orthodontist does differently.",
    date: "2024-05-22",
    hero: mailOrderAligners,
    heroAlt: "A man grimacing while holding a mail-order clear aligner",
    heroPosition: "center 30%",
    blocks: [
      { type: "p", text: "There are some things in life you should not try to do yourself. When it comes to dental care, especially aligning your teeth, it is wise to use a qualified orthodontist. It may be tempting to order teeth aligners from mail-order companies, but you will be much better served by visiting a dental professional." },
      { type: "quote", text: "Dentists have told the BBC that people ordering clear braces or 'aligners' online may be unaware of the harm they can cause. One man said aligners weakened his front teeth, leaving him unable to bite into an apple.", cite: "BBC News" },
      { type: "p", text: "Many of the do-it-yourself teeth alignment companies have come under scrutiny and have had many complaints about their mail-order teeth straightening products." },
      { type: "quote", text: "Major medical organizations like the American Dental Association and the American Association of Orthodontists have alleged that Smile Direct Club puts patients in danger and is practicing medicine illegally. They have filed complaints with the FTC, FDA, and at least 36 state boards. SmileDirectClub's practices have earned it over 1,200 Better Business Bureau complaints in just 5 years as a company.", cite: "Hindenburg Research" },
      { type: "h2", id: "what-can-go-wrong", text: "What can go wrong" },
      { type: "p", text: "The dangers of using mail-order aligners range from the possibility of making existing dental issues worse, or creating entirely new problems, to simply not being effective. Some consumers have complained about the braces they ordered online not working, noticing no difference in the shape of their teeth. It is important to have your progress monitored by an orthodontist." },
      { type: "quote", text: "In traditional dentistry, train-track braces and clear aligners are fitted by dentists and orthodontists themselves, or a trained orthodontic therapist, after an in-person consultation. The health of the hard and soft tissues of the mouth, the teeth and gums, and whether the roots of the teeth can sustain movement, are some of the factors dentists consider. X-rays are instrumental in this process. Once someone starts wearing braces, regular appointments allow dentists to monitor how teeth are moving and to spot and address complications.", cite: "BBC News" },
      { type: "h2", id: "a-better-path", text: "A better path in Tucson" },
      { type: "p", text: "Dr. Brian Mitchell, located in Tucson, is a qualified expert in Invisalign aligners and will provide you with a free Invisalign consultation to develop your exclusive treatment plan." },
      { type: "quote", text: "Invisalign is a way to straighten teeth without metal braces. We will make a clear mouthpiece or tray for you that will straighten your teeth over time. These trays are removable so you can brush and eat normally.", cite: "Dr. Brian Mitchell" },
      { type: "p", text: "The Invisalign treatment is also affordable, with payment options offered by Dr. Mitchell. The first step for exploring affordable braces in Tucson is to set up an appointment with Dr. Mitchell, one of the best orthodontists Tucson has to offer. To request an appointment, use the contact form on this site or call (520) 523-4860." },
    ],
    sources: [
      "https://www.bbc.com/news/uk-58038752",
      "https://hindenburgresearch.com/smiledirectclub-moving-fast-and-breaking-things-in-peoples-mouths/",
    ],
  },
];

export const formatPostDate = (iso: string) => new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", { month: "long", year: "numeric" });
