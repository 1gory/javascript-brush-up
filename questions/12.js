// How to get the symbol properties of an object
// Using Object.getOwnPropertySymbols(obj)
const obj = {
  [Symbol('a')]: 'local',
  [Symbol.for('b')]: 'globalSymbol', // Global symbol
};

const objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols); // [ Symbol(a), Symbol(b) ]
