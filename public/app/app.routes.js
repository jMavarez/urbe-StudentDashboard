angular.module('app.routes', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('pensum', {
                url: '/',
                templateUrl: 'modules/pensum/views/pensum.html',
                controller: 'pensumController',
                controllerAs: 'pensum',
            })
            .state('login', {
                url: '/login',
                templateUrl: 'modules/users/views/login.html'
            });

            $urlRouterProvider.otherwise('/');
        	// $locationProvider.html5Mode(true);
    });
