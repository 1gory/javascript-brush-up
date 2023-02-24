// Что такое "функция высшего порядка" (Higher-Order Functions)?

// Функция высшего порядка, это функция, которая принимает в качестве аргумента функцию или возвращает её функцию

const plusOneHOF = function (funcArg) {
  return function (a, b) {
    return funcArg(a, b) + 1;
  }
}

const sum = (a, b) => a + b;

const resultFunc = plusOneHOF(sum);
console.log(resultFunc(1, 2)); // 1
