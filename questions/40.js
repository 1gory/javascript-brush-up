// Does the map function iterate over the empty elements of the array [1,,,4]?

// Function skips unspecified values:
let arr = [1,,,4];

let mappedArr = arr.map(item => {
    return item * 2;
});

console.log(mappedArr); // Output: [2, undefined, undefined, 8]
