// Как получить символьные свойства объекта
// С помощью Object.getOwnPropertySymbols(obj)
const obj = {
  [Symbol('a')]: 'local',
  [Symbol.for('b')]: 'globalSymbol', // глобальный символ
};

const objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols); // [ Symbol(a), Symbol(b) ]
