# Приклад: дебаг flaky тесту

## Симптом

Тест інколи падає: елемент не видимий або натискання не спрацювало.

## Що робити

1) Запусти тільки 1 тест:

```bash
npx playwright test tests/example.spec.ts -g "name" --headed
```

2) Додай debug:

```bash
npx playwright test --debug
```

3) Встав `page.pause()` прямо перед проблемним місцем:

```ts
await page.pause();
```

4) Перевір локатор у Inspector.

5) Замінити анти-патерни:
- `waitForTimeout` → `expect(locator).toBeVisible()`
- ручні sleeps → auto-wait

## Порада

Якщо flaky пов’язаний з мережевою частиною, додай:
- retries на CI
- trace `on-first-retry`
- і вивчи HTML report
