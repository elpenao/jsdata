'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl',
		resolve: {
			post: function ($stateParams, Post, User) {
				return Post.find($stateParams.postId)
			}
		}
	})
	.state('editPost', {
		url: '/post/:postId/edit',
		templateUrl: 'js/post/post-edit.html',
		controller: 'EditPostCtrl',
		resolve: {
			post: function ($stateParams, Post, User) {
				return Post.find($stateParams.postId)
			}
		}
	})
});

// add necessary dependencies 
app.controller('PostCtrl', function($scope, post, $state) {

	$scope.post = post

	$scope.goToEditPost = function () {
		$state.transitionTo('editPost', {postId: $scope.post._id})
	}

})

app.controller('EditPostCtrl', function($scope, post, $state, $rootScope) {

	$scope.post = post;

	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	}

	$scope.newPost = {};
	$scope.newPost.title = post.title
	$scope.newPost.body = post.body

	$scope.editPost = function (data) {
		$scope.post.DSUpdate({id: $scope.post._id, title: $scope.newPost.title, body: $scope.newPost.body})
		.then(function (data) {
			console.log('updated this post', data)
			$state.go('post', {postId: data._id})
			// $rootScope.$digest()
		})
	}
})