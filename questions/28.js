// How is the void operator used in JavaScript?

// In JavaScript, it is an operator

// In JavaScript, the void operator evaluates the expression passed to it.
// However, regardless of the expression evaluated, void always returns undefined.

function myFunc() {
  return 2 + 2
}

let i = void myFunc();

console.log(i); // undefined
