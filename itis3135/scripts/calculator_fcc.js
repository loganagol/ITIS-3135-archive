/**
 * References:
 *    https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/
 */

const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator-keys");
const display = document.querySelector(".calculator-display");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    // console.log("BUTTON WAS CLICKED");
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;
    // console.log(previousKeyType);
    console.log(calculator.dataset);

    if (!action) {
      console.log("NUMBER KEY");

      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
        calculator.dataset.previousKeyType = "";

        calculator.dataset.firstValue = displayedNum;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("OPERATOR KEY");

      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }
    if (action === "decimal") {
      console.log("DECIMAL KEY");

      display.textContent = displayedNum + ".";
    }
    if (action === "clear") {
      console.log("CLEAR KEY");
    }
    if (action === "calculate") {
      console.log("EQUALS KEY");

      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      display.textContent = calculate(firstValue, operator, secondValue);
    }
  }
});

const calculate = (n1, operator, n2) => {
  console.log(operator + "ing " + n1 + " and " + n2);

  let result = "";
  let num1 = parseFloat(n1);
  let num2 = parseFloat(n2);

  if (operator === "add") {
    result = num1 + num2;
  } else if (operator === "subtract") {
    result = num1 - num2;
  } else if (operator === "multiply") {
    result = num1 * num2;
  } else if (operator === "divide") {
    result = num1 / num2;
  }

  return result;
};
