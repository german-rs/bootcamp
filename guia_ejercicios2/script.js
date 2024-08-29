$(function(){
    //Ejercicio 1.
    let caja = $(".miCaja").on("mouseenter", function(){
        caja.css("background","linear-gradient(to right, #4dc9e6, #210CAE)");
    });

    //Ejercicio 2.
    $("ul li").each(function(index){
        $("ul").before(`<p>${index}: ${$(this).text()} </p>`);
    });
    $("li").filter(":even").css("background", "linear-gradient(to right, #40c9ff, #e81cff)");
    $("li").filter(":odd").css("background", "linear-gradient(to left, #f5e6ad, #f13c77)");
    
    //Ejercicio 3.
    $("button").on("click", function(){
        $(".ejercicio3__texto").css("display", "block");
    });


    //Ejercicio Ajax.
    $(".button__ajax").on("click", function(){
        $.ajax({
            url: "https://reqres.in/api/users",
            type: "GET",
            dataType: "json",
            success: function(response){
                const usuarios = response.data;
                // console.log(usuarios);
                usuarios.forEach(usuario => { 
                    $(".resultado").append(`<p>${usuario.id} - 
                      ${usuario.email} - 
                      ${usuario.first_name} - 
                      ${usuario.last_name}</p>
                     <img src="${usuario.avatar}">`);
                });
    
            },
            error:function(error){
                console.error(error);
            }
        });
    });


});