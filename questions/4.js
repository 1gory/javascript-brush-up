// Как создать объект Map из обычного объекта?
const obj = {
  name: 'Igor Pershin',
  age: 30
};

// Помимо добавелние в коллекцию методом map.set('name', 'Igor Pershin')
// мы можем при инициализации передать массив пар [ключ, значение].
// Object.entries(obj) как раз вернет [['name', 'Igor Pershin'], ['age', '30']]
const map = new Map(Object.entries(obj));
console.log(map.get('name')); // Igor Pershin

// Таким же образом мы можем в обратную сторону из коллекции Map создать объект
const newObj = Object.fromEntries(map.entries());
console.log(newObj); // { name: 'Igor Pershin', age: 30 }
