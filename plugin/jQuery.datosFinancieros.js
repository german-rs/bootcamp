jQuery.fn.datosFinancieros = function(){
    var element = this;
    $.ajax({
        url: "https://mindicador.cl/api",
        type: "GET",
        dataType: "json",
        success : function(data){
            element.append(`<span>${data.uf.valor}</span>`);
        }
    });
    return this;
};