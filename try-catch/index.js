const showError = () =>{
    try{
        throw 'Ha ocurrido un error';
    }catch(error){
        console.log(error);
    }
}

showError();