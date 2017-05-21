// JavaScript Document

//this function capitalizes the first char in a string:
function capitalize(str) {
	return str.charAt(0) .toUpperCase() + str.slice(1);
}

var city = "chicago";
var capital = capitalize(city);

//We can capture the returned value in a variable.

function test(x,y) {
	return y - x;
}

test(10, 40);

function test(x) {
	return x*2;
	console.log(x);
	return x/2;
}

test(40);

