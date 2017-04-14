angular.module('marauderApp')

.service('loginService', function() {

    this.login = function(state, auth, oauthDomain) {

        auth.$signInWithPopup(oauthDomain).then(function(result) {

            auth.$getAuth().getToken(false).then(function(token) {
                console.log(token);
                state.go('home');
            }).catch(function(error) {
                console.log(error);
            });
			

        }).catch(function(error) {
            console.log('Some error occured ' + error);
        });


    };

})

.service('homeService', function(){
	
	this.getUserInfo = function (auth) {
		
		console.log(auth.$getAuth());
		return auth.$getAuth().providerData[0];
	}	
})