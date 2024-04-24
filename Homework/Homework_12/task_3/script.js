// 3. Написать функцию, которая принимает на вход 
// массив чисел и возвращает массив из тех же элементов, 
// но в обратном порядке.


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverseArray(numbers) {
    let reversed = [];
    for(let i = numbers.length - 1; i >= 0; i--) {
        reversed.push(numbers[i]);
    }
    return reversed;
}

console.log(reverseArray(numbers));  

