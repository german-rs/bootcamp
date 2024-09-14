/* 
    Nombre estudiante: Germán A. Riveros Sepúlveda.
    Generación: 14.
    Jornada: Vespertina.   
    Desafío: Traer posts.
*/

const getPosts = async () => {

    try {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const respuesta = await fetch(url);
        const posts = await respuesta.json();

        mostrarPosts(posts);

    } catch (error) {
        console.error(error);
    }
}

const mostrarPosts = (entradas) => {

    const resultado = document.getElementById('post-data');
    const ul = document.createElement('ul');

    entradas.forEach(post => {
        const li = document.createElement('li');
        const strong = document.createElement('strong');
        const parrafo = document.createElement('p');

        strong.textContent = post.title;
        parrafo.textContent = post.body;

        li.appendChild(strong);
        li.appendChild(parrafo);
        ul.appendChild(li);
    });

    resultado.appendChild(ul);
}