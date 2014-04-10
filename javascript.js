window.onload = function() //saber si la pagina  esta cargada
{

	var pasos=[ "paso1","paso2","paso3","paso4","paso5","paso6"]
	var caminar=1
	var caminar_inversa=5
	var mov =0;

    document.onkeyup=eventos
    document.onkeypress=eventos
    document.onkeydown=eventos
    function eventos(e)
    {
     var captura= window.event || e;
     console.log (captura.keyCode);

    
    if (captura.keyCode == 40){
    	
		nom_div("gato").setAttribute("class", "container "+ pasos[1]);
		
	   } 
	    else if (captura.keyCode==39){
    	nom_div("gato").setAttribute("class", "container "+ pasos[2]);	
    	}
    	else if (captura.keyCode==38){
    	nom_div("gato").setAttribute("class", "container "+ pasos[3]);	
    	}
    	else if(captura.keyCode==37){
    	nom_div("gato").setAttribute("class", "container "+ pasos[4]);	
    	}
	}
		
function nom_div(div)
{
	return document.getElementById(div);
}
}