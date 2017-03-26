// JavaScript Document

// Create a secret number.
var secretNumber = 6;

// Ask user to guess it.
var stringGuess = prompt("Guess a number please.");
var guess = Number(stringGuess);

// Check if the guess number is right. 
if(guess === secretNumber) {
	alert("YOU GOT IT RIGHT!");
}

// Check if guess is too high or too lower.
else if(guess > secretNumber){
	alert("Too high. Guess again!")
}

else {
	alert("Too low. Guess again!");
}

