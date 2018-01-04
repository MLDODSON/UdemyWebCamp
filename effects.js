//fade out effect
/*
$("button").on("click", function() {
 $("div").fadeOut(1000, function () {
	$(this).remove(); 
 });
});
*/


//fade in effect
/*
$("button").on("click", function() {
 $("div").fadeIn(1000, function () {
	//$(this).remove(); 
 });
});
*/


//fade toggle effect
/*
$("button").on("click", function() {
 $("div").fadeToggle(1000);
});
*/

//slide down effect
/*
$("button").on("click", function() {
 $("div").slideDown(1000);
});
*/

//slide up effect. get rid of display none in css
/*
$("button").on("click", function() {
 $("div").slideUp(1000);
});
*/

//slide toggle effect
$("button").on("click", function() {
 $("div").slideToggle(1000, function() {
	 $(this).remove();
 });
});
