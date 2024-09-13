/* 
    Nombre estudiante: Germán A. Riveros Sepúlveda.
    Generación: 14.
    Jornada: Vespertina.   
    Desafío: Sugerencia de videos
*/

const GestorDeVideos = (() => {
    
    function setVideoUrl(url, id) {
        document.getElementById(id).setAttribute('src', url);
    }

    return {
        play: function(url, id) {
            setVideoUrl(url, id);
        }
    };
})();


class Multimedia {
    constructor(url) {
        this._url = url;
    }

    get url() {
        return this._url;
    }

    setInicio() {
        return 'Este método es para realizar un cambio en la URL del vídeo';
    }
}


class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    playMultimedia() {
        GestorDeVideos.play(this.url, this.id);
    }

    setInicio(tiempo) {
        let nuevaUrl = `${this.url}&amp;start=${tiempo}`;
        document.getElementById(this.id).setAttribute('src', nuevaUrl);
    }
}

const musica = new Reproductor('https://www.youtube.com/embed/6hkrkfkGnWk?si=Qx6NVfITJ-iPQ917', 'musica');
const pelicula = new Reproductor('https://www.youtube.com/embed/d3XN49jmmGM?si=eBFrKv6SXbOSxfcj', 'peliculas');
const serie = new Reproductor('https://www.youtube.com/embed/SIh7yJ0byyA?si=I1ialM4CLTD8IGnX', 'series');

musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

musica.setInicio(400); 
pelicula.setInicio(20);
serie.setInicio(30);