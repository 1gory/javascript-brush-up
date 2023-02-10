// Как применяется объект Proxy?
let person = {name: 'Igor'};

// Proxy - по сути декоратор над объектом, с помощью которого
// можно перехватить вызов методов get, set, has, apply, construct и других.
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
