// Как перебрать свойства в объекте?
let obj = {
  name: 'Igor Pershin',
  age: 30,
  isAdmin: true,
};

// 1. С помощью конструкции for (let key in obj)
// Перебираются как собственные, так и унаследованные свойства.
// Унаследованные можно отфильтровать с помощью obj.hasOwnProperty
// Не перебираются свойства, с установленным дескриптором enumerable: false
for (let key in obj) {
  console.log(key);  // name, age, isAdmin
  console.log(obj[key]); // Igor Pershin, 30, true
}

// 2. Получить нужные ключи с помощью методов
// и перебрать их с помощью встроенных методов массива

// Object.getOwnPropertyNames(obj) - получить массив
// с именами собственных (не наследуемых) свойствами.
// Дескриптор enumerable не имеет значения.
Object.getOwnPropertyNames(obj).forEach((propertyName) => {
  console.log(propertyName); // name, age, isAdmin
  console.log(obj[propertyName]); // Igor Pershin, 30, true
});

// получить массив символьных ключей Object.getOwnPropertySymbols(obj)
obj[Symbol('id')] = 'SymbolValue';
Object.getOwnPropertySymbols(obj).forEach((propertyName) => {
  console.log(propertyName); // Symbol(id)
  console.log(obj[propertyName]); // SymbolValue
});

// Object.keys/values() - возвращает собственные (не наследуемые)
// несимвольные ключи/значения с флагом enumerable: true
Object.keys(obj).forEach((key) => {
  console.log(key); // name, age, isAdmin
});

Object.values(obj).forEach((value) => {
  console.log(value); // Igor Pershin, 30, true
});
