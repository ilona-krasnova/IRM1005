$(document).ready(function() {
    var path = window.location.search.split("=")[1];
    var link = $("#from");
    if (path === "search"){
        link.html("Cat-alogue Search");
        link.attr("href","../../phoebe/search/search.html");
    }
});

$(document).ready(function(){
  $("#adopt").mouseenter(function(){
    $(".bio").animate({opacity: "0.2"});
  });
  $("#adopt").mouseleave(function(){
    $(".bio").animate({opacity: "1"});
  });
});

function adoptWindow(){
  setTimeout(function(){
    window.open("../../luskia/adopt/adopt.html?from=bio-08");}
  , 1000);
}
