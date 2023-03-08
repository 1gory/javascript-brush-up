// Можно ли вызывать функцию конструктор без скобок new Object; ?

// можно, но не рекомендуется
const obj = new Object;
const arr = new Array;

console.log(obj); // {}
console.log(arr); // []
