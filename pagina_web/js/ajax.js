$('document').ready(function () {

    var botones = document.querySelectorAll("button");
    for (var x = 0; x < botones.length; x++) {
        botones[x].addEventListener("click", muestra, false);
    }

    function muestra() {
        $('#ejemplito').load(this.id + '.html');
    }







});
