angular.module('urbeApp', [
        'app.routes',
        'mainCtrl',
        'pensumCtrl',
        'pensumService',
        'testdata',
        'Api',
        'AuthService'
    ])
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    });
