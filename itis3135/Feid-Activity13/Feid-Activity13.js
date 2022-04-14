$(document).ready(function () {
  $.ajax({
    type: "get",
    url: "team.json",
    beforeSend: function () {
      $("#team").html("Loading...");
    },
    timeout: 10000,
    error: function (xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function (data) {
      $("#team").html("");
      $.each(data, function () {
        $.each(this, function (key, value) {
          $("#team").append(
            "<h3>" +
              "Name: " +
              value.name +
              "<br>" +
              "</h3>" +
              "Team: " +
              value.title +
              "<br>" +
              "Bio: " +
              value.bio +
              "<br>"
          );
        });
      });
    },
  });
});

// $(document).ready(function() {
//     $.ajax({
//         type: "get",
//         url: "team.xml",
//         beforeSend: function() {
//             $("#team").html("Loading...");
//         },
//         timeout: 10000,
//         error: function(xhr, status, error) {
//             alert("Error: " + xhr.status + " - " + error);
//         },
//         dataType: "xml",
//         success: function(data) {
//             $("#team").html("");
//             $(data).find("management").children().each(function() {
//                 var xmlDoc = $(this);
//                 $("#team").append
//                 ("<h3>" + xmlDoc.find("name").text() + "</h3>" +
//                           xmlDoc.find("title").text() + "<br>" +
//                           xmlDoc.find("bio").text() + "<br>");
//             });
//         }
//     });
// });
