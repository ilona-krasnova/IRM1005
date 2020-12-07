$(document).ready( function() {

	$("#01").hide();
	$("#02").hide();
  $("#03").hide();
  $("#04").hide();
  $("#05").hide();
  $("#06").hide();
  $("#07").hide();
  $("#08").hide();
});

function showAll(){
  $("#01").fadeIn();
  $("#02").fadeIn();
  $("#03").fadeIn();
  $("#04").fadeIn();
  $("#05").fadeIn();
  $("#06").fadeIn();
  $("#07").fadeIn();
  $("#08").fadeIn();
}

function showGWDog() {
  $("#03").fadeIn();
  $("#04").fadeIn();
  $("#05").fadeIn();
  $("#08").fadeIn();
}


function showGWCat() {
  $("#04").fadeIn();
  $("#07").fadeIn();
  $("#08").fadeIn();
}

function showGWkid() {
  $("#01").fadeIn();
  $("#04").fadeIn();
  $("#05").fadeIn();
  $("#06").fadeIn();
}

function showMale() {
  $("#02").fadeIn();
  $("#03").fadeIn();
  $("#06").fadeIn();
  $("#07").fadeIn();
  $("#08").fadeIn();
}

function showFemale() {
  $("#01").fadeIn();
  $("#04").fadeIn();
  $("#05").fadeIn();
}

function showCats() {
  $("#01").hide();
  $("#03").hide();
  $("#05").hide();
  $("#07").hide();
}
