// DOM Manipulation, Events

var button =  document.querySelector("button");
var paragraph = document.querySelector("p");

//SETUP CLICK LISTENER
button.addEventListener("click", changeText);
function changeText() {
	paragraph.textContent = "Someone Just Got Hit!";
}


