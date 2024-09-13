// const consultarDatos = () => {
//     const url = 'datos.txt';
//     fetch(url)
//         .then(respuesta => {
//             console.log(respuesta);
//             return respuesta.text();
//         })
//         .then(datos => {
//             const lineas = datos.split('\n');
//             console.log(lineas[0])
//             console.log(lineas[2])
//             console.log(datos);
//         })
// }

// consultarDatos();


const consultarDatos = async () => {
    
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const respuesta = await fetch(url);
    // const datos = await respuesta.text();
    const datos = await respuesta.json();

    console.log(datos);
    console.log(datos.userId);
    console.log(datos.title);

    console.table(datos)

}

consultarDatos();