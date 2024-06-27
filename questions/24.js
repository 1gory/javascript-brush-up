// What are mutating and non-mutating methods using array methods as examples?

// These are methods that modify the array or object to which they are applied, for example:
const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.pop()); // 6 - the last element of the array was obtained
console.log(arr); // [ 1, 2, 3, 4, 5 ] - the original array has been modified

console.log(arr.push(7)); // 6 - the method returns the new length of the array
console.log(arr); // [ 1, 2, 3, 4, 5, 7 ] - the original array has been modified again

console.log(arr.splice(0, 3, 9, 8)); // [ 1, 2, 3 ] - will return the subarray that was removed
console.log(arr); // [ 9, 8, 4, 5, 7 ] - a new array with 9 and 8 in place of the removed part
