//while loop from 0 to 20
var count = 0;

while(count < 21) {
	console.log("Count is: " + count);
	count++;
}

//while loop from 1 to 25
var count = 1;

while(count <= 25) {
	console.log("Count is: " + count);
	count++;
}

//while loop counting in 2s 2 to 30
var count = 2;

while(count <= 30) {
	console.log("Count is: " + count);
	count+=2;
}

//while loop counting in 3s 3 to 36
var count = 3;

while(count <= 36) {
	console.log("Count is: " + count);
	count+=3;
}

//while loop to print each charecter in a string
var str = "Michael";
var count = 0;

while(count < str.length) {
	console.log(str[count]);
	count++;
}

var str = "Doc Funkenstien";
var count = 0;

while(count < str.length) {
	console.log(str[count]);
	count++;
}

var num = 1;

while(num <= 10) {
	console.log(num);
	num += 2;
}

var number = 2;

while(number <= 16) {
	console.log(number);
	number += 2;
}

var num = 1;

while(num <= 20) {
	if(num % 4 === 0) {
		console.log(num);
	}
	num ++;
}

var num = 100;

while(num < 150) {
	console.log(num + 1);
	num --;
}

//print all numbers between -10 and 19
var count = -10;

while(count <= 19) {
	console.log("Count is: " + count);
	count++;
}

//print all even numbers between 10 and 40
var count = 10;

while(count <= 40) {
	console.log("Count is: " + count);
	count+= 2;
}

//print all odd numbers between 300 and 333
var count = 300;

while(count <= 333) {
	if(count % 2 !== 0) {
		console.log(count);
	}
	count+= 1;
}

//print all numbers divisible by 5 and 3 between 5 and 50
var count = 5;

while(count <= 50) {
	if(count % 5 === 0 && count % 3 === 0) {
		console.log(count);
	}
	count+= 1;
}

//print all numbers divisible by 10 between 0 and 200
var count = 0;

while(count <= 200) {
	if(count % 10 === 0) {
		console.log(count);
	}
	count++;
}

//print all numbers between -30 and 10
var count = -30;

while(count < 11) {
	console.log(count);
	count++;
}