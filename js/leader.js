/*
$("h3").mouseover(function(){
    $("h3").css("background-color", "yellow");
});

document.getElementsByClassName('nombre').addEventListener("mouseover", function(){
	alert("Será redireccionado a Wikipedia");
});
*/

function cargarLeader(){
	/*carga de jugadores desde leader.json*/

    $.getJSON("data/leader.json", function(data) {
        $.each(data, function(key, val) {
            var fila = $('<div></div>');
            fila.attr('class','row justify-content-center');
            fila.attr('id','player');

            var divImagen = $('<div></div>');
            var imagen = $('<img></img>');
            var overlay = $('<div></div>');
            var texto = $('<div></div>');
            divImagen.attr('class','col-sm-3 item-center'); 
            imagen.attr('class','img-circle');
            imagen.attr('id','imgLeader');   
            imagen.attr('alt','img'+val["unidad"]);      
            imagen.attr('src',val["imagen"]);
            overlay.attr('class','overlay');
            texto.attr('class','text');
            texto.text('UNIDAD '+val["unidad"]);
            overlay.append(texto);
            divImagen.append(imagen);
            

            var contenido = $('<div></div>');
            var player = $('<h3></h3>');
            var datos = $('<div></div>');
            contenido.attr('class','col-sm-8');
            player.attr('class','milky');
            player.text(val["nombres"]);
            datos.attr('class','d-flex flex-row');
            var dias = $('<h4></h4>');
            var tiempo = $('<h4></h4>');
            dias.text(val["dias"]+' días');
            dias.attr('class','col-sm-4 dias');
            tiempo.text('Tiempo: '+val["tiempo"]);
            tiempo.attr('class','col-sm-8 tiempo');
            datos.append(dias);
            datos.append(tiempo);
            contenido.append(player);
            contenido.append(datos);  

            divImagen.append(overlay); 

            fila.append(divImagen);
            fila.append(contenido);
            
            $('#leaderboard').append(fila);
        });
    });
}


$(window).load(function() {

    cargarLeader();    

});