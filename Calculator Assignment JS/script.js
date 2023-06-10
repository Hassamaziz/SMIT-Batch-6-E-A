function toggleCalculator() {
  var info1 = document.getElementById("info");
  var info2 = document.getElementById("info2");
  
  if (info1.classList.contains("hidden")) {
    info1.classList.remove("hidden");
    info2.classList.add("hidden");
  } else {
    info1.classList.add("hidden");
    info2.classList.remove("hidden");
  }
}

function handleOperator(operator) {
  const displayBox = document.querySelector('.display-box');

 
  displayBox.value += operator;
}

function calculate() {
  const displayBox = document.querySelector('.display-box');
  const expression = displayBox.value;

  try {
    
    const processedExpression = expression.replace('^', 'Math.pow');
    const result = eval(processedExpression);
    displayBox.value = result;
  } catch (error) {
    displayBox.value = 'Error';
  }
}





function clearScreen() {
  document.getElementById("result").value = "";
}

function display(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  try {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function deleteLastCharacter() {
  var currentResult = document.getElementById("result").value;
  document.getElementById("result").value = currentResult.slice(0, -1);
}

function calcTrigono(operation) {
  var result = document.getElementById("result");
  var angle = parseFloat(result.value);

  if (operation === "sin") {
    result.value = Math.sin(angle);
  } else if (operation === "cos") {
    result.value = Math.cos(angle);
  } else if (operation === "tan") {
    result.value = Math.tan(angle);
  }
}



function calculatePi() {
  try {
    var result = Math.PI;
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function calculateLogarithm() {
  try {
    var currentResult = document.getElementById("result").value;
    var result = Math.log10(parseFloat(currentResult));
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function calculateSquareRoot() {
  try {
    var currentResult = document.getElementById("result").value;
    var result = Math.sqrt(parseFloat(currentResult));
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}
