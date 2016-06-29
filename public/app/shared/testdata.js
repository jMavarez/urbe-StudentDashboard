angular.module('testdata', [])
    .factory('Data', function() {
        var data = {};
        var login = {
            "id": 991041,
            "sons": 0,
            "identification": "23738134",
            "idenType": "CEDULA",
            "fname": "JOSUE",
            "mname": "DANIEL",
            "lname": "MAVAREZ",
            "slname": "ALBORNOZ",
            "email": "josuemavarez@gmail.com",
            "secondaryEmail": "jmavarez@urbe.edu.ve",
            "weight": 0,
            "height": 0,
            "address": {},
            "age": 0,
            "leftHanded": false,
            "profiles": [
                "STUDENT"
            ],
            "fullName": "MAVAREZ ALBORNOZ JOSUE DANIEL"
        };

        var pensum = [{
            "id": 11276,
            "name": "CÁLCULO I",
            "precedences": [],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 1,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11278,
            "name": "GEOMETRÍA",
            "precedences": [],
            "uc": 3,
            "type": null,
            "required": false,
            "level": 1,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11279,
            "name": "ÁLGEBRA LINEAL",
            "precedences": [],
            "uc": 3,
            "type": null,
            "required": false,
            "level": 1,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11280,
            "name": "LENGUAJE Y HABILIDADES COGNITIVAS",
            "precedences": [],
            "uc": 3,
            "type": null,
            "required": false,
            "level": 1,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11281,
            "name": "METODOLOGÍA DE LA INVESTIGACIÓN",
            "precedences": [],
            "uc": 3,
            "type": null,
            "required": false,
            "level": 1,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11282,
            "name": "ORIENTACIÓN",
            "precedences": [],
            "uc": 2,
            "type": null,
            "required": false,
            "level": 1,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11283,
            "name": "CÁLCULO II",
            "precedences": [{
                "id": 11276,
                "name": "CÁLCULO I",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 2,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11284,
            "name": "DIBUJO COMPUTARIZADO",
            "precedences": [{
                "id": 11278,
                "name": "GEOMETRÍA",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 3,
            "type": null,
            "required": false,
            "level": 2,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11285,
            "name": "FÍSICA I",
            "precedences": [{
                "id": 11276,
                "name": "CÁLCULO I",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 2,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11287,
            "name": "LÓGICA",
            "precedences": [],
            "uc": 2,
            "type": null,
            "required": false,
            "level": 2,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11288,
            "name": "INTRODUCCIÓN A LA PROGRAMACIÓN",
            "precedences": [],
            "uc": 4,
            "type": null,
            "required": false,
            "level": 2,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11290,
            "name": "CÁLCULO III",
            "precedences": [{
                "id": 11283,
                "name": "CÁLCULO II",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 3,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11293,
            "name": "QUÍMICA",
            "precedences": [{
                "id": 11283,
                "name": "CÁLCULO II",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 3,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11295,
            "name": "FÍSICA II",
            "precedences": [{
                "id": 11285,
                "name": "FÍSICA I",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 3,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11296,
            "name": "INGLÉS I",
            "precedences": [],
            "uc": 2,
            "type": null,
            "required": false,
            "level": 3,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11297,
            "name": "ACTIVIDAD FÍSICA Y SALUD",
            "precedences": [],
            "uc": 2,
            "type": null,
            "required": false,
            "level": 3,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11300,
            "name": "CÁLCULO IV",
            "precedences": [{
                "id": 11290,
                "name": "CÁLCULO III",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 4,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11304,
            "name": "MATEMÁTICA DISCRETA",
            "precedences": [],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 4,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11306,
            "name": "PROGRAMACIÓN I",
            "precedences": [{
                "id": 11288,
                "name": "INTRODUCCIÓN A LA PROGRAMACIÓN",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 4,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11307,
            "name": "INGLÉS II",
            "precedences": [{
                "id": 11296,
                "name": "INGLÉS I",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 2,
            "type": null,
            "required": false,
            "level": 4,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11308,
            "name": "ACTIVIDADES RECREACIONALES",
            "precedences": [{
                "id": 11297,
                "name": "ACTIVIDAD FÍSICA Y SALUD",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 2,
            "type": null,
            "required": false,
            "level": 4,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11311,
            "name": "DESARROLLO SUSTENTABLE",
            "precedences": [],
            "uc": 3,
            "type": null,
            "required": false,
            "level": 5,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11313,
            "name": "ESTADÍSTICA",
            "precedences": [{
                "id": 11290,
                "name": "CÁLCULO III",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 3,
            "type": null,
            "required": false,
            "level": 5,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11316,
            "name": "PROGRAMACIÓN II",
            "precedences": [{
                "id": 11304,
                "name": "MATEMÁTICA DISCRETA",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }, {
                "id": 11306,
                "name": "PROGRAMACIÓN I",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 5,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11317,
            "name": "INGLÉS III",
            "precedences": [{
                "id": 11307,
                "name": "INGLÉS II",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 2,
            "type": null,
            "required": false,
            "level": 5,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11318,
            "name": "HARDWARE DE COMPUTADORA",
            "precedences": [],
            "uc": 3,
            "type": null,
            "required": false,
            "level": 5,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11321,
            "name": "SISTEMAS OPERATIVOS",
            "precedences": [],
            "uc": 3,
            "type": null,
            "required": false,
            "level": 5,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11324,
            "name": "CALIDAD Y PRODUCTIVIDAD",
            "precedences": [{
                "id": 11313,
                "name": "ESTADÍSTICA",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 3,
            "type": null,
            "required": false,
            "level": 6,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11326,
            "name": "BASE DE DATOS I",
            "precedences": [{
                "id": 11316,
                "name": "PROGRAMACIÓN II",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 6,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11327,
            "name": "PROGRAMACIÓN III",
            "precedences": [{
                "id": 11316,
                "name": "PROGRAMACIÓN II",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 6,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11328,
            "name": "INGLÉS IV",
            "precedences": [{
                "id": 11317,
                "name": "INGLÉS III",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 2,
            "type": null,
            "required": false,
            "level": 6,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11329,
            "name": "GESTIÓN DE PROYECTOS INFORMÁTICOS",
            "precedences": [],
            "uc": 4,
            "type": null,
            "required": false,
            "level": 6,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11333,
            "name": "BASE DE DATOS II",
            "precedences": [{
                "id": 11326,
                "name": "BASE DE DATOS I",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 7,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11335,
            "name": "TEORÍA GENERAL DE SISTEMAS",
            "precedences": [{
                "id": 11329,
                "name": "GESTIÓN DE PROYECTOS INFORMÁTICOS",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 4,
            "type": null,
            "required": false,
            "level": 7,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11337,
            "name": "COMPILADORES",
            "precedences": [{
                "id": 11327,
                "name": "PROGRAMACIÓN III",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 7,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11339,
            "name": "INGLÉS V",
            "precedences": [{
                "id": 11328,
                "name": "INGLÉS IV",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 2,
            "type": null,
            "required": false,
            "level": 7,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11341,
            "name": "INGENIERÍA ECONÓMICA",
            "precedences": [],
            "uc": 3,
            "type": null,
            "required": false,
            "level": 7,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11385,
            "name": "REDES I",
            "precedences": [],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 8,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11386,
            "name": "INGENIERÍA DEL SOFTWARE I",
            "precedences": [{
                "id": 11335,
                "name": "TEORÍA GENERAL DE SISTEMAS",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 8,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11387,
            "name": "COMPUTACIÓN GRÁFICA",
            "precedences": [{
                "id": 11337,
                "name": "COMPILADORES",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 8,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 14311,
            "name": "PROGRAMACIÓN EN SOFTWARE LIBRE",
            "precedences": [],
            "uc": 2,
            "type": null,
            "required": false,
            "level": 8,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11390,
            "name": "AUTOESTIMA Y DESARROLLO HUMANO",
            "precedences": [],
            "uc": 2,
            "type": null,
            "required": false,
            "level": 8,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11392,
            "name": "REDES II",
            "precedences": [{
                "id": 11385,
                "name": "REDES I",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 9,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11393,
            "name": "INGENIERÍA DEL SOFTWARE II",
            "precedences": [{
                "id": 11386,
                "name": "INGENIERÍA DEL SOFTWARE I",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 9,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11394,
            "name": "MULTIMEDIA Y DISEÑO WEB",
            "precedences": [],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 9,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 14393,
            "name": "PROGRAMACIÓN DE VIDEO JUEGOS",
            "precedences": [],
            "uc": 2,
            "type": null,
            "required": false,
            "level": 9,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11398,
            "name": "COMPETENCIAS COMUNICATIVAS",
            "precedences": [],
            "uc": 2,
            "type": null,
            "required": false,
            "level": 9,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11402,
            "name": "SEMINARIO DE INVESTIGACIÓN I",
            "precedences": [{
                "id": 11339,
                "name": "INGLÉS V",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }, {
                "id": 11344,
                "name": "SERVICIO COMUNITARIO (LEY)",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 3,
            "type": null,
            "required": false,
            "level": 10,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11405,
            "name": "AUDITORÍA Y EVALUACIÓN DE SISTEMAS",
            "precedences": [],
            "uc": 4,
            "type": null,
            "required": false,
            "level": 10,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11406,
            "name": "PROGRAMACIÓN WEB",
            "precedences": [{
                "id": 11394,
                "name": "MULTIMEDIA Y DISEÑO WEB",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 10,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11408,
            "name": "INTELIGENCIA ARTIFICIAL",
            "precedences": [],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 10,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11413,
            "name": "RESPONSABILIDAD SOCIAL CORPORATIVA",
            "precedences": [],
            "uc": 2,
            "type": null,
            "required": false,
            "level": 10,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11420,
            "name": "SEMINARIO DE INVESTIGACIÓN II",
            "precedences": [{
                "id": 11402,
                "name": "SEMINARIO DE INVESTIGACIÓN I",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 3,
            "type": null,
            "required": false,
            "level": 11,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11421,
            "name": "SIMULACIÓN DE SISTEMAS",
            "precedences": [],
            "uc": 5,
            "type": null,
            "required": false,
            "level": 11,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11422,
            "name": "DESARROLLO DE LA CAPACIDAD EMPRENDEDORA",
            "precedences": [],
            "uc": 2,
            "type": null,
            "required": false,
            "level": 11,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11423,
            "name": "ADMINISTRACIÓN DE CENTROS DE INFORMÁTICA",
            "precedences": [],
            "uc": 4,
            "type": null,
            "required": false,
            "level": 11,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 13086,
            "name": "PLANEACIÓN Y GESTIÓN DE REDES",
            "precedences": [],
            "uc": 2,
            "type": null,
            "required": false,
            "level": 11,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11425,
            "name": "ÉTICA Y DEONTOLOGÍA",
            "precedences": [],
            "uc": 3,
            "type": null,
            "required": false,
            "level": 11,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11427,
            "name": "SEMINARIO DE INVESTIGACIÓN III",
            "precedences": [{
                "id": 11420,
                "name": "SEMINARIO DE INVESTIGACIÓN II",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 9,
            "type": null,
            "required": false,
            "level": 12,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }, {
            "id": 11428,
            "name": "PASANTÍA ACADÉMICA",
            "precedences": [{
                "id": 11420,
                "name": "SEMINARIO DE INVESTIGACIÓN II",
                "precedences": null,
                "uc": 0,
                "type": null,
                "required": false,
                "level": 0,
                "pensum": null,
                "code": null,
                "course": null
            }],
            "uc": 10,
            "type": null,
            "required": false,
            "level": 12,
            "pensum": {
                "id": 962,
                "maxUC": 0,
                "version": "6",
                "totalUcRequired": 0
            },
            "code": null,
            "course": {
                "id": 0,
                "name": null,
                "courseOrder": 0,
                "courseLevel": {
                    "id": 0,
                    "indexLevel": 0,
                    "maxUC": 0,
                    "subjects": null,
                    "description": "SEMESTRE"
                },
                "mandatory": null,
                "ucRequired": 0
            }
        }];

        var pensumScore = [{
            "id": 7990142,
            "subject": {
                "id": 11280,
                "name": "LENGUAJE Y HABILIDADES COGNITIVAS",
                "precedences": null,
                "uc": 3,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061801040303",
                "course": {
                    "id": 10499,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2342,
                        "indexLevel": 1,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 188,
                    "name": "Septiembre-2012/Diciembre-2012",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "18",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8033301,
            "subject": {
                "id": 11279,
                "name": "ÁLGEBRA LINEAL",
                "precedences": null,
                "uc": 3,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061801030503",
                "course": {
                    "id": 10498,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2342,
                        "indexLevel": 1,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 188,
                    "name": "Septiembre-2012/Diciembre-2012",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "15",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8035759,
            "subject": {
                "id": 11282,
                "name": "ORIENTACIÓN",
                "precedences": null,
                "uc": 2,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061801060202",
                "course": {
                    "id": 10501,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2342,
                        "indexLevel": 1,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 188,
                    "name": "Septiembre-2012/Diciembre-2012",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "19",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8059472,
            "subject": {
                "id": 11281,
                "name": "METODOLOGÍA DE LA INVESTIGACIÓN",
                "precedences": null,
                "uc": 3,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061801050303",
                "course": {
                    "id": 10500,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2342,
                        "indexLevel": 1,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 188,
                    "name": "Septiembre-2012/Diciembre-2012",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "19",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8105999,
            "subject": {
                "id": 11278,
                "name": "GEOMETRÍA",
                "precedences": null,
                "uc": 3,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061801020503",
                "course": {
                    "id": 10497,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2342,
                        "indexLevel": 1,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 188,
                    "name": "Septiembre-2012/Diciembre-2012",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "13",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8120570,
            "subject": {
                "id": 11276,
                "name": "CÁLCULO I",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061801010605",
                "course": {
                    "id": 10496,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2342,
                        "indexLevel": 1,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 188,
                    "name": "Septiembre-2012/Diciembre-2012",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "11",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8205317,
            "subject": {
                "id": 11287,
                "name": "LÓGICA",
                "precedences": null,
                "uc": 2,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061802040302",
                "course": {
                    "id": 10506,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2343,
                        "indexLevel": 2,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 190,
                    "name": "Enero-2013/Abril-2013",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "16",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8217699,
            "subject": {
                "id": 11283,
                "name": "CÁLCULO II",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061802010605",
                "course": {
                    "id": 10502,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2343,
                        "indexLevel": 2,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 190,
                    "name": "Enero-2013/Abril-2013",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "11",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8218838,
            "subject": {
                "id": 11284,
                "name": "DIBUJO COMPUTARIZADO",
                "precedences": null,
                "uc": 3,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061802020303",
                "course": {
                    "id": 10504,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2343,
                        "indexLevel": 2,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 190,
                    "name": "Enero-2013/Abril-2013",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "20",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8239544,
            "subject": {
                "id": 11288,
                "name": "INTRODUCCIÓN A LA PROGRAMACIÓN",
                "precedences": null,
                "uc": 4,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061802050504",
                "course": {
                    "id": 10507,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2343,
                        "indexLevel": 2,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 190,
                    "name": "Enero-2013/Abril-2013",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "18",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8487215,
            "subject": {
                "id": 11285,
                "name": "FÍSICA I",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061802030705",
                "course": {
                    "id": 10505,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2343,
                        "indexLevel": 2,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 194,
                    "name": "Mayo-2013/Julio-2013",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "11",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8488143,
            "subject": {
                "id": 11297,
                "name": "ACTIVIDAD FÍSICA Y SALUD",
                "precedences": null,
                "uc": 2,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061803050302",
                "course": {
                    "id": 10516,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2344,
                        "indexLevel": 3,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 194,
                    "name": "Mayo-2013/Julio-2013",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "19",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8517913,
            "subject": {
                "id": 11296,
                "name": "INGLÉS I",
                "precedences": null,
                "uc": 2,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061803040302",
                "course": {
                    "id": 10515,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2344,
                        "indexLevel": 3,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 194,
                    "name": "Mayo-2013/Julio-2013",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "20",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8529685,
            "subject": {
                "id": 11290,
                "name": "CÁLCULO III",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061803010605",
                "course": {
                    "id": 10512,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2344,
                        "indexLevel": 3,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 194,
                    "name": "Mayo-2013/Julio-2013",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "11",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8537749,
            "subject": {
                "id": 11293,
                "name": "QUÍMICA",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061803020605",
                "course": {
                    "id": 10513,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2344,
                        "indexLevel": 3,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 194,
                    "name": "Mayo-2013/Julio-2013",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "12",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8738660,
            "subject": {
                "id": 11295,
                "name": "FÍSICA II",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061803030605",
                "course": {
                    "id": 10514,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2344,
                        "indexLevel": 3,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 199,
                    "name": "Septiembre-2013/Diciembre-2013",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "11",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8657002,
            "subject": {
                "id": 11306,
                "name": "PROGRAMACIÓN I",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061804030605",
                "course": {
                    "id": 10525,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2345,
                        "indexLevel": 4,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 199,
                    "name": "Septiembre-2013/Diciembre-2013",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "17",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8685677,
            "subject": {
                "id": 11304,
                "name": "MATEMÁTICA DISCRETA",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061804020605",
                "course": {
                    "id": 10524,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2345,
                        "indexLevel": 4,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 199,
                    "name": "Septiembre-2013/Diciembre-2013",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "13",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8695733,
            "subject": {
                "id": 11307,
                "name": "INGLÉS II",
                "precedences": null,
                "uc": 2,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061804040302",
                "course": {
                    "id": 10526,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2345,
                        "indexLevel": 4,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 199,
                    "name": "Septiembre-2013/Diciembre-2013",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "18",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8752769,
            "subject": {
                "id": 11308,
                "name": "ACTIVIDADES RECREACIONALES",
                "precedences": null,
                "uc": 2,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061804050302",
                "course": {
                    "id": 10527,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2345,
                        "indexLevel": 4,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 199,
                    "name": "Septiembre-2013/Diciembre-2013",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "18",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8884956,
            "subject": {
                "id": 11300,
                "name": "CÁLCULO IV",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061804010605",
                "course": {
                    "id": 10523,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2345,
                        "indexLevel": 4,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 202,
                    "name": "Enero-2014/Abril-2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "10",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8882971,
            "subject": {
                "id": 11313,
                "name": "ESTADÍSTICA",
                "precedences": null,
                "uc": 3,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061805020403",
                "course": {
                    "id": 10536,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2346,
                        "indexLevel": 5,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 202,
                    "name": "Enero-2014/Abril-2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "11",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8914561,
            "subject": {
                "id": 11317,
                "name": "INGLÉS III",
                "precedences": null,
                "uc": 2,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061805040302",
                "course": {
                    "id": 10539,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2346,
                        "indexLevel": 5,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 202,
                    "name": "Enero-2014/Abril-2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "16",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8920964,
            "subject": {
                "id": 11321,
                "name": "SISTEMAS OPERATIVOS",
                "precedences": null,
                "uc": 3,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061805060303",
                "course": {
                    "id": 10541,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2346,
                        "indexLevel": 5,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 202,
                    "name": "Enero-2014/Abril-2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "19",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8931865,
            "subject": {
                "id": 11311,
                "name": "DESARROLLO SUSTENTABLE",
                "precedences": null,
                "uc": 3,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061805010303",
                "course": {
                    "id": 10535,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2346,
                        "indexLevel": 5,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 202,
                    "name": "Enero-2014/Abril-2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "19",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8964351,
            "subject": {
                "id": 11318,
                "name": "HARDWARE DE COMPUTADORA",
                "precedences": null,
                "uc": 3,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061805050403",
                "course": {
                    "id": 10540,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2346,
                        "indexLevel": 5,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 202,
                    "name": "Enero-2014/Abril-2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "18",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 8983160,
            "subject": {
                "id": 11316,
                "name": "PROGRAMACIÓN II",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061805030605",
                "course": {
                    "id": 10538,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2346,
                        "indexLevel": 5,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 202,
                    "name": "Enero-2014/Abril-2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "12",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9039486,
            "subject": {
                "id": 11327,
                "name": "PROGRAMACIÓN III",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061806030605",
                "course": {
                    "id": 10546,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2347,
                        "indexLevel": 6,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 207,
                    "name": "Mayo-2014/Julio 2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "18",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9042662,
            "subject": {
                "id": 11329,
                "name": "GESTIÓN DE PROYECTOS INFORMÁTICOS",
                "precedences": null,
                "uc": 4,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061806050504",
                "course": {
                    "id": 10548,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2347,
                        "indexLevel": 6,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 207,
                    "name": "Mayo-2014/Julio 2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "18",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9066891,
            "subject": {
                "id": 11326,
                "name": "BASE DE DATOS I",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061806020605",
                "course": {
                    "id": 10545,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2347,
                        "indexLevel": 6,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 207,
                    "name": "Mayo-2014/Julio 2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "12",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9114717,
            "subject": {
                "id": 11324,
                "name": "CALIDAD Y PRODUCTIVIDAD",
                "precedences": null,
                "uc": 3,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061806010403",
                "course": {
                    "id": 10544,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2347,
                        "indexLevel": 6,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 207,
                    "name": "Mayo-2014/Julio 2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "15",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9115382,
            "subject": {
                "id": 11328,
                "name": "INGLÉS IV",
                "precedences": null,
                "uc": 2,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061806040302",
                "course": {
                    "id": 10547,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2347,
                        "indexLevel": 6,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 207,
                    "name": "Mayo-2014/Julio 2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "19",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9145353,
            "subject": {
                "id": 11341,
                "name": "INGENIERÍA ECONÓMICA",
                "precedences": null,
                "uc": 3,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061807050403",
                "course": {
                    "id": 10565,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2348,
                        "indexLevel": 7,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 207,
                    "name": "Mayo-2014/Julio 2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "11",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9194363,
            "subject": {
                "id": 11344,
                "name": "SERVICIO COMUNITARIO (LEY)",
                "precedences": null,
                "uc": 0,
                "type": "S",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061807001000",
                "course": {
                    "id": 12017,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2348,
                        "indexLevel": 7,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 212,
                    "name": "Septiembre-2014/Diciembre-2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "20",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9222610,
            "subject": {
                "id": 11337,
                "name": "COMPILADORES",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061807030605",
                "course": {
                    "id": 10563,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2348,
                        "indexLevel": 7,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 212,
                    "name": "Septiembre-2014/Diciembre-2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "20",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9232583,
            "subject": {
                "id": 11339,
                "name": "INGLÉS V",
                "precedences": null,
                "uc": 2,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061807040302",
                "course": {
                    "id": 10564,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2348,
                        "indexLevel": 7,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 212,
                    "name": "Septiembre-2014/Diciembre-2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "20",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9284873,
            "subject": {
                "id": 11333,
                "name": "BASE DE DATOS II",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061807010605",
                "course": {
                    "id": 10559,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2348,
                        "indexLevel": 7,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 212,
                    "name": "Septiembre-2014/Diciembre-2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "14",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9308503,
            "subject": {
                "id": 11335,
                "name": "TEORÍA GENERAL DE SISTEMAS",
                "precedences": null,
                "uc": 4,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061807020504",
                "course": {
                    "id": 10562,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2348,
                        "indexLevel": 7,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 212,
                    "name": "Septiembre-2014/Diciembre-2014",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "14",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9391660,
            "subject": {
                "id": 11385,
                "name": "REDES I",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061808010605",
                "course": {
                    "id": 10597,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2349,
                        "indexLevel": 8,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 233,
                    "name": "Enero-2015/Abril-2015",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "20",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9431632,
            "subject": {
                "id": 11387,
                "name": "COMPUTACIÓN GRÁFICA",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061808030605",
                "course": {
                    "id": 10599,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2349,
                        "indexLevel": 8,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 233,
                    "name": "Enero-2015/Abril-2015",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "20",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9464015,
            "subject": {
                "id": 11386,
                "name": "INGENIERÍA DEL SOFTWARE I",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061808020605",
                "course": {
                    "id": 10598,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2349,
                        "indexLevel": 8,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 233,
                    "name": "Enero-2015/Abril-2015",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "19",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9477353,
            "subject": {
                "id": 12882,
                "name": "INGLÉS EXPRESIÓN ORAL",
                "precedences": null,
                "uc": 2,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061808050302",
                "course": {
                    "id": 10601,
                    "name": "OPTATIVA I",
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2349,
                        "indexLevel": 8,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 233,
                    "name": "Enero-2015/Abril-2015",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "20",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9485900,
            "subject": {
                "id": 14860,
                "name": "SEGURIDAD INFORMÁTICA",
                "precedences": null,
                "uc": 2,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061808040302",
                "course": {
                    "id": 10600,
                    "name": "ELECTIVA I",
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2349,
                        "indexLevel": 8,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 233,
                    "name": "Enero-2015/Abril-2015",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "19",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9587177,
            "subject": {
                "id": 11392,
                "name": "REDES II",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061809010605",
                "course": {
                    "id": 10604,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2350,
                        "indexLevel": 9,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 254,
                    "name": "Mayo-2015 /Agosto-2015",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "19",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9595524,
            "subject": {
                "id": 14393,
                "name": "PROGRAMACIÓN DE VIDEO JUEGOS",
                "precedences": null,
                "uc": 2,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061809040302",
                "course": {
                    "id": 10607,
                    "name": "ELECTIVA II",
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2350,
                        "indexLevel": 9,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 254,
                    "name": "Mayo-2015 /Agosto-2015",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "20",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9624055,
            "subject": {
                "id": 11394,
                "name": "MULTIMEDIA Y DISEÑO WEB",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061809030605",
                "course": {
                    "id": 10606,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2350,
                        "indexLevel": 9,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 254,
                    "name": "Mayo-2015 /Agosto-2015",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "19",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9678995,
            "subject": {
                "id": 12888,
                "name": "INGLÉS ESTRATÉGICO OCUPACIONAL",
                "precedences": null,
                "uc": 2,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061809050302",
                "course": {
                    "id": 10608,
                    "name": "OPTATIVA II",
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2350,
                        "indexLevel": 9,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 254,
                    "name": "Mayo-2015 /Agosto-2015",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "20",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9679414,
            "subject": {
                "id": 11393,
                "name": "INGENIERÍA DEL SOFTWARE II",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061809020605",
                "course": {
                    "id": 10605,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2350,
                        "indexLevel": 9,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 254,
                    "name": "Mayo-2015 /Agosto-2015",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "20",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9799073,
            "subject": {
                "id": 11405,
                "name": "AUDITORÍA Y EVALUACIÓN DE SISTEMAS",
                "precedences": null,
                "uc": 4,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061810020404",
                "course": {
                    "id": 10619,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2351,
                        "indexLevel": 10,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 423,
                    "name": "Septiembre-2015/Diciembre-2015",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "19",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9822146,
            "subject": {
                "id": 11406,
                "name": "PROGRAMACIÓN WEB",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061810030605",
                "course": {
                    "id": 10620,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2351,
                        "indexLevel": 10,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 423,
                    "name": "Septiembre-2015/Diciembre-2015",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "19",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9861060,
            "subject": {
                "id": 12884,
                "name": "INGLÉS ESCRITURA Y REDACCIÓN",
                "precedences": null,
                "uc": 2,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061810050302",
                "course": {
                    "id": 10623,
                    "name": "OPTATIVA III",
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2351,
                        "indexLevel": 10,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 423,
                    "name": "Septiembre-2015/Diciembre-2015",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "18",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9865855,
            "subject": {
                "id": 11408,
                "name": "INTELIGENCIA ARTIFICIAL",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061810040605",
                "course": {
                    "id": 10622,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2351,
                        "indexLevel": 10,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 423,
                    "name": "Septiembre-2015/Diciembre-2015",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "18",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 9951921,
            "subject": {
                "id": 11402,
                "name": "SEMINARIO DE INVESTIGACIÓN I",
                "precedences": null,
                "uc": 3,
                "type": "M",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061810010503",
                "course": {
                    "id": 10618,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2351,
                        "indexLevel": 10,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 423,
                    "name": "Septiembre-2015/Diciembre-2015",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "20",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 10011795,
            "subject": {
                "id": 11425,
                "name": "ÉTICA Y DEONTOLOGÍA",
                "precedences": null,
                "uc": 3,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061811060403",
                "course": {
                    "id": 10631,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2352,
                        "indexLevel": 11,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 473,
                    "name": "Enero-2016/Abril-2016",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "19",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 10015767,
            "subject": {
                "id": 11421,
                "name": "SIMULACIÓN DE SISTEMAS",
                "precedences": null,
                "uc": 5,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061811020605",
                "course": {
                    "id": 10627,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2352,
                        "indexLevel": 11,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 473,
                    "name": "Enero-2016/Abril-2016",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "20",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 10088271,
            "subject": {
                "id": 11423,
                "name": "ADMINISTRACIÓN DE CENTROS DE INFORMÁTICA",
                "precedences": null,
                "uc": 4,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061811040404",
                "course": {
                    "id": 10629,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2352,
                        "indexLevel": 11,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 473,
                    "name": "Enero-2016/Abril-2016",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "16",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 10105729,
            "subject": {
                "id": 14859,
                "name": "GESTIÓN TECNOLÓGICA",
                "precedences": null,
                "uc": 2,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061811050302",
                "course": {
                    "id": 10630,
                    "name": "ELECTIVA III",
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2352,
                        "indexLevel": 11,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 473,
                    "name": "Enero-2016/Abril-2016",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "17",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 10126230,
            "subject": {
                "id": 11422,
                "name": "DESARROLLO DE LA CAPACIDAD EMPRENDEDORA",
                "precedences": null,
                "uc": 2,
                "type": "N",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061811030302",
                "course": {
                    "id": 10628,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2352,
                        "indexLevel": 11,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 473,
                    "name": "Enero-2016/Abril-2016",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "19",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }, {
            "id": 10160464,
            "subject": {
                "id": 11420,
                "name": "SEMINARIO DE INVESTIGACIÓN II",
                "precedences": null,
                "uc": 3,
                "type": "T",
                "required": false,
                "level": 0,
                "pensum": null,
                "code": "061811010303",
                "course": {
                    "id": 10626,
                    "name": null,
                    "courseOrder": 0,
                    "courseLevel": {
                        "id": 2352,
                        "indexLevel": 11,
                        "maxUC": 0,
                        "subjects": null,
                        "description": "SEMESTRE"
                    },
                    "mandatory": null,
                    "ucRequired": 0
                }
            },
            "inscription": {
                "id": 0,
                "people": null,
                "pensum": null,
                "period": {
                    "id": 473,
                    "name": "Enero-2016/Abril-2016",
                    "type": "A"
                },
                "study": null,
                "token": 0,
                "creditsApproved": 0,
                "state": null,
                "gpa": 0
            },
            "score": "20",
            "indexLevel": 0,
            "studyType": "PREGRADO"
        }];

        data.login = function() {
            return login;
        };

        data.pensum = function() {
            return pensum;
        };

        data.pensumScore = function() {
            return pensumScore;
        };

        return data;
    });
