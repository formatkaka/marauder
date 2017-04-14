angular.module('marauderApp')

.controller('LoginController', ['$scope', '$firebaseAuth', 'loginService','$state',function($scope, $firebaseAuth,loginService,$state) {

    'use strict';

    $scope.Login = function(oauthDomain) {

    	var auth = $firebaseAuth();
        switch (oauthDomain) {
            case 't':
                loginService.login($state,auth,'twitter');
                break;
            case 'g':
                loginService.login($state,auth,'google');
                break;
            case 'f':
                loginService.login($state,auth,'facebook');
                break;
        }
    }

}]);
