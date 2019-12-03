function Hello(){

var user = prompt("What is your name");
document.getElementById('here').innerHTML = "Hello " + user + " Welcome to my website";


}

function who(){

var user = prompt("who is the best?");
document.getElementById('here').innerHTML = " the best is " + user;

}

function Sum(){
	parseInt()

	var numb1 = parseInt(document.getElementById("number1").value);
	var numb2 =  parseInt(document.getElementById("number2").value);
	var total = numb1 + numb2;

	document.getElementById('total').innerHTML = total;



}


function average(){
	parseInt()

	var Grade1 = parseInt(document.getElementById("Grade1").value);
	var Grade2 =  parseInt(document.getElementById("Grade2").value);
	var Grade3 =  parseInt(document.getElementById("Grade3").value);
	var Grades = Grade1 + Grade2 + Grade3;
	var result = Grades/3

	if (result < 6) {
		document.getElementById('Status').innerHTML = "Your Failed";
	} else{
		document.getElementById('Status').innerHTML = "Your are approved";

	}

	document.getElementById('totalaverage').innerHTML = "Your Avarege is" + result;



}



function Rain (){
	var rain = prompt("Is it rainning? Yes:1, No:0");
	if (rain == 0) {
		console.log ("Do not take your umbrella");
	} else	{ console.log("Take your umbrella")}
}


function subtract(){
	parseInt()

	var sub1 = parseInt(document.getElementById("sub1").value);
	var sub2 =  parseInt(document.getElementById("sub2").value);
	var total = (sub1 - sub2);

	document.getElementById('totalsubtract').innerHTML = total;
	}




function multiply(){
	parseInt()

	var lin1 = parseInt(document.getElementById("lin1").value);
	var lin2 =  parseInt(document.getElementById("lin2").value);
	var total = (lin1 * lin2);

	document.getElementById('totalmultiply').innerHTML = total;
	}







