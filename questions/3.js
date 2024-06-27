// How to iterate through array elements?
const arr = ['a', 'b', 'c', 'd'];

// 1. With the `for` loop `for (let i = 0; i < arr.length; i ++) {`
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // a b c d
}

// 2. Using array methods like Array.prototype.map or Array.prototype.forEach.
// The arr.map method returns a new array of elements.
const newArray = arr.map((element, index) => {
  return `${element}${index}`;
});
console.log(newArray); // [ 'a0', 'b1', 'c2', 'd3' ]

// The arr.forEach method does not return a new array,
// and it does not support using break or continue statements to control the loop execution.
arr.forEach((element, index) => {
  console.log(index); // 0 1 2 3
  console.log(element); // a b c d
});

// 3.  With a `for` loop 
for (const item of arr) {
  console.log(item); // a b c d
}

// 4. Avoid using `for (const item in arr) {}.`
// - This construction is for iterating over properties in an object.
// - Does not guarantee the order
// - Iterates over inherited properties.
