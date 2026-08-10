# SDTV Form v3 → Nuxt Migration Spec

This document is the contract. 51 commits of battle-tested logic live in this form.
Every item below must be preserved in the Nuxt port, or explicitly documented as "deferred."

---

## Critical Business Logic (MUST port — these handle money)

### 1. Server-Side Price Determination
**File:** `server.js` → `POST /api/create-payment-intent`

The server determines price, NOT the client. Never trust client-sent amounts for archive flow.

```
Archive flow (has captureId):
  → Server checks capture status in Airtable
  → Captured/Processing/Waitlisted = €80 (early-bird)
  → Ready/Delivered = €100 (base)
  → Client amount ignored

Preorder/Visibility/Upsell (no captureId):
  → Server accepts client amount with bounds (€1–€1000)
  → But when promoId present, uses baseAmount (pre-discount)
  → Server re-validates promo via Stripe API
  → Applies discount server-side (never trust client discount)
```

**Why this matters:** Without this, attackers can pay €1 for a €100 video.

### 2. Double-Discount Prevention
**File:** `server.js` lines 1360-1384

When promo code is used:
- Client sends `baseAmount` (full price before discount)
- Client sends `promoId` (Stripe promotion code ID)
- Server re-validates promo via `stripe.promotionCodes.retrieve(promoId)`
- Server applies discount to `baseAmount`, not to client's already-discounted amount
- This prevents discount being applied twice

### 3. Free Checkout Path (€0 total)
**File:** `app.js` → `processArchivePayment()`

When promo code covers 100% of the price:
- Skip Stripe entirely (no payment intent)
- Save to Airtable as paid
- Send delivery email
- Show confirmation
- Hide card input, enable submit button

### 4. Early-Bird Pricing
Captures with status `Captured`, `Processing`, or `Waitlisted` get €80 instead of €100.
This is checked SERVER-SIDE, not client-side (prevents manipulation).

---

## Payment Flows (5 distinct Stripe integrations)

| # | Flow | captureId? | Amount source | Promo? |
|---|------|-----------|--------------|--------|
| 1 | Archive checkout | Yes | Server (status-based) | Yes |
| 2 | Archive unlock | Yes | Server (status-based) | Yes |
| 3 | Apple Pay (archive) | Yes | Server | Yes |
| 4 | Preorder checkout | No | Client (baseAmount) | Yes |
| 5 | Upsell feature | No | Fixed €100 | No |

Each has its own Stripe Elements mount, error handling, and post-payment actions.

---

## Email System (6 templates — all must be ported)

| Template | Trigger | Endpoint | Critical? |
|----------|---------|----------|-----------|
| Delivery | After archive payment | `/api/send-delivery-email` | YES — revenue |
| Booking Confirm | After preorder payment | `/api/send-booking-email` | YES — trust |
| Payment Receipt | After any Stripe charge | `/api/send-receipt-email` | YES — legal |
| Notify Confirm | User clicks "notify me" | `/api/send-notify-email` | YES — retention |
| Visibility Welcome | Monthly plan activated | `/api/send-visibility-welcome` | Medium |
| Video Ready Alert | Admin: editing complete | `/api/send-video-ready-alert` | Medium |

All emails are dark-branded HTML templates with inline styles. Do NOT replace with plain text.
Template HTML is in `server.js` — search for `async function send*Email`.

---

## Deep Link System (ManyChat + QR integration)

URL parameters the form handles on load:

| Param | Effect | Used by |
|-------|--------|---------|
| `?flow=archive\|preorder\|visibility\|walkup\|monday` | Skip routing, open flow | ManyChat buttons |
| `?ig=@handle` | Pre-fill dancer identity on ALL screens | ManyChat, partner share |
| `?auto=1` | Zero-click: auto-search, show results immediately | ManyChat "видео" trigger |
| `?festival=slug` | Pre-select festival | Post-event campaigns |
| `?email=xxx` | Pre-fill email, save to localStorage | Email campaigns |
| `?source=xxx` | UTM tracking → saved to Airtable | Analytics |
| `?res=RSV-xxx` | Capture form: pre-fill from reservation QR | Filming Pass QR |

**`?auto=1` is critical for ManyChat integration.** Dancer DMs "видео" → gets link with their IG → form auto-searches → video appears instantly. Zero clicks.

---

## Filming Pass System (QR → Capture pre-fill)

Flow: Book → `/pass/RSV-xxx` page → QR code → Operator scans → Capture form pre-fills

| Component | Location | What it does |
|-----------|----------|-------------|
| `/pass/:ref` | server.js | Branded pass page with real QR |
| `/api/qr?data=URL` | server.js | QR code as PNG image |
| `/api/reservation/:ref` | server.js | Lookup reservation by RSV-xxx |
| `?res=RSV-xxx` | capture form (port 8000) | Pre-fill dancer data from booking |

The QR encodes the capture form URL. Scanning it opens the capture form with name, IG, package pre-filled. No typing needed at the event.

---

## Video Preview System (FFmpeg proxy)

| Endpoint | What |
|----------|------|
| `GET /api/preview/:captureId` | 720p/10s MP4, cached in `.preview-cache/` |
| `GET /api/preview/status/:id` | Check if preview is ready |

- Downloads original from Dropbox URL (from Airtable `Preview URL` field)
- FFmpeg converts to 720p, 10s, faststart
- Serves with HTTP Range support (instant `<video>` playback)
- Cache: one-time 15s generation, then <100ms serve
- `captureId` validated: `/^rec[a-zA-Z0-9]{10,20}$/` (path traversal protection)

---

## Screen Hook System

The old code had 6 nested `showScreen` overrides (fragile chain). Refactored to:

```javascript
const screenHooks = {};
function onScreen(screenId, fn) {
  if (!screenHooks[screenId]) screenHooks[screenId] = [];
  screenHooks[screenId].push(fn);
}

// Usage:
onScreen('archive-checkout', setupArchiveCheckoutEmail);
onScreen('archive-unlock', setupUnlockScreen);
onScreen('archive-unlock', setupUnlockEmail);
onScreen('archive-unlock', setupPartnerShare);
onScreen('archive-confirmation', setupPartnerShare);
onScreen('preorder-checkout', () => { /* mount Stripe card */ });
onScreen('visibility-checkout', () => { /* pre-fill IG */ });
```

In Nuxt, replace with Vue lifecycle hooks (`onMounted`, `watch`) per component. But the LOGIC inside each hook must be preserved.

---

## Visibility Flow (recently redesigned — don't port old version)

Two paths based on goal:

**Recognition path:**
- Momentum Plan 2x/week €599 (highlighted "Best Results")
- Recognition Plan 1x/week €349
- One-time feature as secondary link (not equal card)

**Event path:**
- One-Time Feature €150 (primary)
- Event Push 1x/week €349
- Event Push 2x/week €599 (highlighted "Stronger Push")

**Content readiness step** (after plan selection):
- I have content ready
- I need SDTV to create content (upsell path to filming)
- Hybrid

Flow: Goal → Plan → Content Readiness → Checkout (4 steps)

---

## Security Measures (MUST preserve)

| Protection | Location | What |
|-----------|----------|------|
| Server-side pricing | server.js | Price from Airtable status, not client |
| Promo re-validation | server.js | Re-check with Stripe API, never trust client |
| Double-discount prevention | server.js | Use baseAmount, not discounted amount |
| captureId validation | server.js | Regex before file path use |
| Range header guard | server.js | Malformed header → fallback to full serve |
| XSS escaping | server.js | `esc()` on all user data in /delivery and /pass |
| Security headers | server.js | X-Frame-Options, CSP, XSS-Protection |
| Formula injection | server.js | `sanitizeForFormula()` on Airtable queries |

---

## State Properties (complete list)

These are all the state properties used across the app. The Nuxt port needs equivalent reactive state:

```
currentScreen, history, currentFlow
selectedFestival, selectedYear, dancerIdentity
selectedUpcomingFestival, selectedPackage, collabAddon
selectedDay, selectedSlot, slotSkipped
visibilityOutcome, visibilityPlan, visPlanData, contentReadiness
walkupType, walkupPayment
isEarlyBird, reservationRef
searchResults, selectedClips, activeCapture
promo (code, discount, newTotal, promoId)
pendingPromo, knownEmail, collectedEmail, urlSource
sessions, sessionsByDay
partnerIg, partnerName
```

---

## What the Nuxt App Already Has (from programmer's message)

"The Nuxt app already has the same 5 core flows ported to Vue components."

This means the HTML/CSS is likely ported. What's probably missing:
1. Server-side API (Express routes → need Nuxt server routes or API layer)
2. Stripe integration (Elements mount, payment intent flow)
3. Email templates (Resend via `lib/email.js` + 7 HTML templates). Env: `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_REPLY_TO`. Domain: socialdancetv.com
4. Deep link handling (?flow=, ?ig=, ?auto=)
5. Video preview proxy (FFmpeg)
6. Filming Pass / QR system
7. All the payment security logic

---

## Migration Checklist

Before declaring the Nuxt port ready, verify:

- [ ] Archive flow: search → preview → unlock → pay → delivery email
- [ ] Preorder flow: festival → package → slot (with sessions from Airtable) → pay → booking email + filming pass with QR
- [ ] Visibility: goal → plan (Recognition/Event paths) → content readiness → checkout
- [ ] Walkup + Monday Morning + Status Check all functional
- [ ] `?flow=archive&ig=@test&auto=1` auto-searches and shows results
- [ ] `?res=RSV-xxx` pre-fills capture form from reservation
- [ ] Promo codes work without double-discount
- [ ] Early-bird pricing (€80) for Captured/Processing status
- [ ] Free checkout (€0) works when promo covers full amount
- [ ] All 6 email templates send correctly
- [ ] /delivery?id=recXXX serves video with player
- [ ] /pass/RSV-xxx shows QR code
- [ ] Haptic feedback on video found (mobile)
- [ ] SW cache doesn't serve stale JS
- [ ] CORS restricted to actual domain (not *)
- [ ] 13 Playwright tests pass

---

## Files Reference

| File | Lines | What |
|------|-------|------|
| server.js | ~1700 | Express API, 18 endpoints, 6 emails, Stripe, FFmpeg, QR |
| app.js | ~3900 | Frontend SPA, 7 flows, 25+ screens, Stripe Elements |
| index.html | ~1600 | All screen HTML, dark theme |
| style.css | ~4200 | Mobile-first CSS, CSS vars |
| sw.js | 37 | Network-first service worker |
| DEEP-LINKS.md | 80 | ManyChat URL parameter docs |
| qa-flows.spec.js | 300 | 13 Playwright E2E tests |
