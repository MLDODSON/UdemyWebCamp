// JavaScript Document

var secretNumber = 46;

var stringAge = prompt("Guess how old Glenny is today.");
var age = Number(stringAge);

if(age === secretNumber) {
	alert("WINNER, WINNER. CHICKEN DINNER!");
}

else if(age > secretNumber){
	alert("She's not that old. Guess again!");
}

else {
	alert("Are you serious? Guess again lol!");
}