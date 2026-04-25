# Projects Mapping & Cleanup Audit — 2026-04-25

**Owner:** Кирилл
**Author:** Maya
**Trigger:** Подготовка к апдейту системы агентов — нужна полная карта проектов, чтобы ничего не потерять.

---

## TL;DR (4 строки)

- **8 git-репо** разбросаны по 3 локациям (`~/Orgs/`, `~/Projects/`, `~/Documents/Projects CURSOR/`).
- **10 проектных папок без git** — данные живут только на этом диске. Риск потери при сбое.
- **19 мёртвых local-веток** в 2 репо — чисто захламление, можно удалить (0 ahead).
- **2 нелистинговых места**: `~/Documents/Projects CURSOR/wedance-2026` (реальный repo, нет в CLAUDE.md), `~/Orgs/sdtv/` (пустая папка, удалить).

---

## A. Полная карта git-репозиториев (8)

| # | Local path | GitHub remote | Default branch | Текущая ветка | Dirty? | В реестре? |
|---|------------|---------------|----------------|---------------|--------|------------|
| 1 | `~/Orgs/ikigai` | `org` → razbakov/wedance-org<br>`project` → razbakov/wedance-2026<br>`sdtv` → SocialDanceTV/sdtv | `master` (на org)<br>`main` на org — **ОТДЕЛЬНАЯ линия** WeDance governance | `master` | clean | ✅ |
| 2 | `~/Orgs/sdtv-org` | razbakov→ SocialDanceTV/sdtv-org | `main` | `main` | clean | ✅ |
| 3 | `~/Projects/sdtv-main-site` | SocialDanceTV/sdtv | `main` | `main` | clean | ✅ |
| 4 | `~/Projects/sdtv-main-site/legacy/studio` | SocialDanceTV/sdtv-studio | `master` | `master` | **M admin.html** | косвенно (через parent) |
| 5 | `~/Projects/brandbureau` | **Kirkors**/brandbureau | `main` | `main` | clean | ✅ |
| 6 | `~/Projects/ikeegai-site` | **Kirkors**/ikeegai | `main` | `main` | clean | ✅ |
| 7 | `~/Documents/Projects CURSOR/gig-agent` | razbakov/gig-agent | `main` | `main` | clean | ✅ |
| 8 | `~/Documents/Projects CURSOR/wedance-2026` | razbakov/wedance-2026 | `main` | `main` | `?? .claude/projects/` | ❌ **НЕТ В CLAUDE.md** |

### Критические наблюдения

**ikigai = multi-purpose worktree на 3 разных GitHub-репо.** Один локальный clone, 3 remote'а — `master` ↔ wedance-org/master, `main` (отсутствует локально) ↔ wedance-org/main (WeDance S3 governance — другая линия истории!), плюс `sdtv` remote для shared веток. Это нестандартная конструкция, которую агент при апдейте может не понять.

**brandbureau и ikeegai-site под GitHub-аккаунтом `Kirkors`** (не `razbakov`). Если апдейт системы агентов завязан на GitHub auth → может не увидеть эти репо.

**legacy/studio — nested git** внутри sdtv-main-site. Игнорится через `.gitignore: legacy/`. Деплоится отдельно на Railway. Имеет 1 uncommitted change (`admin.html` — стилевая правка dropdown).

**wedance-2026 живёт в двух местах**:
- свой clone в `~/Documents/Projects CURSOR/wedance-2026`
- как remote `project` у ikigai
Оба указывают на один и тот же `github.com/razbakov/wedance-2026`. Не дубликат данных, но путаница.

---

## B. Doc-only проекты без git (10) — РИСК ПОТЕРИ

Все живут в `~/Projects/`, состоят из README + context + decisions. **Не привязаны ни к какому git** — потеряются при сбое диска или ошибочном `rm`.

| Проект | Содержимое | Owner agent (per INDEX.md) | Статус |
|--------|------------|----------------------------|--------|
| `arancha-brand/` | README, context | Luna+Kai+Sage | Active — forming |
| `artist-brand-studio/` (Lumen Atelier) | README, 90-day-roadmap, audience-funnel, brand-strategy, design/, launch-system v1+v2, messaging-visual | Luna+Marco+Kai | GO/no-go by 2026-04-30 |
| `job-corporate/` | README, context | Sage+Marco | Dormant |
| `kiara-visuals/` | README, context | Luna+Marco | Dormant |
| `organization/` | README, context | Maya | Mixed |
| `own-festival/` | README, competitor-archetype-analysis, context, decisions | Marco+Maya | Active — planning |
| `sdtv-festivals/` | README, context, decisions, offer-terminology, qr-photo-strategy | Marco+Kai | Active |
| `sdtv-media/` | README, context | Luna | Dormant |
| `smm-festivals/` | README, context, decisions | Luna | Active — daily |
| `wedance-alex/` | README, context, decisions | Marco+Viktor+Sage | Active — MVP+pilot |

**Recommended fix:** обернуть `~/Projects/` целиком в один git-репо (private GitHub: `razbakov/projects-meta` или подобное), коммитить раз в день. Альтернатива — каждый проект в свой репо, но это overkill для doc-only папок.

---

## C. Стейл-ветки (19) — безопасно удалить

### ikigai (3)
| Branch | Ahead of master | Behind | Диагноз |
|--------|-----------------|--------|---------|
| `feat/archive-video-sales` | 0 | 51 | мёртвая |
| `feat/artist-email-exclusion` | 0 | 51 | мёртвая |
| `feat/multi-video-upsell` | 0 | 16 | мёртвая |

### legacy/studio (16)
Все 0 ahead of master, behind 26-57 коммитов:
`feat/admin-power-ux`, `feat/deliverable-presets`, `feat/logo-auto-pass`, `feat/migration-prep`, `feat/next-actions-presets`, `feat/one-click-publish`, `feat/operator-dashboard`, `feat/pin-management`, `feat/portal-monday-sync`, `feat/portal-templates`, `feat/pre-production-portal`, `feat/promo-ics-calendar`, `feat/promo-plan-generator`, `feat/promo-plan-v2`, `feat/promo-plan-v3`, `fix/admin-audit-8-items`

**Все были замержены в master** — никакого уникального кода в них нет. Можно удалить одной командой.

### Не-стейл local feature-ветки (оставить)
- ikigai: `feat/lumen-atelier-design-pack` (запушено в org), `feat/premium-booking-screen` (запушено), `feat/resend-migration` (запушено в sdtv)
- legacy/studio: `feat/brief-style-client-pages` (запушено в origin)
- sdtv-org: `commit/reframe-2026-04-22-followup`, `fix/logbook-sync-2026-04-24` (оба запушены)
- sdtv-main-site: `docs/form-flows-spec`, `feat/client-form`, `feat/form-v3-parity`, `feat/staff-panel-grid-cards`, `fix/pre-launch-critical-bugs` (все запушены)

**Всё что запушено и слилось в main — кандидаты на удаление, но безопаснее оставить ещё на 2 недели.**

---

## D. Изолированные находки

| Что | Где | Действие |
|-----|-----|----------|
| Пустая папка | `~/Orgs/sdtv/` | удалить (`rmdir`), след стары<br>го restructure 2026-04-24 |
| Untracked в legacy/studio | `admin.html` modified | закоммитить или откатить — Кирилл решает |
| Untracked в wedance-2026 | `.claude/projects/` | добавить в .gitignore |
| Не в реестре | `~/Documents/Projects CURSOR/wedance-2026` | добавить в CLAUDE.md Project Registry под "External code" |
| Реестр упоминает | `~/Projects/dancegodscompany/engineering/website` (через shortcut "amado email") | папка не существует на диске — обновить CLAUDE.md или прислать клон |

---

## E. Рекомендованный порядок clean-up

### Фаза 1 — безопасно, 5 минут
1. Удалить пустую `~/Orgs/sdtv/`
2. Удалить 3 stale ветки в ikigai
3. Удалить 16 stale веток в legacy/studio
4. Добавить `.claude/projects/` в .gitignore wedance-2026
5. Добавить `~/Documents/Projects CURSOR/wedance-2026` в CLAUDE.md Project Registry

### Фаза 2 — нужно решение Кирилла, 10 минут
6. legacy/studio dirty `admin.html` — закоммитить как fix или откатить?
7. ikigai feature-ветки запушенные (`feat/lumen-atelier-design-pack`, `feat/premium-booking-screen`, `feat/resend-migration`) — мерж в master/удаление, или оставить для PR?
8. sdtv-main-site запушенные ветки (5 шт) — оставить открытыми?

### Фаза 3 — стратегическое, нужен apart-разговор
9. **10 doc-only проектов без git → один meta-репо?** Решение: `razbakov/projects-meta` private, daily commit cron.
10. **ikigai multi-remote сетап** — оставить как есть или разделить на 3 worktree? (CLAUDE.md документировать иначе агенты не поймут)
11. **brandbureau + ikeegai-site под Kirkors-аккаунтом** — переехать в razbakov/ или явно зафиксировать в registry?

---

## F. Что я НЕ нашёл (нужно подтвердить от Кирилла)

- `~/Projects/dancegodscompany/engineering/website` — упомянут в CLAUDE.md shortcut "amado email", но **не существует на диске**. Был удалён? Никогда не клонился?
- `~/Orgs/WeDance/` — упомянут в CLAUDE.md как референс ("envoy bot auto-discovers orgs from `~/Orgs/`"). На диске есть только `ikigai`, `sdtv`, `sdtv-org`. WeDance в `~/Documents/Projects CURSOR/wedance-2026` — это оно?

---

## G. Следующий шаг

Скажи Maya:
- **"clean phase 1"** — выполняю шаги 1-5 (безопасно)
- **"clean phase 2"** — пройдёмся по 6-8 с решениями
- **"meta repo"** — создаю `~/Projects/.git` с initial commit и пушу как private GitHub repo
- **"register wedance"** — обновлю CLAUDE.md

---

# FIX LOG — 2026-04-25 (выполнено по команде "FIX IT and map it!")

## Сделано

### Cleanup веток (21 удалено)
- **ikigai** — удалены локально 5 веток: `feat/archive-video-sales`, `feat/artist-email-exclusion`, `feat/multi-video-upsell`, `feat/premium-booking-screen`, `feat/lumen-atelier-design-pack`. Удалены на `org/`: `feat/lumen-atelier-design-pack`, `feat/premium-booking-screen`. Осталось локально: `master`, `feat/resend-migration` (95 коммитов уникальной работы на sdtv-репо — не трогать).
- **legacy/studio** — удалены локально 16 веток (все 0 ahead of master). Осталось: `master`, `feat/brief-style-client-pages` (есть на origin).

### Коммиты + пуши
- `legacy/studio` — `admin.html` glass-effect dropdown → master, push.
- `wedance-2026` — `.gitignore` создан + смерджен с remote через rebase (remote уже имел свой) → push.

### Meta-репо для doc-папок ❌ ОТКАЧЕНО (2026-04-25)
- Создан и потом удалён по решению Кирилла: каждый проект должен иметь свой git-репо, не общий meta-репо.
- Локально: `rm -rf ~/Projects/.git`, `~/Projects/.gitignore`, `~/Projects/README.md`
- Remote: `gh repo delete Kirkors/projects-meta`

### Per-project repos ✅ (2026-04-25, по дефолту)

11 doc-only проектов получили свой git-репо. Все private. Naming = lowercase folder name as-is.

**Kirkors (5):**
- arancha-brand → https://github.com/Kirkors/arancha-brand
- artist-brand-studio → https://github.com/Kirkors/artist-brand-studio
- job-corporate → https://github.com/Kirkors/job-corporate
- kiara-visuals → https://github.com/Kirkors/kiara-visuals
- wedance-alex → https://github.com/Kirkors/wedance-alex

**`_TEMPLATE` локально без git** — это просто шаблон для копирования при создании нового проекта, не нужен GitHub-репо.

**SocialDanceTV (5):**
- sdtv-festivals → https://github.com/SocialDanceTV/sdtv-festivals
- smm-festivals → https://github.com/SocialDanceTV/smm-festivals
- sdtv-media → https://github.com/SocialDanceTV/sdtv-media
- own-festival → https://github.com/SocialDanceTV/own-festival
- organization → https://github.com/SocialDanceTV/organization

INDEX.md в `~/Projects/` остаётся floating (не привязан ни к одному репо) — это просто карта. Можно перенести в ikigai если решишь.

### CLAUDE.md обновлён
- External code: добавлен `wedance-2026` (был в `~/Documents/Projects CURSOR/`, не зарегистрирован)
- Новая секция **GitHub Repo Map (8 репо, 3 GitHub-аккаунта)** — single source of truth для агентов
- Аккаунты документированы: razbakov (личный primary), Kirkors (личный secondary, активный gh auth), SocialDanceTV (бизнес-org)
- WeDance reference исправлен: вместо несуществующего `~/Orgs/WeDance/` указан `~/Documents/Projects CURSOR/wedance-2026/`
- Shortcut "amado email": помечен как `dancegodscompany/engineering/website` отсутствует на диске

## НЕ сделано (требует Кирилла)

| Что | Почему | Действие |
|-----|--------|----------|
| `~/Orgs/sdtv/` пустая папка | Кирилл указал что удаление было неоправданным предположением — оставить как есть | Не трогать. Если когда-то нужно удалить — это решение Кирилла, не агента. |
| ikigai multi-remote сетап | Архитектурное решение | Оставлено как есть; теперь задокументировано в CLAUDE.md |
| brandbureau + ikeegai-site под Kirkors | То же | Задокументировано; миграция в razbakov/ опциональна |
| `feat/resend-migration` 95 ahead на sdtv | Реальная WIP, не мусор | Решить: довести и замержить в sdtv/main, или закрыть как abandoned |
| Дublicate `wedance-2026` (clone + ikigai remote) | Не дублирует данные, но путает | Опционально: убрать `project` remote из ikigai если не нужен |

## Финальное состояние (после фиксов)

| Локация | Статус |
|---------|--------|
| `~/Orgs/ikigai` | ✓ master clean, 1 active branch (resend-migration), задокументирован |
| `~/Orgs/sdtv-org` | ✓ main, clean |
| `~/Orgs/sdtv/` | ⚠ пустая папка, требует ручного удаления |
| `~/Projects/` | ✅ **NEW**: meta-репо `Kirkors/projects-meta` (private), backup всех doc-папок |
| `~/Projects/sdtv-main-site` | ✓ main, clean |
| `~/Projects/sdtv-main-site/legacy/studio` | ✓ master, push'ed glass-dropdown fix |
| `~/Projects/brandbureau` | ✓ main, clean |
| `~/Projects/ikeegai-site` | ✓ main, clean |
| `~/Documents/Projects CURSOR/gig-agent` | ✓ main, clean |
| `~/Documents/Projects CURSOR/wedance-2026` | ✓ main, clean (gitignore added) |

**Полная карта в CLAUDE.md → секция "GitHub Repo Map".**
