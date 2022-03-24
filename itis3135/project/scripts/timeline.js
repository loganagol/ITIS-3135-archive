const inputs = document.querySelectorAll(".input-year");

inputs.forEach((el) =>
  el.addEventListener("click", (ev) => {
    console.log("! clicked " + el.innerHTML);

    inputs.forEach((el) => el.classList.remove("active"));
    el.classList.add("active");

    let currentActive = document.querySelectorAll("#container-description ul");
    currentActive.forEach((el) => el.classList.remove("active"));

    let year = el.innerHTML;
    document.getElementById(year).classList.add("active");
  })
);