angular.module('rsvp').run(function($rootScope, $state){
	$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
		if(error === 'AUTH_REQUIRED'){
			$state.go('events')
		}
	});
});

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
			controller: 'EventDetailsCtrl',
			resolve: {
				"currentUser": function($meteor){
					return $meteor.requireUser();
				}
			}
		});

	$urlRouterProvider.otherwise("/events");	
});