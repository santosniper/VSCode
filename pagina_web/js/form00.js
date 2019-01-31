$(document).ready(function () {
    var oForm = document.getElementById("formulari");
    var oEdad = oForm.edad;
    var oDni = oForm.dni;
    var oLetra = oForm.letra;
    var oTlf = oForm.tlf;
    var oCorreo = oForm.correo;
    var oCorreo2 = oForm.correo2;





    oForm.addEventListener("submit", comprueba, false);

    function comprueba(event) {
        //DNI
        if (oDni.value == "") {


        } else {
            var DNI = oDni.value + oLetra.value;
            var exprDNI;
            exprDNI = /^\d{8}[a-zA-Z]$/;
            var n;
            var l;
            var letra;


            if (exprDNI.test(DNI) == true) {
                n = DNI.substr(0, DNI.length - 1);
                l = DNI.substr(DNI.length - 1, 1);
                n = n % 23;
                letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
                letra = letra.substring(n, n + 1);
                if (letra != l.toUpperCase()) {
                    alert('ERROR: La letra del DNI no se corresponde');
                    event.preventDefault();
                } else {
                    return true;
                }
            } else {
                alert('ERROR: DNI erróneo, formato no válido');
                event.preventDefault();
                return false;
            }





        }
        //edad
        if (oEdad.value == "" || oEdad.value > 100 || oEdad.value < 18) {


        } else {

            if (isNaN(oEdad.value)) {
                alert("Inserte un número válido");
                event.preventDefault();
            }
        }

        //telefono
        if (oTlf.value == "") {

        } else {
            if (isNaN(oTlf.value) || oTlf.value.length != 9) {
                alert("Teléfono no válido");
                event.preventDefault();
            }
        }

        if (oCorreo.value == "") {

        } else {
            if (oCorreo.value != oCorreo2.value) {
                alert("Los correos no coinciden");
                event.preventDefault();

            } else {
                var cont = oCorreo.value;
                if (cont.includes("@")) {

                } else {
                    alert("Correo no válido");
                    event.preventDefault();
                }

            }
        }




    }
    //seleccion de provincias y poblaciones
    $("#provin").change(function () {
        var elecProv = $(this).val();
        if (elecProv == "Alacant") {
            $("#local").attr("disabled", false);
            $("#local").append("<option value='Benferri'>Benferri</option><option value='Alcoi'>Alcoi</option><option value='Benidorm'>Benidorm</option>");
        } else if (elecProv == "Castello") {
            $("#local").attr("disabled", false);
            $("#local").append("<option value='Jerica'>Jerica</option><option value='Villa-real'>Villa-real</option><option value='Betxí'>Betxí</option>");
        } else if (elecProv == "Valencia") {
            $("#local").attr("disabled", false);
            $("#local").append("<option value='Catarrotja'>Catarrotja</option><option value='Albal'>Albal</option><option value='Massanassa'>Massanassa</option>");
        } else if (elecProv == "selecciona") {
            $("#local").attr("disabled", true);
        }
    });




    if (oCorreo.value == oCorreo2.value) {


    } else {

        oCorreo2.focus();//hacemos el focus

    }




});





