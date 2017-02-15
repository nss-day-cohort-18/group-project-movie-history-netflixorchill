"use strict";
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db


// ****************************************
// DB interaction using Firebase REST API
// ****************************************

function getMovies(user) {
	return new Promise (function(resolve, reject) {
		$.ajax({
			url: `https://moviehistory-e4b18.firebaseio.com/songs.json?orderBy="uid"&equalTo="${user}"`
		}).done(function(movieData){
			resolve(movieData);
		}).fail( function(error){
			reject(error);
		});
	});
}

function addMovie(movieListObject) {
	console.log("addMovie", movieListObject);
	return new Promise ( function(resolve, reject){
		$.ajax({
			url: 'https://moviehistory-e4b18.firebaseio.com/movies.json',
			type: 'POST',
			data: JSON.stringify(movieListObject),
			dataType: 'json'
		}).done(function(movieId){
			resolve(movieId);
		});
	});
}

function deleteMovie(movieId) {
	return new Promise( function(resolve, reject){
		$.ajax({
			url: `https://moviehistory-e4b18.firebaseio.com/movies/${movieId}.json`,
			method: 'DELETE'
		}).done( function(){
			resolve();
		});
	});
}

function getMovie(movieId) {
	return new Promise( function(resolve, reject){
		$.ajax({
			url: `https://moviehistory-e4b18.firebaseio.com/movies/${movieId}.json`
		}).done( function(movieData){
			resolve(movieData);
		}).fail( function(error){
			reject(error);
		});
	});
}


function editMovie( movieListObject, movieId) {
	return new Promise( function(resolve, reject){
		$.ajax({
			url: `https://moviehistory-e4b18.firebaseio.com/movies/${movieId}.json`,
			type: 'PUT',
			data: JSON.stringify(movieListObject)
		}).done( function(data){
			resolve(data);
		});
	});
}

module.exports = {
	getMovies,
	addMovie,
	getMovie,
	deleteMovie,
	editMovie
};
