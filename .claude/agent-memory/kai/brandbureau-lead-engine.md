# Brand Bureau — Lead Engine & CRM Logic

**Author:** Kai
**Date:** 2026-04-25
**Sprint:** Brandbureau funnel design
**Scope:** ManyChat critique, Profile Check delivery, lead scoring, follow-ups, CRM, outbound, conflict logic, week-1 actions

---

## 1. ManyChat Flow Evaluation

**Universal rule:** every extra question before email = ~15-20% drop in completion. Optimum: **3 questions max** before capture, ideally 2.

### Flow A — ARTIST (5 questions) — TOO LONG

Current: gate → Q1 type → Q2 desire → Q3 weak point → Q4 IG → Q5 email/WhatsApp = **5 friction steps after gate**.

Problems:
- Q2 ("what do you want more of") and Q3 ("what feels weakest") **overlap in qualifying value**. Both probe pain. Pick one.
- Q1 ("what describes you best") is segmenting Kirill's data warehouse, not selling. Kill it or move it post-capture.
- IG handle (Q4) should come **WITH** capture (combined screen), not separately.
- "Yes / Send guide / What is this" trifurcation at the gate is confusing — collapse to 2 options.

**Recommended Flow A v2 (3 steps before capture):**
1. Gate: "Want us to check if your IG actually shows your real level? Yes / Tell me more"
2. Q1 (single combined pain): "What feels weakest right now? [Bio unclear / Photos weak / Videos don't show level / Not bookable / Don't know what to post]"
3. Q2 (capture combined): "Drop your IG handle + email or WhatsApp — we'll send back a personalized check within 48h."
4. Optional follow-up Q after capture: "What do you want more of: bookings / students / visibility?" (this is now nice-to-have, not gating).

Saves 2 friction steps. Pain signal preserved. Segmentation moved post-capture.

### Flow B — GUIDE — OK BUT INCOMPLETE

Current is fine (capture email → deliver PDF → soft cross-sell to Check).

Missing: **2nd-touch upsell within 24h.** "Did you read the guide? What stood out?" → if reply, route to Profile Check. Without this, GUIDE leads sit dead.

Add: tag in CRM as "low-intent — passive collector" so Profile Check capacity isn't burned on them.

### Flow C — SPRINT — TOO MANY QUESTIONS, WRONG ORDER

Current: 4 qualifying questions before capture (BCN, focus, depth, budget, WhatsApp).

Problem: **budget question kills warm leads.** Asking budget BEFORE you've shown value = 50%+ drop. Move it to after capture, in the human follow-up.

**Recommended Flow C v2:**
1. Gate: "We're selecting a small number for an Artist Image Sprint. Want details?"
2. Q1: "Quick upgrade or full image overhaul?" (intent depth)
3. Q2 capture: "Drop WhatsApp + IG handle — we'll send next steps within 24h."
4. Budget + BCN/travel handled in human follow-up (can be drafted reply, not bot).

Reasoning: SPRINT is high-intent. Bot's job is identify + capture, not qualify pricing. That's Kirill's job in human reply.

### Cross-flow gaps

- **No "what segment are you" branching** if someone says they're a coach/founder/DJ. Currently all routes treat them as dancer-artists.
- **No re-engagement trigger** if user abandons mid-flow. Add 24h auto-DM: "Saw you started — want me to send the check anyway? Just drop your IG."
- **No double-opt-in language** for GDPR (Spain = EU). Add explicit consent line on email capture.

---

## 2. Profile Check Delivery Process

**Critical bottleneck.** This is the unit-economics question for the whole funnel.

### Who delivers it

**Default:** Kirill manually for first 20-30 Checks (training data + voice).
**After 30 Checks:** Wife handles photo-side observation + Kirill handles strategic framing — split workflow.
**After 50+:** AI-assisted draft (template + LLM fills observations from IG screenshots) + Kirill reviews and ships in 5 min.

### Realistic time per Check

- **Manual end-to-end:** 25-35 min (open IG, look at 9 grid + bio + 3 reels, draft 4-section reply, send via DM/email).
- **With template + checklist:** 15-20 min.
- **With AI-assisted (post-30):** 5-8 min review.

**Honest answer:** 30 min realistic for first cohort. Anyone who says 15 is lying about quality.

### Pre-built reply template (Kirill writes once, reuses)

```
Hey [name] — checked your profile. Here's what stood out:

STRONGEST SIGNAL
[1-2 sentences: what they do well — anchored in something specific from their IG]

WHAT'S WEAKENING THE IMAGE
[1-2 sentences: bio confusion / weak first 9 / video doesn't show level / no clear ask / etc.]

THE FIRST THING I'D FIX
[1 concrete action: rebuild bio + pinned posts / shoot 3 strong artist assets / restructure first grid row]

RECOMMENDED PATH
[Artist Image Starter / Artist Image Sprint / Just the Guide first]

Want us to build this with you? [link to /apply or WhatsApp]
```

Save as ManyChat quick-reply OR as Notion template OR as Airtable record-template field.

### Capacity analysis

- Solo Kirill, 30 min/Check, 1h/day budget = **2 Checks/day = 10/week max sustainable.**
- With wife co-pilot + template: **15-20/week.**
- With AI-assisted: **30-40/week** (but needs build first).

**Threshold rules:**
- **<10 Checks/week pending** → Kirill ships manually. Quality matters more than speed.
- **10-20/week pending** → introduce template + wife pre-screening (she opens IGs, drafts strongest signal section, Kirill finishes).
- **>20/week pending** → build AI-assisted draft pipeline OR cap at "4 Checks per month, waitlist after." Scarcity is fine — "we're booked, next slot in 3 weeks" actually raises perceived value.
- **>40/week pending sustained** → full automation OR raise the bar (only paid Checks now, free is closed).

**Don't try to scale free Checks infinitely.** They're a lead magnet, not a service. Cap them.

---

## 3. Lead Scoring / Temperature Logic

### Brand Bureau-specific temperature criteria

| Temp | Criteria | Action |
|------|----------|--------|
| **HOT** | Replied SPRINT keyword + gave WhatsApp + IG handle + answered intent question | Kirill replies personally within 4h. Send Cal.com link. |
| **WARM** | Completed Flow A (5/5 answered) + email captured + IG handle visible | Profile Check delivered in 48h. Tagged for follow-up sequence. |
| **COOL** | GUIDE downloaded + email captured but didn't open email 2 / didn't reply to 24h check-in | Drop into 30-day nurture. Don't burn capacity. |
| **COLD** | Started Flow but abandoned / opened DM but didn't engage / 60+ days no activity | Re-engagement attempt at 30/60 days, then archive. |

### Triggers that auto-shift temperature

- **Cool → Warm:** opens any email in nurture sequence + clicks CTA.
- **Warm → Hot:** books Cal.com call OR replies to Profile Check with "yes I want this".
- **Hot → Customer:** pays starter invoice.
- **Any → Cold:** 60 days no engagement.

### What to do with COLD

**Re-engagement timing:** 30 days after last touch, send 1 short message: *"Still want us to check your profile? We've opened a few new spots."* If no reply → 60 days → final touch: *"Closing your file unless you want to stay on the list."* No reply = archive (don't delete — keep for 12-month seasonal re-engagement).

**Seasonal re-engagement:** September (festival season), January (new-year intent), April (pre-summer push). Send 1 broadcast to cold list.

---

## 4. Follow-up Sequences (Beyond Kirill's 4-Email)

### WhatsApp follow-up (3-touch)

Use when WhatsApp captured instead of email.

- **T+24h:** "Hey [name] — sent you the Profile Check. Did it land? Any questions?"
- **T+5 days:** "Quick thought — the first fix I mentioned (pinned posts + first 9) takes about 2 weeks if you want to try yourself. Want to see how we'd do it?"
- **T+12 days:** "Last note — opening 4 Sprint spots this month. If your image upgrade is on the radar, this is the cleanest entry. [link]"

After 3 touches without reply: stop. Do not become noise.

### Re-engagement timing

- **30 days:** soft reopen — "still on your radar?"
- **60 days:** final touch — "closing your file"
- **90 days:** archive
- **6 months / 12 months:** seasonal broadcast (1 message, low-pressure)

### "Sprint reopened" anchor (recurring scarcity event)

Quarterly anchor: open 4 Sprint spots, 2-week window, then close.
- **W-1 broadcast:** all warm + cool list — "Sprint opens Monday. 4 spots."
- **W0 Monday:** open. Apply form active.
- **W+1 reminder:** "2 spots left."
- **W+2 close:** "Closed. Next round in [3 months]."

Creates recurring momentum without permanent open-call burnout.

---

## 5. CRM — Where Leads Live

### Recommendation: **Airtable**, not Monday/Notion/Sheets.

Reasoning:
- Monday is SDTV-locked (operational center for festival deals). Don't pollute it with B2C lead flow.
- Notion is knowledge layer, NOT task/lead flow. Bad at automation triggers.
- Sheets is fine for week 1 but breaks at 100+ records.
- **Airtable**: native ManyChat integration, automation rules, view-per-flow, mobile-friendly for Kirill on the road.

### Minimum field structure (10 fields, not 30)

| Field | Type | Purpose |
|-------|------|---------|
| 1. Name | text | identifier |
| 2. IG handle | url | source-of-truth identity (more reliable than email for dancers) |
| 3. Email OR WhatsApp | text | primary contact |
| 4. Source flow | select (ARTIST / GUIDE / SPRINT / Direct apply / Outbound) | which funnel |
| 5. Segment | select (Dancer / Teacher / DJ / Festival artist / Founder / Doctor / Coach / Other) | qualification |
| 6. Temperature | select (Hot / Warm / Cool / Cold) | priority |
| 7. Stage | select (Discovery / Profile Check sent / Reply received / Proposal Ready / Customer / Archived) | lifecycle |
| 8. Last touch date | date | follow-up trigger |
| 9. Next action | text | what's next |
| 10. Notes | long text | context, history, what they said |

That's it. Add fields ONLY when a real workflow needs them. No "predicted LTV" speculation fields.

### Manual entry vs auto-capture

- **ManyChat → Airtable: auto.** Built-in integration. New ManyChat conversation = new Airtable record. Tag with Source flow automatically.
- **Apply form → Airtable: auto** (server route already calls Resend; add a parallel call to Airtable API).
- **Manual outbound (Kirill DMs someone first): manual entry.** Fine — low volume.
- **Cal.com booked: auto via webhook → Airtable** (Cal supports webhooks).

### One person, one record (deduplication rule)

If `[name + IG handle]` matches an existing record, **append touch to existing record, don't create new one.** Even if they came through 3 different flows (ARTIST + GUIDE + SPRINT), it's one human, one card.

Airtable formula: `IF(SEARCH({IG handle}, dedupe_key), append, create)`. Or use a "primary key = IG handle" enforcement with linked records.

### Stage progression rule

Stage moves forward only on **action**, not time. "Reply received" doesn't auto-promote to "Proposal Ready" — Kirill marks it manually after qualifying call.

---

## 6. Outbound (Beyond Organic SDTV)

### IG DM outreach to existing SDTV-shot dancers — YES

This is the **warmest possible base** Kirill has. People he's filmed = people who already trust him + know the SDTV brand.

- **Approach:** NOT a sales DM. Send Profile Check unsolicited as a gift. *"Hey [name] — was looking at your profile after [festival], noticed a few things that could level it up. Want me to send a quick check?"*
- **Volume:** 5-10 per week, hand-curated. NOT bulk DM.
- **Conversion expectation:** 30-50% will reply (warm base), 5-10% will buy. That's huge.
- **Risk:** if too pushy = damages SDTV trust. Frame as helpful, not as ad.

### Partnerships — top 5-10 referral contacts

Identify and seed:
1. **2-3 BCN dance schools** — referral deal: school sends teacher/star student → BB delivers Starter at -10%, school gets visibility credit.
2. **2-3 festival organizers Kirill works with** — they have artist rosters who need image work. Soft intro.
3. **2-3 dancer-friends with strong personal brands** — testimonial + intro. Their referral closes warmest.
4. **1-2 photographers** in BCN who DON'T do strategy/positioning — they refer when client asks for "more than photos."

Action: Kirill makes a list this week. 10 names, with the angle for each.

### LinkedIn outreach for non-dancer verticals (founders/doctors/coaches)

**Defer.** This is a different funnel, different voice, different content. Don't run 2 parallel verticals from week 1.

When ready (month 3+):
- Vertical-specific landing page (`/founders`, `/doctors`, `/coaches`)
- LinkedIn = primary channel, not IG
- Different lead magnet ("Founder Image Audit" not "Artist Profile Check")
- Different price anchor (€18K Signature, not €700 Starter)

For now: keep site copy supporting all 4 verticals (already does), but **active funnel = artists only**. Other verticals enter through inbound applies, not active outbound.

---

## 7. Conflict / Handoff Logic

### Who responds to ManyChat ARTIST DM?

**Auto-bot answers Q1-Q3 + capture.** No human.

**After capture (Profile Check delivery):**
- **First 30 leads:** Kirill manually. Owner = Kirill.
- **30-100 leads:** Wife co-pilots — opens IG, drafts "strongest signal" + "what's weakening" sections; Kirill finishes "first fix" + "recommended path." Owner = Kirill, support = Wife.
- **100+:** template + AI-assisted draft, Kirill reviews. Owner = Kirill.

**Wife never sends final reply alone.** Voice is Kirill's. Wife's role = pre-processing, not closing.

### SDTV vs Brand Bureau lead overlap — IS THERE CANNIBALIZATION?

**Mostly no, sometimes yes — manage explicitly.**

Three overlap cases:

1. **SDTV organizer asks about artist images for their festival** → ROUTE TO BB. Marco knows to spot this. New revenue stream from existing SDTV client.
2. **Existing SDTV-shot artist sees BB post + applies** → BB lead. NOT cannibalization — SDTV doesn't sell artist personal-brand work. Different product.
3. **Festival booking call lead asks about coverage AND personal image** → SDTV first (festival deal is bigger), BB upsell after. Marco owns festival, hands off image to BB after festival closes.

**Risk:** if BB takes attention from SDTV festival sales (Q2 priority), it's a problem. **Stop-rule:** if Kirill spends >5h/week on BB Checks while festival pipeline drops below 2 active deals, pause BB capacity (close free Checks, waitlist only).

### Decision rule for ambiguous leads

If a person is BOTH a festival organizer AND has personal-brand interest:
- **SDTV closes first** (higher revenue, time-sensitive).
- **BB upsells after** SDTV deal signed (relationship is warm, no friction).
- One CRM record, two stage trackers (SDTV stage in Monday, BB stage in Airtable, linked by name).

---

## 8. Week-1 Action Checklist (BEFORE first SDTV post)

5 must-do items in this exact order:

| # | Task | Owner | Time | Why first |
|---|------|-------|------|-----------|
| **1** | Build Airtable base with 10 fields + 4 views (HOT / WARM / COOL / COLD) + Source flow split | Viktor (build), Kai (schema) | 2h | No CRM = leads die. Cannot run a single ManyChat post without this. |
| **2** | Connect ManyChat → Airtable auto-capture + write Flow A v2 / B / C v2 scripts in ManyChat | Viktor (integration), Kirill (script copy) | 3h | Without integration, manual data entry kills the model. v2 scripts cut friction. |
| **3** | Write & save Profile Check reply template (4-section structure) as Airtable record-template + ManyChat saved-reply | Kirill | 1h | Without template, every Check takes 45 min instead of 25. |
| **4** | Define and document capacity rule: "max 4 Profile Checks per week for first month, waitlist after" + write public-facing language for "we're full, next slot in [date]" | Kai (rule), Luna (copy) | 1h | Capacity discipline before launch = no burnout in week 3. |
| **5** | Make warm-base outbound list: 10 SDTV-shot dancers + 5 BCN partner contacts + draft DM template for each segment | Kai + Kirill | 2h | First wave of leads should not depend on cold ad performance. Warm base validates funnel before scale. |

**Total week-1 setup time: ~9 hours of focused work.** Realistic across 4-5 days.

**Do NOT do in week 1:**
- LinkedIn outreach to founders/doctors/coaches (different funnel, defer).
- Meta retargeting ads (need 2-4 weeks of organic data first).
- Building `/artists` vertical landing page (use existing `/apply?vertical=artist` until traffic justifies dedicated page).
- Email sequence #2-#4 (only sequence #1 needed for first 30 days; build others after seeing what people actually reply to).

---

## Output Contract

```
PROJECT:            Brandbureau (Brand Bureau Barcelona)
PRIORITY:           This Week
SUMMARY:            Lead engine designed: ManyChat flows trimmed to 3 questions before capture, Profile Check delivery capped at 4-10/week with template, Airtable as CRM, warm-base outbound prioritized over cold ads. Capacity discipline > funnel ambition.
RECOMMENDED ACTION: Execute week-1 checklist (Airtable build → ManyChat v2 → Check template → capacity rule → warm outbound list) BEFORE first SDTV post.
OWNER:              Kirill (overall) + Viktor (build) + Wife (Check co-pilot from #30+) + Kai (CRM hygiene)
TIMING:             Week of 2026-04-28 → first SDTV post no earlier than 2026-05-05
RISK:               If launch happens without CRM + template + capacity rule, first 20 leads lost or burn Kirill out by week 3. SDTV festival pipeline (Q2 priority) drops if BB capacity uncapped.
NEXT HANDOFF:       Viktor for Airtable + ManyChat integration build; Luna for Profile Check waitlist copy; Marco for SDTV/BB overlap routing rules.

TEMPERATURE:        Funnel-level — designed to produce 70% Warm, 20% Cool, 10% Hot from inbound; warm-base outbound expected 50% Warm-Hot conversion.
SEGMENT:            Primary = social dancers / teachers / festival artists. Defer founders/doctors/coaches to month 3+.
COMMERCIAL VALUE:   Per Profile Check → Starter conversion target 15-25% = €60-175 expected value per Check (at €400-700 Starter). 4 Checks/week = €240-700 weekly EV at maturity.
WHAT WE KNOW:       SDTV has 1M+ followers warm base. Site live. Tiers priced. ManyChat flows drafted (need v2 trim). Email sequence drafted.
WHAT IS MISSING:    CRM (Airtable not built). Profile Check template (not written). Capacity rule (not defined). Warm outbound list (not made). ManyChat→CRM integration (not built).
BEST CHANNEL:       Inbound = ManyChat from SDTV IG. Outbound = warm IG DM to SDTV-shot dancers + 5-10 BCN partner contacts.
DRAFT MESSAGE:      Profile Check template in section 2 + warm-DM outbound script in section 6 ready to use.
FOLLOW-UP TIMING:   24h auto check-in for abandoned flows. T+5 / T+12 days WhatsApp sequence. 30/60/90 day re-engagement. Quarterly Sprint reopen anchor.
CRM UPDATE NEEDED:  Yes — full Airtable base build is week-1 priority #1.
```
