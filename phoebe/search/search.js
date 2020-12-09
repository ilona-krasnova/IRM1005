$(document).ready( function() {

	$(".all").hide();

});

function showAll(){
	$(".all").fadeOut();
  $("#01").fadeIn(1000);
  $("#02").fadeIn(1000);
  $("#03").fadeIn(1000);
  $("#04").fadeIn(1000);
  $("#05").fadeIn(1000);
  $("#06").fadeIn(1000);
  $("#07").fadeIn(1000);
  $("#08").fadeIn(1000);
}

function showGWDog() {
  $(".all").fadeOut();
	$("#03").fadeIn(1000);
  $("#04").fadeIn(1000);
  $("#05").fadeIn(1000);
  $("#08").fadeIn(1000);
}


function showGWCat() {
  $(".all").fadeOut();
	$("#04").fadeIn(1000);
  $("#07").fadeIn(1000);
  $("#08").fadeIn(1000);
}

function showGWkid() {
  $(".all").fadeOut();
	$("#01").fadeIn(1000);
  $("#04").fadeIn(1000);
  $("#05").fadeIn(1000);
  $("#06").fadeIn(1000);
}

function showMale() {
  $(".all").fadeOut();
	$("#02").fadeIn(1000);
  $("#03").fadeIn(1000);
  $("#06").fadeIn(1000);
  $("#07").fadeIn(1000);
  $("#08").fadeIn(1000);
}

function showFemale() {
  $(".all").fadeOut();
	$("#01").fadeIn(1000);
  $("#04").fadeIn(1000);
  $("#05").fadeIn(1000);
}

function showCat() {
  $(".all").fadeOut();
	$("#01").fadeIn(1000);
  $("#03").fadeIn(1000);
  $("#05").fadeIn(1000);
  $("#07").fadeIn(1000);
}

function showDog() {
  $(".all").fadeOut();
  $("#02").fadeIn(1000);
  $("#04").fadeIn(1000);
  $("#06").fadeIn(1000);
  $("#08").fadeIn(1000);
}

function showSize() {
	var sizVal = $("#size :selected").val();

	if (sizVal == "small") {
		$(".all").fadeOut();
	  $("#01").fadeIn(1000);
	  $("#03").fadeIn(1000);
	  $("#05").fadeIn(1000);
	  $("#07").fadeIn(1000);
	  $("#08").fadeIn(1000);
	}

	else if(sizVal == "medium") {
		$(".all").fadeOut();
		$("#04").fadeIn(1000);
	  $("#06").fadeIn(1000);
	}

	else if(sizVal == "large") {
		$(".all").fadeOut();
	  $("#02").fadeIn(1000);
	}
}

function showAge() {
	var ageVal = $("#age").val();

	if (ageVal == 11) {
		$(".all").fadeOut();
	  $("#01").fadeIn(1000);
	}

	else if(ageVal == 2) {
		$(".all").fadeOut();
		$("#02").fadeIn(1000);
	}

	else if(ageVal == 3) {
		$(".all").fadeOut();
		$("#03").fadeIn(1000);
	}

	else if(ageVal == 4) {
		$(".all").fadeOut();
		$("#04").fadeIn(1000);
	}

	else if(ageVal == 5) {
		$(".all").fadeOut();
		$("#05").fadeIn(1000);
	}

	else if(ageVal == 9) {
		$(".all").fadeOut();
		$("#06").fadeIn(1000);
	}

	else if(ageVal == 1) {
		$(".all").fadeOut();
		$("#07").fadeIn(1000);
		$("#08").fadeIn(1000);
	}
}

function showAct() {
	var actVal = $("#activity :selected").val();

	if (actVal == "low") {
		$(".all").fadeOut();
	  $("#02").fadeIn(1000);
		$("#07").fadeIn(1000);
	}

	else if(actVal == "med") {
		$(".all").fadeOut();
		$("#03").fadeIn(1000);
	  $("#04").fadeIn(1000);
	}

	else if(actVal == "high") {
		$(".all").fadeOut();
	  $("#01").fadeIn(1000);
		$("#05").fadeIn(1000);
		$("#06").fadeIn(1000);
	  $("#08").fadeIn(1000);
	}
}
