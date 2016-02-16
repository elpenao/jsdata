'use strict';

app.config(function($stateProvider) {

	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'js/signup/signup.html',
		controller: 'SignupCtrl'
	})
})

// add necessary dependencies here
app.controller('SignupCtrl', function($scope, User, $state) {

  /*
  TODOS: 
  1 - create the signup object for ng-modelling
  2 - create a `sendSignup` function that
      a) persists the user data 
      b) changes the state to  'create' while sending along important user data
      (HINT: $stateParams)

  */
  $scope.signup = {};

  $scope.sendSignup = function (user) {
    User.create(user)
    .then(function (data) {
      console.log('created user', data)
      $state.go('create', {userId: data._id})
    })
  }

})