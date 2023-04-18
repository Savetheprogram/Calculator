
let a = "";
let b = "";
const displayScreenVariableA = document.querySelector('.calculatorScreen');
const displayScreenVariableB = document.querySelector('.calculatorScreen');

const buttonAdd0 = document.querySelector('.button0');
buttonAdd0.addEventListener('click', () => {
    a += "0"
    displayScreenVariableA.textContent = b + '+' + a;
})
const buttonAdd1 = document.querySelector('.button1');
buttonAdd1.addEventListener('click', () => {
    a += "1"
    displayScreenVariableA.textContent = b + '+' + a;
})

const buttonAdd2 = document.querySelector('.button2');
buttonAdd2.addEventListener('click', () => {
    a += "2"
    displayScreenVariableA.textContent = b + '+' + a;
})
const buttonAdd3 = document.querySelector('.button3');
buttonAdd3.addEventListener('click', () => {
    a += "3"
    displayScreenVariableA.textContent = b + '+' + a;
})

const buttonAdd4 = document.querySelector('.button4');
buttonAdd4.addEventListener('click', () => {
    a += "4"
    displayScreenVariableA.textContent = b + '+' + a;
})
const buttonAdd5 = document.querySelector('.button5');
buttonAdd5.addEventListener('click', () => {
    a += "5"
    displayScreenVariableA.textContent = b + '+' + a;
})

const buttonAdd6 = document.querySelector('.button6');
buttonAdd6.addEventListener('click', () => {
    a += "6"
    displayScreenVariableA.textContent = b + '+' + a;
})

const buttonAdd7 = document.querySelector('.button7');
buttonAdd7.addEventListener('click', () => {
    a += "7"
    displayScreenVariableA.textContent = b + '+' + a;
})

const buttonAdd8 = document.querySelector('.button8');
buttonAdd8.addEventListener('click', () => {
    a += "8"
    displayScreenVariableA.textContent = b + '+' + a;
})

const buttonAdd9 = document.querySelector('.button9');
buttonAdd9.addEventListener('click', () => {
    a += "9"
    displayScreenVariableA.textContent = b + '+' + a;
})
function add () {
    b = a
    a = ''
    displayScreenVariableB.textContent = b + "+" + a
}

const addButton = document.querySelector('.buttonAdd')
addButton.addEventListener('click', () => {
    add()
})

function getResult() {
    
}




// function add (a, b) {
//     return +a + +b
// }
//
// function subtract (a, b) {
//     return +a - +b
// }
//
// function multiply (a, b) {
//     return +a * +b
// }
//
// function division (a, b) {
//     return +a / +b
// }