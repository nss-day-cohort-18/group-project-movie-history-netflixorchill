"use strict";

//*******************
// Initialize Modals
//*******************
  $(document).ready(function(){
    $('.modal').modal();
  });


//*******************
// Require Variables
//*******************
let Tmdb = require('./filterTMDB.js');
let Print = require('./print.js');
let Events = require('./events.js');


//***************
//EventListeners
//***************

//TMDb Search Button
//check for Enter press, and if so we pass the search string to
//the API. When it returns, we perform a second search for the poster
//and the user data, which influences how we display the search results
$("#title-search").on("keyup", (event) => {
	if(event.which == 13)
	{
		Tmdb.searchTMDB().then(function(data){
			$("#title-search").val("");
			Print.tmdbClear();
			Print.tmdbPrint(data);
			Events.addCardListeners();
		});
	}
});











