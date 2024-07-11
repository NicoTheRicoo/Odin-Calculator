let var1 = 7;
let var2 = 0;
let sign;


const buttons = document.querySelectorAll("button");
    buttons.forEach((Buttons) => {
        Buttons.addEventListener("click", () => {
        if(Buttons.className === "digit"){
            updateDisplay(var1);
            console.log("digit pressed");
        } else if(Buttons.className === "arithmetic"){
            console.log("arithmetic pressed");
        }else if(Buttons.id === "clear"){
            console.log("clear pressed");
        }else if(Buttons.id === "sign"){
            console.log("sign pressed");
        }else if(Buttons.id === "percentage"){
            console.log("percentage pressed");
        }
        });
    });

function updateDisplay(userInput){
    let temp = userInput.toString();
    const display = document.getElementById("Display");
        if (display.innerHTML === "0"){
            display.innerHTML = temp;
        } else if(display.innerHTML != "0"){
            display.innerHTML = display.innerHTML + temp;
        }else if(display.innerHTML === "="){
            //call function that does arithmetic
        }
}
