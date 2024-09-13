const promesa1 = 1;
const promesa2 = Promise.resolve(2);
const promesa3 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(3);
    }, 2000);
})

// const promesa4 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         reject(3);
//     }, 2000);
// })

Promise.all([promesa1, promesa2, promesa3 /*, promesa4*/])
.then(response =>{
    console.log(response);
})
// .catch(error =>{
//     console.log(error);
// })