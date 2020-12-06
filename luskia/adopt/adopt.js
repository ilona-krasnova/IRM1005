

function myFunction() {
  document.getElementById("myTextarea").select();
}

function clicked(e)
{
    if(!confirm('Please ensure your form is completed before submitting! If yes please continue!')) {
        e.preventDefault();
    }
}

function createOurTextarea() {
    var ourElement = document.createElement("TEXTAREA");
    var ourElementText = document.createTextNode("This is our TextArea!");
    ourElement.appendChild(ourElementText);
    document.body.appendChild(ourElement);
}



function uncheck() {
  document.getElementById("homephone").checked = false;
}

