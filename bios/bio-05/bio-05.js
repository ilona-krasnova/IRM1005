$(document).ready(function() {
    var path = window.location.search.split("=")[1];
    var link = $("#from");
    if (path === "search"){
        link.html("Cat-alogue Search");
        link.attr("href","../../phoebe/search/search.html");
    }
});
