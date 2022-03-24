$(document).ready(function () {
  console.log("! document ready");

  $("#slideshow-images a").each(function () {
    let swappedImage = new Image();
    swappedImage.src = $(this).attr("href");
  });

  $("#slideshow-images a").click(function (event) {
    console.log("! image clicked");

    event.preventDefault();

    let imagePath = $(this).attr("href");
    console.log("! looking for " + imagePath);
    $("#slideshow-image-main").attr("src", imagePath);
  });
});
