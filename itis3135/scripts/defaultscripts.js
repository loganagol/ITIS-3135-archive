function scriptTest() {
  alert("Script defaultscripts.js is now running.");
}

// Displays the time, day of week, and date (i.e. Today is 3:53pm on Wednesday, 3 November, 2027)
function todaysDate() {
  var today = new Date();

  var hours = today.getHours();
  var minutes = today.getMinutes();

  var meridian;
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

  var weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  var weekday = weekdays[today.getDay()];

  var months = [
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
  var month = months[today.getMonth()];

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
  var company = "Lemon Fish";
  var name = $("name").value;
  var mood = $("mood").value;
  let message =
    "The " +
    company +
    " welcomes you, " +
    name +
    "! We're overjoyed that you're " +
    mood +
    "!";
  alert(message);
}
