$(function() {

  // REDDIT AJAX JSON REQUEST
    $.ajax({
      method: "GET",
      url: "http://www.reddit.com/r/worldnews.json"
  }).done(function( data ) {

      $.each(data.data.children, function(i, result) {
        $('.reddit').append("• " + result.data.title + "</br>")
      })

  });

  // NPR AJAX JSON REQUEST





  // REDDIT AJAX JSON REQUEST
})
