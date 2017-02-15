"use strict";

//*******************
// Require Variables
//*******************
let firebase = 	require('./firebase/firebaseConfig.js'),
	user = 		require("./firebase/user.js"),
	db = 		require("./db-interaction.js"),
	Tmdb = 		require('./filterTMDB.js');


//*******************
// Initialize Modals
//*******************
 $(document).ready(function(){
    $('.modal').modal();
  });

// REST API///
function loadMoviesToDom() {
	let currentUser = user.getUser();

	db.getMovies(currentUser).then(function(movieData)
	{
		var idArray = Object.keys(movieData);
		idArray.forEach(function(key)
		{
			movieData[key].prop = key; // grabbing google's Key
		});

		Tmdb.tmdbPrint(movieData);
	});
}

// Login/Logout Listeners
$('#login-btn').click(function() {
  console.log('clicked login');
  user.logInGoogle()
  .then( function(result){
    // console.log('result from login', result.user.uid);
    user.setUser(result.user.uid);
    // $('#auth-btn').addClass('is-hidden');
    // $('#logout=btn').removeClass('is-hidden');
    loadMoviesToDom();
  });
});

$('#logout-btn').click(function() {
  console.log('clicked logout');
  user.logOut();
 });

/* Search from bar and do title search */
$("#title-search").on("keyup", (event) => {
	if(event.which === 13)
	{
		Tmdb.searchTMDB().then(function(data){
			$("#title-search").val("");
			Tmdb.tmdbClear();
			Tmdb.tmdbPrint(data);
		//	Tmdb.addCardListeners();
		});
	}
});

module.exports = loadMoviesToDom;

/*
	$("#add-movie").click(function(){
	console.log("added movie to list");
	var movieForm = templates.movieForm()
	.then(function(movieForm){
		$("form--name").html(movieListForm);
	});
});
*/







