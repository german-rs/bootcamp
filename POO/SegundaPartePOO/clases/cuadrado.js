class Cuadrado{
    constructor(lado){
        this.lado = lado;
    } 

    calcularArea(){
        return this.lado * this.lado;
    }

    calcularPerimetro(){
        return this.lado * 4;
    }
}

let cuadrado1 =  new Cuadrado(5);
let cuadrado2 =  new Cuadrado(20);

//Ejecutando
console.log(cuadrado1.calcularArea());
console.log(cuadrado2.calcularArea());

console.log(cuadrado1.calcularPerimetro());