//var answer = prompt("Are we there yet?");

//while(answer !== "yes" && answer !== "hell yeah") {
	//var answer = prompt("Are we there yet?");
//}

//alert("Glad you made it! What to you so long?");

//if(answer === "yes") {
//	alert("Glad you made it! What to you so long?");
//}

// VERSION 2

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) {
	var answer = prompt("Are we there yet?");
}

alert("Glad you made it! What to you so long?");