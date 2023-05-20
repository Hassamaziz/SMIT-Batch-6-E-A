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
