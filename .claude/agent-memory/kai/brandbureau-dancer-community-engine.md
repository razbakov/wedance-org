# Brand Bureau — Dancer Identity Vertical: High-Volume Lead Engine

**Author:** Kai
**Date:** 2026-04-26
**Sprint:** Brandbureau dancer identity vertical (high-volume sub-brand)
**Scope:** Capacity math, lead engine redesign, CRM/community upgrade, cohort + membership engines, warm-base activation, role split, week-1 checklist
**Supersedes (for this vertical):** brandbureau-lead-engine.md (still valid for Profile Check / aspiring teacher funnel)

---

## OPINION FIRST

**My call:** the dancer identity funnel is NOT Profile Check at higher volume. It is a different machine. Profile Check is a **diagnostic tool** for high-intent people who already think they have a profile problem. Insecure dancers do not think "my profile is weak" — they think "I am not enough." Different pain, different language, different conversion path.

**Recommended structure:** **Cohort first, membership second.** Productized 1:1 ladder is a trap at this volume. Cohort ("Stop Being Invisible" 6-week × 12-15 students × €497-697) creates scarcity, peer accountability, content engine, and predictable cash. Membership becomes the post-cohort home (€39-49/mo) — not the entry product. Pure productized ladder breaks Kirill's calendar within 30 days at this volume.

**Lead engine architecture:** **Landing page first, DM second.** ManyChat keyword routing was right for Profile Check (low volume, high handholding). For 100-500 leads/month, landing page → email capture → automated nurture → cohort enrollment window is the only sustainable path. DM funnel becomes a parallel warm channel for high-touch leads, not the primary intake.

**CRM:** Airtable breaks at this scale for cohort + membership tracking. Recommended stack: **School (or Circle) for community + cohort delivery, Airtable for sales CRM, Stripe for billing, ManyChat as DM router only.** Notion stays as knowledge layer.

The volume changes the physics. Stop trying to scale Profile Check — design the new machine.

---

## OUTPUT CONTRACT

```
PROJECT:            Brandbureau — Dancer Identity Vertical (sub-brand or new domain TBD by Marco/Kirill)
PRIORITY:           This Week (architecture decision) → Next 4 Weeks (build)
SUMMARY:            High-volume low-ticket dancer funnel needs cohort-first architecture, landing-page intake, community platform (School/Circle), and explicit role split. Profile Check engine does NOT scale — different physics. Wife as co-pilot is insufficient at >100 leads/month — needs a community manager hire OR cohort gates.
RECOMMENDED ACTION: Lock product archetype with Marco (cohort vs membership vs hybrid) by 2026-04-30 → build landing page + email sequence + community platform in parallel → first cohort enrollment window opens 2026-05-15 with a 50-person waitlist before any open call.
OWNER:              Kirill (founder, voice, cohort delivery) + Marco (pricing/economics) + Wife (community moderation, content selection) + Viktor (build) + potential PT hire by Cohort 2 (community manager / ops)
TIMING:             2026-04-30 archetype lock · 2026-05-01 → 2026-05-14 build sprint · 2026-05-15 first cohort waitlist opens · 2026-06-01 first cohort starts
RISK:               (a) Pure productized 1:1 ladder breaks Kirill's calendar within 30 days at >100 leads/mo. (b) No CRM upgrade = pipeline blindness at 200+. (c) Wife at this volume = burnout in week 4 without hire. (d) Brand confusion with SDTV editorial trust if dancer-pain framing leaks into SDTV main feed.
NEXT HANDOFF:       Marco for product archetype + pricing lock; Viktor for landing page + School build; Luna for cohort sales-page copy + email sequence; Maya for hire job description if community manager needed.

TEMPERATURE:        Funnel-level forecast — at 100/mo: 60% Warm, 25% Cool, 15% Hot · at 500/mo: 50% Warm, 35% Cool, 15% Hot (more passive collectors at scale)
SEGMENT:            Insecure social dancer (B2C, identity pain). Sub-segments: (a) intermediate dancer who doesn't post, (b) advanced dancer who feels invisible at festivals, (c) returner after 1-2 year break.
COMMERCIAL VALUE:   Cohort: €497-697 × 12-15 students × 6-8 cohorts/year = €36k-84k/year baseline. Membership: €39-49/mo × 200-500 members = €94k-294k/year at maturity (12-month ramp). Combined plausible €150-300k/year at 250-500 leads/mo steady state.
WHAT WE KNOW:       SDTV warm base 1M+ across IG/FB/YT, Kirill has filmed thousands of dancers personally, ManyChat infra exists, brandbureau.studio site live. Profile Check engine running for higher-intent segment.
WHAT IS MISSING:    Product archetype decision (Marco). Landing page for dancer identity vertical. Community platform selection (School vs Circle vs Discord). Cohort sales page + email sequence. Application form vs open enrollment decision. Wife's actual scope at this volume. Hire decision.
BEST CHANNEL:       SDTV organic posts → landing page (primary) · IG DM warm-base outreach to filmed dancers (secondary) · Festival post-event tagged content sequences (tertiary) · School partnerships (slow, compounding)
DRAFT MESSAGE:      Sales page hero, email sequence, and warm-DM outreach scripts in sections 4 and 6.
FOLLOW-UP TIMING:   T+0 immediate auto-delivery, T+2 day pain mirror, T+5 case proof, T+7 cohort invite, T+10 scarcity close, T+14 final, T+30 next-cohort waitlist re-engage
CRM UPDATE NEEDED:  Yes — Airtable sales CRM + School/Circle community platform + Stripe billing + ManyChat router. Build order in section 8.
```

---

## 1. CAPACITY MATH — What Breaks at 100/200/500 Leads/Month

The Profile Check engine I designed assumed a max of 30-40 leads/week (120-160/month) with manual delivery capped at 4-10 Checks/week. Here is exactly where it fails at higher volume.

### At 100 leads/month (~25/week)

**First failure:** Profile Check delivery. At 30 min/Check and 25 inbound/week, that is 12.5h/week of Kirill founder time on diagnostic delivery alone. That violates the 8-12h/week Brand Bureau ceiling. Already broken at 100/month.

**Second failure (within 4 weeks):** Manual ManyChat reply curation. Even with v2 trimmed flows, 100 leads × 3-4 DM exchanges = 300-400 messages/month requiring human triage. Wife at 30+ leads can co-pilot but already strained.

**Third failure (within 6 weeks):** Airtable view discipline. 100/month = 600 records in 6 months. Airtable still works, but the 4-view structure (Hot/Warm/Cool/Cold) becomes noise. Need stage-based pipeline views.

### At 200 leads/month (~50/week)

**Catastrophic failure:** Profile Check engine collapses entirely. 50 Checks/week even AI-assisted at 5 min review = 4.2h/week, plus the AI build itself is unbuilt at this point. Without that build, manual = 25h/week impossible.

**Wife breakdown point:** community DM moderation + content posting + Profile Check pre-screening = 15-20h/week. Wife also runs SDTV photo/SMM = additional 10-15h/week. Total 25-35h/week. Not sustainable.

**ManyChat limits:** ManyChat Pro tier handles this fine technically, but the **logic complexity** explodes. 200 leads with cohort/membership/check/sprint/guide branches = a 50-node flow nobody can debug or update.

**Airtable limits:** Still functional, but cohort tracking + membership state + payment state need linked tables. At this point Airtable becomes a fragile spreadsheet pretending to be an app.

### At 500 leads/month (~125/week)

**Profile Check is dead.** Cannot deliver 125 personalized Checks/week regardless of automation. Replace it with automated diagnostic (web app form → AI-generated PDF report → email delivery).

**Cohort/membership physics:** at 500/mo and 5% to paid (cohort or membership), that is 25 paid customers/month = 300/year. A single cohort accommodates 12-15 students. So that is **20-25 cohorts/year**, OR 75% membership funnel + 5 cohorts/year. Either way: cohort-only does not absorb 500 leads/month — needs membership as the volume catcher.

**CRM/community:** Airtable breaks. Community lives in a real platform (School, Circle, Discord). Sales CRM stays in Airtable but with a clear separation between **sales pipeline (Airtable)** and **community state (School/Circle)**.

**Founder time:** even with full automation + part-time hire, Kirill's role becomes "cohort lead + content face + escalation handler" only. Anything else delegated. If Kirill still personally responds to >10 DMs/day at this volume, the system is broken.

### Summary table — what breaks first

| Volume | First failure (week 1-2) | Second failure (week 3-4) | Third failure (week 6-8) |
|--------|--------------------------|---------------------------|--------------------------|
| 100/mo | Profile Check delivery time | ManyChat triage burden | Airtable view structure |
| 200/mo | Profile Check engine entirely | Wife capacity | ManyChat flow complexity |
| 500/mo | All manual touch | Airtable as community store | Founder calendar saturation |

**Implication:** the redesign below replaces Profile Check delivery with **automated diagnostic** for low/mid intent and reserves manual touch for cohort applications + high-temperature DMs only.

---

## 2. LEAD ENGINE REDESIGN — High-Volume, Low-Ticket

### Top of funnel — LANDING PAGE FIRST, DM second

**Decision: SDTV post → landing page → email capture → cohort waitlist (primary) · DM keyword as parallel high-touch channel (secondary).**

**Why landing page over DM-first:**

1. **Volume math.** ManyChat at 500/mo means 500 humans expecting some kind of human-feel reply. Landing page handles 5000 visitors with the same energy as 50.
2. **Email is the asset.** DM lists do not transfer. ManyChat banning Kirill (one wrong template) wipes the list. Email + paid hosting is durable. Critical at this volume — losing a 5000-person email list to a Meta policy change is recoverable; losing it from ManyChat is not.
3. **Cohort enrollment requires a sales page anyway.** Cannot enroll 12 paying students into a €497-697 program from a DM thread. Landing page with curriculum, testimonials, FAQ, and Stripe checkout is mandatory.
4. **Search and shareability.** Friends share landing page URLs, not "DM SDTV with keyword ARTIST." Network effect requires a public page.
5. **Compliance.** GDPR consent + Privacy Policy + double opt-in are simpler on a form than embedded in ManyChat conversation.

**DM keyword still valuable for:** high-intent fast-action leads who reply to a Reel CTA, festival in-person QR scans, warm-base outreach where Kirill personally messages someone he filmed. Kept as parallel channel — NOT primary.

**Recommended SDTV post CTAs (dancer identity vertical):**

- **Primary:** "Read the full breakdown: [link to landing page]"
- **Secondary (mid-funnel posts):** "Comment INVISIBLE if this hit you — we'll send the playbook."

The "comment-INVISIBLE" route hits ManyChat → email capture → same nurture sequence as the landing page route. Two paths, one funnel.

### Mid funnel — Cohort enrollment vs Membership signup paths

**Completely different conversion paths. Profile Check delivery does NOT translate.**

**Cohort path (high-ticket, scarcity-driven):**

```
Landing page → email + WhatsApp capture
  → 7-day pre-cohort warm-up sequence
    → Day 7: "Doors open this Friday — 12 spots, applications close Sunday"
    → Application form (qualifies fit + commitment)
    → Cohort acceptance email + Stripe checkout link
    → Onboarding sequence (3 emails over 5 days)
    → Cohort starts
```

**Membership path (low-ticket, frictionless):**

```
Landing page → email capture
  → 5-day nurture sequence demonstrating community value
    → Day 5: "Join the community — 7-day free trial then €39/mo"
    → Stripe checkout (1-click signup, no application)
    → Onboarding email with community access link
    → Day 7: trial reminder
    → Day 14: first month engagement check
```

**Key difference:** cohort has an **application form filter**, membership does not. Cohort uses **scarcity** (limited seats, time-bound enrollment), membership uses **continuity** (always-on, low commitment).

If the offer is **hybrid** (Marco may recommend "cohort for the entry, membership as ongoing home"):

```
Landing page → email capture
  → Nurture sequence
    → Cohort enrollment as primary CTA (scarcity)
    → Membership as fallback for non-fits or post-cohort
    → Cohort graduates → auto-enrolled to membership at preferred rate
```

This is my actual recommendation if Marco's economics allow it.

### Bottom funnel — what closes the sale

**Cohort closing path:**

1. **Application form** (5-7 questions, 3 minutes max). Fields: name, IG, location, current dance level, what they hope to gain, biggest blocker, can they commit 4-6 hours/week for 6 weeks, payment readiness.
2. **48h application review** — Kirill or VA triages applications. Accept/waitlist/decline. Decline rate target: 20-30% (filters out non-fits, creates "I made it in" feel).
3. **Acceptance email** with Stripe checkout link, 72h to pay or seat goes to waitlist.
4. **Pre-cohort onboarding** (3 emails over 5 days): welcome, prep work, expectation-setting.
5. **Cohort kicks off** with a live group call (recorded for replay).

**Application form is the single most important conversion mechanism at this volume.** It does three things simultaneously: filters non-fits, creates psychological commitment ("I applied"), produces qualifying data for Marco's pricing iteration.

**Membership closing path:**

1. **Self-serve checkout** on landing page (no application). Stripe one-click.
2. **7-day free trial** with credit card on file. Auto-converts to paid.
3. **Onboarding email sequence** (3 emails over 5 days): community guide, first weekly challenge, intro live stream invite.
4. **Day 14 engagement check** — automated trigger if no community login → "Need help getting started?"

**Webinar/Cal call only used for:** premium upsell (Sprint, Opening tier from Brand Bureau core ladder) AFTER cohort or membership engagement. NOT for entry product close.

### Disqualification — at what step do we filter

**Rule: filter as late as possible, never on capture.**

Filters at the right stages:

| Stage | What we filter | How |
|-------|---------------|-----|
| Landing page → email | Nothing | Capture is sacred |
| Email → cohort application | Self-selection (price stated upfront) | "€497 cohort, 6 weeks" — non-fits don't apply |
| Cohort application → acceptance | Fit + commitment + payment readiness | Kirill/VA reviews application form, declines 20-30% |
| Membership trial → paid | Engagement | Auto-cancel if zero login by day 5 of trial |
| Cohort completion → membership | Voluntary | Discount offer, no force |

**Do NOT filter on:**
- Email capture (always say yes)
- Free content access (PDFs, lead magnets)
- Initial DM engagement

**Do filter on:**
- Cohort application (this is where we say no)
- Custom 1:1 work (always priced high enough to self-filter)

Disqualification happens at the **application gate**, not at capture. This is the single biggest mistake low-ticket funnels make — filtering too early kills volume.

---

## 3. CRM / Community Upgrade

### Profile Check engine assumed Airtable-only. That breaks here.

Recommended stack at 100-500 leads/month:

| Tool | Role | Cost |
|------|------|------|
| **Landing page** | Capture, sales page, application | $0 (Nuxt on Vercel, existing) |
| **ConvertKit / Resend** | Email sequences, broadcasts, segmentation | $29-79/mo at this volume |
| **Airtable** | Sales CRM (lead state, application review, cohort enrollment tracking) | $20/mo Pro |
| **Stripe** | Billing for cohort + membership | 2.9% + 30¢/transaction |
| **School** (recommended) OR Circle | Community + cohort delivery + course content | School: $149/mo · Circle: $89/mo basic, $199/mo growth |
| **ManyChat Pro** | DM router (parallel channel only) | $15/mo |
| **Zapier / Make** | Glue between systems | $20-50/mo |

**Total monthly:** $250-450/mo at 100-500 leads/mo. Trivial against revenue at €36k-294k/year potential.

### Why School over Circle / Discord / Telegram

**School (skool.com):**
- **Pro:** Native gamification (points, levels, leaderboards) — perfect for dancer identity vertical (people who feel invisible respond strongly to status mechanics). Cohort + community + course delivery in one platform. Stripe-native payments. Mobile app. Strong creator-economy track record (Hormozi, Sam Ovens, etc.).
- **Con:** $149/mo is more expensive than Circle. Less customizable.

**Circle:**
- **Pro:** More customizable, cleaner aesthetic, native Stripe, decent course delivery.
- **Con:** Weaker engagement mechanics. Less momentum-by-default.

**Discord:**
- **Pro:** Free, dancers are familiar with it.
- **Con:** No native course delivery, no payments, chat-only feels low-value, churn higher. Wrong vibe for paid premium community.

**Telegram channel/group:**
- **Pro:** Free, instant, dancers use it.
- **Con:** Same as Discord — feels like a free WhatsApp group, not a paid community. Hard to charge €39/mo for a Telegram group.

**My recommendation: School.** The gamification mechanic ALONE is worth the cost difference for this audience. Insecure dancers buying "stop being invisible" need a platform where being seen is structurally rewarded. School delivers that natively.

### Where each lead state lives

| Lead state | System of record |
|------------|------------------|
| Anonymous landing page visitor | Vercel analytics |
| Email captured, not yet purchased | ConvertKit (with Airtable mirror for sales view) |
| Cohort applicant (pending) | Airtable |
| Cohort accepted, not yet paid | Airtable + Stripe |
| Cohort paid, in delivery | School + Airtable |
| Cohort graduated | School (alumni tag) + Airtable (LTV record) |
| Membership trial | Stripe + School |
| Membership active | School + Stripe |
| Membership churned | Airtable (re-engagement queue) |

**One human, one record across systems.** Use IG handle or email as the universal key. Set up Zapier syncs so a Stripe subscription update writes to Airtable, a School activity update flags Airtable, etc.

### What to abandon from Profile Check engine

- **Airtable as sole source.** Now it is sales CRM only.
- **Manual stage progression.** Now most stage moves are auto-triggered by Stripe + School events.
- **4 simple views.** Now: Lead view (pre-paid), Application Review view, Active Cohort view, Membership Health view, Re-engagement view.

---

## 4. Cohort-Specific Lead Engine

If Marco's economics confirm cohort wins, here is the operational machinery.

### Application form vs open enrollment

**Recommendation: application form, always.** Even at low ticket (€497-697).

Reasoning:
- Filters non-fits (people who can't commit time, wrong level, wrong intent).
- Creates psychological commitment — applying = first investment.
- Generates Marco's pricing iteration data.
- Allows scarcity language: "We accept 12 of 50 applicants."
- Disqualifies time-wasters before Kirill spends a minute on them.

Open enrollment for cohort = race to the bottom. People treat low-friction signup as low-value.

### Wait-list mechanics

**Pre-launch (first cohort):**

- Open waitlist 30 days before cohort start. Email capture only.
- Send 4 emails over 30 days teasing cohort content.
- Day 30: announce cohort opens for applications. 50-person waitlist creates competitive frame even if all 12 spots are easy to fill.

**Steady state (Cohort 2+):**

- Permanent waitlist on landing page. Cohorts open quarterly.
- Cohort graduates promote next cohort to their networks → builds waitlist organically.
- Application priority based on waitlist date + engagement (opened emails, responded to surveys).

**Why this matters:** scarcity is the only lever that works against cheap-product anchoring. People buying "stop being invisible" need to feel they almost did not get in. That is the energy. Open-call cohort destroys it.

### Pre-cohort warm-up sequence (7-14 days before cohort starts)

After acceptance + payment:

- **Day 1:** Welcome video from Kirill (recorded once, reused). 90 seconds. "You are in. Here is what to expect."
- **Day 3:** Pre-work assignment (10-min activity — IG audit worksheet). Sets behavior of "do work, get value."
- **Day 5:** Cohort intro post in School community — "Meet your cohort." Each student introduces themselves. Massive engagement primer.
- **Day 7:** Logistics email — Zoom link, calendar invites, what to bring.
- **Day 10:** Quick win delivery — a 1-page tactical guide ("3 things to fix on your bio before Day 1"). Builds belief.
- **Day 14 (Cohort Day 1):** Live kickoff call.

**Drop-off recovery during warm-up:**

- If student does not log into School by Day 5: automated DM + email — "Need help getting started?"
- If still no engagement by Day 10: Wife or VA reaches out personally on WhatsApp.
- If still no engagement by Day 14 (Cohort Day 1): refund offer + re-enroll for next cohort. No-show rate target: <10%.

### Drop-off recovery — during cohort

- Weekly check-in survey, 60 seconds (1 question).
- Auto-flag in Airtable if a student misses 2 consecutive live sessions OR doesn't post in community for 7 days.
- Wife or community manager personal outreach within 48h of flag.
- 1:1 office hours offered for struggling students (Kirill 30-min slot, max 3/cohort).

### Alumni → next cohort referral loop

Build into cohort completion:

- **Cohort Day 42 (final session):** "Who would you want in the next cohort?" Survey question. Generates 30-50 warm leads per cohort.
- **Cohort Day 45:** alumni get a "founding member" tier in membership at €29/mo (vs €49/mo standard) AS LONG AS they bring 1 referral to next cohort waitlist.
- **Affiliate mechanic:** alumni earn €100 per successful next-cohort referral (paid at referee's payment confirmation).
- **Public testimonial production:** built into Cohort Day 40-42 — every graduate produces a 60-second video testimonial as part of the program.

This loop is the actual growth engine after Cohort 1. SDTV organic gets you to Cohort 1; alumni referral compounds you to Cohort 5.

---

## 5. Membership-Specific Lead Engine

Only if Marco recommends hybrid or membership-primary.

### Onboarding flow

- **Day 0:** Stripe checkout completes → School auto-enrollment → welcome email with login + Day 1 quick win
- **Day 1:** First weekly challenge dropped in community
- **Day 3:** Intro live stream invite (Kirill 20-min Q&A, recorded for replay)
- **Day 5:** Personal welcome message from Kirill (templated but personalized with first name + IG handle reference)
- **Day 7:** Trial ends → auto-converts to paid OR prompts cancellation flow with retention offer
- **Day 14:** Engagement check — if zero community login, automated outreach
- **Day 30:** First-month milestone celebration (badge, public shoutout)

### Churn prevention

**The only churn metric that matters: did they post in the community in the last 14 days?**

If yes: low churn risk.
If no: high churn risk (90%+ will cancel within 60 days without intervention).

Triggers:
- 7 days no login: automated nudge email
- 14 days no community post: Wife or community manager DM
- 21 days no engagement: 1:1 retention offer (Kirill 15-min call OR free 1-month extension)
- 30 days no engagement: pre-cancel email — "Want to pause instead?"
- Cancel button always visible (no dark patterns) — saves trust, reduces refund chargebacks

### Community health metrics (weekly review)

| Metric | Target | Red flag |
|--------|--------|----------|
| Active members (logged in 7d) | >70% | <50% = community is dying |
| Posts per week | 1+ per active member | Drops 2 weeks straight = leadership vacuum |
| New member 30-day retention | >70% | <50% = onboarding broken |
| Monthly churn | <5% | >10% = product-market fit problem |
| Founder presence (Kirill posts/replies per week) | 3-5 | <1 = community goes cold fast |

Wife or community manager runs this report weekly. Kirill reviews monthly.

---

## 6. Warm Base Strategy — Activating the SDTV-Filmed Dancers

Kirill has personally filmed thousands of dancers via SDTV. This is the strongest possible activation source for the dancer identity vertical. Generic "DM them" wastes it. Specific plays:

### Play 1: Festival post-event tagged content sequence

After every SDTV festival shoot, Kirill (or wife) maintains a list of dancers featured in the videos. Within 14 days of festival end:

- Send each tagged dancer a personal IG DM: "Hey [name] — we featured you in the [festival] recap. Loved your [specific move/moment]. Quick question — does your IG show this energy? Drop a link if you want a 2-minute take."
- Track in Airtable. Roughly 30-50% reply rate based on Profile Check engine data.
- Of replies, 5-15% convert to landing page → email → cohort enrollment.

**Volume:** ~30-50 dancers per festival × 12 festivals/year = 360-600 warm DMs/year. This alone produces 20-90 cohort/membership enrollments annually. Free.

### Play 2: SDTV YouTube channel cross-post

Long-tail YouTube videos have new viewers monthly. Pinned comment + video description on dance education content:

> "Want your IG to show your real dance level? Free playbook: [link to dancer identity landing page]"

Doesn't dilute SDTV editorial brand (description-level only, not in-video). Compounds as YT views accumulate.

### Play 3: Festival promo video tag-and-route

Pre-event SDTV festival promos already tag artists. Add to the tag DM template:

> "Sending you the cut next week. Side-question: ever thought your IG could be working harder for your bookings? We just opened something for dancers — link if curious: [landing page]"

Soft, contextual, not pushy. Marco's brand-wall rule (no SDTV/BB co-branding publicly) is preserved — this is private DM, Kirill is the bridge.

### Play 4: School partnership routing (slow, high-LTV)

Identify 5-10 BCN dance schools + 5-10 international schools where Kirill has shot. Approach school directors with:

> "I am running cohorts for dancers who feel their IG doesn't represent their level. Want to offer your top 5 students a sponsored seat (we cover 50%, school pays 50%)? It positions your school as image-aware. Here's the curriculum."

Schools sponsor 2-5 students per cohort. Recurring relationship. Each school becomes a 5-10 student/year referral source.

**Realistic warm-base contribution:** 30-40% of Cohort 1, dropping to 15-20% by Cohort 5 as paid acquisition + alumni referrals scale. Critical for the first 6 months.

### What NOT to do with warm base

- Bulk DM blast — looks spammy, damages SDTV trust.
- Tag all SDTV-featured dancers in a public post about cohort — public co-brand violation per Marco's rule.
- Use SDTV email list to broadcast cohort enrollment — different consent scope, GDPR risk + brand confusion.
- Promise SDTV features as cohort upsell (pay-to-play optics destroy editorial credibility).

---

## 7. Wife's Role — Realistic Scope at This Volume

The Profile Check plan had Wife as co-pilot from lead 30+. That breaks here.

### At 100 leads/month — Wife as community moderator + content selector

**~10-12 h/week:**
- Daily community moderation in School (welcome new members, answer basic questions, escalate to Kirill)
- Content selection: pull best community posts for SDTV story features, internal celebration
- Cohort onboarding messages (templated, sent personally)
- Weekly community health check report

**Achievable.** Adds 6-8h/week to her existing SDTV photo/SMM load (~10-15h/week). Total ~16-23h/week. At her ceiling but not over.

### At 200 leads/month — Wife at burnout edge, hire decision required

**~18-22 h/week** if scope holds:
- Same as above PLUS pre-cohort warm-up sequence personal touches, cohort drop-off recovery DMs, application form review triage.

**Total Wife load: ~28-37h/week. Not sustainable.** This is hire territory.

### At 500 leads/month — Hire is mandatory, Wife as content lead only

**Wife scope:** content selection, SDTV-side coordination, brand consistency. ~10h/week.

**Hire scope:** community manager / cohort ops. ~25-30h/week part-time.

### Hire profile (when needed, by Cohort 2 or month 4 whichever first)

**Title:** Community Manager / Cohort Ops Lead, part-time.
**Hours:** 25-30h/week.
**Cost:** €1,200-1,800/mo (BCN remote-friendly part-time, junior-mid level).
**Skills:** Spanish + English, community moderation experience (any platform), comfort with Airtable + Stripe + School, ideally a dancer themselves (community credibility).
**Reports to:** Kirill. Coordinates with Wife on content selection.
**Hire trigger:** when Wife signals burnout OR when total leads >150/mo sustained for 4+ weeks OR when Cohort 2 enrollment opens.

**Cost vs revenue:** at 200 leads/mo and 5% conversion to cohort/membership, that is 10 paid customers/mo × €497 = €4,970/mo gross. Hire at €1,500/mo = 30% of gross. Tight but defensible if cohort margins hold.

---

## 8. Week-1 Checklist — High-Volume Edition

Reordered from Profile Check engine. Some items hold, most do not.

| # | Task | Owner | Time | Why |
|---|------|-------|------|-----|
| **1** | Lock product archetype with Marco — cohort vs membership vs hybrid + price | Marco + Kirill | 2h decision | Everything downstream depends on this. Cannot build a landing page for an undefined product. |
| **2** | Build dancer identity landing page on brandbureau.studio (or sub-domain) — sales page + email capture + application form OR membership checkout | Viktor (build) + Luna (copy) | 8-12h | Replaces ManyChat-first intake. Single highest-leverage build. |
| **3** | Set up email infra — ConvertKit OR Resend with cohort/membership-specific sequences (5-10 emails) + GDPR double opt-in | Viktor (integrate) + Luna (write sequences) | 6h | Email is the durable asset. Must be built before launch. |
| **4** | Spin up School (or Circle) workspace — community structure, gamification config, Stripe integration | Viktor (build) + Kai (structure) | 4-6h | Cohort + membership both need this delivered before doors open. |
| **5** | Write cohort sales page copy + email sequence + application form questions | Luna (copy) + Marco (price + offer) | 6h | Specific to dancer-identity pain (different voice from Profile Check). Cannot reuse Brand Bureau core copy. |
| **6** | Build warm-base outreach list — top 50 SDTV-filmed dancers + top 10 schools + draft DM templates per segment | Kai + Kirill | 3-4h | First Cohort 1 enrollments come from warm base. Cannot rely on cold organic. |
| **7** | Define stop-rules with Marco — kill triggers if Cohort 1 underfills, if Wife capacity blows, if SDTV pipeline drops | Marco + Sage + Kirill | 1h | Discipline before launch. Otherwise 30 days in we are over-committed without exit logic. |

**Total week-1 setup: ~30-40 hours of focused work.** Realistic across 7-10 days with Viktor + Luna + Kirill + Marco aligned. **Roughly 3-4× the Profile Check week-1 build.** This is what high-volume costs.

### What from Profile Check week-1 still holds

- Capacity discipline (#4 from Profile Check) — still mandatory, expressed differently (cohort seat caps replace Profile Check weekly cap).
- Warm-base outbound list (#5 from Profile Check) — still mandatory, expanded to 50+ dancers + 10 schools.
- CRM build (#1 from Profile Check) — replaced by School + Airtable hybrid.

### What from Profile Check week-1 does NOT hold

- ManyChat v2 flows as primary intake (#2 from Profile Check) — demoted to parallel channel.
- Profile Check reply template (#3 from Profile Check) — irrelevant for this funnel; cohort onboarding sequence replaces it.

### Do NOT do in week 1

- Run paid ads to landing page — wait for Cohort 1 to validate organic conversion first.
- Launch second cohort or open membership simultaneously — one product live at a time.
- Cross-post to SDTV main feed beyond the editorial vertical rules Marco set — brand wall holds.
- Hire community manager pre-launch — wait for Cohort 1 to confirm volume signal.

---

## OPINION CLOSE

The dancer identity vertical is a fundamentally different machine than Profile Check. Profile Check sells diagnostic clarity to people who already know they have a profile problem. This vertical sells **belonging and visibility** to people who feel invisible. Different pain, different mechanics, different conversion path.

The biggest risk is not capacity or platform choice. It is treating this like Profile Check at scale and bolting more automation onto the existing engine. That fails by month 2.

The single most important decision this week: Marco locks the product archetype. Once cohort vs membership vs hybrid is decided, the landing page, email sequence, community platform, and warm-base scripts all follow naturally. Until that is decided, we are building blind.

If forced to pick today without Marco's economics: **hybrid with cohort as flagship entry, membership as continuity.** Cohort generates testimonials, community, and predictable cash. Membership absorbs the volume Marco's pricing cannot capture in cohort seats. Productized 1:1 ladder is the wrong structure for this audience and this volume — kill it before it kills the calendar.

Hand this back to Marco for the archetype lock. Then to Viktor for the build. Then to Luna for copy. I own the CRM hygiene + warm-base activation + cohort ops once the build lands.

---

**File:** `C:\Users\ASUS\Orgs\ikigai\.claude\agent-memory\kai\brandbureau-dancer-community-engine.md`
**Status:** Ready for Marco economics handoff. Pending Marco archetype lock 2026-04-30.
