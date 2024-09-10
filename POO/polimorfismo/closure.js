
//Caso 1.
console.log('\n----------------Caso 1----------------\n');
let a = 1;

function global(){
    console.log(a);

    function interna(){
        console.log(a);

        function masInterna(){
            console.log(a);
        }
        masInterna();
    }

    interna();
}

global();

console.log('\n----------------Caso 2----------------\n');
//Caso 2.
function local(){
    var b = 1;
    console.log(b);
}
local();
//console.log(b); //b is not defined.

console.log('\n----------------Caso 3----------------\n');
//Caso 3.
function local(){
    let c = 2;

    function interna(){
        console.log(c);
    }
    console.log(c);
    interna();
}
local();