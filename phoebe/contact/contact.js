
$(document).ready(
	function ()
	{
    $(".comments").css({
      "font-family" : "CooperHewitt",
      "background-color" : "rgb(217, 142, 126)" ,
      "padding" : "10px"});
  }
);

function updateComment()
{
  var commentEdit = prompt("Please update your comment.");
  if (commentEdit != null) {
    document.getElementById("firstComment").innerHTML = "said:" + commentEdit;
  }
}

function deleteComment(){
  var parent = document.getElementById("commentSection");
  var child = document.getElementById("fcom");
  parent.removeChild(child);
}

function addComment()
{
  alert("Thank you for your feedback!");

  var name = document.getElementById("name").value;
  var feedback = document.getElementById("feedback").value;

  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "comments")

  var client = document.createElement("h3");
  var clientName = document.createTextNode(name);

  var newComment = document.createElement("p");
  var content = document.createTextNode("said: "+feedback);

  var upButt = document.createElement("button");
  upButt.innerText = "Update";
  var delButt = document.createElement("button");
  delButt.innerText = "Delete";

  newComment.appendChild(content);
  client.appendChild(clientName);
  newDiv.appendChild(client);
  newDiv.appendChild(newComment);
  newDiv.appendChild(upButt);
  newDiv.appendChild(delButt);
  document.getElementById("commentSection").appendChild(newDiv);
  }

//var newComment = document.createElement("p");
//var content = document.createTextNode("said: "+feedback);
//newComment.appendChild(content);
//document.getElementById("comments").appendChild(newComment);

//var client = document.createElement("h3");
//var clientName = document.createTextNode(name);
//client.appendChild(clientName);
//document.getElementById("comments").appendChild(client);
