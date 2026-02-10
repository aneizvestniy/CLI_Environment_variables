# Environment Variables

Змінні середовища (Environment Variables) - це змінні, які мають значення, доступні для будь-якої програми або скрипта в операційній системі. Вони надають спосіб передачі конфігураційних даних або іншої інформації у програми під час їх виконання.

В контексті Node.js, змінні середовища можна отримати з об'єкта `process.env`. Цей об'єкт містить інформацію про різні змінні середовища, які можна використовувати у вашому коді Node.js. Наприклад:

```js
const myVar = process.env.MY_VARIABLE;
console.log(myVar); // Виведе значення змінної середовища MY_VARIABLE
```

Використання змінних середовища в Node.js є корисним для налаштування програм та скриптів без прямого включення конфігураційних даних у код. Вони дозволяють:

- **Конфігурація додатків**: Використання змінних середовища для зберігання конфігураційних параметрів, таких як ключі API, URL-адреси баз даних тощо, дозволяє безпечно налаштовувати програми в різних середовищах (розробка, тестування, продуктивне середовище) без зміни коду.
- **Управління секретами**: Змінні середовища можуть використовуватися для зберігання секретної інформації, такої як паролі, токени або ключі доступу. Це допомагає уникнути включення конфіденційної інформації безпосередньо у коді.
- **Динамічна конфігурація**: Змінні середовища дозволяють динамічно змінювати поведінку програми, не змінюючи її сам код.
- **Керування середовищем розробки**: Змінні середовища дозволяють розробникам змінювати поведінку програм без зміни самого коду.

---

## Як присвоїти значення для Environment Variables

Environment variables можна встановлювати на різних операційних системах та платформах.

### Windows

1) Через командний рядок:

```bat
set VARIABLE_NAME=value
```

2) Через PowerShell:

```powershell
$env:VARIABLE_NAME="value"
```

### macOS та Linux

1) Через командний рядок (bash/zsh):

```bash
export VARIABLE_NAME=value
```

2) Установка змінних середовища при запуску команди:

```bash
VARIABLE_NAME=value npx playwright test
```

Після встановлення змінної середовища ваш код Node.js може отримати доступ до неї через:

```js
const variableValue = process.env.VARIABLE_NAME;
console.log(variableValue);
```

> Будьте уважні: змінні середовища можуть не зберігатися між сеансами (залежить від того, як ви їх встановили).

---

## Як видалити Environment Variables

### Windows

1) CMD (setx):

```bat
setx VARIABLE_NAME ""
```

2) PowerShell:

```powershell
Remove-Item env:\\VARIABLE_NAME
```

### macOS та Linux

```bash
unset VARIABLE_NAME
```

Після видалення змінна більше не буде доступна у Node.js через `process.env.VARIABLE_NAME`.

---

## Використання Environment Variables в Playwright

У Playwright змінні середовища корисні для:

- **Конфігурації URL-адрес** (dev/stage/prod)
- **Секретів** (логін/пароль/токени)
- **Параметрів запуску** (timeouts, headless, retries, workers)

Приклад використання в `playwright.config`:

```js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 40_000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL,
    headless: false,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'smoke-tests',
      grep: /@smoke/,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
```

---

## .env файли

Файли `.env` широко використовуються для зберігання environment variables (особливо секретів) **поза кодом**.

Приклад формату:

```env
BASE_URL=http://localhost:3000
HTTP_CREDENTIALS_USERNAME=root
HTTP_CREDENTIALS_PASSWORD=mysupersecretpassword
```

### Використання dotenv

Встановлення:

```bash
npm install dotenv
```

Завантаження `.env` у конфіг:

```js
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL,
    httpCredentials: {
      username: process.env.HTTP_CREDENTIALS_USERNAME,
      password: process.env.HTTP_CREDENTIALS_PASSWORD,
    },
  },
});
```

> `.env` файл треба додати до `.gitignore` і **не пушити**, якщо там є секрети.

### .env.example

Гарна практика — тримати `*.example` файл:
- є всі ключі
- нема значень

---

## Робота з декількома .env файлами

### Варіант 1 — копіювати потрібний файл

```bash
cp .env.stage .env
```

### Варіант 2 — завантажувати по змінній `ENV`

Створіть файли:
- `.env.stage`
- `.env.local`

І в коді:

```js
import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.ENV || 'local'}` });
```

Запуск:

```bash
ENV=stage npx playwright test
```
