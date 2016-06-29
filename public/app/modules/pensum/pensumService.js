angular.module('pensumService', [])
    .factory('Pensum', function(Data) {
        var pensumFactory = {};

        pensumFactory.getPensum = function () {
            return Data.pensum();
        };

        pensumFactory.getPensumScore = function () {
            return Data.pensumScore();
        };

        return pensumFactory;
    });
