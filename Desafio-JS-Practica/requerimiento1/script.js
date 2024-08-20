/* 
    Nombre: Germán Riveros Sepúlveda.
    Generación: 14
    Jornada: Vespertina.
    Desafío: JavaScript en Práctica.  
    Requerimiento: 1.
*/


let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event){

    event.preventDefault();
    limpiarMsjErrores();
    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    let resultado = validar(nombre, asunto, mensaje);
    if(resultado == true){
        mostrarMsjExito();
    }
});


function validar(nombre, asunto, mensaje){
    let validacion = true;

    let validacionNombre = /[a-zA-Z]/gim;
    if(validacionNombre.test(nombre) == false){
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido.";
        validacion = false;
    }

    let validacionAsunto = /[a-zA-Z]/gim;
    if(validacionAsunto.test(asunto) == false){
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido.";
        validacion = false;
    }

    let validacionMensaje = /[a-zA-Z]/gim;
    if(validacionMensaje.test(mensaje) == false){
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido.";
        validacion = false;
    }
    return validacion;
}

function limpiarMsjErrores(){
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
    document.querySelector(".resultado").innerHTML = "";
}

function mostrarMsjExito(){
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito !!!";
}