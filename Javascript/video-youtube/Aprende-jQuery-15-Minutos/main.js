/* $(document).ready(function () {

}); */

// el lo mismo que arriba

$(function () {

    //1. Selectores 
    /* 
    $(".primero").css({"background-color": "blue"});
    $("#segundo").css({"background-color": "red"});
    */

    // 2. Eventos
    /* 
    $("button").click(function (e) { 
        // 3. Acciones
        $("#segundoParrafo").hide(); // parrafo dos se ha escondido
    }); 
    */

    // 3. Enventos con acciones
    
    
    /* $("#btn-hide").click(function (e) { 
        $(".primerParrafo").hide();
    }); 
     */

    // Funcion doble Clic para mostrar
    $("#btn-hide").click(function (e) { 
        $("#segundoParrafo").hide();
    });

    $("#btn-show").dblclick(function (e) { 
        $("#segundoParrafo").show();
    });
   

    /*
    $(".primerParrafo").mouseenter(function () { 
        $("#segundoParrafo").hide();
    });

    $(".primerParrafo").mouseleave(function () { 
        $("#segundoParrafo").show();
    });
    */

    /* 
    $(".primerParrafo").mouseenter(function () { 
        $("#segundoParrafo").fadeOut();
    });

    $(".primerParrafo").mouseenter(function () { 
        $("#segundoParrafo").fadeIn();
    }); 
    */

    /* 
    $(".primerParrafo").animate({width: "300px"})

    $(".primerParrafo").mouseenter(function () { 
        $("#segundoParrafo").slideDown();
    });

    $(".primerParrafo").mouseenter(function () { 
        $("#segundoParrafo").slideUp();
    }); 
    */

    $("#btn-text").click(function () { 
        alert($("#segundoParrafo").text());   // 2. parrafo. Lorem Ipsum ... 
    });

    $("#btn-html").click(function () { 
        alert($("#segundoParrafo").html());   // <strong>2 parrafo.</strong> Lorem ipsum ..
    });

    $("#btn-attr").click(function () { 
        alert($("#segundoParrafo").attr("title"));   // Alert --> Segundo parrafo
    });

    // Diferencia entre "html" y "text"
    

    $("#btn-addText").click(function () {
        $("#segundoParrafo").text("Texto agregado");
    });

    $("#btn-addHtml").click(function () {
        $("#segundoParrafo").html("<strong>html</strong>agregado");
    });

    //Añadir dentro del parrafo

    $("#btn-addWithAppend").click(function () {
        $("#segundoParrafo").append("!Texto agregado con append!");
    });

    $("#btn-addWithPrpend").click(function () { 
        $("#segundoParrafo").prepend(" ¡Texto agredado con prepend al principio ");
    });


    // Añadirlo despues del parrafo

    $("#btn-after").click(function () { 
        $("#segundoParrafo").after( "<p>Hola <strong>Programadores</strong>. Este es un nuevo parrafo. </p>" );        
    });

    // Añadirlo antes del parrafo

    $("#btn-before").click(function () { 
        $("#segundoParrafo").before( "<p>Hola <strong>Programadores</strong>. Este es un nuevo parrafo. </p>" );        
    });

    // remover(eliminar) contenido
    $("#btn-remove").click(function () { 
        $("#segundoParrafo").remove(); 
    });

    // vaciar el elemento con empty()
    $("#btn-empty").click(function (e) { 
        $("#segundoParrafo").empty(); 
    });

    $("#btn-cambiaraRojo").click(function () {  
        $("h1").addClass("red");
    });

   
    $("#btn-cambiaraAzul").click(function () {  
        $("h1").addClass('blue');
    });

    // Volver a la clase que tenia por defecto
    $("#btn-cambiarColorDefault").click(function () {  
        $("h1").toggleClass('blue');
    });


    /* 

    $("#btn-cambiaraRojo").click(function () {  
        $("h1").removeClass("blue").addClass('red');
    }); 


    $("#btn-cambiaraAzul").click(function () {  
        $("h1").removeClass("red").addClass('blue');
    });
    
    */
   

    



    


});


