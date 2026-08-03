---
type: context
name: brand-strategy
engagement: bighorn
last_updated: 2026-08-03
track: 2 (design system)
---

# Bighorn Government Services — Design System

## Concept
"Field brief / survey map." Bighorn's own materials give the direction —
no need to borrow generic "military site" tropes. Two of their three
business lines are literally about precision measurement: land management
runs on GIS/GPS/topographic survey data, and defense solutions runs on
ballistic precision. The design pulls contour-line topography and
targeting-reticle brackets from that material, not from stock "camo and
eagles" military branding.

**Signature element:** a topographic contour-line texture used as a
recurring background layer (hero sections, section dividers), paired with a
four-corner targeting-reticle bracket frame on featured images/cards,
rendered in the client's own logo green. Sharp clipped corners throughout
instead of rounded ones — reads like armor plate, not a SaaS dashboard.

## Color Tokens
| Token | Hex | Use |
|-------|-----|-----|
| `--bg-deep` | `#12140F` | Primary background — gunmetal-olive, near-black but warm, not pure black |
| `--bg-panel` | `#1B1E16` | Card/section panel background, one step up from bg-deep |
| `--olive` / `--olive-bright` | `#8C983E` / `#ADBC4E` | **Primary accent.** Sourced directly from the client's own logo, not chosen abstractly — sampled the actual logo PNG pixels (dominant color `#505028`, ~H60&deg; olive-drab) and built a brighter, UI-usable tint at the same hue. Buttons, active nav, links, section labels, reticle brackets, hero kicker, stat numbers. |
| `--brass` / `--brass-bright` | `#B9924F` / `#D4AC6E` | Secondary/data accent — cartridge brass. NAICS codes, process step numbers, resource dates, fact labels, contact info labels. Keeps a metallic "dossier" texture without competing with the green for primary attention. |
| `--sand` | `#C7BFA6` | Secondary text on dark, muted labels, borders |
| `--paper` | `#F3EFE4` | Off-white — body text on dark, light-section backgrounds |
| `--rust` | `#A8461F` | Tertiary accent, sparingly — Defense Solutions line CTA only |
| `--line` | `#3A3D30` | Hairline borders, dividers, topo-line stroke color |

**v1.1 update (2026-08-03):** Client noted their existing logo is green and
their prior site used green — they want it reflected. Rather than guess a
green, pulled the actual color from the live logo file via pixel sampling
(canvas `getImageData` on `bighorngov.com/wp-content/uploads/2019/12/
Bighorn-Site-Logo.png`): dominant RGB (80,80,40) / `#505028`, hue ~60&deg;,
a dark olive-drab. Built `--olive`/`--olive-bright` as brighter, more
saturated tints of that exact hue for UI use, and promoted it to the
primary interactive accent (previously brass held that role). Brass steps
back to a secondary "data label" accent. Rust stays tertiary and rare — one
accent still shouldn't compete with the primary for attention, it's just
olive-green now instead of brass.

## Type Tokens
| Role | Face | Notes |
|------|------|-------|
| Display | Oswald (600/700) | Condensed, stenciled authority. All headings, nav, buttons. Uppercase with wide tracking for labels/nav; sentence case for large headlines. |
| Body | Barlow (400/500) | Clean, slightly technical, high readability at small sizes |
| Data/mono | Space Mono (400) | NAICS codes, section numbers ("SEC. 01"), coordinates, stat counters, footer legal line |

## Layout Principles
- Section labels use field-manual numbering (`01 — CAPABILITIES`, `SEC.
  02`) via Space Mono — real sequence markers, not decoration.
- Cards and hero panels use `clip-path` corner cuts (8–12px) instead of
  border-radius.
- Targeting-reticle corner brackets (four independent corner marks, brass,
  1px) frame the primary image on hero/feature sections — the one place the
  design spends its "boldness."
- Topo-line SVG pattern sits at low opacity (6–10%) behind dark sections
  only — never competes with text contrast.
- Motion: one deliberate reveal (reticle brackets draw in on hero load), no
  ambient scroll effects sprinkled through the page.

## What This Is Not
Not camo patterns, not eagle/flag clip art, not distressed/grunge textures,
not a black-and-red "tactical gear store" look. This is a government-
contractor site — the audience includes contracting officers and program
managers. Authoritative and precise, not costume-military.
