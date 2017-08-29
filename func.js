//Basic Function
function dinnerMenu () {
	console.log("Steak");
	console.log("Baked Potatoes");
	console.log("Cherry Pie");
}

function songLoop () {
	console.log("Keep on");
	console.log("with the force don't stop");
	console.log("Don't stop till you get enough");
}
//To call these functions use dinnerMenu and songLoop

//Arguments are functions that take inputs

function sayHi (name) {
	console.log("What's up " + name + "?");
}

function area (length, width) {
	console.log(length * width);
}

function greet (person1, person2, person3) {
	console.log("How are you " + person1 + "?");
	console.log("How are you " + person2 + "?");
	console.log("How are you " + person3 + "?");
}

function favteams (team1, team2, team3, team4) {
	console.log("My favorite football team is the " + team1 + ".");
	console.log("My favorite baseball team is the " + team2 + ".");
	console.log("My favorite baskestball team is the " + team3 + ".");
	console.log("My favorite hockey team is the " + team4 + ".");
}

//Return Keyword
function multiply (x) {
	return x*x;
}

function add (x,y) {
    return x+y;
}

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "chicago";
var capital = capitalize(city);

