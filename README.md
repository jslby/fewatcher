#fewatcher

Данный инструмент предназначен для оптимизации рабочего времени front-end специалистов.
###Инструментарий:
* jade - препроцессор html;
* stylus - препроцессор css(nib);
* connect - сервер приложения;
* copy - копирование файлов в обход препроцессора;
* watch - планировщик. Выполняет функцию отслеживания изменений файлов и быстрой компиляции из исходников.

###Порядок установки:
Давайте для начала установим необходимые инструменты, для работы fewatcher
1. Скачать и установить последнюю версию [nodeJS](http://nodejs.org/download/)
2. После установки у Вас будет доступен **node package manager**
3. `npm install -g grunt`

Теперь перейдем к непосредственной установке fewatcher

1. `mkdir my_project`
2. `cd my_project`
3. `git clone git@github.com:jslby/fewatcher.git`
4. `npm install`
4. `grunt`

После этого Вы можете работать в директории `source`.
Сайт будет доступен по адресу `0.0.0.0:3000`.

Готовая верстка хранится в директории `dest`.

> Для работы LiveReload, добавьте эту строку перед закрывающим тегом `body`
> `<script src="//localhost:35729/livereload.js"></script>`

###Credits
* [grunt](https://github.com/gruntjs/grunt)
* [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)
