
let a = "";
let b = 0;
const buttonsAdd = []
const displayScreenVariableA = document.querySelector('.variableA');
const displayScreenVariableB = document.querySelector('.variableB');
const displayOperator = document.querySelector('.operator')
const displayResult = document.querySelector('.result')
let mathematicalOperation = 0;
let editVariable = 0

for (let i =0; i<10; i++){
    buttonsAdd[i] = document.querySelector('.button' + [i])
    buttonsAdd[i].addEventListener('click', () => {
        a += [i]
        displayScreenVariableA.textContent = a
    })}



const negateButton = document.querySelector('.negateButton');
negateButton.addEventListener('click', () => {
    a = -a
    displayScreenVariableA.textContent = a;
})
const comaButton = document.querySelector('.comaButton')
comaButton.addEventListener('click', () => {
    a += "."
    displayScreenVariableA.textContent = a;
})


function add () {
    getResult()

    editVariable == 0 ? b = a :  getResult() === a ? b = a : b = getResult()
    mathematicalOperation = 1;
    a = '';
    displayScreenVariableA.textContent = a;
    displayScreenVariableB.textContent = b;
    displayOperator.textContent = "+";
    displayResult.textContent = "result " + "= " + getResult()
    editVariable = 1

}

function subtract () {
    getResult()

    editVariable == 0 ? b = a :  getResult() === a ? b = a : b = getResult()
    mathematicalOperation = 2;
    a = '';
    displayScreenVariableA.textContent = a;
    displayScreenVariableB.textContent = b;
    displayOperator.textContent = "-";
    displayResult.textContent = "result " + "= " + getResult()
    editVariable = 1
}

function multiply () {
    getResult()

    editVariable == 0 ? b = a :  getResult() === a ? b = a : b = getResult()
    mathematicalOperation = 3;
    a = '';
    displayScreenVariableA.textContent = a;
    displayScreenVariableB.textContent = b;
    displayOperator.textContent = "*";
    displayResult.textContent = "result " + "= " + getResult()
    editVariable = 1
}

function divide () {
    getResult()

    editVariable == 0 ? b = a :  getResult() === a ? b = a : b = getResult()
    mathematicalOperation = 4;
    a = '';
    displayScreenVariableA.textContent = a;
    displayScreenVariableB.textContent = b;
    displayOperator.textContent = "/";
    displayResult.textContent = "result " + "= " + getResult();
    editVariable = 1;
}


const addButton = document.querySelector('.buttonAdd')
addButton.addEventListener('click', () => {
    add()
})
const subtractButton = document.querySelector('.buttonSubtract')
subtractButton.addEventListener('click', () => {
    subtract()
})
const multiplyButton = document.querySelector('.buttonMultiply')
multiplyButton.addEventListener('click', () => {
    multiply()
})
const divideButton = document.querySelector('.buttonDivide')
divideButton.addEventListener('click', () => {
    divide()
})
const resultButton = document.querySelector('.resultButton')
resultButton.addEventListener('click', () => {
    getResult(), displayResult.textContent = "result" + "=" + getResult()
})
const clearButton = document.querySelector('.clearButton')
clearButton.addEventListener('click', () => {
    clearDisplay()
})
const deleteDigitButton = document.querySelector('.backButton')
deleteDigitButton.addEventListener('click', () => {
    deleteDigit()
})

function getResult() {
    switch (mathematicalOperation) {
        case 1:
            return  +a + +b;
        case 2:
            return b - a;
        case 3:
            return a * b;
        case 4:
            return b / a;
    }
}
function clearDisplay () {
    a = ''
    b = ''
    editVariable = 0
    displayScreenVariableB.textContent = ""
    displayScreenVariableA.textContent = ""
    displayResult.textContent = ""
    displayOperator.textContent = ""
}
function deleteDigit () {
    a = a.toString()
    a = a.replace(a.charAt(a.length - 1), "")
    displayScreenVariableA.textContent = a;

}




