$(document).ready(function () {
  // https://graph.facebook.com/{object-id}?fields=likes.summary(true)&access_token={access-token}

  let accessToken = "";
  let objectIdJubi = "1656781584577677";
  let myURL = `https://graph.facebook.com/1656781584577677`;

  console.log(`Attempting to query ${myURL}`);

  $.ajax({
    type: "get",
    url: myURL,
    dataType: "json",

    error: function (xhr, error) {
      console.log(`Error ${xhr.status} - ${error}`);
    },
    success: function (data) {
      console.log(data);
    },
  });
});
