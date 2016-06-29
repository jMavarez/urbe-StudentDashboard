angular.module('pensumService', [])
    .factory('Pensum', function($http, AuthData) {
        var pensumFactory = {};

        pensumFactory.getPensum = function () {
            return $http({
                method: 'GET',
                url: 'http://urbe-api.urbe.edu/urbe-api/rest/1.0/subject/study/' + AuthData.getCareer()[0].study.id,
            });
        };

        pensumFactory.getPensumScore = function () {
            return $http({
                method: 'GET',
                url: 'http://urbe-api.urbe.edu/urbe-api/rest/1.0/inscription/' + AuthData.getCareer()[0].id + '/academic-record/owner',
            });
        };

        return pensumFactory;
    });
