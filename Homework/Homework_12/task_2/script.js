// 2.Написать функцию, которая принимает на вход 
// массив чисел и возвращает их сумму.


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
function sumArray(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
         sum = sum + numbers[i];
    }
    return sum;
}

console.log(sumArray(numbers));

 