/*
    Nombre: Germán Riveros Sepúlveda.
    Generación: 14.
    Jornada: Vespertina.    
    Desafío: Multiplicación.
*/

let numeroIngresado = parseInt(prompt("Ingrese el número: "));

let mostrarTablaFactorial = (numeroIn) => {

    if (numeroIngresado > 0 && numeroIngresado < 21) {

        for (let i = 1; i <= numeroIn; i++) {
            console.log(`${numeroIn} x ${i} = ${numeroIn * i}`);
        }

        //Factorial.
        for (let i = 1; i <= numeroIn; i++) {

            let resultado = 1;

            for (let j = 1; j <= i; j++) {
                resultado = resultado * j;
            }

            console.log(`Factorial de ${i} es: ${resultado}`);
        }

    } else {
        alert("El número ingresado debe ser entre 1 y 20.")
    }
}

mostrarTablaFactorial(numeroIngresado);