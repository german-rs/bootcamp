const trace = () => {

    try {
        throw new Error('miErrorPersonalizado');
    } catch (error) {
        console.log(error);
    }
}

function b() {
    trace();
}

function a() {
    b(1, 'textto', undefined, {});
}

a();