# Приклад: e2e vs api конфіги

Ідея: розділити тести по типу, якщо вони мають різні налаштування.

## playwright.config.e2e.ts

- longer timeouts
- headed для локального
- специфічні проекти/репортери

## playwright.config.api.ts

- менші таймаути
- без браузера (request fixture)
- інший testMatch

Запуск:

```bash
npx playwright test --config=playwright.config.e2e.ts
npx playwright test --config=playwright.config.api.ts
```

> У маленьких проектах це часто оверкіл. Починай з одного конфіга і `projects`.
