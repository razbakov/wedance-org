# Architecture Migration Audit — 2026-04-27

**Owner:** Кирилл
**Author:** Maya
**Trigger:** Кирилл — "по всем проектам должно быть всё хранится внутри каждого проекта и организации... Проверь что ничего критического не упущено и давай сделаем такой анализ выгрузку в текущие проекты."
**Status:** APPROVED — execution starts. Master-brief placement still pending diff-сверка.

---

## TL;DR

- **30+ артефактов** размещены не по архитектурному принципу, установленному 2026-04-26
- Большинство — в `~/Orgs/ikigai/strategy/` (15 SDTV-файлов!) и в agent-memory dump'ах (brandbureau full strategy, SDTV Site, Arancha)
- **План:** 6 PR'ов, по одному на проект. ~30-45 мин при последовательном выполнении (1-5 могут быть в parallel — разные репо)
- **1 открытый вопрос:** где должен жить `sdtv-master-brief.md` (рекомендация = sdtv-org, ждём diff с `02_POSITIONING_AND_BUSINESS_MODEL.md`)

---

## Архитектурный принцип (от 2026-04-26)

| Слой | Что хранит | Edits go to |
|------|-----------|-------------|
| `~/Projects/<project>/` | Operational source of truth (canonical playbooks, specs, decisions, deals) | Canonical first |
| `~/Orgs/<org>/` | Org-level governance (S3, agent definitions, ops rhythm, strategy digests, personal/) | Stays |
| `~/Orgs/<org>/.claude/agent-memory/` | Agent-specific lens + pointer to canonical | Pointer-only |
| `~/.claude/.../memory/MEMORY.md` | Auto-memory index (1-line pointers) | Index-only |

Правило: знание живёт в одном месте (canonical) и оттуда ссылается. Agent dumps и memory — **lens'ы и индексы**, не копии.

---

## Аудит — где сейчас vs где должно быть

### 🔴 P0 — операционная боль, теряем деньги/качество

| Сейчас | Должно быть | Почему критично |
|--------|-------------|-----------------|
| `strategy/sdtv-smm-playbook.md` | `~/Projects/smm-festivals/playbook.md` | Луна работает с этим **ежедневно** |
| **6 brandbureau dumps** (kai/luna/marco/maya/sage/viktor) | `~/Projects/brandbureau/` (canonical docs) | Целая стратегия проекта только в head'ах агентов |
| **6 Arancha файлов** в `strategy/` (vision md+ES+RU PDF, primer, mindmap, sprint-analysis) | `~/Projects/arancha-brand/` | Жена-проект "запускаем" — а файлы в org strategy |
| `viktor/sdtv-admin-brief-state.md`, `-ux-brief-v2.md`, `-capture-system.md` | `~/Projects/sdtv-main-site/docs/` | Это техdoc для кода, который уже в main-site |
| `strategy/sdtv-portal-notification-strategy.md` | `~/Projects/sdtv-festivals/portal-notification-strategy.md` | Commercial follow-up — рядом с deals |
| `strategy/sdtv-master-brief.md` | **ОТКРЫТО** (см. §"Master-brief") | Foundational SDTV doc, 321 строки |
| `marco/sdtv-pending-inputs.md` | `~/Projects/sdtv-festivals/pending-inputs.md` | Living doc что нужно от Кирилла |

### 🟡 P1 — архив/консолидация

| Сейчас | Должно быть |
|--------|-------------|
| `strategy/sdtv-promo-2026-{kai,luna,marco,sage}-verdict.md` (4) + `-review.md` | `~/Projects/sdtv-festivals/archive/promo-2026/` |
| `strategy/sdtv-promo-template-strategy.md`, `sdtv-promo-plan-v25-spec.md` | `~/Projects/smm-festivals/` |
| `strategy/sdtv-system-upgrades-v2.md` | `~/Projects/sdtv-main-site/specs/` |
| `strategy/sdtv-admin-migration-spec.md`, `sdtv-dashboard-spec.md` | `~/Projects/sdtv-main-site/specs/` |
| `strategy/sdtv-artist-management-service.md` | `~/Projects/sdtv-festivals/` (или новый sdtv-artists-service?) |
| `maya/priority-portal-demo.md`, `maya/sdtv-client-form-v3.md` | `~/Projects/sdtv-main-site/` |
| `strategy/agent-communication-audit-2026-04-25.md`, `alex-system-adoption-2026-04-25.md`, `projects-mapping-2026-04-25.md` | `~/Orgs/ikigai/ops/audits/` |
| `strategy/architecture-migration-audit-2026-04-27.md` (этот файл) | Stays in `strategy/` пока active. После execution → `ops/audits/` |

### 🟢 P2 — правильно размещены, но нужны pointers

| Артефакт | Действие |
|----------|----------|
| `strategy/business-operating-picture-2026-04-22.md` | **Stays** (org-level digest), добавить ссылки в README |
| `strategy/personal-brand-kirill.md` | **Stays** (org-level — Кирилл = trust layer всех проектов) |
| `strategy/okrs-q2-2026.md` | **Stays** (org OKRs) |
| `strategy/sdtv-3funnel-ecosystem.md` | **Stays** (cross-project SDTV reference, уже canonical) |
| `strategy/icp-one-pager-v1.md` | **Stays** (org-level B2B ICP, validated by Kirill 2026-04-27) — или переместить в sdtv-festivals? Решить отдельно. |
| `strategy/offer-cards-v1.md` | **Stays** (org-level B2B offer architecture) — или переместить в sdtv-festivals? Решить отдельно. |
| `maya/operational-tax-principle.md` | **Stays** (Maya's lens), добавить ссылку из CLAUDE.md |
| `maya/ig-fb-automation-safety-2026-04.md` | **Stays** (правило в CLAUDE.md, dump = детали) |
| `maya/rules.md` | **Stays** (Maya's personal operating rules) |
| `kai/community-team.md` | Перенести в `~/Projects/sdtv-festivals/community-moderators.md` |

---

## Master-brief — открытое решение

`~/Orgs/ikigai/strategy/sdtv-master-brief.md` (321 строки, last updated 2026-04-06).
Содержит: identity, brand, history, value philosophy, event-phase logic, client types, offer tiers, product matrix, lead handling, CRM logic, renewals, team model.

**3 варианта размещения:**

| Variant | Где | Pro | Con |
|---------|-----|-----|-----|
| **A (рекомендация)** | `~/Orgs/sdtv-org/02_POSITIONING_AND_BUSINESS_MODEL.md` | Уже существует в S3 governance, тематически точно туда | Нужен diff — перекрытие unknown |
| **B** | `~/Projects/sdtv-festivals/master-brief.md` | Festivals = primary B2B engine, всё проходит через него | Master brief шире чем festivals (есть B2C/dancers, artists, brands) |
| **C** | Stays в `~/Orgs/ikigai/strategy/` | Минимум изменений | Не следует архитектуре — это identity-level doc для всего SDTV-бизнеса |

**Action:** перед миграцией — diff `sdtv-master-brief.md` ↔ `~/Orgs/sdtv-org/02_POSITIONING_AND_BUSINESS_MODEL.md`. Если 02_POSITIONING шире/новее → удалить master-brief. Если master-brief точнее → вмерджить, удалить дубликат.

Maya рекомендация: **A.** Подтверждение Кирилла — после диффа.

---

## План — 6 PR'ов

Каждый PR изолирован (разный repo для большинства), может выполняться в parallel.

| # | PR | Repo | Files | Содержит |
|---|----|------|-------|----------|
| 1 | `feat: brandbureau canonical docs` | `Kirkors/brandbureau` | 6 new + 6 pointer-обновлений | lead-engine, content-strategy, funnel-eval, sprint-input, capacity-check, tech-plan |
| 2 | `feat: arancha brand canonical docs + assets` | `Kirkors/arancha-brand` | 6 move + README | vision (md+ES+RU PDF), primer-video, mindmap, sprint-analysis |
| 3 | `feat: sdtv-festivals — master brief + pending inputs + portal + archive` | `SocialDanceTV/sdtv-festivals` | ~10 | master-brief (placement TBD), pending-inputs, portal-notification, artist-mgmt, promo-2026 archive, community-moderators |
| 4 | `feat: sdtv-main-site — admin/capture/site specs` | `SocialDanceTV/sdtv` | ~6 | admin-brief-state, admin-ux-brief, capture-system, system-upgrades, dashboard-spec, client-form-v3 |
| 5 | `feat: smm-festivals — SMM playbook + promo templates` | `SocialDanceTV/smm-festivals` | 3 | smm-playbook (CRITICAL), promo-template-strategy, promo-plan-v25 |
| 6 | `chore: ikigai — strategy cleanup + audits archive + agent-memory pointers` | `razbakov/wedance-org` (master) | direct commit | rationalize strategy/, переместить audits в ops/, обновить pointers |

**Order of execution:**
1. **PR 1 (brandbureau)** — самый большой knowledge-долг, изолирован, не зависит ни от чего
2. **PR 2 (arancha)** — изолирован, простой move + README update
3. **PR 5 (smm-festivals)** — критичный playbook для Луны
4. **PR 4 (sdtv-main-site)** — техдок к коду, уже в репо
5. **PR 3 (sdtv-festivals)** — после диффа master-brief
6. **PR 6 (ikigai cleanup)** — последним, зависит от всех остальных (pointers ссылаются на новые места)

После каждого PR: обновить agent-memory pointers + MEMORY.md строку.

---

## Definition of Done

- [ ] Все 30 артефактов перенесены или явно помечены "Stays + pointer"
- [ ] Все agent-memory dumps имеют `> CANONICAL: <path>` сверху
- [ ] MEMORY.md содержит pointer-строку на каждый canonical doc
- [ ] `~/Orgs/ikigai/strategy/` содержит только org-level docs (digests, OKRs, personal-brand, cross-project ICP/offer-cards если решим оставить)
- [ ] Все 6 PR'ов merged
- [ ] CLAUDE.md обновлён где ссылки изменились (особенно `## SDTV Context` если master-brief переехал)

---

## Изменения архитектурных правил, которые этот аудит проявляет

1. **Audits теперь живут в `~/Orgs/ikigai/ops/audits/`**, не в `strategy/`. После execution этот файл переедет туда.
2. **Strategy/ оставляем только для org-level cross-project docs** (digests, OKRs, personal-brand, cross-project frameworks). Project-specific = в проект.
3. **Каждый agent-memory dump SDTV-related должен иметь CANONICAL pointer** — установлено 2026-04-26.

---

## Следующее действие

Confirm + start execution. Default order: PR 1 (brandbureau) → 2 → 5 → 4 → 3 (after master-brief diff) → 6.

Или autopilot: я запускаю PR 1, 2, 5, 4 в parallel (разные repo, изолированы), потом возвращаюсь к master-brief диффу для PR 3, потом PR 6.
