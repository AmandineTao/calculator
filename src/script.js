let inputDisplay = document.getElementById('inputDisplay');
let resultDisplay = document.getElementById('resultDisplay');

function appendToDisplay(value) {
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
    try {
        resultDisplay.value = evalValue(inputDisplay.value);
    } catch (error) {
        resultDisplay.value = '';
    }
}


function computePower() {
    inputDisplay.value += "^";
}

function convertToBinary() {
    let decimalValue = parseFloat(evalValue(inputDisplay.value), 10);
    resultDisplay.value = decimalValue.toString(2);
}

function convertToHexa() {
    let decimalValue = parseFloat(evalValue(inputDisplay.value), 10);
    resultDisplay.value = decimalValue.toString(16);
}

function convertToOctal() {
    let decimalValue = parseFloat(evalValue(inputDisplay.value), 10);
    resultDisplay.value = decimalValue.toString(8);
}

function printResult() {
    inputDisplay.value = resultDisplay.value;
    resultDisplay.value = '';
}




