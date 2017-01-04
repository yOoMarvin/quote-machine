var key = config.KEY

$(document).ready(function() {
  generate();
});

function generate(){
  $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
    type: "POST",
    data: {},
    dataType: "json",
    success: function(data) {
      $("#quote-text").html(data.quote);
      $("#quote-author").html("- " + data.author);
      $("#twitter-link").attr("href", 'https://twitter.com/intent/tweet?text=' + data.quote + " - " + data.author);
    },
    error: function() { alert("boo! there was an error loading the quote ") },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Key", key)
    }
  });

  //random color:
  var color = "#"+((1<<24)*Math.random()|0).toString(16);

  $("body").animate({backgroundColor: color}, "slow");
  $("#quote-text").animate({color: color}, "slow");
  $("#quote-author").animate({color: color}, "slow");
  $("#twitter-button").animate({backgroundColor: color}, "slow");
  $("#quote-button").animate({backgroundColor: color}, "slow");
}
