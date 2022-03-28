$(document).ready(function () {
  // preload the image for each link
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
    
    // get the image URL and caption for each image and animate the caption
    
    
    // cancel the default action of each link
    evt.preventDefault();

    // move the focus to the first link
  });
}); // end ready
