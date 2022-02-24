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

    if (!action) {
      console.log("NUMBER KEY");

      if (displayedNum == "0") {
        display.textContent = keyContent;
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
    }
  }
});
