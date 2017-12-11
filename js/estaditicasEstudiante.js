function cargarEstadisticasEstudiantes(){
	$.getJSON("data/datosEstudiante.json", function(data) {
		$.each(data, function(key, val) {
		
			var divContPreg 		= $('<div></div>');
			divContPreg.attr('id','contenedorPreguntas');

			var acordeon			= $('<div></div>');
			acordeon.attr('id','accordionEstudiantes');
			acordeon.attr('class','panel-group');
			acordeon.attr('role','tablist');
			acordeon.attr('aria-multiselectable','true');

			var panel 				= $('<div></div>');
			panel.attr('class','panel panel-default');

			var panelH 				= $('<div></div>');
			panelH.attr('class','panel-heading');
			panelH.attr('role','tab');
			panelH.attr('id','e'+key+1);

			var sectorNombre		= $('<h4></h4>');
			sectorNombre.attr('class','panel-title');

			var aNombre 			= $('<a></a>');
			aNombre.attr('class','collapsed aOpciones');
			aNombre.attr('role','button');
			aNombre.attr('data-toggle','collapse');
			aNombre.attr('data-parent','#accordionPreguntas');
			aNombre.attr('href','#ce'+key+1);
			aNombre.attr('aria-expanded','false');
			aNombre.attr('aria-controls','ce'+key+1);

			aNombre.append(val.nombre);
			sectorNombre.append(aNombre);
			panelH.append(sectorNombre);
			panel.append(panelH);

			var graficas 			= $('<div></div>');
			graficas.attr('id','ce'+key+1);
			graficas.attr('class','panel-collapse collapse');
			graficas.attr('role','tabpanel');
			graficas.attr('aria-labelledby','e'+key+1);

			var panelBody			= $('<div></div>');
			panelBody.attr('class','panel-body');

			var columnas 			= $('<div></div>');
			columnas.attr('class','row');

			var col1 				= $('<div></div>');
			col1.attr('id','barra1');
			col1.attr('class','barraUsuario');
			col1.attr('style','padding-top: '+400*val.unidad1+'px');

			var pUnidad1 			= $('<p></p>');
			pUnidad1.attr('id','mesCalificacion');
			pUnidad1.append('Unidad 1');

			var pCal1 				= $('<p></p>');
			pCal1.attr('id','mesCalificacion');
			pCal1.append(val.unidad1*10+'/10');

			var col2 				= $('<div></div>');
			col2.attr('id','barra1');
			col2.attr('class','barraUsuario');
			col2.attr('style','padding-top: '+400*val.unidad2+'px');

			var pUnidad2 			= $('<p></p>');
			pUnidad2.attr('id','mesCalificacion');
			pUnidad2.append('Unidad 2');

			var pCal2 				= $('<p></p>');
			pCal2.attr('id','mesCalificacion');
			pCal2.append(val.unidad2*10+'/10');

			var col3 				= $('<div></div>');
			col3.attr('id','barra1');
			col3.attr('class','barraUsuario');
			col3.attr('style','padding-top: '+400*val.unidad3+'px');

			var pUnidad3 			= $('<p></p>');
			pUnidad3.attr('id','mesCalificacion');
			pUnidad3.append('Unidad 3');

			var pCal3 				= $('<p></p>');
			pCal3.attr('id','mesCalificacion');
			pCal3.append(val.unidad3*10+'/10');

			var col4 				= $('<div></div>');
			col4.attr('id','barra1');
			col4.attr('class','barraUsuario');
			col4.attr('style','padding-top: '+400*val.unidad4+'px');

			var pUnidad4 			= $('<p></p>');
			pUnidad4.attr('id','mesCalificacion');
			pUnidad4.append('Unidad 4');

			var pCal4 				= $('<p></p>');
			pCal4.attr('id','mesCalificacion');
			pCal4.append(val.unidad4*10+'/10');

			var col5 				= $('<div></div>');
			col5.attr('id','barra1');
			col5.attr('class','barraUsuario');
			col5.attr('style','padding-top: '+400*val.unidad5+'px');

			var pUnidad5 			= $('<p></p>');
			pUnidad5.attr('id','mesCalificacion');
			pUnidad5.append('Unidad 5');

			var pCal5 				= $('<p></p>');
			pCal5.attr('id','mesCalificacion');
			pCal5.append(val.unidad5*10+'/10');

			var col6 				= $('<div></div>');
			col6.attr('id','barra6');
			col6.attr('class','barraTotal');
			col6.attr('style','padding-top: '+400*val.correctas+'px');

			var pUnidad6 			= $('<p></p>');
			pUnidad6.attr('id','mesCalificacion');
			pUnidad6.append('Nota');

			var pCal6 				= $('<p></p>');
			pCal6.attr('id','mesCalificacion');
			pCal6.append(val.correctas*10+'/10');

			col1.append(pUnidad1);
			col1.append(pCal1);

			col2.append(pUnidad2);
			col2.append(pCal2);

			col3.append(pUnidad3);
			col3.append(pCal3);

			col4.append(pUnidad4);
			col4.append(pCal4);

			col5.append(pUnidad5);
			col5.append(pCal5);

			col6.append(pUnidad6);
			col6.append(pCal6);

			columnas.append(col1);
			columnas.append(col2);
			columnas.append(col3);
			columnas.append(col4);
			columnas.append(col5);
			columnas.append(col6);

			panelBody.append(columnas);

			graficas.append(panelBody);
			panel.append(graficas);

			acordeon.append(panel);

			divContPreg.append(acordeon);

			$('#contenedorEstudiantes').append(divContPreg);

		});
	});
}

$(window).load(function() {
	cargarEstadisticasEstudiantes();
});