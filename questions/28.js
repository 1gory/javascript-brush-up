// Как применяется оператор void в JavaScript?

// В JS это — оператор

// В JS оператор void вычисляет переданное ему выражение.
// При этом, независимо от того, какое именно выражение вычисляется,
// void всегда возвращает undefined.

function myFunc() {
  return 2 + 2
}

let i = void myFunc();

console.log(i); // undefined
