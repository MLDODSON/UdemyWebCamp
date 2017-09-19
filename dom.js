// JavaScript Document
//dom methods
//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByTagName()
//document.querySelector()
//document.querySelectorAll()

document.getElementById("mine");
//This will highlight the ID named "mine" on your page.

document.getElementsByClassName("things");
//Will highlight on the page all classes named "things".

document.getElementsByTagName("h1");
//Will highlight any h1s

h1 = document.querySelector("h1");
//Will select the 1st h1.

stuff = document.querySelectorAll(".stuff");
//Will select everything in the class named "stuff".

document.querySelector("#mine");

document.querySelector("p");
document.querySelectorAll("p") [1];
//You can use this method when you want a certain thing of the same highlighted.

//Changing an elements style

//select

document.getElementsByTagName("h2");

//manipulate
// I want to change a few things in my document using the console so I did this:

var h2 = document.querySelector("h2");
h2.style
h2.style.color = "purple";
h2.style.border = "2px solid orange";
h2.style.fontSize = "36pt";

// I changed the color, gave a border and changed the font size of my h2.
//There is an easier way though.
// Rather than directly manipulating styleswith JS, we can define a CSS class and then toggle it on or off with JS.

//1st I would create a class. Then add it like this:

var h2 = document.querySelector("h2");
h2.classList.add("favorite");

//changing text content

var p = document.querySelector("p");
p.innerHTML;
//"These are only a few of my <strong>favorite</strong> things."
p.innerHTML = "These are merely a few of my <strong>FAVORITE</strong> things.";
//"These are merely a few of my <strong>FAVORITE</strong> things."
document.querySelector("h1").textContent = "Just A Few Of My Favorite Things";
//"Just A Few Of My Favorite Things"
