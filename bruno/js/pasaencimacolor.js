$(document).ready(function () {

    var imgs = document.querySelectorAll("img");

    var boton1 = document.getElementById("bot1");
    var boton2 = document.getElementById("bot2");
    var boton3 = document.getElementById("bot3");
    var boton4 = document.getElementById("bot4");
    var boton5 = document.getElementById("bot5");



    for (var i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("mouseover", cambiame, false);
    }

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("mouseleave", cambiame2, false);
    }

    boton1.addEventListener("click", del1, false);
    boton2.addEventListener("click", del2, false);
    boton3.addEventListener("click", del3, false);
    boton4.addEventListener("click", del4, false);
    boton5.addEventListener("click", res, false);



});

function del1() {
    $(".pika").addClass("adios");
    $(".charman").addClass("adios");
    $(".otros").addClass("adios");
    $(".stitch").removeClass("adios");


    $("#pic01").attr("src", "img/stitich00.jpg");
    $("#pic02").attr("src", "img/stitich01.jpg");
    $("#pic03").attr("src", "img/stitich02.jpg");
    $("#pic04").attr("src", "img/stitich03.jpg");
    $("#pic05").attr("src", "img/leroy00.png");
    $("#pic06").attr("src", "img/leroy01.png");
    $("#pic07").attr("src", "img/leroy02.png");
    $("#pic08").attr("src", "img/leroy03.png");
    $("#pic09").attr("src", "img/angel00.jpg");
    $("#pic10").attr("src", "img/angel01.jpg");



}

function del2() {
    $(".stitch").addClass("adios");
    $(".charman").addClass("adios");
    $(".otros").addClass("adios");
    $(".pika").removeClass("adios");


    $("#pic11").attr("src", "img/poke00.png");
    $("#pic12").attr("src", "img/poke01.png");
}

function del4() {
    $(".stitch").addClass("adios");
    $(".otros").addClass("adios");
    $(".pika").addClass("adios");
    $(".charman").removeClass("adios");


    $("#pic17").attr("src", "img/poke06.png");
    $("#pic18").attr("src", "img/poke07.png");

}

function del3() {
    $(".stitch").addClass("adios");
    $(".pika").addClass("adios");
    $(".charman").addClass("adios");
    $(".otros").removeClass("adios");

    $("#pic13").attr("src", "img/poke02.png");
    $("#pic14").attr("src", "img/poke03.png");
    $("#pic15").attr("src", "img/poke04.png");
    $("#pic16").attr("src", "img/poke05.png");
    $("#pic19").attr("src", "img/poke08.png");
    $("#pic20").attr("src", "img/poke09.png");




}

function res() {
    $(".stitch").removeClass("adios");
    $(".charman").removeClass("adios");
    $(".otros").removeClass("adios");
    $(".pika").removeClass("adios");

    $("#pic01").attr("src", "img/stitich000.jpg");
    $("#pic02").attr("src", "img/stitich001.jpg");
    $("#pic03").attr("src", "img/stitich002.jpg");
    $("#pic04").attr("src", "img/stitich003.jpg");
    $("#pic05").attr("src", "img/leroy000.png");
    $("#pic06").attr("src", "img/leroy001.png");
    $("#pic07").attr("src", "img/leroy002.png");
    $("#pic08").attr("src", "img/leroy003.png");
    $("#pic09").attr("src", "img/angel000.jpg");
    $("#pic10").attr("src", "img/angel001.jpg");

    $("#pic11").attr("src", "img/poke000.png");
    $("#pic12").attr("src", "img/poke001.png");

    $("#pic17").attr("src", "img/poke006.png");
    $("#pic18").attr("src", "img/poke007.png");

    $("#pic13").attr("src", "img/poke002.png");
    $("#pic14").attr("src", "img/poke003.png");
    $("#pic15").attr("src", "img/poke004.png");
    $("#pic16").attr("src", "img/poke005.png");
    $("#pic19").attr("src", "img/poke008.png");
    $("#pic20").attr("src", "img/poke009.png");
}

function cambiame(param) {
    if (param.target.id == "pic01") {
        $("#pic01").attr("src", "img/stitich00.jpg");

    } else if (param.target.id == "pic02") {
        $("#pic02").attr("src", "img/stitich01.jpg");

    } else if (param.target.id == "pic03") {
        $("#pic03").attr("src", "img/stitich02.jpg");

    } else if (param.target.id == "pic04") {
        $("#pic04").attr("src", "img/stitich03.jpg");

    } else if (param.target.id == "pic05") {
        $("#pic05").attr("src", "img/leroy00.png");

    } else if (param.target.id == "pic06") {
        $("#pic06").attr("src", "img/leroy01.png");

    } else if (param.target.id == "pic07") {
        $("#pic07").attr("src", "img/leroy02.png");

    } else if (param.target.id == "pic08") {
        $("#pic08").attr("src", "img/leroy03.png");

    } else if (param.target.id == "pic09") {
        $("#pic09").attr("src", "img/angel00.jpg");

    } else if (param.target.id == "pic10") {
        $("#pic10").attr("src", "img/angel01.jpg");

    } else if (param.target.id == "pic11") {
        $("#pic11").attr("src", "img/poke00.png");

    } else if (param.target.id == "pic12") {
        $("#pic12").attr("src", "img/poke01.png");

    } else if (param.target.id == "pic13") {
        $("#pic13").attr("src", "img/poke02.png");

    } else if (param.target.id == "pic14") {
        $("#pic14").attr("src", "img/poke03.png");

    } else if (param.target.id == "pic15") {
        $("#pic15").attr("src", "img/poke04.png");

    } else if (param.target.id == "pic16") {
        $("#pic16").attr("src", "img/poke05.png");

    } else if (param.target.id == "pic17") {
        $("#pic17").attr("src", "img/poke06.png");

    } else if (param.target.id == "pic18") {
        $("#pic18").attr("src", "img/poke07.png");

    } else if (param.target.id == "pic19") {
        $("#pic19").attr("src", "img/poke08.png");

    } else if (param.target.id == "pic20") {
        $("#pic20").attr("src", "img/poke09.png");

    }
}

function cambiame2(param) {
    if (param.target.id == "pic01") {
        $("#pic01").attr("src", "img/stitich000.jpg");

    } else if (param.target.id == "pic02") {
        $("#pic02").attr("src", "img/stitich001.jpg");

    } else if (param.target.id == "pic03") {
        $("#pic03").attr("src", "img/stitich002.jpg");

    } else if (param.target.id == "pic04") {
        $("#pic04").attr("src", "img/stitich003.jpg");

    } else if (param.target.id == "pic05") {
        $("#pic05").attr("src", "img/leroy000.png");

    } else if (param.target.id == "pic06") {
        $("#pic06").attr("src", "img/leroy001.png");

    } else if (param.target.id == "pic07") {
        $("#pic07").attr("src", "img/leroy002.png");

    } else if (param.target.id == "pic08") {
        $("#pic08").attr("src", "img/leroy003.png");

    } else if (param.target.id == "pic09") {
        $("#pic09").attr("src", "img/angel000.jpg");

    } else if (param.target.id == "pic10") {
        $("#pic10").attr("src", "img/angel001.jpg");

    } else if (param.target.id == "pic11") {
        $("#pic11").attr("src", "img/poke000.png");

    } else if (param.target.id == "pic12") {
        $("#pic12").attr("src", "img/poke001.png");

    } else if (param.target.id == "pic13") {
        $("#pic13").attr("src", "img/poke002.png");

    } else if (param.target.id == "pic14") {
        $("#pic14").attr("src", "img/poke003.png");

    } else if (param.target.id == "pic15") {
        $("#pic15").attr("src", "img/poke004.png");

    } else if (param.target.id == "pic16") {
        $("#pic16").attr("src", "img/poke005.png");

    } else if (param.target.id == "pic17") {
        $("#pic17").attr("src", "img/poke006.png");

    } else if (param.target.id == "pic18") {
        $("#pic18").attr("src", "img/poke007.png");

    } else if (param.target.id == "pic19") {
        $("#pic19").attr("src", "img/poke008.png");

    } else if (param.target.id == "pic20") {
        $("#pic20").attr("src", "img/poke009.png");

    }
}