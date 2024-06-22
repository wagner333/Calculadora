function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let expression = document.getElementById('display').value;
    let result = eval(expression); 
    document.getElementById('display').value = result;
}

function resetCalculator() {
    document.getElementById('display').value = '';
}
