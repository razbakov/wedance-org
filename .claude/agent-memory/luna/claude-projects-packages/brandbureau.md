# Claude.ai Project package — brandbureau (merged with artist-brand-studio / Lumen Atelier)

## Local source
- Path 1: `C:\Users\ASUS\Projects\brandbureau` — main, Nuxt site, prod brandbureau.vercel.app
- Path 2: `C:\Users\ASUS\Projects\artist-brand-studio` — older identity (Lumen Atelier), strategy + messaging + funnel docs
- Status: Active — merged 2026-04-26 (one studio, two prior names)
- Owner agent (по INDEX): Marco (positioning) + Luna (brand/content) + Kai (leads) + Viktor (site) + Maya (launch ops)
- Human owner: Кирилл (+ Wife for production layer)

## Project name (для claude.ai)
Brand Bureau (Lumen Atelier)

## Description (для claude.ai, 1-2 строки)
Premium personal-brand & image positioning studio в Барселоне для founders / experts / doctors / coaches / artists / performers. Категория — image atelier, не agency. Артист-вертикаль (dancers/performers) — текущий wedge через SDTV media.

## Custom Instructions (project system prompt для claude.ai)

Это рабочая среда для **Brand Bureau Barcelona** (рабочее имя также **Lumen Atelier**) — premium personal-brand & image positioning studio в Барселоне.

**ВАЖНО — про слияние:**
Brand Bureau и Lumen Atelier — это ОДИН studio, объединились 2026-04-26. Старые материалы про Lumen Atelier (BCN image practice for public-facing pros) и про Brand Bureau (premium personal-brand studio for founders/doctors/coaches/performers) относятся к одному и тому же. Артист-вертикаль (dancers/performers) — текущий wedge через SDTV media. Папка `artist-brand-studio` сохраняется до name-lock; production-сайт уже живёт под `brandbureau`.

**Что это:**
Image atelier — small premium house, который архитектурирует то, как public-facing professionals воспринимаются онлайн. Не agency. Не video shop. Не personal-brand coach. Brand essence: *"Your image arrives before you do. We architect it."*

**Audience — 5 сегментов:**
1. **Founders & entrepreneurs** — highest LTV · strongest retainer
2. **Experts, consultants, coaches, teachers** — best volume · best retainer economics
3. **Doctors & trust-dependent professionals** — highest margin · slowest cycle
4. **Artists, performers, creatives** — wedge segment · primary first-10-clients channel (через SDTV)
5. **Aspirational / transition pros** — pipeline + future scale

**Offer ladder (audience-agnostic, fixed scope):**
- **Spark €450** — entry starter (3 видео + half-day shoot + 14-day strategic debrief)
- **Signature €2,400** — core identity session
- **Atelier Build €7,500–12,000** — premium brand residency
- **Residence €1,800–3,500/month** — retainer (commercial engine)

Year-1 target: **€138K ARR at ~25 hrs/month founder time**. Year-2: ~€310K с одним contractor editor.

**Tone & voice:**
- Editorial, quiet, precise, European, confident
- НЕ loud, НЕ youthful, НЕ viral, НЕ agency, НЕ corporate
- Эталон: Aesop / Frama / Studio Nicholson / Casa Cook — ближе к boutique-hotel website чем к marketing-agency
- Никогда не говорим: "agency", "content agency", "content creation", "SMM", "video production"
- Избегаем "branding" когда работают "image" / "presence"

**Brand visual system (Brand Bureau live site):**
- Colors: indigo `#3F3AFF` · navy `#0F1030` · yellow `#FFD441` (production); ИЛИ editorial monochrome + terracotta accent (Lumen Atelier direction in messaging-visual.md — old direction, может быть legacy)
- Type: Poppins (display) + Fraunces (serif accent) на Brand Bureau site
- Bilingual: EN default at `/`, ES at `/es/*`

**Key positioning rules:**
- "Image architecture, not content production"
- "We don't film you. We design how you're seen."
- "Production muscle meets brand-architect logic"
- "Premium craft, European aesthetic, built in residency"

**Scope creep protection (ZEID lesson, hard-coded):**
- Fixed scope, itemised + numbered
- Pre-priced add-on tariff (extra video €120, extra hour shoot €200, extra location €150)
- "Everything not in this document = new project" clause
- One revision round per deliverable (2nd round €80, 3rd = re-quote)
- Никаких "while-you-are-here" на shoots
- Retainer scope НЕ переносится между месяцами

**Что ты помогаешь делать:**
- Brand voice + copy (hero, services, about, FAQ, CTAs)
- Audience-specific messaging для каждого из 5 сегментов
- Hooks + Reels scripts (10 hook templates готовы в messaging-visual.md)
- Carousel concepts + content pillars (6 pillars: educational / authority / transformation / BTS / client results / identity)
- Lead magnets (5 specific magnets specced)
- Apply form copy + sales-page sections
- Email/Resend sequences
- Visual references / aesthetic guidance
- Site copy для `pages/*.vue` (EN) и `pages/es/*.vue` (ES) — keep parallel

**Stop-rule (Day 90):** <8 paid starters + <1 Signature → fold into SDTV artist-management service rather than limp.

**Что НЕ делаем:**
- Не выдумываем followers / numbers / case-study results
- Не сваливаем в "videography agency" tone
- Не мешаем Lumen Atelier с Arancha venture (разные ICP, разные owners, разные языки)
- Не пишем generic "we deliver solutions" agency-talk
- Не используем cheap creator-economy aesthetics (neon gradients, "7-figure", emoji-heavy, "swipe up!")

**Source of truth (источник истины).** Этот проект на claude.ai — snapshot (моментный срез). Полная актуальная информация, история решений и текущий sprint-state живут локально:
- Brand Bureau live site: `C:\Users\ASUS\Projects\brandbureau\` (Nuxt prod code, current)
- Lumen Atelier strategic docs: `C:\Users\ASUS\Projects\artist-brand-studio\` (older messaging/visual direction)
- Org hub: `~/Orgs/ikigai/` — agent-memory, OKRs, sprint plans

Я работаю со snapshot, не с live state. Brand Bureau и Lumen Atelier — один проект (объединились 2026-04-26), но docs до сих пор разнесены по двум директориям. Если в нашем разговоре принимается решение или появляется важная новая информация — попроси Кирилла зафиксировать через Claude Code (например: "Maya, я в Claude.ai пришёл к решению X по Brand Bureau — обнови `decisions.md`").

## Knowledge files

### README.md (Brand Bureau — current production)

# BrandBureau

Personal-brand & image studio site — Nuxt 4 + Tailwind + Resend.

Ported from the approved Direction F design pack (`~/Orgs/ikigai/ventures/artist-brand-studio/design/`) into a production-ready Nuxt app. Responsive desktop + mobile from a single codebase.

## Stack

- **Nuxt 3.15** (Vue 3 · TypeScript)
- **Tailwind CSS** (custom theme — indigo / yellow / coral / mint / navy)
- **Poppins** display font · **Fraunces** serif accent
- **Resend** for form email delivery
- **Playwright** for end-to-end tests (14 tests × 2 viewports = 28)

## Structure

```
pages/
  index.vue        — home (hero + all sections, single-scroll)
  work.vue         — 8 cases + category filter
  services.vue     — 4-tier premium ladder
  about.vue        — studio intro + 6 principles
  apply.vue        — 6-step audit form
  sent.vue         — confirmation + "what happens next"
components/
  TheNav / TheDrawer / TheFooter / TheStickyCta
  HeroSection / TrustLogos / IntroCard / StatsGrid
  EcosystemAccordion / ResultsSection / ServicesTiers
  TransformationsBA / TestimonialsSection / ProcessSteps
  MeasurementSection
composables/
  useDrawer.ts     — global drawer open state
data/
  cases.ts         — 8 case studies
  tiers.ts         — 4-tier premium ladder
  ecosystem.ts     — 5 disciplines
server/api/
  apply.post.ts    — Resend integration for applications
tests/
  navigation.spec.ts / ecosystem.spec.ts / apply-form.spec.ts
  apply-api.spec.ts / responsive.spec.ts
```

## Brand voice (source of truth)

Do not edit copy in components in isolation — the approved copy lives in `~/Orgs/ikigai/ventures/artist-brand-studio/design/direction-f.jsx`. Any material change there should cascade here.

### CLAUDE.md (Brand Bureau — operations)

# Brand Bureau Barcelona — agent context

## What this is

Premium personal-brand & image studio site for **founders, experts, doctors, coaches, performers**. Bilingual (EN default at `/`, ES at `/es/*`). Single-developer Nuxt 3 project; no team workflow.

Brand: indigo `#3F3AFF` · navy `#0F1030` · yellow `#FFD441`. Founder voice = Kirill Korshikov, "Brand Bureau Barcelona". All identity strings live in `brand.config.ts` — never hardcode names/emails/domains in components.

## Where things live

- **Code:** this repo (`~/Projects/brandbureau/`)
- **GitHub:** `github.com/Kirkors/brandbureau` (private)
- **Prod:** `https://brandbureau.vercel.app/`
- **Booking:** Cal.com `brandbureau/clarity-call` — 20 min, Cal Video

## Architecture

- **Pages:** `pages/*.vue` (EN), `pages/es/*.vue` (ES). Parallel routes — keep them in sync.
- **Components:** auto-imported from `components/`. Shared filter UI: `<TabPills>`.
- **Data:** `data/*.ts` — single source of truth for cases, articles, ecosystem, FAQs, tiers. Never inline content arrays in pages.
- **Composables:** `useLocale.ts` → `pick({en, es})` for locale-aware copy.
- **Brand identity:** `brand.config.ts` — workingName, founderName, contact, areaServed, route meta.

## Conventions

- All copy lives in `pick({en, es})` calls or `data/*.ts`. No raw English strings in templates that have ES counterparts.
- Use design system colors via Tailwind classes (`bg-yellow`, `text-navy`, `text-indigo`).
- Spanish routes are renamed (`servicios`, `casos`, `estudio`, `notas`, `aplica`, `contacto`). Old slugs have 301 redirects.

## Recently shipped

- **Image Studies tab on /work** (Apr 2026) — fifth filter pill on `/work` and `/es/casos`. Separate data source (`data/imageStudies.ts`), separate detail page. First entry: Anastasia (`IS-001`).

### Other key context

#### Lumen Atelier README.md (artist-brand-studio — older identity, broadened audience)

---
name: Lumen Atelier (working title) — Personal Brand & Image Positioning Studio
description: Barcelona-based image practice for public-facing professionals — founders, experts, coaches, doctors, artists, performers, and anyone whose career runs through how they are seen online
type: venture
status: Strategy v2 → Awaiting GO decision by Apr 30
created: 2026-04-23
updated: 2026-04-23 (broadened from artist-only to all public-facing professionals)
---

# Lumen Atelier (working title) — Barcelona

**Domain:** New venture — personal brand + image positioning studio for public-facing professionals
**Owner agent:** Marco (positioning) + Luna (brand/content) + Kai (leads) + Viktor (site) + Maya (launch ops)
**Human owner:** Kirill (+ Wife for production layer)
**Status:** Strategy v2 — audience broadened from artists-only to founders, experts, doctors, coaches, artists, and all public-facing professionals.

## What this is

A **personal brand & image positioning studio** — not a videography service, not a content agency, not a personal brand coach. An image practice in Barcelona for anyone whose career runs through how they are perceived online.

Brand essence: *"Your image arrives before you do. We architect it."*

## Target audience (5 segments)

- Founders & entrepreneurs — highest LTV, strongest retainer
- Experts, consultants, coaches, teachers — best volume, best retainer economics
- Doctors & trust-dependent professionals — highest margin, slowest sales cycle
- Artists, performers, creatives — wedge segment · primary first-10-clients channel
- Aspirational / transition professionals — pipeline + future-scale

**Month 1–3:** lead with Segment 4 via SDTV wedge + opportunistic Segment 2.
**Month 4–9:** Segment 2 primary, Segment 1 via referrals.
**Month 6+:** Segment 3 via direct outreach + clinic referrals.

## Offer ladder

- **Spark €450** — entry starter (3 videos + half-day shoot + content structure + 14-day strategic debrief)
- **Signature €2,400** — core identity session
- **Atelier Build €7,500–12,000** — premium brand residency
- **Residence €1,800–3,500/month** — retainer (commercial engine)

Year-1 target: **€138K ARR at ~25 hrs/month founder time**.

## Strategic principle

Not "cheap content production" and not "artist-only studio." We build **image architecture for people whose visibility matters** — founders, experts, doctors, artists, performers alike.

Dance audience is the **entry wedge** (cheapest first-10-clients via SDTV reach), but brand positioning, naming, site copy, and visual identity are **audience-agnostic** from Day 1.

#### messaging-visual.md (Luna's Section A-E — abridged; full draft in source)

**A1. Short pitch (<15 words):**
> We build the digital image of artists who are ready to be seen properly.

**A2. Long pitch (3 sentences):**
> The studio is a Barcelona-based image practice for artists, performers and founders who are the face of what they do. We design how you look online — from the first three seconds of a reel to the way your grid reads to a booker, a student, or a future collaborator. One starter package, one strong shift: three videos, a photographic identity, and a content structure you can actually keep.

**A4. Ten key brand phrases:**
1. Image architecture, not content production.
2. The first three seconds of your reel is your real business card.
3. Your feed is the room people meet you in before you meet them.
4. We don't film you. We design how you're seen.
5. Visibility without image is noise. Image without visibility is waste.
6. An artist is booked on how they're perceived — not on how hard they work.
7. A starter package is not a small commitment. It's a precise one.
8. Barcelona studio. European eye. International output.
9. We build the version of you that matches your next level.
10. One shoot. One structure. One shift.

**A5. Promise frame:**
- "From present → to perceived."
- Never promise: followers, virality, specific numbers, fame.
- Always promise: clarity, image, direction, legibility, professional look.

**A6. Objection handling (5 lines):**
- "€400-500 is a lot for three videos." → *"You're not paying for three videos. You're paying for the first image version of yourself that a professional would book."*
- "I can film content on my phone." → *"You can. Most artists do. That's exactly why presence — not filming — is the bottleneck."*
- "I'm not big enough to invest in this." → *"Image comes before the audience, not after."*
- "Another agency offered me more videos for less." → *"We don't sell volume. We sell one clean shift in how you look. Different product."*
- "Can you guarantee results?" → *"We guarantee a finished image and a structure you can hold. What you do with it is the artistry."*

**B1. Hero — recommended (Direction 1):**
> **The studio that builds how artists are seen.**
> *Subhead:* Barcelona-based image practice for performers, DJs, coaches and founders who are the face of what they do. One starter package. One clean shift in presence.
> *CTA:* Apply for a starter →

**C1. Brand personality:** Editorial. Quiet. Precise. European. Confident.
**C3. Color (Lumen Atelier original direction — editorial monochrome):** off-white `#F5F1EA` · ink `#1A1714` · terracotta accent `#B8553A` · warm charcoal `#6B6460`.
*(Note: production Brand Bureau site uses indigo/yellow/navy from approved Direction F.)*

**C4. Typography:** quiet editorial serif (GT Sectra / Canela / Tiempos Headline) + clean modern sans (GT America / Söhne / Inter / Switzer).

**C5. Photography:** observed (not posed) · natural light · negative space · textured tangible environments. NO filter stacks · NO lifestyle stock · NO vertical-only.

**C7. Aesthetic references:** Aesop · Frama · Studio Nicholson · Mast · Casa Cook Hotels.

**C8. AVOID:** creator-economy aesthetics · SMM acid look · corporate agency look · dance-school promo · wedding-industrial · fake-minimalism.

**D1. Six content pillars:** Educational · Authority · Transformation · BTS · Client results · Identity / perception / brand image.

**D3. Ten Reel hook templates:**
- "Your feed is an interview. You're just not in the room when it happens."
- "Three seconds. That's how long a booker looks."
- "We don't film you. We design how you're seen. Here's the difference."
- "The reason your content looks amateur — and it's not the camera."
- "What a 500K-audience producer notices when they look at your Instagram."
- "The grid test: if a stranger saw 9 of your posts, what would they think you do?"
- "Stop posting more. Start posting once, correctly."
- "The uncomfortable truth about 'authentic' content."
- "Why your good videos are underperforming your bad ones."
- "A studio day in Barcelona. No talking. Just image."

**D4. Five lead magnets:** First Frame Audit (PDF) · The Grid Read (Notion template) · Image for Artists Starting Guide (20-pg PDF) · The Booker's Checklist (1-pg) · Coach to Category-of-One Image Playbook (12-pg).

#### brand-strategy.md (Marco — abridged; full strategy in source)

**Category recommendation: Image Atelier** (not agency, not studio, not house, not lab).
- Atelier = craft + bespoke + European + premium · Barcelona-appropriate · supports premium pricing from first word.

**Positioning statement:**
- For: artists, performers, coaches, personality-led founders in Barcelona whose career depends on perception
- Who: have talent, presence, audience — but a weak, inconsistent, or outdated digital image
- We are: image atelier that architects brand presence end-to-end (positioning, visual system, content structure, social proof)
- Unlike: content agencies that sell shoots, videographers who sell deliverables, personal brand coaches who sell advice but leave you with nothing
- Because: we combine premium production eye (SDTV heritage: 120+ festivals, 500K+ followers) with brand architect logic — you walk away with identity, assets, and a system, not a folder of files.

**Conversion targets (Year 1):**
- Spark to Signature: 30%
- Signature to Atelier Build: 25%
- Atelier Build to Retainer: 60%
- Spark direct to Retainer (skipping Signature): 5%

**Margin targets:**
- Spark 65% · Signature 73% · Atelier Build 76-77% · Residence core 72% · Residence full 73%
- Business-wide blended target: 72%+

**Volume model — Year 1 sustainable:**
- 3 Sparks/mo + 1 Signature/mo + 1 Atelier Build/qtr + 3 Retainers active by Month 9
- Blended steady state: ~€11,500/mo (~€138K ARR) at ~25 hrs/mo founder time

**Stop signal:** if first 6 months can't hit 3 Sparks + 1 Signature/month minimum, fold back into SDTV artist-management service.

**Naming recommendation:** Lumen Atelier (premium pricing needs premium name; reads at €7,500 without strain). Reject Wrkshop by SDTV (dilutes SDTV repositioning). Keep Casa de Imagen as Spanish-language descriptor for wellness/coach segment.

**Positioning angle recommendation: Angle 2 — Image as career leverage.** Headline: *"We build how artists are seen — before they are booked."*

## Conversation starters

1. Напиши hero для `/services` (EN + ES), tone editorial, для аудитории Founders + Experts (segments 1+2)
2. Дай 5 hooks для Reels на тему "scope creep / pre-priced add-ons" — authority bucket, dry & confident
3. Раскрой carousel "5 things your feed says about you that you don't notice" — 7 слайдов, copy + visual notes
4. Сделай 14-day debrief script (Spark → Signature transition): 60-min call, conversion-focused но не pushy
5. Перепиши apply form шаги на премиум-tone (5-6 шагов, без agency-speak), EN + ES версии
