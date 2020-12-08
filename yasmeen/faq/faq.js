function hideShow(ele, chevron)
		{
			if (ele.style.display === "block") 
   			{
 				ele.style.display = "none";
 				document.getElementById(chevron).className = "fa fa-chevron-down";
 			} 
   		 	else 	
   		 	{
    	 		ele.style.display = "block";
    	 		document.getElementById(chevron).className = "fa fa-chevron-up";
   			}
		}


function appendNames() {

	var firstname = document.forms["Form1"]["textInput1"].value;
	var lastname = document.forms["Form1"]["textInput2"].value;
	window.alert(firstname+" "+lastname);

}


