
// const replaceNumber = document.getElementById("replaceNumber").value;

function returnNumber(number) {
  const returnNumberArray = []
  
  for (let i = 0; i <= number; i++) {
    returnNumberArray.push(i);
    }
    console.log(returnNumberArray);
    for (let i = 0; i < returnNumberArray.length; i++) {
      if (returnNumberArray[i] === 1) {
        returnNumberArray[i] = "Beep!"
        console.log(returnNumberArray)
      }
    }
  };

 