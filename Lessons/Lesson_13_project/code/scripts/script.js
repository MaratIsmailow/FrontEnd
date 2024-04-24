// let arrTask = [
//   {"task": "Купить продукты", "date": "2024-04-22", "done": true},
//   {"task": "Позвонить другу", "date": "2024-04-23", "done": false},
//   {"task": "Посетить врача", "date": "2024-04-24", "done": false},
//   {"task": "Заплатить за квартиру", "date": "2024-04-25", "done": true},
//   {"task": "Подготовить отчет", "date": "2024-04-26", "done": false},
//   {"task": "Починить автомобиль", "date": "2024-04-27", "done": true},
//   {"task": "Посадить цветы", "date": "2024-04-28", "done": false},
//   {"task": "Прочитать книгу", "date": "2024-04-29", "done": true},
//   {"task": "Сходить в спортзал", "date": "2024-04-30", "done": false},
//   {"task": "Приготовить ужин", "date": "2024-05-01", "done": true}
// ];

// // const inputField = document.querySelector('#input-field');
// // const btnCreate = document.querySelector('.btn1');
// // const list = document.querySelector('.list');

// // function pushText() {
// //     const text = inputField.value.trim();
// //     if (text !== '') {
// //         const listItem = document.createElement('li');
// //         const checkBox = document.createElement('input');
// //         const deleteBtn = document.createElement('button');

// //         checkBox.type = 'checkbox';
// //         checkBox.classList.add('checkbox');
// //         deleteBtn.textContent = 'Delete';
// //         deleteBtn.classList.add('delete-btn');
// //         listItem.textContent = text;
// //         listItem.classList.add('list-item');

// //         listItem.append(checkBox, deleteBtn);  
// //         list.appendChild(listItem);

// //         inputField.value = '';
// //     }
// // }

 
// // list.addEventListener('click', function(event) {
// //     if (event.target.className === 'delete-btn') {
// //         list.removeChild(event.target.parentNode);
// //     }
// // });

// // list.addEventListener('change', function(event) {
// //     if (event.target.className === 'checkbox') {
// //         event.target.parentNode.classList.toggle('list-item_done');
// //     }
// // });

 
// // btnCreate.addEventListener('click', pushText);


// // Вы можете создать функцию для отображения элементов массива в HTML
// function отобразитьМассив(arrTask) {
//   let html = "<ul>";
//   for(let i = 0; i < arrTask.length; i++) {
//       html += "<li> Задача: " + arrTask[i].task + ", Дата: " + arrTask[i].date + ", Выполнено: " + (arrTask[i].done ? "Да" : "Нет") + "</li>";
//   }
//   html += "</ul>";
//   return html;
// }

// // Теперь вы можете вызвать эту функцию и добавить результат в ваш HTML
// document.getElementById("вашID").innerHTML = отобразитьМассив(arrTask);
