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
			url: `https://api.themoviedb.org/3/search/movie?query=batman&api_key=2065b4d356548d79a5905b6401847709`
		}).done((data)=>{
			resolve(data);
		});
	});
};










module.exports = Omdb;