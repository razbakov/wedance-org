# SDTV Form — Missing Features in Nuxt Port

Specification for the programmer.
Reference implementation lives in `~/Orgs/ikigai/sdtv-form-v3/` branch `feat/resend-migration`.

These four features exist in the original Express form but were not yet ported to the Nuxt version on socialdancetv.com. Each one drives concrete revenue or operations — not nice-to-haves.

---

## 1. Filming Pass with QR — `/pass/:ref`

**What it is:** A standalone branded page generated for every booking. Shows the festival, date, slot details, and a real QR code. The dancer can bookmark it, screenshot it, save to Wallet, or open it on the dance floor.

**Why it matters:**
Without this page the booking is just an email confirmation. With it the dancer has a tangible asset they can show on their phone at the event. The QR is what closes the operations loop — the SDTV operator scans it and the capture form pre-fills with the dancer's data (see #2).

**URL pattern:**
```
https://socialdancetv.com/pass/RSV-xxx
```

`RSV-xxx` is the reservation ID returned by `POST /api/reservations` (currently format: `RSV-{base36 timestamp}`).

**What the page renders:**

- SDTV logo top
- Pass card with:
  - Festival name (header)
  - Day · Package
  - **Real QR code** (200×200px, dark/transparent)
  - Detail rows: Name · Instagram · Package · Day · Status badge (Confirmed/Pending) · Notes
  - Instruction line: "Show this pass to the SDTV filming team at the event. They will scan your QR code to check you in."
- Footer with @socialdancetv link

**Implementation notes:**
- Server-side generated HTML page (not a client route). In Express it's `app.get('/pass/:ref', ...)`. In Nuxt this maps to `pages/pass/[ref].vue` with `useFetch` to load the reservation data, or a server route under `server/api/pass/[ref].get.ts` if you want to render HTML on the server.
- QR generation uses the `qrcode` npm library: `QRCode.toDataURL(captureUrl, { width: 200, margin: 2, color: { dark: '#f4f1ec', light: '#00000000' } })`.
- The QR encodes the **capture form URL** with `?res=RSV-xxx` (see #2): `${baseUrl}/?res=${ref}` (capture form lives on a different host — port 8000 internally, or whatever the production capture URL is).
- Reservation lookup endpoint already exists: `GET /api/reservation/:ref` → returns `{ id, ref, festival, day, ig, email, name, package, status, notes, session }`.

**Visual reference:** see `server.js` lines around the `/pass/:ref` route (`feat/resend-migration` branch).

---

## 2. `?res=RSV-xxx` deep link for capture form

**What it is:** When the SDTV operator scans the QR on the dancer's pass, the capture form opens with all the dancer's details pre-filled — name, Instagram, package, day. The operator just confirms and shoots.

**Why it matters:**
This is the bridge between booking and filming. Without it, the operator has to find the dancer by name in a list, type the IG handle, pick the package — manual every time. With it, scanning a QR is one tap to a fully-prepared capture form.

**Where it lives:**
The capture form is a different app from the client form. It runs on the SDTV operations server (originally port 8000, deployed to wherever the operator-facing app is hosted). In our codebase: `C:\tmp\sdtv-capture\app.js` lines around `loadStaffFromURL`.

**URL pattern:**
```
https://CAPTURE-HOST/?res=RSV-xxx
```

**Behavior:**
1. Capture form reads `?res=RSV-xxx` from URL on load
2. Calls `GET /api/reservation/:ref` (this endpoint lives on the **client form server**, not the capture server — needs CORS or proxy)
3. Pre-fills Partner 1 IG, Partner 1 Name from the reservation
4. Shows a green banner at the top: "✓ Pre-booked — {Name} · {Package} · {Day}"
5. Operator just clicks "Capture" — done

**Implementation notes:**
- This is purely a feature on the **capture form** side, not the client form. But the client form must expose `GET /api/reservation/:ref` and either allow CORS from the capture host or proxy through it.
- If both forms end up on the same Nuxt app, the cross-origin issue disappears.

**Reference:** `C:\tmp\sdtv-capture\app.js` `loadReservation()` function.

---

## 3. `?outcome=recognition|event|custom` for visibility flow

**What it is:** A deep link that skips the visibility intro screen ("What's your goal?") and goes directly to the relevant plans page.

**Why it matters:**
Different landing pages and Instagram CTAs target different intents:
- Artist who wants ongoing visibility → `?flow=visibility&outcome=recognition` → Recognition/Momentum plans
- Artist promoting a specific workshop → `?flow=visibility&outcome=event` → Single Feature / Buildup / Full Visibility
- Custom / not sure → `?flow=visibility&outcome=custom` → soft toast asking them to DM

Without this, every visibility-flow user starts from "What's your goal?" — adds a step, loses context, and breaks intent-based routing from external pages (Instagram bio, ads, /artists landing page).

**URL patterns:**
```
?flow=visibility&outcome=recognition  → screen-visibility-packages
?flow=visibility&outcome=event        → screen-visibility-event
?flow=visibility&outcome=custom       → toast "We'll reach out within 24h"
?flow=visibility                      → screen-visibility-intro (existing)
```

**Implementation:** in the URL param handler, after `selectIntent('visibility')` is triggered, if `outcome` is present, call `selectVisibilityOutcome(outcome)` after a short timeout (300ms is enough for the screen transition).

**Reference:** `app.js` `checkURLParams()` function in the `flow === 'visibility'` block.

---

## 4. `isEarlyBird` state reset on flow restart

**What it is:** A bug fix. The `isEarlyBird` flag determines whether the user gets €80 (early-bird) or €100 (full price) for archive videos. It's set when the user enters from a "video being edited" notification flow, and it should be cleared when they leave that flow.

**Why it matters:**
If a user starts an early-bird flow, abandons it, then comes back through the regular archive flow (Find My Dance), the early-bird flag is still set. Result: they pay €80 instead of €100. Real revenue loss per case.

**Reproduction:**
1. Open form via early-bird path (notify-me from a "being edited" video → reservation flow → checkout shows €80)
2. Click X to close, then reopen
3. Click "Find My Dance" → search → checkout
4. Bug: shows €80 instead of €100

**Fix:**
Inside `resetForm()` (called when the form is reopened or when user navigates back to routing), explicitly set:
```
state.isEarlyBird = false;
state.reservationRef = null;
state.secondDance = null;
state.festivalHasShow = false;
state.visPlanData = null;
state.contentReadiness = null;
```

Plus on entry to `goToPreorderSlot()`:
```
state.secondDance = null;
state.selectedDay = null;
state.selectedSlot = null;
state.slotSkipped = false;
```

**Reference:** `app.js` `resetForm()` and `goToPreorderSlot()`.

---

## How the flows connect (system view)

```
LANDING PAGE / INSTAGRAM BIO / MANYCHAT
        │
        │ ?flow=archive&ig=@user&auto=1   ── for "find my video"
        │ ?flow=preorder                  ── for "book filming"
        │ ?flow=visibility&outcome=event  ── for artists promoting
        │ ?flow=status                    ── for "where is my video"
        ▼
   CLIENT FORM (Nuxt)
        │
        │ Booking confirmed
        │ → POST /api/reservations → returns RSV-xxx
        │ → save state.reservationRef
        ▼
   FILMING PASS PAGE  /pass/RSV-xxx
   (real QR encoding capture URL with ?res=RSV-xxx)
        │
        │ Dancer shows phone at event
        │ Operator scans QR with phone camera
        ▼
   CAPTURE FORM  /?res=RSV-xxx
   (operator app — pre-filled from reservation)
        │
        │ Operator confirms, films
        ▼
   AIRTABLE: Capture record linked to Reservation
        │
        │ Editor edits, status → Ready
        ▼
   DELIVERY EMAIL → /delivery?id=recXXX
```

Each link in this chain is a deliberate design choice — losing one breaks the loop.

---

## Verification checklist for the agent

After implementing, verify each URL in a real browser (not WebFetch — these are SPA routes that need JS):

- [ ] `?flow=archive&ig=@rocalidonio&auto=1` — opens directly to search results
- [ ] `?flow=visibility&outcome=recognition` — opens directly to Recognition/Momentum plans
- [ ] `?flow=visibility&outcome=event` — opens directly to Single Feature / Buildup / Full Visibility
- [ ] `?flow=status` — opens directly to email lookup screen
- [ ] `?flow=preorder` — opens directly to festival selection
- [ ] `/pass/RSV-test` — renders Filming Pass page (will 404 with fake ref, but should not crash; with real ref renders pass with QR)
- [ ] Free promo path: complete archive checkout with 100% promo code — confirm `isEarlyBird` is false on next session

---

## Source of truth

All implementations live in:
- `~/Orgs/ikigai/sdtv-form-v3/` branch `feat/resend-migration`
- Server: `server.js` — Express routes including `/pass/:ref`, `/api/reservation/:ref`, `/api/qr`
- Client: `app.js` — `checkURLParams()`, `populateFilmingPass()`, `resetForm()`, `goToPreorderSlot()`
- HTML: `index.html` — all 25+ screens with stable IDs

The Express version is in production-ready state. Use it as the reference implementation.
