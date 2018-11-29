$(document).ready(function () {


    var contador = document.getElementById("numero");



    contador.addEventListener("click", sumame, false);
    var i = 0;
    function sumame() {

        i++;

        contador.textContent = i;




    }


});



