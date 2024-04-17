// 1. Напишите фукнцию, которая будет принимать массив. 
// Массив может содержать любые строки и числа. 
// Функция должна вернуть объект, который содержит свойства, 
// ключ и значение которых равны соответствующему элементу массива. 
// Пример работы функции: 

// ['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }


let array = ['a', 36.6, 'John Doe']

function arrayToObject(array) {
    let object = {};
    for(let i = 0; i < array.length; i++) {
        let key = array[i];
        object[key] = key;
    }
    return object;
}

console.log(arrayToObject(array));  


