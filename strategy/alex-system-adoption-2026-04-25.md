# Alex System Adoption Report — 2026-04-25

**Owner:** Кирилл
**Author:** Maya
**Source:** `C:\Users\ASUS\Downloads\Telegram Desktop\CLAUDE.md` (Alex's CLAUDE.md, razbakov/ikigai)
**Goal:** имплементировать механики Alex'а к проектам Кирилла, без слепого копирования.

---

## TL;DR

Alex'а система **на 2 поколения впереди**. У него:
- 6 Telegram-ботов (по одному на агента) с watchdog'ом
- GitHub Issues + Project Board как единый task-engine
- Voice control через Vapi ("Hey Google, call Maya")
- PostHog на каждом проекте
- Visible agent state (`ops/agents/<name>/` вместо `.claude/agent-memory/`)
- Чёткая граница media vs git (`~/Local/ikigai/` для тяжёлых файлов)
- Print pipeline через Google Drive

У Кирилла те же 6 агентов и базовые rules, но **task management = markdown файлы**, **agent state = скрытая папка**, **нет Telegram-ботов**, **нет analytics**, **media + git перемешаны** (SDTV видео-файлы потенциально могут попасть в репо).

**Рекомендация:** не копировать всё. Внедрять волнами по приоритету. Первая волна — за 1 день.

---

## A. Что у Alex'а есть, чего нет у Кирилла

### Architecture-level

| # | Механика Alex'а | Описание | У Кирилла |
|---|-----------------|----------|-----------|
| A1 | **GitHub Issues + Project Board** | Все таски — issues. Tracked на board «Ikigai Control Center Project v2». S3 body, agent labels, columns Inbox→To do→In progress→To review→Done | ❌ нет |
| A2 | **Telegram bots per agent** | 6 ботов (`@maya_raz_bot`, `@viktor_raz_bot`...). Tokens в `~/.config/telegram/.env`. Команды `/start /reset /opus`. Watchdog с auto-restart 4ч | ❌ нет |
| A3 | **Voice control (Vapi)** | "Hey Google, call Maya" hands-free. Maya dispatches to Telegram bots во время voice call | ❌ нет |
| A4 | **`~/Local/<org>/` separation** | Большие файлы (видео, recordings, attachments) — NOT в git. Сепарация по project | ❌ нет (SDTV видео потенциально риск) |
| A5 | **Visible agent state** | `ops/agents/<name>/` (versioned, в репо) вместо `.claude/agent-memory/` | ❌ скрытое |
| A6 | **PostHog per-project** | Таблица всех проектов с PostHog ID + Instance + URL | ❌ нет analytics вообще |
| A7 | **Print folder в Google Drive** | Конкретный Drive folder для print-ready assets, upload через `gog drive upload` | ❌ локально only |
| A8 | **Butler (dispatch tool)** | "Maya dispatches to Telegram bots during voice calls". Hetzner-hosted, cloudflared tunnel | ❌ нет |

### Process-level rules

| # | Rule Alex'а | Описание | У Кирилла |
|---|-------------|----------|-----------|
| B1 | **Agent prefix in responses** | Каждый response префиксится `**Sage:**`, `**Viktor:**` etc. В group chats — silent если не его домен | ❌ нет |
| B2 | **Agent ownership of OKRs** | Каждый KR имеет owner-агента. "Viktor owns O1 infra (KR-Butler)" | ⚠ частично (есть OKRs, нет привязки) |
| B3 | **Tasks vs GitHub Issues distinction** | Google Tasks = личные actions only Alex'а. GitHub Issues = delegated/cross-session work | ❌ нет явной формулы |
| B4 | **Deferred commitments require surface** | "I'll remind you later" должен быть Calendar event / GitHub issue / scheduled task / rule. Memory без trigger = fiction | ❌ нет |
| B5 | **Load memory before coaching** | Grep `memory/feedback_*.md` перед coaching response. Memory write-only иначе — ошибки повторяются | ❌ нет |
| B6 | **Assertions about owner require source** | Любой factual claim — citation (file path + line) или labeled inference. Иначе = "55 commits = ты исполнял" (выдуманные факты) | ❌ нет |
| B7 | **Check `~/Local/<org>/` before regenerating** | Не запускать pandoc/LaTeX/Chrome-headless если файл уже есть | ❌ нет |
| B8 | **Vercel: always connect GitHub + verify auto-deploy** | Не оставлять manual `vercel deploy` only | ❌ нет (brandbureau именно так — manual deploy!) |
| B9 | **"last updated" — full datetime** | `2026-04-07 02:30`, не "today"/"just now" | ❌ нет |
| B10 | **Always search GitHub before claiming nothing exists** | Не "это не существует", сначала grep | ❌ нет |
| B11 | **Telegram processing rules** | Split multi-task → separate issues. React с GTD emoji. HTML-only formatting | ❌ нет |
| B12 | **Sessions processing structure** | `browser-history`, `ai-sessions`, daily/weekly разные файлы | ⚠ daily есть, browser/AI transcripts нет |
| B13 | **Daily plan includes meal planning + reasoning** | `/meal-suggestion` + reasoning at end | ❌ нет |
| B14 | **Blog hero images через Gemini** | Не copy from thumbnails, всегда `/image-from-gemini` | ❌ нет |
| B15 | **YouTube thumbnails — Gemini, не HTML** | HTML-rendered = generic look | ❌ нет |
| B16 | **Multi-language blog posts** | Translate to de/es/ru/uk + `language:` frontmatter | ❌ нет |

### Tooling/CLI patterns

| # | Tool | Use case |
|---|------|----------|
| T1 | `gog` CLI | Gmail, Calendar, Tasks, Drive, Docs (вместо MCP) |
| T2 | `gog drive upload <file> --parent=<folder_id>` | Drive upload с конкретной папкой |
| T3 | `.bin/telegram-bots.{py,sh}` | Bot runner + start/stop |
| T4 | `.bin/telegram-send.py --agent <name>` | Proactive send от агента |
| T5 | `.bin/telegram-listener.sh` | Real-time inbox processing |
| T6 | `.bin/youtube-update.py <ID> --thumbnail <path>` | YouTube metadata update |
| T7 | `gh project item-add 5 --owner razbakov --url <issue-url>` | Add issue to Control Center board |
| T8 | `sips --resampleWidth 1280` | Image resize for YouTube |

---

## B. Mapping — каждая механика к твоим проектам

### Phase 1 — MUST HAVE (быстрые wins, 1 день)

| # | Механика | Куда применить у тебя | Почему важно |
|---|----------|----------------------|--------------|
| 1 | **GitHub Issues + Project Board** | Создать board «Kirill Control Center» под Kirkors. Все tasks — issues в правильных репо. Labels: `agent:maya`, `agent:viktor`, etc. | Решает хаос tasks в markdown файлах. Один board → видишь портфель |
| 2 | **Agent prefix в responses** | Все ответы агентов в `~/Orgs/ikigai` начинаются с `**Maya:**` / `**Viktor:**` etc. | Сейчас невозможно понять какой агент ответил. Снижает overhead дispatch'а |
| 3 | **Deferred commitments require surface** | Любое "напомню", "отложу", "вернёмся к" → Calendar event или GitHub issue в момент произнесения | Закрывает чёрную дыру "AI обещал, но не сделал" |
| 4 | **Load memory before coaching** | Sage перед coaching grep'ит `feedback_*.md` из memory. Marco — перед strategy advice | Sage сейчас может повторить ошибку которую ты уже зафиксировал в memory |
| 5 | **Assertions require source** | Любое утверждение про тебя/SDTV — citation или "I'm reading X — does that match?" | Закрывает "55 commits = ты исполнял" риск |
| 6 | **Move agent state to `ops/agents/`** | Перенести `.claude/agent-memory/<agent>/` → `ops/agents/<agent>/`. Теперь visible в git | Сейчас agent memory скрыт. Нельзя ревьювить |

### Phase 2 — HIGH VALUE (1-2 недели)

| # | Механика | Куда применить | Note |
|---|----------|----------------|------|
| 7 | **`~/Local/<org>/` для media** | `~/Local/sdtv/` для festival видео. `~/Local/artist-brand-studio/` для design uploads. `~/Local/arancha-brand/` для фото | SDTV = терабайты видео. Если попадёт в git — катастрофа |
| 8 | **PostHog per-project** | sdtv-main-site (когда выйдет), brandbureau, ikeegai-site. Таблица в CLAUDE.md | Сейчас 0 measurement. Без чисел нельзя оптимизировать |
| 9 | **Print folder Drive** | Один Drive folder для всех print artifacts. Mapping в CLAUDE.md: artist-brand-studio (постеры), sdtv-festivals (флаеры), arancha-brand (cards) | Wife работает с типографиями — нужен canonical location |
| 10 | **Agent ownership OKRs** | Каждый KR из okrs-q2-2026.md → конкретный агент. Например: KR1 (бизнес на системе) — Marco; KR (внутренняя устойчивость) — Sage | Сейчас OKRs висят без owner'ов |
| 11 | **Tasks vs Issues distinction** | Правило: личные actions (позвонить, купить, прочитать) → Google Tasks. Cross-session/agent work → GitHub issue | Чтобы Maya не спамила issues для каждой мелочи |
| 12 | **Vercel auto-deploy verify** | brandbureau сейчас manual `vercel deploy --prod` (по memory). Подключить GitHub webhook | Manual deploy = риск забыть. Auto = надёжнее |
| 13 | **Check `~/Local/` before regenerating** | Если генерируешь PDF/постер/видео — сначала grep `~/Local/`. Lumen Atelier постеры уже могут быть | Экономия времени и сохранение оригинального качества |
| 14 | **"last updated" full datetime** | Все docs (memory, CLAUDE.md, sprint plans) — ISO datetime, не "today" | Чтобы через 3 месяца понимать когда что обновлялось |

### Phase 3 — ADVANCED (требует инфры, недели)

| # | Механика | Куда применить | Что нужно |
|---|----------|----------------|-----------|
| 15 | **Telegram bots per agent (6 шт)** | @kirill_maya_bot, @kirill_viktor_bot etc. Все ответы агентов → в свой бот | Telegram BotFather + 6 токенов + watchdog |
| 16 | **Telegram listener** | Real-time processing твоих сообщений в Saved Messages → split на agents | `.bin/telegram-listener.sh` + Telethon |
| 17 | **Voice control (Vapi)** | "Hey Google, позвони Maya". Maya dispatches во время voice | Vapi номер + dispatch tool (Butler-like) |
| 18 | **Sessions processing** | Daily browser history + Claude transcripts → `ops/sessions/YYYY-MM-DD-*.md`. Maya включает в daily review | Скрипты + знание macOS knowledgeC.db (у тебя Windows — другая логика) |
| 19 | **Butler-like dispatcher** | Tool которым Maya dispatches задачи в bot'ы агентов | Hetzner или локально + cloudflared tunnel |
| 20 | **Multi-language content** | razbakov.com paradigm для SDTV блога: рус/исп/нем переводы автоматом | Для SDTV это рус+исп (твоя аудитория). Для wedance-alex — все 4 |

### Phase 4 — POLISH (когда захочется)

- Daily plan = meal planning + reasoning at end
- Blog hero / YouTube thumbnails через Gemini
- Telegram GTD emoji reactions
- Multi-account management в одном CLAUDE.md
- Always search GitHub before claiming nothing exists

---

## C. Что у тебя ЛУЧШЕ чем у Alex'а

Не всё в его CLAUDE.md лучше. У тебя есть:

1. **Чёткое разделение org vs project (S3 vs Design Sprint)** — у Alex'а они смешаны.
2. **Project Registry с Status + Goal date + Progress** (`~/Projects/INDEX.md` table) — у Alex'а только paths.
3. **3-funnel ecosystem doc** (sdtv-3funnel-ecosystem.md) — у Alex'а нет аналога.
4. **Personal ops отдельная категория** (`personal/health|sales|purchases`) — у Alex'а размыто.
5. **Decision Authority Matrix** — у тебя более полная.
6. **Telegram Brief mode by default** — это твой rule, у Alex'а нет.
7. **Stop-rule check в INDEX.md** ("Max 2 supporting agents per task") — у Alex'а такого explicit'а нет.

**Не теряем при адаптации.**

---

## D. Что НЕ копировать

- **Все 30+ проектов Alex'а в Project Registry** — у тебя другой портфель
- **Конкретные PostHog ID** — твои будут другие
- **`razbakov.com` блог paradigm** — у тебя нет личного блога (пока)
- **`amado email` shortcut** — это его специфика
- **Rules про Alex'а** ("Always spell Alösha с umlaut") — твои контакты другие
- **macOS-specific tooling** (`sips`, `knowledgeC.db`) — ты на Windows
- **Конкретные Hetzner IPs / cloudflared tunnels** — только если будешь поднимать Butler
- **15x4 / Web100 / MoneyDo** — это его ventures

---

## E. Predicted impact на твой workflow

**До адаптации (сейчас):**
- Tasks разбросаны по markdown'ам
- Agent ответы сливаются (не видно кто говорит)
- Memory не читается перед coaching → повторяющиеся ошибки
- Нет measurements (sites без analytics)
- SDTV видео потенциально могут попасть в git
- Manual Vercel deploy = риск
- Нет surface для отложенных commitments

**После Phase 1 (1 день):**
- Все tasks в одном Project Board
- Каждый agent ответ префиксован — мгновенный dispatch
- Sage/Marco читают memory перед советом
- Каждый "напомню" → Calendar/Issue
- Agent state visible в git (можно ревьювить)

**После Phase 2 (1-2 недели):**
- SDTV видео отделены от git навсегда
- Brandbureau/SDTV/iKEEGAi — analytics в реальном времени
- Print artifacts автоматически в Drive
- OKRs с owner'ами и tracking
- Vercel auto-deploy без ручных шагов

**После Phase 3 (недели):**
- Voice control во время прогулок
- Каждый агент в своём Telegram bot'е
- Daily review автоматически собирает browser history + AI transcripts
- Butler-like инфраструктура для голосовых dispatch'ев

---

## F. Roadmap (моё предложение)

**Сегодня (1-2 часа):**
- Создать `~/Orgs/ikigai/.claude/projects-meta` repo не нужно (откатили)
- Phase 1 #2 (agent prefix), #3 (deferred surface), #5 (assertions source), #6 (move agent state)
- Эти 4 — pure rules, добавить в CLAUDE.md, начать применять

**Этой недели:**
- Phase 1 #1 (GitHub Project Board) + #4 (load memory before coaching)
- Phase 2 #7 (`~/Local/sdtv/`) — критично перед следующей фестивальной съёмкой

**Следующий sprint (2 недели):**
- Phase 2 #8-12 (PostHog, Print Drive, OKR ownership, Tasks/Issues, Vercel)

**Следующий квартал:**
- Phase 3 (Telegram bots + Voice control)

---

## G. Что нужно от тебя сейчас (decisions)

1. **Какие фазы стартуем сегодня?**
   Default моего предложения: Phase 1 (#2, #3, #5, #6) — pure rules, без инфры. ~30 минут.

2. **GitHub Project Board под каким аккаунтом?**
   - Kirkors (active gh auth) — `Kirkors/projects/<N>`
   - SocialDanceTV (если board чисто SDTV)
   - Default моего предложения: Kirkors с фильтрами по проектам

3. **`~/Local/<org>/` сейчас же или подождать?**
   Default: создать структуру `~/Local/sdtv/`, `~/Local/ikigai/`, `~/Local/artist-brand-studio/` — пустые папки + .gitignore-ноту в README. Чтобы при следующем сейве файлов знать куда класть.

4. **Telegram bots — серьёзно интересно или nice-to-have?**
   Если да — это отдельный sprint, нужны решения по hosting (локально / Hetzner / другое).

NEXT:
  Скажи **"phase 1"** — внедряю 4 rule'а сейчас.
  Скажи **"phase 1+2"** — добавлю GitHub board и `~/Local/`.
  Скажи **"полный roadmap"** — сядем планировать все 4 фазы детально.
  Скажи **"только board"** — стартую с одного GitHub Project Board.
