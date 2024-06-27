// How to create a Map object from a regular object?
const obj = {
  name: 'Igor Pershin',
  age: 30
};

// Besides adding to the collection with map.set('name', 'Igor Pershin'),
// we can also initialize it by passing an array of key-value pairs.
// Object.entries(obj) will return [['name', 'Igor Pershin'], ['age', '30']].
const map = new Map(Object.entries(obj));
console.log(map.get('name')); // Igor Pershin

// Similarly, we can reverse this process to create a regular object from a Map collection.
const newObj = Object.fromEntries(map.entries());
console.log(newObj); // { name: 'Igor Pershin', age: 30 }
