/* 
    Nombre: Germán Riveros Sepúlveda.
    Generación: 14
    Jornada: Vespertina.
    Desafío: JavaScript en Práctica.  
    Requerimiento: 3.
*/

let btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        let valor1 = parseInt(document.getElementById("valor1").value) || 0;
        let valor2 = parseInt(document.getElementById("valor2").value) || 0;
        let idbtn = event.target.id;
        realizarOperacion(idbtn, valor1, valor2);
    });
});

function realizarOperacion(id, valor1, valor2) {
    let resultado;

    if (id === "btn-sumar") {
        resultado = valor1 + valor2;
        mostrarResultado(resultado);

    } else if (id === "btn-restar") {
        resultado = valor1 - valor2;
        if (resultado < 0) {
            mostrarResultado(0);
        } else {
            mostrarResultado(resultado);
        }
    }
}

function mostrarResultado(mensaje) {
    document.querySelector(".resultado").innerHTML = mensaje;
}