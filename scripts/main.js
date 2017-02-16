"use strict";

let firebase = 	require('./firebase/firebaseConfig.js'),
	user = 		require("./firebase/user.js"),
	db = 		require("./db-interaction.js"),
	Tmdb = 		require('./filterTMDB.js');


 $(document).ready(function(){
    $("#title-search").prop('disabled', true);
   	$('#logout-btn').hide();
  	$('#login-btn').show();
  });

// REST API///
function loadMoviesToDom() {
	let currentUser = user.getUser();

	db.getMoviesOnWatchList(currentUser)
	.then(function(movieData)
	{		
		var idArray = Object.keys(movieData);
		idArray.forEach(function(key)
		{
			movieData[key].firebasekey = key;
			Tmdb.watchedMovieList( movieData[key]);
		});
	});
}

// Login/Logout Listeners
$('#login-btn').click(function() {
	user.logInGoogle().then( function(result) { 
  		user.setUser(result.user.uid);
  	});

	event.preventDefault();

   	$("#title-search").val("");
	$("#card-div").empty();
 
  	$('#logout-btn').show();
  	$('#login-btn').hide();
  	$("#title-search").prop('disabled', false);
	$("#title-search").prop('enabled', true);

  	loadMoviesToDom();
});


$('#logout-btn').click(function() {

	event.preventDefault();

	$("#title-search").val("");
	$("#card-div").empty();

	user.logOut();
	location.reload();
 });

/* Search from bar and do title search */
$("#title-search").on("keyup", (event) => {
	if (event.which === 13) {
		Tmdb.searchTMDB().then(function (data)
		{
			$("#title-search").val("");
			$("#card-div").empty();
			Tmdb.tmdbPrint(data);
		});
	}
});


module.exports = loadMoviesToDom;
