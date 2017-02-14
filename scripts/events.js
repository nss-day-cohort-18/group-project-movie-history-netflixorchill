"use strict";

let Tmdb = require('./filterTMDB.js');

function addCardListeners(){
	$(".card-fixed").click(Tmdb.findTMDB);
}

module.exports = {addCardListeners};