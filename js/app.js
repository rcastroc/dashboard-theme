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

                        {"nombre" : "Nota promedio de satisfacción de salud", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "29KZ897D4", "orden" : 1},
                        {"nombre" : "Nota promedio de bienestar mental", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "XWWN5XRN4", "orden" : 2},
                        {"nombre" : "Prevalencia de discapacidad", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "X7XYHMFX5", "orden" : 3},
                        {"nombre" : "Tasa de ingresos con SBO 0 a 9 años", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "Z42NGGDYG", "orden" : 4},
                        {"nombre" : "Porcentaje de personas que afirma que su salud es muy buena o buena", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "D57C8Y7B9", "orden" : 5},
                        {"nombre" : "Porcentaje de personas que presenta síntomas depresivos", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "BZRQ8DSDG", "orden" : 6},
                        {"nombre" : "Tasa de mortalidad materna", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "BYF6PT4JC", "orden" : 7},
                        {"nombre" : "Tasa de mortalidad infantil ajustada por edad de la madre", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "BK2S5DQKM", "orden" : 8},
                        {"nombre" : "Tasa de mortalidad por todas las causas (general ajustada) H y M", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "PPXJKT2G6", "orden" : 9},
                        {"nombre" : "Tasa de mortalidad enfermedades sistema circulatorio", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "5XP7ZWPTK", "orden" : 10},
                        {"nombre" : "Tasa de mortalidad tumores", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "JKKFYNXGY", "orden" : 11},
                        {"nombre" : "Tasa de mortalidad traumatismos y envenenamiento", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "J6Y465FND", "orden" : 12},
                        {"nombre" : "Tasa mortalidad por enfermedad isquémica", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "5T2QZR939", "orden" : 13},
                        {"nombre" : "Tasa mortalidad por enfermedad cerebrovascular", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "7NF69F8DB", "orden" : 14},
                        {"nombre" : "Tasa de mortalidad por accidentes de tránsito", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "9FRDG9PDW", "orden" : 15},
                        {"nombre" : "Tasa de notificación por TBC", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "H6Z8K68JY", "orden" : 16},
                        {"nombre" : "Tasa de notificación por VIH", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "HXPYM226R", "orden" : 17},
                        {"nombre" : "Tasa de notificación por Sífilis congénita", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "ZJJRN78C3", "orden" : 18},
                        {"nombre" : "Tasa de Incidencia anual de Hepatitis A y de Hepatitis viral sin especificación (CIE 10 B15.0; B15.9; B19.0 y B19.9)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "QJPK6XZHS", "orden" : 19},
                        {"nombre" : "Porcentaje de atenciones por diarrea en todas las edades", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "M2X847GCN", "orden" : 20},
                        {"nombre" : "Tasa de hospitalización anual de casos asociados a brotes de Enfermedad Transmitidas por Alimentos", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "S8YPTKZCY", "orden" : 21},
                        {"nombre" : "Tasa de incidencia Hanta", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "SR8HQ5K5M", "orden" : 22},
                        {"nombre" : "Tasa de incidencia Chagas", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "HBPKHNJZH", "orden" : 23},
                        {"nombre" : "Número de egresos hospitalarios por hidatidosis", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "TRBFH6JMB", "orden" : 24},
                        {"nombre" : "Tasa de Incidencia anual de Coqueluche debido a Bordetella pertussis (A37.0)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "BHPSFKD7X", "orden" : 25},
                        {"nombre" : "Tasa de incidencia Enfermedad meningococica", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "DTXF8QC8H", "orden" : 26},
                        {"nombre" : "Incidencia Estimada de Cáncer ajustada por edad", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "NG7ZX6GYG", "orden" : 27},
                        {"nombre" : "AVPP (por 100.000 hab.)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "PCGKWG344", "orden" : 28},
                        {"nombre" : "Tasa de AVPP (por 100.000 hab.)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "6MR69CX8D", "orden" : 29},
                        {"nombre" : "Porcentaje AVPP región respecto de AVPP Nacional", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "8S2H2Q2SG", "orden" : 30},
                        {"nombre" : "Ranking de regiones según: %AVPP región respecto de AVPP Nacional", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "B9XW28PPJ", "orden" : 31},
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