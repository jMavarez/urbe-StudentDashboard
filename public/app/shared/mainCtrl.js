angular.module('mainCtrl', [])
    .controller('mainController', function(Data) {
        var vm = this;
        vm.user = Data.login();
    });
