// Чем отличаются стрелочные функции?

// 1. У них нету контекста this, значение this берётся снаружи.
const obj = {
  name: "Igor",
  showName() {
    (() => console.log(this.name))();
  },
};
obj.showName(); // Igor, значение this берется из метода showName

// 2. У них нет объекта arguments (псевдомассива), это также используется чтобы пробросить arguments снаружи
const func = () => {
  console.log(arguments);
  // - В браузере будет ошибка, "ReferenceError: arguments is not defined"
  // - А в среде node.js выведеся объект [Arguments] {exports, require, module, __filename, and __dirname}
  // так как код файла, исполняемого в node.js оборачивается в функцию.
};
func(); // ошибка или {exports, require, module, __filename, and __dirname}

// 3. Стрелочные функции не могут быть вызваны как конструктор, генерируется ошибка
new func(); // Uncaught TypeError: x is not a constructor
