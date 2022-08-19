
// 

function returnNumber(number) {
  const returnNumberArray = []
  
  for (let i = 0; i <= number; i++) {
    returnNumberArray.push(i.toString());
    }
    for (let i = 0; i < returnNumberArray.length; i++) {
      if (returnNumberArray.includes("1")) {
        returnNumberArray["1"] = "Beep!"
      }
    }
      for (let i = 0; i < returnNumberArray.length; i++) {
        if (returnNumberArray.includes("2")) {
          returnNumberArray["2"] = "Boop!"
        }
      }
        for (let i = 0; i < returnNumberArray.length; i++) {
          if (returnNumberArray.includes("3")) {
            returnNumberArray["3"] = "Won't you be my neighbor?"
            console.log(returnNumberArray)
          }
        };
}


window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();

    const const replaceNumber = document.getElementById("replaceNumber").value;
    

    if (valid) {
      document.querySelector(".message").innerText = returnNumberArray.toString;
    } 
  } 
}