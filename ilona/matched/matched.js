$(document).ready(function() {
    var selected = readSelectedFromCookie();
    console.log("selected", selected);
    var first = selected[0];
    var allData = readJson();
    console.log("allData", allData);
    var data = filterSelected(allData.profiles, selected)
    console.log("data", data);
    for (var i = 0; i < data.length; i++){
       createMatch(data[i]);
    }
    if (data.length === 0) {
        document.getElementById("didactic").innerHTML = "It looks like you haven't matched with any pets yet. ";
        var a = document.createElement("a");
        a.innerHTML = "Click here to return to the home page and meet your match!";
        a.href = "../index/index.html";
        a.style.textDecoration = "none";
        a.style.color = "#333333";
        document.getElementById("didactic").appendChild(a);
    }
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

function filterSelected(profiles, selectedIds) {
    // sourced from https://www.w3schools.com/js/js_loop_for.asp
    var result = [];
    for (var i = 0; i < profiles.length; i++) {
        // sourced from https://www.w3schools.com/jsref/jsref_includes_array.asp
        if (selectedIds.includes(profiles[i].bioNo)) {
            result.push(profiles[i]);
        }
    }
    return result;
}

function createMatch(profile){
    // sourced from https://www.w3schools.com/jsref/met_node_clonenode.asp
    $("#template h2").html(profile.name);
    var href = "../../bios/" + profile.bioNo + "/" + profile.bioNo + ".html?from=matched";
    $("#template a").attr("href", href);
    $("#template img").attr("src", "img/" + profile.bioNo + "p.jpg");
    $("#template p").html(profile.bio);

    var template = document.getElementById("template");
    console.log("template", template);
    var cln = template.cloneNode(true);
    cln.id = profile.bioNo;
    cln.style.display = "";
    document.getElementById("matches").appendChild(cln);
}