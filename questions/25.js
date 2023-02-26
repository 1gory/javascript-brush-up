// Что делает метод toLocaleString?

// 1. позволяет привести дату к строке нужного формата
console.log(new Date().toLocaleString('en-US')); // 2/26/2024, 11:49:32 PM
console.log(new Date().toLocaleString('ru-RU')); // 26.02.2023, 23:49:52

// 2. позволяет привести число к строке нужного формата
console.log(10000000..toLocaleString()); // 10,000,000
console.log(10000000..toLocaleString('ru-RU')); // 10 000 000

// так же есть аргумент options, который позволяет отредактировать полученный результат
console.log(100..toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })); // 100,00 ₽

