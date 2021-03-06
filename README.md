# fewatcher

Данный инструмент предназначен для оптимизации рабочего времени front-end специалистов.
### Инструментарий:
* jade - препроцессор html;
* stylus - препроцессор css(nib);
* connect - сервер приложения;
* copy - копирование файлов в обход препроцессора;
* watch - планировщик. Выполняет функцию отслеживания изменений файлов и быстрой компиляции из исходников.

### Порядок установки:
Давайте для начала установим необходимые инструменты, для работы fewatcher

1. Скачать и установить последнюю версию [nodeJS](http://nodejs.org/download/)
2. После установки у Вас будет доступен **node package manager**
3. `npm install -g grunt`
4. Ознакомьтесь со статьей [по установке git](http://git-scm.com/book/ru/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-Git), под Вашу операционную систему

Эти 4 шага, Вы выполняете разово, и больше этого не потребуется. В них мы устанавливаем программы, знание которых **не является обязательным**, для работы с fewatcher

### Начнем
Для начала работы с новым проектом, Вам нужно будет выполнить 3 новых команды:

1. `git clone git@github.com:jslby/fewatcher.git my_project`, где `my_project` это директория, где будет Ваше приложение
2. `npm install`
3. `grunt`

В первой команде, мы клонируем репозиторий себе на компьютер, потом запускаем установку всех зависимостей.
Последней же командой мы запускаем сервер с Вашей версткой на `http://0.0.0.0:3000`

После этого Вы можете работать в директории `source`.
Сайт будет доступен по адресу `0.0.0.0:3000`.

Готовая верстка хранится в директории `dest`.

Для работы LiveReload, добавьте эту строку перед закрывающим тегом `body`
> `<script src="//localhost:35729/livereload.js"></script>`

### Credits
* [grunt](https://github.com/gruntjs/grunt)
* [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)
