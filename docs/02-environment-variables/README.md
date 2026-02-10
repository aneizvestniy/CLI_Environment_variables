# 02 — Environment Variables

## Мета модуля

Навчитись безпечно і керовано передавати конфігурацію в тести через env vars:
- `process.env` у Node.js
- установка env vars в різних ОС
- `.env` / `.env.example`
- кілька середовищ: `.env.local`, `.env.stage`, `.env.prod`

## Основні принципи

- **Секрети не комітимо** → `.env` у `.gitignore`
- Ключі показуємо в `.env.example`
- Для CI — env vars задаються у pipeline/Secrets

## Дивись також

- Презентація: `prezentations/02-Environment-Variables.md`
- Приклади: `docs/02-environment-variables/examples/`
- Вправи: `docs/02-environment-variables/exercises/`
