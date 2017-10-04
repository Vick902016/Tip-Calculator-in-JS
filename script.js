/*Script.js */

//Custom Function
function calculateTip() {
	
	//store the data of inputs
	var billAmount = document.getElementById("billAmount").value;
	var serviceQuality = document.getElementById("serviceQuality").value;
	var numPeople = document.getElementById("totalPeople").value;
	
	
	//Quick Validation
	if(billAmount === "" || serviceQuality === 0) {
		window.alert("Please enter a value you need to get this up and running");
		return; //preventing the function from continuing
		
	}
	
	//Check if the input is empty or less than or equal to 1
	if(numPeople === "" || numPeople <=1) {
		numPeople = 1;
		document.getElementById("each").style.display = "none";
	}
	else {
		document.getElementById("each").style.display = "block";
	}
	
	//Do some Math!
	var total = (billAmount * serviceQuality) / numPeople; 
	total = Math.round(total * 100) / 100; //Round to a whole number
	total = total.toFixed(2); // Two decimal places
	
	//Display the tip !
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;
	
	
	
}



//Hide the Tip amount on load
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

//Clicking the button calls our custom function

document.getElementById("calculate").onclick = function() { calculateTip(); };



