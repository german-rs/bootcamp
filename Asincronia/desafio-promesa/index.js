var estiloTerminal = [
    "font-family: 'Courier New', Courier, monospace; font-size: 14px; color: darkblue;",
    "font-family: 'Courier New', Courier, monospace; font-size: 12px; color: darkblue;",
    "font-family: 'Courier New', Courier, monospace; font-size: 14px; color: green;",
    "font-family: 'Courier New', Courier, monospace; font-size: 16px; color: blue;"
]


const consultarDatos = async () => {

    
    try {
        const url = 'https://jsonplaceholder.typicode.com/photos';

        const respuesta = await fetch(url);
        const albumes = await respuesta.json();

        console.group("%c Detalle de los títulos", estiloTerminal[0]);

        let contador = 0;
        albumes.forEach(album => {

            if (contador < 20) {
                console.log(`%c ${contador}: ${album.title}`, estiloTerminal[1]);
            }
            contador++;
           
        });

        console.groupEnd();
       
    } catch (error) {
        console.error(error);
    }
}


function enviarResultado() {

    return new Promise(resuelto => {

        setTimeout(() => {
            resuelto('Información Enviada');
        }, 3000);
    });
}

async function mostrarResultado() {
    const mensaje = await enviarResultado();
    console.log(`%c ${mensaje}`, estiloTerminal[2]);
}

console.log('%c \n----------------- Álbumes ----------------- \n\n', estiloTerminal[3]);

consultarDatos();
mostrarResultado();