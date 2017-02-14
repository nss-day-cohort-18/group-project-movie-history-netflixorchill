"use strict";


//***********************************
//Object to hold multipule functions
//***********************************
var key = 'b473a36';
let Omdb = {key};


//*********
//Functions
//*********

//Get input value from Search bar and send the search string
//to OMDB
Omdb.searchOMDB = function(resolve, reject){
	let titleSearch = $("#title-search").val();
	return new Promise( (resolve) => {
		$.ajax({
			method: 'GET',
			url: `http://www.omdbapi.com/?r=json&s=${titleSearch}`
		}).done( (data) => {
			resolve(data);
		}).reject( (data) => {
			console.log(titleSearch, data);
		});
	});
};

Omdb.getPoster = function(data)
{
	return new Promise( (resolve, reject) => {
		var id = data.id;
		$.ajax({
			method: 'GET',
			url: `http://img.omdbapi.com/?i=${id}&apikey=${Omdb.key}`
		}).done( (data) => {
			resolve(data);
		}).reject( (data) => {
			console.log(data);
		});
	});
};





module.exports = Omdb;