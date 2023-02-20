// В чем разница между методами Object.freeze и Object.seal?

// Object.freeze(obj)
// Запрещает добавление, удаление и изменение свойств, все текущие свойства делает configurable: false, writable: false.


// Object.seal(obj)
// Запрещает добавление и удаление свойств, все текущие свойства делает configurable: false.
