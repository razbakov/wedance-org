---
title: WeDance 2026 — New-user personas, onboarding & per-persona newsletters
date: 2026-07-04
author: Forge
status: proposal
---

# New-user personas, onboarding & newsletters (WeDance 2026)

Written 2026-07-04, after: fast-register shipped (name/email/password only), email+password auth live in prod, Resend wired (`wedance.vip` verified), forgot-password via magic link live. The deferred onboarding fields (styles/role/city) are the hook this proposal builds on.

## The spine: my-plan is the retention engine

`/my-plan` is a **planning cascade** — big motivates small:

> **Year** (festivals) → **Month** (courses) → **Week** (socials) → **Tonight** (hangouts)

Onboarding's only job: get each new user to *their* entry point in that cascade, populate at least one layer, and hand them my-plan as home — **never an empty dashboard.** Registration is now deliberately fast (name/email/password) precisely so the *meaningful* collection happens in onboarding, routed by persona.

## The one question that routes everything

Right after register, ask a single intent question:

> **"What brings you to WeDance?"**
> 💃 Dance socially · ✈️ Travel to festivals · 🎓 Learn a dance · 🎧 Perform / DJ · 📣 Run events

That one choice branches onboarding: it collects only that persona's fields, seeds the matching my-plan layer, subscribes them to the matching newsletter, and lands them somewhere already filled in.

## The personas

| # | Persona | Core need | Onboarding collects | my-plan layer seeded | Landing |
|---|---|---|---|---|---|
| 1 | **Local Social Dancer** (core, highest volume) | "Where do I dance this week?" | City + styles + role | **Week / Tonight** — this week's socials in their city | my-plan, week pre-populated |
| 2 | **Festival Traveler** | "Which festivals this year?" | Styles + role + travel radius | **Year** — my-year festival picks, early-bird deadlines, friends-going | my-year |
| 3 | **Learner / Beginner** | "I want to start / improve" | `find-your-dance` quiz → style + level | **Month** — courses/classes for their level | find-your-dance → my-plan |
| 4 | **Organizer / Teacher** (supply side) | "I run socials/classes, I want dancers" | Claim/create organizer profile + list one weekly event | (their own reach dashboard, not the cascade) | organizer profile |
| 5 | **Performer / Artist** (DJ, musician, act) | "Book me / find gigs" | Artist profile + styles + availability | (gig board) | artist profile |
| 6 | **Video Competitor / Creator** (new, from the cities video feature) | "Get my dancing seen / win" | Overlaps #1; enters via the vote/submit hook | — | city page / spotlight |

Personas are not exclusive — a social dancer who also travels holds #1 **and** #2. Onboarding picks a primary; the rest are discoverable later.

## How my-plan gets discovered (the actual ask)

Don't make them "find" my-plan — **onboarding ends on my-plan with their layer already populated.** A social dancer finishing onboarding sees this week's socials in their city already listed. First-run my-plan carries a one-line "this is your home — come back weekly." Post-onboarding email #1 links straight back to my-plan. Discovery = the payoff of the intent question, not a menu item they stumble on.

## Profiles

Every persona gets a public **profile** (dancer by default; organizer/artist get richer ones). Profiles are load-bearing for the social layer already in the product — my-year's "friends going" and the roster features only work if profiles are public and populated. Onboarding creates the profile as a byproduct of the fields it collects.

## Per-persona newsletters (Resend, now wired)

One Resend audience/segment per persona; a user can hold several. Each newsletter is the weekly (or event-driven) pull back to my-plan.

| Persona | Newsletter | Cadence | Content |
|---|---|---|---|
| Social Dancer | **Your Week on the Floor** | Weekly | Socials near you this week + tonight's hangouts |
| Festival Traveler | **The Festival Radar** | Event-driven | Early-bird deadlines, new festivals in your styles, who's going |
| Learner | **Level Up** | Weekly | Courses starting, teacher tips, beginner-friendly socials |
| Organizer | **Organizer Brief** | Weekly | Your event views, tips to fill the floor, featured-listing / giveaway offers |
| Performer | **Gig Board** | Event-driven | Open gigs, festival calls, booking leads |
| Video Competitor | **Spotlight** | Monthly + event | Competition standings, "your video is climbing", monthly winners |

The **Organizer Brief** is where this connects to money: it's the natural home for the giveaway/lottery ad product (organizers sponsor a giveaway → featured in the Social Dancer newsletter). Newsletters are the re-engagement loop; Resend being live is what makes them possible now.

## Sequencing (suggested)

1. **Onboarding intent-picker + field collection per persona** (unblocks everything; the register trim already prepared for it).
2. **my-plan seeding on onboarding completion** (the "never empty" payoff).
3. **Resend audiences + welcome email #1 → my-plan** (activation).
4. **Weekly newsletter automations per segment** (retention).
5. Organizer/Artist supply-side onboarding branches (can lag the demand-side personas).

Blocked-by / related: existing v4 users don't yet exist in 2026's DB — see razbakov/wedance-2026#42 (user migration). New signups flow through this proposal regardless.
