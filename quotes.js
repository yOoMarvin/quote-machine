$(document).ready(function() {
  generate();
});

function generate(){
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?",
  function(data){
    $("#quote-text").html(data.quoteText);
    $("#quote-author").html("- " + data.quoteAuthor);
  });
}
