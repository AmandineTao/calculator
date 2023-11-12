let inputDisplay = document.getElementById('inputDisplay');
let resultDisplay = document.getElementById('resultDisplay');

function validateFisrtInput(check_value) {
    if (inputDisplay.value === '' && check_value.includes(value)) {
        // Do not allow value as the first input (here check_value can be 1 char or a string; e.g '+' or '+-')
        return;
    }
}

function appendToDisplay(value) {
    if (inputDisplay.value === '' && '+-*/'.includes(value)) {
        // Do not allow '+', '-', '*', or '/' as the first input
        return ; // Invalid input
    }
    inputDisplay.value += value;
}

function backspace() {
    inputDisplay.value = inputDisplay.value.slice(0, -1);
    resultDisplay.value = '';
}

function clearResult() {
    resultDisplay.value = '';
}

function clearDisplay() {
    inputDisplay.value = '';
    resultDisplay.value = '';
}

function evalValue(val) {
    return eval(val.replace(/\^/g, "**"));
}

function calculate() {
    validateFisrtInput('=')
    try {
        resultDisplay.value = evalValue(inputDisplay.value);
    } catch (error) {
        resultDisplay.value = '';
    }
}


function computePower() {
    validateFisrtInput('^')
    inputDisplay.value += '^';
}

function convertToBinary() {
    validateFisrtInput('bin')
    let decimalValue = parseFloat(evalValue(inputDisplay.value), 10);
    resultDisplay.value = decimalValue.toString(2);
}

function convertToHexa() {
    validateFisrtInput('hexa')
    let decimalValue = parseFloat(evalValue(inputDisplay.value), 10);
    resultDisplay.value = decimalValue.toString(16);
}

function convertToOctal() {
    validateFisrtInput('octal')
    let decimalValue = parseFloat(evalValue(inputDisplay.value), 10);
    resultDisplay.value = decimalValue.toString(8);
}

function printResult() {
    inputDisplay.value = resultDisplay.value;
    resultDisplay.value = '';
}



