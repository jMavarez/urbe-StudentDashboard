angular.module('pensumCtrl', [])
    .controller('pensumController', function($http, $state, AuthData, ngProgressFactory, Urbe) {
        var vm = this;
        vm.courses = [];
        vm.nCourses = [];
        vm.coursesDate = [];
        vm.pensum = [];
        vm.pensumScore = [];
        vm.progressbar = ngProgressFactory.createInstance();

        if (AuthData.getCurrentUser().id == null) {
            $state.go('login');
        } else {
            initPensum();
            initProgressBar();
        }

        function initPensum() {
            vm.progressbar.start();
            Urbe.getStudies(AuthData.getCurrentUser().id).then(function(res) {
                AuthData.setCareer(res.data);
                Urbe.getPensum(AuthData.getCareer()[0].study.id).then(function(res) {
                    vm.pensum = res.data;
                    Urbe.getPensumScore(AuthData.getCareer()[0].id).then(function(res) {
                        vm.progressbar.complete();
                        vm.pensumScore = res.data;
                        passedSemesters(vm.pensumScore);
                    });
                });
            });
        }

        function passedSemesters(pensum) {
            for (var i = 0; i < pensum.length; i++) {
                var course = pensum[i].subject.course.courseLevel;
                if (vm.courses.indexOf(course.indexLevel) === -1) {
                    vm.courses.push(course.indexLevel);
                    vm.coursesDate.push(pensum[i].inscription.period.name);
                }
            }

            nPassedSemesters(vm.pensum);
        }

        function nPassedSemesters(pensum) {
            var mss = [];

            for (var i = 0; i < pensum.length; i++) {
                if (mss.indexOf(pensum[i].level) === -1) {
                    mss.push(pensum[i].level);
                }
            }

            for (var j = vm.courses.length; j < mss.length; j++) {
                vm.nCourses.push(mss[j]);
            }
        }

        function initProgressBar() {
            vm.progressbar.setColor('#00bc8c');
        }

    });
