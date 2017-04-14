var marauderApp = angular.module('marauderApp', ['ui.router', 'firebase']);

marauderApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('login', {
        url: '/',
        templateUrl: 'views/loginPage.html',
        controller: 'LoginController'

    })
        .state('home', {
        url: '/feed',
        templateUrl: 'views/homePage.html',
        controller: 'homePageController'

    });

    $urlRouterProvider.otherwise('/');

}]);
