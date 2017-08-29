// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

// If age is less than 18
if(age < 18) {
	console.log("Sorry kid. Come back when you turn 18.");
}

else if(age < 21) {
	console.log("Come on in but no drinking!");
}

else {
	console.log("Enjoy yourself and have a drink on the house!");
}


