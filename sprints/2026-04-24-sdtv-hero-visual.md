# Design Sprint: SDTV Hero Visual

**Date:** 2026-04-24
**Decider:** Кирилл
**Status:** Complete (6 of 6 phases locked)

## Brief context

- Current state: multi-phone cluster hero on socialdancetv.com above "THE GLOBAL DANCE MEDIA" headline + pill ("Official Media Partner · 120+ Festivals") + 3 audience cards (Festivals / Dancers / Artists).
- Target style: 3D, cinematic, luma.com-inspired. SDTV red + white/black/accents.
- Usage: web hero primary; deck opener and socials downstream.

## 1. Challenge

- **Long-Term Goal:** **Conversion engine** — primary hero + deck opener tuned for inbound festival leads. Measured by qualified festival inquiries/month and deck view-to-reply rate.
- **Sprint Questions:**
  1. Can the visual sit next to the current hero layout (headline + pill + 3 audience cards) without competing — and measurably lift CTA click-through vs. the current phone-cluster?
  2. Can we create a look that reads as distinctly SDTV — not generic AI/luma.com lookalike — so competitors can't copy it with the same prompt?

## 2. Explore

- **Problem map:** Visual lives on 3 surfaces (web hero, deck opener, social). Primary audience = festival organizers (B2B revenue). Conversion path: see visual → 3-sec self-identify → read headline + pill → scan "For Festivals" card → click → offer page → form/DM → Kirill closes. Visual owns first 3 seconds on all surfaces.
- **Critical risks addressed this sprint:**
  - **Visual eats copy** — rich 3D hero overpowers headline + CTAs, attention lands on render not click
  - **Cloneable AI look** — luma.com-style 3D prompt is copy-pasteable; competitors replicate in 10 min

## 3. Ideate

4 concepts explored:

1. Orbit (refined brief — composition discipline, same direction as v1)
2. World-inside-phone (inversion — phone as window into festival scene)
3. Pro-camera hero (repositioning — camera as signature object)
4. Stadium-scale (zoom out — crowd + jumbotron, reach story)

## 4. Decide

- **Winning concept:** **World-inside-phone + Orbit sprinkle**
- **Description:** Phone floats centered, screen is a window into a cinematic 3D festival scene (stage, dancers, lights, depth). Outside the phone: 2–3 small floating 3D elements (clapboard with SDTV logo, heart, film reel) on one side only. Clean dark-red to black gradient background, negative space on opposite side for headline breathing room.
- **Rationale:** Beats 3-sec message test ("festival in your pocket"), naturally defensible (bespoke inside-phone scene is not promptable like stock icons), invites copy coexistence through deliberate asymmetric composition. Orbit sprinkle adds dopamine without sliding into cloneable-aesthetic trap — icons stay SDTV-proprietary.

## 5. Shape

### Storyboard

- **Act 1 — Entry (0–3s):** Product-shot center. Phone floats upright, centered on its axis, screen already glowing with festival scene. Clean, confident, premium.
- **Act 2 — Value (3–8s):** Scene comes alive. Inside the phone, camera pushes into the stage, dancers move, lights pulse. Orbit elements (clapboard, heart) pulse subtly.
- **Act 3 — Hook (8–12s):** Logo + CTA reveal. Phone settles, screen stays alive but calmer. SDTV logo pulses once. CTA ("For Festivals →") glows adjacent. Cleanest pairing with existing hero copy — zero fight with headline.

### In scope (v1)

- Festival scene inside phone — cinematic 3D, stage + dancers + lights + depth
- SDTV logo on phone UI (app-style placement, like IG top bar)
- 2–3 orbit elements — clapboard (SDTV-branded), heart, one of [film reel / chart / camera]

### Out of scope (v1)

- 1:1 and 9:16 ratio adaptations — ship from 16:9 master later (v2)
- Animation sequence — static hero first; animation is v2
- Multi-variant festival scenes (one event-per-variant) — v1 uses one signature scene
- Dancer hand / human figure in frame (rejected in Act 1)
- Pro-camera as secondary element (rejected in hybrid check)

## 6. Validate

- **Approach:** **A/B test on web hero** — new visual vs. current multi-phone cluster, split 50/50 on socialdancetv.com
- **Primary metric:** **"For Festivals" CTA click-through rate +20%** vs. current hero over the test window
- **Timeline:** **1 week** sprint (gen → select → ship → early read)

---

## Execution Plan (1-week)

| Day | Action | Owner |
|-----|--------|-------|
| 1 (today, 2026-04-24) | Run gen prompts in MJ + Flux/Sora + luma. Produce 5–7 candidates. | Kirill |
| 2 | Screen candidates: festival scene legibility, left-side negative space, SDTV logo feasibility, orbit count ≤ 3. Shortlist 2. | Kirill |
| 3 | Refine winner: retouch SDTV logo on phone UI, confirm orbit icon set, export 16:9 master at hero resolution. | Kirill |
| 4 | Staging integration on socialdancetv.com, verify coexistence with headline + pill + 3 cards. | Viktor |
| 5 | Ship A/B live (50/50 vs current). Configure event tracking for `For Festivals` card CTR. | Viktor |
| 6–7 | Directional read on CTR (not stat-sig yet). Flag visual bugs if any. | Viktor |
| +7 (day 14) | Pull stat-sig data. Promote to 100% if ≥+20%, else iterate. | Kirill + Viktor |

---

## Next Steps

- [ ] Kirill: generate 5–7 candidates today using the prompts below
- [ ] Kirill: shortlist 2, refine 1, export 16:9 hero master by day 3
- [ ] Viktor: confirm A/B framework on socialdancetv.com (or stand one up) and event tracking for the For-Festivals card click
- [ ] Kirill: hand off exported master to Viktor by day 3 EOD
- [ ] Viktor: staging integration + ship A/B by day 5
- [ ] Kirill: pull CTR data at day 14, decide promote or iterate

---

## Ready-to-paste generation prompts

### Midjourney v6

```
3D cinematic product render of a floating modern smartphone, centered upright, phone screen shows a living salsa bachata festival scene with depth — stage with dancers mid-motion, vibrant red and magenta stage lights, crowd silhouettes, film-like depth-of-field inside the screen. Small red "SDTV" logo visible at top of phone UI. Three small 3D objects floating in a loose asymmetric orbit to the right of the phone only: glossy cinema clapboard with red SDTV mark, plush red heart icon, miniature film reel. Dark red to black soft gradient background, abundant negative space on the LEFT for headline typography, no text in image. Luma Labs aesthetic: volumetric lighting, glossy specular highlights, premium, bold red / white / black palette, cinematic, confident media brand. --ar 16:9 --style raw --v 6
```

### Flux / Sora / Ideogram

```
Cinematic 3D product render, 16:9 horizontal. A modern smartphone floats upright, vertically centered, slightly offset right of the frame center. The phone screen is a window into a living festival scene with real depth: dancers moving on a stage, red and magenta stage lights, cheering crowd silhouettes, shallow depth-of-field — as if the phone is a portal into the event. A small red "SDTV" wordmark sits in the phone's app UI (top bar). To the RIGHT of the phone only, 2–3 small glossy 3D objects float in a loose asymmetric orbit: a cinema clapboard branded with a red "SDTV" mark, a plush red heart like a social-media like indicator, and a miniature film reel. The LEFT half of the composition is deliberately empty negative space, ready for a bold red serif headline to sit there later. Background: a soft dark-red to black gradient, premium, clean. Style: Luma Labs 3D aesthetic, volumetric lighting, glossy specular highlights, cinematic color grading. Dominant palette: SDTV red, white, black.
```

---

## Notes for iteration

- If MJ struggles with "SDTV" text on the phone — mock it up in post. The AI doesn't need to render the wordmark perfectly; we'll composite it in.
- Festival scene inside phone must read as *salsa/bachata* specifically (warm palette, pair dancers, Latin-feel stage) — not generic "music festival." Re-prompt with "pair salsa dance", "bachata couple mid-twirl" if needed.
- Always enforce LEFT negative space — if first batch fills the whole frame, add `negative space left, phone on right third`.
