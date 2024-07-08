// What is the difference between "||" and "??" ?

// The ?? operator is used to check for null or undefined. 
// If the operand on the left side of ?? is null or undefined, it returns the right operand. Here's how it works:

// Syntax: expr1 ?? expr2


// || is used for providing a fallback value when the left operand is falsy (values that convert to false in a boolean context).
// ?? is used specifically for providing a default value when the left operand is null or undefined
