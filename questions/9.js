// What does a instanceof B check?
// The operator `instanceof` checks if `a.__proto__ equals B.prototype`

class B {}
const a = new B();

console.log(a instanceof B); // true

const BB = function () {};
const aa = new BB();

console.log(aa instanceof BB); // true

