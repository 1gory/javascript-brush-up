// How does Number work? What will Number([]) return?

console.log(Number([])); // Output: 0
console.log(Number({})); // Output: NaN
console.log(Number(undefined)); // NaN
console.log(Number(NaN)); // NaN

// The other types are intuitive.
