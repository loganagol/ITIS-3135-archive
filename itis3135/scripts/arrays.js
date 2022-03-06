let people = ["Clark Kent", "Bruce Wayne", "Diana Prince"];
let salaries = [40000, 3000000, 50000];

function addSalary() {
  console.log("! called addSalary()");

  let mysalary = document.getElementById("salary").value;
  //   console.log(mysalary);

  if (!mysalary || isNaN(mysalary) || mysalary < 0) {
    alert("Invalid input, please enter a number greater than zero.");
    return;
  }
  mysalary = parseFloat(mysalary);

  let myemployee = document.getElementById("employees").value;
  //   console.log(myemployee);

  for (let i = 0; i < people.length; i++) {
    if (people[i] === myemployee) {
      salaries[i] = mysalary;
      console.log("! changed salary");
    }
  }
  displayResults();
  displaySalary();

  document.getElementById("employees").focus();
}
function displayResults() {
  console.log("! called displayResults()");

  salaryAvg = 0;
  salaryMax = 0;
  salaryMaxIndex = 0;

  for (let i = 0; i < people.length; i++) {
    salaryAvg += salaries[i];

    if (salaries[i] > salaryMax) {
      salaryMax = salaries[i];
      salaryMaxIndex = i;
    }
  }
  salaryAvg = salaryAvg / people.length;

  let messageAvg = "Average salary is $" + salaryAvg + ".";
  let messageMax =
    "The highest paid employee is " +
    people[salaryMaxIndex] +
    " with a salary of $" +
    salaryMax +
    ".";

  document.getElementById("results").innerHTML =
    "<h3>Results</h3><p>" + messageAvg + "</p>" + "<p>" + messageMax + "</p>";
}
function displaySalary() {
  console.log("! called displaySalary");

  let returnHTML =
    "<h3>Salaries</h3><table><tr><th>Name</th><th>Salary</th></tr>";
  for (let i = 0; i < people.length; i++) {
    returnHTML +=
      "<tr> <td>" + people[i] + "</td> <td>$" + salaries[i] + "</td> </tr>";
  }
  returnHTML = returnHTML + "</table>";

  document.getElementById("results_table").innerHTML = returnHTML;
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

document.getElementById("employees").focus();
