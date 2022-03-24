const inputs = document.querySelectorAll(".input-year");

inputs.forEach((el) =>
  el.addEventListener("click", (e) => {
    console.log("! clicked " + el.innerHTML);
  })
);