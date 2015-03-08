$(function() {
    // NPR AJAX JSON REQUEST
    $.ajax({
      method: "GET",
      url: "http://api.npr.org/query?id=1004&fields=title,all&dateType=story&output=JSON&apiKey=MDE5MDgxNjE0MDE0MzEwMTk2MTAyNmNkNg001",
      dataType: "json"
    }).done( function( data ) {
      $.each(data.list.story,  function(i, result) {
        $('.npr').append("• <a href='" + result.link[2].$text + "'>" + result.title.$text + "</br>")
      })
    });
})
