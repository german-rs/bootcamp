$(document).ready(function(){

    //Selector por ID.
   let texto = $("#texto");
   let entrada = $("#entrada");
   let btn = $("#btn");

   console.log(texto);
   console.log(entrada);
   console.log(btn);

   //Selector por clase .
   let entrada2 = $(".entrada");
   let btn2 = $(".btn");
   console.log(entrada2);
   console.log(btn2);

    //hijos con >
   let item = $("ul.my-list > li > a");
   item.css("background", "red");
   

});

let text = $("#texto");
text.click(function () {
    document.write("click sobre el texto");
})