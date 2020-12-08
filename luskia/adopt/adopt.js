

function myFunction() {
  document.getElementById("myTextarea").select();
}

function clicked(e)
{
    if(!confirm('Please ensure your form is completed before submitting! If yes please continue!')) {
        e.preventDefault();
    }
}



function uncheck() {
  document.getElementById("homephone").checked = false;
}

$(document).ready(function() {
    var path = window.location.search.split("=")[1];
    var link = $("#from");
    if (path === "search"){
        link.html("Cat-alogue Search");
        link.attr("href","../../phoebe/search/search.html");
    }
});

function myMove() {
  var elem = document.getElementById("photo");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}

document.getElementById("para1").style.color = "blue"