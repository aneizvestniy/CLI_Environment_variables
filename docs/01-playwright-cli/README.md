# 01 — Playwright CLI

## Мета модуля

Навчитись запускати Playwright тести через CLI **швидко, повторювано і керовано**:

- запуск усіх тестів / одного файлу / одного тесту
- фільтрація: `--grep`, `file:line`
- режими: headed / UI mode / debug
- базове розуміння: що таке **проєкт**, **репортер**, **воркери**

## Що таке Playwright CLI (простими словами)

Playwright CLI — це набір команд, які дозволяють:
- запускати тести
- вибирати, *які саме* тести запускати
- вмикати режими для дебагу
- керувати параметрами запуску (браузер, паралельність, репорти)

Ключова команда: `npx playwright test`.

## Ключові команди (cheat sheet)

### 1) Запуск

```bash
# Запустити все
npx playwright test

# Запустити 1 файл
npx playwright test tests/example.spec.ts

# Запустити тест, який починається з певного рядка
npx playwright test tests/example.spec.ts:42
```

### 2) Вибір тестів

```bash
# За назвою тесту (grep)
npx playwright test --grep "login"

# За тегом (приклад: @smoke)
npx playwright test --grep @smoke
```

### 3) Режими (headed / UI / debug)

```bash
# Показувати браузер
npx playwright test --headed

# UI mode (інтерактивний запуск)
npx playwright test --ui

# Debug режим (Inspector)
npx playwright test --debug
```

### 4) Проєкти (браузери/набори налаштувань)

```bash
npx playwright test --project=chromium
```

### 5) Паралельність

```bash
# Запуск без паралельності (зручно для стабільного дебагу)
npx playwright test --workers=1
```

### 6) Довідка

```bash
npx playwright test --help
```

## Best practices (для новачків)

1) Якщо тест падає — **звужуй** запуск:
- 1 файл → 1 тест (`--grep`) → `--workers=1` → `--headed` → `--debug`

2) Не використовуй `waitForTimeout()` як “ліки”.
- Замість цього: `await expect(locator).toBeVisible()`.

3) Для CI:
- краще headless
- краще стабільний репортер (HTML)

## Часті помилки

- **"playwright: not found"** → не зробили `npm install` / `npm ci`.
- **"browser executable doesn't exist"** → `npx playwright install chromium`.
- **grep не знаходить тест** → перевір лапки, регістр, чи є `@tag` в назві.

## Дивись також

- Презентація: `prezentations/01-Playwright-CLI.md`
- Приклади: `docs/01-playwright-cli/examples/`
- Вправи: `docs/01-playwright-cli/exercises/`
