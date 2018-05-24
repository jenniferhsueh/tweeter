$(document).ready(function(event) {
  $("textarea").on("input", function(event) {
    const tweet = $(this).val(); //event.target.value.length
    const textCounter = 140 - tweet.length;
    const textRemaining = $(".counter").text(textCounter);
    if (textCounter < 0) {      //text dom text node
      $(textRemaining).css({color: 'red'});
    } else {
      $(textRemaining).css({color: 'black'});
    }
  }) 
});

