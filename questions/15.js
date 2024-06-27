// How is the spread syntax used?

// 1. For functions, to pass an indefinite number of arguments.
function func() {
  console.log(arguments.length); // 3
}

const arg = ['1', '2', '3'];
func(...arg);

// 2. To capture all passed arguments to a function, thereby replacing the arguments object.
function newFunc(...arg) {
  console.log(arg.length); // 3
}

newFunc(1, 2, 3);

// 3. Copying elements of an array or concatenating arrays
const a = [1, 2, 3];
const b = [...a, 4, 5, 6];
console.log(b); // [ 1, 2, 3, 4, 5, 6 ]

// 4. Copying own enumerable properties of an object into another object
const obj1 = {
  a: 1, b: 2,
};

const obj2 = {...obj1};
console.log(obj2); // { a: 1, b: 2 }
