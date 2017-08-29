//isEven problem
//return true if number is even
//return false if otherwise

//function isEven(num) {
	//if(num % 2 === 0) {
		//return true;
	//} else {
	  //return false;
	//}
//}

//This is a shorter solution 
function isEven(num) {
	return num % 2 === 0;
}

//This is for odd numbers
function isOdd(num) {
	return num % 2 !== 0;
}

function factorial(num) {
	//With this we want to define a result with a variable
	var result = 1;
	//calculate the factorial and store a value in result
	for(var x = 2; x <= num; x++) {
		result = result * x;
	}
	//return the result variable
	return result;
}

//factorial(5) 5x4x3x2x1

//kebabToSnake. Replace "C"s with "M"s.

function kebabToSnake(str) {
	var newStr = str.replace(/C/g, "M");
	return newStr;
}



