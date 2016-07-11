angular.module('UrbeApi', [])
    .factory('Urbe', function($http, AuthData) {
        var u = {};

        /* STUDIES */
        u.getStudies = function(student) {
            return $http({
                method: 'GET',
                url: 'http://urbe-api.urbe.edu/urbe-api/rest/1.0/inscription/people/' + student + '/owner'
            }).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        };

        /* PENSUM */
        u.getPensum = function(study) {
            return $http({
                method: 'GET',
                url: 'http://urbe-api.urbe.edu/urbe-api/rest/1.0/subject/study/' + study
            }).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        };

        u.getPensumScore = function(study) {
            return $http({
                method: 'GET',
                url: 'http://urbe-api.urbe.edu/urbe-api/rest/1.0/inscription/' + study + '/academic-record/owner',
            }).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        };

        /* PAYMENTS */
        u.getQuotas = function(student) {
            return $http({
                method: 'GET',
                url: 'http://urbe-api.urbe.edu/urbe-api/rest/1.0/payment/people/' + student + '/payment-status/owner',
            }).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        };

        /* SCHEDULE
         * plusDay number 0 = current day
         */
        u.getSchedule = function(student, day) {
            return $http({
                method: 'GET',
                url: 'http://urbe-api.urbe.edu/urbe-api/rest/1.0/schedule/people/' + student + '/owner?plusDay=' + day,
            }).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        };

        /* PROFILE PHOTO */
        u.getProfilePhoto = function(student) {
            return $http({
                method: 'GET',
                url: 'http://urbe-api.urbe.edu/urbe-api/rest/1.0/people/' + student + '/photo/owner'
            }).then(function(data, status, headers, config) {
                // var photoString = new Blob([response], {type: "octet/stream"});
                // console.log("blob", photoString);
                // return response;
            }, function(data, status, headers, config) {
                // console.log('foto', response);
                // return response;
            });
        };

        /* NEWS */
        u.getNews = function() {
            return $http({
                method: 'GET',
                url: 'http://urbe-api.urbe.edu/urbe-api-ext/rest/1.0/information/news',
            }).then(function(response) {
                return response;
            }, function(response) {
                return response;
            });
        };

        return u;
    });
