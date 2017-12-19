// DOM Manipulation, Events
/*
var button =  document.querySelector("button");
var paragraph = document.querySelector("p");

//SETUP CLICK LISTENER
button.addEventListener("click", changeText);
function changeText() {
	paragraph.textContent = "Someone Just Got Hit!";
}
*/

//Color Changer Exercise
/*
var button =  document.querySelector("button");
var isGreen = false;

button.addEventListener("click", function() {
	if(isGreen) {
      document.body.style.background = "white";
	} else {
      document.body.style.background = "green";
	}
	isGreen = !isGreen;
});
*/

//Or do it this way. Both work.

var button =  document.querySelector("button");
//var isGreen = false;

button.addEventListener("click", function() {
      document.body.classList.toggle("green");
});