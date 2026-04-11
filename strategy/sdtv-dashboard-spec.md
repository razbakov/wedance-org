# SDTV Operator Dashboard — Architecture Spec

Created: 2026-04-11
Status: SPEC + IMPLEMENTATION PLAN
Role: Senior Product Architect review

---

## Placement

Dashboard becomes the **default view when no event is selected**. Currently the admin panel requires choosing a festival first — the dashboard fills that empty state with cross-portal operational clarity.

```
Admin Panel Layout:
  [Dashboard] [Setup] [Production] [Matching] [Connect] [Portal]
       ^          ^--- these 5 require a selected event
       |
       always available, default on load
```

When an event is selected, all tabs work as before. Dashboard tab stays accessible — operator can switch back anytime.

---

## Data Sources

| Source | What it provides | How accessed |
|--------|-----------------|--------------|
| `.portal-settings.json` | All portal configs: deliverables, actions, clientInputs, journeyStage, contract | Local file read |
| Monday Festivals board (2100691680) | Stage, Waiting On, Next Follow-up, Portal Status, Intent, Package, Travel, Contract, Deal Value, Last Contact | Monday API |
| Monday Orders board (2101965416) | Order status, Phase, Deadline, Next Follow-up | Monday API |

### Monday Column Map (for implementation)

**Festivals board:**
| Column | ID | Values |
|--------|-----|--------|
| Stage | `color_mm16np4m` | Contacted, Replied/Qualified, Offer Sent, Confirmed, Delivered/Renewal, Lost |
| Waiting On | `color_mm16y0x9` | Reply, Approval, Dates, Contract, Invoice |
| Next Follow-up | `date_mm163f1s` | date |
| Portal Status | `color_mm19dd7k` | Not Created, Setup, Live, Delivered |
| Intent | `color_mm16g3rm` | Production, Distribution, Core |
| Package | `color_mm1g3efr` | Full Partnership, Combo, Coverage, Promo Only, Custom |
| Travel Locked | `boolean_mm16x3zk` | checkbox |
| Contract confirmed | `boolean_mm1h4xpf` | checkbox |
| Last Contact | `date_mm1hk0cn` | date |
| Deal Value | `numeric_mm1hy01d` | number |
| Timeline | `timerange_mktw1pv4` | date range |

**Orders board:**
| Column | ID | Values |
|--------|-----|--------|
| Status | `color_mktwjha9` | Pending Details, In progress, Planned, Delivered, Canceled |
| Phase | `color_mkzve45j` | Pre, During, Post, Season |
| Deadline | `date_mm16jdd1` | date |
| Next Follow-up | `date_mm16g6af` | date |

---

## Dashboard Sections

### 1. TODAY — "What needs my action right now"

Items where operator must act today or is overdue.

**Sourced from:**
- Monday: Next Follow-up = today or past (both boards)
- Portal: deliverables with status `in_progress` or `review`
- Portal: actions where `for: 'sdtv'` and `done: false`
- Monday: Waiting On = anything (means ball is moving, may need push)

**Item format:**
```
[Festival name]  [Action badge]  [Why now chip]
Brief context line
[Primary CTA button]
```

### 2. WAITING ON CLIENT — "Blocked by them, not me"

Items where the client has the ball.

**Sourced from:**
- Monday: Waiting On field (Reply, Approval, Dates, Contract, Invoice)
- Portal: clientInputs with status `missing` or `pending`
- Portal: actions where `for: 'organizer'` and `done: false`
- Portal: contract status = `pending`

### 3. READY TO SEND — "Communication-ready items"

Things prepared and waiting to be sent/delivered.

**Sourced from:**
- Portal: deliverables with status `delivered` but no deliveredAt date (ready but not communicated)
- Portal: journeyStage changed → may need client notification
- Monday: Portal Status = Setup (portal ready to share with client)

### 4. UPCOMING — "Matters this week"

Deadlines and events approaching.

**Sourced from:**
- Monday: Timeline dates within 14 days (festival approaching)
- Monday: Next Follow-up within 7 days
- Monday: Orders with Deadline within 7 days
- Portal: deliverables still `planned` for events happening soon

### 5. OPPORTUNITY — "Logical next steps"

Soft signals for growth — not salesy, just useful.

**Sourced from:**
- Monday: Intent = Production but no Distribution (upsell opportunity)
- Monday: Stage = Confirmed but Portal Status = Not Created (should create portal)
- Monday: Contract confirmed but Travel not locked (logistics gap)
- Monday: Stage = Delivered/Renewal (renewal window)
- Monday: Last Contact > 30 days ago for active pipeline (re-engagement)

---

## API Design

### `GET /api/admin/dashboard`

Server-side endpoint that:
1. Reads all portal settings from `.portal-settings.json`
2. Fetches active festivals from Monday (Stage != Lost, not in Archive group)
3. Fetches active orders from Monday
4. Computes dashboard sections
5. Returns structured JSON

Response shape:
```json
{
  "today": [{ "festival": "MAM26", "title": "...", "reason": "...", "cta": "...", "mondayUrl": "..." }],
  "waiting": [...],
  "ready": [...],
  "upcoming": [...],
  "opportunity": [...],
  "summary": { "activeDeals": 5, "totalValue": 12000, "portalsLive": 3 }
}
```

### Monday Integration Pattern

**V1: Read-only pull.** Server fetches from Monday API on dashboard load. Cached 5 minutes. No webhooks, no write-back in V1.

**Future V2 events (portal → Monday):**
- Portal status changed → update Monday Portal Status
- Deliverable marked delivered → update Monday order status
- Contract signed in portal → check Monday checkbox

These are deferred. V1 is read-only aggregation.

---

## Visual Design

Same design language as existing admin panel:
- Navy-blue surface system (`--bg: #080c18`, `--s1`, `--s2`, `--s3`)
- Inter font, same weight hierarchy
- Same card/glass styling
- Same badge/chip patterns from portal

Dashboard-specific elements:
- Section headers with count badges (e.g., "TODAY (3)")
- Compact item rows (not cards — too heavy for a list)
- Color-coded left border per section (amber=today, blue=waiting, green=ready, purple=upcoming, cyan=opportunity)
- Festival name as monospace code tag (like event picker)
- Single CTA button per item, right-aligned
- Expandable detail only for items that need it

---

## Implementation Plan

### Phase 1 — Static dashboard from portal data only (no Monday)
1. Add Dashboard tab to admin.html
2. Add `/api/admin/dashboard` endpoint reading from portal settings
3. Render 5 sections from portal data
4. Works immediately, no external dependencies

### Phase 2 — Monday integration
1. Add Monday API proxy to server.js
2. Merge Monday data into dashboard sections
3. Cache with 5-min TTL
4. Add Monday links to items

### Phase 3 — Portal → Monday sync (deferred)
1. Event-based updates on portal save
2. Status propagation

---

## Success Criteria

- Operator opens admin → sees what matters today in < 3 seconds
- No need to click through each portal to find pending work
- Monday deadlines surface without opening Monday
- Dashboard feels like it was always part of the admin panel
- Zero additional configuration needed — it just works from existing data
