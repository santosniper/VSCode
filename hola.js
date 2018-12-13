$(function () {
    var cuadro = document.getElementById("uno");

    cuadro.addEventListener("onkeydown", down, false);
    cuadro.addEventListener("onkeypress", press, false);
    cuadro.addEventListener("onkeyup", up, false);

    function down() {
        alert("down");

    }

    function press() {
        alert("press");

    }

    function up() {
        alert("up");

    }

});

