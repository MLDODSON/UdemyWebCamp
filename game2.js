// Create a secret number
var secretNumber = 300;

// ask user to guess a number
var stringGuess = prompt("Guess this big dude's weight."); 
var guess = Number(stringGuess);

//check if guess is right
if(guess === secretNumber) {
	alert("Damn! You guessed right!");
}
//Check if guess is too high
else if(guess > secretNumber) {
	alert("I know I'm fat but nope, try again!");
}

//Check if guess is too low
else {
	alert("I wish ha ha! Too low! Try again homey!");
}

