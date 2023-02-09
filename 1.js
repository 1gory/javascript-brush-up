// Как проверить наличие метода или функции в объекте?
const parent = {
  parentProperty: true,
}

const obj = {
  propertyName: 'value',
  __proto__: parent,
}

// 1. C помощью оператора "in"
// Проверит наличие метода/свойства в объекте и в цепочке прототипов.
console.log("propertyName" in obj); // true
console.log("parentProperty" in obj); // true, свойство найдено в прототипе

// 2. C помощью метода "hasOwnProperty"
// Проверит наличие метода/свойства только в самом объекте, не в цепочке прототипов.
console.log(obj.hasOwnProperty("propertyName")); // true
console.log(obj.hasOwnProperty("parentProperty")); // false

// 3. С помощью сравнения с “undefined”:
// Следует помнить, что свойство может быть объявлено, но быть равно undefined.
console.log(obj.propertyName === "undefined"); // false
