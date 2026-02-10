# Реальні приклади конфігів (E2E та API) у цьому репозиторії

Подивись файли:

- `examples/test-frameworks/playwright/playwright.config.e2e.ts`
- `examples/test-frameworks/playwright/playwright.config.api.ts`

## Що важливо помітити

### 1) Різні testDir

- E2E: `tests/e2e`
- API: `tests/api`

Це найпростіший спосіб розділити типи тестів.

### 2) Різні таймаути

- E2E тести зазвичай довші → `timeout` більше
- API тести швидші → `timeout` менше

### 3) baseURL через env

- E2E: `BASE_URL`
- API: `API_BASE_URL`

Це дає можливість запускати однакові тести на різних середовищах.

## Як запустити

```bash
cd examples/test-frameworks/playwright
npm install
npx playwright install chromium

npm run test:e2e
npm run test:api
```
