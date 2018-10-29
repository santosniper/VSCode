
var n0 = document.getElementById("num0");
var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var n3 = document.getElementById("num3");
var n4 = document.getElementById("num4");
var n5 = document.getElementById("num5");
var n6 = document.getElementById("num6");
var n7 = document.getElementById("num7");
var n8 = document.getElementById("num8");
var n9 = document.getElementById("num9");

var c = document.getElementById("c");

var mas = document.getElementById("mas");
var menos = document.getElementById("menos");
var por = document.getElementById("por");
var entre = document.getElementById("entre");
var coma = document.getElementById("coma");
var igual = document.getElementById("igual");

var salida = document.getElementById("salida");
var salida1 = document.getElementById("salida1");

var ultpulsnum=true;



n0.onclick = function(e){
    
    if(ultpulsnum==true){
        salida.value=salida.value+"0";

    }else{
        salida.value="0";
        ultpulsnum=true;
    }
}

n1.onclick = function(e){
    if(ultpulsnum==true){
        salida.value=salida.value+"1";

    }else{
        salida.value="1";
        ultpulsnum=true;
    }
}

n2.onclick = function(e){
    if(ultpulsnum==true){
        salida.value=salida.value+"2";

    }else{
        salida.value="2";
        ultpulsnum=true;
    }
}

n3.onclick = function(e){
    if(ultpulsnum==true){
        salida.value=salida.value+"3";

    }else{
        salida.value="3";
        ultpulsnum=true;
    }
}

n4.onclick = function(e){
    if(ultpulsnum==true){
        salida.value=salida.value+"4";

    }else{
        salida.value="4";
        ultpulsnum=true;
    }
}

n5.onclick = function(e){
    if(ultpulsnum==true){
        salida.value=salida.value+"5";

    }else{
        salida.value="5";
        ultpulsnum=true;
    }
}

n6.onclick = function(e){
    if(ultpulsnum==true){
        salida.value=salida.value+"6";

    }else{
        salida.value="6";
        ultpulsnum=true;
    }
}

n7.onclick = function(e){
    if(ultpulsnum==true){
        salida.value=salida.value+"7";

    }else{
        salida.value="7";
        ultpulsnum=true;
    }
}

n8.onclick = function(e){
    if(ultpulsnum==true){
        salida.value=salida.value+"8";

    }else{
        salida.value="8";
        ultpulsnum=true;
    }
}

n9.onclick = function(e){
    if(ultpulsnum==true){
        salida.value=salida.value+"9";

    }else{
        salida.value="9";
        ultpulsnum=true;
    }
}

del.onclick = function(e){
    salida.value=salida.value.slice(0, -1);
}

c.onclick = function(e){
    salida.value="";
    salida1.value="";
}



mas.onclick = function(e){

if(salida1.value==""){
    
    salida1.value=salida1.value+salida.value+"+";
     
     
}else if(salida1.value!="" && ultpulsnum!=false){
    salida1.value=salida1.value+salida.value;
    salida.value=(eval(salida1.value.toString()));
    
    salida1.value=salida1.value+"+";
}
ultpulsnum=false;
   
}

menos.onclick = function(e){
    if(salida1.value==""){
        salida1.value=salida1.value+salida.value+"-"; 
         
    }else if(salida1.value!="" && ultpulsnum!=false){
        salida1.value=salida1.value+salida.value;
        salida.value=(eval(salida1.value.toString()));
    
        salida1.value=salida1.value+"-";
    }
    ultpulsnum=false;
}

por.onclick = function(e){
    if(salida1.value==""){
        salida1.value=salida1.value+salida.value+"*";
         
    }else if(salida1.value!="" && ultpulsnum!=false){
        salida1.value=salida1.value+salida.value;
        salida.value=(eval(salida1.value.toString()));
   
        salida1.value=salida1.value+"*";
    }
    ultpulsnum=false;
   
}

entre.onclick = function(e){
    if(salida1.value==""){
        salida1.value=salida1.value+salida.value+"/";  
         
    }else if(salida1.value!="" && ultpulsnum!=false){
        salida1.value=salida1.value+salida.value;
        salida.value=(eval(salida1.value.toString()));
    
        salida1.value=salida1.value+"/";
    }
    ultpulsnum=false;
}

coma.onclick = function(e){
    if(ultpulsnum==true){
        salida.value=salida.value+".";

    }else{
        salida.value=".";
        ultpulsnum=true;
    }
   
    
}

igual.onclick = function(e){
    salida1.value=salida1.value+salida.value;
    salida.value=(eval(salida1.value.toString()));
    salida1.value="";
    ultpulsnum=false;
   
}

