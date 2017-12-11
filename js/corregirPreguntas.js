function cargarPreguntasCorregir(){
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

			var acordeon			= $('<div></div>');
			acordeon.attr('id','accordionPreguntas');
			acordeon.attr('class','panel-group');
			acordeon.attr('role','tablist');
			acordeon.attr('aria-multiselectable','true');

			var panel 				= $('<div></div>');
			panel.attr('class','panel panel-default');

			var panelH 				= $('<div></div>');
			panelH.attr('class','panel-heading');
			panelH.attr('role','tab');
			panelH.attr('id', key+1);

			var sectorPregunta		= $('<h4></h4>');
			sectorPregunta.attr('class','panel-title');

			var aPregunta 			= $('<a></a>');
			aPregunta.attr('class','collapsed aOpciones');
			aPregunta.attr('role','button');
			aPregunta.attr('data-toggle','collapse');
			aPregunta.attr('data-parent','#accordionPreguntas');
			aPregunta.attr('href','#c'+key+1);
			aPregunta.attr('aria-expanded','false');
			aPregunta.attr('aria-controls','c'+key+1)

			aPregunta.append(val.pregunta);
			sectorPregunta.append(aPregunta);
			panelH.append(sectorPregunta);
			panel.append(panelH);

			var editor 				= $('<div></div>');
			editor.attr('id','c'+key+1);
			editor.attr('class','panel-collapse collapse');
			editor.attr('role','tabpanel');
			editor.attr('aria-labelledby',key+1);

			var panelBody			= $('<div></div>');
			panelBody.attr('class','panel-body');

			var areaTexto			= $('<textarea></textarea>');
			areaTexto.attr('class','form-control');
			areaTexto.attr('rows','5');
			areaTexto.attr('style','margin-bottom: 10px;');

			var botonGuardar		= $('<button></button>');
			botonGuardar.attr('type','button');
			botonGuardar.attr('class','btn btn-default btn-lg guardar');

			var botonTexto			= $('<span></span>');
			botonTexto.attr('id','guardar1');
			botonTexto.attr('class','textoGuardar glyphicon glyphicon-floppy-disk');
			botonTexto.attr('aria-hidden','true');

			botonTexto.append(' Guardar');
			botonGuardar.append(botonTexto);
			panelBody.append(areaTexto);
			panelBody.append(botonGuardar);
			editor.append(panelBody);
			panel.append(editor);

			acordeon.append(panel);

			divContPreg.append(acordeon);

			$('#contenedorCorregir').append(divContPreg);

		});
	});
}

$(window).load(function() {
	cargarPreguntasCorregir();
});