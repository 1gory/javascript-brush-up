// Опишите свойство __proto__

// Это не свойство. Это геттер/сеттер для прототипа в объекте,
// - причем заданный в Object.prototype,
// - причем устаревший,
// - причем __proto__ должно быть либо объектом, либо null.
// Строка, к примеру, не может стать прототипом. Присвоение будет проигнорировано

const obj1 = {};

// ничего не произойдет, прототип не поменялся с Object.prototype
const obj2 = {
  __proto__: 'obj2'
};

console.log(obj2.__proto__ === Object.prototype); // true

obj2.__proto__ = obj1;
console.log(obj2.__proto__ === obj1); // true, теперь прототип поменялся на obj1

obj2.__proto__ = null;
console.log(obj2.__proto__); // undefined, теперь прототипом является null,
// но сам сеттер/геттер __proto__ нахоился в Object.prototype и теперь недоступен.
// Но мы можем воспользоваться другим, рекомендуемым методом для получения объекта протоипа:
console.log(Object.getPrototypeOf(obj2)); // null
