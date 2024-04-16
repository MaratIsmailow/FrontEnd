let a;


// console.log(typeof a);
if (!a) {
    console.log("a > 0")
} else {
    console.log("a = 0")
}
// console.log(!false)

const arrA = ['a', 'b', 'c'];  

 
console.log(arrA[1]);

// добавление и удаление в конец массива
arrA.push('d'); // добавить значение в скобках в конце массива
console.log(arrA);
arrA.pop(); // удалить последний элемент 
console.log(arrA);

// добвление и удаление в начало массива
arrA.shift(); // удалить первый элимент
console.log(arrA);
arrA.unshift('A'); // добавить аргумент (аргумент - значение в скобках) в начало массива
console.log(arrA);

//const arrB = []; // создаем пустой массив

// циклы
for(let i = 0; i <= 10; i++) {
    console.log(i);

}

// const arrB = [];
// let i = arrB; 
// for(let i = 0; i <= 10; i++) {
// arrB.push(i);
 
// }
// console.log(arrB);

 
const arrB = [];
let i = arrB; 
for(let i = 0; i <= 10; i++) {
arrA.unshift(i);

}
console.log(arrB);


let randA = Math.random();
console.log(randA);
console.log(Math.ceil(7.1));
console.log(Math.floor(8.9));
console.log(Math.round(10.55));


// класное мучение
// создать массив пустой массив, запустить цикл, заполнить массив рандомными числами от 0 до 100,
// 10 элементов в массиве должно быть

console.log("----------------------------");
console.log("----------------------------");
console.log("----------------------------");


const arrE = [];
for(let i = 0; i <= 10; i++) {
    // Math.random();
    // console.log(Math.random());
    let k = Math.round();
    k = k * 100;
    arrE.push(k);
    console.log(arrE);
}
     
console.log("----------------------------");
console.log("----------------------------");
console.log("----------------------------");


// let x = Math.random();
// y = x * 2;
// let consoleLogFunction = console.log(x);

// console.log(consoleLogFunction);
 
 



