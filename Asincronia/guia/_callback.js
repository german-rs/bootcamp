// https://github.com/Giovasdf/guiaCallBacks/tree/main/EjercicioPropuesto1 

const getName = callback => callback('John Doe');
getName(name => console.log(name));

const getSquare = (number, callback) => 
    callback(number * number);

getSquare(4, result => console.log(result));
getSquare(2, result => console.log(result));
getSquare(5, result => console.log(result));
getSquare(12, result => console.log(result));

const sumarPuntos = (puntaje1, puntaje2, callback) => {
    const totalPuntos = puntaje1 + puntaje2;
    callback(totalPuntos);
}

function verificarAprobacion(totalPuntos) {
    if (totalPuntos >= 6) {
        console.log(`Aprobado con ${totalPuntos} puntos.`);
    } else {
        console.log(`Reprobado con ${totalPuntos} puntos.`);
    }
}

let puntaje1 = 3.5;
let puntaje2 = 4;

sumarPuntos(puntaje1, puntaje2, verificarAprobacion);


const evaluarExamen = (puntosEj1, puntosEj2) => {
    const totalPuntos = puntosEj1 + puntosEj2;
    if (totalPuntos >= 6) {
        return `Aprobado con ${totalPuntos} puntos.`;
    } else {
        return `Reprobado con ${totalPuntos} puntos.`;
    }
};

console.log(evaluarExamen(3.5, 4)); 
