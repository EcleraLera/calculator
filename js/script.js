let firstNumber = '';
let secondNumber = '';
let sign = '';

const input = document.getElementById('textview');

const buttons = document.querySelectorAll('button');

const resultField = document.getElementById('result');

Array.from(buttons).forEach(button => {
    button.addEventListener("click", handler)
    }
);

function deleteAll() {
    firstNumber = '';
    secondNumber = '';
    sign = '';
}

function update(argument) {
    input.value = argument;
    input.value = input.value.slice(0,10);
    
}

function calculate() {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    let result = '';
    if (sign === '-') {
        result = num1 - num2;
    }
    if (sign === '+') {
        result = num1 + num2;
    }
    if (sign === 'x') {
        result = num1 * num2;
    }
    if (sign === '/') {
        result = num1 / num2;
    }
    
    console.log(result);
    return result;

}

function remember(tar) {
    if (sign) {
        secondNumber += tar;
        secondNumber = secondNumber.slice(0,10);
        return secondNumber;
    } else {
        firstNumber += tar;
        firstNumber = firstNumber.slice(0,10);
        return firstNumber;
    }
}

function deleteInput() { 
    if (sign) {
        secondNumber = '';
    } else {
        firstNumber = '';
    } 
}

function addOperator(tar) {
    sign += tar;
    sign = sign.slice(0,1);
    
}

function addPoint(tar) {
    if (sign) {
        secondNumber = secondNumber.includes('.') ? secondNumber : secondNumber += tar;
        secondNumber = parseFloat(secondNumber);
        secondNumber = secondNumber.toFixed(5);
        return secondNumber;
    } else {
        firstNumber = firstNumber.includes('.') ? firstNumber : firstNumber += tar;
        firstNumber = parseFloat(firstNumber);
        firstNumber = firstNumber.toFixed(5);
        return firstNumber;
    } 
}

function handler(event) { 
    let target = event.target.innerText;
    let result = '';
    if (target === 'RESET') {
        deleteAll();
    } else if (target === '=') {
        result = calculate();
    } else if (target === '.') {
        result = addPoint(target);
    } else if (target === '+' || target === '-' || target === '/' || target === 'x' ) {
        if (firstNumber !== '')  {
            addOperator(target);
        }
    } else if (target === 'DEL') { 
        deleteInput();
    } else { 
        result = remember(target);
    }
    update(result);
    
    console.log(firstNumber);
    console.log(sign);
    console.log(secondNumber);
}









