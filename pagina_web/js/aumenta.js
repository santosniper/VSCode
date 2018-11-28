$(document).ready(function () {




    var arrayBotones = document.querySelectorAll(".boton");
    for (var i = 0; i < arrayBotones.length; i++) {
        arrayBotones[i].addEventListener("click", tamaños, false);
    }
    function tamaños(param) {
        var tamaño1 = $("#txt1").css("font-size");
        var tamaño2 = $("#txt2").css("font-size");
        var tamaño3 = $("#txt3").css("font-size");

        tamaño1 = parseInt(tamaño1);
        tamaño2 = parseInt(tamaño2);
        tamaño3 = parseInt(tamaño3);

        if (param.target.id == "aum1") {
            $("#txt1").css({ "font-size": tamaño1 + 4 });
        }
        if (param.target.id == "dis1") {
            $("#txt1").css({ "font-size": tamaño1 - 4 });
        }

        if (param.target.id == "aum2") {
            $("#txt2").css({ "font-size": tamaño2 + 4 });
        }
        if (param.target.id == "dis2") {
            $("#txt2").css({ "font-size": tamaño2 - 4 });
        }

        if (param.target.id == "aum3") {
            $("#txt3").css({ "font-size": tamaño3 + 4 });
        }
        if (param.target.id == "dis3") {
            $("#txt3").css({ "font-size": tamaño3 - 4 });
        }
    }
});



