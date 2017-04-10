var marauderApp = angular.module('marauderApp', ['ui.router']);

marauderApp.config(function($stateProvider, $urlRouterProvider) {



    $stateProvider

        .state('home', {
        url: '/',
        templateUrl: 'views/homepage.html'
        
    });

    $urlRouterProvider.otherwise('/');

});
