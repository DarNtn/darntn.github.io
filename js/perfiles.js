function cargarDatosUsuarios(){
	$.getJSON("data/datosUsuarios.json", function(data) {
		$.each(data, function(key, val) {
		
			var hojaPerfiles = $('<div></div>');
			hojaPerfiles.attr('class','col-sm-6 col-md-3');

			var divThumb = $('<div></div>');
			divThumb.attr('class','thumbnail');

			var divCaption = $('<div></div>');
			divCaption.attr('class','caption');

			var nombre = $('<h3></h3>');
			nombre.append(val.nombre);

			var acceso = $('<p></p>');
			acceso.append(val.acceso);

			var pBotones = $('<p></p>');

			var aEditar = $('<a></a>')

			divContPreg.append(acordeon);

			$('#contenedorEstudiantes').append(divContPreg);

		});
	});
}

$(window).load(function() {
	cargarDatosUsuarios();
});