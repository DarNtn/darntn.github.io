function cargarPyR(){
	$.getJSON("data/preguntas-respuestas.json", function(data) {
		$.each(data, function(key, val) {
			var h_pregunta = $('<h4></h4>');
			var div_pregunta = $('<div></div>');
			h_pregunta.attr('id','pregunta');
			h_pregunta.append(val.pregunta);
			div_pregunta.attr('id','contenedor_pregunta');
			div_pregunta.append(h_pregunta);

			var p_respuesta = $('<p></p>');
			var div_respuesta = $('<div></div>');
			p_respuesta.attr('id','respuesta');
			p_respuesta.append(val.respuesta);
			div_respuesta.attr('id','contenedor_respuesta')
			div_respuesta.append(p_respuesta);

			$('#hoja').append(div_pregunta);
			$('#hoja').append(div_respuesta);

		});
	});
}

$(window).load(function() {
	cargarPyR();
});