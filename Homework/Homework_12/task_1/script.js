// 1. Написать функцию, которая принимает на вход массив имен 
// и возвращает массив имен, 
// начинающихся на букву "а" (большую или маленькую).

const names = ["Анна", "Мария", "Алексей", "Михаил", "Андрей", "Виктор", "Евгений","Антон"];
const filteredNames = filterNamesByLetterA(names);

function filterNamesByLetterA(names) {
    return names.filter(name => name.toLowerCase().startsWith('а'));
}

console.log(filteredNames);  
