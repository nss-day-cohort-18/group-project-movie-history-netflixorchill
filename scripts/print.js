"use strict";

let cardTemplate = require("../templates/card-template.hbs");
let Print = {};

Print.omdbPrint = function(data){
	let newDiv = document.createElement("div");
	newDiv.innerHTML = cardTemplate(data);
	$("#card-div").append(newDiv);
};





module.exports = Print;