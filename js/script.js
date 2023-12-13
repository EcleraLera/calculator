let firstNumber = '';
let secondNumber = '';
let sign = '';

const input = document.getElementById('textview');

const buttons = document.querySelectorAll('button');

const themes = document.getElementsByClassName('theme');
console.log(themes);

Array.from(buttons).forEach(button => {
    button.addEventListener("click", handler)
    }
);

Array.from(themes).forEach(input => {
    input.addEventListener("click", switchTheme)
    }
);

function initialState(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function switchTheme(event) {
    let target = event.target.id;
    if (target == 'theme1') {
        if (localStorage.getItem('theme') == 'light-theme' || localStorage.getItem('theme') =='pink-theme' ) {
            initialState('dark-theme');
        }
    }
    if (target == 'theme2') {
        if (localStorage.getItem('theme') == 'dark-theme' || localStorage.getItem('theme') == 'pink-theme' ) {
            initialState('light-theme');
        }
    }
    if (target == 'theme3') {
        if (localStorage.getItem('theme') == 'dark-theme' || localStorage.getItem('theme') == 'light-theme' ) {
            initialState('pink-theme');
        }
    }
}

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
    
    firstNumber = result;
    secondNumber = '';
    sign = '';
    console.log(firstNumber);
    return firstNumber.toFixed(10);

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
        return secondNumber;
    } else {
        firstNumber = firstNumber.includes('.') ? firstNumber : firstNumber += tar;
        return firstNumber;
    } 
}

function handler(event) { 
    let target = event.target.innerText;
    const operator = '+-/x';
    let field = '';
    if (target === 'RESET') {
        deleteAll();
    } else if (target === '=') {
        field = calculate();
    } else if (target === '.') {
        field = addPoint(target);
    } else if (operator.includes(target)) {
        if (firstNumber !== '')  {
            addOperator(target);
            field = firstNumber;
        } 
    } else if (target === 'DEL') { 
        deleteInput();
    } else { 
        field = remember(target);
    }
    update(field);
    
    console.log(firstNumber);
    console.log(sign);
    console.log(secondNumber);
}









