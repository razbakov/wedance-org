---
name: Personal Brand Studio — conversion directions (D · F)
description: Two conversion-focused website directions for Lumen Atelier / artist-brand-studio venture. React + Babel single-page design canvas.
type: design-pack
created: 2026-04-24
updated: 2026-04-24 (trimmed to D + F only; A/B/C cinematic directions removed)
---

# Personal Brand Studio — D + F

Source: Anthropic design tool → `Personal Brand Studio.html` (extracted from `222 (3).zip`, 2026-04-24). Originally shipped with 5 directions; A (KRAVCHENKO STUDIO editorial), B (PAREDES ATELIER warm dark), C (MORENO & CO. modern sans) were removed 2026-04-24 to keep only the conversion-focused options.

## What's here

Single-page design canvas (no build step) that renders both conversion-focused website mockups side-by-side on a pan/zoom artboard surface.

| Dir | Brand name | Direction |
|-----|------------|-----------|
| D | KRAVCHENKO | Conversion-focused, periwinkle + Poppins |
| F | KRAVCHENKO | Conversion-maxed (BuzzCraft-logic pushed) |

Both are tall single-page conversion layouts (D at 4200px, F at 6600px).

## Run

```bash
# via launch.json (port 8787)
# preview_start name=pbs-design
# then open http://localhost:8787/Personal%20Brand%20Studio.html

# or directly:
python -m http.server 8787 --directory ventures/artist-brand-studio/design
```

Launch entry already wired in `.claude/launch.json` as `pbs-design`.

## File map

- `Personal Brand Studio.html` — entry; loads React 18 UMD + Babel standalone + all `.jsx` below
- `design-canvas.jsx` — Figma-like canvas wrapper (pan/zoom, artboards, focus mode)
- `common.jsx` — `PHOTOS` (Unsplash refs used by D and F). Also defines legacy `BRANDS`/`Nav`/`Footer` which are unused after the A/B/C trim but kept for asset continuity.
- `direction-d.jsx` — standalone D layout
- `direction-f.jsx` — standalone F layout
- `styles.css` — shared primitives (most theme vars belonged to removed A/B/C)
- `uploads/` — reference pastes + inspiration imagery

## Next step

Pick one direction → extract into a real Nuxt/Astro project → map to `website-spec.md` section structure.
