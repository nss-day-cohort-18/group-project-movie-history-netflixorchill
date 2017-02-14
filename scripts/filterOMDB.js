"use strict";


//***********************************
//Object to hold multipule functions
//***********************************
let Omdb = {};


//*********
//Functions
//*********

//Get input value from Search bar and send the search string
//to
Omdb.searchOMDB = function(resolve, reject){
	let titleSearch = $("#title-search").val();
	return new Promise((resolve)=>{
		$.ajax(
		{
			method: 'GET',
			url: `http://www.omdbapi.com/?r=json&s=${titleSearch}`
		}).done( (data) =>
		{
			resolve(data);
		}).reject((data)=>{
			console.log(titleSearch, data);
		});
	});
};








module.exports = Omdb;