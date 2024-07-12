const display = document.getElementById("Display");
let var1 = "";
let var2 = "";
let sign = "";

//Adding event listeners to all buttons
const buttons = document.querySelectorAll("button");
    buttons.forEach((Buttons) => {
        Buttons.addEventListener("click", () => {               //logs the digit keys pressed
        if(Buttons.className === "digit"){
            if(sign){                                           //sign btn pressed
                var2 = var2 + Buttons.innerHTML;                //concat digits to 2nd var
                updateDisplay(var2)                             //display 2nd var 
            }else{
                var1 = var1 + Buttons.innerHTML;                //no sign btn pressed
                updateDisplay(var1);}                           
        }else if(Buttons.className === "arithmetic"){           //assigns arithmetic sign
            if(!sign){
            sign = Buttons.innerHTML;
            }else if(sign){
            let tempsign = Buttons.innerHTML;
            Equals(var1,var2,sign);
            sign = tempsign;
            tempsign = "";
            }
        }else if (Buttons.id === "equals"){                     //if equals is pressed, calls func
            if(sign && var1 && var2){                           //must have two var and a sign selected
            Equals(var1, var2, sign);}
        }else if(Buttons.id === "clear"){                       //clears and resets vars and sign
            var1 = "";
            var2 = "";
            sign = "";
            display.innerHTML = 0;                              //sets display to 0
        }else if(Buttons.id === "sign"){                        //multiplies by -1
            if(sign){
            var2 = SignChange(var2);
            updateDisplay(var2);
            } else if (!sign){
            var1 = SignChange(var1);
            updateDisplay(var1);
            }
        }else if(Buttons.id === "percentage"){                   //divides by 100
            if(sign){
                var2 = Percent(var2);
                updateDisplay(var2);
                } else if (!sign){
                var1 = Percent(var1);
                updateDisplay(var1);
                }
        }
        });
    });

function Percent(v){
    v = Number(v);
    v /= 100;
    return String(v);
}

function SignChange(v){
    v = Number(v);
    v *= -1;
    return String(v);
}

function Equals(v1, v2, s){
    v1 = Number(v1);
    v2 = Number(v2);
    let result = 0;
    switch(s){
        case "+": result = v1 + v2; break;
        case "-": result = v1 - v2; break;
        case "×": result = v1 * v2; break;
        case "÷": result = v1 / v2; break;
    }
    sign = "";
    var1 = result.toString();
    updateDisplay(var1);
    var2 = "";
    return;
}

function updateDisplay(userInput){
    let temp = userInput;
        if (display.innerHTML === "0"){
            display.innerHTML = temp.substring(0,10);
        } else if(display.innerHTML != "0"){
            display.innerHTML = temp.substring(0,10);}
}
