/*
    1.- npm init -y 
    2.- sudo npm i -D @babel/preset-env @babel/cli @babel/core @babel/polyfill
    3.- (verifica el funcionamiento de Babel) npx babel src/ -d dist/
    4.- (verifica el funcionamiento de json) npx babel src/ -d dist/ --config-file ./babel.config.json
    5.- (Ejecución de un archivo) node dist/for-anidados.js
*/

for (let i = 0; i < 3; i++) {
    console.log(i);
    let log = '';

    for (let i = 0; i < 3; i++) {
        log = i; console.log(log);
    };
};

for (let i of [1, 2, 3, 4, 5]) {
    console.log(i);
}