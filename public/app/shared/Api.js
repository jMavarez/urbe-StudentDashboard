angular.module('Api', [])
    .constant('API', {
        'BASE': "http://urbe-api.urbe.edu/urbe-api/rest/1.0/",
        'LOGIN': 'auth/login',
        'PENSUM': "subject/study/",
        'INSCRIPTION': "inscription/",
        'ACADEMIC-RECORD': '/academic-record/owner'
    });
