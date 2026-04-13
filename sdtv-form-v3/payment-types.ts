/**
 * SDTV Payment System — Type Definitions & Validation
 *
 * This file serves as the single source of truth for all pricing,
 * payment flows, and validation rules. Reference this when implementing
 * the Nuxt migration.
 *
 * NOT executed at runtime (vanilla JS app) — used for:
 * 1. TypeScript compile-time checks during development
 * 2. Documentation of all payment invariants
 * 3. Migration contract for Nuxt port
 */

// ── PRICING CONSTANTS ─────────────────────────────────

export const PRICES = {
  /** Standard dance video price in cents */
  VIDEO_STANDARD: 10_000, // €100
  /** Early-bird price (capture still in editing) in cents */
  VIDEO_EARLYBIRD: 8_000, // €80
  /** Second dance bundle discount price in cents */
  SECOND_DANCE: 8_000, // €80
  /** Collab add-on (Feature on SDTV Channel) in cents */
  COLLAB_ADDON: 10_000, // €100
  /** Upsell: SDTV Feature post-purchase in cents */
  UPSELL_FEATURE: 10_000, // €100
  /** Visibility monthly plan in cents */
  VISIBILITY_MONTHLY: 34_900, // €349
  /** Visibility feature boost in cents */
  VISIBILITY_FEATURE: 15_000, // €150
  /** Archive offer default price in cents */
  ARCHIVE_OFFER_DEFAULT: 2_500, // €25
  /** Minimum Stripe charge in cents */
  STRIPE_MIN: 100, // €1
} as const;

export const STRIPE_CONFIG = {
  PRODUCT_ID: 'prod_T2OrtAmOZ7MJVV',
  COUNTRY: 'ES',
  CURRENCY: 'eur',
  EARLYBIRD_COUPON: 'EARLYBIRD',
} as const;

/** Capture statuses that qualify for earlybird pricing */
export const EARLYBIRD_STATUSES = ['Captured', 'Processing', 'Waitlisted'] as const;

/** Capture statuses that mean video is deliverable */
export const READY_STATUSES = ['Ready', 'Delivered', 'Notified'] as const;

// ── PAYMENT FLOW TYPES ────────────────────────────────

export type PaymentFlow =
  | 'archive'       // Find & buy existing video
  | 'preorder'      // Book future filming
  | 'upsell-feature'// Post-purchase SDTV Feature
  | 'visibility'    // Monthly visibility plan
  | 'walkup';       // On-site quick booking (pay-later or pay-now)

export type CaptureStatus =
  | 'Captured'
  | 'Processing'
  | 'Waitlisted'
  | 'Ready'
  | 'Delivered'
  | 'Notified';

export interface PaymentIntentRequest {
  captureId?: string;
  amount?: number;        // Client hint — server may override
  baseAmount?: number;    // Pre-discount base — server may override
  currency?: string;
  description?: string;
  promoId?: string;
  metadata: PaymentMetadata;
}

export interface PaymentMetadata {
  ig: string;
  email: string;
  festival?: string;
  flow: PaymentFlow;
  product?: string;
  captureId?: string;
  package?: string;
  collab?: 'yes' | 'no';
  dances?: string;
  secondDance?: 'yes' | 'no';
  day?: string;
  slot?: string;
  day2?: string;
  slot2?: string;
}

export interface PaymentIntentResponse {
  clientSecret: string;
  id: string;
  amount: number;         // Actual amount in cents (server-determined)
  appliedCoupon: string | null;
}

export interface PromoValidationResponse {
  valid: boolean;
  code?: string;
  promoId?: string;
  couponId?: string;
  type?: 'percent' | 'fixed';
  value?: number;
  discount?: number;      // In cents
  description?: string;
  newTotal?: number;       // In cents
  error?: string;
}

// ── PRICE CALCULATION RULES ───────────────────────────

/**
 * ARCHIVE FLOW — Server determines price from capture status.
 * Client CANNOT set the price.
 *
 * RULE: price = clipCount * perClipPrice - promoDiscount
 *   - perClipPrice = EARLYBIRD if status ∈ EARLYBIRD_STATUSES, else STANDARD
 *   - promoDiscount from Stripe Promotion Codes API (server-validated)
 *   - Result clamped to Math.max(0, total)
 *   - If total = 0 → skip Stripe entirely (free unlock)
 *
 * INVARIANT: Server always looks up capture status from Airtable.
 *            Client-provided amount is IGNORED for archive flow.
 */
export function calculateArchivePrice(
  clipCount: number,
  captureStatus: CaptureStatus,
  promoDiscount: number = 0,
): number {
  if (clipCount < 1) throw new Error('clipCount must be >= 1');
  const perClip = EARLYBIRD_STATUSES.includes(captureStatus as any)
    ? PRICES.VIDEO_EARLYBIRD
    : PRICES.VIDEO_STANDARD;
  return Math.max(0, clipCount * perClip - promoDiscount);
}

/**
 * PREORDER FLOW — Server determines price from metadata.
 * Client sends metadata (collab, secondDance), server calculates.
 *
 * RULE: price = BASE + (collab ? COLLAB_ADDON : 0) + (secondDance ? SECOND_DANCE : 0) - promoDiscount
 *   - BASE = €100 (always, for any single dance package)
 *   - COLLAB_ADDON = €100 (Feature on SDTV Channel)
 *   - SECOND_DANCE = €80 (bundle discount)
 *
 * INVARIANT: Server uses FLOW_PRICES lookup, NOT client-provided amount.
 */
export function calculatePreorderPrice(
  hasCollab: boolean,
  hasSecondDance: boolean,
  promoDiscount: number = 0,
): number {
  let total = PRICES.VIDEO_STANDARD;
  if (hasCollab) total += PRICES.COLLAB_ADDON;
  if (hasSecondDance) total += PRICES.SECOND_DANCE;
  return Math.max(0, total - promoDiscount);
}

/**
 * UPSELL FLOW — Fixed price, no promo.
 */
export function calculateUpsellPrice(): number {
  return PRICES.UPSELL_FEATURE;
}

// ── POST-PAYMENT ACTION CHECKLIST ─────────────────────

/**
 * After EVERY successful payment, these actions MUST happen.
 * If any fails, it's logged but does NOT block confirmation screen.
 *
 * The client is responsible for triggering these (no webhook yet).
 * This is a known risk — see audit C1.
 */
export interface PostPaymentActions {
  /** 1. Always: upsert person with paid: true */
  upsertPerson: {
    ig: string;
    email: string;
    source: string;     // 'Archive Purchase', 'Preorder', etc.
    paid: true;
  };
  /** 2. Always: create notification record */
  createNotification: {
    ig: string;
    email: string;
    festival: string;
    channel: 'Email';
    template: string;   // 'Purchase confirmation', 'Booking confirmation', etc.
  };
  /** 3. Flow-specific: send delivery email (archive only) */
  sendDeliveryEmail?: {
    email: string;
    captureId: string;
    ig: string;
    festival: string;
  };
  /** 4. Flow-specific: send booking email (preorder only) */
  sendBookingEmail?: {
    email: string;
    name: string;
    festival: string;
    pkg: string;
    day: string;
    slot: string;
    amount: string;     // Display amount in EUR (e.g., "100")
  };
  /** 5. Always: send receipt email */
  sendReceiptEmail: {
    email: string;
    amount: number;     // In CENTS (Stripe format) — server divides by 100
    description: string;
    paymentId: string;
  };
  /** 6. Flow-specific: create reservation (preorder only) */
  createReservation?: {
    festival: string;
    festivalId: string;
    sessionId: string;
    day: string;
    ig: string;
    email: string;
    name: string;
    package: string;
    notes: string;
  };
}

// ── VALIDATION ASSERTIONS ─────────────────────────────

/**
 * Runtime validation helpers.
 * Call these before payment to catch bugs early.
 */
export const PaymentValidation = {
  /** Amount must be positive integer in cents, >= STRIPE_MIN or 0 (free) */
  assertValidAmount(amount: number, context: string): void {
    if (!Number.isInteger(amount)) {
      throw new Error(`[${context}] Amount must be integer, got ${amount}`);
    }
    if (amount < 0) {
      throw new Error(`[${context}] Amount cannot be negative: ${amount}`);
    }
    if (amount > 0 && amount < PRICES.STRIPE_MIN) {
      throw new Error(`[${context}] Amount ${amount} below Stripe minimum ${PRICES.STRIPE_MIN}`);
    }
    if (amount > 100_000) {
      throw new Error(`[${context}] Amount ${amount} suspiciously high (>€1000)`);
    }
  },

  /** Email must be valid before payment */
  assertValidEmail(email: string, context: string): void {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error(`[${context}] Invalid email: "${email}"`);
    }
  },

  /** Stripe card element must exist before payment */
  assertCardMounted(element: any, context: string): void {
    if (!element) {
      throw new Error(`[${context}] Stripe card element not mounted`);
    }
  },

  /** PaymentIntent response must have clientSecret */
  assertValidPIResponse(data: any, context: string): void {
    if (!data?.clientSecret) {
      throw new Error(`[${context}] Missing clientSecret in PI response`);
    }
    if (!data?.amount || data.amount < 0) {
      throw new Error(`[${context}] Invalid amount in PI response: ${data?.amount}`);
    }
  },

  /** Receipt amount must be in cents (not euros) */
  assertCentsNotEuros(amount: number, context: string): void {
    // Heuristic: amounts < 100 are likely euros not cents
    if (amount > 0 && amount < 100 && context.includes('receipt')) {
      console.warn(`[${context}] Amount ${amount} looks like euros, not cents. Expected cents.`);
    }
  },

  /** Promo discount cannot exceed base price */
  assertPromoSanity(base: number, discount: number, context: string): void {
    if (discount > base) {
      throw new Error(`[${context}] Promo discount ${discount} exceeds base ${base}`);
    }
    if (discount < 0) {
      throw new Error(`[${context}] Negative promo discount: ${discount}`);
    }
  },
};

// ── PAYMENT FLOW MATRIX ───────────────────────────────
// Quick reference: which flow does what

/**
 * | Flow      | Price Source    | Promo? | Apple Pay? | Post-Actions             |
 * |-----------|----------------|--------|------------|--------------------------|
 * | archive   | Capture status | Yes    | Yes        | upsert+notif+delivery+receipt |
 * | unlock    | Capture status | Yes    | Yes        | upsert+notif+delivery+receipt |
 * | preorder  | Metadata       | Yes    | No         | upsert+reservation+booking+receipt |
 * | upsell    | Fixed €100     | No     | No         | upsert+receipt           |
 * | visibility| Fixed €349     | No     | No (mock)  | upsert+welcome           |
 * | walkup    | N/A (pay-later)| No     | No         | upsert only              |
 *
 * "archive" and "unlock" are the SAME flow, different checkout screens.
 * archive-checkout = legacy card-only. archive-unlock = full (Apple Pay + card).
 *
 * CRITICAL: "unlock" and "archive" both use the SAME server endpoint
 * and the SAME pricing logic. They differ only in client UI.
 */
