let firstNumber = '';
let secondNumber = '';
let operator = '';
let buttons = document.querySelectorAll("button");
 
function remember(event) {
    let target = event.target.innerText;
    if (target === 'RESET') {
        firstNumber = '';
        secondNumber = '';
        operator = '';
    } else if (target === '.') {
        firstNumber += target;
    } else if (target === '+' || target === '-' || target === '/' || target === '*' ) {
        operator += target;
        operator.length = 1;
    } else if (target === 'DEL') {
        firstNumber = firstNumber.slice(0, -1);
    } else { 
        if (operator != '') {
            secondNumber += target;
            secondNumber.length <= 12; 
        } else {
            firstNumber += target;
            firstNumber.length <= 12; 
        }
    }
   
    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);

}

 Array.from(buttons).forEach(button => {
    button.addEventListener("click", remember)
    }
 );

function update(event) {
    let target = event.target.innerText;
    if (target === '+' || target === '-' || target === '/' || target === '*' || target === '=' || target === 'RESET') {
        document.getElementById('rezult').innerHtml = '';
    }
}

Array.from(buttons).forEach(button => {
    button.addEventListener("click", update)
    }
 );
 
 function calculate() {
    let rezult = '';
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    if (operator = '-') {
        rezult = num1 - num2;
    }
    if (operator = '+') {
        rezult = num1 + num2;
    }
    if (operator = '*') {
        rezult = num1 * num2;
    }
    if (operator = '/') {
        rezult = num1 / num2;
    }
    console.log(rezult);
 }

let el = document.getElementById('button_red');
el.addEventListener('click', calculate);

