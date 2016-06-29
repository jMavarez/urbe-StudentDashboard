angular.module('AuthService', [])
    .factory('AuthData', function($window) {
        var f = {};
        var credentials = "";
        var user = {};
        var auth = "";
        var career = {};

        f.setCredentials = function(ncredentials) {
            credentials = ncredentials;
        };

        f.getCredentials = function() {
            return credentials;
        };

        f.setCurrentUser = function(nuser) {
            user = nuser;
        };

        f.getCurrentUser = function() {
            return user;
        };

        f.setAuthorization = function(nauth) {
            auth = nauth;
        };

        f.getAuthorization = function() {
            return auth;
        };

        f.setCareer = function(ncareer) {
            career = ncareer;
        };

        f.getCareer = function() {
            return career;
        };

        return f;
    })
    .factory('Auth', function($http, API, AuthData) {
        var authFactory = {};

        authFactory.login = function(email, password) {
            return $http.get(API.BASE + API.LOGIN)
                .success(function(data, status, headers, config) {
                    var heads = headers();
                    AuthData.setCurrentUser(data);
                    AuthData.setAuthorization(heads['x-authorization']);
                    return data;
                });
        };

        return authFactory;
    })
    .factory('AuthInterceptor', function($q, $location, AuthData) {
        var interceptorFactory = {};

        interceptorFactory.request = function(config) {
            var credentials = AuthData.getCredentials();
            var authorization = AuthData.getAuthorization();

            // console.log('credentials' + credentials + " authorization " + authorization);
            if (credentials)
                config.headers['X-Authenticate'] = credentials;
            if (authorization)
                config.headers['X-Authorization'] = authorization;

            return config;
        };

        interceptorFactory.responseError = function(response) {
            if (response.status == 403) {
                AuthData.setCredentials("");
                AuthData.setAuthorization("");
                $location.path('/login');
            }
            return $q.reject(response);
        };

        return interceptorFactory;

    });
