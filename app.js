
if(Meteor.isClient){
	var app = angular.module('rsvp', ['angular-meteor', 'ui.router']);

	app.controller('PartiesListCtrl', ['$scope', '$meteor', function($scope, $meteor){
		$scope.parties = $meteor.collection(Parties);

		$scope.remove = function(party){
			$scope.parties.remove(party);
		};

		$scope.removeAll = function(){
			$scope.parties.remove();
		}
	}]);
}