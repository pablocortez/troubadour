var app = angular.module('troubadourApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		//the timeline display
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
		//the login display
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'authController'
		})
		//the signup display
		.when('/register', {
			templateUrl: 'register.html',
			controller: 'authController'
		});
});

app.controller('mainController', function($scope){
	$scope.items = [];
	$scope.newItem = {
	    created_by: '', 
	    text: '', 
	    created_at: ''
	};
	
	$scope.post = function(){
		$scope.newItem.created_at = Date.now();
		$scope.items.push($scope.newItem);
		$scope.newItem = {
		    created_by: '', 
		    text: '', 
		    created_at: ''
		};
	};
});

app.controller('authController', function($scope){
	$scope.user = {
	    username: '', 
	    password: ''
	};
	
	$scope.error_message = '';

	$scope.login = function(){
		$scope.error_message = 'login request for ' + $scope.user.username;
	};

	$scope.register = function(){
		$scope.error_message = 'registeration request for ' + $scope.user.username;
	};
});