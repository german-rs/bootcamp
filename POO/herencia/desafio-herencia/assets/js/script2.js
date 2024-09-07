
class Propietario {
    constructor(nombrePropietario, direccion, telefono) {
      this.nombrePropietario = nombrePropietario;
      this.direccion = direccion;
      this.telefono = telefono;
    }
  
    datosPropietario(){
      return `El nombre del dueño es: ${this.nombrePropietario}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`;
    }
  }
  
  class Animal extends Propietario {
    constructor(nombrePropietario, direccion, telefono, tipo) {
      super(nombrePropietario, direccion, telefono);
      this._tipo = tipo;
    }


  
    get tipo() {
      return `El tipo de animal es un: ${this._tipo}`;
    }
  }
  
  class Mascota extends Animal {
    constructor(
      nombrePropietario,
      direccion,
      telefono,
      tipo,
      nombreAnimal,
      enfermedad
    ) {
      super(nombrePropietario, direccion, telefono, tipo);
      this._nombreAnimal = nombreAnimal;
      this._enfermedad = enfermedad;
    }
  
    get nombreAnimal() {
      return this._nombreAnimal;
    }
  
    set nombreAnimal(nombreAnimal) {
      this._nombreAnimal = nombreAnimal;
    }
  
    get enfermedad() {
      return this._enfermedad;
    }
  
    set enfermedad(enfermedad) {
      this._enfermedad = enfermedad;
    }
  }
 
  
  let agregando = (event) => {
    event.preventDefault();
    let propietario = document.getElementById('propietario').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let direccion = document.getElementById('direccion').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let telefono = document.getElementById('telefono').value;
    let tipo = document.getElementById('tipo').value;
  
  
    switch (tipo) {
      case 'perro':
        let perro = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
        mostrarResultado(perro, 'perro');
        break;
      case 'gato':
        let gato = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
        mostrarResultado(gato, 'gato');
        break;
      case 'conejo':
        let conejo = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
        mostrarResultado(conejo, 'conejo');
        break;
      default:
        break;
    }
  }
  
  let mostrarResultado = (valor) => {
    let resultado = document.querySelector('#resultado ul');
    resultado.innerHTML = `
      <li>${valor.datosPropietario()}</li>
      <li>${valor.tipo}, mientras que el nombre de la mascota es: ${valor.nombreAnimal} y la enfermedad es: ${valor.enfermedad}</li>
    `;
  }
   
  let formulario = document.querySelector('form');
  formulario.addEventListener('submit', agregando);