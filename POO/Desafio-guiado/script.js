/**
 * 
 * 1.- Crear una función constructora para cada objeto.
 * 
 */
function Consultorio(nombre, paciente) {
    this._nombre = function () {
        return nombre;
    }

    this._paciente = function () {
        return paciente || [];
    }
}


function Paciente(nombre, edad, rut, diagnostico) {
    this._nombre = function () {
        return nombre;
    }

    this._edad = function () {
        return edad;
    }

    this._rut = function () {
        return rut;
    }

    this._diagnostico = function () {
        return diagnostico;
    }
}


/**
 * 
 * 2.- Implementar métodos getters y setters para poder acceder 
 *      y modificar los datos de los pacientes.
 * 
 */

//Consultorio.

Consultorio.prototype.getNombre = function () {
    return this._nombre();
}

Consultorio.prototype.setNombre = function (nuevoNombre) {
    this._nombre = function () {
        return nuevoNombre;
    }
}

Consultorio.prototype.agregarPaciente = function (paciente) {
    this._paciente.push(paciente);
}

//Paciente.
Paciente.prototype.getNombre = function () {
    return this._nombre();
}

Paciente.prototype.setNombre = function (nuevoNombre) {
    this._nombre = function () {
        return nuevoNombre;
    }
}

Paciente.prototype.getEdad = function () {
    return this._edad();
}

Paciente.prototype.setEdad = function (nuevaEdad) {
    this._edad = function () {
        return nuevaEdad;
    }
}

Paciente.prototype.getRut = function () {
    return this._rut();
}

Paciente.prototype.setRut = function (nuevoRut) {
    this._rut = function () {
        return nuevoRut;
    }
}

Paciente.prototype.getDiagnostico = function () {
    return this._diagnostico();
}

Paciente.prototype.setDiagnostico = function (nuevoDiagnostico) {
    this._diagnostico = function () {
        return nuevoDiagnostico;
    }
}


/**
 *  3.- Crear un método mediante la propiedad prototype que permita 
 *  buscar los datos de los usuarios por nombre y otro método que permita 
 *  mostrar todos los datos de los usuarios registrados.
 */

//3.1.-
Consultorio.prototype.getPacientePorNombre = function (nombreRecibido) {
    
    const pacienteEncontrado = this._paciente().find(paciente => paciente._nombre() === nombreRecibido);

    if (pacienteEncontrado) {
        console.log('%c  ----------------------------------------- ', 'color: green');
        console.log(`Paciente Encontrado`);
        console.log(`Nombre: ${pacienteEncontrado._nombre()}`);
        console.log(`Edad: ${pacienteEncontrado._edad()}`);
        console.log(`Rut: ${pacienteEncontrado._rut()}`);
        console.log(`Diagnostico: ${pacienteEncontrado._diagnostico()}`);
    } else {
        console.log('%c Paciente no encontrado', 'color: red');
    }
};


//3.2.-
Consultorio.prototype.getPacientes = function() {
    this._paciente().forEach(function(paciente, indice) {
        console.group(`%cPaciente ${indice + 1}: ${paciente.getNombre()}`, 'color: blue; font-weight: bold');
        console.log(`%cEdad: ${paciente.getEdad()}`, 'color: teal;');
        console.log(`%cRut: ${paciente.getRut()}`, 'color: teal;');
        console.log(`%cDiagnóstico: ${paciente.getDiagnostico()}`, 'color: teal; font-weight: bold;');
        console.groupEnd();
    });
};

/**
 * 4.- Instanciar cada objeto utilizando la instrucción new.
 */
let paciente1 = new Paciente('nombre_1', 20, '11111111-1', 'diagnostico_1');
let paciente2 = new Paciente('nombre_2', 30, '22222222-2', 'diagnostico_2');
let paciente3 = new Paciente('nombre_3', 40, '33333333-3', 'diagnostico_3');
let paciente4 = new Paciente('nombre_4', 50, '44444444-4', 'diagnostico_4');
let paciente5 = new Paciente('nombre_5', 60, '55555555-5', 'diagnostico_5');

let consultorio1 = new Consultorio("Consultorio 1", [paciente1, paciente2, paciente3, paciente4, paciente5]);

//Obteniendo datos.
console.log(`%c   Nombre Consultorio: ${consultorio1.getNombre()}  `, 'background: #000000; color: #03a9f0');
console.log(`Datos paciente 1: ${paciente1.getNombre()}, ${paciente1.getEdad()}, ${paciente1.getRut()}, ${paciente1.getDiagnostico()}`);
console.log(`Nombre paciente 2: ${paciente2.getNombre()}`);
console.log(`Edad paciente 3: ${paciente3.getEdad()}`);
console.log(`Rut paciente 4: ${paciente4.getRut()}`);
console.log(`Diágnostico paciente 5: ${paciente5.getDiagnostico()}`);

//Asignando nuevos valores.
paciente1.setNombre('nombre_11');
console.log(`Nuevo nombre paciente 1: ${paciente1.getNombre()}`);

paciente3.setRut('66666666-6');
console.log(`Nuevo rut paciente 3: ${paciente3.getRut()}`);


//Buscando por nombre.
consultorio1.getPacientePorNombre('nombre_3');
consultorio1.getPacientePorNombre('nombre_66');


//Mostrando todos los pacientes.
console.log('%c   Mostrando todos los pacientes:   ', 'background: #000000; color: #03a9f0; font-size:1.2em;');
console.log(consultorio1.getPacientes());
