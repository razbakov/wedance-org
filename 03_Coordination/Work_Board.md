# WeDance — Work Board

**Last updated:** 2026-04-07 02:30
**Maintained by:** Coordinator (Logbook Keeper)

> This board is the single source of truth for work status. Backlog files define *what* needs doing; this board tracks *where* each item stands.

## Rules

- **One agent, one item.** No agent works on two items simultaneously.
- **Pull, don't push.** Agents pull from Ready when dispatched — delegators approve what moves to Ready.
- **WIP limit:** max 1 item per agent in "In Progress".
- **No file conflicts.** Never dispatch two agents to modify the same files. Split work by file/directory ownership.
- **Reference the board.** Every agent dispatch references a board item — no ad-hoc tasks that bypass the backlog.

---

## Backlog

Prioritized items not yet ready to start (dependencies unmet or not yet approved).

| # | Item | Domain | Type | Assigned to | Blocked by |
|---|------|--------|------|-------------|------------|
| G-004 | Review & sign Founders Collaboration Memo v2 | Organization | Governance | Kirill | 3 clarification items (see memo review) |
| G-003 | Create privacy policy | Festival Exp. | Governance | Alex + Kirill | Scope depends on data collected at TSDF pilot |
| O-001 | Build interactive schedule MVP | Festival Exp. | Operations | Engineer | Product Lead specs + Designer wireframes (pilot festival decided: TSDF) |
| O-002 | Convert TSDF schedule | Festival Exp. | Operations | Operations Manager | MVP built (O-001) + TSDF schedule data |
| O-003 | Launch distribution for TSDF pilot | Festival Exp. | Operations | Marketing Lead | Schedule published (O-002) + community access |
| O-004 | Set up experiment analytics | Festival Exp. | Operations | Analyst + Engineer | MVP built (O-001) + Alex provides analytics infra |
| O-005 | View festival schedule (story) | Festival Exp. | Operations | Engineer | Part of O-001 |

## Ready

Dependencies met, approved by delegator, waiting for an agent to be dispatched.

| # | Item | Domain | Type | Assigned to | Approved by |
|---|------|--------|------|-------------|-------------|
| G-005 | Review & consent on: primary driver rewrite ([review](../../00_Organization_Logbook/Reviews/2026-04-04_Primary_Driver_Review.md)), governance structure, G-001, and G-002 | Organization | Governance | Kirill | Kirill feedback received 2026-04-07: broadly aligned, wants primary driver to lean toward "pre-event uncertainty and commitment" (applied). G-002 resolved (TSDF). Governance structure + policies fine in principle. |
| G-001 | Define agent deployment plan | Festival Exp. | Governance | Alex | Approved 2026-04-04 (Kirill consent pending) |

## In Progress

Actively being worked on. Max 1 item per agent.

| # | Item | Domain | Type | Agent | Started | Delegator |
|---|------|--------|------|-------|---------|-----------|
| — | — | — | — | — | — | — |

## In Review

Work delivered (PR or document), waiting for delegator review.

| # | Item | Domain | Type | Agent | PR / Deliverable | Reviewer |
|---|------|--------|------|-------|-------------------|----------|
| — | — | — | — | — | — | — |

## Done

Merged, deployed, or decision recorded.

| # | Item | Domain | Type | Completed | Notes |
|---|------|--------|------|-----------|-------|
| G-002 | Select pilot festival | Festival Exp. | Governance | 2026-04-07 | **TSDF selected.** Kirill on-site Jun 5-8. MVP must be live before Jun 5 for on-site distribution, observation, and interviews. |
| O-006 | Import Nuxt app code | Festival Exp. | Operations | 2026-04-04 | PR #23 merged |
| O-007 | Import design assets & docs | Festival Exp. | Operations | 2026-04-04 | PR #22 merged |

---

## Critical Path

```
G-002 TSDF selected ✓ — Kirill on-site Jun 5-8, MVP must be live before Jun 5
  └─► O-001 Build MVP + O-004 Set up analytics (can start now — TSDF is the target)
        └─► O-002 Convert TSDF schedule (needs MVP + TSDF schedule data)
              └─► O-003 Launch distribution at TSDF (needs schedule live)
```

**Current bottleneck:** O-001 — MVP build. G-002 is resolved (TSDF). Hard deadline: **June 5** (Kirill arrives at TSDF).

---

*Updated by Coordinator each cycle. Delegators move items to Ready. Coordinator flags stale items and dependency changes.*
