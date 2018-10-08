
jQuery(function($){
	/*recupera el id*/
	$("a[id]").click(function() {
		var id = $(this).attr("id");
		var href = $(this).attr("href");
        /*confirm("id_boton: " + id + " URL " + href);*/
        

	        /*switch de descarga*/
		    switch(id)
		    {
		    	/*Manuales

		    	/*duotono_jpg*/
		    	case 'set_General':
		    		generaDescarga ('descargables/SetGeneral.zip');
		    	break;

		    	/*todos_jpg*/
		    	case 'set_Editorial':
		    		generaDescarga ('descargables/SetEditorial.zip');
		    	break;


		    	/*imagotipo_png
		    	color_png*/
		    	case 'set_Web':
		    		generaDescarga ('descargables/SetWeb.zip');
		    	break;

		    	
		    	default:
		    		alert("No tiene ID asociado");
		    	break
	    }
	});
});

function generaDescarga (path){
	var file_path = path;
	var a = document.createElement('A');
	a.href = file_path;
	a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}