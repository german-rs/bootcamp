import { Animal } from "./Animal.js";

export class Oso extends Animal{

    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    Grunir(){
        console.log('El oso está gruñendo');
        return this.Sonido; 
    }
    
}