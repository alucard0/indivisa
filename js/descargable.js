
jQuery(function($){
	/*recupera el id*/
	$("button[id]").click(function() {
		var id = $(this).attr("id");
		var href = $(this).attr("href");
        /*confirm("id_boton: " + id + " URL " + href);*/

	        /*switch de descarga*/
		    switch(id)
		    {
		    	/*Tipografías

		    	/*Set General*/
		    	case 'set_General':
		    		generaDescarga ('descargables/SetGeneral.zip');
		    	break;

		    	/*Set Editorial*/
		    	case 'set_Editorial':
		    		generaDescarga ('descargables/SetEditorial.zip');
		    	break;


		    	/*Set Web*/
		    	case 'set_Web':
		    		generaDescarga ('descargables/SetWeb.zip');
		    	break;

		    	
		    	default:
		    		alert("No se encuentra el archivo");
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