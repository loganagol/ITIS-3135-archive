/**
 * References:
 *      https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 *      https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/
 *      https://careerkarma.com/blog/javascript-string-contains/
 */

const calculator = document.querySelector(".calculator");
const display = document.querySelector(".calculator-display");
const buttons = document.querySelector(".calculator-buttons");

let displayNumber = "0";
let prevNumber = "0";

buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const button = e.target;

    const number = button.dataset.number;
    const operation = button.dataset.operation;

    if (number) {
      console.log("! number keypress");

      if (displayNumber === "0") {
        displayNumber = number;
      } else {
        displayNumber += number;
      }
    }
    // UNARY OPERATOR
    if (operation === "decimal") {
      if (!displayNumber.includes(".")) {
        displayNumber = displayNumber + ".";
      }
    }
    //UNARY OPERATOR
    if (operation === "negative" && displayNumber !== "0") {
      if (!displayNumber.includes("-")) {
        displayNumber = "-" + displayNumber;
      } else {
          displayNumber = displayNumber.slice(1);
      }
    }
    // This concludes operations that can be performed on a single number.

    if (operation === "add") {
      displayNumber += "+";
    } else if (operation === "subtract") {
      displayNumber += "-";
    } else if (operation === "multiply") {
      displayNumber += "*";
    } else if (operation === "divide") {
      displayNumber += "/";
    }

    if (operation === "calculate") {
      displayNumber = eval(displayNumber);
      // As a security student, I know eval() is very evil and should never be used.
    }

    if (operation === "clear") {
      displayNumber = "0";
    }
    display.textContent = displayNumber;
  }
});
