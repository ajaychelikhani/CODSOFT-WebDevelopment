let currentOperand = '';
let previousOperand = '';
let operation = undefined;
function clearDisplay() {
    currentOperand = '';
    operation = undefined;
    document.getElementById('display').value = '';
}
function appendNumber(number) {
    currentOperand = currentOperand.toString() + number.toString();
    if(operation != undefined) {
        document.getElementById('display').value = previousOperand + ' ' + operation + ' ' + currentOperand;
    } else {
        document.getElementById('display').value = currentOperand;
    }
}
function chooseOperation(op) {
    if (currentOperand === '') {
        if (op === '-') {
            currentOperand = op;
            document.getElementById('display').value = currentOperand;
        }
        return;
    }
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    document.getElementById('display').value = previousOperand + ' ' + operation;
}
function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
    document.getElementById('display').value = currentOperand;
}
