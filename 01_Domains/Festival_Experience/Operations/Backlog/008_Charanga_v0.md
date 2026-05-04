# Operations Item: Charanga Habanera Munich — v0 Customer

**Date:** 2026-04-28
**Status:** Open — needs Coordinator + Engineer estimation against O-001
**Assigned to:** Engineer (Viktor) — pending
**Hard deadline:** 2026-05-23 (event date). Useful pre-event window starts ~May 10.

## Why this matters

WeDance 2026's Q2 KR is "50 paid festival users by Jun 30." TSDF (Jun 5-8) is the official pilot, but Charanga (May 23) is a real ticketed Munich event with €14k financing gap currently selling on TicketTailor. Using it as a v0 customer:

- Forces a real-data, real-users dogfood ~13 days before TSDF
- Tests the load-bearing hypothesis (verified attendee roster) earlier and smaller
- Generates pre-event traffic to 2026.wedance.vip from an audience that's already converting

## The load-bearing piece

**Without TicketTailor → WeDance verification, the entire concept collapses.** Anyone can RSVP without buying a ticket → roster is unverified → "see who's coming" feature is meaningless. If the webhook can't ship in time, **don't ship anything else**. A static marketing page that just deep-links to TicketTailor is the fallback (option 2 in the original scoping); building a half-version is worse than nothing.

## Scope (in order)

1. **Seed Charanga as a festival record** (~1h)
   - slug: `charanga-habanera-munich-2026`
   - single-day, `ticketUrl` → TicketTailor event page (event_id `ev_8158745`)
   - Strip workshops/dinners/cart UI for this slug — concert, not festival weekend

2. **TicketTailor → WeDance webhook** (load-bearing, ~3 days)
   - On `order.created`, get email + buyer name
   - Match to WeDance user (if exists) or create stub
   - Mark `verified_ticket_holder = true` on the festival signup row
   - Fallback: TicketTailor confirmation email includes magic link `wedance.vip/charanga/claim?token=X`

3. **Public verified attendee list** (~2 days)
   - Real query (replace mocked roster) with opt-in toggle for visibility
   - Show only verified ticket holders; unverified signups go to a separate "interested" bucket
   - Privacy default: name + city only; photo opt-in; full hide opt-out

4. **Concert-shaped event page** (~2 days)
   - Hero with band info, date, venue (La Rumba), price tiers (read-only mirror of TicketTailor)
   - Primary CTA → TicketTailor checkout
   - "Who's going" section below the fold
   - Single "Sign in to claim your ticket / RSVP" button

5. **Drive traffic** (ongoing, marketing)
   - TicketTailor confirmation email gets a "Connect on WeDance" CTA
   - Charanga IG/social posts include WeDance event URL alongside ticket link

**Total:** ~10–12 dev days. Lands ~May 10 if dispatched ≤ Apr 30. Gives ~2 weeks of pre-event use.

## Out of scope (deliberate)

- Workshop/cart/dinner UI for this event (concert, not festival)
- New Stripe integration — TicketTailor owns the money
- Organizer self-service event creation — manual seed is fine for v0
- €1 unlock paywall — wrong shape for a single-night €55-70 ticket
- Verifying TicketTailor capacity sync (450 cap) — display only, not enforcement

## Dependencies

- Engineer cycles. **Direct conflict with O-001 (TSDF MVP).** Both need Viktor. Coordinator must decide: serial (Charanga first → TSDF after, with Charanga learnings feeding TSDF MVP) or parallel (split scope). Recommendation: serial — Charanga's webhook + verified roster is the smaller surface and finishes before TSDF kickoff date.
- TicketTailor API access + webhook permissions (Alex owns)
- Confirmation-email edit permission on TicketTailor (Alex owns)

## Risk register

| Risk | Mitigation |
|---|---|
| WeDance page slow/broken at peak ticket-buying moments → diverts/loses sales | Page is marketing surface only, not on checkout critical path. If WeDance is down, TicketTailor link from socials still works. |
| Privacy: attendee names visible without consent | Opt-in toggle at signup; default to "name + city only," photo opt-in, full hide opt-out |
| Webhook misses an order → buyer not verified | Manual reconcile button + nightly TicketTailor API poll as fallback |
| Charanga work delays TSDF MVP past Jun 5 | Coordinator owns serial vs parallel decision. Reusable: webhook + verified roster + concert-page architecture all carry over to TSDF directly. Net cost should be ~3–4 days of sequencing, not 12. |

## Decision log

- 2026-04-28: Alex selected option 1 (full v0) over option 2 (marketing-only static page) and option 3 (pass). Rationale: Charanga is closer to "real dance event with paying users" than v4's current state — the dogfood is the path to the Q2 KR, not a distraction from it.

## Definition of Done (v0)

- [ ] Charanga festival record live in production DB
- [ ] TicketTailor webhook receiving + processing `order.created` events
- [ ] Verified ticket holders appearing on `/festivals/charanga-habanera-munich-2026` roster
- [ ] Privacy toggle works; no buyer is publicly listed without opt-in
- [ ] Concert-shaped page renders correctly on mobile
- [ ] At least 1 real ticket holder has signed in and appears on roster
- [ ] TicketTailor confirmation email links back to WeDance event page
