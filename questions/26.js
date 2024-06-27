// What values does typeof return?

// Always a string with a lowercase letter.
// It can return 8 values:
// - 7 for the 8 primary data types (7, not 8, because it returns "object" for null)
// - For a function or class, it returns "function".

console.log(typeof undefined); // "undefined"

console.log(typeof 1); // "number"

console.log(typeof 20n); // "bigint"

console.log(typeof true); // "boolean"

console.log(typeof "test"); // "string"

console.log(typeof Symbol("id")); // "symbol"

console.log(typeof Date); // "object"

console.log(typeof alert); // "function"

console.log(typeof null); // "object"

// typeof null === "object" is a well-known bug that will not be fixed to maintain backward compatibility.
