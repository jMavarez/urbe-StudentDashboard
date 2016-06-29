angular.module('pensumCtrl', ['pensumService'])
    .controller('pensumController', function(Pensum) {
        var vm = this;
        var courses = [];
        var coursesDate = [];
        vm.pensum = Pensum.getPensum();
        vm.pensumScore = Pensum.getPensumScore();

        vm.passedSemesters = function(pensum) {
            for (var i = 0; i < pensum.length; i++) {
                var course = pensum[i].subject.course.courseLevel;
                if (courses.indexOf(course.indexLevel) === -1) {
                    courses.push(course.indexLevel);
                    coursesDate.push(pensum[i].inscription.period.name);
                }
            }
            
            console.log("CursosFechas", coursesDate);

            return courses;
        }

        vm.nPassedSemesters = function(pensum) {
            var mss = [];
            var mssRtr = [];
            for (var i = 0; i < pensum.length; i++) {
                if (mss.indexOf(pensum[i].level) === -1) {
                    mss.push(pensum[i].level);
                }
            }

            for (var i = courses.length; i < mss.length; i++) {
                mssRtr.push(mss[i]);
            }

            return mssRtr;
        };

        console.log("Passed", vm.passedSemesters(vm.pensumScore));
        console.log("nPassed", vm.nPassedSemesters(vm.pensum));
    });
