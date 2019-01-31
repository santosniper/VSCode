$(document).ready(function () {
    var centesimas = 0;
    var segundos = 0;
    var minutos = 0;
    var horas = 0;
    function inicio() {
        control = setInterval(cronometro, 10);
        document.getElementById("inicio").disabled = true;
        document.getElementById("parar").disabled = false;
        document.getElementById("continuar").disabled = true;
        document.getElementById("reinicio").disabled = false;
    }
    function parar() {
        clearInterval(control);
        document.getElementById("parar").disabled = true;
        document.getElementById("continuar").disabled = false;
    }
    function reinicio() {
        clearInterval(control);
        centesimas = 0;
        segundos = 0;
        minutos = 0;
        horas = 0;
        Centesimas.innerHTML = ":00";
        Segundos.innerHTML = ":00";
        Minutos.innerHTML = ":00";
        Horas.innerHTML = "00";
        document.getElementById("inicio").disabled = false;
        document.getElementById("parar").disabled = true;
        document.getElementById("continuar").disabled = true;
        document.getElementById("reinicio").disabled = true;
    }
    function cronometro() {
        if (centesimas < 99) {
            centesimas++;
            if (centesimas < 10) { centesimas = "0" + centesimas }
            Centesimas.innerHTML = ":" + centesimas;
        }
        if (centesimas == 99) {
            centesimas = -1;
        }
        if (centesimas == 0) {
            segundos++;
            if (segundos < 10) { segundos = "0" + segundos }
            Segundos.innerHTML = ":" + segundos;
        }
        if (segundos == 59) {
            segundos = -1;
        }
        if ((centesimas == 0) && (segundos == 0)) {
            minutos++;
            if (minutos < 10) { minutos = "0" + minutos }
            Minutos.innerHTML = ":" + minutos;
        }
        if (minutos == 59) {
            minutos = -1;
        }
        if ((centesimas == 0) && (segundos == 0) && (minutos == 0)) {
            horas++;
            if (horas < 10) { horas = "0" + horas }
            Horas.innerHTML = horas;
        }
    }

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
                if (yy == 15) {
                    $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/sola.png" id="' + xx[yy] + '" class="vacio"></tr>');

                } else {
                    $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/pikachu/pika' + xx[yy] + '.png" id="' + xx[yy] + '"></tr>');

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
        var padre2 = $(".vacio").attr("id");
        //alert("Está en  " + padre);
        document.getElementById(padre).src = "img/sola.png";
        var hijo = this.id;
        // alert("deberia ir a " + "col" + hijo);
        if ($("#" + this.id).attr("class") == "vacio") {

        } else {
            $("#" + hijo).attr("src", "img/sola.png");
            $("#" + hijo).attr("id", padre2);
            $(".vacio").attr("src", "img/pikachu/pika" + hijo + ".png");
            $(".vacio").attr("id", hijo);
            $(".vacio").removeClass("vacio");
            $("#" + padre2).addClass("vacio");

        }



    }





});