$(function() {
  // REDDIT AJAX JSON REQUEST
  $.ajax({
    method: "GET",
    url: "http://www.reddit.com/r/worldnews.json"
  }).done(function( data ) {
    $.each(data.data.children, function(i, result) {
      $('.reddit').append("• <a href='" + result.data.url + "'>" + result.data.title + "</br>")
    })

  });
})
