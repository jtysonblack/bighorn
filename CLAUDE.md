# Bighorn Government Services — Engagement Config

## Client
**Name:** Bighorn Government Services (BGS)
**Founder:** Lanny J. Keith (U.S. Army veteran, 2001–2010)
**Location:** 1927 Westland Dr SW, Cleveland, TN 37311
**Live site:** https://bighorngov.com
**Engagement type:** Site redesign (visual/UX only — no copy changes without client sign-off)

## Project Context
Bighorn reached out saying their site was "super outdated" and wants a full
refresh/restyle. **They have already finalized their copy — every word on the
site is theirs and stays exactly as-is.** Scope is restyle/redesign only: new
layout, typography, spacing, color system, and UX. Same words, same
information architecture. Do not add, cut, or reword any client copy without
explicit sign-off.

Bighorn is a Service Disabled Veteran Owned Small Business (SDVOSB) operating
across three distinct lines: VR-powered training for healthcare/combat support
teams, defense solutions (small arms ammunition sourcing & distribution), and
land management/range construction for military installations. The current
site (WordPress/Elementor/Slider Revolution) reads generic-corporate and
undersells how specialized and mission-driven the work actually is.

## Design Direction
Distinctly military/veteran/defense-contractor — but disciplined, not
costume-military. Direction pulls from the subject's own materials: land
survey topography (their literal land management work — GIS/GPS,
cartographic services) and precision optics/targeting (their literal defense
work — ammunition, range construction). Signature motif: topographic contour
lines as a background texture, paired with a targeting-reticle corner-bracket
frame on featured cards/images. Sharp, clipped corners instead of rounded
ones — reads like armor plate, not SaaS.

**Palette:** deep gunmetal-olive background, brass/cartridge accent, warm
sand neutral, paper off-white, muted ordnance-rust for secondary CTAs.
**Type:** Oswald (condensed display, stenciled authority) + Barlow (body) +
Space Mono (data labels — NAICS codes, coordinates, section numbers).
Full token system in `context/brand-strategy.md`.

## Site Pages (mirrors current IA — do not restructure nav)
- Home (`index.html`)
- Services
  - VR Powered Training (`vrpt.html`)
    - Our VR Approach (`our-vr-approach.html`)
    - VR Resources (`vrr.html`)
  - Defense Solutions (`defense-solutions.html`)
  - Land Management and Construction (`construction-and-land-management.html`)
- About Us (`about-us.html`)
- Contact (`contact.html`)

## Copy Source of Truth
All body copy pulled verbatim from the live site (fetched 2026-08-03). Stat
counters on the VR Powered Training page (5% / 10% / 75%) were pulled from
the live DOM's `data-to-value` attributes (Elementor counter widget renders
"0%" until scroll-triggered — confirmed actual values via browser inspection,
not invented).

## Images
Hotlinked directly from the client's existing WordPress uploads
(`bighorngov.com/wp-content/uploads/...`) — same assets, no re-upload needed,
consistent with how other engagements (e.g. Remember Me) handle this during
mockup phase. Swap to locally-hosted/optimized versions before launch.

## Tools / Stack
- Static HTML/CSS/JS, no build step — easiest to preview and hand off
- Fonts: Google Fonts (Oswald, Barlow, Space Mono)
- No forms wired up yet — Contact page form is UI-only in the mockup phase

## Dev Notes
- Working branch: `dev`
- Do not merge to `main` without review
- Copy is verbatim from live site as of 2026-08-03 — do not alter wording
  without client approval
- See `dev-track.md` for build status and outstanding items

## Pipeline Status

| Step | Status | Notes |
|------|--------|-------|
| Engagement folder created | ✅ | |
| CLAUDE.md written | ✅ | |
| Client profile captured | ✅ | Pulled from live site — see `context/client-profile.md` |
| Brand strategy / design tokens | ✅ | See `context/brand-strategy.md` |
| site/ v1 built (full mockup, all 8 pages) | ✅ | Restyle only, verbatim copy |
| Client review | ⏳ | Share mockup with Bighorn |
| Domain / hosting decision | ❌ | Currently WordPress; migration path TBD |
| Real photography (non-hotlinked) | ❌ | Currently hotlinked from live WP site |
| Contact form wiring | ❌ | UI-only in mockup |
