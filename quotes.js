$(document).ready(function() {
  generate();
});

function generate(){
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?",
  function(data){
    $("#quote-text").html(data.quoteText);
    $("#quote-author").html("- " + data.quoteAuthor);
    $("#twitter-link").attr("href", 'https://twitter.com/intent/tweet?text=' + data.quoteText + " - " + data.quoteAuthor);
  });

  //random color:
  var color = "#"+((1<<24)*Math.random()|0).toString(16);

  $("body").animate({backgroundColor: color}, "slow");
  $("#quote-text").animate({color: color}, "slow");
  $("#quote-author").animate({color: color}, "slow");
  $("#twitter-button").animate({backgroundColor: color}, "slow");
  $("#quote-button").animate({backgroundColor: color}, "slow");
}
