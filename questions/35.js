// Do private properties exist in JS?

class myClass {
  #privateProperty = 100;

  getPrivateProperty() {
    console.log(this.#privateProperty);
  }
}

const obj = new myClass();

obj.getPrivateProperty(); // 100

// SyntaxError: Private field '#privateProperty' must be declared in an enclosing class
console.log(obj.#privateProperty);
