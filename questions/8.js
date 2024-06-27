// What are the differences between the methods call, bind, and apply?
const obj = {
  name: 'Igor',
};

const func = function () {
  console.log(this.name, ...arguments);
}

// 1. bind attaches the context (this = obj) to the function and returns it.
const newFunc = func.bind(obj);
newFunc(); // Igor

// 2. `call` attaches the context (this) to the function and invokes it.
func.call(obj, 'Pershin', 'node.js'); // Igor, Pershin, 'node.js'

// 3. The `apply` method is similar to `call`, but the arguments are passed as an array.
func.apply(obj, ['Pershin', 'node.js']); // Igor, Pershin, 'node.js'
