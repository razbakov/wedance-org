# Claude.ai Project package — ikeegai-site

## Local source
- Path: C:\Users\ASUS\Projects\ikeegai-site
- Status: Active — Nuxt code (moved from ~/Orgs/ikeegai on 2026-04-24; AI Orchestrator for service businesses)
- Owner agent (по INDEX): Viktor + Kirill + Alex
- GitHub repo: Kirkors/ikeegai (default branch `main`)

## Project name (для claude.ai)
iKEEGAi Site

## Description (для claude.ai, 1-2 строки)
Nuxt 4 маркетинговый сайт для iKEEGAi — AI Orchestrator для service businesses (dental flagship + restaurants + wedding venues + community banks waitlist). Co-founders Кирилл + Alex; первое cold-outreach зависит от deploy на Vercel + audit form через Resend/Airtable.

## Custom Instructions (project system prompt)
Ты помогаешь по проекту **iKEEGAi Site** — Nuxt 4 маркетинговый сайт для iKEEGAi, AI Orchestrator для service businesses. Внешне: один продукт, один интерфейс, один бизнес-результат. Внутри: 6 специализированных агентов + orchestrator + vertical presets + credit allocation.

**Стек:** Nuxt 3.15+ (config Nuxt 4 в проекте) + Vue 3.5 + Tailwind v3 (dark theme, teal + gold accents), Inter (display/body), JetBrains Mono (code/stats), Node 24, dev `npm run dev` на :3000. Deploy target: Vercel (recommended, pending). Domain: `ikeegai.com` / `ikeegai.ai` / `i-keeg.ai` — pending.

**Команда:** Co-founders Кирилл + Alex. Это отдельный venture (не SDTV, не WeDance). 

**Vertical priorities:** Dental (#1 flagship · live) → Restaurants (#2 · live) → Wedding Venues (#3 · live) → Community Banks (#4 · pilot waitlist, не построено).

**Critical product rules:**
1. **Sell pain, not architecture.** Никогда не используй в публичном тексте: "orchestration logic", "agent memory", "dynamic routing", "internal modules", "AI-native workflows", "operational layer", "business layer", "under the hood". Используй: faster response, fewer missed leads, automatic follow-up, less manual admin, more booked revenue, less depends on the owner.
2. **One orchestrator. Agents hidden.** Клиент видит один продукт. Никогда не парадь 6 агентов снаружи.
3. **One platform, three starting points:** Diagnostic Scan · Focused Sprint · Full Orchestrator.
4. **Credits — не headline.** Только на /pricing.
5. **No fake trust signals.** Никаких "G2 4.9", "TechCrunch (soon)", "SOC 2 in progress". Только реальные proof.
6. **Founder accountability.** Каждый pilot ревьюят Кирилл или Alex лично — это differentiator.

**Git workflow:** main = deployable. Один change = одна ветка (`feat/banks-page`, `fix/audit-endpoint`). PR before merge. Conventional commits (feat/fix/docs/refactor).

**Что НЕ делай:** не добавляй вертикали сверх 4 locked presets, не делай feature creep сверх Scan/Sprint/Orchestrator trio, не пиши testimonials с выдуманными именами клиентов, не self-serve signup до Resend + Airtable wiring.

**Tone:** Telegram brief, ru для общения с командой; en для production-копии сайта.

**Source of truth (источник истины).** Этот проект на claude.ai — snapshot (моментный срез). Полная актуальная информация, история решений и текущий sprint-state живут локально:
- Project path: `C:\Users\ASUS\Projects\ikeegai-site\` (Windows) / `~/Projects/ikeegai-site/` (Mac)
- Org hub: `~/Orgs/ikigai/` — agent-memory, OKRs, sprint plans, общая координация

Я работаю со snapshot, не с live state. Если в нашем разговоре принимается решение или появляется важная новая информация — попроси Кирилла зафиксировать через Claude Code (например: "Maya, я в Claude.ai пришёл к решению X по iKEEGAi Site — обнови `decisions.md` / `active-deals.md` / `context.md`").

## Knowledge files

### README.md (full paste)
```markdown
# iKEEGAi

**AI Orchestrator for service businesses.**

Stop losing revenue to slow follow-up and manual chaos. iKEEGAi helps service businesses answer faster, follow up automatically, and move every lead to the right next step — without adding more tools or more admin.

---

## What lives here

| Folder | Purpose |
|---|---|
| `app.vue`, `pages/`, `components/` | Nuxt 4 site (Vue 3, Tailwind v3, dark premium, teal + gold accent) |
| `public/` | Favicon, static assets |
| `assets/css/main.css` | Global styles, design tokens, animations |
| `plugins/` | Nuxt client plugins |
| `ops/` | Project brief, OKRs, roadmap, decisions |
| `strategy/` | Website teardown, conversion analysis, go-to-market docs |
| `.claude/` | Claude Code launch config + project-specific instructions |

## Running the site

```bash
npm install
npm run dev    # http://localhost:3000
```

Launch configuration lives in `.claude/launch.json` (also registered in `~/Orgs/ikigai/.claude/launch.json` as `ikeegai-dev`).

## Team

- **Co-founders:** Kirill + Alex
- **Project owner:** Kirill
- **Status:** Active new venture (as of 2026-04-22)

## Key links

- Founder OS (Notion): https://www.notion.so/socialdancetv/iKEEGAi-Founder-OS-340d026b82bd812190acda42647442c7
- Strategy doc: [strategy/website-teardown-2026.md](strategy/website-teardown-2026.md)
- Project brief: [ops/project-brief.md](ops/project-brief.md)
- OKRs: [ops/okrs-q2-2026.md](ops/okrs-q2-2026.md)

## Current focus

Ship 4 vertical presets on the site. Dental is flagship (live). Restaurants and Wedding Venues live. Community Banks on pilot waitlist.

Next move: deploy to Vercel + wire audit form to Resend + Airtable so the site can actually capture leads before the first cold outreach.

---

*Part of the [Ikigai operating system](https://github.com/kirill/ikigai) (personal OS / agent coordination layer).*
```

### CLAUDE.md (if exists, full paste)
```markdown
# iKEEGAi — Project Instructions

## Context

- **Project:** iKEEGAi — AI Orchestrator for service businesses
- **Co-founders:** Kirill + Alex
- **Path:** `~/Orgs/ikeegai/`
- **Related ops path:** `~/Orgs/ikigai/` (agent system, org-wide decisions)
- **Status:** Active new venture · 2026-04-22
- **Priority verticals:** Dental (#1 flagship) · Restaurants (#2) · Wedding Venues (#3) · Community Banks (#4, waitlist)

## Stack

- **Frontend:** Nuxt 4 + Vue 3 + Tailwind v3 (dark theme, teal + gold accents)
- **Typography:** Inter (display / body), JetBrains Mono (code / stats)
- **Runtime:** Node 24
- **Dev command:** `npm run dev` on `:3000`
- **Preview launch:** `ikeegai-dev` in `~/Orgs/ikigai/.claude/launch.json`

## Critical product rules

1. **Sell pain, not architecture.** Every word → client benefit. No "orchestration logic", "agent memory", "dynamic routing" in public copy. Use: faster response, automatic follow-up, fewer missed leads, less manual admin, more booked revenue.
2. **One orchestrator. Agents hidden.** Client sees one product. Never parade the 6 agents.
3. **One platform, three starting points:** Diagnostic Scan · Focused Sprint · Full Orchestrator. Vertical presets run inside.
4. **Credits are not the headline.** Mentioned only on `/pricing`.
5. **No fake trust signals.** No "G2 4.9" placeholder, no "TechCrunch Forbes (soon)", no "SOC 2 in progress". Only ship real proof.
6. **Founder accountability.** Every pilot reviewed by Kirill or Alex personally. This is a differentiator — say it clearly.

## Voice rules (from analysis 2026-04-22)

**Never use:** orchestration logic, agent memory, dynamic routing, internal modules, AI-native workflows, operational layer, business layer, under the hood.

**Always prefer:** faster response · fewer missed leads · automatic follow-up · less manual admin · more booked revenue · less depends on the owner · your team stops chasing things manually.

## Pages structure

| Route | Role | Status |
|---|---|---|
| `/` | Homepage · full conversion flow | Live |
| `/dental` | Priority #1 — flagship preset | Live |
| `/restaurants` | Priority #2 | Live |
| `/wedding-venues` | Priority #3 | Live |
| `/banks` | Priority #4 | Pilot waitlist · not yet built |
| `/how-it-works` | Technical depth for buyers who want under the hood | Live |
| `/pricing` | 3 tiers + full matrix | Live |
| `/manifesto` | Founder story · "AI to live by" | Not yet built |

## Component architecture

Co-locate vertical-specific components next to pages. Shared components (HeroHome, HeroTrust, LogoMarquee, MeetClients, etc.) live in `components/`. All below-fold sections use `Lazy*` prefix for code splitting.

**Animation components:** HeroStageAnimation (cinematic workflow), TypewriterTicker, LiveClock, CountUp, LogoMarquee, HeroBackdrop (aurora + constellation).

## Git workflow

- `main` = deployable
- One change = one branch (name descriptively: `feat/banks-page`, `fix/audit-endpoint`)
- PR before merge
- Commit messages: conventional (feat/fix/docs/refactor)

## What NOT to build without alignment

- No new verticals beyond the 4 locked presets
- No feature creep beyond the Scan / Sprint / Orchestrator trio
- No testimonials with fabricated client names — wait for real pilots
- No self-serve signup until Resend + Airtable endpoint is wired

## Contacts

- Kirill: `kirill@ikeegai.com`
- Alex: `alex@ikeegai.com`
- General: `hello@ikeegai.com`

## Open decisions

- Domain: `ikeegai.com` / `ikeegai.ai` / `i-keeg.ai` — pending
- Deploy target: Vercel (recommended) vs Cloudflare Pages
- Logo: currently SVG placeholder adapted from JPEG concept; awaiting final SVG from Kirill
- Email endpoint: Resend + Airtable wiring pending
```

### Other key context (max 3)

**Stack note (вместо полного package.json — только meta):**
Stack: Nuxt 3.15 (project configured как Nuxt 4), Vue 3.5, Vue Router 4.5, @nuxtjs/tailwindcss 6.13, @tailwindcss/typography, Tailwind 3.4, TypeScript 5.7. No backend deps yet — audit form endpoint (Resend + Airtable) is pending, sets критический blocker для cold outreach.

#### ops/project-brief.md (full paste)
```markdown
# iKEEGAi — Project Brief

**Authors:** Kirill + Alex
**Opened:** 2026-04-21
**Last updated:** 2026-04-22
**Status:** Active

---

## What we are

iKEEGAi is an **AI Orchestrator for service businesses.**

Externally: one product, one interface, one clear business outcome.
Internally: six specialized agents + orchestrator + vertical presets + credit allocation model.

**Product tagline (B2B buyer):** *AI Autopilot for Revenue, Conversion & Operations*
**Hero value prop (conversion):** *Stop losing revenue to slow follow-up and manual chaos*
**Brand essence (manifesto / merch):** *AI to live by*

## Who it's for

Service businesses with real revenue, slow follow-up, manual coordination, and growing execution strain.

**ICP by vertical:**
- **Dental clinics** (priority #1 · flagship) — 2-10 chairs, $30K-200K/mo, 38% missed-call rate
- **Restaurants** (priority #2) — independent, $20K-150K/mo, delivery-heavy
- **Wedding venues** (priority #3) — 50-200 inquiries/mo, $8.5K avg booking
- **Community banks** (priority #4 · waitlist) — $9/call avg, want KeyBank-style savings

## Why this will work

1. **Real pain measured in real dollars.** Dental $100K+/yr lost. Restaurant $15-25K/yr. Wedding venues lose 90% of inquiries. Banks $9 per call.
2. **Customers already looking.** 58% of dental clinics plan AI in 2026. 82% restaurants increasing AI budget. 83% FIs growing AI spend.
3. **Fragmented competition.** No single solution for any vertical. Wedding-AI in its infancy. Dental has point tools (Weave, etc.) but no orchestrator.
4. **We have the architecture.** 6 agents + orchestrator exist. New presets ship in 2-3 weeks (80% shared code, 20% niche adaptation).
5. **Service-first GTM removes the barrier.** We don't sell "AI platform." We sell "we'll recover your missed calls." Outcome, not technology.

## 12-month projection

- **Month 6 target:** $200-400K ARR · 14 clients across 4 verticals
- **Month 12 target:** $600K-1M ARR

Breakdown:
- Months 1-2: 5 dental clients (setup + MRR)
- Months 3-4: +5 restaurant clients
- Months 4-5: +3 wedding clients
- Months 5-6: +1 community bank (first)

## Current state (2026-04-22)

**Shipped:**
- Full Nuxt 4 site — 16-section homepage + 3 vertical pages (dental, restaurants, wedding-venues) + how-it-works + pricing
- Strategy deck (`strategy/website-teardown-2026.md`) with teardown of 5 references + funnel logic + 4-preset architecture
- Brand visuals — SVG logo + 8 character portraits + 3 scene illustrations
- Animation system — HeroStageAnimation with typewriter + live clock + cinematic backdrop

**Not yet shipped:**
- Real audit endpoint (Resend + Airtable) — forms work visually only
- /banks page (priority #4)
- /manifesto page
- Vercel deployment + domain purchase
- First real pilot client case study

## Immediate next move

**Deploy site to Vercel + wire audit form to real endpoint.**

Without a live URL, the site can't enter sales conversations. Without a real endpoint, leads submitted outside business hours get lost.

This is a 60-90 minute job with compound leverage: every cold outreach, LinkedIn post, DM from now on has a place to land.

## Open questions

See [`CLAUDE.md`](../CLAUDE.md) §Open Decisions. Top 3:
1. Final domain name
2. First real dental pilot (who, when)
3. Logo finalization (current is SVG adaptation of concept)

## Strategy document

Full teardown + funnel design + vertical preset spec: [`../strategy/website-teardown-2026.md`](../strategy/website-teardown-2026.md)
```

## Conversation starters (3-5)
1. Дай copy-pass для `/banks` page (#4 vertical, pilot waitlist) в нашем voice (sell pain, hidden agents, no fake trust signals).
2. Подготовь minimal Resend + Airtable wiring для audit form — pages/api endpoint + env vars + Airtable base setup, чтобы deploy в Vercel был ready.
3. Перепиши любую секцию homepage, где есть архитектурный leak (orchestration / agent memory / under the hood) — на pain language.
4. Сравни `/dental` и `/restaurants` страницы по конверсии: где `/restaurants` теряет doc-fit для рестораторов?
5. Какие 3 решения по Open Decisions (domain, deploy, logo) надо закрыть до первого cold outreach — и какой order их закрывать?
