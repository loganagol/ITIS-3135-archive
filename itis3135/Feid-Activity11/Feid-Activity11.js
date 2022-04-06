// <!-- jQuery call to the accordion() method. -->
$(document).ready(function() {
    console.log("!ready")

    $("#accordion").accordion({
        active: false,
        collapsible: true,
        heightStyle: "content"
    });
});