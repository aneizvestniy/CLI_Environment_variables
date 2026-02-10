# Приклад: кілька .env файлів

## Варіант A — копіювати потрібний

```bash
cp .env.stage .env
npx playwright test
```

## Варіант B — ENV=stage

Файли:
- `.env.local`
- `.env.stage`

Код:

```ts
import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.ENV || 'local'}` });
```

Запуск:

```bash
ENV=stage npx playwright test
```
