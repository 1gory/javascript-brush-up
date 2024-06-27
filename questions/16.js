// What are the static methods in Promise?
const promises = []; // promises - an array of Promise objects

Promise.all(promises); // Returns an array with results. If at least one returns an error, the result will be that error.

Promise.allSettled(promises) // Returns an array of results. Waits for all promises to resolve,
// then returns the result as an array of objects {status: "fulfilled"/"rejected", value: result/error}.

Promise.race(promises); // Waits for the first result, whether successful or an error. Ignores the rest.

// Promise.any(promises); // Waits for the first successful result. If all return errors, the result will be an AggregateError.

Promise.resolve("value"); // Returns a successful promise with the result value.

Promise.reject("error"); // Returns a rejected promise with an Error.
