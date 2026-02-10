# WebStorm: як запустити і дебажити Playwright тести

## Варіант A — через npm scripts (найпростіше)

1) Відкрий проект у WebStorm.
2) Відкрий `package.json` у `examples/test-frameworks/playwright/`.
3) Біля scripts натисни ▶️ на:
- `test:e2e`
- `test:api`
- `test:debug`

WebStorm сам створить тимчасову Run/Debug конфігурацію.

## Варіант B — Run/Debug Configuration вручну

1) **Run** → **Edit Configurations…**
2) Додай **npm** конфігурацію:
- Package manager: npm
- Package.json: `examples/test-frameworks/playwright/package.json`
- Command: `run`
- Scripts: `test:debug`

3) В `Environment variables` додай:

- `ENV=local`

4) Постав breakpoint у тесті і натисни **Debug**.

## Порада

Для стабільного дебагу використовуй:
- `--workers=1`
- і запускай 1 файл або `--grep`.
