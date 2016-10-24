angular.module('app', ['ngRoute','ui.bootstrap'])
.value('firstCode', 'MMXMF7QK9')
.config(function($routeProvider) {
   $routeProvider
    .when("/", {
       templateUrl : "chart.html",
       controller: "chartCtrl",
       controllerAs: "vm",
    })
    .when("/:code", {
        templateUrl: "chart.html",
        controller: "chartCtrl",
        controllerAs: "vm",
    });
})
  .controller('AppController', function(firstCode) {
    var app = this;
    app.search = "";
    app.temas = ["Socioeconómico", "Sistema de Salud", "Territorio y Demografía" ,"Estilos de Vida y Factores de Riesgo" ,"Psicosocial y Redes" ,"Morbilidad, Bienestar y Daño en Salud"];
    app.filter_result = {};
    app.collapse = {};
    app.codigo_tableau = 1;
    app.codigo_tableau = firstCode;

    app.indicadores = [                    
                        {"nombre" : "Indicador #1", "tema" : "Socioeconómico", "codigo" : "12", "orden" : 1},
                        {"nombre" : "Indicador #2", "tema" : "Socioeconómico", "codigo" : "13", "orden" : 2},
                        {"nombre" : "Indicador #3", "tema" : "Socioeconómico", "codigo" : "14", "orden" : 3},

                        {"nombre" : "Indicador #1", "tema" : "Sistema de Salud", "codigo" : "15", "orden" : 1},
                        {"nombre" : "Indicador #2", "tema" : "Sistema de Salud", "codigo" : "16", "orden" : 2},
                        {"nombre" : "Indicador #3", "tema" : "Sistema de Salud", "codigo" : "17", "orden" : 3},

                        {"nombre" : "Indicador #1", "tema" : "Territorio y Demografía", "codigo" : "18", "orden" : 1},
                        {"nombre" : "Indicador #2", "tema" : "Territorio y Demografía", "codigo" : "19", "orden" : 2},
                        {"nombre" : "Indicador #3", "tema" : "Territorio y Demografía", "codigo" : "20", "orden" : 3},

                        {"nombre" : "Indicador #1", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "4", "orden" : 1},
                        {"nombre" : "Indicador #2", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "7", "orden" : 2},
                        {"nombre" : "Indicador #3", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "3", "orden" : 3},

                        {"nombre" : "Indicador #1", "tema" : "Psicosocial y Redes", "codigo" : "5", "orden" : 1},
                        {"nombre" : "Indicador #2", "tema" : "Psicosocial y Redes", "codigo" : "21", "orden" : 2},
                        {"nombre" : "Indicador #3", "tema" : "Psicosocial y Redes", "codigo" : "22", "orden" : 3},

                        {"nombre" : "Nota promedio de satisfacción en salud", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "G7NS4MGYG", "orden" : 1},
                        {"nombre" : "Nota promedio bienestar mental", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "K5TRHG7BN", "orden" : 2},
                        {"nombre" : "Prevalencia de discapacidad", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "X7XYHMFX5", "orden" : 3},
                        {"nombre" : "Tasa de ingresos con Síndrome Bronquial Obstructivo (SBO) 0 a 9 años", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "3SCYHK4G2", "orden" : 4},
                        {"nombre" : "Porcentaje de personas que afirma que su salud es muy buena o buena", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "D57C8Y7B9", "orden" : 5},
                        {"nombre" : "Porcentaje de personas que presenta síntomas depresivos", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "BZRQ8DSDG", "orden" : 6},
                        {"nombre" : "Razón de mortalidad materna (RMM)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "W34BSFSRZ", "orden" : 7},
                        {"nombre" : "Tasa ajustada de mortalidad infantil ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "RC763BWJ7", "orden" : 8},
                        {"nombre" : "Tasa trienal de mortalidad general ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "ZNT4J2G2T", "orden" : 9},
                        {"nombre" : "Tasa de mortalidad enfermedades sistema circulatorio ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "KPPY578XX", "orden" : 10},
                        {"nombre" : "Tasa de mortalidad de tumores bruta y ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "8JNGP4SNM", "orden" : 11},
                        {"nombre" : "Tasa de mortalidad de traumatismos y envenenamiento ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "TJ8MHC734", "orden" : 12},
                        {"nombre" : "Tasa de mortalidad de Enfermedad Isquémicas del Corazón ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "JD5CN7TDP", "orden" : 13},
                        {"nombre" : "Tasa de mortalidad por enfermedad cerebrovascular ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "SY433XCDR", "orden" : 14},
                        {"nombre" : "Tasa de mortalidad por accidentes de tránsito ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "SZX4PDKZR", "orden" : 15},
                        {"nombre" : "Tasa de accidentes laborales fatales", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "77J7374ZX", "orden" : 16},
                        {"nombre" : "Tasa de notificación por Tuberculosis (TBC)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "88KZ7C5ST", "orden" : 17},
                        {"nombre" : "Tasa de casos notificados VIH/SIDA", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "YH4N4MKWT", "orden" : 18},
                        {"nombre" : "Tasa de notificación por Sífilis congénita", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "ZJJRN78C3", "orden" : 19},
                        {"nombre" : "Tasa de Incidencia anual de Hepatitis A y de Hepatitis viral sin especificación (CIE 10 B15.0; B15.9; B19.0 y B19.9)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "QJPK6XZHS", "orden" : 20},
                        {"nombre" : "Porcentaje de atenciones por diarrea en todas las edades", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "RTQ28357P", "orden" : 21},
                        {"nombre" : "Tasa de hospitalización anual de casos asociados a brotes de Enfermedad Transmitidas por Alimentos", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "5M3TGN7DS", "orden" : 22},
                        {"nombre" : "Tasa de incidencia acumulada de Síndrome cardiopulmonar por hantavirus", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "T2PSTMM8H", "orden" : 23},
                        {"nombre" : "Tasa de incidencia acumulada de Enfermedad de Chagas", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "XWZQN37CK", "orden" : 24},
                        {"nombre" : "Número de egresos hospitalarios por hidatidosis", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "JFD46GD5R", "orden" : 25},
                        {"nombre" : "Tasa de Incidencia anual de Coqueluche debido a Bordetella pertussis (A37.0)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "BHPSFKD7X", "orden" : 26},
                        {"nombre" : "Tasa de incidencia acumulada Enfermedad Meningocócica", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "6G4HXXQ7P", "orden" : 27},
                        {"nombre" : "Tasa Estimada de Incidencia de Cáncer Estandarizada por Edad (TEICEE)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "65QMKDJDX", "orden" : 28},
                        {"nombre" : "Años de Vida Potencialmente Perdidos (AVPP)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "JZ6G4YHH9", "orden" : 29},
                        {"nombre" : "Tasa Estandarizada por Edad de Años de Vida Potencialmente Perdidos (TEE_AVPP)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "7HXN4WM8T", "orden" : 30},
                        {"nombre" : "Porcentaje AVPP región respecto de AVPP Nacional", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "8S2H2Q2SG", "orden" : 31},
                        {"nombre" : "Ranking de regiones para Porcentaje de AVPP", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "87WJ2JY45", "orden" : 32},
                    ];


    app.searching = function(){
        console.log("searching", app.search);
        for (var i = 0; i < app.temas.length; i++) {
            if(app.filter_result[i].length == 0 || app.search == ""){
                app.collapse[i] = true;
            }
            else{
                app.collapse[i] = false;
            }
        }

    }
  })
  .controller('chartCtrl', function($routeParams, $timeout, firstCode) {
    
    var vm = this;
    vm.code =  $routeParams.code ? $routeParams.code : firstCode;

    $timeout(function() {
        var divElement = document.getElementById('viz1475702114077');                    
        var vizElement = divElement.getElementsByTagName('object')[0];                    
        vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    
        var scriptElement = document.createElement('script');                    
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
    }, 500);



         

  });