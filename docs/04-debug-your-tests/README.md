# 04 — Debug your tests

## Мета модуля

Навчитись швидко знаходити причину падіння тесту:
- IDE debug (VS Code / WebStorm)
- Playwright Inspector (`--debug`)
- `page.pause()`
- робота з flaky тестами

## Пояснення для новачків

Дебаг — це **процес**, а не одна команда. Хороший дебаг завжди має мету: *зрозуміти причину* і *зробити тест стабільним*.

## Як дебажити (покроково)

### Крок 0 — зроби проблему маленькою

1) Запускай 1 файл:

```bash
npx playwright test tests/e2e/01-demoqa-textbox.spec.ts --workers=1
```

2) Якщо треба — ще звузь через `--grep`:

```bash
npx playwright test --grep "submit" --workers=1
```

### Крок 1 — відкрий браузер і Inspector

```bash
npm run test:debug
```

(це еквівалент `npx playwright test --config=playwright.config.e2e.ts --debug`)

### Крок 2 — page.pause() у потрібному місці

```ts
await page.pause();
```

Після цього можна:
- підсвічувати елементи
- перевіряти локатори
- виконувати команди в консольці Inspector

### Крок 3 — дивись репорти

Після запуску:

```bash
npm run show-report
```

### Крок 4 — виправляй причину, не симптом

Типові причини:
- поганий локатор → зроби стабільнішим
- елемент не готовий → `expect(locator).toBeVisible()`
- flaky через мережу → retries + trace + стабілізація умов

❌ Антипатерн:
- `waitForTimeout(5000)`

✅ Нормально:
- `await expect(locator).toBeVisible()`
- `await expect(page).toHaveURL(...)`

## Корисні env vars для дебагу

- `PWDEBUG=1` (часто відкриває інспектор)
- `CI=true` (вмикає retries/workers як у CI)

## Дивись також

- Презентація: `prezentations/04-Debug-your-tests.md`
- Приклади: `docs/04-debug-your-tests/examples/`
  - VS Code launch.json: `docs/04-debug-your-tests/examples/02-vscode-launch-json.md`
  - WebStorm run config: `docs/04-debug-your-tests/examples/03-webstorm-run-config.md`
- Вправи: `docs/04-debug-your-tests/exercises/`
