
 var numeros= new Array();
    for(var i=0; i<100;i++){
        
        numeros[i]=parseInt(Math.random()*100);
        for(var s=0;s<100;s++){
          

        }
       
        numeros.sort()

    }
    
    document.write('<table border=3px>');
    var z=0;

    for (var x=0;x<10;x++){
        document.write("<tr>");
        for(var o=0;o<10;o++){
            document.write("<td>");
            document.write(numeros[z]);
            document.write("</td>");
            z++;
        }
        document.write("</tr>");
        
        
}
document.write('</table>');

