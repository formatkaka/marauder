var marauderApp = angular.module('marauderApp', ['ui.router', 'firebase']);

marauderApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('home', {
        url: '/',
        templateUrl: 'views/homepage.html',
        controller: 'LoginController'

    });

    $urlRouterProvider.otherwise('/');

}]);
