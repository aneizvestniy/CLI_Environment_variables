# Приклад: dotenv + .env.example

## 1) Створюємо `.env.example`

```env
BASE_URL=
HTTP_CREDENTIALS_USERNAME=
HTTP_CREDENTIALS_PASSWORD=
```

## 2) `.env` (локально, НЕ комітимо)

```env
BASE_URL=https://stage.example.com
HTTP_CREDENTIALS_USERNAME=user
HTTP_CREDENTIALS_PASSWORD=pass
```

## 3) Завантаження у Playwright config

```ts
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL,
    httpCredentials: {
      username: process.env.HTTP_CREDENTIALS_USERNAME!,
      password: process.env.HTTP_CREDENTIALS_PASSWORD!,
    },
  },
});
```
