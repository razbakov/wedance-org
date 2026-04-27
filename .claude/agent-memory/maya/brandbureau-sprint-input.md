# Brandbureau Sprint — Strategic Input from Kirill

**Date:** 2026-04-25
**Source:** Kirill (founder) verbal input during sprint kickoff

## What Kirill asked for

1. Recap existing plan for Brand Bureau Barcelona project
2. Run a sprint with the full agent team
3. Goals:
   - Build the funnel
   - Figure out how to sell it
   - Fill the site with REAL photos of models Kirill shot (some from Russia period, before BCN)
   - Invent stories for those models (so anonymized photos become case studies)
   - Content can be in English — it's HIS content, just present it tastefully

## Current state of Brand Bureau (factual)

- **Site:** `https://brandbureau.vercel.app/` — Nuxt 3, bilingual EN/ES (ES partial)
- **Repo:** `~/Projects/brandbureau/`, GitHub `Kirkors/brandbureau`
- **Positioning:** premium personal-brand & image studio for founders/experts/doctors/coaches/performers
- **Founder voice:** Kirill Korshikov, "Brand Bureau Barcelona"
- **Brand colors:** indigo `#3F3AFF`, navy `#0F1030`, yellow `#FFD441`
- **Tiers** (`data/tiers.ts`):
  - I. The Opening — €6 500 (1 studio day, 2-week turnaround)
  - II. The Signature — €18 000 (6 weeks, MOST CHOSEN)
  - III. The Positioning — €4 200 (strategy only, no shoot)
  - IV. The Retainer — €4 800/mo (direction as a service)
- **Cases** (`data/cases.ts`): 8 cases, ALL anonymized + ALL Unsplash stock images. Real photos missing.
- **Public assets:** only `Founder.jpg` exists. No model photo library yet.
- **Funnel UI exists:** hero → trust → tiers → apply (`/apply`) + booking (`/call` via Cal.com)
- **Cal.com:** event `clarity-call`, tier-aware (`?tier=Signature`/`?tier=Retainer`)
- **Email:** Resend wired for apply form (`hello@brandbureau.studio`)

## Positioning conflict to address

- **Site says:** founders / doctors / experts / coaches / performers (premium B2B-ish)
- **Kirill's real photo backlog:** primarily dancers/performers (SDTV world, 1M+ followers across IG/FB/YT) + portrait work from Russia period
- **Risk:** if we use dancer photos for "founder" cases, the visual signal contradicts the positioning
- **Opportunity:** dancers/performers IS one of the four declared verticals — lean into it as the wedge

## Kirill's funnel proposal (USE THIS — do not reinvent)

**Core insight:** SDTV is already a media brand with 1M+ followers, organic dancer trust, editorial credibility. Brand Bureau should NOT start with cold ads. Use SDTV as a native lead engine.

### Main hook

> "Your Instagram doesn't show your talent."
> Stronger: "You dance better than your Instagram looks."
> Premium: "Your talent is visible in the room. Your profile should show it online."

Native angle from SDTV as a media brand:
> "We see amazing dancers all the time. But many of them look much weaker online than they feel on the dance floor."

### Three entry levels

**Level 1 — Artist Profile Check (free, personalized)**
- 5-point profile score
- What's weakening the image
- 3 quick wins
- Best next step
- Trigger: Comment ARTIST

**Level 2 — Artist Profile Guide (free PDF, fallback)**
- "7 things that make dancers look more bookable online"
- Used as: low-intent fallback, post-email nurture, retargeting magnet

**Level 3 — Artist Image Starter (paid)**
- Price: €400-700 (early customers) or €750-1200 (premium anchor) — TBD
- Includes: 30-min positioning call, bio rewrite, 1 mini shoot, 5-10 portraits, 3 short videos, 14-day posting direction
- Outcome: "A profile that makes your artist level easier to see."

### Master formula

```
SDTV content
  → comment keyword / story reply
  → ManyChat DM (auto)
  → Artist Profile Check (manual or templated)
  → email / WhatsApp capture
  → personalized recommendation
  → starter offer / shoot / full Artist Image package
```

Better than `post → free guide → email` because Profile Check attracts active intent ("yes my profile is weaker than my talent"), guide attracts passive collectors.

### Editorial vertical inside SDTV

- Rubric name: "Artist Image Check by SDTV" or "Does your profile show your level?"
- Cadence: every 6-7 SDTV posts, drop one of:
  - Educational post
  - Profile checklist carousel
  - Soft offer
  - Before/after image study
  - Story poll
  - Application call
- Goal: not "SDTV started selling ads" but "SDTV launched a useful editorial vertical"

### 10-post content seed (Kirill drafted)

1. Reel — "Your dancing is strong. But does your profile show it?" → CTA Comment ARTIST
2. Carousel — "5 signs your IG doesn't show your dance level" → CTA Comment PROFILE
3. Story poll — "Does your profile show your real dance level?" → reply ARTIST
4. Reel — "If an organizer opens your IG today, what do they see?" → CTA Comment BOOKED
5. Carousel — "Dancer vs Artist profile" → CTA Comment ARTIST
6. Offer post — "We're opening 4 Artist Image Checks this month" → CTA Comment CHECK
7. Before/After — using real model photos → CTA Comment IMAGE
8. Founder-style crossover — "best artists are also personal brands" → CTA Comment ARTIST
9. Mini-guide — "7 things every dance artist profile needs" → CTA Comment GUIDE
10. Case/story — anonymized real story → CTA Comment PROFILE

### ManyChat keyword routing

- ARTIST → general interest (default flow)
- PROFILE → wants review
- GUIDE → wants PDF
- BOOKED → booking/career intent
- SPRINT → high-intent paid starter

### ManyChat Flow A (ARTIST)

1. "Hey 👋 Want us to check if your IG shows your real level as a dancer/artist?" → Yes / Send guide / What is this
2. If "check my profile":
   - Q1: What describes you best? (Social dancer / Teacher / Performer / DJ / Festival artist / Content creator / Other)
   - Q2: What do you want more of? (Bookings / Students / Visibility / Stronger image / Better content / Not sure)
   - Q3: What feels weakest? (random profile / unclear bio / better photos-videos / videos don't show level / don't know what to post / not bookable enough)
   - Q4: IG handle?
   - Q5: Email or WhatsApp for recommendation?
3. Final: "We'll review and send recommendation within 48h."

### ManyChat Flow B (GUIDE)

1. "Here's the Artist Profile Guide: 7 things that make dancers look more bookable online."
2. Capture email with consent before sending PDF
3. After: "Want us to check your profile too?" → Yes / Not now

### ManyChat Flow C (SPRINT, high-intent)

1. "We're selecting a small number for an Artist Image Sprint. Want details?"
2. Qualify: BCN-based or traveling? / What to improve? / Quick upgrade or full image? / Budget range / WhatsApp
3. Final: "Looks like a fit. We'll send next steps."

### Email sequence after capture

1. **Delivery** — "Your Artist Profile Guide" — PDF + 1 strong insight + CTA review profile
2. **Mirror pain** — "Your talent may not be the problem" — most need clearer image, not more content → CTA Profile Check
3. **Education** — "Dancer profile vs artist profile" — moments vs identity → CTA Apply Starter
4. **Offer** — "4 Artist Image Sprint spots" — mini positioning + photo/video + bio + 14-day direction → CTA Apply

### Meta retargeting (after organic seed)

- Audiences: SDTV followers, IG engagement 365d, Reels watchers 50%+, ARTIST/PROFILE commenters, site visitors, ManyChat openers w/o email
- Formats: click-to-message Lead ads (more natural for IG audience than website forms)
- Ad lines:
  - "Still wondering if your profile shows your level?"
  - "Your dancing is strong. Your image should be too."
  - "Artist Image Checks are open this month."

### Site vertical

- Path: `/artists` (preferred) or `/apply?vertical=artist`
- Hero: "Your talent is visible in the room. Your profile should show it online."
- Subline: "For dancers, teachers and performers who want their online image to match the level people feel when they see them live."
- Primary CTA: "Get your Artist Profile Check"
- Sections: Pain mirror → What we fix → Image studies → Artist Image Starter → Signature Artist Presence → FAQ → Apply

### Profile Check delivery format (post-DM)

Short, valuable, NOT full free report:

1. Your strongest signal
2. What is currently weakening your image
3. The first thing I would fix
4. Recommended path

Example structure:
- Strongest: "your dancing has real presence and musicality"
- Weakens: "best moments are buried, bio doesn't say what's bookable"
- First fix: "rebuild top of profile — bio, pinned, first 9 grid, 3 strong artist assets"
- Recommended: Artist Image Starter
- CTA: "Want us to build this with you?"

## What Kirill explicitly asked agents to do

> "Это идеи пусть возьмут во внимание в процессе создания стратегии"
> "Расскажи мне, какие еще можно улучшить воронки и как это сделать"
> "Дай мне идеи и оцени эту воронку в том числе"

So: **don't just execute — evaluate, critique, and improve.** Then propose other funnels (for the 3 non-dancer verticals: founders, doctors, coaches).

## Constraints / context for sustainability

- Kirill is solo dev + part-time strategy. Wife handles SMM.
- Already running: SDTV (delivery + B2B sales), WeDance with Alex, Ikigai org, Lumen Atelier, Arancha brand venture.
- Brandbureau is **5th parallel initiative**.
- Stop-rule from `~/Orgs/ikigai/CLAUDE.md`: "3+ active initiatives compete for founder attention → pause and simplify."
- This sprint must define realistic capacity, not just ideal funnel.

## §15 — Capacity update from Kirill (2026-04-26)

Two corrections that change the capacity arithmetic significantly:

1. **Lumen Atelier IS Brand Bureau.** Not two parallel ventures — one
   project under two names that converged. Earlier ikigai memos
   tracked them separately ("Lumen Atelier" as BCN image practice for
   public-facing pros, "Brand Bureau" as premium personal-brand
   studio). Same studio, same offer ladder, same Kirill. The
   `~/Orgs/ikigai/CLAUDE.md` project registry needs to reflect this
   merge (currently lists `~/Projects/artist-brand-studio/` as Lumen
   Atelier separately from `~/Projects/brandbureau/`).

2. **WeDance pilot deprioritized until 2026-06-01.** Kirill is parking
   it explicitly. This was the biggest open commitment competing for
   weekday hours through Q2.

### What this means for the active-initiatives count

- Was: SDTV + WeDance + Ikigai org + Lumen Atelier + Arancha + Brand
  Bureau = 6 parallel.
- Now: SDTV + Ikigai org + Brand Bureau (= Lumen Atelier) + Arancha = 4
  active. WeDance parked.

Sage's stop-rule (≤3 active initiatives) is still tripped, but the
gap is much smaller (one over, not three over) — and Ikigai org is
operational layer not a venture, so functionally we're at 3 ventures
+ ops, which is at the ceiling but not over it.

### What this means for Brand Bureau hours

- WeDance pilot was eating ~5-10 h/week. That capacity is now free.
- Brand Bureau realistic ceiling: **8-12 h/week sustainable** (was
  5-7 h before). MVP-mode (1 post + 4 manual checks/week) sits inside
  this comfortably. Light PUSH becomes plausible — but only after
  wife consultation closes (still a hard blocker).

### What does NOT change

- Wife consultation still required before launch (Sage's call).
- 8 stub cases on /work still create credibility gap with Anastasia
  as the only real proof.
- Pricing-ladder decision still open.
- SDTV festival pipeline still primary revenue stream (do not let
  Brand Bureau eat festival sales hours).

## §13 — GDPR / EU compliance (Kirill addition, 2026-04-25)

Spain/EU operation → email capture must be GDPR-compliant: freely given, specific, informed, unambiguous consent. Forms must clearly explain how PII will be used.

**Required consent text (mirror in ManyChat capture + site form):**

> "I agree to receive the Artist Profile Guide and follow-up emails from Social Dance TV / Brand Bureau. I can unsubscribe anytime."
>
> + Privacy Policy link

**Build implication:**
- ManyChat email-capture step needs a confirm checkbox, not just "give me your email"
- Site Profile Check form needs explicit consent checkbox + Privacy Policy link
- Privacy Policy page must be live on brandbureau.studio before first capture
- Resend "List-Unsubscribe" header on all transactional + sequence emails
- Owner (PII controller) named in Privacy Policy: Brand Bureau / Kirill Korshikov, BCN

## §14 — Kirill's revised funnel verdict + AI angle (2026-04-25)

### Self-grading

- Original idea ("post → free guide → email → sell"): **8/10** — native audience + pain + capture, but free guide pulls cold leads, no scoring, no ladder, no vertical page.
- Improved version (Profile Check + ManyChat + ladder + retargeting): **9.3/10** — diagnostic, not just magnet.
- **Decision: launch Profile Check FIRST, not the guide.** Guide is fallback only.
- First 10 Checks = manual, by Kirill. Then assess pattern of pain + willingness-to-pay BEFORE adding ads or automation.

### Naming (LOCKED)

**Primary brand:**

> **SDTV Artist Profile Check**
> *AI-assisted review of how your Instagram represents your real dance level.*
> CTA: **Comment ARTIST to get yours.**

Rationale:
- "SDTV" = trust anchor (existing media authority)
- "Artist Profile Check" = clear deliverable
- "AI-assisted" = novelty + curiosity + premium ("AI-assisted, reviewed by SDTV" sounds more expensive than either alone)
- "Powered by AI + human review" as longer subline option

**Avoid** "AI Profile Check" alone — generic.

### How AI is actually used

AI handles first-pass analysis on:
- Bio clarity
- Profile structure
- Offer clarity
- Content categories
- First impression
- Positioning gaps
- Pinned-post suggestions
- Content theme detection

Then human (Kirill) adds creative + market perspective.

**Public framing:** "We use AI to structure the review, then our team adds the creative and market perspective."

NOT: "AI will fully analyze your profile" (sounds cheap + generic).

### Profile Check deliverable structure (LOCKED — for delivery template)

```
1. Profile Score
   - Headline: "Your profile clarity: 62/100"
   - 5 sub-scores:
     · First impression
     · Bio clarity
     · Artist identity
     · Visual consistency
     · Booking readiness

2. Main diagnosis (1 sentence)
   "Your dancing looks strong, but your profile does not yet
    make it clear what people can book you for."

3. What weakens the profile (3-4 bullets)
   - Best videos not pinned
   - Bio doesn't explain offer
   - Photos casual, not artist-level
   - Content shows moments, not identity

4. Quick wins (5 bullets, actionable today)
   - Rewrite bio around your role
   - Pin 3 strongest posts
   - Add one clean artist portrait
   - Create booking/class highlight
   - Strengthen first 9 grid

5. Recommended next step
   - Recommended path: [Profile Fix / Image Starter / Signature]
   - CTA: "Want us to build this with you?"
```

### Site preset path (LOCKED)

- EN: `/apply?vertical=artist&check=ai-profile`
- ES: `/es/aplica?vertical=artist&check=ai-profile`
- (Note: this contradicts Viktor's recommendation of dedicated `/artists` route — see synthesis decision below.)

### Revised product ladder (LOCKED — replaces previous Starter-only proposal)

| Tier | Name | Price | Scope |
|------|------|-------|-------|
| Free | AI-assisted Artist Profile Check | €0 | Diagnostic above |
| Low-ticket | **Artist Profile Fix** | **€150-250** | Bio + pinned posts + first-9 grid + highlights + quick content plan (no shoot) |
| Starter | **Artist Image Starter** | **€500-900** | Mini positioning + photos + short videos + profile upgrade |
| Core | **Artist Signature Presence** | **€1 500-3 500+** | Full artist image: production, rollout, booking-ready profile |
| Retainer | **Artist Visibility Retainer** | **€600-1 500/mo** | Ongoing content direction + editing + visibility + SDTV features |

This is a **dancer/artist sub-ladder**, lower-priced than core Brand Bureau tiers (Opening €6 500 / Signature €18 000 / Retainer €4 800). Sub-ladder feeds the main ladder for high-fit clients.

### Sample ad creative direction (Kirill draft)

**Reel hook 1:** "AI checked 100 dancer profiles. Most had the same problem." → "Their dancing was strong. Their profile was unclear." → CTA Comment ARTIST

**Reel hook 2:** "Your Instagram may be hiding your real dance level." → CTA "Get your AI-assisted Artist Profile Check."

**Carousel hook:** "5 things our AI checks in a dancer's profile" → 5 sub-scores → CTA Comment CHECK
