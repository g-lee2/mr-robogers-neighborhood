
// const replaceNumber = document.getElementById("replaceNumber").value;

function returnNumber(number) {
  const returnNumberArray = []
  
  for (let i = 0; i <= number; i++) {
    returnNumberArray.push(i.toString());
    }
    console.log(returnNumberArray);
    for (let i = 0; i < returnNumberArray.length; i++) {
      if (returnNumberArray.includes("1")) {
        returnNumberArray["1"] = "Beep!"
        console.log(returnNumberArray)
      }
    }
      for (let i = 0; i < returnNumberArray.length; i++) {
        if (returnNumberArray.includes("2")) {
          returnNumberArray["2"] = "Boop!"
          console.log(returnNumberArray)
        }
      }
        for (let i = 0; i < returnNumberArray.length; i++) {
          if (returnNumberArray.includes("3")) {
            returnNumberArray["3"] = "Won't you be my neighbor?"
            console.log(returnNumberArray)
          }
        };
}


 