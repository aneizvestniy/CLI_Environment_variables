# Приклад: e2e vs api конфіги (реальний приклад з цього репо)

У цьому репозиторії є **працюючий** приклад з двома конфігами:

- `examples/test-frameworks/playwright/playwright.config.e2e.ts`
- `examples/test-frameworks/playwright/playwright.config.api.ts`

Ідея: розділити тести по типу, якщо вони мають різні налаштування.

## Що відрізняється

### E2E конфіг

- довші таймаути
- браузер (UI)
- baseURL для сайту

### API конфіг

- менші таймаути
- без браузера (через `request` fixture)
- baseURL для API

## Запуск

З кореня `examples/test-frameworks/playwright`:

```bash
# E2E
npm run test:e2e

# API
npm run test:api
```

Або напряму:

```bash
npx playwright test --config=playwright.config.e2e.ts
npx playwright test --config=playwright.config.api.ts
```

## Чому це корисно

- E2E і API мають різні таймаути/репорти/налаштування
- легше підтримувати: кожен конфіг відповідає за свою зону

> У маленьких проектах інколи вистачає одного конфіга + `projects`. Але як тільки різниця стає великою — 2 конфіги простіше.
