// Чем отличаются методы call, bind, apply?
const obj = {
  name: 'Igor',
};

const func = function () {
  console.log(this.name, ...arguments);
}

// 1. bind прикрепит контекст (this = obj) к функции и вернет её
const newFunc = func.bind(obj);
newFunc(); // Igor

// 2. call прикрепит контекст (this) к функции и вызовет её
func.call(obj, 'Pershin', 'node.js'); // Igor, Pershin, 'node.js'

// 3. метод apply аналогичен call, но параметры передаются как массив
func.apply(obj, ['Pershin', 'node.js']); // Igor, Pershin, 'node.js'
