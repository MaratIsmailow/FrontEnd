// const inputField = document.querySelector('#input-field');
// const btnCreate = document.querySelector('.btn1');
// const list = document.querySelector('.list');

// function pushText() {
//     const text = inputField.value.trim();
//     if (text !== '') {
//         const listItem = document.createElement('li');
//         const checkBox = document.createElement('input');
//         const deleteBtn = document.createElement('button');

//         checkBox.type = 'checkbox';
//         checkBox.classList.add('checkbox');
//         deleteBtn.textContent = 'Delete';
//         deleteBtn.classList.add('delete-btn');
//         listItem.textContent = text;
//         listItem.classList.add('list-item');

//         listItem.append(checkBox, deleteBtn);  
//         list.appendChild(listItem);

//         inputField.value = '';
//     }
// }

 
// list.addEventListener('click', function(event) {
//     if (event.target.className === 'delete-btn') {
//         list.removeChild(event.target.parentNode);
//     }
// });

// list.addEventListener('change', function(event) {
//     if (event.target.className === 'checkbox') {
//         event.target.parentNode.classList.toggle('list-item_done');
//     }
// });

 
// btnCreate.addEventListener('click', pushText);



let arrTask = [
  {"task": "Купить продукты", "date": "2024-04-22", "done": true},
  {"task": "Позвонить другу", "date": "2024-04-23", "done": false},
  {"task": "Посетить врача", "date": "2024-04-24", "done": false},
  {"task": "Заплатить за квартиру", "date": "2024-04-25", "done": true},
  {"task": "Подготовить отчет", "date": "2024-04-26", "done": false},
  {"task": "Починить автомобиль", "date": "2024-04-27", "done": true},
  {"task": "Посадить цветы", "date": "2024-04-28", "done": false},
  {"task": "Прочитать книгу", "date": "2024-04-29", "done": true},
  {"task": "Сходить в спортзал", "date": "2024-04-30", "done": false},
  {"task": "Приготовить ужин", "date": "2024-05-01", "done": true}
]


// // const callBackF = (element) => {
// //   const htmlNode = document.createElement('li')
// //   htmlNode.classList.add('list-item') 
// //   htmlNode.innerText = element.task
// //   if (element.done === true) {
// //       htmlNode.classList.add('list-item_done')
// //   }
// //   return htmlNode;
// // }
 
// // const arrayObjectCop = arrayObjectCop.map(callBackArray);
// // list.append(...arrayObjectCop);


const callBackF = (task) => {
  const htmlNode = document.createElement('li');
  htmlNode.classList.add('list-item'); 
  htmlNode.innerText = task.task;
  if (task.done === true) {
      htmlNode.classList.add('list-item_done');
  }
  return htmlNode;
}

const listItems = arrTask.map(callBackF);

const list = document.querySelector('.list');

listItems.forEach(item => {
  list.appendChild(item);
});

 