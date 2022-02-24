const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator-keys");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    // alert("BUTTON WAS CLICKED");
  }
});
