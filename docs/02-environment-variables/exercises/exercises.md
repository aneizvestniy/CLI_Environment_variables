# Вправи — 02 Environment Variables

## Вправа 1 — ENV для baseURL

1) Додай в `playwright.config.ts` читання:
- `BASE_URL`

2) Запусти тести з різними значеннями:

```bash
BASE_URL=https://demoqa.com npx playwright test
BASE_URL=https://example.com npx playwright test
```

Опиши різницю.

## Вправа 2 — .env.local / .env.stage

1) Створи `.env.local` і `.env.stage` з різними `BASE_URL`.
2) Завантажуй env через:

```bash
ENV=stage npx playwright test
```

> Поясни, чому `.env` не можна комітити.
