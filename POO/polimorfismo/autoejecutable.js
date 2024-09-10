const moduloPrueba = ( ()=>{
    let contador = 0;

    return {
        incrementarContador: ()=>{
            return contador++;
        },
        decrementarContador: ()=>{
            return contador--;
        },
        reseteoContador: ()=>{
            console.log('Se ha reseteado el contador, el valor previo fue ' + 
                contador);
            contador  = 0;    
        }
    }
} )();

console.log(moduloPrueba.incrementarContador())
console.log(moduloPrueba.incrementarContador())
console.log(moduloPrueba.incrementarContador())
console.log(moduloPrueba.incrementarContador())

console.log(moduloPrueba.decrementarContador())

moduloPrueba.reseteoContador();