// What are the differences with arrow functions?

// 1. There is no this context; the value of this is taken from the outside.
const obj = {
  name: "Igor",
  showName() {
    (() => console.log(this.name))();
  },
};
obj.showName(); // Igor, the value of this is taken from the showName method

// 2. They do not have the arguments object (pseudo-array); this is also used to pass arguments from the outside.
const func = () => {
  console.log(arguments);
  // - In the browser, there will be an error "ReferenceError: arguments is not defined"
  // - In a Node.js environment, it will output the object [Arguments] {exports, require, module, __filename, and __dirname}
  // - In Node.js, the code of a file executed is wrapped in a function
};
func(); // there will be an error {exports, require, module, __filename, and __dirname}

// 3. Arrow functions cannot be called as constructors; an error will be generated.
new func(); // Uncaught TypeError: x is not a constructor
