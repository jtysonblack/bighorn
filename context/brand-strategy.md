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
four-corner targeting-reticle bracket frame on featured images/cards. Sharp
clipped corners throughout instead of rounded ones — reads like armor plate,
not a SaaS dashboard.

## Color Tokens
| Token | Hex | Use |
|-------|-----|-----|
| `--bg-deep` | `#12140F` | Primary background — gunmetal-olive, near-black but warm, not pure black |
| `--bg-panel` | `#1B1E16` | Card/section panel background, one step up from bg-deep |
| `--brass` | `#B9924F` | Primary accent — cartridge brass. Headlines, active nav, key CTAs, reticle brackets |
| `--sand` | `#C7BFA6` | Secondary text on dark, muted labels, borders |
| `--paper` | `#F3EFE4` | Off-white — body text on dark, light-section backgrounds |
| `--rust` | `#A8461F` | Secondary accent, sparingly — used for the Defense Solutions line and urgent CTAs only |
| `--line` | `#3A3D30` | Hairline borders, dividers, topo-line stroke color |

Do not introduce additional hues. Rust is intentionally rare — one accent
should not compete with brass for attention.

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
