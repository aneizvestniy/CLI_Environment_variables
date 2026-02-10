# Приклад: env vars у CI (пояснення)

У CI (GitHub Actions/GitLab CI/Jenkins) змінні середовища зазвичай задаються через:
- secrets
- env блоки

## Чому так краще

- CI не бачить твій локальний `.env`
- секрети не лежать у git
- можна обмежити доступ

## Приклад (псевдо)

```yaml
env:
  BASE_URL: ${{ secrets.BASE_URL }}
  API_TOKEN: ${{ secrets.API_TOKEN }}
```

> Конкретний синтаксис залежить від CI, але ідея одна: **секрети → secrets**.
