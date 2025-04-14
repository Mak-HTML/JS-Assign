let expression = "";

function appendValue(val) {
  expression += val;
  document.getElementById("result").value = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("result").value = "";
}

// Safe evaluation without eval
function calculate() {
  try {
    let result = evaluateExpression(expression);
    document.getElementById("result").value = result;
    expression = result.toString();
  } catch (error) {
    document.getElementById("result").value = "Error";
    expression = "";
  }
}

// Basic arithmetic parser
function evaluateExpression(expr) {
  let tokens = expr.match(/(\d+(\.\d+)?|[+\-*/])/g);
  if (!tokens) return "0";

  let numStack = [];
  let opStack = [];

  let precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };

  function applyOperator() {
    let b = numStack.pop();
    let a = numStack.pop();
    let op = opStack.pop();
    if (op === '+') numStack.push(a + b);
    else if (op === '-') numStack.push(a - b);
    else if (op === '*') numStack.push(a * b);
    else if (op === '/') numStack.push(a / b);
  }

  for (let token of tokens) {
    if (!isNaN(token)) {
      numStack.push(parseFloat(token));
    } else {
      while (opStack.length &&
             precedence[opStack[opStack.length - 1]] >= precedence[token]) {
        applyOperator();
      }
      opStack.push(token);
    }
  }

  while (opStack.length) {
    applyOperator();
  }

  return numStack[0];
}
