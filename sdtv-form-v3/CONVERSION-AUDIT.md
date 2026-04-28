# SDTV Form — Conversion Machine Audit

Senior-level review. The product job: dancer pays for a souvenir of a moment that already happened.
Each second of friction kills the impulse. This audit ranks gaps by revenue impact, not by code elegance.

---

## Mental model first

The dancer's actual journey is **four emotional states**, not seven flows:

| State | What they feel | What they need from us |
|-------|---------------|------------------------|
| **Anticipation** (before event) | Excited, planning trip | "Reserve me a spot — I'll be there" |
| **Live** (at event) | High, social, in flow | "Don't make me think — just film me" |
| **Recall** (1–7 days after) | Nostalgic, want to relive | "Show me what you captured of me" |
| **Identity** (ongoing) | Want to be known as a dancer | "Make me visible to my community" |

Our 7 flows map to these but **inconsistently**. Some flows compete for the same emotional state. Some emotional states have no flow at all.

---

## Current 7 flows — strategic assessment

| Flow | Maps to | Conversion signal | Verdict |
|------|---------|-------------------|---------|
| Archive | Recall | Strong intent — they came looking | **Core revenue, well built** |
| Preorder | Anticipation | Pre-commit, planning | **High AOV, underutilized** |
| Visibility | Identity | Recurring, B2C-as-business | **Needs content depth, not flow change** |
| Walkup | Live | High intent, low volume | **Operational — keep simple** |
| Monday Morning | Recall (early) | Soft signal, builds list | **Lead capture, not direct revenue** |
| Status Check | Recall (waiting) | Anxiety reduction | **Trust feature, not conversion** |
| Not Sure | All / none | Discovery / recovery | **Catch-all — likely overused** |

The 3 revenue-driving flows are **Archive, Preorder, Visibility**. Everything else supports them. Stop treating them as equals.

---

## CRITICAL GAPS — fix for revenue

### GAP 1. No festival highlight reel before search
Right now the dancer hits the routing screen, then the festival list, then has to type their IG. Cold. The dancer arrives **already nostalgic** — show them video before asking for input.

**What to add:** on `/dancers` landing or as the first beat of Archive flow, show a 30-second auto-playing reel of the most recent 3–5 festivals. "You were probably here..." Then the search.

**Why it converts:** triggers the souvenir impulse before the user has to commit cognitive effort. Same trick Apple Music uses with "Recently played." Same trick Pinterest uses with the home grid.

**Revenue impact:** lifts archive search-to-purchase conversion by reducing intent dilution. Every dancer who lands cold and types in their IG is a dancer who almost left.

---

### GAP 2. No multi-clip bundle pricing surface
We added second-dance upsell on the preorder flow. We did NOT add it on the archive flow. If a dancer's IG matches 3 ready videos, the form lets them select 3, but pricing is just `€100 × N`. There's no bundle.

**What to add:** when search returns 2+ ready clips:
- 1 clip: €100
- 2 clips: €170 (save €30)
- 3+ clips: €240 + €60/each after (save €60+)

Show the savings as the user toggles clips. Anchor on the bundle.

**Why it converts:** dancers who appear in multiple clips are exactly the high-value users (active in the scene). Right now we tax them. Bundles reverse that.

**Revenue impact:** AOV lift on the most engaged segment. 40% of multi-clip users probably buy 1 today; convert half of remaining to bundle = 20% lift on that segment.

---

### GAP 3. Archive flow doesn't show price until checkout
Dancer searches → finds video → preview plays → "Continue" → email → checkout — only THEN sees €100. Standard pattern but it loses people at "Continue" because they don't know the cost yet.

**What to add:** show price on the preview card itself. "€100 · HD download · No watermark." If early-bird applies (status = Captured/Processing), show €80 with strikethrough on €100.

**Why it converts:** removes ambiguity. The user who wasn't ready to spend €100 self-selects out of the funnel before we waste their attention.

**Revenue impact:** higher quality leads, less abandonment downstream, tighter funnel metrics.

---

### GAP 4. No re-engagement path for past buyers
Once a dancer buys, they get a delivery email and leave. There's no "come back next month" hook. No newsletter. No "your videos from this year" wrap-up. No cross-festival upsell.

**What to add:**
- Delivery email footer: "We're filming at [next festival] in [days] days. See you?"
- Monthly digest: "Your dance year — videos from Q1 2026"
- Calendar-aware: "1 year ago at Croatian Summer Stars 2025" — link to that delivery page
- Saved on a `/me/{token}` page with all past purchases — single link, lifetime access

**Why it converts:** acquisition is expensive, retention is free. A dancer who bought once is a 5–10x more likely buyer at the next festival than a cold visitor.

**Revenue impact:** repeat purchase rate is the LTV multiplier. Currently ~ unknown because we have no measurement. Probably below 30%. Industry benchmark for emotional purchases is 60%+.

---

### GAP 5. No "gift / partner" purchase flow
Two dancers in one video. One pays €100. The partner gets a free share link. Fine for them, lost revenue for us. The system has no way to say: "Want to gift your partner their copy too?"

**What to add:** at checkout, optional add-on: "Send a copy to your partner — €40 (gift price)." Includes:
- Partner's name + email
- Personalized email "Maria thought you'd want this"
- Partner gets their own delivery page

**Why it converts:** gifting is high-emotion. Dancers in a couple are paired buyers — converting one converts the other. €40 add-on is friction-free vs. asking partner to buy separately.

**Revenue impact:** ~30–40% of clips are duets. Convert 20% of single buyers to gift their partner = 6–8% lift on duet revenue. Plus partner becomes a customer in our database.

---

## MISSING FLOWS — add for completeness

### FLOW A. Failed-search recovery
Right now: "Your video isn't ready yet" → notify-me. End.
Should be: notify-me + **show similar dancers from same festival** ("Maria danced bachata at this festival — see her clip") + **suggest preorder for next event** ("We're filming at X next month — book a spot").

This converts a dead-end into an exploration moment. Empty state should always offer two paths forward, not one.

### FLOW B. Festival hub page (not in form, but adjacent)
A page like `/festival/croatian-summer-2026` that shows:
- Stats: "847 dances filmed, 312 already delivered"
- Highlight reel
- "Find your video" CTA → archive flow with festival pre-filled
- "We were there too" social proof from other dancers

This is the canonical landing page Instagram bios should point to during a festival's recall window (1–6 weeks after).

### FLOW C. Subscription / membership for power users
Some dancers attend 8+ festivals/year. They buy 8+ videos/year = €800+. Offer:
- **Annual Pass** €499/year: any 10 videos, all early-bird priced, dedicated support
- **Pro Pass** €999/year: unlimited videos + priority editing + visibility plan included

This is hidden in the data — find users with 3+ purchases in 12 months and surface this offer. Currently invisible.

### FLOW D. Group / dance school flow
Dance schools want their students' videos. Right now teachers buy individually. Could be:
- "I'm a dance school" entry point
- Bulk order with school discount
- White-label delivery page with school branding

Low frequency, high AOV. Probably 5–10 schools per year × €500–2000 each.

### FLOW E. Wedding / special event flow
SDTV is dance video, not wedding video. But couples who got engaged at a festival, performed first dance, etc. — premium tier exists. This is a one-question filter: "Was this a special moment?" → routes to higher-priced edit + custom delivery.

Probably 1–2/month. €300–500/each. Easy to handle manually, just needs an entry.

---

## UX FRICTION — per-flow

### Archive flow
- ❌ IG handle entry has no autocomplete from past searches (`localStorage`)
- ❌ Festival selection requires scrolling — not searchable, no "recent festivals" pinned
- ❌ Preview is 5 sec — fine for QC, too short to evaluate quality
- ❌ No "I don't see myself" recovery — only success or empty
- ❌ Multi-clip selection has no visual grid — just stacked cards

### Preorder flow
- ❌ Slot booking is two-step (day → time) — could be one grid
- ❌ "Both packages" not offered (Social + Show as bundle)
- ✅ Second dance upsell — done
- ❌ No timezone awareness for international users

### Visibility flow
- ❌ Plans page is text-heavy, no example posts shown
- ❌ No "see who else uses this" social proof
- ❌ Pricing tiers are hard to differentiate visually (all same template)
- ❌ Content readiness step is hidden from users who need to upload — no upload UI

### Checkout (all flows)
- ❌ Stripe card UI is generic — no Apple/Google Pay shown prominently
- ❌ Promo code discovery is buried below form
- ❌ No "save card for next purchase"
- ❌ No instalment option for >€200 orders

### Delivery page
- ❌ Video player has no "scrub" — only play/pause
- ❌ Download is one-click, no quality selector
- ❌ Upsell appears after watch — should be alongside
- ❌ No social share built in (just "share with partner")

---

## TRUST & SOCIAL PROOF GAPS

| Gap | What's missing | Where to add |
|-----|---------------|--------------|
| No live counter | "12 dancers bought today" | Routing screen footer |
| No testimonials | Real dancer quotes | Each plan card on visibility |
| No quality samples | "See actual delivered video" link | Below preview, before checkout |
| No money-back proof | "Refunded 3 times in 12 months — see why" | Footer of checkout |
| No editor names | Anonymous editing team | Confirmation email + delivery page |
| No follower verification | "509K+" is just a number | Live IG embed showing recent post |

---

## ANALYTICS GAPS

We can't optimize what we don't measure. Currently tracked: nothing client-side beyond Airtable writes.

**Add (minimum viable):**
- Page view per screen (already have screen IDs)
- Time on screen (especially preview screen)
- Search → result conversion %
- Result → preview play %
- Preview play → checkout %
- Checkout → payment %
- Promo code usage %
- Bundle uptake (1 vs 2 vs 3+ clips)
- Source attribution (`?source=` already captured, never analyzed)
- Error events (validation failures, payment failures, fetch errors)

**Tool:** Plausible, PostHog, or Umami. Self-hosted PostHog is overkill but free. Plausible is the right balance for this scale (~$9/month).

---

## MOBILE-SPECIFIC

Most dancers will use this on phones. Audit specifically for mobile:

- ❌ Stripe card element doesn't auto-trigger numeric keyboard on some Android
- ❌ Sticky CTA on checkout is now correct, but other screens have non-sticky CTAs that scroll out of view
- ❌ Video preview on iOS sometimes fails to play inline — needs `playsinline` attribute (likely already there, verify)
- ❌ Email autocomplete from `@gmail.com` etc. shortcuts not enabled (`<input type="email" autocomplete="email">`)
- ✅ Haptic feedback on found — done
- ❌ No PWA install prompt — could be home-screen icon for repeat users

---

## PRIORITIZED ROADMAP

Sort by **revenue impact ÷ effort**, not by what's interesting.

### Sprint 1 — direct conversion (1 week)
1. Show price on archive preview card (1 hr)
2. Bundle pricing for multi-clip archive (4 hrs)
3. Apple/Google Pay above card input on checkout (2 hrs)
4. Plausible/PostHog tracking on every screen (3 hrs)
5. Email autocomplete + numeric keyboard fixes (1 hr)

**Outcome:** measurable lift in archive conversion, measurable funnel.

### Sprint 2 — retention (1 week)
1. `/me/{token}` lifetime access page for past buyers (6 hrs)
2. Delivery email footer with next-festival CTA (2 hrs)
3. Partner gift add-on at checkout (4 hrs)
4. Save card for next purchase (Stripe Customer object) (3 hrs)

**Outcome:** repeat purchase rate measurable. LTV starts to climb.

### Sprint 3 — completion (1 week)
1. Failed-search recovery (suggest similar + preorder) (3 hrs)
2. Festival hub page `/festival/SLUG` (8 hrs)
3. Live counter on routing screen (1 hr)
4. Testimonial cards on visibility plans (2 hrs)

**Outcome:** dead ends become exploration paths. Cold visitors get social proof immediately.

### Sprint 4 — new flows (2 weeks)
1. Subscription / Annual Pass for power users (12 hrs)
2. Group / school flow (8 hrs)
3. Wedding / special event entry (4 hrs)

**Outcome:** new revenue tiers without rebuilding the form.

---

## What NOT to do

- **Don't redesign the routing screen.** It works. 4 options is the right number. Adding "Check Status" as a 5th was Alex's call but it's borderline — every option dilutes the next click.
- **Don't add multi-language until single-language metrics are good.** Translation costs are high, and we don't yet know which copy converts. Optimize English first.
- **Don't build a recommendation engine.** Sounds smart, costs months, returns nothing at this scale.
- **Don't add chat support.** Support emails go to @socialdancetv DMs. Chat widget is a distraction asset.
- **Don't make the preview longer than 5 seconds.** Watermark + length cap protects the product. Long previews kill the "I need it" signal.

---

## The one principle that ties this together

**Every screen should answer one question and lead to one action.**

If a dancer can't tell within 2 seconds (a) what this screen is for and (b) what to do next, the screen is broken. Not "less polished" — broken.

Audit each screen against this. Most pass. The ones that fail (visibility intro, slot booking on busy festivals, failed-search empty state) are where the conversion bleeds.
