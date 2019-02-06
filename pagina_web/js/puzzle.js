$(document).ready(function () {
    var mov = 0;
    var com = 0;
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
    var puzzle = 0;

    var botim = document.getElementById("gImg");


    tabla.addEventListener("click", generaTabla, false);
    //creamos la función que nos genera la tabla que queremos y a su vez escondemos el boton que la genera.
    function generaTabla() {
        removeTable();
        $("body").append('<table id="tabla" border=10px></table>');
        $("#gTabla").addClass("escondida");
        $("#gComodin").toggleClass("escondida");
        $("#gImg").removeClass("escondida");
        $(".hidden").removeClass("hidden");

        //random
        xx = xx.sort(function () { return Math.random() - 0.5 });
        var yy = 0;


        for (var s = 1; s < 5; s++) {
            $("#tabla").append('<tr id="fila' + s + '"></tr>');
            for (var ss = 1; ss < 5; ss++) {
                if (puzzle == 1) {
                    if (yy == 15) {
                        $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/sola.png" id="' + xx[yy] + '" class="vacio"></tr>');



                    } else {
                        $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/pikachu/pika' + xx[yy] + '.png" id="' + xx[yy] + '"></tr>');

                    }
                }

                if (puzzle == 2) {
                    if (yy == 15) {
                        $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/sola.png" id="' + xx[yy] + '" class="vacio"></tr>');



                    } else {
                        $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/toro/toro' + xx[yy] + '.png" id="' + xx[yy] + '"></tr>');

                    }
                }

                if (puzzle == 3) {
                    if (yy == 15) {
                        $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/sola.png" id="' + xx[yy] + '" class="vacio"></tr>');



                    } else {
                        $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/orni/orni' + xx[yy] + '.png" id="' + xx[yy] + '"></tr>');

                    }
                }

                if (puzzle == 4) {
                    if (yy == 15) {
                        $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/sola.png" id="' + xx[yy] + '" class="vacio"></tr>');



                    } else {
                        $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/coliseo/col' + xx[yy] + '.png" id="' + xx[yy] + '"></tr>');

                    }
                }



                yy++;
            }
            //
            var fotos = document.querySelectorAll("img");
            for (var f = 0; f < fotos.length; f++) {
                fotos[f].addEventListener("click", muevete, false);
                fotos[f].addEventListener("dblclick", usaComodin, false);

            }


        }
        addCrono();

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

                if (puzzle == 1) {
                    $("#" + hijo).attr("src", "img/sola.png");
                    $("#" + hijo).attr("id", padre2);

                    $(".vacio").attr("src", "img/pikachu/pika" + hijo + ".png");
                    $(".vacio").attr("id", hijo);
                    $(".vacio").removeClass("vacio");
                    $("#" + padre2).addClass("vacio");
                    mov++;
                    $("#cMov").html("Movimiento " + mov);
                }

                if (puzzle == 2) {
                    $("#" + hijo).attr("src", "img/sola.png");
                    $("#" + hijo).attr("id", padre2);

                    $(".vacio").attr("src", "img/toro/toro" + hijo + ".png");
                    $(".vacio").attr("id", hijo);
                    $(".vacio").removeClass("vacio");
                    $("#" + padre2).addClass("vacio");
                    mov++;
                    $("#cMov").html("Movimiento " + mov);
                }

                if (puzzle == 3) {
                    $("#" + hijo).attr("src", "img/sola.png");
                    $("#" + hijo).attr("id", padre2);

                    $(".vacio").attr("src", "img/orni/orni" + hijo + ".png");
                    $(".vacio").attr("id", hijo);
                    $(".vacio").removeClass("vacio");
                    $("#" + padre2).addClass("vacio");
                    mov++;
                    $("#cMov").html("Movimiento " + mov);
                }

                if (puzzle == 4) {
                    $("#" + hijo).attr("src", "img/sola.png");
                    $("#" + hijo).attr("id", padre2);

                    $(".vacio").attr("src", "img/coliseo/col" + hijo + ".png");
                    $(".vacio").attr("id", hijo);
                    $(".vacio").removeClass("vacio");
                    $("#" + padre2).addClass("vacio");
                    mov++;
                    $("#cMov").html("Movimiento " + mov);
                }



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

    var botoncitos = document.querySelectorAll("button");
    for (var bt = 0; bt < botoncitos.length; bt++) {
        botoncitos[bt].addEventListener("click", eligeme, false);
    }

    function eligeme() {


        if (this.id == "botoncito1") {
            removeTable();
            removeCrono();
            removeImg();
            $("#gTabla").removeClass("escondida");
            $("body").append('<table id="tabla" border=10px> <tr><td><img src = "img/pikachu/pika11.png" id = "" ></td><td><img src = "img/pikachu/pika12.png" id = "" ></td><td><img src = "img/pikachu/pika13.png" id = "" ></td><td><img src = "img/pikachu/pika14.png" id = "" ></td></tr><tr><td><img src = "img/pikachu/pika21.png" id = "" ></td><td><img src = "img/pikachu/pika22.png" id = "" ></td><td><img src = "img/pikachu/pika23.png" id = "" ></td><td><img src = "img/pikachu/pika24.png" id = "" ></td></tr><tr><td><img src = "img/pikachu/pika31.png" id = "" ></td><td><img src = "img/pikachu/pika32.png" id = "" ></td><td><img src = "img/pikachu/pika33.png" id = "" ></td><td><img src = "img/pikachu/pika34.png" id = "" ></td></tr><tr><td><img src = "img/pikachu/pika41.png" id = "" ></td><td><img src = "img/pikachu/pika42.png" id = "" ></td><td><img src = "img/pikachu/pika43.png" id = "" ></td><td><img src = "img/pikachu/pika44.png" id = "" ></td></tr> </table > ');
            puzzle = 1;
            mov = 0;
            com = 0;
            $("#cMov").html("Movimiento ");
            $("#gComodin").addClass("escondida");
            $("#cCom").addClass("escondida");
            $("body").append('<img src="img/formada1.png" class="escondida" id="ejemplo">');
            reinicio();

        }

        if (this.id == "botoncito2") {
            removeTable();
            removeCrono();
            removeImg();
            $("#gTabla").removeClass("escondida");
            $("body").append('<table id="tabla" border=10px> <tr><td><img src = "img/toro/toro11.png" id = "" ></td><td><img src = "img/toro/toro12.png" id = "" ></td><td><img src = "img/toro/toro13.png" id = "" ></td><td><img src = "img/toro/toro14.png" id = "" ></td></tr><tr><td><img src = "img/toro/toro21.png" id = "" ></td><td><img src = "img/toro/toro22.png" id = "" ></td><td><img src = "img/toro/toro23.png" id = "" ></td><td><img src = "img/toro/toro24.png" id = "" ></td></tr><tr><td><img src = "img/toro/toro31.png" id = "" ></td><td><img src = "img/toro/toro32.png" id = "" ></td><td><img src = "img/toro/toro33.png" id = "" ></td><td><img src = "img/toro/toro34.png" id = "" ></td></tr><tr><td><img src = "img/toro/toro41.png" id = "" ></td><td><img src = "img/toro/toro42.png" id = "" ></td><td><img src = "img/toro/toro43.png" id = "" ></td><td><img src = "img/toro/toro44.png" id = "" ></td></tr> </table > ');
            puzzle = 2;
            mov = 0;
            com = 0;
            $("#cMov").html("Movimiento ");
            $("#gComodin").addClass("escondida");
            $("#cCom").addClass("escondida");
            $("body").append('<img src="img/formada2.png" class="escondida" id="ejemplo">');
            reinicio();

        }

        if (this.id == "botoncito3") {
            removeTable();
            removeCrono();
            removeImg();
            $("#gTabla").removeClass("escondida");
            $("body").append('<table id="tabla" border=10px> <tr><td><img src = "img/orni/orni11.png" id = "" ></td><td><img src = "img/orni/orni12.png" id = "" ></td><td><img src = "img/orni/orni13.png" id = "" ></td><td><img src = "img/orni/orni14.png" id = "" ></td></tr><tr><td><img src = "img/orni/orni21.png" id = "" ></td><td><img src = "img/orni/orni22.png" id = "" ></td><td><img src = "img/orni/orni23.png" id = "" ></td><td><img src = "img/orni/orni24.png" id = "" ></td></tr><tr><td><img src = "img/orni/orni31.png" id = "" ></td><td><img src = "img/orni/orni32.png" id = "" ></td><td><img src = "img/orni/orni33.png" id = "" ></td><td><img src = "img/orni/orni34.png" id = "" ></td></tr><tr><td><img src = "img/orni/orni41.png" id = "" ></td><td><img src = "img/orni/orni42.png" id = "" ></td><td><img src = "img/orni/orni43.png" id = "" ></td><td><img src = "img/orni/orni44.png" id = "" ></td></tr> </table > ');
            puzzle = 3;
            mov = 0;
            com = 0;
            $("#cMov").html("Movimiento ");
            $("#gComodin").addClass("escondida");
            $("#cCom").addClass("escondida");
            $("body").append('<img src="img/formada3.png" class="escondida" id="ejemplo">');
            reinicio();
        }

        if (this.id == "botoncito4") {
            removeTable();
            removeCrono();
            removeImg();
            $("#gTabla").removeClass("escondida");
            $("body").append('<table id="tabla" border=10px> <tr><td><img src = "img/coliseo/col11.png" id = "" ></td><td><img src = "img/coliseo/col12.png" id = "" ></td><td><img src = "img/coliseo/col13.png" id = "" ></td><td><img src = "img/coliseo/col14.png" id = "" ></td></tr><tr><td><img src = "img/coliseo/col21.png" id = "" ></td><td><img src = "img/coliseo/col22.png" id = "" ></td><td><img src = "img/coliseo/col23.png" id = "" ></td><td><img src = "img/coliseo/col24.png" id = "" ></td></tr><tr><td><img src = "img/coliseo/col31.png" id = "" ></td><td><img src = "img/coliseo/col32.png" id = "" ></td><td><img src = "img/coliseo/col33.png" id = "" ></td><td><img src = "img/coliseo/col34.png" id = "" ></td></tr><tr><td><img src = "img/coliseo/col41.png" id = "" ></td><td><img src = "img/coliseo/col42.png" id = "" ></td><td><img src = "img/coliseo/col43.png" id = "" ></td><td><img src = "img/coliseo/col44.png" id = "" ></td></tr> </table > ');
            puzzle = 4;
            mov = 0;
            com = 0;
            $("#cMov").html("Movimiento ");
            $("#gComodin").addClass("escondida");
            $("#cCom").addClass("escondida");
            $("body").append('<img src="img/formada4.png" class="escondida" id="ejemplo">');
            reinicio();
        }

        if (this.id == "gComodin") {
            $("#cCom").removeClass("escondida").html("Comodín: 1");
            com = 1;
            $("#gComodin").addClass("escondida");

        }

        if (this.id == "gImg") {

            botim.addEventListener("click", muestrala, false);
        }
    }

    function removeTable() {
        var tbl = document.getElementById("tabla");
        if (tbl) tbl.parentNode.removeChild(tbl);
    }

    function removeImg() {
        var ejemplo = document.getElementById("ejemplo");
        if (ejemplo) ejemplo.parentNode.removeChild(ejemplo);
    }

    function removeCrono() {
        var h = document.getElementById("Horas");
        if (h) h.parentNode.removeChild(h);

        var m = document.getElementById("Minutos");
        if (m) m.parentNode.removeChild(m);

        var s = document.getElementById("Segundos");
        if (s) s.parentNode.removeChild(s);

        var c = document.getElementById("Centesimas");
        if (c) c.parentNode.removeChild(c);


    }

    function addCrono() {
        $("#contenedor").append('<div class="reloj" id="Horas">00</div><div class="reloj" id="Minutos">:00</div><div class="reloj" id="Segundos">:00</div><div class="reloj" id="Centesimas">:00</div>');
        inicio();
    }

    function usaComodin() {
        if (com == 1) {
            var padre = $("#" + this.id).parent().attr("id");
            var padre2 = $(".vacio").attr("id");
            //alert("Está en  " + padre);
            document.getElementById(padre).src = "img/sola.png";
            var hijo = this.id;
            //alert("deberia ir a " + "col" + hijo);

            if ($("#" + this.id).attr("class") == "vacio") {

            } else {

                if (puzzle == 1) {
                    $("#" + hijo).attr("src", "img/sola.png");
                    $("#" + hijo).attr("id", padre2);

                    $(".vacio").attr("src", "img/pikachu/pika" + hijo + ".png");
                    $(".vacio").attr("id", hijo);
                    $(".vacio").removeClass("vacio");
                    $("#" + padre2).addClass("vacio");
                    mov++;
                    $("#cMov").html("Movimiento " + mov);
                }

                if (puzzle == 2) {
                    $("#" + hijo).attr("src", "img/sola.png");
                    $("#" + hijo).attr("id", padre2);

                    $(".vacio").attr("src", "img/toro/toro" + hijo + ".png");
                    $(".vacio").attr("id", hijo);
                    $(".vacio").removeClass("vacio");
                    $("#" + padre2).addClass("vacio");
                    mov++;
                    $("#cMov").html("Movimiento " + mov);
                }

                if (puzzle == 3) {
                    $("#" + hijo).attr("src", "img/sola.png");
                    $("#" + hijo).attr("id", padre2);

                    $(".vacio").attr("src", "img/orni/orni" + hijo + ".png");
                    $(".vacio").attr("id", hijo);
                    $(".vacio").removeClass("vacio");
                    $("#" + padre2).addClass("vacio");
                    mov++;
                    $("#cMov").html("Movimiento " + mov);
                }

                if (puzzle == 4) {
                    $("#" + hijo).attr("src", "img/sola.png");
                    $("#" + hijo).attr("id", padre2);

                    $(".vacio").attr("src", "img/coliseo/col" + hijo + ".png");
                    $(".vacio").attr("id", hijo);
                    $(".vacio").removeClass("vacio");
                    $("#" + padre2).addClass("vacio");
                    mov++;
                    $("#cMov").html("Movimiento " + mov);
                }
                com = 0;
                $("#cCom").removeClass("escondida").html("Comodín: 0");

            }




        }
    }

    function muestrala() {
        $("#ejemplo").toggleClass("escondida");
    }













});