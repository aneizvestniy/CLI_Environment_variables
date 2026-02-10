# 04 — Debug your tests

## Мета модуля

Навчитись швидко знаходити причину падіння тесту:
- IDE debug (VS Code / WebStorm)
- Playwright Inspector (`--debug`)
- `page.pause()`
- робота з flaky тестами

## Пояснення для новачків

Дебаг — це **процес**, а не одна команда. Хороший дебаг завжди має мету: *зрозуміти причину* і *зробити тест стабільним*.

## Основні прийоми

### 1) Звужуй проблему

- 1 файл
- 1 тест (`--grep`)
- 1 воркер (`--workers=1`)

### 2) Дивись на UI

Для UI проблем:

```bash
npx playwright test --headed --debug
```

### 3) Inspector

`--debug` відкриває Playwright Inspector:
- можна крокувати
- дивитись локатори
- бачити, що робить Playwright

### 4) page.pause()

Додаєш паузу у конкретному місці:

```ts
await page.pause();
```

Працює тільки у headed/debug режимах.

### 5) Trace + HTML report

- HTML report показує, *на якому кроці* упало
- Trace дозволяє “прокрутити” кроки назад

> Найчастіший анти-патерн новачків: лікувати flaky через `waitForTimeout()`. Це майже завжди погано.

## Дивись також

- Презентація: `prezentations/04-Debug-your-tests.md`
- Приклади: `docs/04-debug-your-tests/examples/`
- Вправи: `docs/04-debug-your-tests/exercises/`
