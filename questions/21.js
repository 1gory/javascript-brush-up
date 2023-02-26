// Что такое деструктуризация в JS?

// Специальный синтаксис, позволяющий присваивать переменным значения внутри объекта или массива.

// Пример с массивами, либо с любыми перебираемыми объектами
const arr = ['one', 'two'];
const [varOne, varTwo, varThree = 'default'] = arr; // значение по умолчанию, если массив короче, чем переменных в левой чатси
console.log(varOne, varTwo, varThree); // one two default

// Пример с объектами
const obj = {a: {b: 'value1', c: 'valut2'}};
const {a: {b: val1, c, d = 'default'}} = obj;
console.log(val1, c, d); // value1 valut2 default
