"use strict";

var FBAPI = (function(getFBCredentials){
	return new Promis((resolve, reject) => {
		$.ajax({
			method: 'GET',
			url: `${apiKeys.database.URL}/users.json?orderBy="uid"&equalTo="${uid}`
		}).then((response) => {
			let users = [];
			Object.keys(response).forEach(function(key){
				response[key].id = key;
				users.push(response[key]);
			});
		})

	})
})