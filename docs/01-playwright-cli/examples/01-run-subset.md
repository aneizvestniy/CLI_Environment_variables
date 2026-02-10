# Приклад: запуск підмножини тестів

## Run by project

```bash
npx playwright test --project=chromium
```

## Run by tag

Познач тести тегами:

```ts
test('login @smoke', async () => {
  // ...
});
```

Запуск:

```bash
npx playwright test --grep @smoke
```

## Run by path

```bash
npx playwright test tests/auth/ tests/payments/
```
