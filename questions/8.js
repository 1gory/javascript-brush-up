//Чем отличаются методы call, bind, apply?
const obj = {
  name: 'Igor',
};

const func = function () {
  console.log(this.name, ...arguments);
}

// 1. bind прикрепит контекст (this) к функции и вернет её
const newFunc = func.bind(obj); // прикрепит контекст к функции и вернет её.
newFunc(); // Igor

// 2. call прикрепит контекст (this) к функции и вызовет её
func.call(obj, 'Pershin', 'node.js'); // Igor, Pershin, 'node.js'

// 3. apply прикрепит контекст (this) к функции и вызовет её, но параметры передаются как массив
func.apply(obj, ['Pershin', 'node.js']); // Igor, Pershin, 'node.js'
