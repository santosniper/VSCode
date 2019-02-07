$(document).ready(function () {

    var mov = 0;//variable movimientos que usaremos para ir contando los movimientos que queremos
    var com = 0;//variabel comodin que usaremos para indicar los comodines de los que dispondra el usuario
    var elegido = "";//variable elegido que usamos mas adelante

    //array 'completado' para cuando consigamos realizar el puzzle
    var completado = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

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

    var tabla = document.getElementById("gTabla");//creamos la variable tabla que es el botón que la creara
    var xx = [11, 12, 13, 14, 21, 22, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44];//array que usaremos como id de las imagenes11
    var puzzle = 0;//variable puzzle que usaremos para elegir la imagen que queremos hacer


    //añadimos que se active la funtion 'generaTabla' al boton 'tabla' con un click
    tabla.addEventListener("click", generaTabla, false);

    function generaTabla() {//funcion 'generaTabla'
        removeTable();//si hay alguna tabla creada con anterioridad la eliminamos
        $("body").append('<table id="tabla"></table>');//añadimos al body la etiqueta tabla
        $("#gTabla").addClass("escondida");//ocultamos el boton que nos genera la tabla
        $("#gComodin").toggleClass("escondida");//mostramos el boton 'comodin'
        $("#gImg").removeClass("escondida");//mostramos el boton de 'imagen de ayuda'
        $(".hidden").removeClass("hidden");//mostramos los movimientos

        xx = xx.sort(function () { return Math.random() - 0.5 });//randomizamos el  orden del array de las ids de las imagenes
        var yy = 0;//variable para recorrer el array-->(XX[YY])



        for (var s = 1; s < 5; s++) {//primer bucle para creacion de la tabla
            $("#tabla").append('<tr id="fila' + s + '"></tr>');//creamos las filas de la tabla
            for (var ss = 1; ss < 5; ss++) {//segundo bucle de creacion de la tabla
                if (puzzle == 1) {//si elegimos el puzzle 1

                    if (yy == 15) {//si nos encontramos en la fila 4 columna 4

                        //creamos unna columna con una imagen vacia
                        $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/sola.png" id="' + xx[yy] + '" class="vacio"></tr>');
                        alert(xx[yy]);



                    } else {//si nos encontramos en cualquier otra posicion de la tabla

                        //creamos una columna con la imagen correspondiente randomizada
                        $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/pikachu/pika' + xx[yy] + '.png" id="' + xx[yy] + '"></tr>');

                    }
                }

                if (puzzle == 2) {//si elegimos el puzzle 2
                    if (yy == 15) {//si nos encontramos en la fila 4 columna 4

                        //creamos unna columna con una imagen vacia
                        $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/sola.png" id="' + xx[yy] + '" class="vacio"></tr>');
                        alert(xx[yy]);



                    } else {//si nos encontramos en cualquier otra posicion de la tabla

                        //creamos una columna con la imagen correspondiente randomizada
                        $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/toro/toro' + xx[yy] + '.png" id="' + xx[yy] + '"></tr>');

                    }
                }

                if (puzzle == 3) {//si elegimos el puzzle 3
                    if (yy == 15) {//si nos encontramos en la fila 4 columna 4

                        //creamos unna columna con una imagen vacia
                        $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/sola.png" id="' + xx[yy] + '" class="vacio"></tr>');
                        alert(xx[yy]);



                    } else {//si nos encontramos en cualquier otra posicion de la tabla

                        //creamos una columna con la imagen correspondiente randomizada
                        $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/orni/orni' + xx[yy] + '.png" id="' + xx[yy] + '"></tr>');

                    }
                }

                if (puzzle == 4) {//si elegimos el puzzle 4
                    if (yy == 15) {//si nos encontramos en la fila 4 columna 4

                        //creamos unna columna con una imagen vacia
                        $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/sola.png" id="' + xx[yy] + '" class="vacio"></tr>');
                        alert(xx[yy]);



                    } else {//si nos encontramos en cualquier otra posicion de la tabla

                        //creamos una columna con la imagen correspondiente randomizada
                        $("#fila" + s).append('<td id="col' + s + ss + '"><img src="img/coliseo/col' + xx[yy] + '.png" id="' + xx[yy] + '"></tr>');

                    }
                }



                yy++;//sumamos uno a yy
            }
            //creada la tabla
            var fotos = document.querySelectorAll("img");//creamos variable para todas las fotos de la tabla
            for (var f = 0; f < fotos.length; f++) {//for de asignacion para las fotos
                fotos[f].addEventListener("click", muevete, false);//asignamos con un click la funcion muevete a las imagenes
                fotos[f].addEventListener("dblclick", usaComodin, false);//asignamos con dos clicks la funcion usaComodin a las imagenes
            }


        }
        //invocamos al la funcion addCrono
        addCrono();

    }

    function muevete() {//creacion de la funcion muevete
        if (revisame() == true) {//si la funcion revisame es true no hacemos nada

        } else {//pero si es false
            var padre = $("#" + this.id).parent().attr("id");//sacamos el id del padre
            var padre2 = $(".vacio").attr("id"); //sacamos la id de la imagen vacia
            //alert("Está en  " + padre);
            document.getElementById(padre).src = "img/sola.png";//cambiamos el src del padre
            var hijo = this.id;//creamos variable hijo
            //alert("deberia ir a " + "col" + hijo);

            if (compruebame(padre) == true) {//si la funcion 'compruebame(padre)' es true
                if ($("#" + this.id).attr("class") == "vacio") {//si la clase es 'vacio' no hacemos nada

                } else {//si no es vacio

                    if (puzzle == 1) {//si estamos en el puzzle 1
                        $("#" + hijo).attr("src", "img/sola.png");//cambiamos src de la imagen pulsada a sola
                        $("#" + hijo).attr("id", padre2);//cambiamos el id de la imagen pulsada a padre2
                        $(".vacio").attr("src", "img/pikachu/pika" + hijo + ".png");//a la imagen sola se pone el src de la imagen pulsada
                        $(".vacio").attr("id", hijo);//a la anterior clase vacio se le cambia su id a la del la imagen pulsada
                        $(".vacio").removeClass("vacio");//se elimina la clase vacio a la segunda imagen
                        $("#" + padre2).addClass("vacio");//a la imagen pulsada que ahora es la imagen sola se le añade la clase sola
                        mov++;//sumamos un movimiento
                        $("#cMov").html("Movimientos realizados: " + mov);//añadimos el movimito realizado para que sea visual
                        revisame();//invocamos despues de cada movimiento a la funcion revisame
                    }

                    if (puzzle == 2) {//si estamos en el puzzle 2
                        $("#" + hijo).attr("src", "img/sola.png");//cambiamos src de la imagen pulsada a sola
                        $("#" + hijo).attr("id", padre2);//cambiamos el id de la imagen pulsada a padre2
                        $(".vacio").attr("src", "img/toro/toro" + hijo + ".png");//a la imagen sola se pone el src de la imagen pulsada
                        $(".vacio").attr("id", hijo);//a la anterior clase vacio se le cambia su id a la del la imagen pulsada
                        $(".vacio").removeClass("vacio");//se elimina la clase vacio a la segunda imagen
                        $("#" + padre2).addClass("vacio");//a la imagen pulsada que ahora es la imagen sola se le añade la clase sola
                        mov++;//sumamos un movimiento
                        $("#cMov").html("Movimientos realizados: " + mov);//añadimos el movimito realizado para que sea visual
                        revisame();//invocamos despues de cada movimiento a la funcion revisame
                    }

                    if (puzzle == 3) {//si estamos en el puzzle 3
                        $("#" + hijo).attr("src", "img/sola.png");//cambiamos src de la imagen pulsada a sola
                        $("#" + hijo).attr("id", padre2);//cambiamos el id de la imagen pulsada a padre2
                        $(".vacio").attr("src", "img/orni/orni" + hijo + ".png");//a la imagen sola se pone el src de la imagen pulsada
                        $(".vacio").attr("id", hijo);//a la anterior clase vacio se le cambia su id a la del la imagen pulsada
                        $(".vacio").removeClass("vacio");//se elimina la clase vacio a la segunda imagen
                        $("#" + padre2).addClass("vacio");//a la imagen pulsada que ahora es la imagen sola se le añade la clase sola
                        mov++;//sumamos un movimiento
                        $("#cMov").html("Movimientos realizados: " + mov);//añadimos el movimito realizado para que sea visual
                        revisame();//invocamos despues de cada movimiento a la funcion revisame
                    }

                    if (puzzle == 4) {//si estamos en el puzzle 4
                        $("#" + hijo).attr("src", "img/sola.png");//cambiamos src de la imagen pulsada a sola
                        $("#" + hijo).attr("id", padre2);//cambiamos el id de la imagen pulsada a padre2
                        $(".vacio").attr("src", "img/coliseo/col" + hijo + ".png");//a la imagen sola se pone el src de la imagen pulsada
                        $(".vacio").attr("id", hijo);//a la anterior clase vacio se le cambia su id a la del la imagen pulsada
                        $(".vacio").removeClass("vacio");//se elimina la clase vacio a la segunda imagen
                        $("#" + padre2).addClass("vacio");//a la imagen pulsada que ahora es la imagen sola se le añade la clase sola
                        mov++;//sumamos un movimiento
                        $("#cMov").html("Movimientos realizados: " + mov);//añadimos el movimito realizado para que sea visual
                        revisame();//invocamos despues de cada movimiento a la funcion revisame
                    }



                }
            } else {//si la funcion 'compruebame(padre)' es false
                $("#" + this.id).fadeOut(150).slideDown(150);/*realizamos una breve animacion indicando al usuario
                que es imposible el movimiento que quiere realizar*/
            }
        }
    }//fin de la funcion muevete()


    function compruebame(padre) {//funcion compruebame(padre) usada en la funcion muevete()
        var padre3 = $(".vacio").parent().attr("id");//creacion de la variable padre3 con la id de la clase vacio
        var array = padre3.split('');//creacion de array con la separacion de los caracteres de la variable padre3-->'colxx'
        var x = array[3];//variable x con la tercera posicion del array
        var y = array[4];//variable y con la cuarta posicion del array
        var array2 = padre.split('');//creamos array2 con la separacion de la variable padre que le pasamos como parámetro
        var c = array2[3];//variable x con la tercera posicion del array2
        var v = array2[4];//variable y con la cuarta posicion del array2

        /*
        con el siguiente if comprobamos las posiciones de la imagen pulsada y de la imafgen sola
        y en el caso de que sean adyacentes retornara true
         */
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


    }//fin de la funcion compruebame

    var botoncitos = document.querySelectorAll("button");//creamos variable con todos los botones existentes en nuestra pagina
    for (var bt = 0; bt < botoncitos.length; bt++) {//for para recorrer los botones
        botoncitos[bt].addEventListener("click", eligeme, false); //asignarles la funcion 'eligeme' con un click
    }

    function eligeme() {//funcion eligeme

        if (this.id == "botoncito1") {//si la id del boton pulsado es botoncito1
            elegido = "pika";


            removeTable();//invocamos a la funcion removeTable
            removeCrono();//invocamos a la funcion removeCrono
            removeImg();//invocamos a la funcion removeImg
            $("#gImg").addClass("escondida");//al boton que nos genera la imagen de ayuda le añadimos la clase escondida
            $("#gTabla").removeClass("escondida");//al boton que nos genera la tabla randomizada le quitamos la clase escondida
            //generamos en el body una tabla con la imagen correspondiente sin randomizar
            $("body").append('<table id="tabla" border="0" > <tr><td><img src = "img/pikachu/pika11.png" id = "" ></td><td><img src = "img/pikachu/pika12.png" id = "" ></td><td><img src = "img/pikachu/pika13.png" id = "" ></td><td><img src = "img/pikachu/pika14.png" id = "" ></td></tr><tr><td><img src = "img/pikachu/pika21.png" id = "" ></td><td><img src = "img/pikachu/pika22.png" id = "" ></td><td><img src = "img/pikachu/pika23.png" id = "" ></td><td><img src = "img/pikachu/pika24.png" id = "" ></td></tr><tr><td><img src = "img/pikachu/pika31.png" id = "" ></td><td><img src = "img/pikachu/pika32.png" id = "" ></td><td><img src = "img/pikachu/pika33.png" id = "" ></td><td><img src = "img/pikachu/pika34.png" id = "" ></td></tr><tr><td><img src = "img/pikachu/pika41.png" id = "" ></td><td><img src = "img/pikachu/pika42.png" id = "" ></td><td><img src = "img/pikachu/pika43.png" id = "" ></td><td><img src = "img/pikachu/pika44.png" id = "" ></td></tr> </table > ');
            puzzle = 1;//igualamos la variable puzzle a 1
            mov = 0;//igualamos la variable movimientos a 0
            com = 0;//igualamos la variable comodines a 0
            $("#cMov").html("Movimientos realizados: " + mov);//reiniciamos el contador de movimientos
            $("#cMov").addClass("hidden");//escondemos el contador de movimientos
            $("#gComodin").addClass("escondida");//escondemos el boton comodin
            $("#cCom").addClass("escondida");//escondemos el contador de comodines
            $("body").append('<img src="img/formada1.png" class="escondida" id="ejemplo">');//creamos la imagen de ayuda
            reinicio();//invocamos a la funcion reinicio
        }

        if (this.id == "botoncito2") {//si la id del boton pulsado es botoncito2
            elegido = "toro";
            removeTable();//invocamos a la funcion removeTable
            removeCrono();//invocamos a la funcion removeCrono
            removeImg();//invocamos a la funcion removeImg
            $("#gImg").addClass("escondida");//al boton que nos genera la imagen de ayuda le añadimos la clase escondida
            $("#gTabla").removeClass("escondida");//al boton que nos genera la tabla randomizada le quitamos la clase escondida
            //generamos en el body una tabla con la imagen correspondiente sin randomizar
            $("body").append('<table id="tabla" border=10px> <tr><td><img src = "img/toro/toro11.png" id = "" ></td><td><img src = "img/toro/toro12.png" id = "" ></td><td><img src = "img/toro/toro13.png" id = "" ></td><td><img src = "img/toro/toro14.png" id = "" ></td></tr><tr><td><img src = "img/toro/toro21.png" id = "" ></td><td><img src = "img/toro/toro22.png" id = "" ></td><td><img src = "img/toro/toro23.png" id = "" ></td><td><img src = "img/toro/toro24.png" id = "" ></td></tr><tr><td><img src = "img/toro/toro31.png" id = "" ></td><td><img src = "img/toro/toro32.png" id = "" ></td><td><img src = "img/toro/toro33.png" id = "" ></td><td><img src = "img/toro/toro34.png" id = "" ></td></tr><tr><td><img src = "img/toro/toro41.png" id = "" ></td><td><img src = "img/toro/toro42.png" id = "" ></td><td><img src = "img/toro/toro43.png" id = "" ></td><td><img src = "img/toro/toro44.png" id = "" ></td></tr> </table > ');
            puzzle = 2;//igualamos la variable puzzle a 2
            mov = 0;//igualamos la variable movimientos a 0
            com = 0;//igualamos la variable comodines a 0
            $("#cMov").html("Movimientos realizados: " + mov);//reiniciamos el contador de movimientos
            $("#cMov").addClass("hidden");//escondemos el contador de movimientos
            $("#gComodin").addClass("escondida");//escondemos el boton comodin
            $("#cCom").addClass("escondida");//escondemos el contador de comodines
            $("body").append('<img src="img/formada2.png" class="escondida" id="ejemplo">');//creamos la imagen de ayuda
            reinicio();//invocamos a la funcion reinicio

        }

        if (this.id == "botoncito3") {//si la id del boton pulsado es botoncito3
            elegido = "orni";
            removeTable();//invocamos a la funcion removeTable
            removeCrono();//invocamos a la funcion removeCrono
            removeImg();//invocamos a la funcion removeImg
            $("#gImg").addClass("escondida");//al boton que nos genera la imagen de ayuda le añadimos la clase escondida
            $("#gTabla").removeClass("escondida");//al boton que nos genera la tabla randomizada le quitamos la clase escondida
            //generamos en el body una tabla con la imagen correspondiente sin randomizar
            $("body").append('<table id="tabla" border=10px> <tr><td><img src = "img/orni/orni11.png" id = "" ></td><td><img src = "img/orni/orni12.png" id = "" ></td><td><img src = "img/orni/orni13.png" id = "" ></td><td><img src = "img/orni/orni14.png" id = "" ></td></tr><tr><td><img src = "img/orni/orni21.png" id = "" ></td><td><img src = "img/orni/orni22.png" id = "" ></td><td><img src = "img/orni/orni23.png" id = "" ></td><td><img src = "img/orni/orni24.png" id = "" ></td></tr><tr><td><img src = "img/orni/orni31.png" id = "" ></td><td><img src = "img/orni/orni32.png" id = "" ></td><td><img src = "img/orni/orni33.png" id = "" ></td><td><img src = "img/orni/orni34.png" id = "" ></td></tr><tr><td><img src = "img/orni/orni41.png" id = "" ></td><td><img src = "img/orni/orni42.png" id = "" ></td><td><img src = "img/orni/orni43.png" id = "" ></td><td><img src = "img/orni/orni44.png" id = "" ></td></tr> </table > ');
            puzzle = 3;//igualamos la variable puzzle a 3
            mov = 0;//igualamos la variable movimientos a 0
            com = 0;//igualamos la variable comodines a 0
            $("#cMov").html("Movimientos realizados: " + mov);//reiniciamos el contador de movimientos
            $("#cMov").addClass("hidden");//escondemos el contador de movimientos
            $("#gComodin").addClass("escondida");//escondemos el boton comodin
            $("#cCom").addClass("escondida");//escondemos el contador de comodines
            $("body").append('<img src="img/formada3.png" class="escondida" id="ejemplo">');//creamos la imagen de ayuda
            reinicio();//invocamos a la funcion reinicio
        }

        if (this.id == "botoncito4") {//si la id del boton pulsado es botoncito4
            elegido = "col";
            removeTable();//invocamos a la funcion removeTable
            removeCrono();//invocamos a la funcion removeCrono
            removeImg();//invocamos a la funcion removeImg
            $("#gImg").addClass("escondida");//al boton que nos genera la imagen de ayuda le añadimos la clase escondida
            $("#gTabla").removeClass("escondida");//al boton que nos genera la tabla randomizada le quitamos la clase escondida
            //generamos en el body una tabla con la imagen correspondiente sin randomizar
            $("body").append('<table id="tabla" border=10px> <tr><td><img src = "img/coliseo/col11.png" id = "" ></td><td><img src = "img/coliseo/col12.png" id = "" ></td><td><img src = "img/coliseo/col13.png" id = "" ></td><td><img src = "img/coliseo/col14.png" id = "" ></td></tr><tr><td><img src = "img/coliseo/col21.png" id = "" ></td><td><img src = "img/coliseo/col22.png" id = "" ></td><td><img src = "img/coliseo/col23.png" id = "" ></td><td><img src = "img/coliseo/col24.png" id = "" ></td></tr><tr><td><img src = "img/coliseo/col31.png" id = "" ></td><td><img src = "img/coliseo/col32.png" id = "" ></td><td><img src = "img/coliseo/col33.png" id = "" ></td><td><img src = "img/coliseo/col34.png" id = "" ></td></tr><tr><td><img src = "img/coliseo/col41.png" id = "" ></td><td><img src = "img/coliseo/col42.png" id = "" ></td><td><img src = "img/coliseo/col43.png" id = "" ></td><td><img src = "img/coliseo/col44.png" id = "" ></td></tr> </table > ');
            puzzle = 4;//igualamos la variable puzzle a 4
            mov = 0;//igualamos la variable movimientos a 0
            com = 0;//igualamos la variable comodines a 0
            $("#cMov").html("Movimientos realizados: " + mov);//reiniciamos el contador de movimientos
            $("#cMov").addClass("hidden");//escondemos el contador de movimientos
            $("#gComodin").addClass("escondida");//escondemos el boton comodin
            $("#cCom").addClass("escondida");//escondemos el contador de comodines
            $("body").append('<img src="img/formada4.png" class="escondida" id="ejemplo">');//creamos la imagen de ayuda
            reinicio();//invocamos a la funcion reinicio
        }

        if (this.id == "gComodin") {//si la id del boton pulsado es gComodin
            com = 20;//igualamos el comodin a los que queramos disponer
            $("#cCom").removeClass("escondida").html("Comodín: " + com);//visualizamos el contador de comodines
            $("#gComodin").addClass("escondida");//ocultamos el boton del comodin

        }

        if (this.id == "gImg") {//si la id del boton pulsado es gImg
            $("#ejemplo").toggleClass("escondida");//intercambiamos la clase escondida a la imagen de ayuda

        }
    }//fin de la funcion eligeme

    function removeTable() {//funcion removeTable
        var tbl = document.getElementById("tabla");//creamos variable tbl con la id de la tabla
        if (tbl) tbl.parentNode.removeChild(tbl);//si existe la variable tbl la eliminamos
    }//fin funcion removeTable

    function removeImg() {//funcion removeImg
        var ejemplo = document.getElementById("ejemplo");//creamos la variable ejemplo con el id ejemplo
        if (ejemplo) ejemplo.parentNode.removeChild(ejemplo);//si existe la variable ejemplo la eliminamos
    }//fin funcion removeImg

    function removeCrono() {//funcion removeCrono
        var h = document.getElementById("Horas");//creamos la variable h con la id Horas
        if (h) h.parentNode.removeChild(h);//si existe la variable h la aliminamos

        var m = document.getElementById("Minutos");//creamos la variable m con el id de minutos
        if (m) m.parentNode.removeChild(m);//si existe la variable m la eliminamos

        var s = document.getElementById("Segundos");//creamos la variable s con el id de segundos
        if (s) s.parentNode.removeChild(s);//si existe la variable s la eliminamos

        var c = document.getElementById("Centesimas");//creamos la variable c con la id de centesimas
        if (c) c.parentNode.removeChild(c);//si existe al variable c la aliminamos


    }

    function addCrono() {//funcion addCrono

        //aqui insertamos el crono en el div con id contenedor
        $("#contenedor").append('<div class="reloj" id="Horas">00</div><div class="reloj" id="Minutos">:00</div><div class="reloj" id="Segundos">:00</div><div class="reloj" id="Centesimas">:00</div>');
        inicio();//invocamos a la funcion inicio
    }//fin de funcion addCrono

    function usaComodin() {//funcion usaComodin
        if (revisame() == true) {//si la funcion revisame() es true no hacemos nada
        } else {//si es false
            var padre = $("#" + this.id).parent().attr("id");//creamos la variable padre con la id de la imagen pinchada
            var padre2 = $(".vacio").attr("id");//creamos la variable padre2 con la id de la imagen que esta vacia
            if (com == 0 || com < 0) {//si el comodin esta a 0, no hacemos nada
            } else {//si el comodin no esta a 0

                var hijo = this.id;//creamos una variable hijo con al id de la imagen pulsada

                if ($("#" + this.id).attr("class") == "vacio") {//si la imagen pulsada es la clase vacio no hacemos nada

                } else {//si no tiene la clase vacio

                    if (puzzle == 1) {//si el puzzle utilizado es el 1
                        $("#" + hijo).attr("src", "img/sola.png");//obtenemos el id de la imagen vacia
                        $("#" + hijo).attr("id", padre2);//cambiamos el id a la variable que contiene padre2 que es el id del vacio
                        $(".vacio").attr("src", "img/pikachu/pika" + hijo + ".png");//añadimos a la imagen con clase vacio, el src de la imagen pulsada
                        $(".vacio").attr("id", hijo);//le añadimos el id de la imagen pulsada
                        $(".vacio").removeClass("vacio");//le quitamos la clase vacio
                        $("#" + padre2).addClass("vacio");//le añadimos clase vacio a la imagen pulsada
                        mov++;//incrementamos el movimiento en 1
                        $("#cMov").html("Movimientos realizados: " + mov);//sumamos visualmente el movimiento
                        revisame();//invocamos la funcion revisame
                    }

                    if (puzzle == 2) {//si el puzzle utilizado es el 2
                        $("#" + hijo).attr("src", "img/sola.png");//obtenemos el id de la imagen vacia
                        $("#" + hijo).attr("id", padre2);//cambiamos el id a la variable que contiene padre2 que es el id del vacio
                        $(".vacio").attr("src", "img/toro/toro" + hijo + ".png");//añadimos a la imagen con clase vacio, el src de la imagen pulsada
                        $(".vacio").attr("id", hijo);//le añadimos el id de la imagen pulsada
                        $(".vacio").removeClass("vacio");//le quitamos la clase vacio
                        $("#" + padre2).addClass("vacio");//le añadimos clase vacio a la imagen pulsada
                        mov++;//incrementamos el movimiento en 1
                        $("#cMov").html("Movimientos realizados: " + mov);//sumamos visualmente el movimiento
                        revisame();//invocamos la funcion revisame
                    }

                    if (puzzle == 3) {//si el puzzle utilizado es el 3
                        $("#" + hijo).attr("src", "img/sola.png");//obtenemos el id de la imagen vacia
                        $("#" + hijo).attr("id", padre2);//cambiamos el id a la variable que contiene padre2 que es el id del vacio
                        $(".vacio").attr("src", "img/orni/orni" + hijo + ".png");//añadimos a la imagen con clase vacio, el src de la imagen pulsada
                        $(".vacio").attr("id", hijo);//le añadimos el id de la imagen pulsada
                        $(".vacio").removeClass("vacio");//le quitamos la clase vacio
                        $("#" + padre2).addClass("vacio");//le añadimos clase vacio a la imagen pulsada
                        mov++;//incrementamos el movimiento en 1
                        $("#cMov").html("Movimientos realizados: " + mov);//sumamos visualmente el movimiento
                        revisame();//invocamos la funcion revisame
                    }

                    if (puzzle == 4) {//si el puzzle utilizado es el 4
                        $("#" + hijo).attr("src", "img/sola.png");//obtenemos el id de la imagen vacia
                        $("#" + hijo).attr("id", padre2);//cambiamos el id a la variable que contiene padre2 que es el id del vacio
                        $(".vacio").attr("src", "img/coliseo/col" + hijo + ".png");//añadimos a la imagen con clase vacio, el src de la imagen pulsada
                        $(".vacio").attr("id", hijo);//le añadimos el id de la imagen pulsada
                        $(".vacio").removeClass("vacio");//le quitamos la clase vacio
                        $("#" + padre2).addClass("vacio");//le añadimos clase vacio a la imagen pulsada
                        mov++;//incrementamos el movimiento en 1
                        $("#cMov").html("Movimientos realizados: " + mov);//sumamos visualmente el movimiento
                        revisame();//invocamos la funcion revisame
                    }
                    com--;//disminuimos la variable comodin en 1
                    $("#cCom").removeClass("escondida").html("Comodín: " + com);//restamos visualmente el comodin

                }
            }
        }

    }//fin de funcion usaComodin

    function revisame() {//funcion revisame
        var cRevision = 0;//creamos la variable cRevision que es el contador
        for (var pz = 1; pz < 5; pz++) {//primer bucle for para recorrido de tabla
            for (var zp = 1; zp < 5; zp++) {//segundo bucle for para recorrido de tabla
                var padre = $("#col" + pz + zp).attr("id");//creamos la variable padre con el id de la celda
                var hijo = $("#col" + pz + zp).children().attr("id");//creamos la variable hijo con el id de la imagen
                //alert(padre);
                //alert("col" + hijo)
                if (padre == ("col" + hijo)) {//si el id de los padre es igual al de los hijo
                    completado[cRevision] = true;//el array completado con la posicion corespondiente se convierte en true
                } else {//sino
                    completado[cRevision] = false;//continua siendo false

                }

                cRevision++;//sumamos 1 al contador

            }
        }
        //si todas las posicones del array son true
        if (completado[0] == true && completado[1] == true && completado[2] == true && completado[3]
            == true && completado[4] == true && completado[5] == true && completado[6]
            == true && completado[7] == true && completado[8] == true && completado[9]
            == true && completado[10] == true && completado[11] == true && completado[12]
            == true && completado[13] == true && completado[14] == true && completado[15] == true) {

            //sale la alerta de victoria
            alert("Enhorabuena!! Has completado el puzzle campeón\nLo has hecho en " + mov + " movimientos.\nTu tiempo ha sido: " + horas + ":" + minutos + ":" + segundos);

            parar();//invocamos a la funcion parar
        }//sino
        return false;//nos retorna false


    }//fin de funcion revisame
});