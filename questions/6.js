// How is the Proxy object used?
let person = {name: 'Igor'};

// Proxy is essentially a decorator over an object, allowing you to intercept
// method calls such as get, set, has, apply, construct, and others.
person = new Proxy(person, {
  get(target, prop) {
    if (prop === 'name') {
      return `${target[prop]} Pershin`;
    } else {
      return '';
    }
  }
});

console.log(person.name); //Igor Pershin;
console.log(person.age); // '';
