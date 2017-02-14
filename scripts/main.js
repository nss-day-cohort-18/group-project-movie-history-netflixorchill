"use strict";


  $(document).ready(function(){
    $('.modal').modal();
  });





//*******************
// Require Variables
//*******************
let Omdb = require('./filterOMDB.js');






//***************
//EventListeners
//***************

//OMDb Search Button
//check for Enter press, then we
$("#title-search").on("keyup", (event) =>
{
	if(event.which === 13)
	{
		console.log('13');
		 Omdb.searchOMDB().then( (data) =>
	 	{
	 		console.log(data);
	 	});
	}
});









