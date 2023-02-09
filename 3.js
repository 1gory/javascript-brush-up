// Как перебрать элементы массива?
const arr = ['a', 'b', 'c', 'd'];

// 1. C помощью конструкции for (let i = 0; i < arr.length; i ++) {
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // a b c d
}

// 2. С помощью методов массива: Array.prototype.map, Array.prototype.forEach
// в результате arr.map возвращает новый массив элементов.
const newArray = arr.map((element, index) => {
  return `${element}${index}`;
});
console.log(newArray); // [ 'a0', 'b1', 'c2', 'd3' ]

// arr.forEach - не возвращает новый, но нет возможности break; continue;
arr.forEach((element, index) => {
  console.log(index); // 0 1 2 3
  console.log(element); // a b c d
});

// 3. C помощью конструкции for
for (const item of arr) {
  console.log(item); // a b c d
}

// 4. Не стоит использовать `for (const item in arr) {}`
// - Эта конструкция для перебора свойств в объекте
// - Не гарантирует порядок
// - Перебирает наследуемые свойства
