$(document).ready(function () {
  console.log(" !loaded");

  $("#bxslider").bxSlider({
    randomStart: true,
    moveSlides: 1,
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 500,
    captions: true,
    auto: true,
    pause: 1000,
    pager: true,
    pagerType: "short",
    slideMargin: 100,
  });
});
