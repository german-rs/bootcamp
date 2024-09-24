/* 
    Desafío guiado: Datos de usuario 
*/

const informacionDeLosUsuarios = ( () => {
    const contenedor = document.querySelector('#user-data');

    return {
        mostrar: async () => {
            const respuesta = await fetch('https://randomuser.me/api/?results=10');
            const datos = await respuesta.json();

            const datosDeLosUsuarios = datos.results.map(
                usuario =>
                    `<div>
                        <!-- Traemos la imagen de usuario -->
                        <img src='${usuario.picture.large}' alt='${usuario.name.first} ${usuario.name.last}'/>
                        <div>
                            <!-- Traemos más datos de usuario -->
                            <span><strong>${usuario.name.first} ${usuario.name.last}</strong></span><br>
                            <span>Email: ${usuario.email} </span><br>
                            <span>Teléfono: ${usuario.cell} </span><br>
                        </div>
                        <hr>
                    <div/>
                    `
            ).join('');

            contenedor.innerHTML = datosDeLosUsuarios;
        }
    }
})();

informacionDeLosUsuarios.mostrar();










/*
// Patrón Módulo utilizando una IIFE (Immediately Invoked Function Expression)
const moduloUsuarios = (function () {
  
    // Función asíncrona para hacer la petición a la API
    const obtenerUsuarios = async function () {
      try {
        // Realizamos la petición a la API de randomuser para obtener 10 usuarios
        const respuesta = await fetch('https://randomuser.me/api/?results=10');
        
        // Convertimos la respuesta a JSON para manejarla como un objeto de JavaScript
        const datos = await respuesta.json();
        
        // Llamamos a la función displayUsers para mostrar los datos en el HTML
        mostrarUsuarios(datos.results);
      } catch (error) {
        // Capturamos cualquier error que ocurra durante la petición
        console.error('Error al obtener los usuarios:', error);
      }
    };
  
 // Función para mostrar los usuarios en el DOM (HTML)
const mostrarUsuarios = function (usuarios) {
    // Seleccionamos el elemento con id "user-data", donde se insertarán los datos
    const userData = document.getElementById('user-data');
    
    // Limpiamos el contenido del div por si ya se ha mostrado información antes
    userData.innerHTML = '';
  
    // Iteramos sobre cada usuario en el array 'usuarios'
    usuarios.forEach(user => {
      // Creamos un contenedor <div> que agrupará la información de cada usuario
      const contenedorDeUsuarios = document.createElement('div');
  
      // Creamos un elemento <img> para la foto del usuario
      const fotoUsuario = document.createElement('img');
      fotoUsuario.src = user.picture.large; // Asignamos la URL de la imagen
      fotoUsuario.alt = `${user.name.first} ${user.name.last}`; // Texto alternativo para accesibilidad
      
      // Creamos un elemento <p> para el nombre y apellido del usuario
      const nombreUsuario = document.createElement('p');
      nombreUsuario.textContent = `${user.name.first} ${user.name.last}`;
  
      // Creamos un elemento <p> para el email del usuario
      const emailUsuario = document.createElement('p');
      emailUsuario.textContent = `Email: ${user.email}`;
  
      // Creamos un elemento <p> para el teléfono del usuario
      const telefonoUsuario = document.createElement('p');
      telefonoUsuario.textContent = `Phone: ${user.phone}`;

      //Creamos un elemento <hr> para separar los datos de los usuarios
      const linea = document.createElement('hr');
  
      // Agregamos la imagen, el nombre, el email y el teléfono al contenedor
      contenedorDeUsuarios.appendChild(fotoUsuario);  
      contenedorDeUsuarios.appendChild(nombreUsuario);
      contenedorDeUsuarios.appendChild(emailUsuario); 
      contenedorDeUsuarios.appendChild(telefonoUsuario);
      contenedorDeUsuarios.appendChild(linea);
  
      // Agregamos el contenedor completo (imagen + nombre + contacto) al div con id 'user-data'
      userData.appendChild(contenedorDeUsuarios);
    });
  };
  
  
    // Retornamos la función 'iniciar', que será la encargada de inicializar la carga de datos
    return {
      // Función pública para iniciar la obtención de datos al cargar la página
      iniciar: function () {
        obtenerUsuarios(); // Llamamos a fetchUsers para hacer la petición a la API
      }
    };
  
  })();
  
  // Iniciamos la función iniciar del módulo cuando la página cargue
  moduloUsuarios.iniciar();
*/



/* Solución 1.
const traerDatos = (
  () => {
      const contenedor = document.querySelector('#user-data');
      // const contenedor = document.getElementById('user-data');

      const mostrarDatos = async() => {
          let respuesta = await fetch("https://randomuser.me/api/?results=10")
          let data = await respuesta.json();
          console.log(data);

          data.results.forEach(user => {
              contenedor.innerHTML += `
                  <div>
                      <img src="${user.picture.large}"/>
                      <p> ${user.name.first} ${user.name.last} </p>
                      <p> ${user.email}</p>
                      <p> ${user.cell}</p>
                    
                  </div>
              `
          });
      }
      return {
          mostrarDatos
      }
  }
)();

traerDatos.mostrarDatos();
 
*/