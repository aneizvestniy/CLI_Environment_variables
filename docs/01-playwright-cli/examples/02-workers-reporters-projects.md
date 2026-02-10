# Приклад: workers, reporters, projects

## Workers (паралельність)

Playwright запускає тести паралельно (кілька воркерів). Це швидко, але іноді складніше дебажити.

```bash
# 1 воркер — стабільніше для дебагу
npx playwright test --workers=1
```

## Reporters (репортери)

Репортер визначає, як виглядає результат прогону.

```bash
# наприклад, dot
npx playwright test --reporter=dot

# html (зручно для перегляду)
npx playwright test --reporter=html
```

Після прогону:

```bash
npx playwright show-report
```

## Projects

`projects` у `playwright.config.ts` — це як “профілі запуску”.

```bash
npx playwright test --project=chromium
```

> Типово: chromium/firefox/webkit, або smoke/regression.
