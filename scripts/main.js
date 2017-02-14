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
$("#submit-omdb").click(Omdb.searchOMDB().then(function(data){
	console.log(data);
}));








