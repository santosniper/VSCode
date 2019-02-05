$(document).ready(function () {
    var mov = 0;
    //creamos las variables de tiempo para el cronómetro
    var centesimas = 0;
    var segundos = 0;
    var minutos = 0;
    var horas = 0;
    //funcion para iniciar el crono.
    function inicio() {
        control = setInterval(cronometro, 10);
        document.getElementById("inicio").disabled = true;
        document.getElementById("parar").disabled = false;
        document.getElementById("continuar").disabled = true;
        document.getElementById("reinicio").disabled = false;
    }
    //función para parar el crono
    function parar() {
        clearInterval(control);
        document.getElementById("parar").disabled = true;
        document.getElementById("continuar").disabled = false;
    }
    //función para reiniciar el crono
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
    //función para que el crono funcione como queremos.
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

    //creamos la variable tabla que es el botón que la creará.
    var tabla = document.getElementById("gTabla");
    var xx = [11, 12, 13, 14, 21, 22, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44];

    tabla.addEventListener("click", generaTabla, false);
    //creamos la función que nos genera la tabla que queremos y a su vez escondemos el boton que la genera.
    function generaTabla() {
        $("body").append('<table id="tabla" border=10px></table>');
        $("#gTabla").hide();
        $(".hidden").removeClass("hidden");

        //random
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
            //
            var fotos = document.querySelectorAll("img");
            for (var f = 0; f < fotos.length; f++) {
                fotos[f].addEventListener("click", muevete, false);

            }


        }






        var fotos = document.querySelectorAll("img");
        for (var f = 0; f < fotos.length; f++) {
            fotos[f].addEventListener("click", muevete, false);

        }


        $("#contenedor").append('<div class="reloj" id="Horas">00</div><div class="reloj" id="Minutos">:00</div><div class="reloj" id="Segundos">:00</div><div class="reloj" id="Centesimas">:00</div>');
        inicio();

    }






    function muevete() {
        var padre = $("#" + this.id).parent().attr("id");
        var padre2 = $(".vacio").attr("id");
        //alert("Está en  " + padre);
        document.getElementById(padre).src = "img/sola.png";
        var hijo = this.id;
        //alert("deberia ir a " + "col" + hijo);

        if (compruebame(padre) == true) {
            if ($("#" + this.id).attr("class") == "vacio") {

            } else {
                $("#" + hijo).attr("src", "img/sola.png");
                $("#" + hijo).attr("id", padre2);

                $(".vacio").attr("src", "img/pikachu/pika" + hijo + ".png");
                $(".vacio").attr("id", hijo);
                $(".vacio").removeClass("vacio");
                $("#" + padre2).addClass("vacio");
                mov++;
                $("#cMov").html("Movimiento " + mov);
            }
        } else {
            $("#" + this.id).slideUp(300).fadeIn(800);
        }





    }


    function compruebame(padre) {
        var padre3 = $(".vacio").parent().attr("id");
        var array = padre3.split('');
        var x = array[3];

        var y = array[4];
        var array2 = padre.split('');
        var c = array2[3];
        var v = array2[4];

        if (c == x && v == y - 1) {
            return true;
        }

        if (c == x && y == v - 1) {
            return true;
        }
        if (v == y && c == x - 1) {
            return true;
        }
        if (v == y && x == c - 1) {
            return true;
        }


    }





});