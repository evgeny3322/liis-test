# liis-test

**Реализованы следующие задачи:**

Описание интерфейса:
1. Страница авторизации. Почта и пароль могут быть любыми, но должны проходить стандартную валидацию.
2. Страница отображения отелей, где можно ввести название города, дату заселения и количество дней.
   По результатам этих данных отображаются отели и информация о них, которые можно добавить в избранное.<br>
   Избранные отели, в соответствующем блоке, можно отсортировать по стоимости и количеству звезд.<br>
   На странице отображается карусель захардкоженных изображений. Изображение в карусели можно прокручивать.<br>

Описание логики работы экранов:
- Если пароль и логин не прошли валидацию, отображать предупреждение о не правильности введенных данных.
  Правила валидации:
- Логин - любая почта
- Пароль - без кириллицы, минимум 8 символов

-  По клику на кнопку вход и наличии валидных данных происходит перенаправление на страницу отелей
-  На странице отелей по дефолту стоит город - Москва, день заезда - текущий (сегодняшний), количество дней - 1
-  Дата пикер может быть дефолтным

Поиск отелей осуществляется при нажатии на кнопку найти, но при первой загрузке страницы с дефолтными данными, соответствующие отели должны быть
- На странице отелей, добавить в избранное можно по нажатию на сердечко, удалить так же. В блоке избранных отелей также можно выполнить удаление из избранных
- При выборе новых данных для поиска, список избранных не должен сбрасываться. При перезагрузке страницы - может
- При перезагрузке страницы с отелями авторизация не должна сбрасываться
- По клику на кнопку “Выход” авторизация сбрасывается и происходит переход на страницу авторизации


## Используемые технологии
- React
- TypeScript
- Redux-Toolkit / Redux-Saga / React-router-dom v6
- AntDesign
## Использование локально

Экспорт проекта локально на компьютер:

```
git clone https://github.com/evgeny3322/liis-test.git
```

Для установки зависимостей:

```
yarn
```

Для запуска на localhost:3000

```
yarn start
```

## Demo

Посмотреть приложение в действии можно на [Link](https://evgeny3322.github.io/liis-test/)
"# liis-test" 
"# liis-test" 
