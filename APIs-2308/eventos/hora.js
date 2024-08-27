$(document).ready(function() {
    // Función para formatear un número con dos dígitos
    function formatearTiempo(tiempo) {
        return tiempo.toString().padStart(2, '0');
    }
 
    // Función para obtener la hora actual formateada
    function obtenerHoraFormateada() {
        const ahora = new Date();
        const horas = formatearTiempo(ahora.getHours());
        const minutos = formatearTiempo(ahora.getMinutes());
        const segundos = formatearTiempo(ahora.getSeconds());
        const milisegundos = ahora.getMilliseconds().toString().padStart(3, '0');
        return `${horas}:${minutos}:${segundos}.${milisegundos}`;
    }
 
    let contador = 0;
 
    // Evento para el clic en el elemento con id 'ejemplo'
    $('#ejemplo').on('click', function() {
        contador++;
        console.log(`---> ${obtenerHoraFormateada()} Clic ${contador} vez!`);
    });
});