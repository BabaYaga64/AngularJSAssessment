var signIn = angular.module('signIn', ['ui.router']);

//Renders home page state
signIn.config(function($stateProvider) {
	$stateProvider.state('home', {
		url: "",
		templateUrl: 'partials/home.html'
	});

});


