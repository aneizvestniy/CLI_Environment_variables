# Вправи — 03 Different config files

## Вправа 1 — Окремий конфіг

1) Створи `playwright.config.e2e.ts` (або `.js`).
2) Додай інший `baseURL` і `viewport`.
3) Запусти:

```bash
npx playwright test --config=playwright.config.e2e.ts
```

## Вправа 2 — Один конфіг, але projects

1) Залиш один `playwright.config.ts`.
2) Додай 2 projects:
- `chromium`
- `firefox`

3) Запусти тільки один проект:

```bash
npx playwright test --project=chromium
```

Опиши, який підхід тобі здається простішим для старту.
