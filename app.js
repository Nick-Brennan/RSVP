if(Meteor.isClient){
	var app = angular.module('rsvp', ['angular-meteor']);

	app.controller('PartiesListCtrl', ['$scope', function($scope){
		$scope.parties = [
			{
				'name': 'No EDM Party',
				'description': 'There will be no EDM at this party'
			},
			{
				'name': 'All EDM, All the time',
				'description': 'Bring it!'
			},
			{
				'name': 'Chill Zone',
				'description': 'Mellow'
			}
		];
	}]);
}