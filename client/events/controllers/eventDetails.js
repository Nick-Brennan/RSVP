angular.module('rsvp').controller('EventDetailsCtrl', ['$scope', '$stateParams', '$meteor', function($scope, $stateParams, $meteor){
	$scope.party = $meteor.object(Parties, $stateParams.partyId, false);

	$scope.save = function(){
		$scope.party.save();
	};

	$scope.reset = function(){
		$scope.party.reset();
	};
}]);