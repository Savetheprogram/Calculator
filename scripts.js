
let a = "";
let b = "";
const displayScreen = document.querySelector('.calculatorScreen');

const buttonAdd0 = document.querySelector('.button0');
buttonAdd0.addEventListener('click', () => {
    a += "0"
    displayScreen.textContent = a
})
const buttonAdd1 = document.querySelector('.button1');
buttonAdd1.addEventListener('click', () => {
    a += "1"
    displayScreen.textContent = a;
})

const buttonAdd2 = document.querySelector('.button2');
buttonAdd2.addEventListener('click', () => {
    a += "2"
    displayScreen.textContent = a;
})
const buttonAdd3 = document.querySelector('.button3');
buttonAdd3.addEventListener('click', () => {
    a += "3"
    displayScreen.textContent = a;
})

const buttonAdd4 = document.querySelector('.button4');
buttonAdd4.addEventListener('click', () => {
    a += "4"
    displayScreen.textContent = a;
})
const buttonAdd5 = document.querySelector('.button5');
buttonAdd5.addEventListener('click', () => {
    a += "5"
    displayScreen.textContent = a;
})

const buttonAdd6 = document.querySelector('.button6');
buttonAdd6.addEventListener('click', () => {
    a += "6"
    displayScreen.textContent = a;
})

const buttonAdd7 = document.querySelector('.button7');
buttonAdd7.addEventListener('click', () => {
    a += "7"
    displayScreen.textContent = a;
})

const buttonAdd8 = document.querySelector('.button8');
buttonAdd8.addEventListener('click', () => {
    a += "8"
    displayScreen.textContent = a;
})

const buttonAdd9 = document.querySelector('.button9');
buttonAdd9.addEventListener('click', () => {
    a += "9"
    displayScreen.textContent = a;
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