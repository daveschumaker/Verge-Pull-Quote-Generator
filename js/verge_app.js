var myPullQuote; // Store our pull quote here to potentially prevent looping

// Get potential URL string so we can share fun pull quotes
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Update the quote, hide the input box
function updateQuote(string) {
  myPullQuote = string;

  $("#pullquote").html(myPullQuote);
  $("#input-quote").blur(); // Hide keyboard on iOS devices after input
  $("#share-quote").attr("href", "?quote=" + escape(string));
  $(".quotes").show();
  $(".sharing").show();
  $("#quote-maker").hide();
  $(window).scrollTo(".quotes",800);

  //window.location.href = "?quote=" + escape(string);

}

$(document).ready( function(){

  // On page load, let's hide out initial element.
  $(".quotes").hide();
  $(".sharing").hide();

  if (getParameterByName('quote') && getParameterByName('quote') !="") {
    updateQuote(getParameterByName('quote'));
  }

  // Reset everything so we can start over and write a new quote
  $("#new-quote").click(function() {
    window.location.href = window.location.href.split('?')[0]; // Remove query string on click
    $("#quote-maker").show();
    $(".quotes").hide();
    $(".sharing").hide();
  })

  // Share this witty quote!
  $("#share-quote").click(function() {

  });

  $("#input-quote").focus(function(){
    $("#input-quote").css("color","black");
    $("#input-quote").val("");
  });

  $("#input-send").click(function() {
    updateQuote($("#input-quote").val());
    $('#pullquote').scrollTo();
  });

  $("#quote-maker").submit(function() {
    updateQuote($("#input-quote").val());
    return false;
  })
});
