$(document).ready(function () {
  $("#nav_list li").click(function (event) {
    console.log("! list element clicked");

    speakerfile = $(this).children("a").first().attr("title") + ".json";
    console.log(speakerfile);

    $.getJSON("json_files/" + speakerfile, function (data) {
      $.each(data, function () {
        $.each(this, function (key, value) {
          $("main h1").html(value.title);
          $("main h2").html(value.month);
          $("main h3").html(value.speaker);
          $("main img").attr("src", value.image);
          $("main p").html(value.text);
        });
      });s
    });
  });

  $.ajax({
    type: "get",
    url: "",
  });
}); // end ready
