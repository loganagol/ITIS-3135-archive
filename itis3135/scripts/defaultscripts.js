function scriptTest() {
  alert("Script defaultscripts.js is now running.");
}

// Displays the time, day of week, and date (i.e. Today is 3:53pm on Wednesday, 3 November, 2027)
function todaysDate() {
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();

  let meridian;
  if (hours > 12 && hours < 24) {
    hours = hours % 12;
    meridian = "pm";
  } else if (hours == 24) {
    hours = 12;
    meridian = "am";
  } else if (hours == 12) {
    meridian = "pm";
  } else {
    meridian = "am";
  }

  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = weekdays[today.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[today.getMonth()];

  let message =
    "Today is " +
    hours +
    ":" +
    minutes +
    meridian +
    " on " +
    weekday +
    ", " +
    today.getDate() +
    " " +
    month +
    " " +
    today.getFullYear();

  document.getElementById("date-and-time").innerHTML = message;
}
todaysDate();

function makeGreeting() {
  document.body.style.background = "#03071E";
  let company = "Lemon Fish";
  let name = document.getElementById("name").value;
  let mood = document.getElementById("mood").value;
  let message =
    "The " +
    company +
    " welcomes you, " +
    name +
    "! We're overjoyed that you're feeling " +
    mood +
    "!";
  document.getElementById("greeting").innerHTML = message;
}

function getInsult() {
  document.body.style.background = "#03071E";
  let i = Math.floor(Math.random() * 5);
  let insults = [
    "Your mother was a hamster!",
    "Your father smelled of elderberries!",
    "Your brain is full of unwashed socks, your soul is full of gunk.",
    "You six-piece chicken McNobody.",
    "Does Barry Manilow know you raid his wardrobe?",
  ];
  let insult = insults[i];
  document.getElementById("button-results").innerHTML = insult;
}

function getFounderInfo() {
  document.body.style.background = "#03071E";
  let founderBio =
    "Liu Xin was the son of Confucian scholar Liu Xiang (77 – 6 BCE). Liu was a distant relative of Liu Bang, the founder of the Han dynasty, and was thus a member of the ruling dynastic clan (the Liu family). Liu Xin's paternal grandfather ranked as a marquess.[3]";
  document.getElementById("button-results").innerHTML = founderBio;
}

function getAlternatives() {
  document.body.style.background = "#03071E";
  let adjectives = [
    "Lackadaisical",
    "Lackluster",
    "Lame",
    "Large",
    "Languid",
    "Latent",
    "Lavish",
    "Lawful",
    "Lifeless",
    "Leaden",
  ];
  let nouns = ["Falcon", "Ferret", "Fennec Fox", "Firefly", "Flamingo"];
  let alternatives = "";

  for (let k = 0; k < 10; k++) {
    let i = Math.floor(Math.random() * 10);
    let j = Math.floor(Math.random() * 5);
    alternatives += adjectives[i] + " " + nouns[j] + "<br />";
  }
  document.getElementById("button-results").innerHTML = alternatives;
}

function getEmployStatus() {
  document.body.style.background = "#03071E";
  document.getElementById("button-results").innerHTML =
    "You are now employed with us. This cannot be undone. Please direct all complaints to our Human Resources department. Welcome aboard!";
}

function rejectMortality() {
  document.body.style.background = "#6A040F";
  document.getElementById("button-results").innerHTML = "<h3>IT IS DONE</h3>";
}
