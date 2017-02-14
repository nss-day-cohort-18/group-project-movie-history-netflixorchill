"use strict";

let cardTemplate = require("../templates/card-template.hbs");
let Print = {};

Print.tmdbPrint = function(data){
	let newDiv = document.createElement("div");
	newDiv.innerHTML = cardTemplate(data);
	$("#card-div").append(newDiv);
};

Print.tmdbClear = function(){
	$("#card-div").empty();
};



module.exports = Print;