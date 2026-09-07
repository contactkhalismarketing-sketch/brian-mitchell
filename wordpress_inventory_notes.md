# WordPress Source Inventory Notes

## Access and safeguards

- WordPress dashboard access was confirmed on 4 September 2026.
- Inventory work is read-only. No pages, posts, media, forms, users, plugins, menus, or settings will be changed during this phase.

## Dashboard structure confirmed

The source installation contains dedicated content types for **Pages**, **Posts**, **Services**, and **Staff Bio**, alongside Elementor, Formidable Forms, Media, Menus, redirects, SEO/performance tools, and review-feed tools. This supports a structured migration rather than relying solely on publicly rendered pages.

## Initial page-index findings

- The Pages screen reports **20 total items**: **19 published** and **1 draft**.
- The visible source pages include: About, Bioclear: A Revolutionary Approach to Dental Restoration, Contact, Financing, First Time Visit, Home, Jeuveau Injections in Tucson: Effective TMD Treatment and Wrinkle Reduction, New Patient Specials, and Our Team.
- Full page titles, URLs, publication states, and hierarchy remain to be captured in the migration matrix.

## Complete page inventory captured

| Source page | Source state / role | Migration assessment |
|---|---|---|
| About | Elementor | Combine with team content in the new About page, as approved. |
| Bioclear: A Revolutionary Approach to Dental Restoration | Elementor | Preserve or redirect after content review. |
| Contact | Elementor | Migrate content and approved contact-form behaviour. |
| Financing | Elementor | Preserve content and external finance-provider details. |
| First Time Visit | Elementor | Fold into patient/new-patient journey or preserve as a dedicated page. |
| Home | Front Page | Source reference for remaining copy and asset inventory. |
| Jeuveau Injections in Tucson: Effective TMD Treatment and Wrinkle Reduction | Elementor | Preserve or redirect after service-scope review. |
| New Patient Specials | Elementor | Migrate current approved offer wording and booking path. |
| Our Team | Elementor | Fold into the new About page, as approved. |
| Patient Care | Published | Review relationship with Patient Info and First Time Visit. |
| Patient Info | Elementor | Preserve as patient-resource hub or disperse into relevant pages. |
| Blogs | Posts Page | Migrate blog archive and underlying articles. |
| FAQ | Elementor | Preserve FAQ content and associate each answer with the right service/patient page. |
| Financial | Elementor | Compare with Financing to identify duplicated or separate content. |
| Forms | Elementor | Preserve downloadable and patient-form links after confirmation. |
| Practice Photos | Elementor | Preserve media gallery assets where approved. |
| Privacy Policy | Draft | Source exists but is not published; obtain approved policy or retain a compliant replacement before launch. |
| Sample Page | Published | Exclude from production migration and redirect or remove from public navigation as appropriate. |
| Services | Elementor | Source reference for the new service hub. |
| Technology | Elementor | Preserve relevant equipment and technology content. |

## Service content type

The WordPress Services content type contains **12 entries**: **11 published** and **1 draft**.

| Source service | Status | Migration destination |
|---|---|---|
| Adult Braces | Published | Orthodontics detail page or treatment subpage. |
| Bioclear | Published | Bioclear service page; preserve current clinical and offer content. |
| Bridges | Published | Restorative dentistry detail page or treatment subpage. |
| Cosmetic Dentistry | Published | Cosmetic Dentistry primary detail page. |
| Dental Implants | Published | Dental Implants primary detail page. |
| Extractions | Published | Oral surgery / restorative treatment subpage. |
| Orthodontics | Published | Orthodontics primary detail page. |
| Preventative Dentistry | Published | Preventive care primary detail page. |
| Professional Teeth Cleaning | Published | Preventive care treatment subpage. |
| Root Canals | Published | Endodontic treatment subpage. |
| Whitening | Published | Cosmetic dentistry treatment subpage. |
| X-Rays | Draft | Confirm whether the item should remain unpublished, be combined into preventive care, or be omitted. |

## Staff Bio content type

The Staff Bio content type contains **12 records**: **10 published** and **2 drafts**. The approved new-site structure combines this material into the About page.

| Staff record | Source status | Migration treatment |
|---|---|---|
| Camille | Published | Include with title, approved bio, and a sharper portrait when provided. |
| Crystal | Published | Include with title, approved bio, and a sharper portrait when provided. |
| Dr. Brian Mitchell | Draft | Use the existing public About/Our Team bio as the source of truth; review this draft only for unique content. |
| Elsa | Draft | Confirm whether the profile is current; exclude by default. |
| Gisselle | Published | Include with title, approved bio, and a sharper portrait when provided. |
| Jackie | Published | Include with title, approved bio, and a sharper portrait when provided. |
| Kiana | Published | Include with title, approved bio, and a sharper portrait when provided. |
| Monique | Published | Include with title, approved bio, and a sharper portrait when provided. |
| Nita | Published | Include with title, approved bio, and a sharper portrait when provided. |
| Roxanne | Published | Include with title, approved bio, and a sharper portrait when provided. |
| Tenzi | Published | Include with title, approved bio, and a sharper portrait when provided. |
| Yuri | Published | Confirm final role/biography before production, as the public page previously used a placeholder treatment. |

## Blog posts

The WordPress post index contains **six published articles**, all currently filed as **Uncategorized**. Each article should retain its date, author attribution where approved, featured media, body content, and original URL mapping.

| Blog post | Published | Current author | Content relationship |
|---|---:|---|---|
| The Importance of Soft Tissue in Successful Dental Implant Surgery | 1 Jun 2026 | Rudy Martinez | Dental implants / clinical education. |
| Bioclear Restorative Technique | 28 Jul 2025 | Rudy Martinez | Bioclear / restorative dentistry. |
| Planning For a Dental Implant | 7 Apr 2025 | Rudy Martinez | Dental implants / patient education. |
| Why You Need a Dentist to Monitor Your Clear Aligner Therapy | 22 May 2024 | Joe Murillo | Orthodontics / clear aligners. |
| The Dangers of (Do It Yourself Mail Order Aligners) | 22 May 2024 | Joe Murillo | Orthodontics / clear aligners. |
| Where To Find The Best Invisalign® Orthodontic Treatment In Tucson | 22 May 2024 | Joe Murillo | Orthodontics / Invisalign®. |

**Migration note:** Establish meaningful categories or service-topic tags in the new system rather than preserving the all-Uncategorized structure.

## Source form inventory

The source site contains two Formidable forms. No form entries or patient-submitted data were opened or exported.

| Form | Source identifier | Current use indicated by name | Migration decision needed |
|---|---|---|---|
| Contact Us | `contact-form` / ID 1 | General contact inquiries | Replace with the approved visible-field form and a confirmed HIPAA-appropriate submission workflow. |
| Schedule Form | `schedule-form` / ID 2 | Scheduling requests | Confirm whether it remains an inquiry form or is replaced with the selected booking provider. |

The active source form index shows no entries associated with either listed form at the time of inventory. Form configuration, recipient email, and any integrations must be reviewed before recreating these flows.

## Source navigation

The active WordPress menu is named **Menu Left**. Its source structure confirms the public information architecture below:

| Top-level item | Source children | New-site treatment |
|---|---|---|
| Home | None | Homepage. |
| Services | Cosmetic Dentistry, Orthodontics, Dental Implants, Bioclear page, Whitening, Extractions, Bridges, Preventative Dentistry, Root Canals, Adult Braces, Professional Teeth Cleaning, Jeuveau Injections | New services hub with primary service pages, supported by redirects for retained treatment URLs. |
| About | Our Team | Merge the team content into About as approved; redirect `/our-team/` to `/about/`. |
| Patient Info | First Time Visit, Financial, Forms, FAQ | Preserve as a resource hub or redistribute links into patient journeys with redirects. |
| Blogs | None | Blog archive. |
| Contact | None | Contact page with clearly visible fields and approved inquiry flow. |

The menu also includes **Jeuveau Injections**, which does not appear among the custom Service records and must be reviewed as a separate page-level service item.

## Content export availability

The WordPress Tools → Export screen supports a standard **WordPress eXtended RSS (WXR)** content export. A read-only all-content WXR archive was captured on 4 September 2026. It contains **238 source records**, including 20 pages, 12 services, 12 staff bios, 6 posts, 126 attachments, navigation records, Elementor template records, and source form configuration records. No import or source-site change was made.

## Media library

The media library currently reports **120 items** across images, video, and documents, organized by upload date rather than a purposeful folder taxonomy. The latest assets include article images, Jeuveau campaign graphics, footer graphics, staff/practice media, and several unattached design files.

**Migration treatment:** Bring across only media that is currently used, contractually owned or approved for reuse, visually suitable at the new display size, and relevant to retained pages. The existing staff thumbnails are 150 × 150 pixels and should be replaced with higher-resolution originals before a large-card team treatment. Unattached campaign assets and duplicated generically named files require a content-owner approval pass rather than automatic migration.

## Reading and discovery settings

| Source setting | Current value | Migration implication |
|---|---|---|
| Homepage | Home | Preserve `/` as the primary public route. |
| Posts page | Blogs | Preserve the blog archive route or establish a 301 redirect to the new archive route. |
| Posts per archive page | 10 | The new blog archive can retain this pagination size unless content strategy changes. |
| Feed content | Full text | Decide whether the new site should maintain a full-text feed or provide excerpts. |
| Discourage search indexing | Disabled | The live site is intended to be indexable. Keep the new mockup non-indexed until launch, then enable normal indexing only after redirects, canonical URLs, and metadata are in place. |

## Permalink settings

The source WordPress site uses the custom post-name structure: `/%postname%/`. Category and tag bases are blank. New routes should retain the current slug where a page or post is being preserved; any intentional consolidation or renaming should be accompanied by a mapped permanent redirect.

## Existing redirect

The source redirect settings contain one active redirect:

| Source path | Destination | Recorded hits | Migration treatment |
|---|---|---:|---|
| `/review` | `https://review.irapture.com/feedback/pages/add-review/NjY2NDk=` | 43 | Preserve as an outbound redirect if the review destination remains approved; otherwise confirm a replacement destination before launch. |
