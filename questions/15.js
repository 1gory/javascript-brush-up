// Как применяется spread синтаксис?

// 1. Для функций, чтобы передать неопределенное количество аргументов
function func() {
  console.log(arguments.length); // 3
}

const arg = ['1', '2', '3'];
func(...arg);

// 2. Чтобы получить все переданные аргументы функции, тем самым заменяя объект arguments
function newFunc(...arg) {
  console.log(arg.length); // 3
}

newFunc(1, 2, 3);

// 3. Копирование элементов массива или конкатенация массива
const a = [1, 2, 3];
const b = [...a, 4, 5, 6];
console.log(b); // [ 1, 2, 3, 4, 5, 6 ]

// 4. Копирование собственные перечисляемые свойства объекта в другой объект
const obj1 = {
  a: 1, b: 2,
};

const obj2 = { ...obj1 };
console.log(obj2); // { a: 1, b: 2 }