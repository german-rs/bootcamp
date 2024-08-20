/* 
    Nombre: Germán Riveros Sepúlveda.
    Generación: 14
    Jornada: Vespertina.
    Desafío: JavaScript en Práctica. 
    Requerimiento: 2. 
*/

let btns = document.getElementsByTagName("button");

for(let i = 0; i< btns.length; i++){
    btns[i].addEventListener("click", function(event){
        let idbtn = event.target.id;
        asignarColor(idbtn);
    });
}

function asignarColor(id){

    let colores = {
        "btn-1": "e53e3e",
        "btn-2": "dd6b20",
        "btn-3": "faf089",
        "btn-4": "48bb78",
        "btn-5": "81e6d9",
        "btn-6": "d53f8c"
    }

    let color = colores[id];
    cambiarColor(color);
}

function cambiarColor(color){
    document.getElementById("caja").setAttribute(`style`,`border:1px solid black;width: 100%;height: 100%; background-color: #${color}`);
}