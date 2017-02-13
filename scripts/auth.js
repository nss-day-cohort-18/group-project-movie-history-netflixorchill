"use strict";


//***********************************
//Object to hold multipule functions
//***********************************

let FbAPI = {};


//*********
//Functions
//*********

//Get Method//

 	FbAPI.getUser = (function(apiKeys, uid){
	return new Promise((resolve, reject) => {
		$.ajax({
			method: 'GET',
			url: `${apiKeys.database.URL}/users.json?orderBy="uid"&equalTo="${uid}`
		}).then((response) => {
			let users = [];
			Object.keys(response).forEach(function(key){
				response[key].id = key;
				users.push(response[key]);
			});
			resolve(users[0]);
		}, (error) => {
			reject(error);
		});

	});
});

//post Method//
FbAPI.addUser = (function (apiKeys, newUser){
	return new Promise((resolve, reject) => {
		$.ajax({
			method: 'POST',
			url: `${apiKeys.databaseURL}/users.json`,
		})
	});
});


module.exports = FbAPI;