function cargarPreguntasBorrador(){
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
			panelH.attr('id','b'+key+1);

			var sectorPregunta		= $('<h4></h4>');
			sectorPregunta.attr('class','panel-title');

			var aPregunta 			= $('<a></a>');
			aPregunta.attr('class','collapsed aOpciones');
			aPregunta.attr('role','button');
			aPregunta.attr('data-toggle','collapse');
			aPregunta.attr('data-parent','#accordionPreguntas');
			aPregunta.attr('href','#cb'+key+1);
			aPregunta.attr('aria-expanded','false');
			aPregunta.attr('aria-controls','cb'+key+1)

			aPregunta.append(val.pregunta);
			sectorPregunta.append(aPregunta);
			panelH.append(sectorPregunta);
			panel.append(panelH);

			var editor 				= $('<div></div>');
			editor.attr('id','cb'+key+1);
			editor.attr('class','panel-collapse collapse');
			editor.attr('role','tabpanel');
			editor.attr('aria-labelledby','b'+key+1);

			var panelBody			= $('<div></div>');
			panelBody.attr('class','panel-body');

			var areaTexto			= $('<textarea></textarea>');
			areaTexto.attr('class','form-control');
			areaTexto.attr('rows','5');
			areaTexto.attr('style','margin-bottom: 10px;');

			var numeroRespuesta1	= $('<h4></h4>');
			numeroRespuesta1.attr('id','rb1');
			numeroRespuesta1.append('Respuesta 1');

			var respuesta1			= $('<textarea></textarea>');
			respuesta1.attr('class','form-control');
			respuesta1.attr('rows','2');
			respuesta1.attr('style','margin-bottom: 10px;');

			var numeroRespuesta2	= $('<h4></h4>');
			numeroRespuesta2.attr('id','rb2');
			numeroRespuesta2.append('Respuesta 2');

			var respuesta2			= $('<textarea></textarea>');
			respuesta2.attr('class','form-control');
			respuesta2.attr('rows','2');
			respuesta2.attr('style','margin-bottom: 10px;');


			var numeroRespuesta3	= $('<h4></h4>');
			numeroRespuesta3.attr('id','rb3');
			numeroRespuesta3.append('Respuesta 3');

			var respuesta3			= $('<textarea></textarea>');
			respuesta3.attr('class','form-control');
			respuesta3.attr('rows','2');
			respuesta3.attr('style','margin-bottom: 10px;');

			var numeroRespuesta4	= $('<h4></h4>');
			numeroRespuesta4.attr('id','rb4');
			numeroRespuesta4.append('Respuesta 4');

			var respuesta4			= $('<textarea></textarea>');
			respuesta4.attr('class','form-control');
			respuesta4.attr('rows','2');
			respuesta4.attr('style','margin-bottom: 10px;');

			respuesta1.append(val.respuesta1);
			respuesta2.append(val.respuesta2);
			respuesta3.append(val.respuesta3);
			respuesta4.append(val.respuesta4);

			var botonGuardar		= $('<button></button>');
			botonGuardar.attr('type','button');
			botonGuardar.attr('class','btn btn-default btn-lg guardar');

			var botonTexto			= $('<span></span>');
			botonTexto.attr('id','guardarBorrador');
			botonTexto.attr('class','textoGuardar glyphicon glyphicon-floppy-disk');
			botonTexto.attr('aria-hidden','true');

			var botonPublicar		= $('<button></button>');
			botonPublicar.attr('type','button');
			botonPublicar.attr('class','btn btn-default btn-lg');

			var botonTextoP			= $('<span></span>');
			botonTextoP.attr('id','btnAprobarborrador');
			botonTextoP.attr('class','textoGuardar glyphicon glyphicon-ok');
			botonTextoP.attr('aria-hidden','true');

			var botonDescartar		= $('<button></button>');
			botonDescartar.attr('type','button');
			botonDescartar.attr('class','btn btn-default btn-lg');

			var botonTextoD			= $('<span></span>');
			botonTextoD.attr('id','btnRechazarborrador');
			botonTextoD.attr('class','textoGuardar glyphicon glyphicon-remove');
			botonTextoD.attr('aria-hidden','true');



			botonTexto.append(' Guardar');
			botonTextoP.append(' Publicar');
			botonTextoD.append(' Descartar');
			botonGuardar.append(botonTexto);
			botonPublicar.append(botonTextoP);
			botonDescartar.append(botonTextoD);
			panelBody.append(areaTexto);
			panelBody.append(numeroRespuesta1);
			panelBody.append(respuesta1);
			panelBody.append(numeroRespuesta2);
			panelBody.append(respuesta2);
			panelBody.append(numeroRespuesta3);
			panelBody.append(respuesta3);
			panelBody.append(numeroRespuesta4);
			panelBody.append(respuesta4);
			panelBody.append(botonGuardar);
			panelBody.append(botonPublicar);
			panelBody.append(botonDescartar);
			editor.append(panelBody);
			panel.append(editor);

			acordeon.append(panel);

			divContPreg.append(acordeon);

			$('#contenedorBorrador').append(divContPreg);

		});
	});
}

$(window).load(function() {
	cargarPreguntasBorrador();
});