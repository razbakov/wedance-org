# Business Operating Picture — 2026-04-22

**Source:** ChatGPT chat history (Social Dance Plus account) — 31 recent chats scanned, **10** critical ones read in depth.
**Lens:** senior business analyst / chief of staff.

---

## 0. Note on "Cloud Balismus"

Подтверждено владельцем: **"Cloud Balismus" — опечатка** (вероятно голосовой ввод). Реальный объект миграции — переезд всего operating layer в **Claude Code + Avatar OS (multi-agent architecture)**. Подтверждается: (а) структура репо `ikigai/.claude/agents/` с 6 named agents (Maya, Viktor, Luna, Marco, Sage, Kai), `.claude/agent-memory/`, CLAUDE.md с Agent OS rules; (б) свежий чат "Методики для Аватара" с архитектурой Chief Avatar + 5 subagents.

---

## 1. Current Business Picture

SDTV — **media partner system for the dance industry**, не видеографический сервис. Работает как **2-person operation** (Кирилл — founder / video / деалы / логистика; жена — SMM / photo / content continuity). Бизнес прошёл стадию market proof (120+ festivals, 500M+ views, сильное доверие в нише) и находится в **фазе systemization & scale-readiness**.

Прямо сейчас происходит три параллельных разворота:
1. **Repositioning** — из "production vendor" в "media partner / visibility architect"
2. **Operational migration** — из разрозненных ChatGPT/Notion/Monday в единую Claude Code Avatar OS
3. **Business model evolution** — добавление AI-powered business systems как второго мотора (solo AI business, minimum 1M runway)

Основная ставка: **существующий revenue engine (фестивали + upsells) + AI multiplier на операционку**. НЕ pivoting в AI consulting с нуля.

---

## 2. Key Active Directions

| # | Направление | Статус | Владелец |
|---|-------------|--------|----------|
| 1 | **SDTV Product Matrix v2 — Promo / Hybrid / Signature** (3 B2B двери, за ними Visibility Test / Event Campaign / Extended, за ними 1x-2x/week × 1-3 months) | Архитектура определена в "Уровень и рост в бизнесе"; pending: разнести текущий catalog list по дверям | Кирилл + Marco |
| 2 | **SDTV home page redesign** — "World's Largest Dance Media" / router для 3 аудиторий (Festivals / Dancers / Artists) | В работе, выбирается между router-mode (8.6) и brand homepage (7.4) | Кирилл + Wife |
| 3 | **Form v3 + Admin panel** (client intake, Stripe + Airtable, Resend email) | Live на branch `feat/resend-migration`, pending: email QA, Railway deploy, premium redesign | Viktor (agent) + Кирилл |
| 4 | **Avatar OS migration в Claude Code** | Архитектура определена, agents уже созданы | Кирилл |
| 5 | **B2C video sales pipeline** (event capture → Airtable → automated email когда готово) | Действующая, нуждается в automation layer | Кирилл + Wife |
| 6 | **SMM / content ops** (Instagram, карусели, FOMO/Hype/Proof/Desire/Authority buckets) | Running, нуждается в системности | Wife |
| 7 | **Personal brand Кирилла** (founder / media partner / visibility architect) | Обсуждаемое направление, не запущенное | Кирилл |
| 8 | **Wife's Spanish-speaking women brand** (Leila Hormozi model: biz + beauty + immigration + growth) | Новая venture, спец-материалы в `strategy/arancha-*` | Wife |
| 9 | **Sunday Bachata Social Strategy** | Отдельный продукт/событие в разработке | Кирилл |
| 10 | **Upsells & renewals** (2nd video upsell, archive sales, name-only delivery) | Определён, не автоматизирован | Kai (agent) + Кирилл |

---

## 3. Current Migration (Avatar OS / Claude Code)

**Что переезжает:**
- Стратегическое мышление + operations + task routing — из ChatGPT discrete chats в structured Claude Code agent system
- Память и решения — из scattered docs в `.claude/agent-memory/` + MEMORY.md index
- Задачи / триаж — из головы founder в agent routing (Maya → specialist agents)

**Из чего → во что:**
- FROM: ChatGPT threads (31+ активных), Notion docs, распределённые Monday items, head-held context
- TO: Claude Code Avatar OS: 6 named agents (Maya/Viktor/Luna/Marco/Sage/Kai), CLAUDE.md как operating manual, memory files, inter-agent protocol

**Зачем:**
- Бизнес — это 2 оператора (Кирилл + жена), и команда должна работать "как большая компания без лишнего overhead"
- AI = multiplier, не замена. Agents обслуживают существующие мышцы (distribution, premium eye, deals)
- Снять нагрузку с founder (missed revenue / bad follow-up / manual chaos / "too much depends on founder")

**Ключевые элементы архитектуры (из чата "Методики для Аватара"):**
- **Chief Avatar** — думает как Кирилл, спорит, приоритизирует
- **Operator skill** — превращает мысли в action plan
- **Research skill** — сравнивает варианты
- **Critic subagent** — ломает слабые решения
- **Execution subagent** — действует по SOP
- **Memory review skill** — раз в неделю скимает опыт в правила / lessons learned
- Stack: Anthropic skills repo, agentskills/agentskills, awesome-claude-skills, MCP

**Текущий статус (высокий уровень):**
- ✅ 6 named agents созданы (Maya/Viktor/Luna/Marco/Sage/Kai) с ролями и color-coded idents
- ✅ CLAUDE.md с Agent OS rules, decision matrix, daily rhythm
- ✅ Memory directory + MEMORY.md index с 18+ topic-pointers
- ✅ Inter-agent protocol (draft) в `ops/inter-agent-protocol.md`
- ✅ Active engineering work: SDTV Form v3, Admin panel, Resend migration
- ⚠️ Нет MCP integrations пока (Monday, Airtable, Gong, Slack, Calendar — в MEMORY есть запись)
- ⚠️ Нет evals / guardrails / monitoring уровня (по чату "Использование агентов" — это "elite-уровень")
- ⚠️ Нет Avatar Chief / skills / sub-agent structure, описанной в "Методики для Аватара" — это был план, не реализация
- ❌ Memory review skill / weekly automation — не настроено

**Где риски:**
1. **Перепутать инфраструктуру с бизнесом** (прямая цитата, "!!! 3 Стратегическое применение SDTV"): "Notion, Monday, AI и порталы это не бизнес. Это усилители." Высокий риск потратить 3 месяца на Avatar OS и забыть, что деньги приходят от festival deals.
2. Архитектура "6 agents" на уровне markdown, но без evals, guardrails, логов, human governance — ниже того, что сам считаешь "elite".
3. Двойной стек (ChatGPT + Claude Code) без явной делимитации зон ответственности.

---

## 4. Systems in Use (Operating Stack)

| Слой | Система | Роль | Состояние |
|------|---------|------|-----------|
| Execution OS | **Monday** | Deals, logistics, follow-ups, execution tracking | Source of truth (per CLAUDE.md) |
| Knowledge | **Notion** | Playbooks, client knowledge, structure | Supporting, не task mgmt |
| Command layer | **Telegram** | Founder ↔ system comms | Active |
| Agent / operating brain | **Claude Code + 6 agents** | Triage, strategy, engineering, content, coaching | New layer, in buildout |
| Client capture | **Airtable + forms** | Event capture, B2C video delivery | Running |
| Payments | **Stripe** | B2C video sales, checkout | Live |
| Email | **Resend** (migrated from Gmail SMTP) | Transactional email | Migrated, branch `feat/resend-migration` |
| Content ops | **Instagram / SMM** | FOMO / Hype / Proof / Desire / Authority | Running, needs systemization |
| Community / CRM layer | — | Waitlist, own-your-community | Kajabi отклонён, email-first pending scope decision |
| Side tooling | **Gig Agent** (`~/Documents/Projects CURSOR/gig-agent`) | Festival video gigs CRM (Monday + Telegram) | Separate project, active |
| Strategy docs | `strategy/` folder | Master brief, pain map, CJM, system specs, marketing strategy, pitch | Rich, 18+ topic files |

---

## 5. Decisions Already Made

1. **Продуктовый pivot (ключевой!):** новая иерархия продуктов — **Промо = основной продукт, SMM = второй, видео = часть промо-пакета, если нужно.** Это downgrades видео с core service до component. Масштабируется лучше, чем "продажа видео".
1a. **3 B2B двери (revenue architecture, из "Уровень и рост в бизнесе"):**
    - **A. PROMO** — media placements. Core: IG Weekly Pack — 1 month, IG Boost Pack — 1 month. Upsell: IG Weekly/Boost — 3 months, YouTube Feature, Facebook Boost.
    - **B. HYBRID MEDIA SUPPORT** — Festival content handoff + SDTV release / local videographer + SDTV campaign / capture direction + release sequencing.
    - **C. SIGNATURE PARTNERSHIP** — Festival Video Full/Premium, Video+Photo Combo Pro, Video+Photo+Aftermovie (+SMM), possible annual / strategic partner.
    Все текущие products должны быть распределены по этим 3 дверям, не храниться как длинный catalog list.
1b. **AI business vector финализирован:** НЕ отдельный AI consulting brand. Формат — **"Productized AI systems business with consulting as the entry point and guides as the trust layer"** (Multi-agent Level 4). Revenue engine = AI Orchestrator for service businesses with revenue leakage and manual chaos. Paid entry product = AI Audit / Automation Blueprint / Revenue Workflow Diagnosis.
2. **SDTV позиционирование** — не production vendor; **media partner with 3-tier value ladder** (Production → + Distribution → + Positioning). Value = event leverage, not videos.
2. **2-person model** — Кирилл (founder + video/ops/deals) + wife (SMM + photo). Agents обслуживают этот tandem, не заменяют.
3. **Agent team structure зафиксирована** — Maya/Viktor/Luna/Marco/Sage/Kai с ролями, decision authority matrix, inter-agent protocol (draft).
4. **Git discipline** — one change = one branch, done = PR to main.
5. **Monday = execution, Notion = knowledge, Telegram = command** — разделение зон зафиксировано.
6. **Email migration Gmail SMTP → Resend** — выполнено (commit `e420669`).
7. **Не идём в "общий AI-консалтинг"** — вектор "owner of narrow, premium, outcome-first AI systems business" с фокусом на retainer implementation.
8. **Кирилл — лицо/vision/trust, SDTV — система/продукт/медиа-актив** — двухуровневый бренд.
9. **Homepage = router** (Festivals / Dancers / Artists) с 3-секундным ответом на "кто вы / для кого / почему верить".
10. **Kajabi отклонён** для waitlist/community; email-first решение.
11. **OKR Q2 2026 зафиксирован** (`strategy/okrs-q2-2026.md`): O1 бизнес на системе, O2 внутренняя устойчивость, O3 стратегический фокус.
12. **Старые клиенты = "спонсоры трансформации"** — не тратить энергию на убеждение тех, кто не понимает новый пивот; фокус на ICP матчах.
13. **Identity shift (с терапевтом):** от "удобного оператора" к "работающему с более высоким интеллектом"; злость как сигнал misalignment с устаревшим ICP, а не как проблема.

---

## 6. Open Loops

0. **ICP для пивота не зафиксирован** — новая иерархия (промо > SMM > видео) требует нового профиля идеального клиента. Whale accounts, где "один клиент = 4 мероприятия с другими" — это ориентир, но не документ.
0a. **Sales layer ("!!! Новая стратегия 1") не запущен** — есть чёткий blueprint (сегментация / offer card / outbound scripts / follow-up sequences / objection handlers / escalation в call), но НЕ написан. Явная цитата владельца: "мне не нужна абстрактная теория. Мне нужен практический sales layer поверх того, что уже создано." Без этого вся инфраструктура = "хорошо организованная инфраструктура без достаточного притока денег".
0b. **Offer-cards для 3 дверей** — entry offer / премиальный offer / upsell / cold-lead vs warm-lead offers — нужно оформить под каждую дверь (Promo / Hybrid / Signature).
1. **Avatar OS роадмап не финализирован** — архитектура Chief Avatar + subagents описана в ChatGPT, но не мапится 1:1 на существующие Maya/Viktor/etc. Решение: сохранять текущую 6-agent схему или мигрировать в Chief+Operator+Research+Critic+Execution+Memory?
2. **SDTV homepage** — выбор между router-mode (8.6) и brand homepage (7.4). Pending: собранный block-by-block homepage copy.
3. **Email QA Form v3** — проверка всех 7 flows на Resend отправку; Railway deploy; premium redesign. (из `sdtv-admin-brief-state.md`)
4. **MCP integrations** — Monday / Airtable / Gong / Calendar — agents пока не подключены к real-time data.
5. **Memory review / weekly automation** — обсуждалось, не настроено.
6. **"1M AI business solo"** — stress-tested vs text of "не путать инфраструктуру с бизнесом". Решение: идём или нет?
7. **Wife's Spanish brand** — отдельная venture, есть unified vision docs (`strategy/arancha-*`), но ownership и приоритет vs SDTV неясны.
8. **Sunday Bachata Social Strategy** — отдельный продукт, неясен статус.
9. **"Мирал 5"** (из Методики) — термин не распознан (Mural / Mistral / MCP?) — проясни владелец.
10. **Retainer offer для AI business** — обсуждали "implementation + optimization / build + expand / system + ongoing improvement", но не оформлен как живой offer.
11. **LinkedIn strategy** — проходил аудит, calibration 15-20% softer, но текущий posting rhythm не запущен.
12. **Renewal timing playbook** — нет процесса "когда спрашивать next year"; Кирилл угадывает по вибрации ("контент ещё не доставлен, можно ли уже спросить?"). См. ZEID case.
13. **Objection handlers prior to contract** — scope creep ("ты ведь больше получаешь, давай shows") ломает маржу; нужны готовые уверенные ответы, а не ad-hoc.
14. **Аксиография / лежаки / MacBook** — бытовые чаты, не бизнес.

---

## 7. Recommended Next Priorities

### This week (Critical / Today)
1. **Finalize homepage copy** (block-by-block per "Стратегия новая 2" шаг 2). Разблокирует весь фронт sales system.
2. **Resolve Avatar OS vs current 6-agent schema** — один concept, не два. Сделать alignment decision на 1 странице.
3. **Finish Form v3 email QA** — без этого Resend migration не закрыт.

### This week (Important)
4. **"!!! 3" risks** — проверить каждый активный проект по 5-вопросам: "это инфраструктура или это revenue?". Deprioritize всё, что про усилители.
5. **SMM cadence** — зафиксировать weekly rhythm для жены (5 buckets × actual posts/week).
6. **Retainer offer draft** — implementation + optimization packaged как 1 SKU. Без этого "AI business" — разговор.

### Backlog / Later
7. **MCP integration plan** — 1 pilot: Monday или Airtable. Без MCP agents не могут реально делегировать работу.
8. **Memory review weekly ritual** — 15-min Friday, один agent → curated lessons.
9. **Evals / guardrails** — минимум logging + red-team prompts для top-3 agent flows.
10. **Sunday Bachata** — решить: запускаем в Q2 или откладываем.

---

## Executive Summary

**Обновление после share-чата SDTV Sales System Design:** главный продуктовый разворот — **промо = основной продукт, SMM = второй, видео = компонент промо-пакета**. Это downgrades core service от видео к distribution. Вместе с identity shift (от "удобного оператора" к "работающему на новом уровне") и переосмыслением старых клиентов как "спонсоров трансформации" — это объясняет, почему три параллельных разворота идут именно сейчас.

SDTV — зрелый, но 2-person dance-media business с реальной tractionом (120+ festivals, 500M+ views). Прямо сейчас владелец запускает параллельно три разворота: (а) repositioning из production в media partner с 3-tier value ladder; (б) operational migration в Claude Code Avatar OS с 6 специализированными agents; (в) business model expansion в AI-systems retainer как второй денежный мотор. Фундамент крепкий (готовый distribution, premium eye, доверие в нише), но главный риск — spend cycles на инфраструктуру, а не на revenue. Следующие 2-3 недели решают: новый homepage + finalized sales system тянут revenue, Avatar OS consolidation тянет operations, а пивот в AI-business остаётся на backburner до закрытия первых двух.

---

## Top 5 Priorities Right Now

1. **Запустить sales layer** из "Новая стратегия 1" — ICP + offer-cards (Promo/Hybrid/Signature, entry+premium+upsell+warm/cold) + outbound scripts (intro / follow-up 1-2 / objection handlers). Минимум v1 за неделю. Без этого остальное косметика.
2. **Разнести catalog по 3 дверям** (Promo / Hybrid / Signature) в Monday/Notion и на сайте — прямая цитата "А не держать их просто как длинный catalog list".
3. **Finalize SDTV homepage** под новую product matrix (hero "World's Largest Dance Media" + router на Festivals/Dancers/Artists).
4. **Завершить Form v3 email QA + Railway deploy.**
5. **Resolve Avatar OS concept vs 6-agent repo — one schema.**

## Top 5 Biggest Risks

1. **Инфраструктурный перегрев** — 3 месяца на Avatar/Notion/Monday, 0 новых festival deals.
2. **Founder dependency** — Кирилл устал = система тормозит. Двойной бренд описан, но не запущен.
3. **Двойной стек (ChatGPT + Claude Code)** без явной делимитации создаёт context drift.
4. **Avatar OS без evals / guardrails / monitoring** — можем выстрелить в ногу automation ошибкой на клиенте.
5. **Новая wife's Spanish brand + SDTV + AI retainer + Sunday Bachata + personal brand** — 5 parallel bets на 2 человек. Stop-rule нужен.

## Top 5 Biggest Opportunities

1. **Tier 3 (Production + Distribution + Positioning)** — высокомаржинальный offer, который покупает "усиленную версию события", а не видео.
2. **Retainer AI-systems offer** для premium service businesses — leverage собственной упаковки + реальных кейсов.
3. **Wife's Spanish-speaking women brand** — blue ocean, Leila Hormozi-style; если система уже строится для SDTV, переиспользование playbook close to zero-cost.
4. **Claude Code MCP integration с Monday/Airtable** — превращение агентов из "написателей текста" в реальных execution operators.
5. **Archive video sales / B2C upsell** — existing asset monetization, почти zero marginal cost.

## 3 Things Owner Must Clarify or Decide Next

1. **ICP для пивота — 1 страница, на этой неделе.** Без фиксированного "кто наш клиент под новую promo-first матрицу" всё остальное (сайт, скрипты, outbound) бьёт мимо.
2. **Avatar OS архитектура** — финализируем 6-agent схему (Maya/Viktor/Luna/Marco/Sage/Kai) или мигрируем в Chief + 5 skills из "Методики для Аватара"? Одна из двух, не обе.
3. **Приоритет wife's Spanish brand vs SDTV Q2** — 2 человека × 5 направлений невозможно. Одно ведущее, остальное на support mode. AI-business vector уже решён — НЕ отдельный бренд, а productized layer внутри SDTV / retainer channel.

---

## Appendix B — Validation: Live Negotiation Case (ZEID, chat "!!! Контроль в переговорах ZEID")

Живой пример, подтверждающий диагноз. В реальном времени на фестивале:

- **Клиент Zeid** шлёт "контролирующие" сообщения → требует shows сверх Prague promo scope
- **Параллельно "Саня"** (другой клиент) пишет "я же плачу больше на 500, давай снимай shows" — классический scope creep через "небольшую добавку"
- **Кирилл пишет каждое ответное сообщение вручную** и в ChatGPT спрашивает: "не грубо ли / не прогибаюсь ли / не звучит ли как жалоба / это разговорно?"
- **Статистика из этого же чата:** 40% входящих collabs, whale deals ~2500€/клиент, standard show rate 500€/день
- **Renewal instinct уже включён:** "For next year, let's lock in the dates and full video scope from the start" — Кирилл хочет multi-year контракт, но не знает, *когда* спрашивать про next year ("контент ещё не доставлен")

Что это подтверждает:
1. **Sales layer из "!!! Новая стратегия 1" — не теория, а missing muscle прямо сейчас.** Objection handlers для "у нас уже есть команда / нам нужен просто видеограф / тебе ведь и так доплачивается" — нужны в буквальном смысле "на этой неделе".
2. **Scope creep = основной профит-килл.** Product matrix (Promo/Hybrid/Signature) с чёткой scope до контракта снимает 80% этой боли.
3. **Renewal timing playbook отсутствует** — Кирилл угадывает "когда спросить про next year" вместо процесса.
4. **Операционная перегрузка founder'а в live-режиме** — это тот самый "too much depends on founder", из-за которого и начат весь operational migration.

---

## Appendix A — Chats Scanned

**Read in depth (10):**
- SDTV Sales System Design (146k chars — массивный; pitch, automation, routing, UX, product pivot промо-first)
- **Уровень и рост в бизнесе** (full product architecture: Promo / Hybrid / Signature 3 B2B двери с Core+Upsell)
- **!!! Новая стратегия 1** (sales layer blueprint: segmentation, offer map, outbound scripts, objection handlers)
- Построение автоматизированной системы (AI business как multiplier, не новая профессия)
- Multi-agent AI Level 4 (productized AI systems business, NOT отдельный consulting brand)
- Использование агентов и оркестраторов (maturity ladder; SDTV = orchestration + specialist roles, до elite недалеко)
- Методики для Аватара (Claude Code Avatar OS architecture; skills, MCP, sub-agents)
- !!! Стратегия новая 2 (SDTV repositioning, hero copy, 3-audience split, "purchase = усиленная версия себя")
- Личный бренд в бизнесе (Кирилл = trust layer; SDTV = product layer)
- !!! 3 Стратегическое применение SDTV (5 рисков, "не путать инфраструктуру с бизнесом")

**Catalogued (24) but not deeply read due to time:** Уровень и рост в бизнесе; Стратегия новая 1; Стратегия продажи MacBook; Upsell видео со скидкой; Sonic identity для SDTV; Редизайн страницы промо-плана; Sunday Bachata Social Strategy; ТЗ для Social Dance TV; Fotografía dance profesional; Разбор контента для SMM; Редизайн продукта; LinkedIn стратегический аудит; Смещение фокуса задач; Бизнес запланированных подарков; Артефакты на матрице FX3; Рост и терапия после изменений; Контроль в переговорах ZEID; + non-business (лежаки, аксиография, врач, покупки, свадьба).

**Projects (side panel):** SMM FESTIVALS, K&A Forever (wedding), Arancha, SALUD, Festival.
