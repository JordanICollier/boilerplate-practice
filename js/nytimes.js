// NY Times
$(function() {
  $.ajax( "http://api.nytimes.com/svc/topstories/v1/home.json?api-key=a54637a5d4a3416bdf7326d3d7d5fc44:17:72024629", {
    format: "json",
    method: "GET"
  })
  .done(function( data ) {
    $.each(data.results, function(i, result){
      $(".nytimes").append("<li><a href='" + result.url + "'>" + result.title + "</a></li>");
    });

    });
  });
