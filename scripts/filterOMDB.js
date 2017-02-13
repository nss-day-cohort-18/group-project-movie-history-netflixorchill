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
			url: `http://www.omdbapi.com/?r=json&s=${titleSearch}`
		}).done((data)=>{
			resolve(data);
		});
	});
};










module.exports = Omdb;