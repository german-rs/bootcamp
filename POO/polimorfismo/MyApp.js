class Pelicula{
    constructor(nombre){
        this._nombre = nombre;
    }
    getName(){
        return this._nombre;
    }
}

class Largometraje extends Pelicula{

    constructor(nombre, runTime){
        super(nombre);
        this._runTime = runTime;
    }

    getRuntime(){
        return this._runTime;
    }

    setRunTime(runtTime){
        this._runTime = runtTime;
    }
}

class Cortometraje extends Pelicula{

    constructor(nombre, runTime){
        super(nombre);
        this._runTime = runTime;
    }

    getRuntime(){
        return this._runTime;
    }

    setRunTime(runtTime){
        this._runTime = runtTime;
    }
}

class MyApp{

    play(pelicula){
        const resultado = `la película ${pelicula.getName()} se esta reproduciendo y tiene un duración de ${pelicula.getRuntime()} minutos`;

        return resultado;
    }
}

const largometraje1 = new Largometraje('Sin city', '105');
const cortometraje1 = new Cortometraje('Scream', '30');

const myApp1 = new MyApp();
const playing = myApp1.play(largometraje1);
const playing2 = myApp1.play(cortometraje1);

console.log(playing);
console.log(playing2);
