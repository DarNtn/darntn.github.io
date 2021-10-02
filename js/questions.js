var datos;
function cargarPreguntas(){

    $(document).on('click', '.card', function(){
        loadModal($(this));
    });

    $("#btn_respuesta").click(function(){
        $("#blockRespuesta").show();
    });

    var imgQ = $("<img>").attr("src", "img/questioncard.png").attr("class","card-img");
    var card = $("<div></div>").attr("class","card");
    var containerQ = $("<td></td>").attr("class","col-2 p-1");
    card.append(imgQ);

    $.getJSON("data/questions.json", function(data) {
        datos = data;
        console.log(data);
        
        var rows = {};
        $.each(data, function(key, val) {
            var fila = $('<th>'+val["libro"]+'</th>');
            fila.addClass("text-center font-weight-bold text-uppercase");
            fila.attr("scope","col");
            $("#row-libros").append(fila);

            $.each(val["preguntas"], function(k, v){
                if (key == 0){
                    rows[k] = $("<tr></tr>");
                    let c = $("<td>"+k+"</td>");
                    c.addClass("title-point");
                    rows[k].append(c);
                    $("tbody").append(rows[k]);
                }

                rows[k].append(containerQ.clone().append(card.clone().attr("puntos",k).attr("libro",val["libro"])));
            });
            
        });
        
    });
}

function getLibro(name){
    $.each(datos, function(k,v){
        if (v["libro"] == name){
            return v;
        }
    });
    return null;
}

function loadModal(obj){
    $("#blockRespuesta").hide();
    $("#puntos").text(obj.attr("puntos"));
    var l = getLibro(obj.attr("libro"));
    $("#pregunta").text(l["preguntas"][obj.attr("puntos")][0]["pregunta"]);
    $("#respuesta").text(l["preguntas"][obj.attr("puntos")][0]["respuesta"]);
    $("#modalQuestion").modal("show");
}


$(window).on('load', function() {

    cargarPreguntas();    

});