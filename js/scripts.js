function returnNumberArray(input) {
  const numberArray = [];
  for (let i = 0; i <= input; i++) {
    numberArray.push(i);
  } 
  return numberArray;
} 

function replaceNumber(numberArray) {
  for (let i = 0; i < numberArray.length; i++) {
    // numberArray = [0, 1, 2, 3, 4, 5]
    if (numberArray[i].toString().includes("1")) {
      numberArray[i] = "Beep!";
    }
  }
  return numberArray;
}
