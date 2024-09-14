/* 
//Ejercicio 1.

function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respuesta => respuesta.json())
    .then(json => console.log(json))
}
getUsers(); */

const baseUrl = 'https://jsonplaceholder.typicode.com';

const request = async (url) => {

    const resultado = await fetch(url);
    const respuesta = await resultado.json();
    return respuesta;
}

const getPost = async (id) => {

    const url = `${baseUrl}/posts?userId=${id}`;
    return await request(url);
}

const getUsers = async (id) => {

    const url = `${baseUrl}/users/${id}`;
    return await request(url);
}

const userId = 1;

Promise.all([getUsers(userId), getPost(userId)]).then(
    resp => {
        console.log('Respuesta', resp);
    }
).catch(
    error =>{
        console.log(error);
    } 
)