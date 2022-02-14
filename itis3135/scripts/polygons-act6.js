//
// The work submitted here is my work - I have not copied and pasted code into
// these pages. I have gotten help from these sites:
//      https://www.w3schools.com/jsref/met_win_prompt.asp
//      https://www.w3schools.com/jsref/jsref_isnan.asp
//
// - Signed Logan A Feid 2022/02/14/13:08

function validateEntry() {
  let mynum = prompt('The Lemon fish says: "Enter a number from 1 to 10."');

  while (
    isNaN(mynum) ||
    mynum.length < 1 ||
    mynum == 0 ||
    mynum > 10 ||
    mynum < -10
  ) {
    mynum = prompt(
      "The Lemon Fish rejects your erroneous input. Enter a number from 1 to 10 or risk the wrath of the fish."
    );
  }

  if (mynum < 0) {
    mynum = mynum * -1;
  }
  mynum = Math.round(mynum);

  return mynum;
}

function getShape(sides) {
  const polygons = [
    "Monogon",
    "Bigon",
    "Triangle",
    "Quadrilateral",
    "Pentagon",
    "Hexagon",
    "Heptagon",
    "Octagon",
    "Nonagon",
    "Decagon",
  ];
  return polygons[sides - 1];
}

let myinput = validateEntry();
let mypolygon = getShape(myinput);
alert("Your polygon is the " + mypolygon + ". Congratulations.");
