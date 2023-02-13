// Это выражение корректно? let symbol = new Symbol(’name’)?
let symbol;

// symbol = new Symbol('name');
// Symbol - не конструктор, поэтому возникнет ошибка.
// `Symbol is not a constructor`

// Корректно:
symbol = Symbol('name');
