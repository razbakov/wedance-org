# IG/FB AI-агенты: безопасность использования (2026-04-26)

## ОБНОВЛЕНИЕ 2026-04-26 (после кросс-сверки с другим агентом)

Кирилл прислал скриншот от стороннего ИИ-агента ("Безопасность Агентов для Соцсетей"), который добавил три критичных факта:

1. **Свежий кейс 24 апреля 2026** — IG-аккаунт с 61K подписчиков перманентно забанен за AutoDM. Не новый аккаунт, реальная аудитория. Подтверждает: размер не защищает.
2. **Meta Business Suite иногда ошибочно помечается системой как third-party automation и аккаунты блокируются.** Значит "0% риска" через MBS — миф. Правильнее: "минимальный риск + false positives возможны → нужен мониторинг + план B".
3. **AI-агенты в браузере (Manus, Operator, Anthropic Computer Use, Claude in Chrome, любой Playwright/Selenium) — прямая красная зона.** Включая случаи, когда сам ИИ-агент логинится в твой аккаунт и делает действия "медленно и осмысленно" — Meta ловит по паттерну логина и таймингам.

### Скорректированная таблица

| Канал | Старый вердикт | Новый вердикт |
|---|---|---|
| MBS постинг | Безопасно | Минимальный риск + мониторинг + план B |
| ManyChat/CreatorFlow auto-DM на user-initiated | Безопасно | Низкий риск, не нулевой (кейс 61K был AutoDM) |
| ИИ-агент через браузер на IG/FB | Опасно | **Полный запрет на SDTV-аккаунтах** (включая Claude/Manus/Operator) |

### Новое правило для CLAUDE.md (предложение, ждёт подтверждения Кирилла)

> Никакой ИИ-агент (Claude in Chrome, Anthropic Computer Use, Manus, Operator, Playwright/Selenium через MCP) не должен логиниться в SDTV IG/FB или выполнять действия от лица этих аккаунтов. Это касается даже разовых "ручных" задач через браузерный агент. Все действия в IG/FB на SDTV-аккаунтах — либо человек напрямую, либо approved Meta Business Partner (ManyChat/CreatorFlow/Buffer/MBS).

---


## Контекст вопроса
- SDTV: IG 510K, FB 550K — крупные аккаунты, бан = катастрофа
- Аранча — новый бренд, малый аккаунт
- Личный бренд Кирилла — средний/малый
- Цель: понять что можно делать AI-агентами в IG/FB сейчас (комменты, DM, посты)

## Ключевая разделительная линия 2025-2026
**Не "автоматизация vs ручное" — а "официальный Graph API vs неофициальные методы".**
- Meta жёстко закрутил гайки в 2025
- Май-август 2025 — массовая волна банов (включая Meta Verified)
- Октябрь 2025 — DM rate limit срезан с 5000 до 200/час (-96%)
- 2026 — **68% аккаунтов с unauthorized автоматизацией забанены в Q1 в US/EU**

## Что официально РАЗРЕШЕНО (Meta Graph API + Instagram Messaging API)

### DM (Instagram Messaging API)
- 200 DM/час на аккаунт (одинаково для всех — 1K и 1M follower)
- 24-часовое messaging window: писать можно ТОЛЬКО тем, кто:
  - оставил коммент под твоим постом за последние 24ч
  - ответил на твою story
  - сам написал в DM первым
- 1 автоматическое сообщение на пользователя на trigger
- 300 calls/sec на текстовые сообщения, 10/sec на медиа
- **НЕЛЬЗЯ** массовый cold outreach — выдаст бан

### Комментарии (Graph API)
- 750 calls/час на Page для приватных ответов на комменты
- 750 calls/час на Instagram professional account
- Лимит на ручные комменты: ~40/час начинает выглядеть как бот
- Posting comments через API на чужие посты — **нет такого endpoint в публичном Graph API** (только ответы на комменты под твоими постами)

### Авто-постинг (Graph API + Meta Business Suite)
- **Низкий риск**: Meta Business Suite (бесплатно, родное от Meta) — 0% риск
- Graph API publishing endpoint — официально разрешено через approved tools (Buffer, Later, Hootsuite, Sprout, Postiz, etc.)
- Триггеры бана: посты в exact intervals (каждые 60 минут ровно), 50+ постов/день — shadowban в 72% случаев

## Что СЕРАЯ ЗОНА

### AI-генерация контента/комментов через official API
- Технически разрешено
- Но: если AI пишет шаблонные комменты под кучу постов = детектится как spam
- Если AI помогает составить длинный, контекстный коммент 1-2/час под СВОИМИ постами = ок
- Posting comments под чужие посты через API = endpoint существует в ограниченном виде, но риск

### Ответы на DM через AI (auto-reply)
- Через ManyChat / CreatorFlow / approved partners — безопасно
- Через self-hosted bot, который читает DM напрямую — риск
- Только в пределах 24h window и только на user-initiated сообщения

### Использование Meta Business Suite + AI orchestrator
- Если AI генерирует контент → человек/Business Suite публикует — безопасно
- Если AI напрямую пушит в Graph API через approved app — безопасно
- Если AI заходит в браузер / IG app и кликает — **опасно** (browser automation = детектится)

## Что ОПАСНО (бан с высокой вероятностью)

### Любая browser automation
- Selenium / Puppeteer / Playwright против instagram.com
- Chrome extensions, которые управляют сессией
- Создаёт detectable fingerprints — банится
- 2026: ban rate +300% по сравнению с 2024

### Unofficial Private API libs
- instagrapi (Python), мобильные эмуляторы
- Работает, но Meta активно ловит — особенно для крупных аккаунтов
- Для SDTV (510K) = неприемлемый риск

### Cold DM массой / cold комменты под чужими постами
- Даже через "official" API — 24h rule убивает cold outreach
- Через unofficial — 100% бан рано или поздно

### Auto-follow / auto-like / auto-DM кампании на холодную
- Это то, что Meta убил в 2025

### Логин-шеринг с третьими сервисами
- Если сервис просит пароль IG = небезопасно
- API-tools никогда не требуют пароль (только OAuth)

## Большие аккаунты (SDTV 510K/550K) — отдельный риск-профиль
- Бан = катастрофа (нет восстановления follow base)
- Verified/большие аккаунты получают **те же лимиты** (200/час DM)
- Но Meta пристальнее мониторит spike-активность
- **Рекомендация: ТОЛЬКО official API + Meta Business Partners (ManyChat, CreatorFlow). НИКАКОЙ browser automation, никакого instagrapi, никаких "DM-ботов с парсингом".**

## Малые/новые аккаунты (Аранча, личный бренд)
- Новые аккаунты в первые недели — высокий triggered-action-block риск
- Авто-действия (даже официальные) на новом аккаунте могут привести к ограничениям
- **Рекомендация: первые 30-60 дней — только ручной постинг + Meta Business Suite scheduling. Потом можно подключить ManyChat для DM-ответов на comments-on-own-posts.**

## Источники (web research 2026-04-26)
- creatorflow.so/blog/avoid-instagram-bans-dm-automation
- creatorflow.so/blog/instagram-api-rate-limits-explained
- spurnow.com/en/blogs/instagram-dm-automation-rules
- spurnow.com/en/blogs/instagram-automated-behaviour
- developers.facebook.com/docs/graph-api/overview/rate-limiting
- nowbam.com/is-it-manychat-my-theory-on-why-instagram-is-suspending-accounts
- techcrunch.com/2025/06/16/instagram-users-complain-of-mass-bans
- sumgenius.ai/blog/instagram-dm-bot-ban-wave-2026
- bot.space/blog/the-dangers-of-unofficial-instagram-dm-apis
- adstellar.ai/blog/facebook-auto-share-bot
- storrito.com/resources/instagram-penalizes-aggressive-automation
- inflowave.io/resources/instagram-dm-automation-guide-2026

## Главный вывод для Кирилла
**"AI-агент = безопасно" зависит от того, КАК он действует, а не от того, что делает.**
- AI-агент, который генерирует/предлагает → человек или approved API публикует = безопасно
- AI-агент, который напрямую дёргает official Graph API через approved partner = безопасно
- AI-агент, который имитирует браузер/мобильный клиент = опасно, особенно для SDTV

## Маршрутизация
- Виктор — техническая реализация Graph API integration / выбор Meta Business Partner
- Кай — стратегия community-building/DM-engine ВНУТРИ 24h window (комменты-под-постами → авто-DM на ответ)
- Луна — content automation для постинга через Buffer/Postiz/MBS
