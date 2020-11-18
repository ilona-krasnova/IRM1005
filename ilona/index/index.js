var current = 0;
var profiles = [];
var allData;

$(document).ready(function() {
    allData = readJson();
    filterChange();
    $("#next").click(nextProfile);
    $("#prev").click(prevProfile);
    $("#like").click(matchProfile);
    $("input[type=radio]").change(filterChange);
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

function filterProfiles(species) {
    var result = [];
    if (species === "either") {
        profiles = allData.profiles;
        return;
    }
    console.log("species", species);
    for (var i = 0; i < allData.profiles.length; i++) {
        console.log("allData.profiles", allData.profiles[i].species);
        // sourced from https://www.w3schools.com/jsref/jsref_includes_array.asp
        if (allData.profiles[i].species === species) {
            result.push(allData.profiles[i]);
        }
    }
    profiles = result;
    current = 0;
}

function filterChange() {
    var value = getFilterValue();
    console.log("value", value);
    filterProfiles(value);
    createPal(profiles[current]);

    // $("#count").html("(" + profiles.length + " profiles)")
    document.getElementById("count").innerHTML = "(" + profiles.length + " profiles)";
}

function getFilterValue() {
    if ($("input[type=radio][value=cat]").get(0).checked) {
        return "cat";
    }
    if ($("input[type=radio][value=dog]").get(0).checked) {
        return "dog";
    }
    return "either";
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

}

function removeSelectedFromCookie(bioNo) {
    var selected = readSelectedFromCookie();
    if (!selected.includes(bioNo)) {
        return;
    }
    var result = [];
    for (var i = 0; i < selected.length; i++) {
        // sourced from https://www.w3schools.com/jsref/jsref_includes_array.asp
        if (selected[i] !== bioNo) {
            result.push(selected[i]);
        }
    }
    writeSelectedToCookie(result);
}


function matchProfile() {
    var selected = readSelectedFromCookie();
    if (selected.includes(profiles[current].bioNo)) {
        removeSelectedFromCookie(profiles[current].bioNo);
    }
    else {
        addSelectedToCookie(profiles[current].bioNo);
    }
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

function prevProfile() {
    current--;
    if (current < 0) {
        current = profiles.length - 1;
    }
    createPal(profiles[current]);
}

function createPal(profile){
    // sourced from https://www.w3schools.com/jsref/met_node_clonenode.asp
    $("#petpal h1").html(profile.name);
    $("#petpal img").attr("src", "../../bios/"+ profile.bioNo +"/img/"+ profile.bioNo +".jpg");
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
        // $("#petpal h1").append('&nbsp;<i class="fas fa-heart"></i>');
        document.getElementById("title").innerHTML += '&nbsp;<i class="fas fa-heart"></i>';
        $("#like").html("Not for me");
    }
    else {
        $("#like").html("Like! <i class='fas fa-heart'></i>");
    }
    $("#mymatches").html("My matches (" + selected.length + ")");
}