angular.module('mainCtrl', [])
    .controller('mainController', function($scope, Auth, AuthData, $state, ngProgressFactory, Urbe) {
        var vm = this;
        vm.user = {};
        vm.progressbar = ngProgressFactory.createInstance();

        initProgressBar();

        vm.login = function(user) {
            vm.progressbar.start();
            Auth.login(user.cedula, user.password).then(function(res) {
                if (res.status == 200) {
                    vm.user = res.data;
                    $state.go('pensum');
                    vm.progressbar.complete();
                } else {
                    vm.progressbar.reset();
                }
            });
        };

        vm.getNews = function() {
            Urbe.getNews().then(function(response) {
                console.log(response.data);
            });
        };

        vm.getPhoto = function() {
            Urbe.getProfilePhoto(AuthData.getCurrentUser().id).then(function(response) {

            });
        };

        function initProgressBar() {
            vm.progressbar.setColor('#00bc8c');
        }
    });
