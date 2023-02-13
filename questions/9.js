// Что проверяет a instanceof B?
// Оператор instanceof a.__proto__ == B.prototype

class B {}
const a = new B();

console.log(a instanceof B); // true

const BB = function () {};
const aa = new BB();

console.log(aa instanceof BB); // true

