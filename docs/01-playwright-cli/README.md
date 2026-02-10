# 01 — Playwright CLI

## Мета модуля

Навчитись запускати Playwright тести через CLI швидко і керовано:
- запуск усіх тестів / одного файлу / конкретного тесту
- фільтрація (`--grep`, `file:line`)
- режими: headed / ui / debug

## Ключові команди

```bash
npx playwright test
npx playwright test tests/example.spec.ts
npx playwright test tests/example.spec.ts:42
npx playwright test --grep "smoke"
npx playwright test --headed
npx playwright test --ui
npx playwright test --debug
npx playwright test --help
```

## Best practices

- Для CI зазвичай краще **headless** + чіткий репортер.
- Для локального дебагу — `--ui` або `--debug`.
- Не міксуй 10 параметрів одразу: спочатку відтворив проблему → потім додав фільтри.

## Дивись також

- Презентація: `prezentations/01-Playwright-CLI.md`
- Приклади: `docs/01-playwright-cli/examples/`
- Вправи: `docs/01-playwright-cli/exercises/`
