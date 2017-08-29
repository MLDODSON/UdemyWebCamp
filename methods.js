// js methods

var obj = {
	name: "Mike",
	age: 49,
	isCool: true,
	friends: ["Fred", "Bruce"],
	add: function(x,y) {
		return x + y;
	}
};

var person = {
	name: "Glenny",
	age: 46,
	isLovely: true,
	cousins: ["Darda", "Georgina", "Gladys"],
	favoriteFoods: ["rice", "chicken", "tuna"],
	multiply: function(a,b) {
		return a * b;
	}
};

// Methods are a good way to group things and make the code cleaner


var marieGreet = {};
marieGreet.speak = function() {
	return "What's upper?";
};

var glennyGreet = {};
glennyGreet.speak = function() {
	return "How you doing?";
};

