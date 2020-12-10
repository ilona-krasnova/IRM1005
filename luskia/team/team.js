

$(document).ready(function(){
  $("p").dblclick(function(){
    $(this).hide();
  });
});

/* <p>Click the "Try it" button to check the radio button.</p>

<button onclick="myFunction()">Try it</button> */


function myFunction1() {
  var x = document.getElementById("myRadio");
  x.checked = true;
}

function myFunction2() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "radio");
  document.body.appendChild(x);
}

function myFunction3() {
  document.getElementById("myTextarea").select();
}

function myFunction4() {

  var checkBox = document.getElementById("myCheck");
  
  var text = document.getElementById("text");

  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
  //not working for some reason//
}

$(document).ready(function(){
  $("pgtwo").mouseover(function(){
    $("pgtwo").css("background-color", "yellow");
  });
  $("pgtwo").mouseout(function(){
    $("pgtwo").css("background-color", "lightgray");
  });
});

$(document).ready(function(){
  $("input").focus(function(){
    $("span").css("display", "inline").fadeOut(2000);
  });
});
// </script>
// <style>
// span {
//   display: none;
// }
// </style>
// </head>
// <body>

// <input>

// <span>Nice to meet you!</span>
// <p>Click in the input field to get focus.</p>
// </input>
