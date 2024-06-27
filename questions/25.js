// What does the toLocaleString method do?

// 1. It allows converting a date to a string in the desired format.
console.log(new Date().toLocaleString('en-US')); // 2/26/2024, 11:49:32 PM
console.log(new Date().toLocaleString('ru-RU')); // 26.02.2023, 23:49:52

// 2. It allows converting a number to a string in the desired format.
console.log(10000000..toLocaleString()); // 10,000,000
console.log(10000000..toLocaleString('ru-RU')); // 10 000 000

// There is also an options argument that allows editing the resulting output.
console.log(100..toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})); // 100,00 ₽
