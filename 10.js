//Как проверить что переменная - массив?

const a = [];

console.log(Array.isArray(a))                   // ture
console.log(a instanceof Array)                 // ture
console.log(Array.prototype.isPrototypeOf(a))   // true
