const display = document.getElementById("Display");
let var1 = "";
let var2 = "";
let sign = "";

//Adding event listeners to all buttons
const buttons = document.querySelectorAll("button");
    buttons.forEach((Buttons) => {
        Buttons.addEventListener("click", () => {
        if(Buttons.className === "digit"){
            if(sign){
                var2 = var2 + Buttons.innerHTML;
                var2.toString();
                updateDisplay(var2)
            }else{
                var1 = var1 + Buttons.innerHTML;
                var1.toString();
                updateDisplay(var1);}
        }else if(Buttons.className === "arithmetic"){
            sign = Buttons.innerHTML;
        }else if (Buttons.id === "equals"){
            if(sign && var1 && var2){
            Equals(var1, var2, sign);}
        }else if(Buttons.id === "clear"){
            var1 = "";
            var2 = "";
            sign = "";
            display.innerHTML = 0;
        }else if(Buttons.id === "sign"){
            console.log(Buttons.id);
            console.log("sign pressed");
        }else if(Buttons.id === "percentage"){
            console.log("percentage pressed");
        }
        });
    });
    console.log(var1);
    console.log(var2);
    console.log(sign);

function Equals(v1, v2, s){
    v1 = Number(v1);
    v2 = Number(v2);
    let result = 0;
    console.log(s);
    switch(s){
        case "+": result = v1 + v2; break;
        case "-": result = v1 - v2; break;
        case "×": result = v1 * v2; break;
        case "÷": result = v1 / v2; break;
    }
    sign = "";
    updateDisplay(result);
    var1 = result.toString();
    var2 = "";
    return;
}

function updateDisplay(userInput){
    let temp = userInput;
        if (display.innerHTML === "0"){
            display.innerHTML = temp;
        } else if(display.innerHTML != "0"){
            display.innerHTML = temp;
        }else if(display.innerHTML === "="){
            //call function that does arithmetic
        }
        
}
