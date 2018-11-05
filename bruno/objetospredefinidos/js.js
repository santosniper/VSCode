$(document).ready(function(){
   
    boton.onclick=function(e){
       

        if(text01.value==""||text02.value==""){
           
            $("#text01").after("Rellena los dos campos.");
            $("#text02").after("Rellena los dos campos.");

        }
        
    }

   /*
    $("form")
    .hide()
    .fadeIn(10000);

    $("text01")
    .fadeOut(5000)
    .fadeIn(5000);

    var mensaje = document.getElementById("text01");
    var mensaje =$("#text01")
    */
/*
.html (inserta texto) 
    cambiandolo
.text (inserta texto)
.append (inserta texto)
    detrás
.prepend (inserta texto)
    delante
.before (inserta texto)
    del elemnto
.after (inserta después)
    del elemento
*/
});