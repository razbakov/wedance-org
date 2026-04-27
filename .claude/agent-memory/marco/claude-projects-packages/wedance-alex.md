# Claude.ai Project package — wedance-alex

## Local source
- Path: C:\Users\ASUS\Projects\wedance-alex
- Status: Active — MVP + pilot search; founders memo v2 signed
- Owner agent (по INDEX): Marco + Viktor + Sage

## Project name (для claude.ai)
WeDance — Kirill × Alex Venture

## Description (для claude.ai, 1-2 строки)
Продуктовая платформа для dance festivals (pre-festival planning, partner-finding, ticketing later). Co-founder Alex (50/50, German law). Pilot search на TSDF Jun 5-8.

## Custom Instructions (project system prompt для claude.ai)

Это **отдельная venture**, не SDTV subproduct. Co-founded with **Alex** (танцор-программист) на 50/50 equity, German law / Munich jurisdiction. Прототип live (`2026.wedance.vip`).

**Твоя роль здесь:** strategy + monetization clarity + partnership intelligence. Главные commercial задачи: (1) pilot festival selection / pitch language, (2) revenue model decision (subscription / transaction / hybrid), (3) защита Кирилла как market/sales co-founder против tech-only Alex's framing.

**Stakeholders:**
- **Kirill** — market / sales / community / founder
- **Alex** — tech / product / code lead. Использует AI-driven workflow (S3 governance, agents, auto-agendas)
- **Pilot festival organizers:** TSDF Turkey (Jun 5-8 — Кирилл там как videographer, soft entry), Summer Sensual Days Rovinj (warm), CSSF Rovinj (rejected — "we build our own AI")
- **Future:** Spanish startup lawyer (taxation на 2% platform model)

**Stage:** active MVP + pilot search. Pilot blocked on TSDF attendance. Founders memo v2 signed. Pitch v3 in progress.

**Constraints / стоп-правила:**
- **Keep separate from SDTV:** WeDance ≠ SDTV subproduct. Cross-customers допустимы (SDTV organizers как natural beta), но brand / ownership / stack — separate.
- **Не коммитимся в revenue model до pilot.** Сначала validate use case (10-15 interviews + 1 pilot).
- Не push EUR 1/touch (Кирилл предложил, Alex pushed back, ChatGPT analyst подтвердил — organizer/ticket flow выглядят как real money).
- Не позиционировать как "новый канал коммуникации" tier-1 организаторам — они слышат это негативно (CSSF rejection signal).
- При любом существенном решении (governance, IP, money, agent deployment) — escalate to Кирилл, не bypass.

**Чего здесь НЕ делаем:**
- Не дублируем S3 governance, которую Alex ведёт в Notion (`Festival-Schedule-3249a1fda35180a88b51d399dddb7df1`)
- Не пишем код / архитектуру (это Alex + Viktor advisory)
- Не сравниваем WeDance с SDTV в feature-list — разные звери

**Главные открытые вопросы:**
1. Revenue model decision (после pilot)
2. Pitch v3 для tier-1 organizers (которые сами строят AI)
3. Spanish taxation на 2% platform fee
4. G-001 Agent deployment Wave 1 — Кирилл consent pending
5. Как позиционировать pre-event stage когда билеты ещё не продаём

**Tone:** русский по умолчанию. Pitch material для organizers — английский. Помни: с Alex переписка может уходить в German/English; держи responses практичными, не founder-mythology.

**Source of truth (источник истины).** Этот проект на claude.ai — snapshot (моментный срез). Полная актуальная информация, история решений и текущий sprint-state живут локально:
- Project path: `C:\Users\ASUS\Projects\wedance-alex\` (Windows) / `~/Projects/wedance-alex/` (Mac)
- Org hub: `~/Orgs/ikigai/` — agent-memory, OKRs, sprint plans, общая координация

Я работаю со snapshot, не с live state. Если в нашем разговоре принимается решение или появляется важная новая информация — попроси Кирилла зафиксировать через Claude Code (например: "Maya, я в Claude.ai пришёл к решению X по WeDance — обнови `decisions.md` / `active-deals.md` / `context.md`").

## Knowledge files

### README.md (full paste)

# WeDance — Dance Festival Platform (Kirill × Alex)

**Domain:** Venture — new, active
**Owner agent:** Marco (strategy, monetization) + Viktor (tech oversight with Alex) + Sage (founder relationship)
**Human owners:** Kirill + Alex (50/50)
**Status:** Active — MVP in dev, pilot search, founders memo v2 signed
**Last updated:** 2026-04-22
**Source:** ChatGPT chat "обсуждение MVP Alex билеты" (233 messages, active)

---

## 1. What this is (1 sentence)

Продуктовая платформа для dance festivals: pre-festival planning + discovery + loyalty + partner-finder + (later) ticketing. Со-основатель **Alex** — танцор-программист, у него код и тестовая платформа (WeDance). Кирилл привносит знание рынка, маркетинг, sales, community access.

## 2. Goal (Q2-Q3 2026)

- **Outcome:** Pilot запущен на TSDF (Turkey) Jun 5-8, получены первые 10-15 user interviews, validated 1 revenue механизм.
- **Metric:** (a) pilot festival подписан, (b) 10+ guerrilla interviews, (c) revenue model v1 зафиксирован по consent founders, (d) 500+ verified users до конца Q3.
- **Deadline:** pilot → 2026-06-08. Revenue model commit → 2026-06-30.

## 3. Progress

### Product concept
- [x] Primary driver (v2) зафиксирован — "Festival info scattered across IG/WhatsApp/FB/websites, both dancers и organizers двигаются blindly до события"
- [x] 3-layer access model: guest / verified attendee / bought-through-us
- [x] Prototype страница опубликована (пример: `2026.wedance.vip/festivals/meneate-viena-2026`)
- [x] Core use case v1: **pre-festival planning + activities** (ticketing отложен)
- [ ] Pilot festival selected (G-002 blocker)

### Founders governance
- [x] **Founders Collaboration Memo v2 signed** — German law, Munich jurisdiction, 50/50 equity, 60-day departure notice, 12-month non-compete, EUR 100/month expense threshold
- [x] Pre-existing IP clause, governing law clause, mediation-first added
- [x] Roles split: Alex = tech/code lead · Kirill = product/market/sales

### Agent/governance work (Alex's S3 structure)
- [x] Agent policies drafted (4): boundaries, decision-making, data privacy, collaboration
- [~] G-001 Agent deployment plan Wave 1/2/3 — consent pending Kirill
- [~] G-002 Pilot festival selection — blocked on TSDF Jun 5-8 attendance
- [~] G-005 consent items pending

### Outreach / pilot search
- [x] CSSF Rovinj — clear NO ("building our own AI digital tools")
- [~] Summer Sensual Days Rovinj (Jun/Jul) — next warm lead
- [~] TSDF Turkey Jun 5-8 — Kirill is booked videographer, soft-pitch to organizer
- [ ] 4 pitch versions (2 big orgs, 2 small orgs) — in progress

### Monetization hypothesis
- Revenue sits more в organizers + ticket flow, чем в direct dancer payments
- EUR 1 / touch model под вопросом — partner возражает
- Open: subscription / transaction-fee / hybrid

## 4. Current state / next action

- **Now:** Pilot festival blocked. Founders memo signed. Prototype live. Pitch language needs recalibration после CSSF отказа.
- **Next:** Kirill → TSDF attendance Jun 5-8 confirmed → soft-pitch organizer on-site как "helping you", не как "new channel". Marco готовит pitch v3 для tier-1 orgs, которые видят digital как свою compet-advantage.
- **Blocker:** pitch language для больших organizers. Они слышат "ещё один канал коммуникации" вместо "лёгкий слой пользы".

## 5. Key references

- `context.md` — insights, policies, monetization dilemmas
- `decisions.md` — founders memo v2 details, rejected CSSF, pitch pivot
- `notion: Festival-Schedule-3249a1fda35180a88b51d399dddb7df1`
- Prototype: `2026.wedance.vip/festivals/...`
- ChatGPT: "обсуждение MVP Alex билеты"

## 6. Open loops

1. Revenue model decision (subscription / transaction / hybrid)
2. Pitch v3 language для tier-1 organizers (они строят AI сами)
3. Agent deployment Wave 1 — consent от Kirill нужен
4. Spanish taxation — go&dance model uses 2% platform fee; кто платит налог в Испании, если платформа — 2%?
5. Как позиционировать pre-event stage когда билеты ещё не продаём

### CLAUDE.md (if exists)

—

### Other key context files (max 3)

#### `context.md`

# Context — WeDance (Kirill × Alex)

Source: ChatGPT chat "обсуждение MVP Alex билеты" (233 messages, Oct 2025 → Apr 2026).

---

## Background

Alex (танцор-программист) самостоятельно сделал MVP платформы **WeDance** — digital pre-festival page. Знал код, не знал как монетизировать. Познакомился с Кириллом → объединились: Alex = tech/product build, Kirill = market/sales/community.

Notion workspace создан как shared working doc (`Festival-Schedule-3249a1fda35180a88b51d399dddb7df1`).

Alex также настроил **agent governance infrastructure** (S3 structure, agents, policies, board). Использует AI-driven workflow.

## Primary Driver (v2 — текущая формулировка)

> Festival information — schedules, lineups, class levels, logistics — is scattered across Instagram stories, WhatsApp groups, Facebook events, and organizer websites. Dancers piece this together manually and still can't see who else is going or whether the program fits their level. Organizers, in turn, have no early visibility into who is actually coming or what those people need. Both sides move blindly until the event itself.

## Product concept (текущее состояние)

**Core функциональность:**
- Festival discovery + festival page (schedule / lineup / artists / venue)
- Pre-festival planning · People coordination (partners, roommates, travel buddies)
- Share rides / meals / rooms · Invite friends
- Extra activities around festival (Jack & Jill, socials, dinners, tours)
- LATER: ticketing and loyalty (miles-like)

**3-layer access model:**
- `guest` — видит events list, event pages (trimmed)
- `verified attendee` — видит кто идёт, может connect
- `bought-through-us` — full Tinder-like partner matching, hotel/taxi sharing

**Loyalty mechanic (post-MVP):**
- Points as airline miles · Каждый 10-й pass free на **другой** festival · Cross-festival graph = moat

## Governance structure (Alex-driven)

| Item | Status | Notes |
|---|---|---|
| Founders Collaboration Memo v2 | signed | German law, Munich juris, 50/50 equity |
| 4 Agent Policies | drafted | boundaries / decision-making / data privacy / collaboration |
| G-001 Agent deployment (Wave 1/2/3) | pending consent | Kirill hasn't signed |
| G-002 Pilot festival selection | blocked | awaits TSDF attendance |
| G-004 Founders memo v2 sign-off | review signed | changes: pre-existing IP, gov law, 60-day notice, 12-month non-compete, EUR 100/mo threshold |
| G-005 consent items | pending | primary driver, governance, policies, agent wave |

## Equity & legal

- 50/50 (Kirill prefers over vesting complexity at this stage)
- **German law, Munich jurisdiction**, Mediation-first dispute clause
- Departure clause protects handover of repos/passwords/files, 60-day notice
- 12-month non-compete for departing founder
- Expense threshold EUR 100/month

## Monetization dilemma (open, active debate с Alex)

**Kirill's view (initially):** EUR 1 / touch (small, per-interaction)
**Alex's pushback:** "free для users, monetize через organizers / premium / ticketing" — data-supported via CRO mockup, conversion psychology

**ChatGPT analyst take:**
- **Real money sits в organizers + ticket flow**, НЕ в direct dancer payments
- Community size: десятки тысяч highly engaged + hundreds of thousands long tail
- EUR 1 модель звучит низко для pilot, но может работать как friction-tester
- Лучшие 3 monetization angles (ранжированные):
  1. **Organizer platform fee** — % от tickets when ticketing activated
  2. **Premium dancer subscription** — пакет loyalty, partner matching, priority
  3. **Data licensing** — audience analytics для organizers (только после критической массы)

**Current ambivalence:** organizers не платят без traffic в начале. Значит нужен bootstrap: сначала dancer-side growth, потом organizer side monetization.

## Outreach learnings

### CSSF Rovinj (Croatian Summer Sensual Festival) — отказ
> "I am investing so much energy into our platforms and our web pages and we have more plans since AI is speeding up things and offering more possibilities that this does not work for me."

**Market signal:** крупные organizers сейчас сами строят AI tools → видят digital experience как свою competitive advantage.

### TSDF Turkey (Jun 5-8) — warm lead
Kirill hired как videographer → organizer его знает. Position как "помощь другу", не "new product".

### Pitch pivot needed
Big orgs слышат "ещё один канал коммуникации". Надо говорить "лёгкий слой пользы, который не требует вовлечения с вашей стороны".

4 версии pitch в работе: 2 для big orgs (AI-capable), 2 для small orgs (без AI budget).

## Product testing plan (guerrilla при festival)

- 10-15 interviews per festival, 5-7 min per interview
- Script: warm-up (30s) → struggling moment probe (1-2 min) → prototype reveal (2-3 min, hand phone, watch reactions)
- Mix: solo / couples / groups / first-timers / regulars

## Legal / tax open questions

- `go&dance.kz` модель: платформа берёт 2% с tickets
- В Испании: если платформа — 2%, кто платит налог? Платформа? Organizer? Dancer?
- Нужна консультация испанского startup lawyer перед incorporation

## Connection to SDTV

Это **отдельная venture**, не SDTV subproduct.
- WeDance targets dancer-side pre-festival experience
- SDTV targets organizer-side media partnership
- Cross: SDTV organizers — natural beta users для WeDance
- Но keep separate ownership / brand / stack

#### `decisions.md`

# Decisions log — WeDance (Kirill × Alex)

Append-only. New decisions at the top.

---

## 2026-04-22 — Founders Collaboration Memo v2 signed

**Context:** Needed legal safety before Alex has all code. Kirill brings market knowledge + marketing — risk of contribution asymmetry early.
**Decision:**
- German law, Munich jurisdiction (mediation-first)
- 50/50 equity (no vesting now — formalize at incorporation)
- 60-day written departure notice, clean handover of code/files/passwords
- 12-month non-compete for departing founder
- EUR 100/month expense threshold per founder
- Pre-existing IP jointly held (assets created before memo)
**Impact:** Safe to continue building in the open with Alex without feeling exposed.
**Status:** active.

## 2026-04-22 — Pitch pivot after CSSF Rovinj rejection

**Context:** Croatian Summer Sensual Festival (tier-1 org) explicitly rejected — "we're building our own AI digital tools".
**Decision:**
- Stop positioning as "interactive schedule / new communication channel"
- Reposition: "light utility layer that doesn't require organizer involvement"
- Build 4 pitch variants: 2 big-org / 2 small-org
- Lead with "helping your dancers" not "helping your festival"
**Impact:** Reopens big-org pipeline with different angle. Small-orgs remain most receptive.
**Status:** active, pitch v3 in progress.

## 2026-04-22 — TSDF Turkey chosen as pilot attempt (Jun 5-8)

**Context:** Kirill hired as videographer → personal friendship with organizer. Soft entry available.
**Decision:** Kirill attends Jun 5-8. Soft-pitch on-site "помощь другу, не продукт". Parallel: guerrilla 10-15 user interviews with dancers.
**Impact:** Unblocks G-002 pilot festival selection.
**Status:** active, blocker = Kirill confirming travel.

## 2026-04-22 — Monetization decision postponed

**Context:** Kirill initially proposed EUR 1 / touch; Alex pushed back with "free для users, monetize organizers". Strong tension.
**Decision:** Не коммитимся в revenue model до pilot. Сначала validate use case (pre-festival planning + partner finding). Monetization commit → после 10-15 interviews + 1 pilot.
**Impact:** Избегаем premature pricing; дает data для info-driven decision.
**Status:** active.

## 2026-04-22 — Primary driver v2 committed

**Context:** Первая версия была "info scattered" — слишком narrow. Alex review предложил добавить organizer blindness + level uncertainty.
**Decision:** Primary driver охватывает оба side: "Both sides move blindly until event itself".
**Impact:** Даёт symmetric framing для dancers и organizers — пригодится в pitch.
**Status:** active, may iterate после pilot.

## Conversation starters (3-5)

1. Pitch v3 для tier-1 organizer (CSSF-style "we build our own AI"): дай 3 варианта positioning + где каждый ломается, где работает.
2. Monetization decision tree: после pilot какие 5 data points нужны, чтобы commit subscription vs transaction vs hybrid?
3. TSDF Jun 5-8 soft-pitch script — "помощь другу, не продукт" tone. Напиши 3-минутный разговор + 2 варианта если organizer спросит "и чем это отличается от ещё одного канала?"
4. Spanish taxation на 2% platform fee — какие 5 вопросов задать испанскому startup lawyer перед incorporation?
5. Cross-venture risk: SDTV organizers как WeDance beta users — где этический / commercial конфликт, где win-win? Audit.
