'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl',
		resolve: {
			author: function (User, $stateParams) {
				return User.find($stateParams.userId)
			}
		} 
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, Post, author, $state) {

	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
		console.log($scope.newPost)
	}

	/*

	TODOS:  
	1 - create the object that the form can use via ng-model
    2 - create a function that 
	 		a) persists the ng-modeled post object 
			b) changes the state to 'main'  

	*/
	$scope.newPost = {};
	$scope.newPost.username = author.username;

	$scope.createNewPost = function (data) {
		console.log($scope.newPost)
		Post.create({title: $scope.newPost.title, body: $scope.newPost.body, author: author._id})
		.then(function (data) {
			console.log('created this post', data)
			$state.transitionTo('main')
		})
	}

	
}) 