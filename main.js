const keys = document.querySelector(".calc__keys");
let display = document.querySelector("#calc__display");

let num1 = undefined;
let operator = undefined;
let num2 = undefined;

keys.addEventListener("click", (event) => {
  let key = event.target;
  let input = key.textContent;

  getInput(key, input);
});

function updateDisplay(input) {
  display.textContent = input;
}

function getInput(key, input) {
  let displayValue = display.textContent;

  if (key.classList.contains("all-clear")) {
    clearDisplay();
  } else if (key.classList.contains("delete")) {
    input = displayValue.slice(0, -1);
    if (displayValue.length == 1) {
      input = 0;
    }
    updateDisplay(input);
  }

  if (displayValue == 0 && key.classList.contains("number")) {
    updateDisplay(input);
  } else if (key.classList.contains("number")) {
    input = displayValue + input;
    updateDisplay(input);
  } else if (displayValue != 0 && key.classList.contains("operator")) {
    num1 = displayValue;
    operator = input;
    input = "";
    updateDisplay(input);
  } else if (
    operator &&
    num1 &&
    displayValue != "" &&
    key.classList.contains("equals")
  ) {
    num2 = displayValue;
    calculate();
  }
}

function clearDisplay() {
  display.textContent = "0";
  num1 = undefined;
  operator = undefined;
  num2 = undefined;
}

function updateDisplay(input) {
  display.textContent = input;
}

function calculate() {
  switch (operator) {
    case "%":
      input = Number(num1) / Number(num2);
      updateDisplay(input);
      break;
    case "X":
      input = Number(num1) * Number(num2);
      updateDisplay(input);
      break;
    case "-":
      input = Number(num1) - Number(num2);
      updateDisplay(input);
      break;
    case "+":
      input = Number(num1) + Number(num2);
      updateDisplay(input);
      break;
  }
}
