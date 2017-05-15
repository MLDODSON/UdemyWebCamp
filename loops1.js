// JavaScript Document

// DRY: Don't Repeat Yourself

// while loop example: Printing numbers from 1 - 50.

var count = 1;

while(count < 51) {
	console.log("count is: " + count);
	count++;
}

//other examples

var count = 5;

while(count <= 20) {
	console.log("count is: " + count);
	count++;
}

//another

var count = 5;

while(count <= 100) {
	console.log("count is: " + count);
	count+=2;
}

//this is using characters

var str = "chocolate";

var count = 0;

while(count < str.length) {
	console.log(str[count]);
	count++;
}

var number = 3;

while(number <= 25) {
	console.log(number);
	number += 3;
}

var number = 1;

while(number <= 20) {
	if(number % 4 === 0){
		console.log(number);
	}
	number ++;
}

var number = 100;

while(number < 150) {
	console.log(number + 1);
	number --;
}