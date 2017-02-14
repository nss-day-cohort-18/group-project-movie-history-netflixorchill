"use strict";


//***********************************
//Object to hold multipule functions
//***********************************
let Omdb = {};


//*********
//Functions
//*********

//Search
Omdb.searchOMDB = function(){
	let titleSearch = $("#title-search").val();
	return new Promise((resolve)=>{
		$.ajax({
			url: `https://api.themoviedb.org/3/search/movie?query=batman&api_key=ef211d0a57225ce857a7822b3a8ed69f`
		}).done((data)=>{
			resolve(data);
		});
	});
};










module.exports = Omdb;