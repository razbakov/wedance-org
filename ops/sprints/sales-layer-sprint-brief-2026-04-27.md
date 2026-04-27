# Sales Layer Sprint Brief — 2026-04-27

**Sprint lead:** Maya
**Trigger:** Kirill validated ICP v1.1 + offer naming K1 (2026-04-27). WeDance paused. Form v3 готов к deploy.
**Sprint window:** 2026-04-27 → 2026-05-06 (10 дней)
**Sprint goal:** **запустить SDTV sales layer v1**, основанный на ICP v1.1, и получить 3 outbound касания whale-уровня.

### Confirmed names (K1 final)

Internal: Entry / Core / Premium → never customer-facing.
Client-facing:
- **SDTV Visibility Boost**
- **Festival Media Partnership**
- **Annual Festival Positioning Partner**

Marco's authority: ship as v1. Renaming only if strikingly stronger option appears. No endless naming loop.

---

## Maya operating note

Это не "research sprint". Это **execution sprint**. Каждое задание имеет owner + deadline + 1 deliverable file/artifact. ICP v1.1 — input для всех. Никакая работа не дублирует ICP — все используют его как ground truth.

**Stop-rule:** ничего нового в sprint. WeDance, KIARA, Avatar OS, Own Festival — pause. Если возникает желание — Maya push back.

### 🚨 Anti-pattern: "documentation success theater"

> Не дать спринту превратиться в наращивание документов. Reflective writing не = progress.

**Документ создаётся / расширяется ТОЛЬКО если он напрямую помогает одному из 5:**
1. **sell** — продать
2. **price** — поставить цену
3. **qualify** — квалифицировать lead
4. **close** — закрыть deal
5. **renew** — продлить existing client

Если документ не делает ни одного из этих 5 — он не пишется в этом sprint.

### 4 things on the table = real progress

End-of-sprint мерим по **4 deliverables**, не по количеству .md файлов:

1. **Pricing anchors** (Marco) — low / target / stretch × 3 tiers
2. **Scripts** (Kai) — Tier 1 renewal + Tier 2 + objection handlers
3. **Fit worksheet** (Maya) — operational, in use
4. **2 usable case studies** (Luna + Kirill K3)

Всё остальное (voice guide, renewal playbook, templates) — supporting, не measure.

---

## Agent commits

### 🔴 Marco — Offer Architecture LEAD

Marco перерабатывает offer-cards согласно **Section 12** ICP (Entry / Core / Premium), не Promo/Hybrid/Signature.

| # | Task | Deliverable | Deadline |
|---|------|-------------|----------|
| M1 | **Offer Cards v1** — 3 tier (Entry / Core / Premium), каждая на основе ICP Section 12. Структура: name proposal · who's it for · pre-event/live/post-event/next-edition components · what's NOT included · pricing slot · sales motion · upsell path | `strategy/offer-cards-v1.md` | Apr 30 |
| M2 | **Pricing anchors** — для каждой tier даёт **3 числа: low / target / stretch** + **2 строки почему**. Никакой "pricing theory" — только числа + reasoning. Kirill K4 react: выше / ниже / норм. | `strategy/offer-pricing-anchors.md` | May 2 |
| M3 | **Renewal playbook** — based on Section 11 (Best Buying Moments). 6-фазный календарь когда вернуться к существующему клиенту. Маппинг: фаза → продукт (renewal vs upgrade vs annual) | `strategy/renewal-playbook.md` | May 4 |
| M4 | **Tier 1 list** — Kirill даёт 5-10 existing relationships, Marco приоритизирует по fit score | `strategy/tier1-renewal-list.md` | May 4 |

**Marco rules (consolidated 2026-04-27):**
- Не строить offers around deliverable count **as anchor**. Coverage IS in the offer — Festival Media Partnership = main coverage offer, Annual Positioning Partner = premium coverage across visibility cycle. Coverage = production engine, не commodity.
- Pricing skeleton (M2) anchored on **8 axes**: event size · ticket value · growth ambition · relationship warmth · urgency window · SDTV distribution scope · pre/live/post scope · annual vs one-edition. **Not** "price per video."
- Card structure 8-block (problem · desired outcome · why now · what SDTV does · 4-phase value · boundaries · best-fit + anti-fit · upgrade path). Deliverables/coverage **listed inside "what SDTV does"**, never as price anchor.
- Strategic Positioning Rule (`offer-cards-v1.md` top section): coverage = production layer, distribution = reach, positioning = business value. Sales elevate from "coverage" to "coverage that helps festival look stronger."
- Core formula: *Coverage is what we create. Visibility is what the client buys. Positioning is why it becomes valuable.*

### 🟢 Kai — Outbound Engine

Kai пишет outbound material используя ICP Section 14 (qualification questions) + Section 18 (4-step structure: observation → opportunity → proof → next step).

| # | Task | Deliverable | Deadline |
|---|------|-------------|----------|
| K1 | **Tier 1 renewal scripts FIRST PRIORITY** — 5 warm-renewal scripts. Scene-native, warm, direct, strategic. **Open with relevance, pain, or missed visibility opportunity.** No long intro. No corporate tone. | `strategy/scripts-tier1-renewal.md` | May 1 |
| K2 | **Tier 2 outreach pack** — 5 warm-network scripts: через mutual artist/organizer connection | `strategy/scripts-tier2-network.md` | May 3 |
| K3 | **Tier 3 outreach** — 3 templates для cold high-fit (NOT generic). Каждый = специфичная observation про их festival + opportunity + simple next step | `strategy/scripts-tier3-cold.md` | May 5 |
| K4 | **Objection handlers v1** — 7 scenarios: "у нас есть видеограф", "нужен только 1 day", "цена высокая", "ты больше получаешь, давай shows" (scope creep), "AI сами строим" (CSSF case), "не актуально сейчас", "let me think" | `strategy/objection-handlers-v1.md` | May 5 |
| K5 | **Diagnostic question seed** — все scripts содержат: *"Do you feel your festival looks online as strong as it feels in real life?"* в первых 3-х экранах | seeded into K1-K3 | with K1-K3 |

**Kai rules (consolidated 2026-04-27):**
- Никакого generic cold. Если template не работает с диагностики — не отправляем.
- **Tone = Kirill / SDTV, не SaaS outbound.**
  - ❌ "I noticed your company..."
  - ❌ "Hope this email finds you well"
  - ❌ Corporate generic pitch
  - ✅ Warm, scene-native, strategic, direct
  - ✅ Шкала уважения к scene (артистов, organizer-а знаем как community)
  - ✅ Conversation-style, не deck-style
- Каждый script seeded с диагностикой: *"Do you feel your festival looks online as strong as it feels in real life?"*
- Outbound structure (4 шага): observation → opportunity → proof → simple next step.
- **Coverage handling в scripts:** если client говорит "нам нужна coverage" — НЕ переводить разговор сразу на "let's talk visibility." Сначала **acknowledge "yes, that's what we do"**, потом elevate: "coverage from us = official media coverage that becomes promo, social proof, и content for next edition." Coverage IS our product, не replacement.

### 🟣 Luna — Brand Voice + Proof Layer

Luna готовит brand-voice и proof-material для outbound + offer cards.

| # | Task | Deliverable | Deadline |
|---|------|-------------|----------|
| L1 | **Voice & Language guide** — based on Section 13 ICP. "USE / AVOID" word lists для всех agent-ов и copy. Применяется к offer cards (M1) + scripts (K1-K3) | `strategy/sdtv-voice-guide-v1.md` | Apr 30 |
| L2 | **Case study format** — 1-page template: real festival × SDTV case → before/after positioning → measurable outcome. Готов для 3 fillable slots | `strategy/case-study-template.md` | May 2 |
| L3 | **Fill 2 case studies** — Kirill K3 даёт 2 candidates. Каждый case **доказывает 4 вещи:** (1) perception shift, (2) stronger social proof, (3) festival desirability uplift, (4) next-edition promotion easier. **NOT** "we delivered X reels." | `strategy/case-study-{fest1}.md`, `case-study-{fest2}.md` | May 5 |
| L4 | **Copy review** — Marco's offer cards (M1) + Kai's scripts (K1-K4): brand-voice check, tone consistency | inline review | May 6 |

**Luna rules (consolidated 2026-04-27):**
- Audience должен чувствовать — "this festival looks active, international, alive, worth attending."
- **Case study format = before/after по visibility, НЕ по deliverable.**
  - **Before:** weak online perception · slow promo · no momentum · content scattered
  - **After:** stronger image · more reposts · better social proof · festival looks alive · next edition easier to promote
- Не "мы сняли красивое видео" → а "festival перешёл из тишины в active feed".
- Voice & language guide (L1) по Section 13 USE/AVOID — применяется ко всем agent outputs.

### 🔵 Maya — Coordination + Founder Filter

| # | Task | Deliverable | Deadline |
|---|------|-------------|----------|
| MA1 | **Fit Score worksheet** — Section 15 ICP в form (.md table). Maya применяет к каждому incoming lead до того как Kirill тратит время | `strategy/fit-score-worksheet.md` | Apr 29 |
| MA2 | **Founder gate rule** — formal rule: Kirill только при fit score ≥ 21 + warm relationship + budget potential + clear next action | inline в `CLAUDE.md` Decision Authority Matrix | ✅ done 2026-04-27 |
| MA-rule | **Strict gate enforcement.** Если fit weak → либо downgrade attention (agent-handled, no founder), либо reject. Не давать low-fit lead-ам create admin work. | ongoing | ongoing |
| MA3 | **Daily review tracker** — мини-template для morning standup (3 priorities, 1 must-decide) | `ops/templates/daily-review.md` | Apr 28 |
| MA4 | **Mid-sprint checkpoint** | review session 30 min с Kirill | May 2 |
| MA5 | **Sprint retro** | `ops/reviews/retro-2026-05-06.md` | May 6 |

### ⚙ Viktor — Video Delivery Layer ship (separate from B2B sales)

**Layer separation rule (2026-04-27):**
> Video Delivery Layer (Form v3 + QR-photo flow + capture pipeline) — **отдельный operational layer от Festival B2B sales layer.** Не смешиваем с offer cards. Появляется в B2B только как upsell ("add photo capture for your dancers") внутри Media Partnership / Annual Positioning. Core driver — operational quality, не sales.

| # | Task | Deliverable | Deadline |
|---|------|-------------|----------|
| V1 | **Form v3 на Railway production** — deploy `sdtv-form-v3-deploy.zip` (Desktop), set 3 env vars (RESEND_API_KEY / EMAIL_FROM / EMAIL_REPLY_TO), verify 7 email flows live | live URL + verification log | May 1 |
| V2 | **One-QR setup** — `photos.socialdance.tv` permanent URL + `current_festival` config field. Specs in `~/Projects/sdtv-festivals/qr-photo-strategy.md` | live + 1 working printable QR | May 3 |
| V3 | **Notify Alex** about WeDance pause (1 message, soft, no commitment to date) | message sent | Apr 28 |

### 🟡 Sage — Founder Watch

| # | Task | Deliverable | Deadline |
|---|------|-------------|----------|
| S1 | **Therapy session prep** — coaching agenda 5 тем готов (`personal/health/coaching-session-agenda-next.md`). Sage отслеживает когда Kirill идёт | reminder | ongoing |
| S2 | **Overload watch** — если Kirill начинает >2 active threads, escalate. Sprint stop-rule. | weekly check | weekly |
| S3 | **Recovery check** — Kirill следует 3-звенной программе (face pull + Y-raise после жимов). Если "трапеция тянет снова" — flag | weekly | weekly |

---

## Kirill's commits this sprint

Без этих inputs sprint не закроется. Каждый = 5-15 минут.

| # | Input | Who needs it | When | Status |
|---|-------|--------------|------|--------|
| K1 | **Door names** — final | Marco (M1) | Apr 29 | ✅ done 2026-04-27 (Visibility Boost / Media Partnership / Annual Positioning Partner) |
| K2 | **5-10 Tier 1 names ranked** — fill `strategy/k2-tier1-list.md` | Marco (M4), Kai (K1) | Apr 30 | ⏳ form ready |
| K3 | **2 case study candidates** — fill `strategy/k3-case-study-candidates.md` | Luna (L3) | May 1 | ⏳ form ready |
| K4 | **Pricing anchor react** — выше / ниже / норм per tier × low/target/stretch | Marco (M2) | May 3 | ⏳ awaits Marco anchors |

---

## Sprint Definition of Done

| Item | Done = |
|------|--------|
| **Offer cards v1** | 3 готовых, 1-page each, with pricing |
| **Outbound scripts** | Tier 1+2+3 (13 scripts total) + 7 objection handlers |
| **2 case studies** | Real festival examples, brand voice |
| **Voice guide** | USE/AVOID word lists active in agent memory |
| **Fit score** | Worksheet live, Maya applies to next 3 leads |
| **Form v3** | Live on Railway, 7 emails verified |
| **3 outbound касания** | Sent to 3 Tier 1 / Tier 2 prospects (smoke test) |

---

## Anti-goals (что НЕ делаем)

**Stop-rule scope (clarified 2026-04-27):**
> Pause касается **только бизнес-проектов**. Wedding / legal / urgent personal — НЕ под pause. Если есть external deadline (контракт, suit, document due) — handle it, sprint adjusts.

Бизнес-проекты на pause:
- ❌ WeDance pitch / pilot / outreach
- ❌ Avatar OS schema implementation
- ❌ KIARA Visuals activation
- ❌ Arancha brand launch
- ❌ Own Festival negotiation (без external deadline)
- ❌ Job Corporate
- ❌ New ChatGPT projects migration
- ❌ Generic cold email blasts (anti-ICP)
- ❌ Discount без structural reason

**Не под pause** (handle as needed):
- ✅ Wedding logistics / personal commitments
- ✅ Legal обязательства с external deadline
- ✅ Family / health emergencies
- ✅ Existing client commitments (active deals закрываем)

---

## Cadence

- **Daily:** Maya morning review (3 priorities, 1 must-decide). Each agent reports блокеров.
- **Apr 29:** Kirill door-names + Tier 1 names input
- **May 2:** Mid-sprint checkpoint with Kirill (30 min)
- **May 6:** Retro + sprint 3 wins / 3 misses / 3 lessons / next sprint goal

---

## Critical path (что должно проиCRT произойти)

```
Day 1-2 (Apr 27-28): Maya prepares fit-score (MA1), Viktor pings Alex (V3)
Day 2-3 (Apr 28-29): Marco offer-cards-v1 first draft (M1), Luna voice guide (L1), Kirill K1+K2 inputs
Day 4-5 (Apr 30-May 1): Marco pricing skeleton (M2), Kai Tier 1 scripts (K1), Viktor Form v3 deploy (V1)
Day 6-7 (May 2-3): Marco renewal playbook (M3), Kai Tier 2+3 scripts (K2-K3), Luna case study fills (L3), Kirill K3+K4 inputs, mid-checkpoint
Day 8-9 (May 4-5): Marco Tier 1 list (M4), Kai objection handlers (K4), Luna copy review (L4), Viktor One-QR (V2)
Day 10 (May 6): 3 outbound касания sent + retro
```

If critical path breaks at any node, Maya re-plans within 24h, no waiting.
