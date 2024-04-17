// Задание 1. Even/Odd
// Создайте функцию, которая определяет парность числа

// 1. Функция должна принимать целое число
// 2. Если число не целое - скруглить его в меньшую сторону
// 3. Функция должна вернуть строку 'even' если число четное
// 4. Функция должна вернуть строку 'odd' если число не четное



function evenOrOdd(num) {
    
    num = Math.floor(num);
    
    return num % 2 === 0 ? "even" : "odd";
}

console.log(evenOrOdd(3));   
console.log(evenOrOdd(4));   
console.log(evenOrOdd(4.7));   
console.log(evenOrOdd(-3));   


console.log('----------------------------------')
console.log('----------------------------------')


// Задание 2. Стрелочная ф-ция возводящая число в квадрат
// Создайте функцию, которая возвращает квадрат числа

// 1. Функция должна принимать целое число
// 2. Если число не целое - скруглить его в меньшую сторону
// 3. Функция должна вернуть квадрат этого числа



const squareNumber = num => {
     
    num = Math.floor(num);
    return num * num;
}

console.log(squareNumber(3));   
console.log(squareNumber(4.7));   
console.log(squareNumber(-2));   

                
console.log('----------------------------------')
console.log('----------------------------------')


function primeNamberInBetween(s) {
 

    const array = [];
    for (let i = 1; i <= Math.floor(s); i++) {
        if (primeNamber(i) === true ) {
            array.push(i);
        }      
    }  
    return array;  
}

const primeNumberInBetween = s => {
    const array = [];
    for (let i = 1; i <= Math.floor(s); i++) {
        if (primeNamber(i) === true ) {
            array.push(i);
        }      
    }  
    return array;  
}

console.log(primeNamberInBetween(1000));
function primeNamber (f) {
    if (f > 1 ) {
        for (let i = 2; i <= Math.sqrt(f); i++) {
        if (f % i === 0 ) {
            return false;
        }               
    }
    return true;
    }
    return false;
}

const primeNumber = (f) =>  {

    if (f > 1 ) {
        for (let i = 2; i <= Math.sqrt(f); i++) {
        if (f % i === 0 ) {
            return false;
        }               
    }
    return true;
    }
    return false;
}

 
 

