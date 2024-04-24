//  const arrayToPow = [2, 4, 6, 8, 7, 5];

// const numberArray = arrayToPow.map(num => num * num);
// console.log(numberArray);  


// const mixedArray = [2, 3, 'a', 5, 8, 'e', 10];

// const numArray = mixedArray.map(item => typeof item === 'number' ? item : 0);
// console.log(numArray);  


// const mixedArray = [2, 3, 'a', 5, 8, 'e', 10];
// const arrayMixed = (number) => {
//     return (typeof number === 'string') ? 0 : number;
// }
// const arrayToPowNewMixed = mixedArray.map(arrayMixed)
// console.log(arrayToPowNewMixed);

let todoList = [
    { task: "Купить продукты", status: true },
    { task: "Позвонить другу", status: false },
    { task: "Почитать книгу", status: true },
    { task: "Заняться спортом", status: false },
    { task: "Изучить JavaScript", status: true },
    { task: "Подготовить отчет", status: false }
  ];

  const taskDone = todoList.filter(task => task.status === true);
  console.log(taskDone);

console.log(todoList.filter(task => task.status === true));



