// Is this expression correct?
let symbol = new Symbol('name');

// Symbol is not a constructor, so an error will occur:
// TypeError: Symbol is not a constructor

// Correct way:
symbol = Symbol('name');
