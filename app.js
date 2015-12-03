
if(Meteor.isClient){
	var app = angular.module('rsvp', ['angular-meteor']);

	app.controller('PartiesListCtrl', ['$scope', '$meteor', function($scope, $meteor){
		$scope.parties = $meteor.collection(Parties);
	}]);
}