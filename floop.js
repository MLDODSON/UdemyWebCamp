//for loops have 3 parts

for(var count = 0; count < 11; count++) {
	console.log(count);
}
//This will print out 0 - 10

for(var count = 1; count <= 25; count++) {
	console.log(count);
}
//This prints out 1 -25

var str = "Michael Dodson";

for(var i = 0; i < str.length; i++) {
	console.log(str[i]);
}
//This will print out all the characters of this name

for(var i = 0; i < 16; i+=8) {
	console.log(i);
}
//This will print out 0 and 8

var str = "ahceclwlxo";

for(var i = 1; i < str.length; i+=2) {
	console.log(str[i]);
}
//this will spell hello

var str = "aGiloemnxnoy";

for(var i = 1; i < str.length; i+=2) {
	console.log(str[i]);
}
//this will spell glenny
//In both these examples, every other letter is printed in the council

var str = "aJveobne";

for(var i = 1; i < str.length; i+=3) {
	console.log(str[i]);
}
//This will spell Joe
//In this example every third letter

for(var count = -10; count < 20; count++) {
	console.log(count);
}
//This will print out -10 - 19

for(var count = 10; count <=40; count+=2) {
	console.log(count);
}
//This will print all even numbers between 10 and 40

for(var i = 300; i <= 333; i++) {
	if(i % 2 !== 0) {	
	console.log(i);
	}
}
//This will print all odd numbers between 300 and 333

for(var i = 5; i <= 50; i++) {
	if(i % 5 === 0 && i % 3 === 0) {	
	console.log(i);
	}
}
//This will print all numbers divisible by 5 and 3 between 5 and 50

for(var m = 0; m <= 50; m+=2) {
	console.log(m);
}
//This will print even numbers 0 to 50

for(var love = 1; love<=10; love++) {
	document.write("I love my wife! <br>");
}
//Will print I love my wife 10 times 

for(var cake = 1; cake<=16; cake+=2) {
	console.log(cake);
}

for(var y = -5; y<=15; y++) {
	console.log(y);
}


