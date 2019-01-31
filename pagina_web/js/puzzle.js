$(document).ready(function () {

    var tabla = document.getElementById("gTabla");
    var xx = [11, 12, 13, 14, 21, 22, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44];

    tabla.addEventListener("click", generaTabla, false);

    function generaTabla() {
        $("body").append('<table id="tabla" border=10px></table>');
        //$("body").append('<table border=10px><tr><td><img src=""></td > <td></td> <td></td> <td></td></tr > <tr><td></td><td></td><td></td><td></td></tr> <tr><td></td><td></td><td></td><td></td></tr> <tr><td></td><td></td><td></td><td></td></tr> <table>');
        $("#gTabla").hide();
        $(".hidden").removeClass("hidden");
        xx = xx.sort(function () { return Math.random() - 0.5 });
        var yy = 0;


        for (var s = 1; s < 5; s++) {
            $("#tabla").append('<tr id="fila' + s + '"></tr>');

            for (var ss = 1; ss < 5; ss++) {
                if (ss == 4 && s == 4) {
                    $("#fila" + s).append('<td id="col' + s + "_" + ss + '"><img src="img/padre.png class="vacia" id = "' + xx[yy] + '" ></tr > ');


                } else {
                    $("#fila" + s).append('<td id="col' + s + "_" + ss + '"><img src="img/pikachu/pika' + xx[yy] + '.png" id="' + xx[yy] + '"></tr>');

                }
                yy++;
            }
            var fotos = document.querySelectorAll("img");
            for (var f = 0; f < fotos.length; f++) {
                fotos[f].addEventListener("click", muevete, false);

            }


        }


    }




    function muevete() {
        var padre = $("#" + this.id).parent().attr("id");
        alert("Está en  " + padre);
        alert("deberia ir a " + this.id);

    }



});