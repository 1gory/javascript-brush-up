// How to check if a method or function exists in an object?
const parent = {parentProperty: 'value'};

const obj = {propertyName: 'value'};

Object.setPrototypeOf(obj, parent);

// 1. With the "in" operator.
// Checks if the method/property exists in the object and in the prototype chain
console.log('propertyName' in obj); // true
console.log('parentProperty' in obj); // true, the property has been found in the prototype.

// 2. Using the "hasOwnProperty" method
// It checks the existence of a method/property only in the object itself, not in it's prototype chain.
console.log(obj.hasOwnProperty('propertyName')); // true
console.log(obj.hasOwnProperty('parentProperty')); // false

// 3. Using a comparison with "undefined":
// It should be remembered that a property can be declared but still be undefined.
console.log(obj.propertyName === undefined); // false
