# VS Code: launch.json для Playwright

У цьому репозиторії є готовий файл:

- `examples/test-frameworks/playwright/.vscode/launch.json`

## Як використати

1) Відкрий репозиторій у VS Code.
2) Перейди у **Run and Debug**.
3) Вибери конфіг:
- **Playwright: E2E (UI mode)**
- **Playwright: E2E (--debug)**
- **Playwright: API tests**

4) Натисни **Start Debugging**.

## Навіщо це потрібно

- запускає тести у правильній папці (`cwd`)
- передає `ENV=local`
- дозволяє ставити breakpoints в тестах і Page Objects

## Якщо не стартує

- спочатку зроби:

```bash
cd examples/test-frameworks/playwright
npm install
npx playwright install chromium
```

- перевір, що `node_modules/@playwright/test/cli.js` існує.
