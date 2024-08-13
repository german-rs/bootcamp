
/* 
    Requerimiento 5.

    Crear un programa que solicite al usuario 5 
    números y realice los cálculos que se piden 
    a continuación.
    - La suma de todos los números.
    - El promedio de los 5 números ingresados.
*/

//Se solicita el ingreso de cinco números.
let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let num3 = parseInt(prompt("Ingrese el tercer número: "));
let num4 = parseInt(prompt("Ingrese el cuarto número: "));
let num5 = parseInt(prompt("Ingrese el quinto número: "));

//Se realiza la suma de estos números.
let suma = (num1 + num2 + num3 + num4 + num5);

//Se determina el promedio con la suma de los números dividido por la cantidad.
let promedio = parseFloat(suma/5);

//Se muestran los resultados.
alert(`El resultado de la suma es: ${suma} y el promedio: ${promedio}`);
