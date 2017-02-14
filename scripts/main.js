"use strict";


  $(document).ready(function(){
    $('.modal').modal();
  });





//*******************
// Require Variables
//*******************
let Tmdb = require('./filterTMDB.js');

console.log(Tmdb);

//***************
//EventListeners
//***************

//TMDb Search Button
//check for Enter press, and if so we pass the search string to
//the API. When it returns, we perform a second search for the poster
//and the user data, which influences how we display the search results
$("#title-search").on("keyup", (event) => {
	if(event.which === 13)
	{
		console.log('13');
		Tmdb.searchTMDB()
		.then(
	 		Tmdb.getPosters()
		);
	// 	.then( Tmdb.fillCards());
	}
});









