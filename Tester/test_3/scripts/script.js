
/* Array.map() - Возвращает новый массив с результатами вызова заданной 
функции для каждого элемента этого массива.*/

// Code
// const list = [1, 2, 3, 4];
// const doubledList = list.map((el) => el * 2);

// console.log(doubledList); // Это выведет [2, 4, 6, 8]

/* Array.filter() - Возвращает новый массив со всеми элементами, 
которые прошли тест, реализованный предоставленной функцией.*/

 // Code
const list = [1, 2, 3, 4];
list.filter((el) => el % 2 === 0); // [2, 4]

console.log(list.filter((el) => el % 2 === 0)); // [2, 4]
