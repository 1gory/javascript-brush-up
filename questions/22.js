// What is a "higher-order function"?

// A higher-order function is a function that takes a function as an argument or returns a function.

const plusOneHOF = function (funcArg) {
  return function (a, b) {
    return funcArg(a, b) + 1;
  }
}

const sum = (a, b) => a + b;

const resultFunc = plusOneHOF(sum);
console.log(resultFunc(1, 2)); // 1
