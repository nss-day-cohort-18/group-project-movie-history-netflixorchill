"use strict";

let cardTemplate = require("../templates/card-template.hbs");
let key = '2065b4d356548d79a5905b6401847709';
let Tmdb = {};
let db = require("./db-interaction.js");
let user = require('./firebase/user.js');
let main = require("./main.js");

/* Search TMDB Database */
Tmdb.searchTMDB = function(){
	let titleSearch = $("#title-search").val();
	return new Promise( (resolve, reject) => {
		$.ajax({
			method: 'GET',
			url: `https://api.themoviedb.org/3/search/movie?query=${titleSearch}&api_key=${key}`
		}).done( (data) => {
			resolve(data);
		});
	});
};

/* Print each Card to Dom using HandleBars */
Tmdb.tmdbPrint = function(data){
	
	console.log("this is called", data);

	let newDiv = document.createElement("div");
	newDiv.innerHTML = cardTemplate(data);
	$("#card-div").append(newDiv);
	$(".add-movie").click(Tmdb.findTMDB);

};

/* Clear each Card Every Search */
Tmdb.tmdbClear = function(){
	$("#card-div").empty();
};

let divID;
let titleGrab;
let yearGrab;
let plotGrab;
let posterPath; 

/* Find ID to add to DB for each Card */
Tmdb.findTMDB = function() {
	divID = $(event.target).closest('div').attr('id').slice(5);

	let titleString = "title--" + divID;
	let yearString = "year--" + divID;
	let plotString = "plot--" + divID;

 	titleGrab = $("#" + titleString).text();
 	yearGrab = $("#" + yearString).text();
 	plotGrab = $("#" + plotString).text();

  	let movieObj = Tmdb.buildMovieObj();
  	db.addMovie(movieObj).then( function(movieId)
  	{
		console.log("Adding Movie with ID Firebase ID: ", movieId);
  	});

};


Tmdb.buildMovieObj = function() {
    let movieObj = {
      id: divID,
      title: titleGrab,
      release_date: yearGrab,
      overview: plotGrab,
      uid: user.getUser()
  };
  return movieObj;
};

module.exports = Tmdb;
