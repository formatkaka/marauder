angular.module('marauderApp')

.controller('LoginController', ['$scope','$firebaseAuth', function($scope, $firebaseAuth){
	'use strict';
	$scope.title = 'LOGIN TO MARAUDER ';
}]);