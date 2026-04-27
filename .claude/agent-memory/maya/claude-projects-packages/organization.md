# Claude.ai Project package — organization

## Local source
- Path: C:\Users\ASUS\Projects\organization
- Status: Mixed — split prod/personal planned (deadline 2026-05-15)
- Owner agent (по INDEX): Maya (production SOPs) + immigration self-managed
- GitHub repo: SocialDanceTV/organization (default branch `main`, doc-only)

## Project name (для claude.ai)
SDTV Organization (mixed bucket)

## Description (для claude.ai, 1-2 строки)
Смешанный временный bucket: production playbook-ы на испанском (типы залов, plan de rodaje для night events) + Spain residency / immigration docs. Цель — split: production SOPs → sdtv-festivals/sops/, immigration → personal/, проект закрыть.

## Custom Instructions (project system prompt)
Ты помогаешь Maya (Chief of Staff) с проектом **ORGANIZATION** — это временный mixed bucket. Внутри две независимые темы:
1. **Production SOPs** (на испанском): tipos de salas eventos (классификация event halls для preproduction брифинга техников и операторов), plan de rodaje fotografia (шаблон фото-съёмки ночного social dance event).
2. **Spain immigration / residency**: ВНЖ timing, comunicación de cambio de circunstancias через sede electrónica / cita previa.

**Цель проекта — закрыть его**, расщепив контент:
- Production → `~/Projects/sdtv-festivals/sops/` как отдельные файлы (`event-hall-typology.md`, `night-event-photo-plan.md`).
- Immigration → `~/Orgs/ikigai/personal/immigration/` (вне production-репо, эпизодический трек).
- После split проект помечается `merged/closed`. Deadline: 2026-05-15.

**Команда:** Maya (AI Chief of Staff) ведёт production split. Кирилл — human owner, особенно для immigration (юридические шаги делает сам). Это НЕ tech-проект — там нет кода, только markdown и испанские заметки из старого ChatGPT-проекта "ORGANIZATION" (4 chats).

**Constraints:**
- Не смешивай production и immigration в одном файле — это и есть причина split.
- Production SOPs пиши на испанском (целевая команда — операторы и фотографы в Барселоне), immigration — как удобно Кириллу (RU или ES).
- Не превращай в большую систему — это closure-проект, не продукт.

**Что НЕ делай:** не предлагай делать из этого "operations playbook v2", не добавляй новые домены, не выдумывай SOP-шаблоны на лету — переноси то, что есть, и стопаешься.

**Tone:** Telegram brief, ru. Когда работаешь с production-контентом — испанский в самих SOP, объяснения на ru.

**Source of truth (источник истины).** Этот проект на claude.ai — snapshot (моментный срез). Полная актуальная информация, история решений и текущий sprint-state живут локально:
- Project path: `C:\Users\ASUS\Projects\organization\` (Windows) / `~/Projects/organization/` (Mac)
- Org hub: `~/Orgs/ikigai/` — agent-memory, OKRs, sprint plans, общая координация

Я работаю со snapshot, не с live state. Если в нашем разговоре принимается решение или появляется важная новая информация — попроси Кирилла зафиксировать через Claude Code (например: "Maya, я в Claude.ai пришёл к решению X по Organization — обнови `decisions.md` / `active-deals.md` / `context.md`").

## Knowledge files

### README.md (full paste)
```markdown
# ORGANIZATION

**Domain:** Mixed — Production SOPs + Personal immigration
**Owner agent:** Maya (production SOPs) + — (immigration self-managed)
**Human owner:** Кирилл
**Status:** Mixed — production part живой, immigration часть эпизодический
**Last updated:** 2026-04-22
**Source:** ChatGPT project "ORGANIZATION" (4 chats)

---

## 1. What this is

Смешанный bucket: (a) production playbook-ы на испанском (типы залов, план съёмки фото night event), (b) Spain residency management (ВНЖ timing, communicación de cambio de circunstancias).

## 2. Goal

- **Outcome:** Split: production SOPs вынести в `projects/sdtv-festivals/sops/`, immigration — в `personal/immigration/`. Organization проект — закрыть.
- **Metric:** 2 SOP-файла созданы, immigration в personal/, проект помечен merged.
- **Deadline:** 2026-05-15.

## 3. Progress

- [x] Tipos de salas — classification типов event halls (важно для preproduction)
- [x] Plan de rodaje fotografia — шаблон съёмки ночного event-a
- [x] ВНЖ timeline explored
- [ ] SOPs не переведены в production checklists

## 4. Current state / next action

- **Now:** 4 chats, материал полезный но не структурирован.
- **Next:** Maya → вытащить production SOPs в 2 файла (`event-hall-typology.md`, `night-event-photo-plan.md`). Immigration chats оставить в personal/.
- **Blocker:** решение split vs keep — при split teряется поиск по всему "организационному" сразу.

## 5. Key references

- ChatGPT: ORGANIZATION
```

### CLAUDE.md (if exists, full paste)
—

### Other key context (max 3)

#### context.md (full paste)
```markdown
# Context — ORGANIZATION

Imported digest from ChatGPT project "ORGANIZATION" (4 chats).

---

## Key content

### Production SOPs (Spanish)

- **Tipos de salas eventos** — классификация event halls (Sala 1: gran escenario, luces altas / teatro, pista abierta, techos blancos; etc). Используется при preproduction для briefing техники и операторов.
- **Plan de rodaje fotografia (night social dance)** — план фото-съёмки вечернего social dance event. Шаблон.

### Immigration (Spain)

- **ВНЖ timing** — проверяли Reddit threads, таймлайн оформления.
- **Comunicación de cambio de circunstancias** — процедура уведомления Oficina de Extranjería через sede electrónica / cita previa. Юридическая деталь.

## Recommendation

- Production → `projects/sdtv-festivals/sops/`
- Immigration → закрытый personal/ (outside repo или private folder)
- Close ORGANIZATION project в ChatGPT после migration
```

## Conversation starters (3-5)
1. Сделай первый draft `event-hall-typology.md` на испанском по тому, что есть в context.md — структуру SOP подскажи сам.
2. Сделай draft `night-event-photo-plan.md` (plan de rodaje fotografia) — шаблон для ночного social dance event.
3. Какие вопросы Кириллу нужно задать, чтобы закрыть split до 2026-05-15? (приоритезировано, чтобы за один разговор разрулить).
4. Что из ВНЖ-блока стоит сохранить в `personal/immigration/`, а что выкинуть как устаревшее?
5. После split — какая checklist'а закрытия проекта (что пометить merged, какие ссылки обновить)?
