let firstNumber = '';
let secondNumber = '';
let sign = '';

let buttons = document.querySelectorAll("button");

let resultField = document.getElementById('result');

Array.from(buttons).forEach(button => {
    button.addEventListener("click", handler)
    }
);

function reset() {
    firstNumber = '';
    secondNumber = '';
    sign = '';
}

function update() {
    resultField.innerHtml = '';
}

function calculate() {
    let result = '';
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    if (sign = '-') {
        result = num1 - num2;
    }
    if (sign = '+') {
        result = num1 + num2;
    }
    if (sign = '*') {
        result = num1 * num2;
    }
    if (sign = '/') {
        result = num1 / num2;
    }
    console.log(result);
}

function remember() {
    if (sign != '') {
        secondNumber += target;
        secondNumber.length <= 12; 
    } else {
        firstNumber += target;
        firstNumber.length <= 12; 
    }
}

function del() { 
    firstNumber = firstNumber.slice(0, -1);
}

function operator() {
    sign += target;
}
 
function handler(event) {
    let target = event.target.innerText; 
    if (target === 'RESET') {
        reset();
        update();
    } else if (target === '=') {
        calculate();
    } else if (target === '.') {
        firstNumber += target;
    } else if (target === '+' || target === '-' || target === '/' || target === '*' ) {
        sign();
        update();
    } else if (target === 'DEL') { 
        del();
    } else { 
        remember(); 
    }
   
    console.log(firstNumber);
    console.log(sign);
    console.log(secondNumber);

}







