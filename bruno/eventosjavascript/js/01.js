document.getElementById("pagina").onmousemove = function (event) { coordsPagina(event) };

onmousemove = coordsNavegador;
function coordsPagina(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X: " + x + ", Y: " + y;
    document.getElementById("pagi").textContent = coor;

    document.getElementById("situacion").style.backgroundColor = "#116611";
    document.getElementById("situacion2").style.backgroundColor = "#116611";
}



function coordsNavegador(event) {
    var x = event.pageX;
    var y = event.pageY;
    var coor = "X: " + x + ", Y: " + y;
    document.getElementById("nav").textContent = coor;
}

onkeypress = letra;
function letra(event) {
    var x = event.which || event.keycode;
    document.getElementById("codigo").textContent = x;
    document.getElementById("caracter").textContent = String.fromCharCode(x);
}

onclick = click;
function click() {
    document.getElementById("situacion").style.backgroundColor = "#FFFFCC";
    document.getElementById("situacion2").style.backgroundColor = "#FFFFCC";
    var tamaño = function tamanoVentanaNavegador() {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    };




}

onkeydown = click2;
function click2() {
    document.getElementById("situacion").style.backgroundColor = "#CCE6FF";
    document.getElementById("situacion2").style.backgroundColor = "#CCE6FF";


}