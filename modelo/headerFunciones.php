<?php
/**
* 	@author Amilkhael Chávez Delgado;
*	Documento: Funciones para el header
*/
//Establece los botones active del menú
function echoActiveClassMenu($requestUri)
{
	    $current_file_name = basename($_SERVER['REQUEST_URI'], ".php");
	    if ($current_file_name == "conoce-indivisa")
        {
	        echo 'class="nav-item nav-link seccion lang active"';
        }
        else
        {
            echo 'class="nav-item nav-link seccion lang"';
        }
}

function cambiaLinksMenuDescargas($requestUri){
    $current_file_name = basename($_SERVER['REQUEST_URI'], ".php");
    
    
    if ($current_file_name == "conoce-indivisa")
    {
        echo 'href="http://indivisafont.org/#descargas"';
    }
    else
    {
        echo 'href="#descargas"';
    }
}

function cambiaLinksMenuAplicaciones($requestUri){
    $current_file_name = basename($_SERVER['REQUEST_URI'], ".php");
    
    if ($current_file_name == "conoce-indivisa")
    {
        echo 'href="http://indivisafont.org/#aplicaciones"';
    }
    else
    {
        echo 'href="#aplicaciones"';
    }
}

//Imprime Titulo
function imprimeTitulo()
{
	$current_file_name = basename($_SERVER['REQUEST_URI'], ".php");
    
    
    switch ($current_file_name) 
    {
    	case 'index':
    		echo "<title >Indivisafont | La Salle</title>";
    		break;
    	case 'conoce-indivisa':
    		echo "<title >Indivisafont-Técnico | La Salle</title>";
    		break;
    	default:
    		echo "<title >Indivisafont | La Salle</title>";
    		break;
    }
}

