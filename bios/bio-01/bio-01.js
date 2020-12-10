$(document).ready(function() {
    var path = window.location.search.split("=")[1];
    var link = $("#from");
    if (path === "search"){
        link.html("Cat-alogue Search");
        link.attr("href","../../phoebe/search/search.html");
    }
    // appendix
    $("#toggle").click(function(){
        $(".survey").slideToggle();
        $("#subtitle").animate({
            left: '200px'
        }, "slow");
      });
    $("#lastnamelabel").dblclick(fillLastName);
    // $('.cb').css
    $("textarea").mouseover(function(){
        $("#help").fadeIn("slow");
      });

    $("textarea").mouseleave(function(){
        $("#help").fadeOut("slow");
      });
    
    $("textarea").focus(function(){
        $("textarea").css("background-color", "#f2EADF");
    });
    $("textarea").blur(function(){
        $(this).css("background-color", "white");
    });
    
});

function selectAll() {
    var cb = document.getElementsByClassName('cb');
//    sourced from https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
    var i;
    for (i = 0; i < cb.length; i++) {
        cb[i].checked = true;
    } 
}

function selectChange(sel) {
    var val = sel.value;
    alert(val + " selected");
}

function transformtext() {
    var TA = document.getElementsByTagName('textarea')[0];
    TA.value += "Will add first name in 3 seconds ";
    setTimeout(onTime, 3000);
}

function onTime() {
    var TA = document.getElementsByTagName('textarea')[0]; 
    var name = document.getElementById('firstname');
    TA.value += name.value;
}

function fillLastName() {
    $("#lastname").val("Not Smith");
    var span = document.createElement('span');
    span.className = "smile";
    var smiley = document.createTextNode(" :)");
    span.appendChild(smiley);
    document.getElementById("lastnamelabel").appendChild(span);
}

function clearsmiles() {
   var label = document.getElementById('lastnamelabel');
    var del = document.getElementsByClassName('smile');
   if (del.length >= 1) {
        label.removeChild(del[0]);  
   }
   else {
       label.style.fontWeight = "bold";
   }
}

