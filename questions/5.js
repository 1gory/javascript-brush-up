// Это выражение корректно?
let symbol = new Symbol('name');

// Symbol - не конструктор, поэтому возникнет ошибка:
// TypeError: Symbol is not a constructor

// Корректно:
symbol = Symbol('name');
