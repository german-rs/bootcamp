export class Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }

    get Nombre(){
        return this._nombre;
    }

    get Edad(){
        return this._edad;
    }

    get Img(){
        return this._img;
    }

    set Comentarios(nuevoComentario){
        this._comentarios = nuevoComentario;
    }

    get Sonido(){
        const audio = new Audio(this._sonido); 
        audio.play();
    
        return this._sonido;  
    }

}
// https://github.com/Giovasdf/PooHerencia/tree/main/MultiHerencia 
// https://github.com/german-rs/bootcamp/blob/main/POO/desafio-classES6/src/main.js  
//https://github.com/german-rs/bootcamp/blob/main/POO/herencia/desafio-herencia/assets/js/script2.js