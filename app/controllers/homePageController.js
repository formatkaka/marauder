angular.module('marauderApp')

.controller('homePageController', ['$scope','$firebaseAuth','homeService', function($scope,$firebaseAuth,homeService){
		
		var auth = $firebaseAuth();
		$scope.feeds = []
		len = 100;
		for (var i = 0; i < 100; i++) {
			$scope.feeds.push(i);
		}
		$scope.user = homeService.getUserInfo(auth);
		
}])