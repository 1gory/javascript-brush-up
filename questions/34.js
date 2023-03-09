// Что возвращает вызов функции-генератора?

// "функция-генератор" возвращает объект "генератор".
// С помощью метода next этого объекта можно последовательно
// получить значения yield из фукнкции-генератора.

function* generate() {
  yield 1;
  yield 2;
  return 3;
}

const generator = generate();
console.log(generator); // Object [Generator] {}

const one = generator.next();
console.log(one); // { value: 1, done: false }

const two = generator.next();
console.log(two); // { value: 2, done: false }

const three = generator.next();
console.log(three); // { value: 3, done: true }
