function cargarPreguntasAprobar(){
	$.getJSON("data/preguntas.json", function(data) {
		$.each(data, function(key, val) {
			var pAutor 				= $('<p></p>');
			pAutor.attr('id','autor');
			pAutor.append(val.autor);

			var pFecha 				= $('<p></p>');
			pFecha.attr('id','fecha');
			pFecha.append(val.fecha);

			var pEstado 			= $('<p></p>');

			var pPregunta 			= $('<h4></h4>');
			pPregunta.attr('id','pregunta');
			pPregunta.append(val.pregunta);

			var pResppuesta1 		= $('<textarea></textarea>');
			var pResppuesta2 		= $('<textarea></textarea>');
			var pResppuesta3 		= $('<textarea></textarea>');
			var pResppuesta4 		= $('<textarea></textarea>');

			var divContPreg 		= $('<div></div>');
			divContPreg.attr('id','contenedorPreguntas');
			divContPreg.attr('class','row');

			var divpreguntaYautor	= $('<div></div>');
			divpreguntaYautor.attr('id','preguntaYautor');
			divpreguntaYautor.attr('class','col-sm-8');

			divpreguntaYautor.append(pPregunta);
			divpreguntaYautor.append(pAutor);

			divContPreg.append(divpreguntaYautor);

			var divFecha			= $('<div></div>');
			divFecha.attr('id','fechaPregunta');
			divFecha.attr('class','col-sm-2');

			var tFecha 				= $('<h4></h4>');
			tFecha.attr('id','tituloFecha');
			tFecha.append('Fecha');

			divFecha.append(tFecha);
			divFecha.append(pFecha);

			divContPreg.append(divFecha);

			var botonSI				= $('<button></button>');
			botonSI.attr('id','btnAprobar');
			botonSI.attr('type','button');
			botonSI.attr('class','btn btn-default botonPregunta');
			botonSI.attr('aria-label','Left Align');

			var spanSI				= $('<span></span>');
			spanSI.attr('id','si');
			spanSI.attr('class','glyphicon glyphicon-ok');
			spanSI.attr('aria-hidden','true');

			botonSI.append(spanSI);

			divContPreg.append(botonSI);

			var botonNO				= $('<button></button>');
			botonNO.attr('id','btnRechazar');
			botonNO.attr('type','button');
			botonNO.attr('class','btn btn-default botonPregunta');
			botonNO.attr('aria-label','Left Align');

			var spanNO				= $('<span></span>');
			spanNO.attr('id','no');
			spanNO.attr('class','glyphicon glyphicon-remove');
			spanNO.attr('aria-hidden','true');

			botonNO.append(spanNO);

			divContPreg.append(botonNO);


			$('#contenedorAprobar').append(divContPreg);


		});
	});
}

$(window).load(function() {
	cargarPreguntasAprobar();
});