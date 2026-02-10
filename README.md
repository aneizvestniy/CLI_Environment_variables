# 🎓 Навчальний курс: CLI + Environment Variables (Playwright)

Навчальний репозиторій для студентів з автоматизованого тестування на базі **Playwright**.

Курс організований у тому ж стилі та підході, як у репозиторії:
**Playwright_locators_actions_assertions**

- ✅ Теорія простою мовою
- ✅ Практичні приклади з поясненнями
- ✅ Вправи для закріплення
- ✅ Приклади для реального запуску команд (CLI) та налаштування середовищ

---

## 📚 Зміст курсу

### Модуль 01: Playwright CLI

- базові команди `npx playwright test`
- запуск файлів / grep / line
- headed / ui / debug

📁 [Документація](./docs/01-playwright-cli/README.md) | [Приклади](./docs/01-playwright-cli/examples/) | [Вправи](./docs/01-playwright-cli/exercises/)

---

### Модуль 02: Environment Variables

- `process.env` у Node.js
- як встановлювати env vars (Windows/macOS/Linux)
- `.env` / `.env.example` / кілька env файлів

📁 [Документація](./docs/02-environment-variables/README.md) | [Приклади](./docs/02-environment-variables/examples/) | [Вправи](./docs/02-environment-variables/exercises/)

---

### Модуль 03: Different config files

- навіщо кілька конфігів
- `--config=...`
- коли краще `projects` в одному конфізі

📁 [Документація](./docs/03-different-config-files/README.md) | [Приклади](./docs/03-different-config-files/examples/) | [Вправи](./docs/03-different-config-files/exercises/)

---

### Модуль 04: Debug your tests

- Debug через IDE (VS Code / WebStorm)
- Playwright Inspector (`--debug`)
- `page.pause()` та як дебажити flaky тести

📁 [Документація](./docs/04-debug-your-tests/README.md) | [Приклади](./docs/04-debug-your-tests/examples/) | [Вправи](./docs/04-debug-your-tests/exercises/)

---

## 🧩 Презентації

Папка: [`prezentations/`](./prezentations)

---

## 🚀 Швидкий старт (runnable Playwright приклад)

У репозиторії є приклад, де показано:
- env vars + `.env.*`
- 2 окремі конфіги: **E2E** та **API**
- запуск через CLI

```bash
cd examples/test-frameworks/playwright
npm ci
npx playwright install chromium

# E2E
npm run test:e2e

# API
npm run test:api
```

### Конфігурація

Скопіюй `.env.example` у `.env.local` і за потреби зміни `BASE_URL` / `API_BASE_URL`.

---

## 🔗 Корисні посилання

- Playwright CLI: https://playwright.dev/docs/test-cli
- Playwright Inspector: https://playwright.dev/docs/debug
- Test configuration: https://playwright.dev/docs/test-configuration
