const arrElements = [28, 80, 16, 69, 33, 99, 46, 5, 51, 74];

  let maxNum = arrElements[0];  
  let minNum = arrElements[0];  

for (let i = 1; i < arrElements.length; i++) {
  if (arrElements[i] > maxNum) {
    maxNum = arrElements[i]; 
  }
  if (arrElements[i] < minNum) {
    minNum = arrElements[i];  
  }
}

console.log("Максимальное значение:", maxNum);
console.log("Минимальное значение:", minNum);

