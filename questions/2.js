// How to iterate over the properties in an object?
let obj = {
  name: 'Igor Pershin',
  age: 30,
  isAdmin: true,
};

// 1. Using the `for (let key in obj)` construct
// Both own and inherited properties are iterated over.
// Inherited properties can be filtered out using `obj.hasOwnProperty`.
// Properties with the `enumerable: false` descriptor are not iterated over.
for (let key in obj) {
  console.log(key);  // name, age, isAdmin
  console.log(obj[key]); // Igor Pershin, 30, true
}

// 2. To get the desired keys using methods and iterate over them using array built-in methods:
// Object.getOwnPropertyNames(obj) retrieves an array containing the names of the object's own (non-inherited) properties.
// The `enumerable` descriptor does not affect the result.
Object.getOwnPropertyNames(obj).forEach((propertyName) => {
  console.log(propertyName); // name, age, isAdmin
  console.log(obj[propertyName]); // Igor Pershin, 30, true
});

// To obtain an array of symbol keys with Object.getOwnPropertySymbols(obj)
obj[Symbol('id')] = 'SymbolValue';
Object.getOwnPropertySymbols(obj).forEach((propertyName) => {
  console.log(propertyName); // Symbol(id)
  console.log(obj[propertyName]); // SymbolValue
});

// Object.keys/values() - Returns own (non-inherited), non-symbol keys/values with the enumerable flag set to true
Object.keys(obj).forEach((key) => {
  console.log(key); // name, age, isAdmin
});

Object.values(obj).forEach((value) => {
  console.log(value); // Igor Pershin, 30, true
});
