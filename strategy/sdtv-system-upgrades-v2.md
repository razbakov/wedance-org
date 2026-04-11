# SDTV System Upgrades v2 — Business Logic & Automation Spec

Created: 2026-04-11
Status: ITEMS 1-4 IMPLEMENTED (2026-04-11) — items 5-6 pending (strategy/content work)
Source: founder voice notes + structured TZ

---

## Overview

7 system upgrades targeting: reduced manual work, eliminated data duplication, correct business logic in automation, new service offering, and SMM scalability for a 2-person team.

**System principle:** data enters once, reuses everywhere. Roles (artist/dancer/organizer) are distinguished correctly. Portal, CRM, Airtable, Dropbox, and production flow are connected.

---

## 1. Artist Exclusion from Video Sale Emails

**Priority:** Critical
**Owner:** Viktor (implementation) + Kai (CRM data hygiene)
**Affects:** Airtable email automation, form v3 email logic

### Business Rule

Artists don't buy videos. Their model is promo/visibility, not video purchases.

| Dance participants | Email sent to |
|--------------------|---------------|
| 2 non-artists | Both get email |
| 1 artist + 1 non-artist | Only non-artist gets email |
| 2 artists | No email sent |

### Requirements

- [x] Airtable People table already has `Contact Type` field (`'Artist' | ''`)
- [x] Video Ready Alert and Delivery Email endpoints check Contact Type before sending
- [x] Logic applies at email formation time via `isPersonArtist(email)` helper
- [x] Works for both new and existing records
- [x] Artist exclusion also applied to archive offer endpoint

### Implementation (2026-04-11)

**Branch:** `feat/artist-email-exclusion` (ikigai repo)

Contact Type field already existed in People table. Added `isPersonArtist(email)` helper that queries Airtable People by email, checks Contact Type = 'Artist'. Applied to:
- `POST /api/send-video-ready-alert`
- `POST /api/send-delivery-email`
- `POST /api/send-archive-offer` (new)

Response includes `{ skipped: true, reason: 'artist' }` when skipped.

**User clarification:** Artists are marked manually in Airtable after filming (Contact Type = 'Artist'). If field is empty, treated as non-artist (safe default).

### Why This Matters

- Sending purchase emails to artists = wrong business signal, damages relationship
- Artists are potential promo clients — treating them as video buyers undermines positioning
- System must reflect actual SDTV business model

---

## 2. Archive Video Sales (Legacy Content Monetization)

**Priority:** This Week
**Owner:** Marco (commercial logic) + Viktor (implementation)
**Affects:** Airtable, email campaigns, pricing

### Concept

Large archive of filmed dancers from past events. After organizing lists and uploading to Dropbox, send targeted offers at discounted price.

### Pricing

- Archive video price: **configurable, default EUR 25 per person** (vs. standard €70-100 for current videos)
- Price is NOT hardcoded — passed per-request to allow testing different price points
- Final price TBD — user still deciding between €25 and market rate

### Implementation (2026-04-11)

**Branch:** `feat/archive-video-sales` (ikigai repo)

- [x] `sendArchiveOfferEmail()` — warm/nostalgic tone ("We found your dance"), gold accent, memory-focused
- [x] `POST /api/send-archive-offer` — accepts email, dancerName, festival, year, price, currency, captureId
- [x] Artist exclusion built in
- [x] Price configurable per request (default 25 EUR)

**Email tone:** "We found your dance" — not pushy, not a sales blast. Framed as preserving a memory. Gold accent (archive special), not red (urgency). Subject: "We found your dance — {festival} ({year})".

**User clarification:** These people will receive notification about their video years after filming — must not look ridiculous. Language of benefit, not of selling. Price is cheap vs market, positioning it as a gift/memory preservation.

### Remaining for Archive

- [ ] Airtable: field or tag to mark records as `archive` / `legacy`
- [ ] Workflow tool: bulk import old lists into Airtable
- [ ] Stripe payment link or in-app purchase at archive price
- [ ] Decide final price point

### Why This Matters

- Already-shot content sitting idle = unrealized revenue
- Different communication needed (nostalgia angle, not urgency)
- Must be a managed process, not ad hoc manual emails

---

## 3. Auto-Pass Festival Logo to Editor Brief

**Priority:** Today
**Owner:** Viktor
**Affects:** Portal → Brief data flow

### Current State

- Portal (`portal.html`) displays festival logo — configured in admin Portal tab
- Brief (`brief.html`) has a "Branding" section showing SDTV logo + festival logo
- Brief settings (`.brief-settings.json`) store `festivalLogoUrl` per event
- Portal settings (`.portal-settings.json`) store festival logo per event

**These are currently two separate data stores.**

### Requirement

When festival logo is uploaded/set in Portal config → it automatically appears in Brief without manual re-entry.

Single source of truth: **Portal is the source.** Brief reads from it.

### Implementation

- [ ] Brief API (`GET /api/brief/:event`) should read festival logo from portal settings if not set in brief settings
- [ ] Or: when portal settings are saved with a logo, auto-copy to brief settings
- [ ] Brief page should show the logo from portal as fallback
- [ ] No manual logo transfer needed

### Implementation (2026-04-11)

**Branch:** `feat/logo-auto-pass` (sdtv-capture repo)

Two-way sync:
1. `POST /api/admin/portal-settings/:event` — when portal logo is saved, auto-writes to brief settings
2. `GET /api/admin/brief-settings/:event` — if no `festivalLogoUrl`, falls back to portal `festivalLogo`

### Why This Matters

- Eliminates duplicate data entry
- Prevents wrong/old logo going to editor
- Principle: enter once, use everywhere

---

## 4. Portal at Deal/Contract Stage (Pre-Production Portal)

**Priority:** This Week
**Owner:** Viktor (implementation) + Marco (deal flow logic)
**Affects:** Portal architecture, deal lifecycle, CRM

### Current State

Portal exists (`/portal/{event}`) with full UI: package, contract, deliverables, content library, next actions, add-ons, festival info, contact. But currently designed for production/delivery phase.

### New Requirement

Portal should be created and shared with festival **at contract signing stage**, not just production.

### What the Pre-Production Portal Needs

| Section | Pre-event content |
|---------|-------------------|
| Objectives | Project goals, agreed scope |
| Deliverables / Scope | What's included in the deal |
| Gala/coverage points | Key moments to cover (if applicable) |
| Contract | Status, link to contract document |
| Our requirements | Flight, accommodation, on-site needs |
| Document upload | Festival uploads: tickets, confirmations, logistics docs |
| Festival info | Dates, venue, highlights |
| Contact | Organizer contact details |

### Pre-Event Promo Phase

Sometimes SDTV does pre-festival promo before physically arriving. Portal may be needed for:
- Promo coordination
- Asset collection (logos, lineups, key messages)
- Content approval workflow
- Timeline alignment

### Requirements

- [ ] Define at which deal status portal auto-creates (suggestion: `CONTRACT` stage in deal lifecycle)
- [ ] Portal sections should have phases: `pre-event` | `on-site` | `post-event`
- [ ] Pre-event sections: objectives, scope, contract, logistics/requirements, document uploads
- [ ] On-site sections: deliverables progress, content library (added during/after event)
- [ ] Keep it simple for the client — one portal, sections appear as relevant
- [ ] Portal admin tab already has all these fields — may just need phase/visibility logic

### Implementation Notes

Current portal already has:
- Package card (scope) — exists
- Contract section — exists
- Deliverables — exists
- Content Library — exists
- Next Actions — exists
- Festival Info — exists
- Contact — exists

### Implementation (2026-04-11)

**Branch:** `feat/pre-production-portal` (sdtv-capture repo)

- [x] Journey Stage selector in admin (agreement → pre_production → coverage → editing → post_event → complete)
- [x] Client Inputs / Requirements section in admin with dynamic rows (text, status, hint, uploadUrl)
- [x] Quick "Logistics" template button pre-fills 5 standard items (flight, accommodation, schedule, lineup, venue map)
- [x] Portal already rendered these sections — admin UI was the missing piece

**Remaining:**
- [ ] Auto-creation trigger tied to deal stage in CRM
- [ ] Phase-based visibility (show/hide sections by stage)
- [ ] Document upload capability (currently links only)

### Why This Matters

- All logistics in one place, not scattered in chat
- Festival understands SDTV needs before event
- Reduces last-minute chaos
- Supports pre-event promo workflow

---

## 5. Artist Management as a Service

**Priority:** This Week (design) → Backlog (implementation)
**Owner:** Marco (strategy) + Luna (content playbooks)
**Affects:** Service menu, pricing, CRM, portal

### Concept

New service offering: SDTV manages artist promo activities on behalf of the festival.

Not just filming artists — **actively directing artists' promotional output** to benefit the festival's reach and ticket sales.

### What This Means in Practice

SDTV creates structured tasks for artists:
- Publish specific content (stories, posts, reels)
- Support festival promo campaign
- Amplify reach through their own audience
- Follow a content calendar aligned with festival goals
- All framed in terms of value to the organizer

### Requirements

- [ ] Define as a named service in the SDTV menu (e.g., "Artist Activation" or "Artist Management")
- [ ] Create artist task playbook/templates (pre-event, during, post-event)
- [ ] Show in client portal as an available add-on or package component
- [ ] Track in CRM as a deliverable
- [ ] Pricing model: part of Tier 3 package, or separate add-on

### Strategic Value

- Strengthens SDTV as media partner, not just video crew
- Justifies higher pricing (Tier 3 / custom packages)
- Leverages existing artist relationships
- Unique offering — competitors don't do this

### Deliverable for Now

Marco: draft service description + pricing logic + where it fits in tier structure
Luna: draft artist task playbook templates (3-5 standard tasks per phase)

---

## 6. SMM/Promo Standardization & Automation

**Priority:** This Week
**Owner:** Luna (content system) + Maya (ops)
**Affects:** Content workflow, templates, AI assistance

### Context

2-person team wants to take on bigger SMM/promo blocks. Only viable if work is standardized and requires minimal time from SMM manager.

Goal: SMM manager focuses on **creative work and strategy**, not repetitive tasks.

### Recurring Tasks That Need Templates/System

| Task | Frequency | Phase |
|------|-----------|-------|
| Video captions | Per video | Post-event |
| Story captions | Per story | All phases |
| Festival promo / warmup | Campaign | Pre-event |
| Live event communication | During event | On-site |
| Audience interactions | Regular | All phases |
| Story polls | Regular | All phases |
| Reactive content | Situational | On-site |
| Page activity maintenance | Ongoing | Between events |

### Requirements

- [ ] Unified content system, not scattered ad hoc actions
- [ ] Template library by scenario (pre-event, on-site, post-event, between events)
- [ ] Quick-draft capability (input: context → output: first draft caption/text)
- [ ] Phase-based content calendar template per festival
- [ ] Poll/interaction templates for stories
- [ ] Standard formats for each content type

### AI Assistance (Current Scope)

Realistic now:
- Caption generation (video, story, post)
- Poll text generation
- Promo text variations
- Content calendar drafts
- Hashtag sets by event/style

Future (not ready to rely on):
- Best dance moment selection from video
- Auto-editing / rough cut assistance
- Content sorting / categorization

### Deliverable for Now

Luna: create SMM playbook with:
1. Template set by phase (pre/during/post/between)
2. Caption formula for each content type
3. Story poll bank (10+ reusable templates)
4. Promo warmup sequence template (7-day countdown)
5. Quick-draft prompt templates (for AI-assisted generation)

---

## 7. System Integration Principle

**Cross-cutting requirement across all items above.**

### Data Flow Map (Target State)

```
Deal closed → Portal created (auto)
                 ↓
Portal logo → Brief logo (auto)
Portal scope → Brief KPIs (auto)
                 ↓
Production → Clips in Airtable
                 ↓
Clip ready → Check participant roles → Send email (filtered)
                 ↓
Archive flag → Separate campaign → Archive price (EUR 25)
```

### Single Source of Truth Rules

| Data | Source | Consumers |
|------|--------|-----------|
| Festival logo | Portal settings | Brief, emails, deliverables |
| Participant role (Artist/Dancer) | Airtable People table | Email logic, CRM, reports |
| Deal stage | Monday.com (or CRM) | Portal creation trigger |
| Scope / deliverables | Portal (set at contract) | Brief, production tracking |
| Video clips + status | Airtable Clips table | Email triggers, delivery page, archive |

---

## Priority & Sequence

| # | Item | Status | Branch |
|---|------|--------|--------|
| 3 | Logo auto-pass to brief | DONE | `feat/logo-auto-pass` (sdtv-capture) |
| 1 | Artist email exclusion | DONE | `feat/artist-email-exclusion` (ikigai) |
| 4 | Portal at deal stage | DONE (admin UI) | `feat/pre-production-portal` (sdtv-capture) |
| 2 | Archive video sales | DONE (email + endpoint) | `feat/archive-video-sales` (ikigai) |
| 6 | SMM standardization | Pending | Content work for Luna |
| 5 | Artist management service | Pending | Strategy work for Marco |
| 7 | System integration | Ongoing | Guiding principle |

### What Was Done (2026-04-11)

All 4 code items implemented on separate branches:
- **sdtv-capture** (C:\tmp\sdtv-capture): 2 branches, no remote yet
- **ikigai** (sdtv-form-v3): 2 branches, can create PRs

### What Still Needs

- Merge branches (after review) or create PRs
- sdtv-capture needs a remote to create PRs
- Items 5 & 6 are strategy/content work, not code
