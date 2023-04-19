
let a = "";
let b = "";
let result = 0
const displayScreenVariableA = document.querySelector('.variableA');
const displayScreenVariableB = document.querySelector('.variableB');
const displayOperator = document.querySelector('.operator')
const displayResult = document.querySelector('.result')
let mathematicalOperation = 0;

const buttonAdd0 = document.querySelector('.button0');
buttonAdd0.addEventListener('click', () => {
    a += "0"
    displayScreenVariableA.textContent = "a" + "=" + a;
})
const buttonAdd1 = document.querySelector('.button1');
buttonAdd1.addEventListener('click', () => {
    a += "1"
    displayScreenVariableA.textContent = "a" + "=" + a;
})

const buttonAdd2 = document.querySelector('.button2');
buttonAdd2.addEventListener('click', () => {
    a += "2"
    displayScreenVariableA.textContent = "a" + "=" + a;
})
const buttonAdd3 = document.querySelector('.button3');
buttonAdd3.addEventListener('click', () => {
    a += "3"
    displayScreenVariableA.textContent = "a" + "=" + a;
})

const buttonAdd4 = document.querySelector('.button4');
buttonAdd4.addEventListener('click', () => {
    a += "4"
    displayScreenVariableA.textContent =  "a" + "=" + a;
})
const buttonAdd5 = document.querySelector('.button5');
buttonAdd5.addEventListener('click', () => {
    a += "5"
    displayScreenVariableA.textContent = "a" + "=" + a;
})

const buttonAdd6 = document.querySelector('.button6');
buttonAdd6.addEventListener('click', () => {
    a += "6"
    displayScreenVariableA.textContent = "a" + "=" + a;
})

const buttonAdd7 = document.querySelector('.button7');
buttonAdd7.addEventListener('click', () => {
    a += "7"
    displayScreenVariableA.textContent = "a" + "=" + a;
})

const buttonAdd8 = document.querySelector('.button8');
buttonAdd8.addEventListener('click', () => {
    a += "8"
    displayScreenVariableA.textContent = "a" + "=" + a;
})

const buttonAdd9 = document.querySelector('.button9');
buttonAdd9.addEventListener('click', () => {
    a += "9"
    displayScreenVariableA.textContent = "a" + "=" + a;
})
function add () {
    mathematicalOperation = 1;
    displayResult.textContent = getResult()
    b = a;
    a = '';
    displayScreenVariableA.textContent = "a"+ '=' + a;
    displayScreenVariableB.textContent = "b" + "=" +b;
    displayOperator.textContent = "+";
}

const addButton = document.querySelector('.buttonAdd')
addButton.addEventListener('click', () => {
    add()
})

function getResult() {
    switch (mathematicalOperation) {
        case 1:
            return +a + +b;
            break;
        case 2:
            return +a - +b;
            break;
        case 3:
            return +a * +b;
            break
        case 4:
            return +a / +b;
            break;
    }
}




