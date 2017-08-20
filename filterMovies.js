/*Write a function that prints the whole list of movies ordered by:
title
score
isFavorite
Make sure it receives a parameter for indicatinf if sorting is going to be ascending or descending.

Write a function that prints the whole list of movies so it looks like:
<Title> starring <Actor1, Actor2, ... ActorN> has a score of <Score>
*/

var movies =[
{title: 'The Hitmans Bodyguard', starring:['Ryan Reynolds','Samuel L. Jackson'], isFavourite:true, score:8.5},
{title: 'Criminal', starring:['Kevin Costner','Ryan Reynolds'], isFavourite:false, score:6.5},
{title: 'Deadpool', starring:['Ryan Reynolds','Morena Baccarin'], isFavourite:false, score:9.5},
{title: 'The Other Guys', starring:['Will Ferrell','Mark Wahlberg'], isFavourite:false, score:6.7},
{title: 'National Security', starring:['Martin Lawrence','Steve Zahn'], isFavourite:false, score:5.6},
{title: 'Barely Lethal', starring:['Hailee Steinfeld','Jessica Alba'], isFavourite:false, score:5.4},
{title: 'Midnight Run', starring:['Robert De Niro','Charles Grodin'], isFavourite:true, score:7.5},
{title: '48 Hrs.', starring:['Eddie Murphy','Morena Baccarin'], isFavourite:true, score:6.9},
{title: 'The 51st State', starring:['Ryan Reynolds','Morena Baccarin'], isFavourite:false, score:6.5},
{title: 'Another 48 Hrs.', starring:['Ryan Reynolds','Morena Baccarin'], isFavourite:false, score:5.5},
];


function printSortedMovieList (movieList,sortType) {
	// get sorted movie list based on sort type and key value 
	function getSortedMovieList (movieList,sortType,sortBy) {
		var movieTitleList = [];
		movieList.sort(function(obj1, obj2) {
			var x = obj1[sortBy]; var y = obj2[sortBy];
			if(sortType === 'descending'){
				return ((y < x) ? -1 : ((y > x) ? 1 : 0));
			}
			return ((x < y) ? -1 : ((x > y) ? 1 : 0)); 
		});
		movieTitleList = fetchMovieTitles(movieList);
		return movieTitleList;
	}

	// get movie titles from sorted array
	function fetchMovieTitles(moviesList) {
		var movieTitles = [];
		for(var i=0; i<moviesList.length; i++) {
			movieTitles.push(moviesList[i].title);
		}
		return movieTitles;
	}
	console.log('-------------Sorted List based on score------------- \n'+ getSortedMovieList(movieList, sortType, 'score'));
	console.log('-------------Sorted List based on isFavourite------------- \n'+ getSortedMovieList(movieList, sortType, 'isFavourite'));
	console.log('-------------Sorted List based on title------------- \n'+ getSortedMovieList(movieList, sortType, 'title'));
}



/* disply the movies the format asked
<Title> starring <Actor1, Actor2, ... ActorN> has a score of <Score>*/

function displayMovies (movies) {
	var result = [];
	var movieDescription = '';
	for(var i=0; i<movies.length; i++) {
		movieDescription = '';
		movieDescription = movies[i].title + ' starring ';
		for(var j=0; j<movies[i].starring.length; j++){
			if(j+1 === movies[i].starring.length){
				movieDescription = movieDescription + movies[i].starring[j]
			}else{
				movieDescription = movieDescription + movies[i].starring[j] + ', ';
			}
			
		}
		movieDescription = movieDescription + ' has a score of ' + movies[i].score +'.\n';
		result.push(movieDescription);
	}
	return result.join('');
}

