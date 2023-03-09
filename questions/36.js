// Чем отличаются микрозадачи и макрозадачи в JS?

// macrotask queue - очередь обычных задач в событийном цикле

// microtasks - задачи, которые приходят только из кода, обработка .then/catch/finally
// создание промиса - синхронный процес, идет в рамках microtasks

// сразу после макрозадачи выполняются все микрозадачи

console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7);

// Сначала выполняется макрозадача 1, 7
// Затем микрозадачи 3, 5
// Затем следующая макрозадача 2, 6, 4
