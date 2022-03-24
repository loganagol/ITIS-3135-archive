$(document).ready(() => {
    console.log("! document ready");

    $(".slideshow-images a").each(() => {
        let swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    $(".slideshow-images a").click((event) => {
        console.log("! image clicked");

        event.preventDefault();

        let imagePath = $(this).attr("href");
        $("#image-main").attr("src", imagePath);
        
        let title = $(this).attr("title");
        $("#image-title").text(title);
    });
});