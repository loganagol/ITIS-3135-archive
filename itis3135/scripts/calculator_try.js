/**
 * References:
 *      https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 *      https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/
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

    if (number) {
      if (displayNumber === "0") {
        display.textContent = number;
        displayNumber = number;
      } else {
        console.log("BRANCH");
        display.textContent += number;
        displayNumber += number;
      }
    }
  }
});
