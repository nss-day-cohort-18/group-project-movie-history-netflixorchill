"use strict";

//*******************
// Require Variables
//*******************
let db = require("./db-interaction"),
	// templates = require("./db-interatction"),
	Omdb = require('./filterOMDB.js'),
	user = require("./user");
	user.logOut();


  $(document).ready(function(){
    $('.modal').modal();
  });
       

// REST API///

function loadMoviesToDOM() {
	let currentUser = user.getUser();
	db.getMovies(currentUser)
	.then(function(movieData){
		console.log("get data", movieData);
		var idArray = Object.keys(movieData);
		idArray.forEach(function(key){
			movieData[key].id = key;
		});
		console.log("movie object with id", movieData);
		// templates.makeMovieList(movieData);
	});
}

// loadMoviesTODOM();

// Send newMovie data to the database and then reload the DOM with updated movie data

// $.document.on("click", " ", function() {
// 	console.log("click save movie to list");
// 	db.addMovie(movieObj)
// 	.then(function(){
// 		loadMoviesToDOM();
// 	});
// });

// //get movies from db and populate list form for editing
// $(document).on("click", " ", function() {

// });

// //Remove movie and reload DOM
// $(document).on("click"," ", function (){
// 	console.log("deleted movie", $(this).data(" "));
// 	let movieID = $(this).data(" ");
// 	db.deleteMovie(movieID)
// 	.then(function(){
// 		loadMoviesTODOM();
// 	});
// });

// //Build movie list obj from form data
// function buildMovieListObj() {
// 	let movieListObj = {
// 		title: valuepair.val(),
// 		release_date: valuepair.valu(),
// 		poster_path: valuepair.val(),
// 		overview: value pair.val(),
// 	};
// 	return movieListObj;
// }

// // load movie list form
// $("#add-movie").click(function(){
// 	console.log("added movie to list");
// 	var movieForm = templates.movieForm()
// 	.then(function(movieForm){
// 		$("form--name").html(movieListForm);
// 	});
// });

//***************
//EventListeners
//***************

//OMDb Search Button
$("#submit-omdb").click(Omdb.searchOMDB().then(function(data){
	console.log(data);
}));








