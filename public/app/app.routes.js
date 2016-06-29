angular.module('app.routes', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('pensum', {
                url: '/pensum',
                templateUrl: 'modules/pensum/views/pensum.html',
                controller: 'pensumController',
                controllerAs: 'pensum',
            })
            .state('login', {
                url: '/login',
                templateUrl: 'modules/login/views/login.html'
            });

            $urlRouterProvider.otherwise('/login');
        	// $locationProvider.html5Mode(true);
    });
