# Claude Code Handoff — Dr. Brian Mitchell & Associates

## Project purpose

This repository contains the approval-stage mockup for the Dr. Brian Mitchell & Associates dental-practice website. It is **not yet the completed production site**. Preserve approved visual choices and do not represent the work as a finished launch without client approval.

## Start here

Run the following commands from the repository root:

```bash
corepack enable
pnpm install
pnpm dev
```

Run validation before committing:

```bash
pnpm check
pnpm build
```

## Stack and key files

| Area | Location |
|---|---|
| App routing | `client/src/App.tsx` |
| Homepage | `client/src/pages/Home.tsx` |
| Services, About, Contact, and blog pages | `client/src/pages/PracticePages.tsx` |
| Shared header/footer and asset map | `client/src/components/PracticeChrome.tsx` |
| Global design system and responsive styling | `client/src/index.css` |
| Design direction | `ideas.md` |
| Remaining and completed work | `todo.md` |
| Responsive review history | `refinement_validation_notes.md` |
| Source-content and migration notes | `wordpress_inventory_notes.md`, `service_video_audit.md` |

## Design contract

The visual direction is **Sonoran Quiet Luxury**: warm ivory, pale sage, deep Saguaro green, terracotta architectural arcs, and DM Serif Display with Manrope. The central conversion message is **trust**: patients should feel cared for, listened to, informed, comfortable, clear on costs, and confident in their outcome.

The most recent homepage treatment is **Sunlit Welcome**. It uses real practice footage at natural brightness, a contained warm-ivory copy panel, and a pale-sage trust strip. Do not revert it to a full dark cinematic treatment without client approval.

## Asset portability

The original managed preview used `/manus-storage/...` URLs. Run the following command once after cloning this repository to download the approved public practice assets into `client/public/assets/practice/` and replace all managed URLs with portable local paths:

```bash
node scripts/prepare-portable-assets.mjs
```

The asset list includes the logo, practice imagery, staff portraits, BioClear credential, approved posters, and homepage practice-tour MP4. Review the Git diff after the script completes, then commit the downloaded assets and rewritten references.

The exported copy removes platform-specific analytics from `client/index.html`. Configure analytics for the chosen production host separately; do not paste production tracking credentials into the repository.

## Important client decisions

* Use public source materials where available; avoid AI-generated substitutes for clinical, team, or video imagery.
* Do not add a video control to the Cosmetic Dentistry hero. Its Dr. Mitchell video belongs in the lower Porcelain Veneers panel.
* The About page combines the practice story, the complete team, doctor biographies, and an **Inside the Practice** click-to-play video panel between the story and doctor profiles.
* The footer includes Dr. Mitchell’s BioClear credential.
* The contact form is a visual mockup only. Production requires a privacy/HIPAA-aware form and appointment workflow.
* Never fabricate patient reviews, ratings, testimonials, or other user-generated proof.

## Deployment and domain

The branded review domain currently points to the managed preview: `https://brianmitchell.khalismarketing.com.au`. Do not change its CNAME until an external deployment has been validated on a staging URL. The public site must be rechecked after any future deployment because edge caching can delay visible changes.

## Production migration caution

Before launch, confirm the canonical name, address, phone, booking destination, staff roster, team bios, form recipient, privacy workflow, sitemap, redirects, page metadata, schema, and all client-approved copy. The WordPress source inventory documents the original content; do not treat mockup copy as the complete migration source.
