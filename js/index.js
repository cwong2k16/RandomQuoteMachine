var text;
var author;
var together;

$(document).ready(function(){
  $("#new").click(function(){
    $(".text").fadeOut(2000, function(){
      $.getJSON("https://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en", function(a) {
        quote = a.quoteText;
        author = a.quoteAuthor;
        together = "";
        if(author === ""){
          author = "Unknown"
        }
        together = '"' + quote + '"'+" - " + author;
        $(".text").html(together);
        $(".text").fadeIn(2000);
      });
    });
  }); 
  $("#tweet").click(function(){
    var encodeTogether = encodeURI(together);
    window.open("https://twitter.com/intent/tweet?text=" + encodeTogether);
  });
});