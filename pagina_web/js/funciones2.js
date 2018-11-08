var boton1 = document.getElementById("id_boton1");
var boton2 = document.getElementById("id_boton2");
var boton3 = document.getElementById("foto1");

var resultado1= document.getElementById("msg1");
var resultado2 = document.getElementById("msg2");

boton1.onclick = function(e){
    resultado1.value=resultado1.value+"Un click ";
    //resultado.value="1";
}

boton2.ondblclick = function(e){
    resultado2.value=resultado2.value+"doble click ";
    //resultado.value="1";
}

boton3.onmouseover = function(e){
    alert("La imagen no se toca!");
}
boton3.onmouseleave = function(e){
    alert("Gracias por tu colaboración");
}

var boton = document.getElementById("cruz");


boton.addEventListener("click", cerradv, false);

function cerradv(){
    
    $("#superpuesto").remove();

}




