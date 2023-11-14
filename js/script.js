let firstNumber = '';
let secondNumber = '';
let sign = '';
let input = document.getElementById('textview');

let buttons = document.querySelectorAll('button');

let resultField = document.getElementById('result');

Array.from(buttons).forEach(button => {
    button.addEventListener("click", handler)
    }
);

function reset() {
    firstNumber = '';
    secondNumber = '';
    sign = '';
    input.value = '0';
}

function update() {
    resultField.innerHtml = '';
}

function calculate() {
    let result = '';
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
    input.value = result;
    input.value = input.value.slice(0,5);
    console.log(result);
}

function remember(tar) {
    if (sign !== '') {
        secondNumber += tar;
        secondNumber = secondNumber.slice(0,10); 
        input.value = secondNumber;
    } else {
        firstNumber += tar;
        firstNumber = firstNumber.slice(0,10);
        input.value = firstNumber;
    }
}

function del() { 
    if (sign !== '' ) {
        secondNumber = '';
    } else {
        firstNumber = '';
    } 
}

function operator(tar) {
    sign += tar;
    if (sign.length > 1) {
        sign = sign.slice(0,1);
    } 
}

function point(tar) {
    if (sign !== '') {
        secondNumber.includes('.') ? secondNumber : secondNumber += tar;
    } else if (sign == '') {
        firstNumber.includes('.') ? firstNumber : firstNumber += tar;
    }
}

function handler(event) { 
    let target = event.target.innerText;
    if (target === 'RESET') {
        reset();
    } else if (target === '=') {
        calculate();
    } else if (target === '.') {
        point(target);
    } else if (target === '+' || target === '-' || target === '/' || target === 'x' ) {
        if (firstNumber !== '')  {
            operator(target);
        } else { 
            alert('Введите первое число') 
        }
        update();
    } else if (target === 'DEL') { 
        del();
    } else { 
        remember(target); 
    }

    console.log(firstNumber);
    console.log(sign);
    console.log(secondNumber);
}









