// const arr = [];

// arr.push ('ложка') 
// arr.push ('карандаш')
// arr.push ('вилка')

//  console.log(arr)

// const arr = ['ручка', 'карандаш', 'ластик'];

// arr.unshift('циркуль');

// console.log(arr)


// const arrF = [1, 2, 3, 5, 4, 10, 6];
// const arrA = [];
// const ff = (element) => {
//     arrA.push(element + 3);
// }

// arrF.forEach(ff);
// console.log(arrF);
// console.log(arrA);

// const arr = ['ручка', 'карандаш', 'ластик','циркуль'];

// arr.forEach((elem, index) => {
//    console.log(elem);
// });


// let arr = [1, 2, 3, 4, 5];

// arr.forEach((elem) => {
// 	console.log(elem);
// });


// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num ** 2);
// // squaredNumbers: [1, 4, 9, 16, 25]
// console.log(squaredNumbers)


// let fruits = ["Яблоко", "Апельсин", "Слива"];

// console.log( fruits ); 


let players = [
    {name: "Alex", height: 190, weight: 85, sport: "rugby"},
    {name: "Boris", height: 180, weight: 75, sport: "football"},
    {name: "Vladimir", height: 175, weight: 70, sport: "hockey"},
    {name: "George", height: 185, weight: 80, sport: "rugby"},
    {name: "Dmitry", height: 170, weight: 65, sport: "hockey"},
    {name: "Eugene", height: 195, weight: 90, sport: "football"},
    {name: "Zachary", height: 188, weight: 82, sport: "rugby"},
    {name: "Ivan", height: 182, weight: 77, sport: "football"},
    {name: "Kirill", height: 178, weight: 73, sport: "hockey"},
    {name: "Leonid", height: 192, weight: 87, sport: "rugby"},
    {name: "Michael", height: 176, weight: 71, sport: "hockey"},
    {name: "Nicholas", height: 198, weight: 93, sport: "football"},
    {name: "Oleg", height: 186, weight: 79, sport: "rugby"},
    {name: "Paul", height: 174, weight: 69, sport: "hockey"},
    {name: "Roman", height: 184, weight: 78, sport: "football"}
    ];
    

const playersWithGoals = players.map(player => {
    return {...player, goals: Math.floor(Math.random() * 21)};
});

console.log(playersWithGoals);

 


     
     
    
    