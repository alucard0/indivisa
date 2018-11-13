<?php
include 'modelo/headerFunciones.php';
/**
* 	@author Amilkhael Chávez Delgado;
*	Documento: Header para las páginas
*/
?>
<!DOCTYPE html>
<html lang="es-419">
<head>
	<!--metas-->
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="author" content="La Salle">
	<meta name="description" content="Una voz para todos y para todo. Tipografía oficial de La Salle en el mundo: 5 continentes, 80 países, 1 millón de estudiantes.">
	<!-- Metadatos Facebook-->
	<meta property="og:url" content="http://indivisafont.org/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Indivisa Font: Tipografía La Salle.  Diseño| Marca | Comunicación" />
	<meta property="og:description" content="Indivisa Font: Una voz para todos y para todo." />
	<meta property="og:image" content="http://indivisafont.org/images/contenido/INDIVISAFONT_FACEBOOK.jpg" />

	<!-- Metadatos Twitter-->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@Indivisafont">
    <meta name="twitter:creator" content="@Indivisafont">
    <meta name="twitter:title" content="Indivisa Font: Tipografía La Salle.  Diseño| Marca | Comunicación">
    <meta name="twitter:description" content="Indivisa Font: Una voz para todos y para todo.">
    <meta name="twitter:image" content="http://indivisafont.org/images/contenido/INDIVISAFONT_TWITTER.jpg">


	<!-- Mobile Metas -->
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">

	<!-- Titulo -->
	
	<?php imprimeTitulo(); ?>

	<!--css-->
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/custom.css">
	<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/solid.js" integrity="sha384-GJiigN/ef2B3HMj0haY+eMmG4EIIrhWgGJ2Rv0IaWnNdWdbWPr1sRLkGz7xfjOFw" crossorigin="anonymous"></script>
	<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/regular.js" integrity="sha384-sqmLTIuB+bQgkyOcdJ/hAvXl51Z7qqdK/lcH/rt6sdvDKFincQWI+fVgcDZM6NMz" crossorigin="anonymous"></script>
	<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/brands.js" integrity="sha384-2vdvXGQdnt+ze3ylY5ESeZ9TOxwxlOsldUzQBwtjvRpen1FwDT767SqyVbYrltjb" crossorigin="anonymous"></script>
	<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/fontawesome.js" integrity="sha384-2OfHGv4zQZxcNK+oL8TR9pA+ADXtUODqGpIRy1zOgioC4X3+2vbOAp5Qv7uHM4Z8" crossorigin="anonymous"></script>
	<!--[if IE]>
			<link rel="stylesheet" href="css/ie.css">
		<![endif]-->

	<!--[if lte IE 8]>
			<script src="js/respond/respond.js"></script>
			<script src="js/excanvas/excanvas.js"></script>
		<![endif]-->

	<!--fonts-->
	<!--js-->
	
	<!-- favicon -->
	<link rel="icon" type="image/x-icon" href="images/favicon/favicon.ico">
	<link rel="alternate" href="http://indivisafont.org/" hreflang="es-mx" />

	<!-- Global site tag (gtag.js) - Google Analytics -->

	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-120536974-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-120536974-1');
	</script>

</head>
<body>

    <!-- HEADER-->
    <div class="backGroundAzul">
		<header class="container">
		    <nav id="menu" class="navbar navbar-expand-lg navbar-light  ">
		    <a class="navbar-brand col-8 col-md-5 col-xl-3" href="http://indivisafont.org"><img src="images/header/imagotipo/lasalleorg.png" alt="La Salle World Wide" class="img-fluid"></a>
		    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		      <span class="navbar-toggler-icon"></span>
		    </button>
		    <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
		      <div class="navbar-nav">
		        
		        <a <?php echoActiveClassMenu("conoce-indivisa");?>class="nav-item nav-link seccion lang" href="conoce-indivisa.php" key="menu_conoceIndivisa" >Conoce Indivisa</a>
		        <a class="nav-item nav-link seccion lang" <?php cambiaLinksMenuAplicaciones("conoce-indivisa"); ?>href="#aplicaciones" key="menu_aplicaciones" >Aplicaciones</a>
		        <a class="nav-item nav-link seccion lang" <?php cambiaLinksMenuDescargas("conoce-indivisa"); ?>href="#descargas" key="menu_descarga">Descarga</a>
				<div class="idiomas row no-gutters">
					<div class="col-4 opcionIdiomas">
						<a class="nav-item nav-link translate lang" id="en"  key="menu_en">EN</a>
					</div>
					<div class="col-4 opcionIdiomas">
						<a class="nav-item nav-link translate lang" id="es"  key="menu_es">ES</a>
					</div>
					<div class="col-4 opcionIdiomas">
						<a class="nav-item nav-link translate lang" id="fr"  key="menu_fr">FR</a> 
					</div>
					<!--
					<div class="col-3">
						<a class="nav-item nav-link translate lang" id="pt" href="#" key="menu_pt">PT</a> 
					</div>
					-->
				</div>
		        
		      </div>
		    </div>
		  </nav>
		</header>
	</div>

    <!--  FIN HEADER -->