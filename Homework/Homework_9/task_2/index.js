// Напишите функцию, которая превратит массив который содержит элементы
// в виде массивов из двух элементов, в объект. 
// Первый элемент каждого внутреннего массива ключ, второй - значение. 
// Например такой:
// [
//   [ 'height', 170 ],
//   [ 'weight', 80 ],
//   [ 'sport', 'regbi' ],
//   [ 'full name', 'John Doe' ],
//   [ 'sing', 'love' ],
//   [ 'speed', 90 ]
// ]


let arr = [
  [ 'height', 170 ],
  [ 'weight', 80 ],
  [ 'sport', 'regbi' ],
  [ 'full name', 'John Doe' ],
  [ 'sing', 'love' ],
  [ 'speed', 90 ]
];


function arrToObject(arr) {
    let object = {};
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i][0];
        let value = arr[i][1];
        object[key] = value;
    }
    return object;
}

console.log(arrToObject(arr));
