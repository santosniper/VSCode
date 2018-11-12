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

im1.addEventListener("click", sold1, false);

function sold1(){
    
    $("#im1").replaceWith("<img src='img/965334.png'>");
}

im2.addEventListener("click", sold2, false);

function sold2(){
    
    $("#im2").replaceWith("<img src='img/965334.png'>");
}

im3.addEventListener("click", sold3, false);

function sold3(){
    
    $("#im3").replaceWith("<img src='img/965334.png'>");
}

im4.addEventListener("click", sold4, false);

function sold4(){
    
    $("#im4").replaceWith("<img src='img/965334.png'>");
}
