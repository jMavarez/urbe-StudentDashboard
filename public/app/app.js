angular.module('urbeApp', [
        'app.routes',
        'mainCtrl',
        'pensumCtrl',
        'testdata',
        'AuthService',
        'UrbeApi',
        'ngProgress',
        'base64'
    ])
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    });
