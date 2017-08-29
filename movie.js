var movies = [
	{
	 title: "Spider Man Homecoming",
	 hasWatched: true,
	 rating: 4.5 
	},
	{
	 title: "Tupac",
	 hasWatched: false,
	 rating: 2.8
	},
	{
	 title: "Guardians Of The Galaxy 2",
	 hasWatched: true,
	 rating: 5
	},
];

movies.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	    result += "\"" + movie.title + "\" - "; 
		result += movie.rating + " stars";
	console.log(result);	
});