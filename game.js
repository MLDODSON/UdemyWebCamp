// Create a secret number
var secretNumber = 11;

// ask user to guess a number
var stringGuess = prompt("Guess a number please."); 
var guess = Number(stringGuess);

//check if guess is right
if(guess === secretNumber) {
	alert("You got it right baby!");
}
//Check if guess is too high
else if(guess > secretNumber) {
	alert("Wrong Homey! Too high! Try again!");
}

//Check if guess is too low
else {
	alert("Wrong Homey! Too low! Try again!");
}

