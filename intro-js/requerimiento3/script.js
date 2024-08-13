/* 
    Requerimiento 3.
    
    Crear un programa que pida al usuario ingresar la temperatura 
    en grados Celsius y que la transforme a grados Kelvin y Fahrenheit.

    Se debe considerar la siguiente información respecto a la 
    equivalencia de las escalas de temperatura:

    - 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para 
        convertirlos es 0 °C + 273.15 = 273.15 K

    - 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula 
        para convertirlos es (0 °C × 9/5) + 32 = 32 °F
*/

//Se pide el dato en celsius y se pasa a Float.
let celcius = parseFloat(prompt("Ingrese la temperatura en grados celsius: "));

//Se realiza la multiplicación por 273.15 para pasar a grados kelvin.
let kelvin = celcius * 273.15;

//Se aplica la formula para pasar a Fahrenheit.
let fahrenheit = (celcius * 9 / 5) + 32;

//Se muestran los resultados.
alert(`Kelvin: ${kelvin}, Fahrenheit: ${fahrenheit}, celcius: ${celcius}`);




