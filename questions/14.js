// Describe the __proto__ property

// This is not a property. It is a getter/setter for the prototype in an object.
// - specifically defined in Object.prototype
// - and it is deprecated
// - and __proto__ must either be an object or null.
// A string, for example, cannot become a prototype. The assignment will be ignored.

const obj1 = {};

// Nothing will happen; the prototype did not change
const obj2 = {
  __proto__: 'obj2'
};

console.log(obj2.__proto__ === Object.prototype); // true

obj2.__proto__ = obj1;
console.log(obj2.__proto__ === obj1); // true, now the prototype has changed to
obj2.__proto__ = null;
console.log(obj2.__proto__); // undefined, now the prototype is null.
// But the __proto__ setter/getter itself was located in Object.prototype and is now unavailable.
// But we can use another recommended method to obtain the object's prototype:
console.log(Object.getPrototypeOf(obj2)); // null
