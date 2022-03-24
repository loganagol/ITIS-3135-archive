$(document).ready(function() {
    console.log("! document ready");

    $(".slideshow-images a").each(function() {
        let swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    $(".slideshow-images a").click(function(event) {
        console.log("! image clicked");

        event.preventDefault();

        let imagePath = $(this).attr("href");
        $("#image-main").attr("src", imagePath);
        
        let title = $(this).attr("title");
        $("#image-title").text(title);
    });
});