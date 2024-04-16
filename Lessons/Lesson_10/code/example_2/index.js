function sumAB(a, b) {
    const sum = a + b;
    console.log(sum);
    return sum;
}

const sum1 = sumAB(3, 4);
console.log(sum1);

const test = console.log(777);
console.log(test);

// функция которая ищет максимум в Массиве

function maxInArr(arr) {
    let maxNum = Math.max(... arr);
    return maxNum
    // 
   // return Math.max(... arr);
}

    const arrC = [1, 5, 25, 10, 20]
    console.log(arrC);

// Задание на урок. Создать функцию которая принимает массив, и возвращает новый массив,
// где каждый элемент массива увеличен на 10

console.log('-------------------------------------');
    

    function arrRet (arr) {
         
        let newArray = [];
        for (let i = 0; i < arr.length; i++) {
            // newArray.push(arr[i] + a);
            newArray.push(arr[i] + 10);
        
        }
        
        return newArray;
    }
    
    const arrRet1 = [5, 8, 12, 25];
    console.log(arrRet(arrRet1));

    //
console.log('-------------------------------------');
   //
// function declaration

// function arrNa10(arrA, a) {
//     const arrD = [];
//     for (let i = 0; i < arrA.length; i++) {
//         arrD.push(arrA[i]+a);
//         //arrD[i] = arrA[i]*10;
//     }
//     return arrD;
// }



// function expression - переписываем нашу функцию

//const arrNa10 = function(arrA, a) {
 //   const arrD = [];
 //   for (let i = 0; i < arrA.length; i++) {
 //       arrD.push(arrA[i]+a);
        //arrD[i] = arrA[i]*10;
 //   }
 //   return arrD;
// }

const arrF = [1, 8, 3, 13];
//console.log(arrNa10(arrF, 11));

console.log('-------------------------------------');

// Стрелочная функция

const arrNa10 = (arrA, a = 10) => {
    const arrD = [];
    for (let i = 0; i < arrA.length; i++) {
        arrD.push(arrA[i] + a);
        //arrD[i] = arrA[i]*10;
    }
    return arrD;
}

// const arrF = [1, 8, 3, 13];

// console.log(arrNa10(arrF, 20));


//  function maxInArr(arr) {
//     let maxNum = Math.max(...arr);
//     return maxNum;
     
//     // return Math.max(...arr);
// }

// Переписать и сделать стрелочную

 

const maxInArr2 = (arr, a = 20) => {
    return Math.max(...arr);
    
}

console.log(maxInArr2(arrF));


// Стрелочная функция 

const maxInArr2 = (arr, a = 20) => {
    return Math.max(...arr);
    
}

// Сократим
const maxInArrIShort = arr => Math.max(...arr);
    
 