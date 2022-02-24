const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator-keys");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    // alert("BUTTON WAS CLICKED");
    const key = e.target;
    const action = key.dataset.action;

    if (!action) {
      //   alert("NUMBER KEY")
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      //   alert("OPERATOR KEY");
    }
    if (action === "decimal") {
      //   alert("DECIMAL KEY");
    }
    if (action === "clear") {
      //   alert("CLEAR KEY");
    }
    if (action === "calculate") {
      //   alert("EQUALS KEY");
    }
  }
});
