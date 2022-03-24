$(document).ready(function () {
  let currentIndex = 0;

  console.log("! document ready");

  let intervalID = setInterval(function () {
    console.log("! slideshow change");

    if (currentIndex > 5) currentIndex = 0;

    const imagePaths = [
      "images/trip_1.jpg",
      "images/trip_2.jpg",
      "images/trip_3.jpg",
      "images/trip_4.jpg",
      "images/trip_5.jpg",
      "images/trip_6.jpg",
    ];

    const imageDesc = [
      "St Louis Bridge",
      "Nebraska Plains",
      "Utah Canyons",
      "The Road to Delta",
      "Sevier Lakebed",
      "Basin Sunrise",
    ];

    $("#image-main").attr("src", imagePaths[currentIndex]);
    $("#image-title").text(imageDesc[currentIndex]);
    currentIndex += 1;

    console.log(currentIndex);
  }, 2000);

  $(".slideshow-images a").each(function () {
    let swappedImage = new Image();
    swappedImage.src = $(this).attr("href");
  });

  $(".slideshow-images a").click(function (event) {
    console.log("! image clicked");

    event.preventDefault();

    let imagePath = $(this).attr("href");
    $("#image-main").attr("src", imagePath);

    let title = $(this).attr("title");
    $("#image-title").text(title);

    clearInterval(intervalID); // "stop" slideshow
  });
});
