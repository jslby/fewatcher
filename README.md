#fewatcher

Данный инструмент предназначен для оптимизации рабочего времени front-end специалистов.
###Инструментарий:
* jade - препроцессор html;
* stylus - препроцессор css(nib);
* connect - сервер приложения;
* copy - копирование файлов в обход препроцессора;
* watch - планировщик. Выполняет функцию отслеживания изменений файлов и быстрой компиляции из исходников.

###Порядок установки:
Перед установкой у Вас на компьютере уже должен быть установлен nodeJS + npm и git.

1. `mkdir my_project`
2. `cd my_project`
3. `git clone git@github.com:jslby/fewatcher.git`
4. `npm install`

После этого Вы можете работать в директории `source`.
Сайт будет доступен по адресу `0.0.0.0:3000`.

Готовая верстка хранится в директории `dest`.

###Credits
* [grunt](https://github.com/gruntjs/grunt)
* [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)
