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
    app.temas = ["Socioeconómico", "Sistema de Salud", "Territorio y Demografía" ,"Estilos de Vida y Factores de Riesgo" ,"Psicosocial y Redes" ,"Morbilidad", "Bienestar y Daño en Salud"];
    app.filter_result = {};
    app.collapse = {};
    app.codigo_tableau = 1;
    app.codigo_tableau = firstCode;

    app.indicadores = [
                        {"nombre" : "Indicador #1", "tema" : "Socioeconómico", "codigo" : "MMXMF7QK9", "orden" : 1},
                        {"nombre" : "Indicador #2", "tema" : "Socioeconómico", "codigo" : "8T6Z4JZ7S", "orden" : 1},
                        {"nombre" : "Indicador #1", "tema" : "Sistema de Salud", "codigo" : "MMXMF7QK9", "orden" : 2},
                        {"nombre" : "Indicador #2", "tema" : "Sistema de Salud", "codigo" : "8T6Z4JZ7S", "orden" : 1},
                        {"nombre" : "Indicador #3", "tema" : "Sistema de Salud", "codigo" : "HKH3RJSM7", "orden" : 3},
                        {"nombre" : "Indicador #1", "tema" : "Territorio y Demografía", "codigo" : "MMXMF7QK9", "orden" : 1},
                        {"nombre" : "Indicador #2", "tema" : "Territorio y Demografía", "codigo" : "8T6Z4JZ7S", "orden" : 1},
                        {"nombre" : "Indicador #1", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "MMXMF7QK9", "orden" : 1},
                        {"nombre" : "Indicador #2", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "8T6Z4JZ7S", "orden" : 1},
                        {"nombre" : "Indicador #1", "tema" : "Psicosocial y Redes", "codigo" : "HKH3RJSM7", "orden" : 1},
                        {"nombre" : "Indicador #2", "tema" : "Psicosocial y Redes", "codigo" : "HKH3RJSM7", "orden" : 1},
                        {"nombre" : "Indicador #3", "tema" : "Psicosocial y Redes", "codigo" : "12", "orden" : 1},
                        {"nombre" : "Indicador #4", "tema" : "Psicosocial y Redes", "codigo" : "13", "orden" : 1},
                        {"nombre" : "Indicador #1", "tema" : "Morbilidad", "codigo" : "14", "orden" : 1},
                        {"nombre" : "Indicador #2", "tema" : "Morbilidad", "codigo" : "15", "orden" : 1},
                        {"nombre" : "Indicador #1", "tema" : "Bienestar y Daño en Salud", "codigo" : "16", "orden" : 1},
                        {"nombre" : "Indicador #2", "tema" : "Bienestar y Daño en Salud", "codigo" : "17", "orden" : 1},
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