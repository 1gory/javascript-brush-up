// Какие значения возвращает typeof?

// Всегда строка со строчной буквы.
// Может возвращать 8 значений:
// - 7 для 8 основных типов данных (7, а не 8, так как для null вернет "object")
// - для функции или класса вернет "function"

console.log(typeof undefined); // "undefined"

console.log(typeof 1); // "number"

console.log(typeof 20n); // "bigint"

console.log(typeof true); // "boolean"

console.log(typeof "test"); // "string"

console.log(typeof Symbol("id")); // "symbol"

console.log(typeof Date); // "object"

console.log(typeof alert); // "function"

console.log(typeof null); // "object"

// typeof null === "object" является общеизветсным багом,
// который не будет исправлен для сохранения обратной совместимости.
