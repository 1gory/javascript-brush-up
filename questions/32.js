// What happens if a variable is accessed before it is declared?

// if a variable is declared with the deprecated var keyword, it will be undefined,
// this process is described by the term hoisting
console.log(one); // undefined
var one = 1;

// if the variable is declared with let/const keywords, there will be an error
console.log(two); // Cannot access 'two' before initialization
const two = 1;
