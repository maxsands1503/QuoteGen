
window.onload = function(){
  $.ajax({
    url: "http://api.forismatic.com/api/1.0/",
    jsonp: "jsonp",
    dataType: "jsonp",
    data: {
      method: "getQuote",
      lang: "en",
      format: "jsonp"
    }
  })
  .done(update)
  .fail(handleErr);
};

function update(response) {
console.log(response);
$('#catcher').append("<p>" + response.quoteText + "</p>");
$('#twitter').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + response.quoteText + '" ' + response.quoteAuthor));
}

function handleErr(jqxhr, textStatus, err) {
console.log("Request Failed: " + textStatus + ", " + err);
  }


$(document).ready(function(){
  $( "#buttoni" ).click(function() {
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      }
    })
    .done(update)
    .fail(handleErr);
});

function update(response) {
  console.log(response);
  $('#catcher').html("<p>" + response.quoteText + "</p><p><em> -" + response.quoteAuthor + "</em></p>")
}

function handleErr(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
    }
  });
