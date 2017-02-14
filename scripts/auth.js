"use strict";
let firebase = require("./firebaseConfig");
	provider = new firebase.auth.GoogleAuthProvider(),
	currentUser = null;

firebase.auth().onAuthStateChanged( function(user){
	if (user) {
		console.log("currentUser logged in", currentUser);
		currentUser = user.uid;
	} else {
		currentUser = null;
		console.log("currentUser not logged in");
	}
});

function logInGoogle() {
	return firebase.auth().signInWithPopup(provider);
}

function logOut(){
	return firebase.auth().signOut();
}

module.exports = logInGoogle;
