# Начало работы с javascript

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)


#### Области применения JavaScript
- Веб-сайты и веб-приложения
- Расширения для браузера
- Мобильные приложения
- Серверная часть сайтов и программ
- Игры


#### РОЛЬ JAVASCRIPT В ВЕБ-РАЗРАБОТКЕ
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
_JavaScript – это язык программирования, который добавляет интерактивность на ваш веб-сайт (например: игры, отклик при нажатии кнопок или при вводе данных в формы, динамические стили, анимация)._

#### Выпуск JAVASCRIPT
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
ECMAScript — это встраиваемый расширяемый не имеющий средств ввода-вывода язык программирования, используемый в качестве основы для построения других скриптовых языков. Стандартизирован международной организацией ECMA в спецификации ECMA-262.

##### ECMAScript
> ES5 
##### Modern JavaScript
> ES6/ES2015 
> ES7/ES2016 
> ES8/ES2017
> ES9/ES2018
> ES10/ES2019
> ES11/ES2020



## Запуск JavaScript
Благодаря своему широкому ассортименту приложения, вы можете запускать JavaScript несколькими способами:
- Использование вкладки консоли веб-браузеров
- Использование Node.js
- Создавая веб-страницы


## Переменные и константы JavaScript
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
#### var
> var — используется в более старой версии JS 
var — это область действия функции (будет обсуждаться в последующих руководствах)
Например, var х;

#### let
> let — это новый способ объявления переменных, начиная с ES6 (ES2015)
let имеет блочную область действия (будет обсуждаться в последующих руководствах)
Например, let y;


## ОБЪЕКТЫ И ПРИМИТИВЫ
##### OBJECT
> let me = {
    name: 'Jonas'
};
```
- Object Literal (литерал объекта)
- Arrays
- Functions
- Many more... (многое другое)
```

##### PRIMITIVES
> let firstName = 'Jonas';
let age = 30;
```
- Number (Число)
- String (Строка)
- Boolean (Логическое значение)
- Undefined (Не определено)
- Null (Нуль)
- Symbol (Символ)
- Bigint (Большое число)
```

### Правила именования переменных JavaScript
Имена переменных должны начинаться либо с буквы, либо с символа подчеркивания _, либо со знака доллара $.
Имена переменных не могут начинаться с цифр. Например:
let 1simpleText = 'Javascript действительно прост';
console.log(1simpleText);
### Операторы В JavaScript
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
##### Арифметические операторы JavaScript
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
##### ЛОГИЧЕСКИЕ ОПЕРАТОРЫ: И(&&), ИЛИ( | | ), НЕ(!)
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
##### Операторы сравнения
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)


# TABLE OF CONTENTS

## 01 CONDITIONS
### CONDITION If/else statement
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
### CONDITION Ternary operator
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
### CONDITION Switch statment
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

> Оператор switch используется для выполнения
различные действия, основанные на различных
условия.
Используйте оператор switch, чтобы выбрать один
из многих блоков кода, которые должны быть выполнены.
Ключевое слово по умолчанию определяет
код для запуска, если нет совпадения регистра
Когда JavaScript достигает
ключевое слово break, оно вырывается из
блок переключения.

### FUNCTIONS
##### Есть 3 способа написать функцию в JavaScript

> 1 Function declaration (объявление функции)

> 2 Function Expression (Выражение функции)
_ arrow function (стрелочная функция)
_ Anonymous function (aнонимная функция)

> 3 Immediately invoced Function Expression (IIFE)

### FUNCTION REVIEW: ANATOMY of a function
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

#### FUNCTION Declaration
> Объявление функции определяет
функция с указанным
параметры.
• Функция объявляется с использованием
ключевое слово функции.
• Основные правила именования функций
аналогичны именованию переменной. Это
лучше написать описательное имя
для вашей функции. Например, если
функция используется для добавления двух
числа, вы могли бы назвать
функция add или addNumbers.

#### FUNCTION iife
> IIFE (немедленно вызывается
Выражение функции) представляет собой
функция, которая запускается в момент
вызывается или вызывается в
Цикл событий JavaScript. Иметь
функция, которая ведет себя таким образом
может быть полезен в определенных
ситуации. IIFE предотвращают загрязнение
глобальной области действия JS.

#### FUNCTION expression
> Функциональное выражение очень
похож на и имеет почти
тот же синтаксис, что и у функции
декларация. Основное отличие
между выражением функции
и объявление функции
имя функции, которое может быть
опущен в функциональных выражениях
к создавать анонимные и
стрелочные функции.
