// Что произойдет, если обратиться к переменной до объявления?

// если переменная объявлена устаревшим ключевым словом var, она будет равна undefined,
// этот процесс описывается термином поднятие/всплыте (hoisting)
console.log(one); // undefined
var one = 1;

// если переменная объявлена с ключевыми словами let/const, будет ошибка
console.log(two); // Cannot access 'two' before initialization
const two = 1;
