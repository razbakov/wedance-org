# Brand Bureau — EOD Lead Engine Assessment 2026-04-26

**Author:** Kai
**Sprint:** brandbureau-vercel.app readiness for SDTV traffic
**Scope:** Visitor journey, attribution, GDPR, Profile Check delivery, week-1 actions

---

## 1. Visitor Journey Assessment

**Funnel is structurally ready, leaks at delivery layer.**

What works: /work → /work/<slug> with persona-anchored hero is the strongest part — it converts case-curiosity into self-identification. Apply hero personalization by source+intent is excellent attribution UX. 6-step form is acceptable for €700-€18K offers (high-ticket = high-friction OK).

Where we lose leads:
- **/sent page is dead end** — no second-touch CTA, no "what happens next" timeline, no calendar link. Hot leads cool while waiting for human reply.
- **No abandonment recovery** on form drop-off — 6 steps without progress save = anyone bouncing at step 4 is lost.
- **No trust elements between case and apply** — visitor goes from "interesting case" to "fill long form" with no testimonial bridge / pricing transparency / "what you get" detail.
- **No Cal.com option** for hot leads who'd book a call instead of filling form.

**Estimated leak: 40-50% of warm clicks don't complete apply.**

## 2. Lead Attribution Quality

**Excellent for triage — best-in-class for solo operator.**

source=case&case=<slug>&intent=<intent> is rare-quality data. Email subject containing case slug + tier means Kirill scans inbox and already knows: "Anastasia case → visual-signal intent → Sprint tier." Triage takes 5 seconds. This is genuinely production-grade attribution.

Limitation: only works for case-driven path. Direct /apply visits show no source context. Add `utm_source`/`utm_campaign` capture for SDTV post traffic = full picture.

## 3. GDPR Blocker — YES, MUST FIX BEFORE LAUNCH

**Spain = EU. Cannot launch without basic compliance.**

Required minimum (1 day work):
- Privacy policy page (/privacy, /es/privacidad) — what data collected, why, retention, contact, rights
- Consent checkbox on apply form: "I agree to Brand Bureau processing my data for image audit delivery and follow-up"
- Email opt-in language explicit (not pre-checked)
- Cookie banner only if analytics added

Without this: real legal exposure if someone files complaint. Not theoretical for EU-residents.

## 4. Profile Check Delivery — REALISTIC: 2-3/week, NOT 4

Without Airtable + template, Kirill faces:
- Email inbox as task queue (inevitable items lost)
- 35-40 min per Check (no template = drafting from scratch)
- No state ("did I send this one?")

**Honest call: 2-3/week sustainable solo. 4/week is aspirational.** With template alone (1h to write): 4/week becomes realistic. Without it: burnout by week 3.

## 5. Three Week-1 Tasks (Priority Order)

1. **Privacy policy + consent checkbox** — 4h. Blocker for legal launch. Owner: Viktor (page) + Kai (copy).
2. **Profile Check reply template** (4-section structure from prior plan) saved as Notion doc + email draft — 1h. Owner: Kirill. Without this, delivery breaks at Check #5.
3. **Airtable lead capture** — fork /api/apply to also POST to Airtable base (10 fields per prior plan) — 2h. Owner: Viktor. Email-only = leads die in inbox by week 2.

Defer: ManyChat, email sequence, profile check automation.

## 6. Updated Lead Engine Readiness Score

**6.5/10** (up from 4/10 last week)

What's strong (+): persona-attribution, ES funnel, form structure, case→apply flow.
What blocks launch (−): no GDPR consent, no lead store beyond email, no delivery template.

**Verdict: NOT ready for SDTV post this week. Ready Monday 2026-05-04 IF the 3 week-1 tasks ship by Friday 2026-05-01.**

---

## Output Contract

```
PROJECT:            Brandbureau
PRIORITY:           This Week
SUMMARY:            Funnel structurally strong, persona-attribution best-in-class, but GDPR + lead store + delivery template are launch blockers. Score 6.5/10.
RECOMMENDED ACTION: Ship 3 week-1 tasks (privacy/consent → Profile Check template → Airtable capture) by Fri 2026-05-01 before any SDTV post.
OWNER:              Viktor (privacy page + Airtable integration), Kirill (Check template), Kai (consent copy + lead schema)
TIMING:             Tasks complete by 2026-05-01; first SDTV post no earlier than 2026-05-04
RISK:               Launch without GDPR = real EU legal exposure. Launch without Airtable = leads buried in email by week 2. Launch without template = Kirill burns out by Check #10.
NEXT HANDOFF:       Viktor (privacy + Airtable build), Marco (review pricing transparency on /work pages), Luna (privacy copy tone)

SEGMENT:            Brand Bureau leads — primary social dancers/artists, secondary founders/coaches
CURRENT STAGE:      Pre-launch — funnel built, lead capture incomplete
NEXT STAGE:         Launch-ready (post-GDPR, post-Airtable, post-template)
TEMPERATURE:        Funnel-ready to produce 70% Warm from case-driven traffic
COMMERCIAL VALUE:   2-3 Profile Checks/week realistic without template; 4/week achievable with template; €60-175 EV per Check at maturity
WHAT WE KNOW:       Site live, ES funnel done, attribution working, Apply form complete
WHAT IS MISSING:    Privacy/consent, Airtable lead store, Profile Check template, /sent page CTA, Cal.com hot-lead path
BEST CHANNEL:       Inbound from SDTV post → /work → /apply
FOLLOW-UP TIMING:   Manual until Airtable ships; 24h reply target for warm cases
CRM UPDATE NEEDED:  Yes — Airtable build is launch-blocker #2
```
