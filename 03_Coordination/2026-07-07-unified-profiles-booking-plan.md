---
title: Unified profiles (@handle), professional profiles, reviews + booking, Pinakothek showcase
date: 2026-07-07
author: Forge
status: proposal — needs Commander decision on the architecture fork
---

# Unified profiles, booking & the Pinakothek showcase

Triggered by the Commander hitting a live bug (`/artists/venue:Muffathalle` → 404) and asking three connected questions: why aren't profiles unified like v4, where are booking + reviews for professional profiles, and can we build a venue-booking showcase (Pinakothek der Moderne, 5 areas) for social-dance organizers.

## 1. The bug (hotfixed)
On a city page, the "Full profile" link on every person (teacher/DJ/organiser/venue) pointed at `/artists/<id>`. But city people have synthetic ids (`muc-1`, `muc-dj1`, `venue:Muffathalle`) that don't resolve to an artist page → **404 for everyone**, not just venues. Hotfixed by removing the broken link (event-filtering, its real function, still works). The *root cause* is fragmentation (below).

## 2. The architecture fork — adopt v4's unified `@handle` model

**Today (2026): profiles are fragmented and inconsistent.**
- Dancers → `/u/<username>` (built this week).
- Artists → `/artists/<id>` (mock data, no table).
- Venues / DJs / organisers → **no profile at all** (hence the 404).

**v4 did it right: one namespace, Medium-style.** v4 has a single `pages/@[username]` route and a `profiles` table with a `type` field (`dancer` / `artist` / `venue` / `organizer`). `ProfileLayout` renders the right layout per type. One handle space, one URL shape, one entity model.

**Recommendation: adopt the v4 model in 2026.**
- One `profiles` (or `entities`) table: `username` (handle), `type`, name, photo, bio, city, socials, plus type-specific JSON. A dancer is just `type='dancer'`.
- One route: **`/@<handle>`** (Medium-style) rendering a per-type layout. `/u/<username>` and `/artists/<id>` become redirects.
- **This is the correct foundation for everything below** — reviews already attach polymorphically by `(type, slug)`; booking attaches to a profile; the city page links people to `/@handle` instead of a broken `/artists/…`.
- Migration path: the `dancers` table stays as the auth/account row; a `profiles` row is created per dancer (and per venue/artist/organizer). Or fold profile fields into a unified table. **This is the one-way-door decision — it changes routing + data model, so it needs an explicit go before booking is built on top.**

## 3. Professional profiles = reviews + booking

Once profiles are typed and unified:
- **Reviews** already work (polymorphic) — a venue/artist/organizer profile shows its rating + reviews with zero new work; just point `targetSlug` at the handle.
- **Booking** is the new subsystem for professional profiles (venues especially):
  - `bookable_spaces` (a profile can offer N bookable areas — e.g. Pinakothek's 5), each with capacity, price, description.
  - `availability` (recurring slots / calendar).
  - `booking_requests` (organizer → venue: date, area, headcount, message; status pending/accepted/declined).
  - **Terms & conditions** accepted at request time (see §5).

## 4. The Pinakothek der Moderne showcase (flagship)

A concrete first bookable venue to prove the model and help local social-dance organizers find space:
- A venue profile `@pinakothek-der-moderne` (type=venue), with **5 bookable areas** (the Rotunde, the forum/atrium, etc. — confirm the real 5 with the Commander/venue).
- Each area: photos, capacity, floor type (crucial for dancers), price/inquiry, availability.
- An **organizer flow**: browse areas → request a date → accept T&C → submit → venue responds.
- Positioned as "book a spot to run your social" — the wedge that turns WeDance into infrastructure for organizers, not just dancers.
- **Fact-check before shipping** (per content rules): the real number/names of bookable areas, that the venue actually rents for events, pricing ranges. Don't publish invented specifics.

## 5. Terms, conditions & info

- **Booking T&C**: a clear agreement accepted per booking request (liability, cancellation, who WeDance is in the transaction — marketplace vs. lister). Needs a real legal pass, not AI boilerplate, before money or commitments flow. Interim: WeDance as a *connector* (no payment held) is the lowest-liability start.
- **Info pages**: a "For venues" and "For organizers — book a space" explainer, plus surfacing this on `/for-events` and the city pages.

## Sequencing (recommended)
1. **Decide the fork** — adopt unified `/@handle` profiles? (gates everything).
2. **Unify profiles**: `profiles` table + `/@handle` route + per-type layout; redirect `/u` + `/artists`; fix city-page links to `/@handle`. Reviews light up on pro profiles for free.
3. **Booking MVP**: bookable_spaces + booking_requests + T&C-accept, connector-model (no payments).
4. **Pinakothek showcase**: seed the venue + 5 areas (fact-checked), organizer request flow, "book a space" info page.
5. **Legal pass** on booking T&C before promoting it.

## Open decisions for the Commander
- **Adopt the unified `/@handle` model?** (recommended — yes.)
- Real names/count of Pinakothek bookable areas + does it actually rent for social dance?
- Booking as pure connector (no payment) first, or handle payment/deposits (much bigger + regulated)?
- Who does the T&C legal pass?
