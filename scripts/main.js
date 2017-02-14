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
let Omdb = require('./filterOMDB.js');
let Print = require('./print.js');





//***************
//EventListeners
//***************

//OMDb Search Button
$("#submit-omdb").click(Omdb.searchOMDB().then(function(data){
	console.log(data);
}));








