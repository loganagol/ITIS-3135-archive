const people = ["Clark Kent", "Bruce Wayne", "Diana Prince"];
const salaries = [40000, 3000000, 50000];

function addSalary() {
  console.log("! called addSalary()");
}
function displayResults() {
  console.log("! called displayResults()");
}
function displaySalary() {
  console.log("! called displaySalary");
}

const buttonAddSalary = document.querySelector("#buttonAddSalary");
const buttonDisplayResults = document.querySelector("#buttonDisplayResults");
const buttonDisplaySalary = document.querySelector("#buttonDisplaySalary");

buttonAddSalary.addEventListener("click", (e) => {
  addSalary();
});

buttonDisplayResults.addEventListener("click", (e) => {
  displayResults();
});

buttonDisplaySalary.addEventListener("click", (e) => {
  displaySalary();
});
