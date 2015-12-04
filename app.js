
if(Meteor.isClient){
	var app = angular.module('rsvp', ['angular-meteor', 'ui.router']);

	app.config(function($urlRouterProvider, $stateProvider, $locationProvider){
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('events',{
				url: '/events',
				templateUrl: 'event-list.html',
				controller: 'PartiesListCtrl'
			})
			.state('eventDetails', {
				url: '/events/:partyId',
				templateUrl: 'event-details.html',
				controller: 'EventDetailsCtrl'
			});

		$urlRouterProvider.otherwise("/events");	
	});

	app.controller('PartiesListCtrl', ['$scope', '$meteor', function($scope, $meteor){
		$scope.parties = $meteor.collection(Parties);

		$scope.remove = function(party){
			$scope.parties.remove(party);
		};

		$scope.removeAll = function(){
			$scope.parties.remove();
		}
	}]);

	app.controller('EventDetailsCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
		$scope.partyId = $stateParams.partyId;
	}]);
}