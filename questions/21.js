// What is destructuring in JavaScript?

// Special syntax that allows assigning values to variables from objects or arrays.

// An example with arrays or any iterable objects
const arr = ['one', 'two'];
const [varOne, varTwo, varThree = 'default'] = arr; // default value if the array is shorter than the variables in the left-hand side
console.log(varOne, varTwo, varThree); // one two default

// An example with objects
const obj = {a: {b: 'value1', c: 'valut2'}};
const {a: {b: val1, c, d = 'default'}} = obj;
console.log(val1, c, d); // value1 valut2 default
