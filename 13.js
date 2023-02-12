// Как получить прототип объекта?

// 1. Через геттер (и сеттер) __proto__. Устаревший способ, но всё еще рабочий.
const obj = {};
console.log(obj.__proto__);

// 2. Более современный способ Object.getPrototypeOf(obj)
console.log(Object.getPrototypeOf(obj));

// 3. Через свойство prototype функции-конструктора.
// Сработает, если это свойство установлено корректно и не модифицировалось.
console.log(obj.constructor.prototype);
