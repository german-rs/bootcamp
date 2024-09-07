/* 
    Nombre estudiante: Germán A. Riveros Sepúlveda.
    Generación: 14.
    Jornada: Vespertina.   
    Desafío: Clases en ES6
*/


// node dist/for-anidados.js
// npx babel src/ -d dist/ --config-file ./babel.config.json

import { Cliente } from './cliente.js';
import { Impuestos } from './impuestos.js';

let impuesto1 = new Impuestos(1500000, 50000);
let cliente1 = new Cliente('Juan Perez', impuesto1);

console.log(`Nombre cliente: ${cliente1.nombre}`);
console.log(`Monto bruto anual $: ${impuesto1.montoBrutoAnual}`);
console.log(`Deducciones $: ${impuesto1.deducciones}`);
console.log(`Total impuestos $: ${cliente1.calcularImpuestos()}`);