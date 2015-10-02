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

$("#denunciaLNK").on('click', function(){
     window.location = "http://www.fiscalias.gob.ar/denuncia-24hs/";    
});

$("#compartiLNK").on('click', function(){
     window.location = "https://www.facebook.com/AccionRespeto";    
});

$("#involucrateLNK").on('click', function(){
     window.location = "mailto:dgmuj@buenosaires.gob.ar";    
});

$("#descargarLNK").on('click', function(){
     window.location = "https://drive.google.com/uc?export=download&id=0B_0md5pNlmsEQjhmNWZWWml2eG8";    
});

$("#explorar").on('click', function(){
$('html, body').animate({
        scrollTop: $("#grafico").offset().top
    }, 500);    
});

