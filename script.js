let inputDisplay = document.getElementById('inputDisplay');
let resultDisplay = document.getElementById('resultDisplay');
let poweredOn = true;

function appendToDisplay(value) {
    if (poweredOn) {
        inputDisplay.value += value;
    }
}

function backspace() {
    if (poweredOn) {
        inputDisplay.value = inputDisplay.value.slice(0, -1);
    }
}

function clearResult() {
    if (poweredOn) {
        resultDisplay.value = '';
    }
}

function clearDisplay() {
    if (poweredOn) {
        inputDisplay.value = '';
        resultDisplay.value = '';
    }
}

function calculate() {
    if (poweredOn) {
        try {
            resultDisplay.value = eval(inputDisplay.value);
        } catch (error) {
            resultDisplay.value = 'Error';
        }
    }
}

function computePower() {
    if (poweredOn) {
        inputDisplay.value += "**";
    }
}

function convertToBinary() {
    if (poweredOn) {
        let decimalValue = parseInt(inputDisplay.value, 10);
        resultDisplay.value = decimalValue.toString(2);
    }
}

function convertToHexa() {
    if (poweredOn) {
        let decimalValue = parseInt(inputDisplay.value, 10);
        resultDisplay.value = decimalValue.toString(16);
    }
}

function convertToOctal() {
    if (poweredOn) {
        let decimalValue = parseInt(inputDisplay.value, 10);
        resultDisplay.value = decimalValue.toString(8);
    }
}

function powerCalc() {
    poweredOn = !poweredOn;
    if (!poweredOn) {
        inputDisplay.value = '';
        resultDisplay.value = '';
    }
}
