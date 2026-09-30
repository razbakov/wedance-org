---
date: 2026-09-30
time: "10:00–10:15"
type: daily-standup
participants:
  - Aleksey Razbakov
  - Tobilobaeleto (Tobin) — facilitator
  - Mezieuzor Amadike
location: online
language: en
wispr_meeting_id: dd46131d-fd6f-4b4b-875a-b448cc7b81d0
source: https://notes.wisprflow.ai/shared/B8rRSlXEiosEDSQVrv7ArGMJNWP_Ij_W6MwYFgtuzNI
---

# WeDance Dev Daily — 2026-09-30

## Summary

Tobin and Mezie spent the previous day triaging backlog issues toward what they understood as this week's goal (Stripe/payment) and moving them to To Do. Alex reset the priority: **registration and the full user flow, not payment**. The weekly goal is **one issue fully deployed and verified**, not many in flight. The team's current job is monitoring agents and escalating stuck issues — not doing engineering.

## Decisions

1. **Registration + full user flow > Stripe/payment.** Schools may take cash in class; what matters is that a visitor can sign up and the data persists. Target use case: replace the WhatsApp-group poll for Alex's classes with a WeDance sign-up link.
2. **All three journeys must complete end-to-end** — student, organizer, teacher — with sign-up data captured and persisted.
3. **Weekly goal = one issue deployed and verified**, described concretely (e.g. "forgot password works: click sign in → forgot password → email → link → new password → log in with new password").
4. **Tobin and Mezie each take a different issue** — no pairing on the same one.
5. **Their role right now is monitoring, not engineering**: watch what agents say, check PR previews, escalate issues that don't move. Deeper technical work comes later; access needs to be worked out.

## Action items

- [ ] **Mezie** — pick one In Progress issue and drive it to a working deployment visible on the site.
- [ ] **Mezie** — check PR previews for issues moved to In Progress.
- [ ] **Mezie** — flag any non-moving issue to Alex for joint diagnosis.
- [ ] **Tobin** — start from Done: verify on the site that each is actually deployed and working.
- [ ] **Tobin** — review In Progress issues, find why they're stuck, send Alex a summary.
- [ ] **Tobin** — take one concrete issue (e.g. forgot password) end-to-end.
- [ ] **Alex** — make the agent ↔ team interaction work (automation, fixing bad agent output); figure out what access Tobin/Mezie need.

## Observations

- The team is steering a system they have little visibility into ("trying to control the system that you don't have access to"). Changelog, deployment status and PR previews are what Alex wants surfaced — none were reported at this standup.
- The "this week = payment/Stripe" goal the team was working to conflicts with Alex's stated priority — the weekly goal was either miscommunicated or stale.

No Linear issues filed: all action items are owned by named humans on the team.
