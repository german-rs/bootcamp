class Estudiante{
    constructor(nombre, edad){
        this.nombre =  nombre;
        this.edad = edad;
    }
}

let estudiante1  = new Estudiante('nombre_1', 22);

console.log(estudiante1);
console.log(estudiante1.nombre);