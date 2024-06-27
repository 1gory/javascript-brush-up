// NaN (Not-a-Number) is a special numeric value that belongs to the "number" data type.

// How to check if a number is NaN?
isNaN(value); // First coerces the value to a number, then checks if this value is NaN.
Number.isNaN(value) // First checks if the value is a number, then checks if it is NaN.

// By the way, the value NaN is not equal to any other number, including itself.
NaN === NaN; // false
