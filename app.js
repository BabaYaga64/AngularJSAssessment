var signIn = angular.module('signIn', ['ui.router']);

//Renders home page state
signIn.config(function($stateProvider) {
	$stateProvider.state('home', {
		url: "",
		templateUrl: 'partials/home.html',
		controller: 'StudentCtrl'
	});

	$stateProvider.state('signin', {
		url: "signin",
		templateUrl: 'partials/signin.html',
		controller: 'StudentCtrl'

		});

	$stateProvider.state('whosthere', {
		url: "whosethere",
		templateUrl: 'partials/whosethere.html',
		controller: 'StudentCtrl'

		});

});


