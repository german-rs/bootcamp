/* 
    Nombre estudiante: Germán A. Riveros Sepúlveda.
    Generación: 14.
    Jornada: Vespertina.   
    Prueba: Programación avanzada en JavaScript.
*/


/**
 * 
 *      Alternar escala de gris.
 * 
 */
const alternarGris = document.getElementById('alternarEscalaGris');

const body = document.body;
let grisActivado = false;

const alternarEscalaDeGris = () => {
    grisActivado = !grisActivado; 

    if (grisActivado) {
        body.classList.add('gray-scale');
        body.style.filter = 'grayscale(100%)'; 
        body.style.backgroundImage = "url('./assets/imgs/fondo2.jpg')"; 
    } else {
        body.classList.remove('gray-scale');
        body.style.filter = 'none'; 
        body.style.backgroundImage = "url('./assets/imgs/fondo.jpg')"; 
    }
}
alternarGris.addEventListener('click', alternarEscalaDeGris);


/**
 * 
 *      Cambiar tamaño de fuente.
 * 
 */
const elementosDeTexto = document.querySelectorAll('a, p, span, h1, h2, h3, h4, h5, h6, li');

const tamaniosOriginales = [];

elementosDeTexto.forEach(elemento => {
    const tamanioDeFuente = window.getComputedStyle(elemento).fontSize;
    tamaniosOriginales.push({ elemento: elemento, tamanioDeFuente: parseInt(tamanioDeFuente) });
});

const btnAumentar = document.getElementById('aumentarTamanioTexto');

btnAumentar.addEventListener('click', () => {
    tamaniosOriginales.forEach(item => {
        let elemento = item.elemento;
        let tamanioOriginal = item.tamanioDeFuente;  
        let tamanioActual = parseInt(window.getComputedStyle(elemento).fontSize);

        let nuevoTamanio = tamanioActual + 2; 
        let tamanioMaximo = tamanioOriginal * 2;

        if (nuevoTamanio <= tamanioMaximo) {
            elemento.style.fontSize = nuevoTamanio + 'px';
            console.log(`Aumentando ${elemento.tagName} a: ${nuevoTamanio}px (máximo permitido: ${tamanioMaximo}px)`);
        } else {
            console.log(`El ${elemento.tagName} ya ha alcanzado el máximo de 200% (${tamanioMaximo}px)`);
        }
    });
});

const btnRestaurar = document.getElementById('restaurarTamanioTexto'); 

btnRestaurar.addEventListener('click', () => {
    tamaniosOriginales.forEach(item => {
        let elemento = item.elemento;
        let tamanioOriginal = item.tamanioDeFuente;
        elemento.style.fontSize = tamanioOriginal + 'px';
        console.log(`Restaurando ${elemento.tagName} a su tamaño original: ${tamanioOriginal}px`);
    });
});