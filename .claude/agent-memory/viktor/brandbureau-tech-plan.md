# Brand Bureau — Tech Infrastructure Plan

**Date:** 2026-04-25
**Owner:** Viktor (CTO)
**Project:** brandbureau (`~/Projects/brandbureau`, prod `brandbureau.vercel.app`)
**Sprint window:** 2 weeks

---

## Existing baseline (factual)

- Nuxt 3.15, Vue 3.5, Tailwind only — **no Nuxt Image, no DB, no analytics, no state store.**
- Server routes: `server/api/apply.post.ts` (Resend wired, `RESEND_API_KEY`, `APPLY_TO_EMAIL`).
- Public assets: `Founder.jpg` only — no model photo library.
- Cases use Unsplash hotlinks (`data/cases.ts`).
- Funnel: `/apply` (6-step form) → Resend email or `/call` (Cal.com embed). No persistence beyond email.
- Vercel: manual `vercel deploy --prod --yes` (no GH webhook). One env, one prod.
- Solo dev. No CI other than Vercel build.

The studio brand is **premium**. Stack must stay tight and visibly fast — premium positioning collapses the moment the gallery jitters or stalls.

---

## 1. Photo gallery infrastructure

### Recommendation: **Cloudinary free tier + `<NuxtImg>`**

For 50–100 portraits at 3–5 MB original (≈250–500 MB raw), the relevant trade-offs:

| Option | Best for | Bad for | Verdict |
|---|---|---|---|
| `/public` static | Tiny image counts, full control | No transforms — must hand-export 4 sizes per image; bloats Git; redeploys on every photo change | NO — kills Vercel build time, breaks fast-deploy flow |
| Vercel Blob | Native to platform, zero-config | $0.15/GB/mo storage + $0.30/GB egress (no free tier for storage past 1 GB) — at 500 MB you're fine, but **no on-the-fly transforms**, so still need a Nuxt Image upstream | NO — half a solution |
| Cloudinary free | 25 GB storage, 25 GB egress/mo, AVIF/WebP/srcset/face-aware crop on URL params, 30s upload | Vendor lock for transform URLs (mitigatable — store original, regenerate URLs) | **YES** |
| AWS S3 + CloudFront | Cheapest at scale (>500 GB) | Heavy ops: bucket policies, signed URLs, CloudFront distro, separate Lambda@Edge for transforms | NO — premature for 100 photos |
| imgix / Bunny.net | Strong perf, cheaper than Cloudinary at scale | Same lock-in, no real edge over Cloudinary at this volume | Defer |

**Cloudinary free tier handles 100 portraits with 30× headroom on every dimension.** Realistic monthly egress at 1k visits × 12 images × 200 KB AVIF ≈ 2.4 GB/mo = 10% of free quota.

### Image component — use `@nuxt/image`

Already a Nuxt module, **not yet installed**. Add it:

```bash
npm i -D @nuxt/image
```

```ts
// nuxt.config.ts
modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
image: {
  cloudinary: { baseURL: 'https://res.cloudinary.com/brandbureau/image/upload/' },
  format: ['avif', 'webp', 'jpeg'],
  screens: { sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536 },
}
```

Replace `<img :src="cs.img">` in `pages/cases.vue` etc. with `<NuxtImg provider="cloudinary" :src="cs.cloudId" sizes="sm:100vw md:50vw lg:33vw" loading="lazy" />`. Free, gives lazy-loading + AVIF + srcset out of the box.

### Migration of `data/cases.ts`

Add field `cloudId: string` and `blurhash?: string`. Keep `img` (Unsplash URL) as fallback during transition. Cloudinary public IDs follow your folder convention: `cases/014-doctor-derm-madrid` etc.

---

## 2. `/artists` vertical landing

### Routing: separate page `/artists`

NOT `?vertical=artist`. Reasons:
1. SEO — separate URL ranks for "dance artist personal brand" etc.
2. Cleaner SDTV → site analytics (just match path).
3. Avoids state coupling — the apply form stays segment-agnostic.
4. Easy to clone for future verticals (`/founders`, `/doctors`, `/coaches`) without rewiring.

### Component reuse

Of the 18 components in `components/`, **reusable as-is** for `/artists`: `HeroSection` (props), `ServicesTiers` (filter to artist tiers), `FaqAccordion`, `TestimonialsSection`, `TrustLogos`, `TheStickyCta`, `TheFooter`, `TheNav`. **Need new:** `ArtistHero` (or a Hero variant prop), `ProfileCheckForm` (the new submit form below), `BeforeAfterStudy` (image-pair grid).

### New form: `ProfileCheckForm.vue` + `/api/profile-check.post.ts`

Fields: `igHandle`, `email` OR `whatsapp` (one required), 3 diagnostic Q (radio): describes-you, want-more-of, weakest-area. Plus hidden `utm_*` from query params, `vertical: 'artist'`, `submittedAt`.

Server route mirrors `apply.post.ts` (Resend send + persistence — see §5). Confirmation email auto-fires. **48h SLA — manual review by Kirill or wife inside Airtable.**

### Effort estimate

| Task | Hours |
|---|---|
| `/artists` page (hero + 5 sections, copy from Kirill's input) | 4 |
| `ProfileCheckForm.vue` component + UTM param capture | 2 |
| `/api/profile-check.post.ts` server route + Resend confirm template | 2 |
| Real-photo gallery integration (assuming photos already on Cloudinary) | 2 |
| QA, mobile, ES sister page (defer ES until v1 ships) | 2 |
| **Total v1** | **~12 hours** |

---

## 3. ManyChat ↔ site integration

### Webhook: YES, but minimal

Build `POST /api/manychat-webhook` that ManyChat External Request hits **at the end of Flow A** (after Q5). Body: `{ ig_handle, email, whatsapp, q1, q2, q3, source: 'manychat-flow-a', utm_source, fbclid }`. Same persistence path as the on-site Profile Check form — **single lead store.**

ManyChat → Airtable direct: ManyChat has a native Airtable action via Zapier/Make, but it costs (Zapier $20/mo for 100 tasks) and adds a moving part. **Cheaper:** webhook → our `/api/manychat-webhook` → Airtable API directly (free Airtable tier covers 1k records/base, plenty).

### Auth: **shared secret in webhook URL**

`/api/manychat-webhook?token=$MANYCHAT_WEBHOOK_TOKEN`. Server checks `process.env.MANYCHAT_WEBHOOK_TOKEN`. Simple, sufficient — no PII in transit other than what user already volunteered. Rotate quarterly.

### UTM attribution through DM

This is the tricky part. Flow:
1. SDTV post links to `instagram.com/<sdtv>/?utm_source=sdtv&utm_campaign=artist_check_v1` — **but Instagram strips UTM on internal nav.**
2. Workaround: each post variant uses a **different ManyChat keyword** (ARTIST-V1, ARTIST-V2, PROFILE-V1) — encode the campaign in the keyword itself.
3. ManyChat captures keyword → forwards in webhook payload → server stores as `source_keyword`.
4. For site→ManyChat (post-form retargeting), `?utm_*` works normally and the site form stores it directly.

This is the only reliable attribution path. Trying to thread cookies through IG DM is fragile.

---

## 4. Email automation — 4-email sequence

### Recommendation: **Resend + lightweight Vercel Cron**

Resend just shipped Audiences/Broadcasts but **segmentation/automation is paid ($20/mo Pro)** and the API is still maturing. For 4 emails over ~14 days with two segments (Profile Check submitted vs. Guide downloaded), DIY is faster and free.

**Architecture:**
- Lead lands in Airtable (see §5) with `email_sequence_step: 0`, `last_email_at: <ts>`, `unsubscribed: false`.
- Vercel Cron (already free on Hobby) hits `GET /api/cron/email-tick` every 6h.
- Endpoint: query Airtable for leads where `next_email_due_at <= now`, send via Resend, increment step, update timestamps.
- Templates as **Vue components rendered via `vue/compiler-sfc` to HTML** — actually, simpler: use **`@vue-email/components`** (or just plain HTML in TS template literals like apply.post.ts already does). MJML adds a build step we don't need yet.

**Skip for now:** Loops.so ($49/mo), Klaviyo (overkill, ecom-targeted), ConvertKit ($15/mo). They become worth it past ~500 active subscribers.

### Cron endpoint shape

```ts
// server/api/cron/email-tick.get.ts
// guarded by ?token=$CRON_TOKEN; Vercel Cron lets you set headers
const SCHEDULE = [
  { step: 0, delayHours: 0,   template: 'delivery'  },
  { step: 1, delayHours: 48,  template: 'mirror'    },
  { step: 2, delayHours: 120, template: 'education' },
  { step: 3, delayHours: 240, template: 'offer'     },
]
```

`vercel.json`:
```json
{ "crons": [{ "path": "/api/cron/email-tick?token=...", "schedule": "0 */6 * * *" }] }
```

### Templates

Start as TypeScript-rendered HTML strings (matching the existing `buildHtml` pattern in `apply.post.ts`). Move to React Email/Vue Email **only if** we hit > 4 templates and copy iteration is friction. Premature.

---

## 5. Lead store / mini-CRM

### Recommendation: **Airtable**

Sized for this volume, fastest setup, Kirill+wife can review without code, native API, zero maintenance.

| Option | Setup time | Manual review UX | Cost | Verdict |
|---|---|---|---|---|
| Airtable | 30 min | Excellent (filter views, color tags) | Free <1k records, $20/mo Plus | **YES** |
| Monday | Already paid | Fine | Already paid | Defer — Monday is SDTV's surface, don't conflate Brand Bureau leads into it. Cleaner separation. |
| Google Sheet | 5 min | Bad (no rich types, no API rate ceiling protection) | Free | Avoid — too fragile for sequence cron |
| Vercel Postgres | 1 hour | None — would need admin UI | Free 256 MB | Defer — no admin UI = founder dependency |

### Schema (Airtable base `BrandBureau Leads`, table `Profile Checks`)

| Field | Type | Notes |
|---|---|---|
| `id` | Autonumber | PK |
| `created_at` | Created time | |
| `ig_handle` | Single line | |
| `email` | Email | One of email/whatsapp required |
| `whatsapp` | Phone | |
| `vertical` | Select | artist / founder / doctor / coach |
| `source` | Select | manychat-flow-a, site-/artists, site-/apply, sdtv-direct |
| `source_keyword` | Single line | ARTIST-V1 etc. |
| `utm_source/medium/campaign` | Single line × 3 | |
| `q1_describes` | Select | |
| `q2_wants_more` | Select | |
| `q3_weakest` | Select | |
| `intent` | Select | low / medium / high — set after manual review |
| `profile_check_status` | Select | new / reviewed / sent / no-response |
| `recommended_path` | Select | starter / signature / nurture / decline |
| `last_touch` | Date | |
| `email_sequence_step` | Number | for cron |
| `next_email_due_at` | Date | for cron |
| `unsubscribed` | Checkbox | |
| `notes` | Long text | |

### Server route

`/api/profile-check.post.ts` and `/api/manychat-webhook.post.ts` both write here. Use `@airtable/airtable` SDK or just `$fetch('https://api.airtable.com/v0/...', { headers: { Authorization: \`Bearer ${AIRTABLE_API_KEY}\` } })`. The Resend pattern in `apply.post.ts` is the template.

Env vars: `AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID`, `AIRTABLE_TABLE_ID`.

---

## 6. Tracking & analytics

### Recommendation: **Plausible + UTM discipline; defer FB Pixel**

What to track (events, not vanity):
1. SDTV→site landing — UTM in URL, captured by Plausible automatically.
2. ManyChat keyword → comment (tracked inside ManyChat — already free).
3. /artists CTA click → Plausible custom event `artist_cta_click`.
4. Form submit → Plausible custom event `profile_check_submit` + Airtable row.
5. Submit → starter purchase (deferred — no checkout yet, manual via Cal call).

### Tools

| Tool | Free tier | Verdict |
|---|---|---|
| Plausible | $9/mo for 10k pageviews — no free | Buy. Premium positioning, no cookie banner needed (GDPR-compliant), 1-line install, custom events via JS. |
| PostHog | 1M events/mo free | Heavier. Defer until we want session replay/funnels. |
| GA4 | Free | Adds tracking complexity, requires cookie banner, dilutes brand premium. Avoid. |
| Vercel Analytics | $0 on Hobby for basic | Pageviews only, no custom events. Fine as a free baseline alongside Plausible. |
| FB Pixel | Free | **Defer.** Only matters for paid Meta retargeting. Per Kirill's plan ("after organic seed"), this is week 3+. Adding it now adds GDPR consent UI overhead with zero short-term return. |

**Install path:** Plausible script in `nuxt.config.ts` head, custom events via composable `usePlausible()`. ~30 min.

---

## 7. Build prioritization (2-week sprint)

### MUST-HAVE (week 1) — 16 hours

1. **`/artists` landing page** with real Kirill photos via Cloudinary. ~6h.
2. **Cloudinary account** + upload script (50 portraits, named by `cases.ts.n`). ~2h.
3. **Install `@nuxt/image`** + migrate `cases.vue` and `/artists` to `<NuxtImg>`. ~2h.
4. **Profile Check form** (`ProfileCheckForm.vue` + `/api/profile-check.post.ts`) writing to Airtable + Resend confirm email. ~4h.
5. **Airtable base** schema setup (manual). ~30 min.
6. **Plausible** install + custom event for form submit. ~30 min.
7. **`MANYCHAT_WEBHOOK_TOKEN` + `/api/manychat-webhook.post.ts`** stub (just persists, no email yet). ~1h.

**Outcome of week 1:** First Profile Check can be submitted (via DM or site), lands in Airtable, manually reviewed by Kirill, response sent manually from Resend or Gmail. **No automation past capture.** This is the proof-before-complexity gate.

### NICE-TO-HAVE (week 2) — 8 hours, conditional

Only build if week-1 produced ≥10 captures (proof the funnel works):
1. **Email sequence cron** (`/api/cron/email-tick`) + 4 templates. ~5h.
2. **ManyChat → /artists deep-link** with `recommended_path` precomputed. ~1h.
3. **Before/After image study component** for `/artists`. ~2h.

### DEFER (weeks 3+, only after validation)
- Stripe checkout for Artist Image Starter (currently manual via Cal call — fine).
- ES sister page `/es/artistas`.
- FB Pixel + Meta retargeting wiring.
- PDF Profile Guide generation (Flow B). Use Notion-published PDF link manually until we know which keyword performs.
- Resend Audiences if list grows past ~500.
- Vercel Postgres lead store (Airtable will hold up to ~5k).
- PostHog for session replay.

---

## Risks & failure points

| Risk | Mitigation |
|---|---|
| Cloudinary lock-in | Upload originals to local `~/Projects/brandbureau-photos/` (gitignored) AND Cloudinary. Re-upload elsewhere is 1 night of work. |
| Airtable rate limit (5 req/s) | Each form submit is 1 req. Cron fetches in single batched request. Well under limit. |
| ManyChat webhook fails silently | Server logs every webhook hit (success + fail) — visible in Vercel Logs. Alert on 5+ consecutive 5xx via Resend on the server route's `catch` block. |
| Resend deliverability degrades | Domain `brandbureau.studio` already verified per `CLAUDE.md`. SPF/DKIM presumed live (verify). Add monthly DMARC report check to Maya's monthly cycle. |
| Vercel Cron skipped on Hobby plan | Hobby gets one daily cron only. **Confirm tier — may need to upgrade to Pro ($20/mo)** OR run cron from external (cron-job.org free) hitting the same endpoint. Pro is cleaner if BB is monetized. |
| Solo-dev bus factor | All env vars in 1Password. Airtable base ownership shared with wife. Cloudinary + Resend creds in same vault. |

**Cron tier check is a gate** — verify before committing to the cron architecture. If Hobby is locked at 1/day, switch to cron-job.org.

---

## Open decisions (for Kirill)

1. **Cloudinary account name/email** — recommend new `brandbureau@` Gmail or attach to existing.
2. **Airtable: new account or existing?** — recommend separate workspace `Brand Bureau`, not mixed with Kirill's personal/SDTV.
3. **Plausible: monthly ($9) or annual ($90)?** — recommend monthly until 4-week proof.
4. **Brand Bureau standalone email infra** — `hello@brandbureau.studio` already wired. Add `noreply@brandbureau.studio` for sequence sends? Keeps `hello@` clean for replies.

---

## Build manifest — concrete files to add

```
~/Projects/brandbureau/
├── pages/
│   └── artists.vue                       NEW
├── components/
│   ├── ProfileCheckForm.vue              NEW
│   └── BeforeAfterStudy.vue              NEW (week 2)
├── server/api/
│   ├── profile-check.post.ts             NEW
│   ├── manychat-webhook.post.ts          NEW
│   └── cron/email-tick.get.ts            NEW (week 2)
├── server/utils/
│   ├── airtable.ts                       NEW (shared client)
│   ├── resend.ts                         NEW (shared client, refactor from apply.post.ts)
│   └── email-templates.ts                NEW (week 2)
├── data/
│   └── cases.ts                          UPDATE — add cloudId, vertical filter
├── composables/
│   └── usePlausible.ts                   NEW
├── nuxt.config.ts                        UPDATE — add @nuxt/image, image config
├── vercel.json                           NEW (week 2) — cron config
└── .env                                  UPDATE — Cloudinary, Airtable, Plausible, ManyChat token
```

New env vars (mirror in Vercel):
- `CLOUDINARY_CLOUD_NAME` (public — fine in `runtimeConfig.public`)
- `AIRTABLE_API_KEY`
- `AIRTABLE_BASE_ID`
- `AIRTABLE_TABLE_PROFILE_CHECKS`
- `MANYCHAT_WEBHOOK_TOKEN`
- `PLAUSIBLE_DOMAIN` (public)
- `CRON_TOKEN` (week 2)

---

## Maintenance assessment

| Component | Maintenance level | Failure recovery |
|---|---|---|
| Cloudinary | Low — set & forget | Re-upload from local backup |
| Airtable lead store | Low — daily 1-min review | Manual re-add from Resend log |
| Resend transactional | Low — domain verified | Logs in Resend dashboard |
| Vercel Cron sequence | Medium — needs sanity check weekly | Manual send if cron stalls |
| Plausible | Low | Migrate to PostHog if growth needs |
| ManyChat webhook | Low — dumb pass-through | Logs in Vercel + ManyChat side |

**Total monthly cost at v1:** Cloudinary $0 + Airtable $0 + Plausible $9 + Vercel $0 (verify cron tier) + Resend $0 (under 3k/mo). **~$9/mo.**

If we exceed Hobby cron: **+$20/mo Vercel Pro = $29/mo.** Acceptable.

---
