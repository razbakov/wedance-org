# SDTV Admin Panel & Brief — Current State

last_updated: 2026-04-20

## Project Location
- **Code (NEW):** `C:\Users\ASUS\Orgs\sdtv\legacy\studio\` — renamed from `capture/` on 2026-04-20
- **Previous:** `C:\tmp\sdtv-capture\` (source preserved until migration verified)
- **Parent repo:** `~/Orgs/sdtv` (Nuxt 4 target) — `legacy/` excluded via .gitignore
- **GitHub:** `SocialDanceTV/sdtv-studio` (renamed from `sdtv-capture` on 2026-04-20)
- **Own git:** preserved in `legacy/studio/.git`, active branch `feat/resend-migration`
- **Last commit:** `905f020` (feat: migrate email stack from Gmail SMTP to Resend)
- **Server:** `node server.js` with envs `AIRTABLE_TOKEN`, `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_REPLY_TO`, port 8000
- **Deployment:** Railway, from legacy/studio repo (independent)

## Email Stack (as of 2026-04-20)
- **Provider:** Resend via custom domain `socialdancetv.com`
- **Default from:** `"SDTV Production" <pr@socialdancetv.com>` (internal)
- **Default from (form-v3):** `"Social Dance TV" <pr@socialdancetv.com>` (clients)
- **Reply-to:** `pr@socialdancetv.com`
- **Helper:** `lib/email.js` — single `sendEmail({to, subject, html})` entrypoint
- **Open PRs:** sdtv-studio#3 (editor), sdtv form-v3 PR pending (history mismatch issue)

## Architecture Decision (2026-04-20, founder override of PDF)

**Hybrid stack approved by Kirill:**
- Airtable = system-of-record (staff + wife edit in Airtable UI)
- PostgreSQL + Prisma = read-through cache (in Nuxt 4)
- tRPC procedures wrap Airtable + cache layer
- Expected ~90% reduction in Airtable API calls

**Sync:** hybrid webhooks (hot tables) + polling 10min (cold tables) — pending Alex confirmation
**Writes:** write-through (API → Airtable → invalidate cache)

## Pages

7 HTML pages (was 5 in previous state):

## Pages
- `/` — Capture form (staff mode for filming)
- `/admin` — Operations panel (PIN: `sdtv2026`)
- `/brief/{event}` — Editor brief page (e.g. `/brief/MAM26`)
- `/portal/{event}` — Client portal for festival organizers (per-festival PIN)

## Admin Panel (`admin.html`)
- 5 tabs: Setup → Production → Matching → Connect → Portal
- PIN auth (sessionStorage), localStorage save/restore
- Contextual summary chips per tab
- Next step guidance bar
- Result cards above activity log
- Shimmer loading on buttons
- All paths saved between sessions (festival, folders, URLs)

### Tab: Setup
- Local folder (raw files) + Browse button
- Cloud base URL + Copy/Open
- Readiness dots (Festival/Folder/Cloud)
- Event summary card (right column)
- Quick links: Monday, Notion, Airtable

### Tab: Production
- Editor Brief Settings (RAW link, upload link, festival logo URL, branding mode)
- "Open brief page" button → `/brief/{event}`
- Export task sheet → `/api/admin/export`
- Calculate invoice → `/api/admin/invoice` (aftermovie, tracking, animation extras)

### Tab: Matching
- Match dancer names → `/api/admin/match` (preview + apply with confirm)
- Verify deliverables → `/api/admin/verify-fuzzy` (with Levenshtein fuzzy matching)
- Session-aware sorting: Thursday→Friday→Saturday→Sunday

### Tab: Connect
- Separate fields: editor output folder + cloud URL for finished videos
- Generate previews → `/api/admin/previews` (FFmpeg: 10s clip + thumbnail)
- Connect deliverables → `/api/admin/ingest` (write URLs to Airtable Clips table)

### Tab: Portal (NEW)
- Full portal configuration per festival
- Access: PIN, festival logo, status, name override
- Package: name, tier, included items, period, notes
- Contract: status (draft/pending/signed), URL, note
- Deliverables: dynamic list with name/status/URL/note
- Content links: dynamic list with label/URL/icon/subtitle
- Next actions: dynamic list with text/owner(organizer|sdtv)/done
- Add-ons: dynamic list with name/description/price
- Festival info: dates, venue, highlights, notes
- Contact: name, role, email, telegram, response time
- Save/load via `/api/admin/portal-settings/:event`

## Client Portal (`portal.html`)
- Premium dark UI with warm gold (#C8A97E) accent
- PIN entry screen (Apple-style with animated dots)
- Per-festival PIN authentication (not shared with admin)
- RU/EN language toggle
- Sections:
  1. Header — dual logos (festival + SDTV), name, dates, venue, status badge
  2. Welcome message
  3. Package card — tier badge, checklist of included items, period
  4. Contract — status icon, signed/pending/draft, link
  5. Deliverables — progress bar (green/blue), grid of cards with status badges
  6. Content Library — typed icons (video/photo/folder/download), arrow links
  7. Next Actions — organizer vs SDTV tags, done/pending states
  8. Add-ons — tasteful upsell cards with "Interested" buttons
  9. Festival Info — dates, venue, highlights, notes
  10. Contact — avatar, name, role, email, telegram, response time
  11. Footer — SDTV branded with privacy note
- Cascade entrance animations
- Glassmorphism cards with subtle borders
- Mobile responsive

## Brief Page (`brief.html`)
- Premium dark UI, Linear/Stripe-inspired
- RU/EN language toggle (top-right pill)
- Header: SDTV logo + festival name + meta + auto-deadline (+2 weeks, amber)
- KPI cards: Files, YouTube, IG Reels, Dancers (with icons)
- 2-column layout: Info (metrics) + Links (RAW folder, Upload folder)
- Fallback links: MyAirBridge for RAW, Dropbox for upload
- Branding section: SDTV logo (downloadable) + Festival logo (downloadable)
- Video list: Linear-style items grouped by session
- Clickable format badges (YT+IG → YT → IG cycle, saves to Airtable via PATCH)
- Cascade animations on load
- Print CSS included

## API Endpoints
- `GET /api/festivals` — list festivals
- `GET /api/captures/next-number` — dance counter
- `POST /api/captures` — create capture + clip
- `GET /api/admin/export?event=MAM26` — task sheet data
- `GET /api/admin/invoice?event=MAM26&aftermovie=1&tracking=3&animation=2120` — invoice
- `POST /api/admin/match` — match files (body: dir, event, apply)
- `POST /api/admin/ingest` — connect deliverables (body: dir, url, event, apply)
- `POST /api/admin/previews` — FFmpeg previews (body: dir, out, apply)
- `GET /api/admin/verify-fuzzy?event=MAM26&dir=...` — verify with fuzzy
- `PATCH /api/captures/:id/format` — update delivery format
- `GET /api/brief/:event` — brief data (with record IDs for format toggle)
- `POST /api/verify-pin` — admin PIN auth
- `GET /api/admin/brief-settings/:event` — read brief settings
- `POST /api/admin/brief-settings/:event` — save brief settings
- `GET /portal/:event` — serve portal page
- `GET /api/portal/:event` — portal data (X-Portal-Pin header required)
- `GET /api/admin/portal-settings/:event` — read portal config
- `POST /api/admin/portal-settings/:event` — save portal config

## Data Storage
- `.brief-settings.json` — per-event brief configuration
- `.portal-settings.json` — per-event portal configuration (PIN, package, deliverables, etc.)
- `.filepointer.json` — camera file pointer state

## Pending Work for Next Session

### Legacy (studio/) — bugfix-only mode
1. Deploy to Railway (from new legacy/studio path, with RESEND_API_KEY env)
2. Verify source deletion safe → remove `C:\tmp\sdtv-capture`
3. Mobile testing for portal page (CSS has @media queries, not live-tested)
4. `promo-plan-preview.html` moved to `examples/promo-plan-bachata-stars.html` ✅

### Verified 2026-04-20 (no code needed)
- **Promo generator** (`generatePromoPlan()` in admin.html line 2271-2449):
  14 content types wired, HOLIDAYS constant exists, all 4 checkboxes
  (Giveaway/Holidays/Schedule/Countdown) functional. Validation works.
  Saves calendar via `promoCalendar` DOM → portal.promo.calendar.

### PRs MERGED 2026-04-21 to SocialDanceTV/sdtv-studio master
1. **#3** Gmail SMTP → Resend migration (8 flows, deps fix)
2. **#8** (replaced #4 after stacking issue) /promo-plan/:event dynamic
3. **#5** admin glass polish (backdrop-filter, deeper bg, 16px radius)
4. **#6** brief reads from API, not localStorage
5. **#7** Monday sync Test button + env-status endpoint

### Stacked-PR merge lesson learned
`gh pr merge --delete-branch` on a stacked PR auto-closes dependent PRs.
Fix: merge WITHOUT `--delete-branch` on all but the last one, OR rebase
each remaining PR locally onto master after each merge.

### Current stack (2026-04-21 post-merge)
- master = f940da5 + c2687e1 + e1ee1a1 + b8ba742 + e25823d (5 new commits)
- all 5 feature branches deleted remotely
- PR #2 (Apply brief.html design) still open, from earlier session

### Nuxt migration — next phase
1. Send proposal to Alex re: Airtable SoR + Postgres cache pattern
2. Update `strategy/sdtv-admin-migration-spec.md` with cache layer spec
3. Draft Prisma schema for cache tables (Captures, Clips, Portal, Brief settings)
4. Define sync strategy (hot webhooks / cold polling)
5. Port brief.html design system → Vue + shadcn-vue components

## Assets
- `sdtv-logo.png` — SDTV logo with shadow (2.4MB)
- `festival-logo-example.png` — The Dance House logo example (329KB)

## Airtable IDs
- Base: `appsgtrfnVi2IccFb`
- Captures: `tblgiQssV0qnosiUl`
- Clips: `tbl4SqKCD9F65l48y`
- Festivals: `tblfxBXaajR8Pny9k`
- People: `tblZR7aYmeSGvPqE2`
