const inputField = document.querySelector('#input-field');
const btnCreate = document.querySelector('.btn1');
const list = document.querySelector('.list');

function pushText() {
    const text = inputField.value.trim();
    if (text !== '') {
        const listItem = document.createElement('li');
        const checkBox = document.createElement('input');
        const deleteBtn = document.createElement('button');

        checkBox.type = 'checkbox';
        checkBox.classList.add('checkbox');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        listItem.textContent = text;
        listItem.classList.add('list-item');

        listItem.append(checkBox, deleteBtn);  
        list.appendChild(listItem);

        inputField.value = '';
    }
}

 
list.addEventListener('click', function(event) {
    if (event.target.className === 'delete-btn') {
        list.removeChild(event.target.parentNode);
    }
});

list.addEventListener('change', function(event) {
    if (event.target.className === 'checkbox') {
        event.target.parentNode.classList.toggle('list-item_done');
    }
});

 
btnCreate.addEventListener('click', pushText);




  






 

