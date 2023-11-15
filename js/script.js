let firstNumber = '';
let secondNumber = '';
let sign = '';
let result = '';

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

function update(tar) {
    if (tar === 'RESET') {
        input.value = '0';
    } else if (tar === 'DEL') {
        input.value = '0';
    } else if (tar === '=') {
        input.value = result;
    } else if (tar === '.') {
        if (sign) {
            input.value = firstNumber.includes('.') ? firstNumber : firstNumber += tar;
        } else {
            input.value = secondNumber.includes('.') ? secondNumber : secondNumber += tar;
        } 
    } else if (tar !== '+' || tar !== '-' || tar !== '/' || tar !== 'x') {
        if (sign) {
            input.value = firstNumber.slice(0,10); 
        } else {
            input.value = secondNumber.slice(0,10);
        }
    }
    
}

function calculate() {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
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
}

function remember(tar) {
    if (sign) {
        firstNumber += tar;
        firstNumber = firstNumber.slice(0,10);
    } else {
        secondNumber += tar;
        secondNumber = secondNumber.slice(0,10);
    }
}

function deleteInput() { 
    if (sign) {
        firstNumber = '';
    } else {
        secondNumber = '';
    } 
}

function addOperator(tar) {
    sign += tar;
    sign = sign.slice(0,1);
    
}

function addPoint(tar) {
    if (sign) {
        firstNumber = firstNumber.includes('.') ? firstNumber : firstNumber += tar;
    } else {
        secondNumber = secondNumber.includes('.') ? secondNumber : secondNumber += tar;
    } 
}

function handler(event) { 
    let target = event.target.innerText;
    if (target === 'RESET') {
        deleteAll();
        update(target);
    } else if (target === '=') {
        calculate();
        update(target);
    } else if (target === '.') {
        addPoint(target);
        update(target);
    } else if (target === '+' || target === '-' || target === '/' || target === 'x' ) {
        if (firstNumber !== '')  {
            addOperator(target);
        }
    } else if (target === 'DEL') { 
        deleteInput();
        update(target);
    } else { 
        remember(target);
        update(target);
    }

    console.log(firstNumber);
    console.log(sign);
    console.log(secondNumber);
}









