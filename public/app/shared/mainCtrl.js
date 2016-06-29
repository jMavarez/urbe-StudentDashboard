angular.module('mainCtrl', [])
    .controller('mainController', function(Auth, AuthData, $state) {
        var vm = this;
        vm.user = {};

        vm.login = function(user) {
            AuthData.setCredentials(user.cedula + ":" + user.password);
            Auth.login().then(function(res) {
                if (res.status == 200) {
                    vm.user = res.data;
                    $state.go('pensum');
                }
            });
        };
    });
