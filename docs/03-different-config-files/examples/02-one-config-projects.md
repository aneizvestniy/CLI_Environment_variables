# Приклад: один конфіг + projects (рекомендовано для старту)

Найчастіше вам не потрібні 3 різні конфіги. Достатньо одного `playwright.config.ts` і `projects`.

## Ідея

- `projects` = різні браузери або різні набори тестів
- запуск обираєш через `--project`

## Приклад (спрощено)

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
```

Запуск:

```bash
npx playwright test --project=chromium
```
