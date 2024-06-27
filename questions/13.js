// How to get the prototype of an object?

// 1. Using getter (and setter) __proto__. This is an outdated method, but still functional.
const obj = {};
console.log(obj.__proto__);

// 2. A more modern way is `Object.getPrototypeOf(obj)`.
console.log(Object.getPrototypeOf(obj));

// 3. Using the prototype property of a constructor function.
// It works if this property is correctly set and has not been modified.
console.log(obj.constructor.prototype);
