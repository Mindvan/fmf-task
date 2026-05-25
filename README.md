# Разработка страницы с использованием ИИ для верстки и интеграции

Тестовое задание для FMF.

## Используется

- React 19
- TypeScript
- Vite 8
- Sanity CMS
- Sanity Studio
- ESLint (+ typescript-eslint, react-hooks и др.)
- CSS
- GitHub Actions
- GitHub Pages

## CMS

CMS-админка доступна по ссылке (доступ к редактированию ограничен):
https://fmf-test-36qubumz.sanity.studio/

В CMS используется документ `Landing Page`. Через него редактируются:

- навигация
- hero-блок
- блок “О продукте”
- преимущества
- состав
- блок “Для кого”
- сравнение
- покупка/цена
- FAQ
- контакты и футер
- изображения секций

После изменения данных в Sanity нужно нажать `Publish`.

## Локальный запуск

Установка зависимостей:

```bash
npm i
npm run dev
```

После запуска Vite выведет локальный адрес, обычно http://localhost:5173.

## Sanity Studio

Папка Sanity Studio находится в studio-fmf-test.
Установка зависимостей для Studio:
```bash
cd studio-fmf-test
npm i
```

Запуск локально:
```bash
npm run dev
```

## Скрипты
- npm run dev - запуск сайта в режиме разработки
- npm run build - сборка сайта
- npm run preview - предпросмотр production-сборки
- npm run lint - проверка ESLint

### Скрипты Sanity Studio
В папке studio-fmf-test:
- npm run dev - запуск Sanity Studio локально
- npm run build - сборка Sanity Studio
- npm run deploy - деплой Sanity Studio
- npm run start - запуск production preview Studio
