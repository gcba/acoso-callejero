$(document).ready(function() {
    var scrollorama = $.scrollorama({
        blocks: '.bloque',
        enablePin: false
    });



    // cuando cambia el bloque
    scrollorama.onBlockChange(function() {
        console.log("Bloque ", scrollorama.blockIndex);
    });


});





