# Brand Bureau — Sprint Plan (Artist Vertical Launch)

**Date:** 2026-04-25
**Owner:** Кирилл (decisions) + Maya (orchestration)
**Horizon:** 2 weeks tactical · 6 weeks strategic
**Source files:**
- Strategic input: `.claude/agent-memory/maya/brandbureau-sprint-input.md`
- Marco (commercial): `.claude/agent-memory/marco/brandbureau-funnel-eval.md`
- Luna (content): `.claude/agent-memory/luna/brandbureau-content-strategy.md`
- Viktor (tech): `.claude/agent-memory/viktor/brandbureau-tech-plan.md`
- Kai (lead engine): `.claude/agent-memory/kai/brandbureau-lead-engine.md`
- Sage (capacity): `.claude/agent-memory/sage/brandbureau-capacity-check.md`

---

## TL;DR

Sage holds the most important verdict: **launch in MVP mode, not PUSH.** Brand Bureau would be the 6th parallel initiative against an explicit ≤3 stop-rule. The funnel logic is right; the timing risk is real.

Kirill's two new additions (GDPR consent + AI-assisted naming + 5-tier artist sub-ladder €150–€3 500+) sharpen the offer significantly and resolve the ladder-jump problem Marco flagged.

**Recommended sprint shape:**

- **Week 1 (build):** ship `/artists` page with real Kirill photos, capture form, Airtable, GDPR consent, Profile Check delivery template. NO ManyChat / NO email sequence yet.
- **Week 2 (organic seed):** publish 1 SDTV post (Profile Check launch), do first 5–10 manual Checks, learn pattern.
- **Week 3+ (decide):** based on Week 2 data, either build automation (ManyChat + email) OR shut down and keep site as passive inbound.

---

## Three decisions Kirill must make today

These are the only blockers. Everything else flows from them.

### Decision 1 — Capacity reality

> Какая из 5 текущих инициатив паркуется на паузу, чтобы освободить 10–15 ч/нед на Brand Bureau?

If the answer is *"найду время"* → automatically downgrade to MVP (1 post/week, 4 manual Checks/week, no automation). Sage's verdict.

**My read:** SDTV festival sales cycle is Q2-critical. WeDance pilot blocked on TSDF (Jun 5–8). Lumen Atelier is GO-decision by Apr 30. Arancha brand is unified-vision-done. → No initiative looks parkable without breaking something. → **MVP is the honest path.**

### Decision 2 — Ladder shape

Marco's data-driven proposal vs Kirill's revised ladder differ at the entry tier:

| Tier | Marco's proposal | Kirill's revised (today) |
|------|------------------|--------------------------|
| Free | Profile Check | AI-assisted Artist Profile Check |
| Low-ticket | — | **Artist Profile Fix €150–250** ← new |
| Starter | Image Starter €890 | Image Starter €500–900 |
| Sprint/Mid | **Sprint €2 400** ← Marco's gap-filler | — |
| Core | Opening €6 500 | **Signature Presence €1 500–3 500+** ← lower than Brand Bureau core |
| Retainer | €4 800/mo | €600–1 500/mo |

**Conflict:** Kirill's artist sub-ladder runs €150 → €3 500. Brand Bureau core runs €4 200 → €18 000. They serve different ICPs.

**Recommended resolution (mine, awaiting Kirill ack):**
- Adopt Kirill's 5-tier artist sub-ladder as **separate sub-product** ("Brand Bureau · Artists" or just keep under Brand Bureau master brand)
- Profile Fix at **€200** (not range — single price reduces friction)
- Image Starter at **€790** anchor + **€590 early-bird first 12** (Marco's economics defend €590 floor at 11.5h labor; sub-€500 = loss-leader, kill it)
- Signature Presence at **€2 400** (this IS Marco's missing middle-tier — collapse them)
- Retainer at **€800/mo** entry, **€1 500/mo** premium
- Brand Bureau core (Opening / Signature / Positioning / Retainer at €4 200–€18 000) stays unchanged for non-dancer verticals

**Net ladder for artists (recommended):** €0 → €200 → €590/790 → €2 400 → €800/mo. Clean ~3× steps. No €890→€6 500 jump.

### Decision 3 — Wife consultation

Sage flagged this and he's right: this funnel doubles wife's SMM load (SDTV Studio Notes editorial vertical = new channel + tone + cadence). Without explicit yes from her on:

1. 1 extra editorial post/week on SDTV
2. Co-pilot on 4 manual Profile Checks/week (~2 h/week)
3. Vertical visual signature work (Luna's spec)
4. Cross-promo timing approval (so it doesn't clash with festival deliverables)
5. Rights review of Russian-period photos before any goes live
6. Holiday/recovery commitments she doesn't want disturbed

→ **MVP defaults to "no" until conversation happens.**

---

## Sprint goal (if all 3 decisions GO)

> "Validate that the SDTV → Artist Profile Check → paid offer funnel produces ≥5 paid Starters in 6 weeks, without breaking SDTV festival pipeline or wife's SMM rhythm."

Single sentence. Measurable. Has a kill-switch.

---

## Conflicts where agents disagreed — resolved

| Topic | Agents | Resolution | Why |
|-------|--------|-----------|-----|
| Ladder | Marco €890 + €2 400 sprint | Kirill €150–250 + €500–900 + €1 500–3 500 + €600–1 500/mo | Kirill's revised ladder + my reconciliation: collapse Signature Presence into Marco's missing-middle (€2 400). Single anchor pricing, not ranges. |
| Site path | Viktor: dedicated `/artists` (SEO + attribution) | Kirill: `/apply?vertical=artist&check=ai-profile` (query param) | **Take both:** ship `/artists` as marketing landing (Viktor's SEO win), submit form posts to `/api/profile-check` with `vertical=artist&check=ai-profile` payload (Kirill's attribution). Best of both. |
| ManyChat flow length | Kirill: 5 questions before capture | Kai: 3 questions max (5 kills 30% of warm leads) | Kai. Trim to 3 (gate / pain / IG+contact). Move segmentation to AFTER capture. |
| Russian photos as cases | Kirill: real photos with stories | Luna: rename "Cases" → "Image Studies" + disclaimer + anonymized by default | Luna. Don't fabricate business outcomes. "Image Studies" is more premium than fake case studies. **Legal blocker:** Marco/Viktor confirm model release status BEFORE any identifiable photo goes live. |
| Editorial vertical name | Kirill: "Artist Image Check by SDTV" | Luna: "SDTV Studio Notes" (vertical) + "Artist Profile Check" (offer) | Luna. "Check" reads transactional for the vertical name; perfect for the offer. Two-name split protects authority. |
| Voice (SDTV party vs BB premium) | — | Luna: 3-layer bridge voice in Studio Notes — calmer than SDTV, warmer than BB, first-person plural | Adopt Luna's Studio Notes voice spec. |
| AI angle | Kirill (today): "AI-assisted, reviewed by SDTV" | (no agent input — was added late) | Adopt as-is. Strong premium signal. Build AI prompt that produces 5-sub-score output → human polish. |
| Free Check capacity | Kirill: organic + retargeting → unbounded | Kai: 4/week cap + waitlist | Kai. Cap = scarcity = perceived value. Kirill burns out fast at unbounded. |
| Capacity verdict overall | Marco: feasible at Priority C | Sage: MVP only or DEFER | **Sage.** Sprint goal numbers downsize accordingly. |
| Brand Bureau ↔ SDTV public connection | Marco: keep private (B2B risk) | Kirill: lean into "Powered by SDTV" | **Hybrid:** "AI-assisted by Social Dance TV" inside Studio Notes vertical (creates a media product, not a vendor cross-sell). Brand Bureau master brand stays private from SDTV's organizer audience. |

---

## Sprint scope

### Week 1 — Build foundations (build before publishing)

| # | Task | Owner | Effort | Blocker |
|---|------|-------|--------|---------|
| 1.1 | Cloudinary account + upload 30 portraits + naming convention | Kirill | 2h | Photo curation decision (which models, release status) |
| 1.2 | Install `@nuxt/image`, migrate `cases.vue` to `<NuxtImg>` | Viktor | 2h | — |
| 1.3 | Build `/artists` landing page (reuse Hero, Tiers, FAQ; new ProfileCheckForm + BeforeAfterStudy components) | Viktor | 6h | Luna hero copy ✓ ready |
| 1.4 | Rename `data/cases.ts` → `data/imageStudies.ts`; add disclaimer line; drop in 3 Luna templates | Viktor + Luna | 2h | Luna templates ✓ ready |
| 1.5 | `/api/profile-check.post.ts` server route: validate → write Airtable → send Resend confirm + GDPR-compliant consent record | Viktor | 4h | Privacy Policy text needed |
| 1.6 | Privacy Policy page + GDPR consent checkbox in form | Viktor + Marco (legal text) | 2h | Marco approval on text |
| 1.7 | Airtable base (Profile Checks: 10 fields, 4 views) | Kai | 1h | Account creation |
| 1.8 | Profile Check delivery template (5-section Markdown, ready to fill) | Kirill + Luna | 2h | Spec ✓ in input file §14 |
| 1.9 | Plausible install + `profile_check_submit` event | Viktor | 0.5h | — |
| 1.10 | Wife consultation (6 questions from Sage's check) | Kirill | 1h | **Hard blocker — must precede 2.1** |

**Week 1 total:** ~22h Kirill+Viktor combined. Checkpoint: Apr 30 (Wed). Go/no-go for Week 2.

### Week 2 — Organic seed + first 5 Checks

| # | Task | Owner | Effort | Note |
|---|------|-------|--------|------|
| 2.1 | Publish post #1 on SDTV (Reel: "Your dancing is strong. But does your IG show it?") + caption with `Comment ARTIST` CTA | Wife (publish) + Kirill (record) + Luna (caption) | 3h | First real test |
| 2.2 | Manual reply to commenters with link to `/artists` (no ManyChat yet — keeps the conversation human, validates before automating) | Kirill | 30 min/day for 5 days | — |
| 2.3 | Deliver first 5 Profile Checks (manual, using template, ≤72h SLA) | Kirill | 2.5h × 5 = 12.5h | **Bottleneck — sized at 4/week max, 5 means OK if no festival deal hits this week** |
| 2.4 | After each Check, log in Airtable: pain pattern, intent signal, willingness-to-pay reaction | Kai | 30 min total | Pattern recognition |
| 2.5 | Mid-sprint check (Apr 29): leading indicators OK? (sleep ≥6.5h, festival pipeline still moving, wife not stressed) | Sage + Maya | 30 min | **If any red flag → pause Week 3** |

### Week 3+ — Decide based on data

After Week 2 data:

- **If ≥3 of 5 commenters convert to paid Profile Fix or Starter →** build ManyChat Flow A + email seq + scale post cadence to 1/week sustainable. Lock pricing at recommended anchor (€790 Starter / €200 Profile Fix).
- **If 0–2 convert →** keep `/artists` page as passive inbound, do not invest more, revisit in Q3 when festival cycle calms.
- **Either way:** delete unused Cal hidden events (15min/30min/secret) + add Resend `List-Unsubscribe` headers + ship Privacy Policy as production-ready (not draft).

---

## Stop-rules (non-negotiable)

Trip ANY of these → pause Brand Bureau for 1 week, run Sage check-in:

1. Kirill sleep <6h average over 5 days
2. SDTV festival pipeline drops below 2 active deals while Brand Bureau active
3. Wife says "не получается"
4. >5 unanswered Profile Check leads in queue (>72h SLA breach)
5. Any festival organizer mentions confusion ("you sell to artists now?")
6. Apr 30 → no GDPR-compliant Privacy Policy live (ship-blocker, not stop-rule)

Trip ALL of these by Jul 30 (3-month audit) → kill funnel, keep `/artists` page passive:

- Fewer than 3 paid Starters
- Fewer than 25 Profile Checks delivered
- Conversion DM-keyword → Profile Check capture <2%
- Any single Wife/Kirill burnout signal Sage can verify

---

## Success metrics (Week 1 + 6)

| Metric | Week 1 target | Week 6 target |
|--------|---------------|---------------|
| `/artists` page live with real photos | YES | — |
| Privacy Policy live | YES | — |
| Profile Checks delivered | 0 | 25 |
| Profile Fixes sold (€200) | 0 | 4 (€800) |
| Image Starters sold (€590–€790) | 0 | 3 (€2 200) |
| Signature Presence sold (€2 400) | 0 | 1 (€2 400) |
| Total revenue | €0 | **€5 400 cohort 1** |
| Kirill weekly hours on BB | ≤4 (build week ≤22 once) | ≤8 |
| SDTV festival pipeline change | unchanged | unchanged or up |
| Wife stress signal (Sage check) | green | green |

---

## Owner table

| Domain | Owner | Co-pilot |
|--------|-------|----------|
| Decisions (1, 2, 3) | Kirill | Sage (challenge), Marco (numbers) |
| Sprint orchestration | Maya | — |
| Photo curation + release status | Kirill | Marco (legal) |
| `/artists` build | Viktor | Luna (copy) |
| Airtable + ManyChat-later | Viktor | Kai |
| Profile Check delivery | Kirill | Wife (image-side) |
| Editorial vertical (Studio Notes) | Wife | Luna (voice + visual signature) |
| Privacy Policy + GDPR | Marco | Viktor (implement) |
| Capacity / well-being | Sage | Maya |
| Mid-sprint check (Apr 29) | Maya + Sage | — |

---

## What we are explicitly NOT doing in this sprint

(Everything below was proposed by some agent or by Kirill and is being parked. Listed here so it's not lost — promote when data justifies.)

- ManyChat Flow A/B/C automation (Week 3+ decision)
- 4-email nurture sequence (Week 3+ decision)
- Meta retargeting / FB Pixel install (Week 3+ decision)
- LinkedIn outreach for founder/doctor/coach verticals (Q3 earliest)
- Spanish version of `/artists` (after EN funnel validated)
- Stripe checkout (Cal call closes manually for now)
- Airtable → Monday/Notion CRM merge
- Artist Visibility Retainer page (after first paying Starter)
- Cal webhook → branded Resend confirmation
- Hidden Cal event cleanup (5-min hygiene, low priority)

---

## Open questions (ack from Kirill needed)

- [ ] Decision 1 — capacity reality (which initiative pauses?)
- [ ] Decision 2 — ladder pricing (accept reconciled €0 / €200 / €590-790 / €2 400 / €800-1500/mo?)
- [ ] Decision 3 — wife consultation result (date scheduled?)
- [ ] AI-assisted Check: who builds the AI prompt? (Viktor or external)
- [ ] Russian-period photos: which models have release? Curate set BEFORE Cloudinary upload.
- [ ] First post date target: 2026-05-05 (Mon) — confirm or shift?
