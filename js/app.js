angular.module('app', ['ngRoute','ui.bootstrap'])
.value('firstCode', '2QJK4WYMF')
.config(function($routeProvider) {
   $routeProvider
    .when("/", {
       templateUrl : "home.html",
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
                        {"nombre" : "F1. Porcentaje de personas indigentes", "tema" : "Socioeconómico", "codigo" : "PWN6SJB89", "orden" : 1},
                        {"nombre" : "F2. Porcentaje de personas pobres no indigentes", "tema" : "Socioeconómico", "codigo" : "JKFSWD664", "orden" : 2},
                        {"nombre" : "F3. Porcentaje total de personas pobres", "tema" : "Socioeconómico", "codigo" : "G74KWXD9Y", "orden" : 3},
                        {"nombre" : "F4. Porcentaje de hogares pobres", "tema" : "Socioeconómico", "codigo" : "X62MK5PBY", "orden" : 4},
                        {"nombre" : "F5. Porcentaje de hogares en situación de Pobreza Multidimensional", "tema" : "Socioeconómico", "codigo" : "33ZWB8TW4", "orden" : 5},
                        {"nombre" : "F6. Variación de pobreza", "tema" : "Socioeconómico", "codigo" : "BRZCYSDCJ", "orden" : 6},
                        {"nombre" : "F7. Brecha de pobreza Mujer-Hombre", "tema" : "Socioeconómico", "codigo" : "32JF6TR66", "orden" : 7},
                        {"nombre" : "F8. Brecha de pobreza Rural-Urbano", "tema" : "Socioeconómico", "codigo" : "Z5RYNK4XM", "orden" : 8},
                        {"nombre" : "F9. Brecha de pobreza de personas pertenencientes a pueblos originarios-No perteneciente a pueblos originarios", "tema" : "Socioeconómico", "codigo" : "8JBQPNTYW", "orden" : 9},
                        {"nombre" : "F10. Coeficiente de GINI de ingreso Autónomo-Monetario", "tema" : "Socioeconómico", "codigo" : "9CR5RTC7D", "orden" : 10},
                        {"nombre" : "F11. Relación 20/20 de ingreso monetario", "tema" : "Socioeconómico", "codigo" : "JX8F2JZMG", "orden" : 11},
                        {"nombre" : "F12. Porcentaje de personas desocupadas", "tema" : "Socioeconómico", "codigo" : "KZFQ7KKJ7", "orden" : 12},
                        {"nombre" : "F13. Brecha de desocupación M-H", "tema" : "Socioeconómico", "codigo" : "564BR42GJ", "orden" : 13},
                        {"nombre" : "F14. Porcentaje de personas cesantes", "tema" : "Socioeconómico", "codigo" : "4KFZ5RG3R", "orden" : 14},
                        {"nombre" : "F15. Porcentaje de participación laboral", "tema" : "Socioeconómico", "codigo" : "RDTR8BXNZ", "orden" : 15},
                        {"nombre" : "F16. Porcentaje de alfabetización", "tema" : "Socioeconómico", "codigo" : "YFQ6WYRS6", "orden" : 16},
                        {"nombre" : "F17. Promedio de años de escolaridad", "tema" : "Socioeconómico", "codigo" : "3TJ4MQ5C6", "orden" : 17},
                        {"nombre" : "F18. Porcentaje de cobertura educacional total", "tema" : "Socioeconómico", "codigo" : "JQQRKX96N", "orden" : 18},
                        {"nombre" : "F19. Porcentaje de cobertura educacional preescolar", "tema" : "Socioeconómico", "codigo" : "JK6SS9WRK", "orden" : 19},
                        {"nombre" : "F20. Porcentaje de cobertura educacional básica", "tema" : "Socioeconómico", "codigo" : "JW93NH6YB", "orden" : 20},
                        {"nombre" : "F21. Porcentaje de cobertura educacional media", "tema" : "Socioeconómico", "codigo" : "WQX2Y2YSR", "orden" : 21},
                        {"nombre" : "F22. Brecha escolaridad Quintil I-Quintil V", "tema" : "Socioeconómico", "codigo" : "M3WF38MZG", "orden" : 22},
                        {"nombre" : "F23. Brecha escolaridad Urbano-Rural", "tema" : "Socioeconómico", "codigo" : "JD3746GWR", "orden" : 23},
                        {"nombre" : "F24. Brecha escolaridad Etnia-No etnia", "tema" : "Socioeconómico", "codigo" : "6K7Q8TGR3", "orden" : 24},
                        {"nombre" : "F27. Ingreso autónomo promedio mensual del hogar", "tema" : "Socioeconómico", "codigo" : "J6NR64WSB", "orden" : 25},
                        {"nombre" : "F28. Ingreso monetario promedio mensual del hogar", "tema" : "Socioeconómico", "codigo" : "HHJMTNDKT", "orden" : 26},
                        {"nombre" : "F30. Porcentaje de ocupados asalariados sin contrato firmado", "tema" : "Socioeconómico", "codigo" : "F6KYWTMJP", "orden" : 27},
                        {"nombre" : "F31. Porcentaje de ocupados asalariados con contrato escrito", "tema" : "Socioeconómico", "codigo" : "3H4YQ869H", "orden" : 28},
                        {"nombre" : "F32. Porcentaje de trabajadores por cuenta propia", "tema" : "Socioeconómico", "codigo" : "W6F8XN5D6", "orden" : 29},
                        {"nombre" : "F33. Porcentaje de viviendas con saneamiento deficitario", "tema" : "Socioeconómico", "codigo" : "6F2Z4KGPS", "orden" : 30},
                        {"nombre" : "F34. Porcentaje de viviendas con saneamiento aceptable", "tema" : "Socioeconómico", "codigo" : "BS87Y62C6", "orden" : 31},
                        {"nombre" : "F35. Porcentaje de viviendas con hacinamiento crítico", "tema" : "Socioeconómico", "codigo" : "6YY3W25YC", "orden" : 32},
                        {"nombre" : "F36. Porcentaje de viviendas con materialidad irreparable", "tema" : "Socioeconómico", "codigo" : "X37ZXB8QG", "orden" : 33},
                        {"nombre" : "F37. Porcentaje requerimiento de viviendas irrecuperable (Calidad Global de la Vivienda)", "tema" : "Socioeconómico", "codigo" : "C488PX4ZD", "orden" : 34},
                        {"nombre" : "F38. Porcentaje personas cocina con parafina, carbón, leña", "tema" : "Socioeconómico", "codigo" : "YTGJM7ZJY", "orden" : 35},
                        {"nombre" : "F39. Porcentaje de personas identifica micro basurales en el barrio", "tema" : "Socioeconómico", "codigo" : "JJDZJS2FP", "orden" : 36},
                        {"nombre" : "F40. Porcentaje de hogares con computador", "tema" : "Socioeconómico", "codigo" : "CH8HGC6ZT", "orden" : 37},
                        {"nombre" : "F41. Porcentaje personas de 15 a 64 años activas sin cotizar", "tema" : "Socioeconómico", "codigo" : "RXSK859J6", "orden" : 38},
                        {"nombre" : "F42. Porcentaje de trabajadores ocupados que trabajan más de 8 horas", "tema" : "Socioeconómico", "codigo" : "KYNZHY7KT", "orden" : 39},
                        {"nombre" : "F43. Porcentaje persona afecta responsabilidad laboral", "tema" : "Socioeconómico", "codigo" : "XNSNHDJYD", "orden" : 40},
                        {"nombre" : "F44. Porcentaje de personas que están afectas a inestabilidad laboral", "tema" : "Socioeconómico", "codigo" : "6Q753MGJB", "orden" : 41},
                        {"nombre" : "F60. Indice de Desarrollo Humano (IDH)", "tema" : "Socioeconómico", "codigo" : "FFZB8C6KH", "orden" : 42},
                        {"nombre" : "F65. Tasa de desocupación", "tema" : "Socioeconómico", "codigo" : "GQZBK28RY", "orden" : 43},
                        {"nombre" : "F73. Brecha escolaridad Hombre-Mujer", "tema" : "Socioeconómico", "codigo" : "XZKQD28MK", "orden" : 44},
                        {"nombre" : "F161. Índice de Vulnerabilidad Social y Condiciones de Vida (IV)", "tema" : "Socioeconómico", "codigo" : "GXHWFQ9DN", "orden" : 45},
                        {"nombre" : "F162. Índice de Concetracion de niños con mal nutrición por exceso y decil autonomo de ingreso (MN)", "tema" : "Socioeconómico", "codigo" : "5M6R9QYZ3", "orden" : 46},

                        {"nombre" : "F25. Gasto Público en Servicios Individuales de Salud Per Cápita (GPSIS)", "tema" : "Sistema de Salud", "codigo" : "9YPHM7BT8", "orden" : 1},
                        {"nombre" : "F26. Gasto Público en Servicios Colectivos de Salud Per Cápita (GPSCS)", "tema" : "Sistema de Salud", "codigo" : "HH8J9QWKT", "orden" : 2},
                        {"nombre" : "F49. Porcentaje de personas que pertenecen a algún a algún sistema de previsión de salud, desagregado por región", "tema" : "Sistema de Salud", "codigo" : "H667TFPF8", "orden" : 3},
                        {"nombre" : "F51-F52. Porcentaje menores de 6 años en control por mal nutrición por exceso", "tema" : "Sistema de Salud", "codigo" : "6ZM88CQP7", "orden" : 4},
                        {"nombre" : "F54. Porcentaje de nacidos vivos de madres menores de 15 años", "tema" : "Sistema de Salud", "codigo" : "T9D9W8T9G", "orden" : 6},
                        {"nombre" : "F55. Porcentaje de embarazadas menores de 15 años que se encuentren en control en el sistema público de salud", "tema" : "Sistema de Salud", "codigo" : "FJXNCRS88", "orden" : 7},
                        {"nombre" : "F56. Porcentaje de embarazadas en control en el sistema público de salud entre 15 y 19 años", "tema" : "Sistema de Salud", "codigo" : "HJ56MNJH8", "orden" : 8},
                        {"nombre" : "F57. Porcentaje de niños con bajo peso al nacer", "tema" : "Sistema de Salud", "codigo" : "DNX8WCXNR", "orden" : 9},
                        {"nombre" : "F58. Porcentaje de niños con lactancia exclusiva a la edad de 6 meses", "tema" : "Sistema de Salud", "codigo" : "2BT5QWY5W", "orden" : 10},
                        {"nombre" : "F68. Tasa de hospitales del sistema público y delegados (Año 2013) por 100.000 habitantes", "tema" : "Sistema de Salud", "codigo" : "P6RWJY7PR", "orden" : 11},
                        {"nombre" : "F69. Tasa de hospitales de alta complejidad del sistema público y delegados (Año 2013) por 100.000 habitantes", "tema" : "Sistema de Salud", "codigo" : "BPWZSCDZJ", "orden" : 12},
                        {"nombre" : "F70. Horas mensuales disponibles de los pabellones quirúrgicos por 1.000 hab.", "tema" : "Sistema de Salud", "codigo" : "C9JYQFWS7", "orden" : 13},
                        {"nombre" : "F71. Nº de camas críticas de los servicios de salud pública por 100.000 habitantes", "tema" : "Sistema de Salud", "codigo" : "GFPTXWZYG", "orden" : 14},
                        {"nombre" : "F72. Nº de médicos de los servicios de salud pública afectos a las leyes 15.076 y 19.664 por 100.000 habitantes", "tema" : "Sistema de Salud", "codigo" : "DG3XC6DG8", "orden" : 15},
                        {"nombre" : "F74. Porcentaje de la población que es beneficiaria de FONASA", "tema" : "Sistema de Salud", "codigo" : "DQZNP3XGB", "orden" : 16},
                        {"nombre" : "F75. Porcentaje de la población que es beneficiaria de FONASA A", "tema" : "Sistema de Salud", "codigo" : "3CZXWY5Y4", "orden" : 17},
                        {"nombre" : "F76. Población inscrita en APS", "tema" : "Sistema de Salud", "codigo" : "BNGZ5W25D", "orden" : 18},
                        {"nombre" : "F77. Porcentaje garantías explícitas retrasadas", "tema" : "Sistema de Salud", "codigo" : "SCM9BMBBZ", "orden" : 19},
                        {"nombre" : "F78. Porcentaje personas identifica problemas de servicios básicos de salud (consultorios, SAPUs, hospitales, postas, otros.)", "tema" : "Sistema de Salud", "codigo" : "GGJXM66QK", "orden" : 20},
                        {"nombre" : "F79. Porcentaje de menores de 6 años en control en el sistema público", "tema" : "Sistema de Salud", "codigo" : "WZN29GG9C", "orden" : 21},
                        {"nombre" : "F80. Porcentaje de personas de 65 y más años que se encuentran en control en el sistema público de salud", "tema" : "Sistema de Salud", "codigo" : "RRSQ42JCW", "orden" : 22},
                        {"nombre" : "F81. Cobertura efectiva de hipertensión arterial", "tema" : "Sistema de Salud", "codigo" : "ZC9SF3GZD", "orden" : 23},
                        {"nombre" : "F82. Cobertura efectiva de Diabetes", "tema" : "Sistema de Salud", "codigo" : "XK7F4WHNG", "orden" : 24},
                        {"nombre" : "F83. Porcentaje de hipertensos en tratamiento", "tema" : "Sistema de Salud", "codigo" : "XYQHW24HH", "orden" : 25},
                        {"nombre" : "F84. Porcentaje de diabéticos en tratamiento", "tema" : "Sistema de Salud", "codigo" : "CNSQQ2ZYF", "orden" : 26},
                        {"nombre" : "F85. Porcentaje personas con problemas de salud que no reciben atención", "tema" : "Sistema de Salud", "codigo" : "JCJPQYFYS", "orden" : 27},
                        {"nombre" : "F86. Porcentaje de mujeres de 25 a 64 años que afirma haberse realizado el Papanicolaou (PAP) en los últimos 3 años", "tema" : "Sistema de Salud", "codigo" : "4P9ZFH2Y2", "orden" : 28},
                        {"nombre" : "F87. Porcentaje discapacitados accede a rehabilitación", "tema" : "Sistema de Salud", "codigo" : "TRZ4N98QM", "orden" : 29},
                        {"nombre" : "F88. Menores de 1 año con tercera dosis vacuna pentavalente del PNI", "tema" : "Sistema de Salud", "codigo" : "M5ZC43RBX", "orden" : 30},
                        {"nombre" : "F89.Porcentaje de embarazadas con alta odontológica en sistema público", "tema" : "Sistema de Salud", "codigo" : "T26HTM82Q", "orden" : 31},

                        {"nombre" : "F29. Tasa Migración Neta", "tema" : "Territorio y Demografía", "codigo" : "2KHZPW59D", "orden" : 1},
                        {"nombre" : "F111. Índice de Swaroop", "tema" : "Territorio y Demografía", "codigo" : "YXWGT85R7", "orden" : 2},
                        {"nombre" : "F136-F137-F138. Esperanza de vida", "tema" : "Territorio y Demografía", "codigo" : "Y5F3QYKYD", "orden" : 3},
                        {"nombre" : "F139. Superficie", "tema" : "Territorio y Demografía", "codigo" : "G8DTF553S", "orden" : 4},
                        {"nombre" : "F140. Porcentaje de población país", "tema" : "Territorio y Demografía", "codigo" : "X5QRG6MD3", "orden" : 5},
                        {"nombre" : "F141-F155. Población proyectada (2015 Y 2020)", "tema" : "Territorio y Demografía", "codigo" : "D5BGDKHWB", "orden" : 6},
                        {"nombre" : "F142. Densidad Poblacional", "tema" : "Territorio y Demografía", "codigo" : "QTKC6YQ56", "orden" : 7},
                        {"nombre" : "F143-F144. Porcentaje de población por sexo", "tema" : "Territorio y Demografía", "codigo" : "92RFMMT8R", "orden" : 8},
                        {"nombre" : "F145-F146-F147. Porcentaje de población por grupos de edad", "tema" : "Territorio y Demografía", "codigo" : "6SNTXHDT3", "orden" : 9},
                        {"nombre" : "F148. Indice de Masculinidad", "tema" : "Territorio y Demografía", "codigo" : "JZZ322RD2", "orden" : 10},
                        {"nombre" : "F149. Indice de Dependecia", "tema" : "Territorio y Demografía", "codigo" : "XNY9XP9N8", "orden" : 11},
                        {"nombre" : "F150. Índice de renovación o vejez", "tema" : "Territorio y Demografía", "codigo" : "F3MZB7RRF", "orden" : 12},
                        {"nombre" : "F151. Porcentaje de personas que viven en zonas rurales", "tema" : "Territorio y Demografía", "codigo" : "QSX3B2J2N", "orden" : 13},
                        {"nombre" : "F152. Porcentaje población originaria", "tema" : "Territorio y Demografía", "codigo" : "Q64NYNQ2B", "orden" : 14},
                        {"nombre" : "F153. Tasa crecimiento natural", "tema" : "Territorio y Demografía", "codigo" : "4KCFQCCSR", "orden" : 15},
                        {"nombre" : "F154. Tasa crecimiento total o exponencial", "tema" : "Territorio y Demografía", "codigo" : "B63PZ9P4P", "orden" : 16},
                        {"nombre" : "F156. Tasa de natalidad o Tasa Bruta de natalidad", "tema" : "Territorio y Demografía", "codigo" : "G4DB9CKB4", "orden" : 17},
                        {"nombre" : "F157. Tasa global de fecundidad", "tema" : "Territorio y Demografía", "codigo" : "8TRMJD7WP", "orden" : 18},
                        {"nombre" : "F158. Tasa bruta de reproducción", "tema" : "Territorio y Demografía", "codigo" : "2RFZ5ZN4Z", "orden" : 19},
                        {"nombre" : "F160. Producto Interno Bruto (precios encadenados al año anterior)", "tema" : "Territorio y Demografía", "codigo" : "3K3ZZ2R76", "orden" : 21},

                        {"nombre" : "F45. Porcentaje de personas que consumió tabaco en el último mes", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "W98SQZC7T", "orden" : 1},
                        {"nombre" : "F46. Porcentaje de bebedores problemas", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "7BRG983DJ", "orden" : 2},
                        {"nombre" : "F47-F48. Porcentaje de personas que consumió drogas en el último año", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "F379BM58Q", "orden" : 3},
                        {"nombre" : "F50. Porcentaje personas sedentarias mayores de 15 años", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "THYHZGSQH", "orden" : 4},
                        {"nombre" : "F53. Porcentaje de uso de condón en el último año, en personas de 15 a 19 años", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "WT4D87NCH", "orden" : 5},
                        {"nombre" : "F96. Porcentaje de personas que presenta sospecha de diabetes", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "X5XNM75DK", "orden" : 6},
                        {"nombre" : "F97. Porcentaje de personas que presenta presión arterial elevada", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "SH7NCZBGT", "orden" : 7},
                        {"nombre" : "F98-F99. Porcentaje de personas que presenta mal nutrición por exceso", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "HJ5PZ2PDC", "orden" : 8},
                        {"nombre" : "F100. Porcentaje de personas que presenta colesterol elevado", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "GQGYWN6PM", "orden" : 9},
                        {"nombre" : "F166. Prevalencia de Riesgo Cardiovascular (RCV) alto o muy alto  en población general", "tema" : "Estilos de Vida y Factores de Riesgo", "codigo" : "QQTQ6D2HM", "orden" : 10},
                        
                        
                        {"nombre" : "F61. Porcentaje de personas que tienen redes de apoyo disponibles", "tema" : "Psicosocial y Redes", "codigo" : "M356J6FQ8", "orden" : 1},
                        {"nombre" : "F62. Porcentaje de personas que participan en organizaciones", "tema" : "Psicosocial y Redes", "codigo" : "PWC6ZWT44", "orden" : 2},
                        {"nombre" : "F63. Porcentaje de hogares victimizados", "tema" : "Psicosocial y Redes", "codigo" : "7WTFMF2QC", "orden" : 3},
                        {"nombre" : "F64. Tasa de denuncia por violencia intrafamiliar", "tema" : "Psicosocial y Redes", "codigo" : "5X58J94FT", "orden" : 4},
                        {"nombre" : "F66. Tasa de denuncia de delitos de mayor connotación", "tema" : "Psicosocial y Redes", "codigo" : "HZT4XJRJ5", "orden" : 5},
                        {"nombre" : "F67. Promedio de nota en relación a la satisfacción con la vida en general (escala de 1 a 10)", "tema" : "Psicosocial y Redes", "codigo" : "WC8H6MYQ4", "orden" : 6},

                        {"nombre" : "F90. Nota promedio de satisfacción en salud", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "W4Q2H6FHN", "orden" : 1},
                        {"nombre" : "F91. Nota promedio bienestar mental", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "M5C89C6BF", "orden" : 2},
                        {"nombre" : "F92. Prevalencia personas en situación de discapacidad", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "JPRB4P3FQ", "orden" : 3},
                        {"nombre" : "F93. Tasa de ingresos con Síndrome Bronquial Obstructivo (SBO) 0 a 9 años", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "BRCN9MMJH", "orden" : 4},
                        {"nombre" : "F94. Porcentaje de personas que afirma que su salud es muy buena o buena", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "GN58D8S9N", "orden" : 5},
                        {"nombre" : "F95. Porcentaje de personas que presenta síntomas depresivos", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "75HWY85QJ", "orden" : 6},
                        {"nombre" : "F101. Razón de mortalidad materna (RMM)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "SMSTS4S63", "orden" : 7},
                        {"nombre" : "F102. Tasa de mortalidad infantil ajustada por edad de la madre", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "KP5YXJQR8", "orden" : 8},
                        {"nombre" : "F103. Tasa trienal de mortalidad general ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "SWBP6JJ7W", "orden" : 9},
                        {"nombre" : "F104. Tasa de mortalidad enfermedades sistema circulatorio ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "PQ2JBGC9R", "orden" : 10},
                        {"nombre" : "F105. Tasa de mortalidad de tumores bruta y ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "9JR48JZB3", "orden" : 11},
                        {"nombre" : "F106. Tasa de mortalidad de traumatismos y envenenamiento ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "WSGQ6KPW4", "orden" : 12},
                        {"nombre" : "F107. Tasa de mortalidad de Enfermedad Isquémicas del Corazón ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "YS3YDRKJP", "orden" : 13},
                        {"nombre" : "F108. Tasa de mortalidad por enfermedad cerebrovascular ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "K24PHF3MS", "orden" : 14},
                        {"nombre" : "F109. Tasa de mortalidad por accidentes de tránsito ajustada", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "674DB5RRP", "orden" : 15},
                        {"nombre" : "F110. Tasa de accidentes laborales fatales", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "Z52TNK6CZ", "orden" : 16},
                        {"nombre" : "F112. Tasa de Notificación por Tuberculosis (TBC)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "RCZMMGKYF", "orden" : 17},
                        {"nombre" : "F113. Tasa de casos notificados VIH/SIDA", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "KKCBSG6MX", "orden" : 18},
                        {"nombre" : "F114. Tasa de notificación por Sífilis congénita", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "JGS6B293P", "orden" : 19},
                        {"nombre" : "F115. Tasa de Incidencia anual de Hepatitis A y de Hepatitis viral sin especificación (CIE 10 B15.0; B15.9; B19.0 y B19.9)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "TKJ7YS5XP", "orden" : 20},
                        {"nombre" : "F116-F117. Porcentaje de atenciones por diarrea en todas las edades", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "5Y9F27Z9M", "orden" : 21},
                        {"nombre" : "F118. Tasa de hospitalización anual de casos asociados a brotes de Enfermedad Transmitidas por Alimentos", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "NY25G43KR", "orden" : 22},
                        {"nombre" : "F119. Tasa de incidencia acumulada de Síndrome cardiopulmonar por hantavirus", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "RK2XZ9CMX", "orden" : 23},
                        {"nombre" : "F120. Tasa de incidencia acumulada de Enfermedad de Chagas", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "JN2GWKSFC", "orden" : 24},
                        {"nombre" : "F121. Número de egresos hospitalarios por hidatidosis", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "Y9SX8JBH7", "orden" : 25},
                        {"nombre" : "F122. Tasa de Incidencia anual de Coqueluche debido a Bordetella pertussis (A37.0)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "PWQ292MXD", "orden" : 26},
                        {"nombre" : "F123. Tasa de incidencia acumulada Enfermedad Meningocócica", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "RYKYWYBSZ", "orden" : 27},
                        {"nombre" : "F124-F125. Tasa Estimada de Incidencia de Cáncer Estandarizada por Edad (TEICEE)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "52YBF4696", "orden" : 28},
                        {"nombre" : "F126-F130-F132-F134. Años de Vida Potencialmente Perdidos (AVPP)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "NWF56WFNS", "orden" : 29},
                        {"nombre" : "F127-F131-F133-F135. Tasa Estandarizada por Edad de Años de Vida Potencialmente Perdidos (TEE_AVPP)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "PKDRP7HCB", "orden" : 30},
                        {"nombre" : "F128. Porcentaje AVPP región respecto de AVPP Nacional", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "QHFY72F3C", "orden" : 31},
                        {"nombre" : "F129. Ranking de regiones para Porcentaje de AVPP", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "76SYNCD33", "orden" : 32},
                        {"nombre" : "F159. Tasa de mortalidad infantil", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "6MKMQ82CT", "orden" : 33},
                        {"nombre" : "F164. Porcentaje de personas que afirma que su salud es muy mala o mala", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "GRXRM4X7T", "orden" : 34},
                        {"nombre" : "F165. Tasa de incidencia anual de fiebre tifoidea y paratifoidea (CIE 10 A01.0 – A01.4)", "tema" : "Morbilidad, Bienestar y Daño en Salud", "codigo" : "J852M834C", "orden" : 35},

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
    if ($routeParams.code) {
        vm.code =  $routeParams.code
        $timeout(function() {
            var divElement = document.getElementById('viz1475702114077');                    
            var vizElement = divElement.getElementsByTagName('object')[0];                    
            vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    
            var scriptElement = document.createElement('script');                    
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
            vizElement.parentNode.insertBefore(scriptElement, vizElement);
        }, 500);
    }

  });