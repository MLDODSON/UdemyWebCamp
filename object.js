var someObject = {};

//Which is valid:

someObject._name = "Othelo";
//This is valid.

someObject.age = 6;
//This is valid.

var prop = "color";
someObject[prop] = "purple";
//This is valid.

someObject.123 = true;
//This is not valid. You can not use a dot notation starting with a number.

var someObject = {
	friends: [
		{name: "Malcolm"},
		{name: "Leroy"},
		{name: "Candice"}
	],
	color: "cardinal red",
	isEvil: true
};

//Write code to retrieve items one layer at a time.

var someObject = {
	friends: [
		{name: "Malcolm"},
		{name: "Leroy"},
		{name: "Candice"}
	],
	color: [
		{type: "cardinal red"},
		{type: "ucla blue"},
		{type: "raider black"}
	],
};