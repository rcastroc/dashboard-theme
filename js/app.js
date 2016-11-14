angular.module('app', ['ngRoute','ui.bootstrap'])
.value('firstCode', '2QJK4WYMF')
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
                        {"nombre" : "Porcentaje de personas indigentes", "tema" : "Socioeconómico", "codigo" : "2QJK4WYMF", "orden" : 1},
                        {"nombre" : "Porcentaje de personas pobres no indigentes", "tema" : "Socioeconómico", "codigo" : "Q84XXRNBN", "orden" : 2},
                        {"nombre" : "Porcentaje total de personas pobres", "tema" : "Socioeconómico", "codigo" : "S3ZH9GW8F", "orden" : 3},
                        {"nombre" : "Porcentaje de hogares pobres", "tema" : "Socioeconómico", "codigo" : "PXQCDQ3RH", "orden" : 4},
                        {"nombre" : "Porcentaje de hogares en situación de Pobreza Multidimensional", "tema" : "Socioeconómico", "codigo" : "Z5W9JZYN9", "orden" : 5},
                        {"nombre" : "Variación de pobreza", "tema" : "Socioeconómico", "codigo" : "R59KKPKGX", "orden" : 6},
                        {"nombre" : "Brecha de pobreza Mujer-Hombre", "tema" : "Socioeconómico", "codigo" : "DTWX5FZZT", "orden" : 7},
                        {"nombre" : "Brecha de pobreza Urbano-Rural", "tema" : "Socioeconómico", "codigo" : "49CYW4MKM", "orden" : 8},
                        {"nombre" : "Brecha de pobreza de personas pertenencientes a pueblos originarios-No perteneciente a pueblos originarios", "tema" : "Socioeconómico", "codigo" : "B5J86QKMH", "orden" : 9},
                        {"nombre" : "Coeficiente de GINI de ingreso Autónomo-Monetario", "tema" : "Socioeconómico", "codigo" : "Q7MG2CF3S", "orden" : 10},
                        {"nombre" : "Relación 20/20 de ingreso monetario", "tema" : "Socioeconómico", "codigo" : "5DNRK5WRM", "orden" : 11},
                        {"nombre" : "Porcentaje de personas desocupadas", "tema" : "Socioeconómico", "codigo" : "73QJP8MC5", "orden" : 12},
                        {"nombre" : "Brecha de desocupación M-H", "tema" : "Socioeconómico", "codigo" : "B325KXNPB", "orden" : 13},
                        {"nombre" : "Porcentaje de personas cesantes", "tema" : "Socioeconómico", "codigo" : "THCC6N48P", "orden" : 14},
                        {"nombre" : "Porcentaje de participación laboral", "tema" : "Socioeconómico", "codigo" : "Z3M3MDPMQ", "orden" : 15},
                        {"nombre" : "Porcentaje de alfabetización", "tema" : "Socioeconómico", "codigo" : "NYNZYCCPC", "orden" : 16},
                        {"nombre" : "Promedio de años de escolaridad", "tema" : "Socioeconómico", "codigo" : "GHH4DRJ8C", "orden" : 17},
                        {"nombre" : "Porcentaje de cobertura educacional total", "tema" : "Socioeconómico", "codigo" : "MB92J9B7Q", "orden" : 18},
                        {"nombre" : "Porcentaje de cobertura educacional preescolar", "tema" : "Socioeconómico", "codigo" : "WK4BPKH74", "orden" : 19},
                        {"nombre" : "Porcentaje de cobertura educacional básica", "tema" : "Socioeconómico", "codigo" : "ZQTSD2QD6", "orden" : 20},
                        {"nombre" : "Porcentaje de cobertura educacional media", "tema" : "Socioeconómico", "codigo" : "SCDX47MHM", "orden" : 21},
                        {"nombre" : "Brecha escolaridad Quintil I-Quintil V", "tema" : "Socioeconómico", "codigo" : "PQRHTCWJP", "orden" : 22},
                        {"nombre" : "Brecha escolaridad Urbano-Rural", "tema" : "Socioeconómico", "codigo" : "FRDKSJMXX", "orden" : 23},
                        {"nombre" : "Brecha escolaridad Etnia-No etnia", "tema" : "Socioeconómico", "codigo" : "8BNW6RQ4N", "orden" : 24},
                        {"nombre" : "Ingreso autónomo promedio mensual del hogar", "tema" : "Socioeconómico", "codigo" : "2CKK5QG4H", "orden" : 25},
                        {"nombre" : "Ingreso monetario promedio mensual del hogar", "tema" : "Socioeconómico", "codigo" : "XWBY46HQN", "orden" : 26},
                        {"nombre" : "Porcentaje de ocupados asalariados sin contrato firmado", "tema" : "Socioeconómico", "codigo" : "QQZGSYZ3G", "orden" : 27},
                        {"nombre" : "Porcentaje de ocupados asalariados con contrato escrito", "tema" : "Socioeconómico", "codigo" : "3QHCHMXRC", "orden" : 28},
                        {"nombre" : "Porcentaje de trabajadores por cuenta propia", "tema" : "Socioeconómico", "codigo" : "3YRCSYKDY", "orden" : 29},
                        {"nombre" : "Porcentaje de viviendas con saneamiento deficitario", "tema" : "Socioeconómico", "codigo" : "BB34TG5B2", "orden" : 30},
                        {"nombre" : "Porcentaje de viviendas con saneamiento aceptable", "tema" : "Socioeconómico", "codigo" : "PKMBYBTZT", "orden" : 31},
                        {"nombre" : "Porcentaje de viviendas con hacinamiento crítico", "tema" : "Socioeconómico", "codigo" : "9NFR8R5NR", "orden" : 32},
                        {"nombre" : "Porcentaje de viviendas con materialidad irreparable", "tema" : "Socioeconómico", "codigo" : "3K6N6QX38", "orden" : 33},
                        {"nombre" : "Porcentaje requerimiento de viviendas irrecuperable (Calidad Global de la Vivienda)", "tema" : "Socioeconómico", "codigo" : "W734MQZ48", "orden" : 34},
                        {"nombre" : "Porcentaje personas cocina con parafina, carbón, leña", "tema" : "Socioeconómico", "codigo" : "KYS6XY7KD", "orden" : 35},
                        {"nombre" : "Porcentaje de personas identifica micro basurales en el barrio", "tema" : "Socioeconómico", "codigo" : "KYSQF38H9", "orden" : 36},
                        {"nombre" : "Porcentaje de hogares con computador", "tema" : "Socioeconómico", "codigo" : "HQD2B8T2D", "orden" : 37},
                        {"nombre" : "Porcentaje personas de 15 a 64 años activas sin cotizar", "tema" : "Socioeconómico", "codigo" : "PQ99JJYYK", "orden" : 38},
                        {"nombre" : "Porcentaje de trabajadores ocupados que trabajan más de 8 horas", "tema" : "Socioeconómico", "codigo" : "5DRXDRBMQ", "orden" : 39},
                        {"nombre" : "Porcentaje persona afecta responsabilidad laboral", "tema" : "Socioeconómico", "codigo" : "QRZTQSMHD", "orden" : 40},
                        {"nombre" : "Porcentaje de personas que están afectas a inestabilidad laboral", "tema" : "Socioeconómico", "codigo" : "R2KFFP2H8", "orden" : 41},
                        {"nombre" : "Indice de Desarrollo Humano (IDH)", "tema" : "Socioeconómico", "codigo" : "QQ66F7Z6H", "orden" : 42},
                        {"nombre" : "Tasa de desocupación", "tema" : "Socioeconómico", "codigo" : "7MBTQGGFD", "orden" : 43},
                        {"nombre" : "Brecha escolaridad Hombre-Mujer", "tema" : "Socioeconómico", "codigo" : "YGP3KDT3Z", "orden" : 44},
                        {"nombre" : "Índice de Vulnerabilidad Social y Condiciones de Vida (IV)", "tema" : "Socioeconómico", "codigo" : "T6P7CBCWY", "orden" : 45},
                         {"nombre" : "Índice de Concetracion de niños con mal nutrición por exceso y decil autonomo de ingreso (MN)", "tema" : "Socioeconómico", "codigo" : "Q57J886HN", "orden" : 46},

                        {"nombre" : "Gasto Público en Servicios Individuales de Salud Per Cápita (GPSIS)", "tema" : "Sistema de Salud", "codigo" : "75B5JR9M7", "orden" : 1},
                        {"nombre" : "Gasto Público en Servicios Colectivos de Salud Per Cápita (GPSCS)", "tema" : "Sistema de Salud", "codigo" : "GD2M23D2Q", "orden" : 2},
                        {"nombre" : "Porcentaje de personas que pertenecen a algún grupo de FONASA", "tema" : "Sistema de Salud", "codigo" : "J3RW7H856", "orden" : 3},
                        {"nombre" : "Porcentaje menores de 6 años en control con sobrepeso", "tema" : "Sistema de Salud", "codigo" : "NCRYB4XK4", "orden" : 4},
                        {"nombre" : "Porcentaje de niños menores de 6 años en control con obesidad", "tema" : "Sistema de Salud", "codigo" : "NDMYQK6R9", "orden" : 5},
                        {"nombre" : "Porcentaje de nacidos vivos de madres menores de 15 años", "tema" : "Sistema de Salud", "codigo" : "C5JR79PSP", "orden" : 6},
                        {"nombre" : "Porcentaje de embarazadas menores de 15 años que se encuentren en control en el sistema público de salud", "tema" : "Sistema de Salud", "codigo" : "5KHH268P9", "orden" : 7},
                        {"nombre" : "Porcentaje de embarazadas en control en el sistema público de salud entre 15 y 19 años", "tema" : "Sistema de Salud", "codigo" : "7YN686Z6M", "orden" : 8},
                        {"nombre" : "Porcentaje de niños con bajo peso al nacer", "tema" : "Sistema de Salud", "codigo" : "T43F92HBJ", "orden" : 9},
                        {"nombre" : "Porcentaje de niños con lactancia exclusiva a la edad de 6 meses", "tema" : "Sistema de Salud", "codigo" : "87HCR66DB", "orden" : 10},
                        {"nombre" : "Cantidad de hospitales del sistema público y delegados (Año 2013) por 100.000 habitantes", "tema" : "Sistema de Salud", "codigo" : "D8BH8ZX5X", "orden" : 11},
                        {"nombre" : "Cantidad de hospitales de alta complejidad del sistema público y delegados (Año 2013) por 100.000 habitantes", "tema" : "Sistema de Salud", "codigo" : "B3XTMWSN4", "orden" : 12},
                        {"nombre" : "Horas mensuales disponibles de los pabellones quirúrgicos por 1.000 hab.", "tema" : "Sistema de Salud", "codigo" : "8QN52HPW9", "orden" : 13},
                        {"nombre" : "Nº de camas críticas de los servicios de salud pública por 100.000 habitantes", "tema" : "Sistema de Salud", "codigo" : "48H5SYMPW", "orden" : 14},
                        {"nombre" : "Nº de médicos de los servicios de salud pública afectos a las leyes 15.076 y 19.664 por 100.000 habitantes", "tema" : "Sistema de Salud", "codigo" : "PMDTS5J4T", "orden" : 15},
                        {"nombre" : "Porcentaje de la población que es beneficiaria de FONASA", "tema" : "Sistema de Salud", "codigo" : "72XJPF8ZD", "orden" : 16},
                        {"nombre" : "Porcentaje de la población que es beneficiaria de FONASA A", "tema" : "Sistema de Salud", "codigo" : "YX6675GFK", "orden" : 17},
                        {"nombre" : "Población inscrita en APS", "tema" : "Sistema de Salud", "codigo" : "59X52CDKR", "orden" : 18},
                        {"nombre" : "Porcentaje garantías explícitas retrasadas", "tema" : "Sistema de Salud", "codigo" : "F482M342B", "orden" : 19},
                        {"nombre" : "Porcentaje personas identifica problemas de servicios básicos de salud (consultorios, SAPUs, hospitales, postas, otros.)", "tema" : "Sistema de Salud", "codigo" : "4XNMHMH8Z", "orden" : 20},
                        {"nombre" : "Porcentaje de menores de 6 años en control en el sistema público", "tema" : "Sistema de Salud", "codigo" : "YRKWS9HNT", "orden" : 21},
                        {"nombre" : "Porcentaje de personas de 65 y más años que se encuentran en control en el sistema público de salud", "tema" : "Sistema de Salud", "codigo" : "2WCMWPHWM", "orden" : 22},
                        {"nombre" : "Cobertura efectiva de hipertensión arterial", "tema" : "Sistema de Salud", "codigo" : "9Q9RGG2H2", "orden" : 23},
                        {"nombre" : "Cobertura efectiva de Diabetes", "tema" : "Sistema de Salud", "codigo" : "ZGTH6N5RF", "orden" : 24},
                        {"nombre" : "Porcentaje de hipertensos en tratamiento", "tema" : "Sistema de Salud", "codigo" : "WPQ34RZKX", "orden" : 25},
                        {"nombre" : "Porcentaje de diabéticos en tratamiento", "tema" : "Sistema de Salud", "codigo" : "4SP8KQP43", "orden" : 26},
                        {"nombre" : "Porcentaje personas con problemas de salud que no reciben atención", "tema" : "Sistema de Salud", "codigo" : "37YXGNH4P", "orden" : 27},
                        {"nombre" : "Porcentaje de mujeres de 25 a 64 años que afirma haberse realizado el Papanicolaou (PAP) en los últimos 3 años", "tema" : "Sistema de Salud", "codigo" : "Q9QNGJBYF", "orden" : 28},
                        {"nombre" : "Porcentaje discapacitados accede a rehabilitación", "tema" : "Sistema de Salud", "codigo" : "7ZJ68HWBG", "orden" : 29},
                        {"nombre" : "Menores de 1 año con tercera dosis vacuna pentavalente del PNI", "tema" : "Sistema de Salud", "codigo" : "6H8SMX9P3", "orden" : 30},
                        {"nombre" : "Porcentaje de embarazadas con alta odontológica en sistema público", "tema" : "Sistema de Salud", "codigo" : "K2W538K5D", "orden" : 31},
                        {"nombre" : "Porcentaje de personas que afirma que su salud es muy mala o mala", "tema" : "Sistema de Salud", "codigo" : "WPB5NF3Q2", "orden" : 32},

                        {"nombre" : "Tasa Migración Neta", "tema" : "Territorio y Demografía", "codigo" : "836WDQSPQ", "orden" : 1},
                        {"nombre" : "Índice de Swaroop", "tema" : "Territorio y Demografía", "codigo" : "RF94MMDMQ", "orden" : 2},
                        {"nombre" : "Esperanza de vida", "tema" : "Territorio y Demografía", "codigo" : "9PW73NJC4", "orden" : 3},
                        {"nombre" : "Superficie", "tema" : "Territorio y Demografía", "codigo" : "Y7NSJSTC9", "orden" : 4},
                        {"nombre" : "Porcentaje de población país", "tema" : "Territorio y Demografía", "codigo" : "TQ524RDTF", "orden" : 5},
                        {"nombre" : "Población proyectada (2015 Y 2020)", "tema" : "Territorio y Demografía", "codigo" : "SSS9P276M", "orden" : 6},
                        {"nombre" : "Densidad Poblacional", "tema" : "Territorio y Demografía", "codigo" : "CCP8H3TBZ", "orden" : 7},
                        {"nombre" : "Porcentaje de población por sexo", "tema" : "Territorio y Demografía", "codigo" : "2GFKQN67J", "orden" : 8},
                        {"nombre" : "Porcentaje de población por grupos de edad", "tema" : "Territorio y Demografía", "codigo" : "6X7QYCZJH", "orden" : 9},
                        {"nombre" : "Indice de Masculinidad", "tema" : "Territorio y Demografía", "codigo" : "6GJ5WNB5S", "orden" : 10},
                        {"nombre" : "Indice de Dependecia", "tema" : "Territorio y Demografía", "codigo" : "22SDKQYYT", "orden" : 11},
                        {"nombre" : "Índice de renovación o vejez", "tema" : "Territorio y Demografía", "codigo" : "YH3WR3KJJ", "orden" : 12},
                        {"nombre" : "Porcentaje de personas que viven en zonas rurales", "tema" : "Territorio y Demografía", "codigo" : "RFM69MJ4F", "orden" : 13},
                        {"nombre" : "Porcentaje población originaria", "tema" : "Territorio y Demografía", "codigo" : "SZTDCY2GG", "orden" : 14},
                        {"nombre" : "Tasa crecimiento natural", "tema" : "Territorio y Demografía", "codigo" : "P69CMN63G", "orden" : 15},
                        {"nombre" : "Tasa crecimiento total o exponencial", "tema" : "Territorio y Demografía", "codigo" : "9Q9QM9SB4", "orden" : 16},
                        {"nombre" : "Tasa de natalidad o Tasa Bruta de natalidad", "tema" : "Territorio y Demografía", "codigo" : "G8XSR3JNY", "orden" : 17},
                        {"nombre" : "Tasa global de fecundidad", "tema" : "Territorio y Demografía", "codigo" : "Z9QBNH5QZ", "orden" : 18},
                        {"nombre" : "Tasa bruta de reproducción", "tema" : "Territorio y Demografía", "codigo" : "N5JMCYWCG", "orden" : 19},
                        {"nombre" : "Tasa de Mortalidad Infantil", "tema" : "Territorio y Demografía", "codigo" : "32WR43FRZ", "orden" : 20},
                        {"nombre" : "Producto Interno Bruto (precios encadenados al año anterior)", "tema" : "Territorio y Demografía", "codigo" : "XGPBZY6Z3", "orden" : 21},

                        {"nombre" : "Porcentaje de personas que consumió tabaco en el último mes", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "XGBYP9XPD", "orden" : 1},
                        {"nombre" : "Porcentaje de bebedores problemas", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "BTQM7SG2Y", "orden" : 2},
                        {"nombre" : "Porcentaje de personas que consumió drogas en el último año", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "Y6XQRTJJR", "orden" : 3},
                        {"nombre" : "Porcentaje personas sedentarias mayores de 15 años", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "873C9K28G", "orden" : 4},
                        {"nombre" : "Porcentaje de uso de condón en el último año, en personas de 15 a 19 años", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "XFSRKRT8R", "orden" : 5},
                        {"nombre" : "Porcentaje de personas que presenta sospecha de diabetes", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "Z4GRGX5QQ", "orden" : 6},
                        {"nombre" : "Porcentaje de personas que presenta presión arterial elevada", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "XF56PYRTH", "orden" : 7},
                        {"nombre" : "Porcentaje de personas que presenta mal nutrición por exceso", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "8JHF6M52J", "orden" : 8},
                        {"nombre" : "Porcentaje de personas que presenta colesterol elevado", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "MGMCJNTGS", "orden" : 9},
                        {"nombre" : "Prevalencia de Riesgo Cardiovascular (RCV) alto o muy alto  en población general", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "8Y5W87BKF", "orden" : 10},
                        
                        {"nombre" : "Porcentaje de personas que tienen en quién confiar siempre o casi siempre", "tema" : "Psicosocial y Redes", "codigo" : "5TRZWG9R9", "orden" : 1},
                        {"nombre" : "Porcentaje de personas que tienen redes de apoyo disponibles", "tema" : "Psicosocial y Redes", "codigo" : "Y8SCD3XFJ", "orden" : 2},
                        {"nombre" : "Porcentaje de personas que participan en organizaciones", "tema" : "Psicosocial y Redes", "codigo" : "6WNQ6QY87", "orden" : 3},
                        {"nombre" : "Porcentaje de hogares victimizados", "tema" : "Psicosocial y Redes", "codigo" : "3QWGH7YF9", "orden" : 4},
                        {"nombre" : "Tasa de denuncia por violencia intrafamiliar", "tema" : "Psicosocial y Redes", "codigo" : "BJ9GQB52B", "orden" : 5},
                        {"nombre" : "Tasa de denuncia de delitos de mayor connotación", "tema" : "Psicosocial y Redes", "codigo" : "Q88T456R7", "orden" : 6},
                        {"nombre" : "Promedio de nota en relación a la satisfacción con la vida en general (escala de 1 a 10)", "tema" : "Psicosocial y Redes", "codigo" : "NYYDRHSPD", "orden" : 7},

                        {"nombre" : "Nota promedio de satisfacción en salud", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "NQMSRY894", "orden" : 1},
                        {"nombre" : "Nota promedio bienestar mental", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "432PNFDQG", "orden" : 2},
                        {"nombre" : "Prevalencia de discapacidad", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "JKKN5TZFR", "orden" : 3},
                        {"nombre" : "Tasa de ingresos con Síndrome Bronquial Obstructivo (SBO) 0 a 9 años", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "R9RJ2RWNZ", "orden" : 4},
                        {"nombre" : "Porcentaje de personas que afirma que su salud es muy buena o buena", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "WB767YZPY", "orden" : 5},
                        {"nombre" : "Porcentaje de personas que presenta síntomas depresivos", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "FX7THW9BC", "orden" : 6},
                        {"nombre" : "Razón de mortalidad materna (RMM)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "8GJHQWM59", "orden" : 7},
                        {"nombre" : "Tasa ajustada de mortalidad infantil ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "WMW6SS96N", "orden" : 8},
                        {"nombre" : "Tasa trienal de mortalidad general ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "M2WX4X98F", "orden" : 9},
                        {"nombre" : "Tasa de mortalidad enfermedades sistema circulatorio ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "PF74BW47G", "orden" : 10},
                        {"nombre" : "Tasa de mortalidad de tumores bruta y ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "SHHKX3ZS2", "orden" : 11},
                        {"nombre" : "Tasa de mortalidad de traumatismos y envenenamiento ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "PBJG67MGJ", "orden" : 12},
                        {"nombre" : "Tasa de mortalidad de Enfermedad Isquémicas del Corazón ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "TPG3JR96J", "orden" : 13},
                        {"nombre" : "Tasa de mortalidad por enfermedad cerebrovascular ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "FQYTGPKMN", "orden" : 14},
                        {"nombre" : "Tasa de mortalidad por accidentes de tránsito ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "QX9XNZX4Q", "orden" : 15},
                        {"nombre" : "Tasa de accidentes laborales fatales", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "G6XM7K6QT", "orden" : 16},
                        {"nombre" : "Tasa de Notificación por Tuberculosis (TBC)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "XGJ5XKH55", "orden" : 17},
                        {"nombre" : "Tasa de casos notificados VIH/SIDA", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "QSGZ5BZ3N", "orden" : 18},
                        {"nombre" : "Tasa de notificación por Sífilis congénita", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "7YJ8F7GB2", "orden" : 19},
                        {"nombre" : "Tasa de Incidencia anual de Hepatitis A y de Hepatitis viral sin especificación (CIE 10 B15.0; B15.9; B19.0 y B19.9)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "KD8CS7J3F", "orden" : 20},
                        {"nombre" : "Porcentaje de atenciones por diarrea en todas las edades", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "37CYSJ3W5", "orden" : 21},
                        {"nombre" : "Tasa de hospitalización anual de casos asociados a brotes de Enfermedad Transmitidas por Alimentos", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "WFQDGGYD9", "orden" : 22},
                        {"nombre" : "Tasa de incidencia acumulada de Síndrome cardiopulmonar por hantavirus", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "F6NJHZP9Q", "orden" : 23},
                        {"nombre" : "Tasa de incidencia acumulada de Enfermedad de Chagas", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "MBYN83NGH", "orden" : 24},
                        {"nombre" : "Número de egresos hospitalarios por hidatidosis", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "88BS366KJ", "orden" : 25},
                        {"nombre" : "Tasa de Incidencia anual de Coqueluche debido a Bordetella pertussis (A37.0)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "H48GJDJ39", "orden" : 26},
                        {"nombre" : "Tasa de incidencia acumulada Enfermedad Meningocócica", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "MNBB7P2ZN", "orden" : 27},
                        {"nombre" : "Tasa Estimada de Incidencia de Cáncer Estandarizada por Edad (TEICEE)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "G3MH95RWR", "orden" : 28},
                        {"nombre" : "Años de Vida Potencialmente Perdidos (AVPP)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "SZXSRXC2G", "orden" : 29},
                        {"nombre" : "Tasa Estandarizada por Edad de Años de Vida Potencialmente Perdidos (TEE_AVPP)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "4PBBHJ6NM", "orden" : 30},
                        {"nombre" : "Porcentaje AVPP región respecto de AVPP Nacional", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "Q2M63SHJ5", "orden" : 31},
                        {"nombre" : "Ranking de regiones para Porcentaje de AVPP", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "85G6TTP4Y", "orden" : 32},
                        {"nombre" : "Tasa de incidencia anual de fiebre tifoidea y paratifoidea (CIE 10 A01.0 – A01.4)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "N2SYCWZJB", "orden" : 33},

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