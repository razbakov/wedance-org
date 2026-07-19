---
title: Festival organizer lead — proposal package
date: 2026-07-19
type: partnership-lead
status: draft-to-send
organizer: "[NAME] — Cuba in Tunisia festival + Timba Paradise festival"
current_platform: Weezevent
owner: Alex (Alösha)
---

# Festival Organizer — Proposal Package

Warm lead. Alex met the organizer at Cuba in Tunisia ~2 years ago, spoke again a few
days ago. He runs **Cuba in Tunisia** and **Timba Paradise** — festivals that bundle
**hotel + transport + passes + extras**, which Weezevent handles clumsily. Alex has
already built the festival website as a gift. Organizer asked: *"Send it over, I need to
discuss with my partner."*

The offer: WeDance runs the bundled ticketing **free for year 1** (organizer pays only
real payment-processing costs), A/B tested against Weezevent (start 90% Weezevent / 10%
WeDance, adjustable instantly), Alex personally on-call throughout. Year 2 = discuss
pricing.

---

## The three holes a business partner will poke — and how the doc closes them

The partner reading this is not the friend Alex charmed in Tunisia. They'll ask:

1. **"Where does the money go?"** — The make-or-break question for any festival organizer.
   If WeDance holds the float, this is *dangerous* for the organizer and the deal should
   not ship until it's fixed. The proposal states funds settle **directly to the
   organizer's own account** — WeDance never holds their money. **Alex: confirm WeDance
   actually supports direct-to-organizer payout (Stripe Connect or equivalent) before
   sending. This is the one line that can't be a bluff.**
2. **"Free — what's the catch?"** — Business people distrust free. The doc names the
   exchange plainly: Alex gets a reference case + honest product feedback; organizer gets
   a free year + white-glove service. Honesty about the ask is what makes it credible.
3. **"What if year 2 doesn't work for us?"** — The doc gives full data export, no lock-in,
   walk-away-anytime. De-risking the *exit* is what makes saying *yes* easy.

## Where I'd push back on Alex (not in the doc — for you)

- **The zero-price anchor.** After a free year, the reference point is €0, and raising a
  price on a friend-of-a-friend is the hardest negotiation there is. Put a *directional*
  year-2 number in now (e.g. "a small per-ticket fee, roughly X%, well under what
  Weezevent charges") — non-binding, but it stops year 2 starting from zero. I've left a
  soft version in the one-pager; delete it if you'd rather not anchor yet.
- **"Other festivals will join, yes or yes."** Trust transfers, but each organizer still
  evaluates. Don't plan on an automatic cascade — plan on this one being a *spotless*
  reference. That actually reinforces doing year 1 flawlessly, which you're already
  committed to.
- **You, personally, 24/7 is a single point of failure.** Fine for one flagship reference
  festival. It cannot be the model when the cascade you want actually happens. Worth
  naming to yourself now, not in the doc.
- **Define the A/B success metric up front** (checkout completion rate + support tickets +
  refund rate), or year 1 ends in vibes instead of a verdict. Baked into the one-pager.

---

## The mechanic "kitchen stays the same" actually requires (own this, don't hide it)

The promise "his team keeps using Weezevent, nothing changes in ops" only holds if the
10% of orders that come through WeDance still *land inside Weezevent* — otherwise his team
would have to check two systems for check-in, rooming and transport, which is exactly the
change you promised wouldn't happen. So the invisible work is: **every WeDance sale, you
mirror into Weezevent as an already-paid/external entry**, so his team sees one normal
Weezevent guest list. At 10% volume with you on-call, that's manual and fine for year 1 —
but confirm (a) Weezevent allows manual "externally paid" attendee entry, and (b) you're
the one doing that reconciliation. It's another load riding on you personally (see SPOF
point) — acceptable for one reference festival, not a scaling model.

## Architecture — agreed direction (2026-07-19)

**Phase 2 = clients buy on WeDance, but WeDance rides Ticket Tailor's rails.** TT is the
payment engine + merchant of record; WeDance is the bundled-package UX layer on top. This
means year 1 builds NO independent WeDance payment stack — we inherit TT's uptime, PCI
compliance, and (critically) TT's **direct-to-organizer payout**, which resolves the
money-flow trust problem with a verifiable claim instead of a promise. What year 1 proves:
*better bundled experience + Alex's service converts better* — not *WeDance's own billing
works*. That hard/expensive part is deferred until there's a paying reference.

Order flow, every path ends in Weezevent so ops don't change:
- Buyer in the 10% slice → WeDance (TT-powered) checkout → **funds direct to organizer's
  own Stripe** → order **imported into Weezevent** as already-paid entry → team sees a
  normal guest.
- **Fallback = pre-payment redirect only.** If the WeDance page errors *before* payment,
  bounce the buyer to a plain Ticket Tailor link. **Never retry a charge on a second
  system** — ambiguous-failure retries double-charge. If WeDance is literally TT-powered
  there is barely a separate component to fail.

Open engineering questions to close before go-live:
- **Capacity source-of-truth / oversell guard:** carve out a FIXED block (e.g. N passes)
  for the WeDance slice so Weezevent and WeDance/TT physically cannot sell the same seat.
  Not "10% of everything" — a walled-off block.
- **Fee headroom:** year-2 "match Weezevent" pricing must cover TT's fee + WeDance margin.
  TT's flat fee is cheap; competitive research (in progress) confirms whether parity leaves
  room to earn.
- **Weezevent manual entry:** confirm Weezevent supports manual "externally paid" attendee
  import (assumed yes).

## Competitive analysis — Weezevent vs Ticket Tailor vs GoandDance (verified 2026-07-19)

Sourced platform fees below are from official pricing/T&C pages (source URLs in the
research files). Derived all-in costs are **illustrative models** with stated assumptions,
not quoted figures.

| Dimension | **Weezevent** (his current) | **Ticket Tailor** | **GoandDance** (dance-native) |
|---|---|---|---|
| Platform fee (EUR) | **2.5%/ticket, min €0.99**, banking incl. | **flat ~£0.60/ticket** (~£0.22 prepaid at volume); **0% of face** | **€0.83+VAT/ticket**; **3%+VAT over €28**; €0 manual |
| Card processing | **Bundled** into the 2.5% | **Passthrough** — organizer's own Stripe/PayPal/Square, TT takes 0 | Redsys/PayPal; **not disclosed** if on top |
| Payout timing | Rolling **1st & 16th**, before event | **Instant, at point of sale** | **First business day AFTER the event** |
| Holds your money? | **Yes** — collects into Weezevent's account | **No — never touches funds** | Intermediary; **fund-flow murky in own T&C** |
| Merchant of record | Organizer (WZ = collecting agent) | **Organizer** (TT = software only) | Organizer (GD = intermediary) |
| Pass+hotel+transport in one cart | **No native travel module** | **No** — generic add-on products only | **No** — hotel offloaded to 3rd-party operators |
| Discovery channel | No | No | **Yes** — built-in dancer audience (its one edge) |
| Data ownership | Shared; organizer gets data + GDPR burden | **Organizer = controller, owns data** | **Unclear**; broad worldwide IP-rights assignment |
| Governing law | French | English (£100 liability cap) | Spanish / Barcelona courts |
| Refund/chargeback risk | Organizer; **commission kept on refund** | Organizer | Organizer; fees non-refundable |
| Reputation | 4.7/5 but **"commission feels high"** | Strongly positive, cheap, direct payout | Thin footprint (9 reviews) |

### The two findings that decide the strategy

1. **Nobody sells the bundle.** Not even GoandDance, the dance-native platform — it
   offloads hotel to third-party travel operators. The exact pain the organizer told Alex
   about is **unsolved across all three.** That is WeDance's moat: the integrated
   pass+hotel+transport cart, built on TT's payment rails.
2. **Flat fee + bundling = compounding margin advantage.** Weezevent taxes the *whole
   order value* at 2.5%; TT charges a flat fee regardless of order size. Bundling (WeDance's
   whole point) inflates order value — so the bigger the bundle, the wider the gap between
   Weezevent's % and TT's flat fee. WeDance can be **cheaper than Weezevent AND keep real
   margin**, precisely on the bundled orders it's built to sell.

### Real unit economics (verified 2026-07-19, sourced Stripe/TT/PayPal pages)

**Two structural facts that reshape the pricing story:**

**(a) WeDance's own margin is clean.** Using Stripe **Connect direct charges** with the
organizer as the connected account + fee-payer, the organizer is merchant of record and
**Stripe + Ticket Tailor fees come out of the organizer's balance, not WeDance's.**
WeDance's fee is an `application_fee` = **near-pure gross margin** (less a 0.25% Connect fee
*only if* WeDance uses custom pricing controls, less overhead/VAT handling). So the tension
is NOT WeDance's margin — it's the **organizer's all-in vs Weezevent**.

**(b) Card ORIGIN dominates — and it can flip "we're cheaper."** Stripe charges by card
origin; **Weezevent's flat 2.5% (banking included) is card-origin-blind.** This matters
enormously for a Cuban/Timba festival with a global audience.

*Verified rails: Stripe EEA 1.5%+€0.25 · non-EEA 3.25%+€0.25 · +2% if currency conversion.
TT flat ~£0.60≈€0.70/ticket (bundle sold as ONE ticket type = one fee). Weezevent 2.5% incl. banking, flat regardless of card.*

| Order | Card | WeDance-on-TT all-in (organizer pays) | Weezevent all-in | vs Weezevent |
|---|---|---|---|---|
| €150 pass | EEA | €3.20 (2.1%) | €3.75 | **–€0.55 cheaper** |
| €150 pass | non-EEA | €5.83 (3.9%) | €3.75 | **+€2.08 dearer** ⚠️ |
| €150 pass | non-EEA + FX | €8.83 (5.9%) | €3.75 | **+€5.08 dearer** ⚠️ |
| €600 bundle | EEA | €9.95 (1.7%) | €15.00 | **–€5.05 cheaper** |
| €600 bundle | non-EEA | €20.45 (3.4%) | €15.00 | **+€5.45 dearer** ⚠️ |
| €600 bundle | non-EEA + FX | €32.45 (5.4%) | €15.00 | **+€17.45 dearer** ⚠️ |

**Read:** WeDance-on-TT beats Weezevent on **EEA cards** (big bundles especially — flat TT
fee vs Weezevent's %), but **LOSES on non-EEA/international cards**, because Stripe surcharges
card origin and Weezevent absorbs it into a flat 2.5%. For this organizer's global audience,
a blanket *"you'll never pay more than Weezevent"* promise is **unsafe as stated.**

**The fix — pass processing to the buyer (booking fee at checkout).** TT supports this
natively. Then the organizer's net is protected regardless of card origin, WeDance/TT vs
Weezevent becomes an apples-to-apples *platform-fee* comparison (where WeDance wins), and
card-origin cost is the buyer's, not the organizer's. Trade-off: higher buyer-facing price
→ watch conversion (which is exactly what the A/B test measures). Alternative: WeDance caps
/ absorbs the international surcharge as part of the free-year service (eats margin) — fine
for the pilot, not scalable.

**VAT note (needs Steuerberater):** WeDance's platform fee to the organizer is cross-border
B2B — **reverse charge** for an EU organizer (WeDance needs a USt-IdNr + ZM filing, even
under Kleinunternehmer §19), **out of scope** for a non-EU (Tunisia) organizer. Confirm
before invoicing. TT also gives nonprofits **50% off fees** — relevant if Corazón Cubano
e.V. ever fronts this.

### Pricing recommendation (replaces the earlier "soft anchor")

- **Year 1: €0 WeDance fee.** Organizer pays only their own rails. Cheaper than Weezevent
  all-in on **EEA** cards; **NOT** on international cards unless fees are passed to the buyer.
- **Make the promise safe by passing processing to the buyer** (booking fee at checkout —
  TT-native). Then the comparison vs Weezevent is on the *platform fee* only, card-origin
  cost is the buyer's, and WeDance's flat-fee advantage on bundles holds regardless of who
  pays with what card. Without this, "you'll never pay more than Weezevent" is **false for
  international cards** and must not be promised.
- **Year 2: a flat/capped per-ORDER fee, not a percentage.** Under Connect direct-charge
  (organizer = fee-payer), this fee is **near-pure WeDance margin** — rails hit the
  organizer, not WeDance. Flat capture beats Weezevent's % on big bundles.
- Referral/partner bounties (year-2 item) are funded from that flat-fee margin — size
  against real numbers, not the earlier back-of-envelope.

### Positioning line for the business case

WeDance is **not competing on being cheaper ticketing** — it ties: match-or-beat on price,
same organizer-as-merchant-of-record model, same data-to-you. It **wins on the two things
none of the three do**: (1) the **integrated pass+hotel+transport bundle**, and (2)
**instant direct payout** (via TT's rails) so the organizer has cash in hand before fronting
hotel costs — beating GoandDance's pay-after-event outright and Weezevent's hold-the-float.
Plus Alex on call. Price is neutralized; the win is product + cash-flow + service.

## Legal & contract framework (research 2026-07-19 — take to a lawyer, not legal advice)

**The central tension: the bundle is the moat AND the liability.** Combining pass + hotel +
transport into one order at an inclusive price is almost certainly a **"package" under the
EU Package Travel Directive (2015/2302)**. Whoever *combines and sells* the package becomes
the legally-liable **"organiser"** — strict liability for the whole trip's performance +
**mandatory insolvency protection/bonding**. The entire legal safety of the pilot depends on
**keeping WeDance a disclosed technology facilitator and the festival organizer the
organiser/principal/merchant-of-record** — in the contract, the checkout UI, AND the
pre-payment disclosures, all three. Good news: the Stripe Connect direct-charge model
(organizer = MoR) already aligns with this; it must be reinforced, not accidentally broken.

**Ranked risks:**
1. **WeDance deemed the "package organiser" by facilitating the bundle (HIGH).** Mitigate by
   structuring WeDance as disclosed agent + organizer as principal, disclosed to the buyer
   before payment. Contract + UI both must say it.
2. **Tunisia / PTD Art 20 (HIGH, sharpest).** A German "retailer" selling a **non-EEA
   (Tunisian)** organiser's packages can **inherit the insolvency-protection duty** unless it
   proves the organiser complies. Plus non-EU VAT/TOMS wrinkles, **no GDPR adequacy** for
   Tunisia (needs SCCs), and a practical blocker: **Stripe may not support Tunisian payout
   accounts at all** — which would break the direct-payout architecture for that festival
   specifically. **Verify Stripe-Tunisia support early; it can invalidate the whole flow.**
3. **PTD pre-contract disclosures at checkout (MED-HIGH)** — WeDance's checkout must render
   the mandated package info/insolvency notice before payment, or the organizer is
   non-compliant *through WeDance's product*.
4. **GDPR (MED-HIGH)** — WeDance = processor, organizer = controller; mandatory **DPA**;
   EU→Tunisia PII transfer needs **SCCs + transfer impact assessment**.
5. **VAT/TOMS (MED)** — a *disclosed platform fee* keeps TOMS on the organizer, not WeDance;
   reinforces the same "disclosed agent" structure. Non-EU organizer needs a **tax adviser**.
6. **Refunds/chargebacks (MED, clean if structured)** — under organizer-as-MoR these sit
   with the organizer; WeDance terms must **disclaim** all of it.

### Verified facts that resolve the sequencing (2026-07-19)

- **Timba Paradise → Saarbrücken, GERMANY (EU).** **Cuba in Tunisia → Monastir, Tunisia
  (non-EU).** He runs one EU festival and one non-EU festival — that's the whole answer to
  "where do we pilot the bundle."
- **Stripe does NOT support Tunisia** (nor does PayPal for *receiving* payouts). A
  Tunisia-registered entity cannot get direct card payouts. **But payout follows the
  legal ENTITY, not the festival location** — and his Tunisia festival is run by "**CIT
  Events LTD**," an "LTD" (Tunisia uses SARL/SA, so this is very likely a UK/EU/offshore
  entity, not Tunisian). **Key question to ask him: where is his ticketing company
  registered?** If it's UK/EU, Stripe works and direct payout holds for both festivals. If
  it's genuinely Tunisian, the Tunisia festival needs an EU/US entity, Payoneer, or a
  different rail.
- **Two separate axes, don't conflate them:** *payout rail* follows his company's country;
  *travel-law/PTD liability* follows the festival's country (Tunisia = the hard one).

**Resolved rollout plan:**
- **Pilot the FULL bundle on Timba Paradise (Germany).** EU festival + German law = *same
  jurisdiction as WeDance* + Stripe works natively = the cleanest possible legal and
  technical footing. This is where pass+hotel+transport should debut.
- **Cuba in Tunisia = ticketing-only in year 1** (the organizer already sells hotel/
  transport via his own operators, so pass-only is not a downgrade). Add the bundle there
  only after the PTD Art-20 insolvency-inheritance question is lawyer-cleared and the payout
  entity is confirmed.
- **Phase gate for the bundle anywhere:** (a) German travel/consumer lawyer confirms the
  disclosed-facilitator structure, (b) organizer evidences EU-facing insolvency protection,
  (c) payout rail confirmed for that entity. "One thing at a time": ticket first, bundle
  second — gated on the legal setup, not deferred to year 2.

**Blunt point for Alex:** package-travel liability and insolvency protection are **statutory
obligations you cannot absorb with "I'm on call 24/7."** The 24/7 posture covers tech/ops;
it does not cover PTD. This is the one area where "it's all on me" is the wrong instinct —
it's on the legal structure and the organizer's bonding. Budget for a lawyer + tax adviser.

**Contracts to draft (checklist):**
- **(a) Organizer/Platform Services Agreement** — WeDance = disclosed tech facilitator;
  organizer = sole organiser/principal/MoR responsible for PTD, insolvency protection,
  refunds, chargebacks, cancellation, hotel/transport delivery. Warranties + insolvency
  proof as **condition precedent** to enabling bundled checkout. Liability disclaimer +
  organizer indemnity. Free year-1 → paid; fee stated as **platform/facilitation fee**.
  Data export + deletion on exit.
- **(b) Data Processing Agreement (GDPR Art 28)** — processor/controller split, security,
  sub-processors (TT, Stripe), **SCCs for EU→Tunisia**, deletion on exit.
- **(c) Attendee-facing Terms = the ORGANIZER's terms** — organizer named as
  organiser/seller/MoR; PTD info + insolvency notice before payment; WeDance carries no
  refund obligation.
- **(d) Sub-processor disclosures** — Stripe (organizer as MoR) + Ticket Tailor, consistent
  with their merchant terms.

**Two specialists needed:** (i) German/EU travel-and-consumer-law lawyer, (ii) VAT/tax
adviser (Steuerberater) — entangled questions, different experts.

## The fork you need to pick — what the pilot actually is

"His clients see/click" splits two ways, and they're worth very different things:

- **A — Clients *buy* on WeDance** (WeDance takes payment, handles the bundle; you mirror
  the order into Weezevent for ops). This proves the thing that matters — that your
  bundled checkout converts better than Weezevent. Real pilot. Requires the direct-payout
  answer below.
- **B — Clients see a nicer WeDance page, then click through to Weezevent to pay.** Truly
  "one thing at a time," zero money/ops risk — but WeDance never proves its checkout
  advantage, so year 1 teaches you nothing about the hard part. Weak pilot.

I read your plan as **A** (the A/B is about the *purchase* system, not just the page). The
one-pager is written for A. Confirm — because if it's B, the whole money-flow section
changes and the pilot's value drops.

## Partner / referral — year-2 design item (NOT in the pilot doc)

Alex's idea: reward the organizer for referring WeDance to other organizers. Sound
instinct (turns endorsement into a channel), but:
- It's a share of revenue that doesn't exist in year 1 (free). Inherently year-2+.
- Formalizing it in the pilot proposal muddies the "gift, no catch" framing — makes him
  look like our salesman before he's even a user.
- Can't give away a margin we don't have: "match Weezevent" + riding TT's rails = thin
  margin. Any referral % must be sized against real unit economics (research in progress).
  **Never promise perpetual rev-share** — unbounded, unwindable liability.
- Structure as **partner/ambassador** (dignified, optional, disclosable), not an affiliate
  link. Tie reward to *successful onboarding*, not raw intros, to protect referral quality.

Decision: plant a soft forward line in the proposal ("if it works and you want to open it
to other organizers, we'll set up proper partner terms"), formalize the number in year 2.
Lean: **one-time bounty per onboarded referred festival**, or capped 12-month rev-share.

## Decisions I need from you

1. **Fork A or B** (above). I've assumed A.
2. **Payout model** — if A: can WeDance route funds directly to the organizer's account
   today? (Yes → send as written. No → we soften the money-flow line and you flag it as
   the one thing to build first.)
3. **Language** — English, or Spanish? (Draft is English; 5 min to translate.)
4. **Year-2 anchor** — keep the soft directional price line, or strip it and say "we'll
   figure out fair pricing together after year 1"?

---

## EMAIL DRAFT (short, warm, to the organizer)

> **Subject:** WeDance for [Festival] — the ticketing setup we talked about
>
> Hey [Name],
>
> Great catching up the other day. As promised — here's the whole thing written down so
> you can share it with your partner.
>
> Short version: you keep Weezevent running exactly as it is, and **your team keeps
> working in it exactly as they do today** — nothing changes in your back office. The only
> thing we change is what a small slice of your customers see and click (start at 10%), so
> you can compare the two side by side with zero risk. We start simple — just the ticket
> checkout — to prove it. Then we layer in the part Weezevent makes painful: hotel,
> transport and passes in one order, which is what WeDance is really built for. Year one is
> on me: no platform fee, money goes straight to your own account, and I'm personally on
> call the whole way through.
>
> The one-pager below has the details — how the money flows (straight to your account,
> I never touch it), what I'm asking in return, and how you walk away anytime if it's not
> better than what you have.
>
> Take your time with your partner. Any question at all, I'm one message away.
>
> — Alösha

---

## ONE-PAGER (forwardable — this is what the partner reads)

### WeDance × [Festival] — a zero-risk year

**The problem you told me about:** your festivals sell *experiences*, not tickets — hotel,
transport, passes, extras, bundled. Weezevent treats them like flat event tickets, so the
sales process fights you. WeDance is built for exactly these bundles.

**We change exactly one thing — what your customer clicks. Nothing else.**
- **Your team's workflow does not change.** They keep working in Weezevent exactly as
  today — same check-in, same rooming lists, same transport manifests. No new tool to
  learn, no migration, no retraining.
- The *only* thing that changes is the buy experience a small slice of your customers see.
  Everything a WeDance order needs to become inside your existing system, I handle behind
  the scenes — so from your team's chair, it's business as usual.
- One change at a time. That's the whole philosophy: we never touch two things at once, so
  nothing can break in a way we can't instantly undo.

**How we roll it out — two safe steps, no risk, nothing to switch off:**
- **Step 1 — ticketing.** Weezevent keeps running. Your "Buy tickets" link splits traffic:
  **90% Weezevent, 10% WeDance** to begin. You (or I) can change that split — or switch it
  fully back to Weezevent — **instantly, anytime.** We compare on real numbers: checkout
  completion, support load, refund rate. You're never locked into an experiment.
- **Step 2 — the full package.** Once ticketing is proven, we turn on the thing Weezevent
  can't do cleanly: **pass + hotel + transport in one order.** We switch this on only when
  it's set up properly on your side — deliberately, one step at a time.
- Year one ends with a verdict, not a guess.

**Your money, your data — protected:**
- **Funds settle directly to your account.** WeDance never holds your money. No waiting
  on us for payouts.
- **Your customer data is yours.** Full export anytime, no strings.
- **No lock-in.** If year two doesn't make sense, you take your data and walk. Nothing to
  claw back.

**What it costs you in year one:**
- **€0 platform fee.** You pay only the real card-processing cost (the same processor fee
  you already pay anywhere). No WeDance markup on top.
- Your festival website: already built, my gift, yours to keep either way.

**What I ask in return:** your honest feedback while we polish it, and — if it works as
well as I think — a testimonial and an intro or two to organizer friends. That's it.

**Support:** I'm personally on call for you throughout — [WhatsApp/phone], not a ticket
queue. During the festivals themselves, I'm reachable around the clock.

**Year two:** once it's proven, we sit down and agree fair terms together — a small flat
fee per order, designed so it's **never more than what you pay today**. Directional, not
binding — we decide it with a year of real data in front of us.

**Next step:** you and your partner take your time. When you're ready, we do a 30-minute
setup call and turn the 10% on for your next on-sale.
