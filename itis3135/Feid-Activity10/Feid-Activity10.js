$(document).ready(function () {
  // In the JavaScript file, add statements that preload the image
  const imagePaths = [
    "Feid-Activity10_images/h1.jpg",
    "Feid-Activity10_images/h2.jpg",
    "Feid-Activity10_images/h3.jpg",
    "Feid-Activity10_images/h4.jpg",
    "Feid-Activity10_images/h5.jpg",
    "Feid-Activity10_images/h6.jpg",
  ];

  let $images = [];
  for (let i = 0; i < imagePaths.length; i++) {
    $images.push($("<img>").attr("src", imagePaths[i]));
  }
  console.log("! preloaded images");

  // set up the event handlers for each link
  $("ul li a").click(function (evt) {
    console.log("! image clicked");

    // Then add statements that fade the caption and image out over a
    // duration of three seconds.
    let imagePath = $(this).attr("href");
    $("#image").fadeOut(3000, function () {
      $("#image").attr("src", imagePath);
      $("#image").fadeIn(3000);
    });

    let caption = $(this).attr("title");
    $("#caption").fadeOut(3000, function () {
      $("#caption").text(caption);
      $("#caption").fadeIn(3000);

      //After the image fades in, add statements to change the font size of the caption to 2.0 em after three seconds using the animate method.
      $("#caption").animate({ fontSize: "2em" }, 3000, function() {
      });
    });

    // get the image URL and caption for each image and animate the caption
    // cancel the default action of each link
    evt.preventDefault();
  });

  // move the focus to the first link
  $("ul li:first").focus();
}); // end ready
