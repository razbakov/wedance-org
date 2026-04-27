# Brand Bureau — EOD Tech Assessment 2026-04-26

**Verdict: Production-ready for 50–200 visits/day. Two real risks: image weight + ES/EN duplication. Neither is a blocker for the first SDTV post.**

## 1. Architecture
**Strong:** clean separation `data/ + pages/ + composables/`. `useLocale()` is the right call — single SLUG_ROUTES table makes EN↔ES toggling deterministic. `apply.post.ts` is a tight Resend-fronted endpoint with HTML-escaped output, source attribution, and graceful fallback to console-log. Stack stayed boring (Nuxt 3.15, Vue 3.5, Tailwind only).

**Weak:** ES content lives in TWO places — `imageStudies.es.ts` (i18n overrides) AND duplicated full pages (`/es/work/[slug].vue` 537 LOC vs `/work/[slug].vue` 575 LOC, `apply.vue` 400 vs `aplica.vue` 418). That's ~1100 duplicated template lines that will drift. Override pattern is right; rendering layer should also be shared. Not urgent — drift starts hurting at IS-005+.

## 2. Maintainability
**Adding IS-003 in 5 min: YES** — copy ImageStudy block in `imageStudies.ts`, drop 4 JPGs in `public/image-studies/<slug>/`, optional ES override. Schema is well-documented inline. Sub-page pattern (`pages/work/[slug].vue`) handles arbitrary slugs.
**Sub-pages: easy.** `[slug].vue` is fully data-driven through `getImageStudy()`.

## 3. Performance
- **Bundle:** zero new dependencies — still just Nuxt+Vue+Tailwind. JS bundle effectively unchanged from yesterday.
- **`/public` total: 5.8 MB. `image-studies/`: 5.4 MB (7 raw JPGs averaging 770 KB).** Anastasia's `02.jpg` is 1.6 MB unoptimized. On a 4G connection that's ~3s before the hero paints. **This is the only real performance issue today.**
- **No `@nuxt/image`:** acceptable for 7 images, **critical at 30+**. Each new IS adds 3–5 MB to deploy. Will cap at IS-008 unless we add Cloudinary/`@nuxt/image` per the plan.
- View Transitions API for locale swap = native, free, fast.

## 4. Tech debt accumulated
1. **EN/ES page duplication** (~1100 LOC) — extract shared `<ImageStudyDetail :study :locale>` component. ~2h.
2. **Raw-JPG `/public` pipeline** — manual export burden + Git bloat per the original plan. Cap at ~10 studies before forced migration.
3. **18 `tmp-*.{png,mjs}` files in repo root** — Playwright debug detritus. Add to `.gitignore` and delete. 5 min.
4. **Dual SLUG_ROUTES + ROUTE_MAP** — small duplication risk; acceptable.
5. **No analytics/Plausible** — can't measure post→site conversion blind. ~30 min install.

## 5. 5 critical bugs — audit
1. `useLocale` slug-aware — fixed via `SLUG_ROUTES`. **Solid.** Add new slug routes here, not elsewhere.
2. Whitespace `<template v-if>` → `metaLine` computed. **Fixed.** SSR-safe. No regression risk.
3. `/es/aplica` stub → full form. **Fixed**, but it's a copy of `/apply` (see debt #1).
4. `pages/work.vue` → `pages/work/index.vue`. **Fixed** — Nuxt nested routing happy.
5. 8 photobank cases SHOW_CASES flag. **Fixed**, but flag-as-toggle is fragile — flip means rebuild + deploy. Move to `runtimeConfig` if it'll toggle live.

## 6. Production readiness 50–200/day
**YES.** Resend handles 3k/mo free, Vercel Hobby easily serves 200/day, no DB to overload. **What survives:** form submits, ES toggle, all routes.
**What might stumble:** hero image LCP on slow mobile (mitigation: compress IS-001/002 to <300 KB each before next post — 30 min job, no code).
**Manual deploy = single point of failure** — if Kirill's offline and a typo ships, no rollback automation. Acceptable for v1.

---
**Files:** `~/Projects/brandbureau/{data/imageStudies.ts, composables/useLocale.ts, server/api/apply.post.ts, assets/css/main.css, pages/work/[slug].vue, pages/es/work/[slug].vue, public/image-studies/*}`
