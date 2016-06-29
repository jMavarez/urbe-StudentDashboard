angular.module('pensumCtrl', ['pensumService'])
    .controller('pensumController', function(Pensum, $http, AuthData) {
        var vm = this;
        vm.courses = [];
        vm.nCourses = [];
        vm.coursesDate = [];
        vm.pensum = [];
        vm.pensumScore = [];

        getStudy();

        function getStudy() {
            $http.get("http://urbe-api.urbe.edu/urbe-api/rest/1.0/inscription/people/" + AuthData.getCurrentUser().id + "/owner").then(function(res) {
                if (res.status === 200) {
                    AuthData.setCareer(res.data);
                    Pensum.getPensum().then(function(res) {
                        if (res.status === 200) {
                            vm.pensum = res.data;
                            // console.log("pensum", res);
                            Pensum.getPensumScore().then(function(res) {
                                if (res.status === 200) {
                                    vm.pensumScore = res.data;
                                    passedSemesters(vm.pensumScore);
                                }
                            });
                        }
                    });
                }
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

            // console.log("CursosFechas", vm.coursesDate);
            // console.log("Cursos", vm.courses);
            nPassedSemesters(vm.pensum);
        }

        function nPassedSemesters(pensum) {
            var mss = [];
            // console.log(pensum.length);
            for (var i = 0; i < pensum.length; i++) {
                if (mss.indexOf(pensum[i].level) === -1) {
                    mss.push(pensum[i].level);
                }
            }

            for (var j = vm.courses.length; j < mss.length; j++) {
                vm.nCourses.push(mss[j]);
            }

            // console.log("nCursos", vm.nCourses);
        }

    });
