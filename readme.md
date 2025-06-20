# 📄 Тестовое - Статический HTML/CSS/JS 

## 1. 🔽 Скачивание и развёртывание проекта

Проект был скачан с помощью сервиса [saveweb2zip.com](https://saveweb2zip.com)  
и успешно развёрнут локально как обычный статический HTML-проект.  
Вся структура сайта сохранена: HTML, CSS, JS, изображения и шрифты.

---

## 2. 🎨 Изменения цветовой палитры

- Изменён фон сайта на более светлый.
- Основной шрифт заменён на `Inter` (подключён через Google Fonts).
- Цвета кнопок и иконок обновлены в соответствии с новой цветовой схемой.
- Обновлены hover-состояния для ссылок и интерактивных элементов.
- Перестройка структуры главной страницы


## 4. 🧾 Добавление формы

В нижней части страницы добавлен новый блок с формой обратной связи.

### 📌 Содержимое формы:

- Имя
- Фамилия
- Email
- Номер телефона с флагом страны (используется [intl-tel-input](https://github.com/jackocnr/intl-tel-input))
- Кнопка **"Отправить"**

### 🛠️ Реализация:

- Вся структура формы реализована по методологии **БЭМ (Block-Element-Modifier)**.
- Для каждой группы полей использован класс `form__group`.
- Сообщения об ошибке выводятся в элемент `form__error-message`, расположенный под соответствующим полем.

### ✅ Валидация:

- Email и номер телефона валидируются с помощью регулярных выражений.
- Используется плагин `intl-tel-input` для распознавания и форматирования номера телефона.
- При ошибке отображается текст рядом с полем.
- После успешной отправки выполняется редирект на страницу `thanks.html`.

---

### Инструкция по развертыванию 

```shell
git clone https://github.com/korobkad3v/consultglocal-edited.git
```

```shell
cd consultglocal-edited
open index.html
```

или перейти на [демо](https://korobkad3v.github.io/consultglocal-edited/index.html)