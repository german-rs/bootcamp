/*  
    Requerimiento 4.
    Crear un programa que pida al usuario una cantidad de días y que 
    muestre su equivalente en Años, Semanas y Días. Por ejemplo, si 
    el usuario ingresa 373, el resultado debe ser 1 año, 1 semana y 1 día.

    Se debe considerar lo siguiente:
    - 1 año tiene 365 días
    - 1 semana tiene 7 días
*/

//Se pide el ingreso de la cantidad de días.
let dias = parseInt(prompt("Ingrese la cantiddad de días: "));

//Se divide la cantidad de días por 365 para determinar los años.
let anios = Math.floor(dias / 365);

//Se determina el resto y se divide por siete para obtener las semanas.
let semanas = Math.floor((dias % 365) / 7);

//Se determina la cantidad de días.
let totalDias = (dias % 365) % 7;

//Se muestran los resultados obtenidos.
alert(`${dias} días convertidos en ${anios} año(s), ${semanas} semanas y ${totalDias} dia(s)`);