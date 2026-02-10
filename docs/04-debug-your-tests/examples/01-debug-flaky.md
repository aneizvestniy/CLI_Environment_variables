# Приклад: дебаг flaky тесту (практичний чекліст)

## Симптом

Тест інколи падає:
- елемент не видимий
- клік не спрацював
- таймаут на `expect()`

## Крок 1 — звузити запуск

```bash
# 1 воркер, 1 файл
npx playwright test tests/e2e/01-demoqa-textbox.spec.ts --workers=1

# або за назвою
npx playwright test --grep "submit" --workers=1
```

## Крок 2 — headed + Inspector

```bash
npx playwright test --headed --debug
```

> Це найшвидший спосіб зрозуміти: локатор поганий чи сторінка не готова.

## Крок 3 — зупинка в конкретному місці

```ts
await page.pause();
```

Після паузи:
- спробуй локатор picker
- подивись, чи елемент реально є в DOM

## Крок 4 — дивимось репорт/trace

Після прогону:

```bash
npx playwright show-report
```

Якщо включений trace (`trace: 'on-first-retry'`) — він буде доступний в репорті.

## Крок 5 — фіксимо причину

✅ Робимо:
- `expect(locator).toBeVisible()` / `toBeEnabled()` замість sleeps
- стабільні локатори (`getByRole`, `getByLabel`, `getByTestId`)
- чекаємо URL/ключовий елемент після навігації

❌ Не робимо:
- `waitForTimeout(5000)` як постійне рішення

## Якщо flaky через мережу

- retries на CI
- trace `on-first-retry`
- обмежити web-тести тегом `@web`
