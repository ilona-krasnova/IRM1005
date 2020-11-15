var current = 5;
var profiles = [];

$(document).ready(function() {
    var allData = readJson();
     profiles = allData.profiles;
    createPal(profiles[current]);
    $("#next").click(unmatchProfile);
    $("#like").click(matchProfile);

});

function readJson() {
    // $.getJSON("../json/database.json", function(json) {
    //     console.log(json); // this will show the info in firebug console
    // });
    // Browser would not allow to read json file from file:// Using jQuery to load json
    // used solution from https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript
    var data = JSON.parse(json);
    return data;
}

function readSelectedFromCookie() {
    var cookie = $.cookie('match');
    if (!cookie) {
        return [];
    }
    return JSON.parse(cookie);
}

function addSelectedToCookie(bioNo) {
    var selected = readSelectedFromCookie();
    if (selected.includes(bioNo)) {
        return;
    }
    // console.log(selected)
    selected.push(bioNo);
    writeSelectedToCookie(selected);
    console.log(selected)

}

function removeSelectedFromCookie(bioNo) {
    console.log("removing bioNo", bioNo);
    var selected = readSelectedFromCookie();
    console.log("selected", selected);
    if (!selected.includes(bioNo)) {
        return;
    }
    var result = [];
    for (var i = 0; i < selected.length; i++) {
        console.log("selected[i]", selected[i]);
        // sourced from https://www.w3schools.com/jsref/jsref_includes_array.asp
        if (selected[i] !== bioNo) {
            result.push(selected[i]);
            console.log("result", result);
        }
    }
    console.log("final", result);
    writeSelectedToCookie(result);
}

function matchProfile() {
    addSelectedToCookie(profiles[current].bioNo);
    nextProfile();
}

function unmatchProfile() {
    removeSelectedFromCookie(profiles[current].bioNo);
    nextProfile();
}

function writeSelectedToCookie(selected) {
    // sourced from https://stackoverflow.com/questions/1458724/how-do-i-set-unset-a-cookie-with-jquery
    $.cookie('match', JSON.stringify(selected), { path: '/' });
}

function nextProfile() {
    current++;
    if (current >= profiles.length) {
        current = 0;
    }
    createPal(profiles[current]);
}

function createPal(profile){
    // sourced from https://www.w3schools.com/jsref/met_node_clonenode.asp
    $("#petpal h1").html(profile.name);
    $("#petpal img").attr("src", "../bios/"+ profile.bioNo +"/img/"+ profile.bioNo +".jpg");
    $("#age").html(profile.age); 
    $("#sex").html(profile.sex);   
    //sourced from https://stackoverflow.com/questions/10270351/how-to-write-an-inline-if-statement-in-javascript
    $("#children").html(profile.children ? "&#9745" : "&#9744");
    $("#cats").html(profile.cats ? "&#9745" : "&#9744");
    $("#dogs").html(profile.dogs ? "&#9745" : "&#9744");
    $("#activity").html(profile.activity);
    $("#size").html(profile.size);  
    $("#admissionDate").html(profile.admissionDate); 
    $("#bio").html(profile.bio);

    var selected = readSelectedFromCookie();
    if (selected.includes(profile.bioNo)) {
        console.log("heart");
        $("#petpal h1").append('&nbsp;<i class="fas fa-heart"></i>');
        // console.log($("#petpal h1"));
        $("#like").html("Next");
        $("#next").html("Not for me");
    }
    else {
        $("#like").html("Like! <i class='fas fa-heart'></i>");
        $("#next").html("Next");
    }
}