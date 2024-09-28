/* 
    Nombre estudiante: Germán A. Riveros Sepúlveda.
    Generación: 14.
    Jornada: Vespertina.   
    Prueba: Programación avanzada en JavaScript.
*/

import { Leon } from './Leon.js';
import { Lobo } from './Lobo.js';
import { Oso } from './Oso.js';
import { Serpiente } from './Serpiente.js';
import { Aguila } from './Aguila.js';


/**
 * 
 *  Función Autoejecutable | async/await que extrae los nombres, sonidos e 
 *  imágenes del archivo animales.json.
 * 
 */
var sonidos = [];
var imagenes = [];
const url = '../animales.json';

(async () => {
  
  const select = document.getElementById('animal');

  document.addEventListener('DOMContentLoaded', async () => {
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();

      datos.animales.forEach(animal => {
        const option = document.createElement('option');
        option.value = animal.name;
        option.textContent = animal.name;
        select.appendChild(option);
      });

      datos.animales.forEach(animal => {
        sonidos.push(animal.sonido);
        imagenes.push(animal.imagen);
      });

    } catch (error) {
      console.error(error);
    }
  });
})();



/*
*
*   Función para mostrar el animal una vez seleccionado el tipo.
*    
*/
const animalSelect = document.getElementById('animal');
const vistaPreviaAnimal = document.getElementById('preview');

document.addEventListener('DOMContentLoaded', () => {

  fetch(url)
    .then(respuesta => respuesta.json())
    .then(datosAnimales => {
      animalSelect.addEventListener('change', () => {
        const animalSeleccionado = animalSelect.value;

        const animal = datosAnimales.animales.find(item => item.name === animalSeleccionado);

        if (animal) {
          const rutaImagen = `./assets/imgs/${animal.imagen}`;

          vistaPreviaAnimal.innerHTML = '';

          const elementoImagen = document.createElement('img');
          elementoImagen.src = rutaImagen;
          elementoImagen.alt = animalSeleccionado;
          elementoImagen.className = 'img-fluid rounded';

          vistaPreviaAnimal.appendChild(elementoImagen);
        } else {
          vistaPreviaAnimal.innerHTML = ''; 
        }
      });
    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });
});



/*
*
*   Función del botón Registrar para capturar los datos del formulario.
*    
*/
let botonRegistrar = document.getElementById('btnRegistrar');

let capturarDatos = () => {
  let tipoAnimal = document.getElementById('animal').value;
  let rangoEdad = document.getElementById('edad').value;
  let comentarios = document.getElementById('comentarios').value;

  crearInstancia(tipoAnimal, rangoEdad, comentarios);

  document.getElementById('animal').value = 'Seleccione un animal';
  document.getElementById('edad').value = 'Seleccione un rango de años';
  document.getElementById('comentarios').value = '';
  vistaPreviaAnimal.innerHTML = '';
}



/*
*
*   Función para crear las instancias de los animales.
*    
*/
let crearInstancia = (animal, rangoEdad, comentario) => {

  switch (animal) {
    case 'Leon':
      let leon = new Leon(animal, rangoEdad, `./assets/imgs/${imagenes[0]}`, comentario, `./assets/sounds/${sonidos[0]}`);
      agregarAnimal(leon.Nombre, leon.Edad, leon.Img, leon._comentarios, leon.Rugir());
      break;

    case 'Lobo':
      let lobo = new Lobo(animal, rangoEdad, `./assets/imgs/${imagenes[1]}`, comentario, `./assets/sounds/${sonidos[1]}`);
      agregarAnimal(lobo.Nombre, lobo.Edad, lobo.Img, lobo._comentarios, lobo.Aullar());
      break;

    case 'Oso':
      let oso = new Oso(animal, rangoEdad, `./assets/imgs/${imagenes[2]}`, comentario, `./assets/sounds/${sonidos[2]}`);
      agregarAnimal(oso.Nombre, oso.Edad, oso.Img, oso._comentarios, oso.Grunir());
      break;

    case 'Serpiente':
      let serpiente = new Serpiente(animal, rangoEdad, `./assets/imgs/${imagenes[3]}`, comentario, `./assets/sounds/${sonidos[3]}`);
      agregarAnimal(serpiente.Nombre, serpiente.Edad, serpiente.Img, serpiente._comentarios, serpiente.Sisear());
      break;

    case 'Aguila':
      let aguila = new Aguila(animal, rangoEdad, `./assets/imgs/${imagenes[4]}`, comentario, `./assets/sounds/${sonidos[4]}`);
      agregarAnimal(aguila.Nombre, aguila.Edad, aguila.Img, aguila._comentarios, aguila.Chillar());
      break;
  }
}



/*
*
*    Función para mostrar las imágenes en la sección: "Animales en investigación".
*
*/
const contenedorDeAnimales = document.getElementById('Animales');

const agregarAnimal = (tipo, rangoEdad, rutaImg, comentario, rutaSonido) => {

  let comentarios = comentario;

  const divAnimal = document.createElement('div');
  divAnimal.classList.add('card', 'm-2', 'bg-secondary', 'text-white');
  divAnimal.style.width = '150px';

  divAnimal.innerHTML = `
    <img src='${rutaImg}' class='card-img-top img-fluid' alt="${tipo}" style='cursor: pointer;'>
    <div class='card-body p-2'>
      <img src='./assets/imgs/audio.svg' class='play-sound' style='width: 20px; cursor: pointer;' alt='Reproducir sonido'>
    </div>
  `;

  divAnimal.querySelector('img').addEventListener('click', () => {
    mostrarModal(tipo, rutaImg, rangoEdad, comentarios);
  });

  const botonDePlay = divAnimal.querySelector('.play-sound');
  botonDePlay.addEventListener('click', () => {
    reproducirSonido(rutaSonido);
  });

  contenedorDeAnimales.appendChild(divAnimal);
}



/*
*
*   Reproductor de sonido.
*
*/
const reproducirSonido = rutaSonido => {
  const audio = new Audio(rutaSonido);
  audio.play();
}



/*
*
*   Función para mostrar el modal con el animal.
*
*/
const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
const modalBody = document.querySelector('.modal-body');

function mostrarModal(tipo, rutaImg, edad, comentarios) {
  modalBody.innerHTML = `
      <img src="${rutaImg}" class="img-fluid" alt="${tipo}">
      <p class="mt-2 text-light text-center">${edad}</p>
      <p class="text-light text-center"><strong>Comentarios</strong></p>
      <p class="text-light text-center"> ${comentarios}</p>
    `;
  modal.show();
}


botonRegistrar.addEventListener('click', capturarDatos);