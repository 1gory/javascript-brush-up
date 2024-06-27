// What is the difference between microtasks and macrotasks in JS?

// Macrotask queue - a queue of regular tasks in an event loop

// microtasks - tasks that come only from code, processing .then/catch/finally
// promis creation - synchronous process, it is performed within microtasks

// all microtasks are executed immediately after the macrotask

console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7);

// First macro task 1, 7 is executed.
// Then microtasks 3, 5
// Then the next macro task 2, 6, 4
