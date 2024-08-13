/*
    Nombre estudiante: Germán A. Riveros Sepúlveda.
    Generación: 14.
    Jornada: Vespertina.   
    Desafío: Cachipún contra la máquina.
    Enlace del repositorio: 
*/

let cantidad = 0;
let iteracion = 0;
let juego = 1;
let humanoContador = 0;
let maquinaContador = 0;

cantidad = parseInt(prompt("Ingrese cantidad de juegos:"));

/*
    Ejecución principal.
*/    
do {

    alert(`*** JUEGO Nº ${juego} ***`);

    let opcionHumano = parseInt(prompt("Ingrese número: \n[1] Piedra \n[2] Papel \n[3] Tijeras"));

    let opcionMaquina = Math.floor(Math.random() * 3) + 1;
    alert("Máquina elige: " + mostrarOpcion(opcionMaquina));

    if (opcionHumano == opcionMaquina) {

        alert(`Empate: \n Humano con ${mostrarOpcion(opcionHumano)} \n Máquina con ${mostrarOpcion(opcionMaquina)}`);

    } else if (

        (opcionHumano == 1 && opcionMaquina == 3) ||
        (opcionHumano == 2 && opcionMaquina == 1) ||
        (opcionHumano == 3 && opcionMaquina == 2)
    ) {

        alert(`Gana humano con ${mostrarOpcion(opcionHumano)} sobre ${mostrarOpcion(opcionMaquina)}`);
        humanoContador++;

    } else {

        alert(`Gana máquina con ${mostrarOpcion(opcionMaquina)} sobre ${mostrarOpcion(opcionHumano)}`);
        maquinaContador++;
    }

    console.log("Total humano: " + humanoContador)
    console.log("Total maquina: " + maquinaContador)
    console.log(iteracion);

    iteracion++;
    juego++;

} while (iteracion < cantidad)
/*
    Fin ejecución principal.
*/ 

alert(`Total Humano: ${humanoContador} | Total Máquina: ${maquinaContador}`);
mostrarResultadoFinal(humanoContador, maquinaContador);

function mostrarResultadoFinal(human, machine) {

    if (human > machine) {

        mostrarImagen(1);
        return alert(`¡¡Humanos ganan con ${humanoContador} punto(s)!!`);

    } else if (human == machine) {

        mostrarImagen(2);
        return alert(`Empate: \nhumano: ${humanoContador} - máquina: ${maquinaContador}`);

    } else {

        mostrarImagen(3);
        return alert(`¡¡Máquinas ganan con ${maquinaContador} punto(s)!!`);
    }
}

function mostrarImagen(resultado) {
    let imagen = document.createElement('img');

    switch (resultado) {
        case 1:
            imagen.src = 'assets/img/humanwin.jpg';
            document.body.appendChild(imagen);
            break;
        case 2:
            imagen.src = 'assets/img/draw.jpg';
            document.body.appendChild(imagen);
            break;
        case 3:
            imagen.src = 'assets/img/machinewin.jpg';
            document.body.appendChild(imagen);
            break;
    }
}

function mostrarOpcion(opcion) {

    switch (opcion) {
        case 1:
            return "Piedra";
        case 2:
            return "Papel";
        case 3:
            return "Tijeras";
    }
}