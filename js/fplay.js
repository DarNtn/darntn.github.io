
function cargarCarousel(){
	/*carga de jugadores al corousel desde leader.json*/

    $.getJSON("data/leader.json", function(data) {
        $.each(data, function(key, val) {
            var item = $('<div></div>');
            if (val["unidad"]=="1"){
                item.attr('class','item active');
            }else{
                item.attr('class','item');
            }            
            var container = $('<div></div>');
            container.attr('class','container');
            var caption = $('<div></div>');
            caption.attr('class','carousel-caption');

            var unidad = $('<h1></h1>');
            unidad.text('Unidad '+val["unidad"]);
            var contenido = $('<div></div>');
            contenido.attr('class','col-12');
            var boton = $('<a></a>');
            boton.attr('class','btn btn-lg btn-primary');
            boton.attr('href','leaderboard.html');
            boton.attr('role','button');
            boton.text('Ver completo');

            var divImagen = $('<div></div>');
            var imagen = $('<img></img>');
            divImagen.attr('class','col-4'); 
            imagen.attr('class','img-circle');
            imagen.attr('alt','img'+val["unidad"]);      
            imagen.attr('src',val["imagen"]);
            divImagen.append(imagen);


            var divDatos = $('<div></div>');
            divDatos.attr('class','col-7'); 

            var player = $('<h3></h3>');
            player.attr('id','name');
            player.text(val["nombres"]);
            var dias = $('<h3></h3>');
            var tiempo = $('<h3></h3>');
            dias.text(val["dias"]+' días en el primer lugar');
            tiempo.text('Tiempo record: '+val["tiempo"]);
            divDatos.append(player);
            divDatos.append(dias);
            divDatos.append(tiempo);   

            contenido.append(divImagen);
            contenido.append(divDatos); 

            caption.append(unidad);
            caption.append(contenido);
            caption.append($('<p></p>').append(boton));

            container.append(caption);
            /*
            var slideicon = $('<img></img>');
            slideicon.attr('class','first-slide');
            slideicon.attr('src','data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==');
            slideicon.attr('alt','Slide');

            item.append(slideicon);*/
            item.append(container);
            
            $('#itemsCarousel').append(item);
        });
    });
}


$(window).load(function() {

    cargarCarousel();    

});