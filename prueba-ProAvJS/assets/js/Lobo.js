import { Animal } from "./Animal.js";

export class Lobo extends Animal{

    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    Aullar(){
        console.log('El lobo está aullando');
        return this.Sonido; 
    }
    
}