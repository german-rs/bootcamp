import { Animal } from "./Animal.js";

export class Leon extends Animal{

    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    Rugir(){
        console.log('El león está rugiendo');
        return this.Sonido; 
    }
    
}