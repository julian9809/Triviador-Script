$( function() {
    $( "#draggable" ).draggable();
    $( "#draggable3" ).draggable({ containment: "#containment-wrapper", scroll: false });
    $( "#droppable" ).droppable({
        drop: function( event, ui ) {
            $( this )
            .addClass( "ui-state-highlight" )
            .find( "p" )
            .html( "Dropped!" );
        }
    });
} );

var clickSound = new Audio("sound/button-click.mp3");
$(document).ready(function(){
    $('#creditos').click(function(){
        clickSound.play();
        alertify.success("Karen Tatiana Gomez Gaitan 20152020914 <br> Julian David Gonzalez Vasquez  20151020046 <br> Juan Camilo Canizales Santana 20151020039");
    });
});

$(document).ready(function(){
    $('#ayuda').click(function(){
        clickSound.play();
        alertify.success("INSTRUCCIONES <br> 1.De click a iniciar <br> 2.Al responder cada pregunta de click en enviar <br> 3.Si pierde o gana si desea continuar presiona ok y vuelva al paso 1, si no presione cancel");
    });
});

