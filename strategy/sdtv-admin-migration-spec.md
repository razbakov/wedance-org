# SDTV Admin Panel — Migration Spec for Nuxt 4 Stack

Created: 2026-04-13
Author: Viktor (CTO agent)
Target: Alex (Engineering Lead)
Status: REFERENCE INVENTORY + PARITY CHECKLIST — ready for implementation

---

## Source System

| File | Lines | Role |
|------|-------|------|
| admin.html | 2747 | Admin panel UI + all JS logic |
| server.js | 2103 | Express API (36 endpoints) |
| portal.html | 2172 | Client-facing portal |
| brief.html | 611 | Editor brief page |
| promo-plan.html | 89 | Promo planning page |
| schema.js | 209 | Shared field definitions |
| app.js | 1198 | Capture form (staff filming) |
| index.html | 390 | Capture form HTML |
| style.css | 983 | Capture form styles |
| **Total** | **10,502** | |

---

## A. ROUTE INVENTORY

### Page Routes

| Route | File | Auth | Purpose |
|-------|------|------|---------|
| `/` | index.html | None | Capture form (staff filming at event) |
| `/admin` | admin.html | PIN → token | Operator admin panel |
| `/brief/:event` | brief.html | None (public) | Editor brief page |
| `/portal/:event` | portal.html | Per-event PIN | Client-facing portal |
| `/report/:event` | report.html | None | Production report |
| `/promo-plan.html` | promo-plan.html | None | Promo plan preview |

### API Routes (36 total)

#### Public (no auth)
| Method | Path | Purpose |
|--------|------|---------|
| POST | `/api/verify-pin` | Authenticate → returns admin token |
| GET | `/api/festivals` | List festivals from Airtable (cached 5min) |
| GET | `/api/captures/next-number` | Dance counter per session |
| GET | `/api/people/autocomplete?q=` | Person autocomplete |
| GET | `/api/people/search?ig=&email=&name=` | Person lookup |
| POST | `/api/captures` | Create capture + clip (rate limited) |
| POST | `/api/people/upsert` | Smart dedup upsert person |
| POST | `/api/people` | Raw person create |
| PATCH | `/api/people/:id` | Update person |
| POST | `/api/clips` | Create clip record |
| GET | `/api/file-pointer` | Camera file pointer state |
| PUT | `/api/file-pointer` | Update file pointer |
| GET | `/api/queue` | Offline queue |
| PUT | `/api/queue` | Update offline queue |
| PATCH | `/api/captures/:id/format` | Update delivery format |
| GET | `/api/brief/:event` | Brief data (captures + settings) |
| GET | `/api/portal/:event` | Portal data (PIN in header) |
| GET | `/api/promo/publish` | One-click publish from calendar |
| GET | `/api/calendar/promo.ics` | ICS calendar feed |

#### Admin-only (require X-Admin-Token)
| Method | Path | Purpose |
|--------|------|---------|
| GET | `/api/admin/brief-settings/:event` | Read brief settings |
| POST | `/api/admin/brief-settings/:event` | Save brief settings |
| GET | `/api/admin/export?event=` | Export task sheet |
| GET | `/api/admin/invoice?event=` | Calculate invoice |
| POST | `/api/admin/match` | Match dancer files to names |
| GET | `/api/admin/verify-fuzzy?event=` | Verify deliverables |
| POST | `/api/admin/ingest` | Connect deliverables to Airtable |
| POST | `/api/admin/previews` | Generate FFmpeg previews |
| GET | `/api/admin/portal-settings/:event` | Read portal config |
| POST | `/api/admin/portal-settings/:event` | Save portal config (+ Monday sync) |
| GET | `/api/admin/portal-list` | List all configured portals |
| GET | `/api/admin/dashboard` | Dashboard data (portal + Monday aggregation) |
| GET | `/api/report/:event` | Production report data |

---

## B. COMPONENT INVENTORY (for Vue migration)

### Global Components

| Component | Current Element | Purpose |
|-----------|----------------|---------|
| `AppShell` | `.shell` | Max-width container, background gradients |
| `PinScreen` | `.pin-screen` | Authentication overlay |
| `TopBar` | `.topbar` | Logo + event picker |
| `EventPicker` | `.event-picker` | Custom dropdown with status dots |
| `TabBar` | `.tabs` | 6 tabs with notification dots |
| `SummaryChips` | `.summary` | Contextual KPI chips per tab |
| `NextStep` | `.nextstep` | Gradient CTA bar with guidance |
| `ActivityLog` | `.log` | Monospace log panel |
| `StickyBar` | `.sticky-bar` | Fixed bottom: Brief, Portal, Save |
| `Toast` | `.toast` | Success notification |
| `ResultCard` | `.result-card` | Operation result summary |

### Tab Panels

| Panel | Tab | Key Sub-components |
|-------|-----|-------------------|
| `DashboardPanel` | dashboard | DashSummary, DashSection, DashItem, PortalAccessList |
| `SetupPanel` | setup | FolderInput, CloudUrlInput, ReadinessDots, EventSummary, QuickLinks |
| `ProductionPanel` | production | BriefSettings, ExportTask, InvoiceCalculator |
| `MatchingPanel` | matching | MatchPreview, VerifyFiles, FullPipeline |
| `ConnectPanel` | ingest | EditFolderConfig, PreviewGenerator, IngestConnector |
| `PortalPanel` | portal | AccessConfig, ServiceToggles, PromoConfig, SmmConfig, PromoGenerator, PackageConfig, ContractConfig, DeliverablesEditor, ContentLinksEditor, ActionsEditor, AddonsEditor, ClientInputsEditor, FestivalInfo, ContactInfo, JourneyStageSelector |

### Portal Sub-components (detailed)

| Component | Fields | Dynamic lists |
|-----------|--------|---------------|
| `AccessConfig` | pin, logo, status, festName, mondayId | — |
| `ServiceToggles` | production, promo, smm checkboxes | — |
| `PromoConfig` | plan, contentSource, start, end, used, total | promoCalendar[] |
| `PromoGenerator` | festDate, style, artists, shows, bootcamps, priceDates, checkboxes | generates → promoCalendar |
| `SmmConfig` | duration, frequency, contentSource, start, end, reports | smmKeyDates[] |
| `PackageConfig` | name, tier, includes (textarea), period, notes | — |
| `ContractConfig` | status (select), url, note | — |
| `DeliverablesEditor` | — | deliverables[] (name, status, url, note, date) |
| `ContentLinksEditor` | — | content[] (label, url, icon, sub) |
| `ActionsEditor` | — | actions[] (text, for, done) |
| `AddonsEditor` | — | addons[] (name, desc, price) |
| `ClientInputsEditor` | — | clientInputs[] (text, status, hint, uploadUrl) |
| `JourneyStageSelector` | select: 6 stages | — |
| `FestivalInfoEditor` | dates, venue, highlights, notes | — |
| `ContactEditor` | name, role, email, telegram, response | — |

---

## C. STATE MATRIX

### Application State

| State key | Type | Persisted | Location |
|-----------|------|-----------|----------|
| `st.ev` | string | localStorage | Current festival code |
| `st.dir` | string | localStorage | Local folder path |
| `st.url` | string | localStorage | Cloud base URL |
| `st.editDir` | string | localStorage | Editor output folder |
| `st.editUrl` | string | localStorage | Editor cloud URL |
| `st.prevDir` | string | localStorage | Preview output folder |
| `st.phase` | enum | localStorage (per event) | idle/setup/matched/verified/ingested |
| `activeTab` | string | localStorage (per event) | Current tab name |
| `adminToken` | string | sessionStorage | Auth token |
| `portalDirty` | boolean | runtime | Unsaved changes flag |
| `dashClientCache` | object | runtime | Dashboard data cache |
| `festivals` | array | runtime | Loaded festival list |
| `portalData` | object | runtime | Current portal settings |

### Portal Settings Data Model (→ Prisma)

```prisma
model Portal {
  id            String   @id @default(cuid())
  eventCode     String   @unique
  pin           String?
  festivalLogo  String?
  status        String   @default("active")
  festivalName  String?
  mondayItemId  String?
  journeyStage  String   @default("editing")

  // Package
  packageName     String?
  packageTier     Int?
  packageIncludes String[] // array of strings
  packagePeriod   String?
  packageNotes    String?

  // Contract
  contractStatus  String?  @default("draft")
  contractUrl     String?
  contractNote    String?

  // Services
  hasProduction   Boolean  @default(true)
  hasPromo        Boolean  @default(false)
  hasSmm          Boolean  @default(false)

  // Info
  infoDates       String?
  infoVenue       String?
  infoHighlights  String?
  infoNotes       String?

  // Contact
  contactName     String?
  contactRole     String?
  contactEmail    String?
  contactTelegram String?
  contactResponse String?

  // Relations
  deliverables    Deliverable[]
  contentLinks    ContentLink[]
  actions         PortalAction[]
  addons          PortalAddon[]
  clientInputs    ClientInput[]
  promoConfig     PromoConfig?
  smmConfig       SmmConfig?

  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}

model Deliverable {
  id          String  @id @default(cuid())
  portalId    String
  portal      Portal  @relation(fields: [portalId], references: [id])
  name        String
  status      String  @default("planned") // planned/in_progress/review/delivered/approved
  url         String?
  note        String?
  deliveredAt DateTime?
  sortOrder   Int     @default(0)
}

model ContentLink {
  id       String @id @default(cuid())
  portalId String
  portal   Portal @relation(fields: [portalId], references: [id])
  label    String
  url      String?
  icon     String @default("folder") // folder/video/photo/download
  subtitle String?
  sortOrder Int   @default(0)
}

model PortalAction {
  id       String  @id @default(cuid())
  portalId String
  portal   Portal  @relation(fields: [portalId], references: [id])
  text     String
  assignee String  @default("organizer") // organizer/sdtv
  done     Boolean @default(false)
  sortOrder Int    @default(0)
}

model PortalAddon {
  id          String @id @default(cuid())
  portalId    String
  portal      Portal @relation(fields: [portalId], references: [id])
  name        String
  description String?
  price       String?
  sortOrder   Int    @default(0)
}

model ClientInput {
  id        String @id @default(cuid())
  portalId  String
  portal    Portal @relation(fields: [portalId], references: [id])
  text      String
  status    String @default("missing") // missing/pending/received
  hint      String?
  uploadUrl String?
  sortOrder Int    @default(0)
}

model PromoConfig {
  id            String  @id @default(cuid())
  portalId      String  @unique
  portal        Portal  @relation(fields: [portalId], references: [id])
  plan          String?
  contentSource String?
  startDate     DateTime?
  endDate       DateTime?
  postsUsed     Int     @default(0)
  postsTotal    Int     @default(0)
  calendar      Json?   // PromoCalendarEntry[]
}

model SmmConfig {
  id              String @id @default(cuid())
  portalId        String @unique
  portal          Portal @relation(fields: [portalId], references: [id])
  contractMonths  Int    @default(6)
  frequency       String?
  contentSource   String?
  contractStart   DateTime?
  contractEnd     DateTime?
  keyDates        Json?  // SmmKeyDate[]
  monthlyReport   Json?  // { postsPublished, reach, engagement, reportUrl }
}

model BriefSettings {
  id              String @id @default(cuid())
  eventCode       String @unique
  rawUrl          String?
  uploadUrl       String?
  festivalLogoUrl String?
  brandingNote    String?
  updatedAt       DateTime @updatedAt
}
```

---

## D. PARITY CHECKLIST

### Flow 1: Authentication
| Item | Source behavior | Parity target |
|------|---------------|---------------|
| PIN screen overlay | Full screen, blur bg | Same |
| PIN input | Password type, center, 4-12 chars | Same |
| Shake on wrong PIN | CSS animation | Same |
| Token storage | sessionStorage | httpOnly cookie (upgrade) |
| Auto-reauth on 401 | Re-show PIN screen | Same |

### Flow 2: Dashboard
| Item | Source behavior | Parity target |
|------|---------------|---------------|
| Default when no event | Auto-shows on load | Same |
| Summary stats | 4 cards: deals, actions, waiting, portals | Same |
| Portal Access list | All portals with Copy + Edit | Same |
| 5 sections | Today, Waiting, Ready, Upcoming, Opportunity | Same |
| Collapsible sections | Click header toggle | Same |
| Dismiss items | Checkmark fades out | Same |
| Refresh + timestamp | Button + "Updated HH:MM" | Same |
| Monday data | Fetched via server, 5min cache | tRPC query, same cache |
| Calendar URL button | Copies ICS URL | Same |

### Flow 3: Setup
| Item | Source behavior | Parity target |
|------|---------------|---------------|
| Local folder input | Text + Browse button | Same |
| Cloud URL input | Text + Copy + Open | Same |
| Readiness dots | 3 dots (festival/folder/cloud) | Same |
| Event summary card | Name, prefix, captures, files | Same |
| Quick links | Monday, Notion, Airtable | Same |

### Flow 4: Production
| Item | Source behavior | Parity target |
|------|---------------|---------------|
| Brief settings | RAW url, upload url, logo, branding mode | Same |
| Open brief button | Links to /brief/:event | Same |
| Export task sheet | Generates session-grouped list | Same |
| Invoice calculator | Aftermovie + tracking extras | Same |

### Flow 5: Matching
| Item | Source behavior | Parity target |
|------|---------------|---------------|
| Preview matches | Shows rename plan | Same |
| Apply matches | Confirmation dialog | Same |
| Verify files | Fuzzy Levenshtein check | Same |
| Full pipeline | Chained match→verify→ingest | Same |

### Flow 6: Connect (Ingest)
| Item | Source behavior | Parity target |
|------|---------------|---------------|
| Editor folder config | Dir + URL inputs | Same |
| Preview generator | FFmpeg clip + thumb | Same |
| Ingest connector | Links to Airtable | Same |
| Confirmation dialogs | Warn before destructive | Same |

### Flow 7: Portal Configuration
| Item | Source behavior | Parity target |
|------|---------------|---------------|
| Access section | PIN gen, Logo, Status, Name, Monday ID | Same |
| Service toggles | Production/Promo/SMM checkboxes | Same |
| Promo config | Plan, source, dates, calendar, generator | Same |
| SMM config | Duration, frequency, key dates, reports | Same |
| Journey stage | 6-stage dropdown | Same |
| Requirements | Dynamic list + Logistics template | Same |
| Package | Name, tier, includes, period, notes | Same |
| Contract | Status dropdown, URL, note | Same |
| Deliverables | Dynamic list + Video/Video+Photo/Full presets | Same |
| Content links | Dynamic list (label, url, icon, sub) | Same |
| Next actions | Dynamic list + For Stage presets | Same |
| Add-ons | Dynamic list (name, desc, price) | Same |
| Festival info | Dates, venue, highlights, notes | Same |
| Contact | Name, role, email, telegram, response | Same |
| Templates | Video Coverage / Full Partnership | Same |
| Clone from | Pick source festival | Same |
| Auto-save | 3sec debounce + unsaved indicator | Same |
| Monday sync | On save → portal status, contract, stage | Same |
| Auto-status | URL/date → Delivered | Same |

### Flow 8: Portal (Client-facing)
| Item | Source behavior | Parity target |
|------|---------------|---------------|
| PIN auth per event | 4-digit, Apple-style dots | Same |
| RU/EN toggle | Language switcher | Same |
| All sections | Header, package, contract, deliverables, content, actions, addons, info, contact | Same |
| Journey phases | Visual phase indicators | Same |
| Promo calendar | Collapsible, by date | Same |
| SMM dashboard | Monthly report, key dates | Same |

### Flow 9: Brief Page
| Item | Source behavior | Parity target |
|------|---------------|---------------|
| Video list grouped by session | Clickable format badges | Same |
| KPI cards | Files, YT, IG, Dancers | Same |
| Branding section | SDTV + festival logos | Same |
| RU/EN toggle | Language switcher | Same |

### Flow 10: Promo Plan Page
| Item | Source behavior | Parity target |
|------|---------------|---------------|
| 4 template modes | Early/Growing/Structured/Final | Same |
| Intensity switcher | Light/Standard/Aggressive | Same |
| Operator/Client toggle | Different detail levels | Same |
| Module statuses | Active/Waiting/Conditional/N-A/Recommended | Same |
| Decision logic block | Explains why this mode | Same |
| What to publish now | 5 immediate next actions | Same |
| Coverage gaps | SDTV recommendations | Same |
| Collapsible sections | 7 sections | Same |

---

## E. tRPC ROUTER MAP

```
admin/
  verifyPin          - POST - pin → token
  dashboard          - GET  - aggregated cross-portal data
  
portal/
  list               - GET  - all portals summary
  get                - GET  - single portal config (admin)
  save               - POST - save portal (+ Monday sync + logo pass)
  getPublic          - GET  - portal data for client (PIN auth)
  
brief/
  getSettings        - GET  - brief settings for event
  saveSettings       - POST - save brief settings
  getData            - GET  - brief page data (captures + clips)
  
production/
  export             - GET  - task sheet
  invoice            - GET  - invoice calculation
  match              - POST - file matching
  verifyFuzzy        - GET  - deliverable verification
  ingest             - POST - connect to Airtable
  previews           - POST - generate FFmpeg previews
  
capture/
  create             - POST - save capture + auto-clip
  updateFormat       - PATCH - delivery format toggle
  
people/
  autocomplete       - GET  - search by partial
  search             - GET  - lookup by ig/email/name
  upsert             - POST - smart dedup create/update

festival/
  list               - GET  - from Airtable (cached)
  
calendar/
  ics                - GET  - ICS feed (public)
  publish            - GET  - one-click status update

filePointer/
  get                - GET
  update             - PUT
```

---

## F. MIGRATION PRIORITY ORDER

| Priority | Flow | Why first |
|----------|------|-----------|
| 1 | Authentication | Gate for everything |
| 2 | Dashboard | Default landing, proves Monday integration |
| 3 | Portal Configuration | Most complex, most fields, most business logic |
| 4 | Portal (client-facing) | Client-visible, high stakes |
| 5 | Setup | Simple, quick win |
| 6 | Production (brief) | Content workflow |
| 7 | Matching + Connect | File operations (may need Node.js adapter) |
| 8 | Capture form | Separate concern, can stay Express longer |
| 9 | Promo Plan | Standalone page, low coupling |

### File Operations Note

Matching, Verify, Ingest, and Preview all require **local filesystem access** (reading directories, renaming files, running FFmpeg). This is fundamentally incompatible with Vercel serverless.

Options:
1. Keep these operations in a separate local Node.js service
2. Move to a worker/background job system
3. Accept these run only in development/local mode

Alex should decide on this before implementation.

---

## G. WHAT STAYS vs WHAT MIGRATES

| Component | Migrates to Nuxt | Stays as-is | Why |
|-----------|-------------------|-------------|-----|
| Dashboard | Yes | — | Pure API, no filesystem |
| Portal config | Yes | — | Pure API, database |
| Portal (client) | Yes | — | SSR benefit |
| Brief page | Yes | — | SSR benefit |
| Promo plan | Yes | — | Static page |
| Setup tab | Partial | — | Dir path = local concept |
| Match/Verify/Ingest | No | Local tool | Filesystem + FFmpeg |
| Capture form | Later | Express for now | Event-day tool, works |
| ICS calendar | Yes | — | Simple generation |
| Monday integration | Yes | — | API calls |

---

## H. ESTIMATED EFFORT

| Phase | Effort | Output |
|-------|--------|--------|
| Prisma schema + migrations | 2-3 hours | Database ready |
| tRPC routers (all endpoints) | 1-2 days | API layer |
| Vue components (40-60) | 3-5 days | UI layer |
| Portal client page (SSR) | 1 day | Client-facing |
| Brief page (SSR) | 0.5 day | Editor-facing |
| Promo plan page | 0.5 day | Standalone |
| Monday integration | 0.5 day | Dashboard + sync |
| ICS calendar | 2 hours | Feed endpoint |
| Parity testing | 1-2 days | Verification |
| **Total** | **8-12 days** | **Full migration** |

---

## I. FOR ALEX — Getting Started

1. **Read this spec** — it's the complete map
2. **Start with Prisma schema** — copy from section C, run `npx prisma migrate dev`
3. **Build tRPC routers** — section E has the full map
4. **Migrate by flow** — section F has the priority order
5. **Skip filesystem operations** — Match/Verify/Ingest stay local for now
6. **Use the current admin at localhost:8000** as live reference for parity comparison
7. **Screenshot both versions** at each checkpoint

The current admin panel is a working product with real users. The goal is not to improve it — the goal is to recreate it faithfully in the correct architecture, then improve in a separate pass.
