"use strict";

var _cliente = require("./cliente.js");
var _impuestos = require("./impuestos.js");
/* 
    Nombre estudiante: Germán A. Riveros Sepúlveda.
    Generación: 14.
    Jornada: Vespertina.   
    Desafío: Clases en ES6
*/

// node dist/for-anidados.js
// npx babel src/ -d dist/ --config-file ./babel.config.json

var impuesto1 = new _impuestos.Impuestos(1500000, 50000);
var cliente1 = new _cliente.Cliente('Juan Perez', impuesto1);
console.log("Nombre cliente: ".concat(cliente1.nombre));
console.log("Monto bruto anual $: ".concat(impuesto1.montoBrutoAnual));
console.log("Deducciones $: ".concat(impuesto1.deducciones));
console.log("Total impuestos $: ".concat(cliente1.calcularImpuestos()));