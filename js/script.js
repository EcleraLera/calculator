let firstNumber = '';
let secondNumber = '';
let operator = '';
let buttons = document.querySelectorAll("button");
 
function remember(event) {
    // console.log( typeof event.target.innerText)
    let target = event.target.innerText;
    if (target === 'RESET') {
        firstNumber = '';
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
            secondNumber.length <= 12; 
        }
    }
   
    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);

}

 Array.from(buttons).forEach(button => {
    button.addEventListener("click", remember)
    }
 )

function update(event) {
    let target = event.target.innerText;
    if (target === '+' || target === '-' || target === '/' || target === '*' || target === '=' || target === 'RESET') {
        document.getElementById('rezult').innerHtml = '';
    }
}

Array.from(buttons).forEach(button => {
    button.addEventListener("click", update)
    }
 )
 
 function calculate() {


 }
 
 button.addEventListener('click', calculate)

