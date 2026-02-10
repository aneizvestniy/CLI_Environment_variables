# 03 — Different config files

## Мета модуля

Зрозуміти, як керувати різними конфігураціями Playwright:
- окремі `playwright.config.*` файли
- запуск через `--config`
- альтернатива: `projects` в одному конфізі

## Коли робити окремі конфіги

- у вас сильно різні типи тестів (API vs E2E)
- різні репортери/таймаути
- різні baseURL/credentials

## Коли краще один конфіг + projects

- різні браузери
- різні теги (`@smoke`, `@regression`)
- різні середовища (через env vars)

## Дивись також

- Презентація: `prezentations/03-Different-config-files.md`
- Приклади: `docs/03-different-config-files/examples/`
- Вправи: `docs/03-different-config-files/exercises/`
