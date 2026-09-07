# Responsive Refinement Validation Notes

## Local review

Desktop review at 1440 × 1100 confirmed that the homepage now uses live practice imagery for the three primary service gateways and a compact three-column service directory for the remaining treatments. The full treatment offering is visible without the oversized, repeated hero-card effect.

Mobile review at 390 × 844 confirmed that the optional `Practice · equipment · technology` media label is not rendered, preventing the reported overlap in the homepage hero. The primary service cards stack cleanly, the secondary service cards remain compact and legible, and the fixed call/booking bar does not obscure the content.

On the About page, the doctor-card booking actions have a deliberately increased visual pause after the biographies at desktop and mobile widths. The individual article now has a reduced mobile title scale, a distinct editorial hero field, a three-item reading guide, and readable article/body sizing at the target mobile viewport.

## Build status

`pnpm check` and `pnpm build` completed successfully following the changes. The production build retains the existing bundle-size advisory only.

## Branded-domain deployment check

The first branded-domain homepage request returned a prior cached revision. A fresh request using the current checkpoint query string (`?rev=c0dcb5ab`) returned the published update, including the three updated live-image service gateways and all nine compact additional-service cards. The custom-domain deployment is therefore serving the new release; include the version query when immediately reviewing a just-published update if a browser continues to present its previous cached version.

## Layout correction review

The compact full-service card directory is now placed below the three featured service cards on the Services page, while the homepage returns to its focused three-card services presentation. The revised About-page hero crop at desktop height brings Dr. Brian’s face into the central group-photo composition. At the narrow mobile crop, he is visible but sits too close to the overlaid heading, so the mobile focal position will be moved slightly to the right before publication.

## Corrected public release

The branded Services page was checked directly after publishing version `e6746e6f`. The fresh public response shows three image-led featured services followed by the full compact directory, numbered 04 through 12, exactly in the requested Services-page position. The homepage no longer contains the secondary compact directory.

## Homepage hero refinement review

The desktop hero has been reduced from its former 16:9 full-width treatment to a fixed responsive range of 680–720px, preserving the full CTA and patient-trust line. The crop is anchored to the top of the source video, keeping its lower embedded watermark outside the desktop frame. The source’s actual facade signage remains visible behind the hero copy, especially in the mobile crop. Confirmation is required on whether the user wants that physical building signage removed as well, which would require excluding the exterior-signage shot rather than adjusting layout alone.

## Cosmetic Dentistry mobile review

At 390 × 844, the Porcelain Veneers video panel now keeps its source preview prominent while using a compact play control at the lower edge and a small top label. The separate consultation card uses a reduced display scale, a more compact body measure, and a single-line CTA that fits the narrow width. A desktop check confirms these mobile-only refinements do not alter the approved split hero or desktop consultation layout.

## Taller About-hero review

The About hero now uses an extended page-specific vertical rhythm. At desktop size, it gives the group image enough room to show the central doctor and surrounding team faces while the left-hand copy stays legible against the dark gradient. At 390 × 844, the page retains the complete headline, supporting copy, and CTA, while the central doctor and adjacent team faces remain clearly visible in the image field.

## Doctor-card booking-action alignment review

At desktop size, both doctor-card content panels now use the same flexible vertical layout, anchoring their booking actions to the shared lower baseline despite the biographies having different lengths. At 390 × 844, the cards stack as intended and retain a deliberate text-to-action gap without forcing excess card height or affecting the surrounding team presentation.

## Homepage portrait delivery repair

The published homepage was requesting an older PNG portrait asset. Although it resolved in desktop Chromium, the client’s mobile capture showed a broken image state. The homepage now uses the full-resolution JPEG portrait already rendered successfully on the published About page. At 390 × 844, the image loads and displays normally in the “Why Dr. Mitchell?” section; the desktop composition remains intact.

## About practice-tour preview source review

The supplied YouTube practice-tour video (`N5E4s1wcdTQ`) is the approved content source for the new About-page panel. A raw-footage contact sheet shows that its unedited stills include visible source branding and incidental people. The panel will retain the source video for click-to-play, but its paused preview should be updated to a clean approved practice-tour render rather than use either the raw YouTube thumbnail or an unedited raw frame.

## Light-first homepage and About video-panel review

At 1440 px, the homepage now opens with the real practice-tour footage visible at natural brightness, a contained warm-ivory copy panel, and a pale sage trust strip. This materially reduces the former dark first impression while retaining a clear appointment action. At 390 px, the copy panel, two CTAs, and fixed mobile actions remain readable without restoring the prior overlapping media label.

The About page now places the click-to-play practice-tour panel directly after the opening story and before the doctor profiles. Its paused frame is a real, cleaned still from the approved practice-tour render rather than the unrelated YouTube thumbnail; the panel remains readable and tap-friendly at both desktop and mobile widths.

## Branded-domain publication check — Sunlit revision

The `e855e0ec` checkpoint completed successfully. The first two branded-domain requests, including a cache-busting query after a short propagation wait, still returned the prior dark hero and dark trust strip. The updated light-first layout is confirmed in the development preview; public-domain verification remains in progress and should not be described as live until the branding-domain edge cache refreshes.
