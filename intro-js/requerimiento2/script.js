/*  Requerimiento 2.
    Realizar operaciones con dos números. Pedir al usuario que ingrese 
    dos números diferentes y mayores a cero. Para ambos números, 
    calcular lo siguiente:
    - Suma
    - Resta
    - División
    - Multiplicación
    - Módulo
*/

//Se ingresan los datos requeridos.
let num = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));

//Se realizan las operaciones.
let suma = (num + num2);
let resta = (num - num2);
let division = (num/num2);
let multiplicacion = (num * num2);
let modulo = (num % num2);

//Se muestran los resultados de las operaciones.
alert(`La suma es: ${suma}, la resta es: ${resta}, la división es: ${division}, la multiplicación es: ${multiplicacion} y el resto es: ${modulo}`);
