# Bighorn Government Services — Dev Track

## Overview
Full visual refresh of bighorngov.com. Client explicitly wants restyle only —
zero copy changes, they've finalized their own words. Currently on
WordPress/Elementor/Slider Revolution. Migration path TBD (Netlify likely,
consistent with other engagements) — this round is mockup only, not a live
migration.

---

## Stack
| Layer | Decision | Notes |
|-------|----------|-------|
| Framework | Vanilla HTML/CSS/JS | No build tools, easy to hand off or deploy anywhere |
| Fonts | Google Fonts — Oswald + Barlow + Space Mono | Oswald for display/nav, Barlow for body, Space Mono for data labels (NAICS codes, section numbers) |
| Colors | Gunmetal-olive bg, brass accent, sand neutral, paper off-white, ordnance-rust secondary | Full tokens in `context/brand-strategy.md` |
| Images | Hotlinked from bighorngov.com/wp-content/uploads | Same assets as live site — localize before launch |
| Hosting | TBD | Currently WordPress. Netlify likely for next phase. |
| Domain | bighorngov.com | Client-owned |

---

## Versions

### v1 — Initial Mockup (August 2026)
**Files:** `site/*.html`
**Status:** ✅ Built, ready for client review

**What's in v1 — all 8 pages, full IA parity with live site:**
- `index.html` — Home: hero (Veterans Helping Veterans / SDVOSB statement),
  three service pillars (VR Training, Defense Solutions, Land Management)
  with NAICS codes, closing "We got your six" band with SDVOSB seal
- `vrpt.html` — VR Powered Training: intro, "We Build Great Systems" CTA
  band, 3-pillar tab section (Cost Effective / Repeatable / Immersive),
  Learning Rates of Retention counters (5% lecture / 10% text / 75% VR —
  actual values pulled from live site's counter widget, not invented)
- `our-vr-approach.html` — 4-step rollout process (Proof of Concept, Pilot,
  Content and User Waves, Organizational Rollout)
- `vrr.html` — VR Resources: 6 research citation cards
- `defense-solutions.html` — Ammunition sourcing/distribution overview + CTA
- `construction-and-land-management.html` — Land Management services list +
  Range Construction services list, both verbatim from live site
- `about-us.html` — SDVOSB designation, DUNS/CAGE codes, founder bio (Lanny
  J. Keith)
- `contact.html` — address, phone, email, inquiry type list (form UI-only,
  not wired)
- Shared nav (with Services flyout matching live site's structure) and
  footer across all pages
- Signature design motif: topographic contour-line background texture +
  targeting-reticle corner brackets on featured cards/images

**What's still missing / needs Bighorn's input:**
- [ ] Confirm restyle direction before any further build
- [ ] Real/updated photography (currently hotlinked from their live WP site)
- [ ] Decision on hosting migration (stay WordPress vs. move to Netlify)
- [ ] Contact form backend (currently UI-only — no submission handling)
- [ ] VR Resources pagination (live site has a page 2 — only page 1's 6
      articles pulled for this mockup)

---

## To-Do

### Bighorn to provide
- [ ] Sign-off on design direction (colors/type/motif)
- [ ] Any updated photography if they have it (otherwise we keep hotlinking
      current site images through launch)
- [ ] Hosting/domain decision
- [ ] Contact form requirements (where should submissions go?)

### Dev tasks
- [ ] Client review of v1 mockup
- [ ] Set up GitHub repo + Netlify (once direction is approved)
- [ ] Localize hotlinked images
- [ ] Wire up contact form
- [ ] Pull VR Resources page 2 if client wants full parity
- [ ] Add OG tags / favicon / basic SEO meta

---

## Deployment Plan (when ready)
1. Push `site/` to GitHub repo (new repo: `bighorn-government-services`)
2. Connect repo to Netlify → deploy `main`
3. Add custom domain on Netlify
4. Transfer DNS from current host to Netlify
5. Decommission old WordPress instance

---

## Notes
- Client said the current site "gives off big veteran vibes and military
  vibes" — that's not a complaint, it's the brand. The redesign should lean
  into that harder and more specifically (their actual materials: terrain
  data, ballistics precision) rather than soften it into generic corporate.
- Do NOT touch copy. Every sentence on every page is client-approved as-is.
- Counter stats on VR Powered Training page were NOT visible in static HTML
  (JS-rendered, scroll-triggered animation) — confirmed real values (5/10/75)
  via live DOM inspection rather than guessing.
