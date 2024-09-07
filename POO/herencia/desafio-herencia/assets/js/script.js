class Propietario {
    constructor(nombrePropietario, direccion, telefono) {
        this._nombrePropietario = nombrePropietario;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    datosPropietario() {
        return `El nombre del dueño es: ${this._nombrePropietario}. El domicilio es: ${this._direccion}, y el número de teléfono: ${this._telefono}`;
    }
}

class Animal extends Propietario{
    constructor(nombrePropietario, direccion, telefono, tipo) {
        super(nombrePropietario, direccion, telefono);
        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo;
    }
}

class Mascota extends Animal {

    constructor(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombrePropietario, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    get nombreMascota() {
        return this._nombreMascota;
    }

    set nombreMascota(nuevoNombreMascota) {
        this._nombreMascota = nuevoNombreMascota;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad;
    }
}

let formulario = document.querySelector('form');
formulario.addEventListener('submit', capturarDatos);

function capturarDatos(event){
  event.preventDefault();
  let propietario = document.getElementById('propietario').value;
  let telefono = document.getElementById('telefono').value;
  let direccion = document.getElementById('direccion').value;
  let nombreMascota = document.getElementById('nombreMascota').value;
  let enfermedad = document.getElementById('enfermedad').value;
  let tipo = document.getElementById('tipo').value;

  crearInstancia(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
}


function crearInstancia(propietario, direccion, telefono, tipo, nombreMascota, enfermedad){
  switch (tipo) {
    case 'perro':
      let perro = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
      mostrarResultado(perro);
      break;
    case 'gato':
      let gato = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
      mostrarResultado(gato);
      break;
    case 'conejo':
      let conejo = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
      mostrarResultado(conejo);
      break;
    default:
      console.error('Tipo de mascota no reconocido');
      break;
  }
}

function mostrarResultado(valor){
  let resultado = document.querySelector('#resultado ul');
  resultado.innerHTML = `
    <li>${valor.datosPropietario()}</li>
    <li>El tipo de anima es un ${valor.tipo}, mientras que el nombre de la mascota es: ${valor.nombreMascota} y la enfermedad es: ${valor.enfermedad}</li>
  `;
}



