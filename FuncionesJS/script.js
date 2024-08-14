/*
    Funciones.
*/

//Función anonima.
let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));

let divide = function(number1, number2)
{
    let resultado = parseInt(number1 /number2);
    return resultado;    
}

document.write("El resultado de la división es: " + divide(num1, num2));

//Alcance función.
var miVar = 10; //variable global.

function mifuncion(){
    miVar = 5;

    console.log(miVar);
}
//debugger;
console.log(miVar);
mifuncion();
console.log(miVar);


/**
 * Break - Continue
 */


const inicio = 1;
const fin = 50;

let multiplosDe4 = 0;
let noMultiplosDe4 = 0;

for (let i = inicio; i <= fin; i++) 
    if (i % 4 == 0) {
        if (i == 16){
            continue;
        }else if (i == 48){
            break;
        }
        console.log(i);
        multiplosDe4++;
    } else {
        noMultiplosDe4++;
    }


console.log("X4: " + multiplosDe4);
console.log("noX4: " + noMultiplosDe4);
