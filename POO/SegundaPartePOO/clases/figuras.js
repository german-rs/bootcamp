class Rectangulo{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    calcularArea(){
        return this.x * this.y;
    }

    calcularPerimetro(){
        return (this.x + this.y) * 2;
    }
}

class Circulo{
    constructor(r){
        this.r = r;
    }

    calcularArea(){
        return Math.PI * Math.pow(this.r, 2);
    }

    calcularPerimetro(){
        return 2 * Math.PI * this.r;
    }
}

//Instancias.
let rectangulo1 = new Rectangulo(3, 4);
console.log(rectangulo1.calcularArea());
console.log(rectangulo1.calcularPerimetro());

let circulo1 = new Cuadrado(5);
console.log(circulo1.calcularArea());
console.log(circulo1.calcularPerimetro());

