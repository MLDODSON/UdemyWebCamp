// JavaScript Document

// Create a secret number.
var secretNumber = 325;

// Ask user to guess it.
var stringGuess = prompt("Guess how much this big dude weights.");
var guess = Number(stringGuess);

// Check if the guess number is right. 
if(guess === secretNumber) {
	alert("YOU GOT IT RIGHT!");
}

// Check if guess is too high or too lower.
else if(guess > secretNumber){
	alert("He's big but not that huge. Guess again!");
}

else {
	alert("Are you serious? Guess again!");
}

