class Perro{

    constructor(raza){
        this._raza = raza;

    }

    get raza(){
        return this._raza;
    }

    set raza(nuevaRaza){
        this._raza = nuevaRaza;
    }

}

let perro1 = new Perro("Pastor");
console.log(perro1.raza);

perro1.raza = "Bulldog";
console.log(perro1.raza);