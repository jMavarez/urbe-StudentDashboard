angular.module('AuthService', [])
    .factory('AuthData', function($window) {
        var f = {};
        var user = {};
        var career = {};
        var tokenName = 'urbe_session_token';

        f.setAuthorization = function(token) {
            if (token) $window.localStorage.setItem(tokenName, token);
            else $window.localStorage.removeItem(tokenName);
        };

        f.getAuthorization = function() {
            return $window.localStorage.getItem(tokenName);
        };

        f.setCurrentUser = function(nuser) {
            user = nuser;
        };

        f.getCurrentUser = function() {
            return user;
        };

        f.setCareer = function(ncareer) {
            career = ncareer;
        };

        f.getCareer = function() {
            return career;
        };

        return f;
    })
    .factory('Auth', function($http, AuthData) {
        var authFactory = {};

        authFactory.login = function(cedula, password) {
            // AuthData.setCredentials(cedula + ":" + password);
            return $http({
                method: 'GET',
                url: 'http://urbe-api.urbe.edu/urbe-api/rest/1.0/auth/login',
                headers: {
                    'X-Authenticate': cedula + ':' + password
                },
            }).then(function(response) {
                AuthData.setCurrentUser(response.data);
                AuthData.setAuthorization(response.headers()['x-authorization'])
                return response;
            }, function(response) {
                return response;
            });
        };

        authFactory.logout = function() {
            AuthData.setAuthorization();
            AuthData.user = {};
            AuthData.career = {};
        };

        return authFactory;
    })
    .factory('AuthInterceptor', function($q, $location, AuthData) {
        var interceptorFactory = {};

        interceptorFactory.request = function(config) {
            // var credentials = AuthData.getCredentials();
            var authorization = AuthData.getAuthorization();

            // console.log('credentials' + credentials + " authorization " + authorization);
            // if (credentials)
            //     config.headers['X-Authenticate'] = credentials;
            if (authorization)
                config.headers['X-Authorization'] = authorization;

            return config;
        };

        interceptorFactory.responseError = function(response) {
            if (response.status == 403) {
                // AuthData.setCredentials("");
                AuthData.setAuthorization("");
                $location.path('/login');
            }
            return $q.reject(response);
        };

        return interceptorFactory;

    });
