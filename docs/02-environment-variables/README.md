# 02 — Environment Variables

## Мета модуля

Навчитись безпечно і керовано передавати конфігурацію в тести через env vars:

- що таке env vars і навіщо вони
- як читати env vars у Node.js (`process.env`)
- як встановлювати env vars у Windows/macOS/Linux
- як працює `.env` / `.env.example`
- як робити кілька середовищ: `.env.local`, `.env.stage`, `.env.prod`

## Пояснення для новачків

### Що таке environment variables

Це "налаштування", які операційна система передає програмі під час запуску.

Приклади:
- `BASE_URL` — URL сайту, який тестуємо
- `API_TOKEN` — токен доступу
- `CI=true` — що ми запускаємось у CI

### Навіщо вони потрібні

1) **Не міняємо код** при переході між середовищами (local/stage/prod)
2) **Не зберігаємо секрети в репозиторії** (паролі/токени)
3) Легко керувати поведінкою тестів (retries/workers/trace)

## Основні принципи

- **Секрети не комітимо** → `.env` у `.gitignore`.
- Ключі (без значень) тримаємо в `.env.example`.
- Для CI — env vars задаються у pipeline / GitHub Secrets.

## Типові помилки

- `process.env.BASE_URL` = `undefined` → env не заданий або `.env` не підвантажився.
- Комітнули `.env` з паролями → треба видаляти з історії + міняти секрети.
- Плутанина між `export VAR=...` (Unix) і `set VAR=...` (Windows).

## Що підсвітити (ключові моменти)

1) **Короткі env vars під час запуску**

```bash
BASE_URL=https://demoqa.com npx playwright test
```

2) **Секрети ніколи не комітимо**
- `.env` у `.gitignore`
- замість цього: `.env.example` без значень

3) **Пайплайни (CI/CD)**
- `.env` локальний файл CI не бачить
- у CI використовуються secrets / env blocks

4) **Розділяй app config vs test config**
- `BASE_URL`, `API_BASE_URL` — app targets
- `CI`, `PWDEBUG`, `ENV` — керування запуском

## Дивись також

- Презентація: `prezentations/02-Environment-Variables.md`
- Приклади: `docs/02-environment-variables/examples/`
- Вправи: `docs/02-environment-variables/exercises/`
- Runnable приклад: `examples/test-frameworks/playwright/.env.example`
