angular.module('rsvp').config(function($urlRouterProvider, $stateProvider, $locationProvider){
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('events',{
			url: '/events',
			templateUrl: 'client/events/views/event-list.html',
			controller: 'PartiesListCtrl'
		})
		.state('eventDetails', {
			url: '/events/:partyId',
			templateUrl: 'client/events/views/event-details.html',
			controller: 'EventDetailsCtrl'
		});

	$urlRouterProvider.otherwise("/events");	
});