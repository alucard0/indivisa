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
	
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<style>
      /* Critical CSS here. */
		      /*General*/
		html,
		body {
		  height: 100%;
		  width: 100%;
		  font-family: IndivisaTextSans, sans-serif;
		  font-weight: 400;
		  font-style: normal;
		  font-size: 18px;
		  line-height: 25px;
		  letter-spacing: 1px;
		}



		h2,p.frase,p.fecha,p.indivisaManent{
			color: #001E61;
		}
		h2
		{
			font-size: 	120px;
			text-align: left;
		  color: #fff;
		}
		h3{
			font-size: 25px;
			color: #000;

		}

		/*Text Sans*/
		p.variantes,
		section#sistemaTipografico p.varianteSubtitulo1,
		section#sistemaTipografico p.varianteSubtitulo2,
		section#sistemaTipografico div.text div.sans p.nombreVarianteTipo.black,
		section#descargas p.contenido span,
		section#aplicaciones p.paratodoDescripcion,
		section#aplicaciones p.paratodoDescripcion2,
		section#aplicaciones div.modal p.titulo,
		h1.tituloConoce,
		section#sistemaTipografico div.letrasA.TextSans p span.black,
		section#sistemaTipografico div.letrasN.TextSans p span.black,
		section#familiasyExtensiones div.text div.sans p.nombreVarianteTipo.black,
		section#multilinguistico p.numeraria,
		section#multilinguistico p.head{
		  font-family: "IndivisaTextSans";
		  font-weight: 700;
		  font-style: normal;
		}
		section#sistemaTipografico div.text p.familiaTitulo.sans,
		section#sistemaTipografico div.text div.sans p.nombreVarianteTipo.black-italic,
		section#sistemaTipografico div.letrasA.TextSans-Italic p span.black,
		section#sistemaTipografico div.letrasN.TextSans p span.black-italic,
		section#familiasyExtensiones div.text div.sans p.nombreVarianteTipo.black-italic{
		  font-family: "IndivisaTextSans";
		  font-weight: 700;
		  font-style: italic;
		}
		.fraseIntro2,p.tituloTipografiaTodos span,
		section#sistemaTipografico div.text div.sans p.nombreVarianteTipo.bold,
		h2.subtituloConoce,
		section#sistemaTipografico div.letrasA.TextSans p span.bold,
		section#familiasyExtensiones div.text div.sans p.nombreVarianteTipo.bold{
		  font-family: "IndivisaTextSans";
		  font-weight: 600;
		}
		.fraseIntro2,p.tituloTipografiaTodos span,
		section#sistemaTipografico div.text div.sans p.nombreVarianteTipo.bold-italic,
		section#sistemaTipografico p.subtituloSistemaConoce,
		section#sistemaTipografico div.letrasA.TextSans-Italic p span.bold,
		section#familiasyExtensiones p.subtitulo,
		section#familiasyExtensiones div.text div.sans p.nombreVarianteTipo.bold-italic,
		section#multilinguistico p.subtitulo,
		section#multilinguistico p.head span{
		  font-family: "IndivisaTextSans";
		  font-weight: 600;
		  font-style: italic;
		}
		section#sistemaTipografico div.text div.sans p.nombreVarianteTipo.regular,
		section#aplicaciones p.paratodoDescripcion span,
		section#aplicaciones p.paratodoDescripcion2 span,
		section#sistemaTipografico div.letrasA.TextSans p span.regular,
		section#familiasyExtensiones div.text div.sans p.nombreVarianteTipo.regular,
		section#multilinguistico p.numeraria span{
		  font-family: "IndivisaTextSans";
		  font-weight: 400;
		}
		section#sistemaTipografico div.text div.sans p.nombreVarianteTipo.regular-italic,
		section#descargas p.subtitulo,
		section#descargas h5.modal-title,
		section#sistemaTipografico div.letrasA.TextSans-Italic p span.regular,
		section#familiasyExtensiones div.text div.sans p.nombreVarianteTipo.regular-italic{
		  font-family: "IndivisaTextSans";
		  font-weight: 400;
		  font-style: italic;
		}
		section#sistemaTipografico div.text p.familiaVarianteTitulo,
		section#sistemaTipografico div.text div.sans p.nombreVarianteTipo.light,
		section#descargas p.titulo,
		section#aplicaciones div.modal p.descripcion,
		section#sistemaTipografico div.letrasA.TextSans p span.light,
		section#sistemaTipografico div.letrasN.TextSans p span.light,
		section#familiasyExtensiones div.text div.sans p.nombreVarianteTipo.light,
		section#instagram p.subtitulo{
		  font-family: "IndivisaTextSans";
		  font-weight: 300;
		}
		section#sistemaTipografico div.text div.sans p.nombreVarianteTipo.light-italic,
		section#sistemaTipografico div.letrasA.TextSans-Italic p span.light,
		section#sistemaTipografico div.letrasN.TextSans p span.light-italic,
		section#familiasyExtensiones div.text div.sans p.nombreVarianteTipo.light-italic{
		  font-family: "IndivisaTextSans";
		  font-weight: 300;
		  font-style: italic;
		}
		/*Text Serif*/
		h1,h2,section#sistemaTipografico p.subtitulo,
		section#sistemaTipografico div.text div.serif p.nombreVarianteTipo.black,
		h2.subtituloConoce span,
		section#sistemaTipografico div.letrasA.TextSerif p span.black,
		section#sistemaTipografico div.letrasN.TextSerif p span.black,
		section#familiasyExtensiones div.text div.serif p.nombreVarianteTipo.black,
		footer p.titulo span{
		  font-family: "IndivisaTextSerif";
		  font-weight: 700;
		  font-style: normal;
		}
		section#sistemaTipografico div.text div.serif p.nombreVarianteTipo.black-italic,
		section#sistemaTipografico div.letrasA.TextSerif-Italic p span.black,
		section#sistemaTipografico div.letrasN.TextSerif p span.black-italic,
		section#familiasyExtensiones div.text div.serif p.nombreVarianteTipo.black-italic{
		  font-family: "IndivisaTextSerif";
		  font-weight: 700;
		  font-style: italic;
		}
		section#sistemaTipografico div.text div.serif p.nombreVarianteTipo.bold,
		section#sistemaTipografico div.letrasA.TextSerif p span.bold,
		section#familiasyExtensiones div.text div.serif p.nombreVarianteTipo.bold,
		section#multilinguistico p.serif-bold{
		  font-family: "IndivisaTextSerif";
		  font-weight: 600;
		}
		p.indivisaManent,.fraseIntro,
		section#sistemaTipografico div.text div.serif p.nombreVarianteTipo.bold-italic,
		section#sistemaTipografico div.letrasA.TextSerif-Italic p span.bold,
		section#familiasyExtensiones div.text div.serif p.nombreVarianteTipo.bold-italic
		{
		  font-family: "IndivisaTextSerif";
		  font-weight: 600;
		  font-style: italic;
		}


		h2,section#sistemaTipografico div.text div.serif p.nombreVarianteTipo.regular,
		section#sistemaTipografico div.letrasA.TextSerif p span.regular,
		section#familiasyExtensiones div.text div.serif p.nombreVarianteTipo.regular,
		footer p.titulo{
		  font-family: "IndivisaTextSerif";
		  font-weight: 400;
		  font-style: normal;
		}
		section#sistemaTipografico div.text div.serif p.nombreVarianteTipo.regular-italic,
		section#descargas p.tituloInfo,
		section#descargas p.contenido300,
		section#sistemaTipografico div.letrasA.TextSerif-Italic p span.regular,
		section#familiasyExtensiones div.text div.serif p.nombreVarianteTipo.regular-italic,
		section#instagram p.titulo span{
		  font-family: "IndivisaTextSerif";
		  font-weight: 400;
		  font-style: italic;
		}

		section#sistemaTipografico div.text div.serif p.nombreVarianteTipo.light,
		section#sistemaTipografico div.letrasA.TextSerif p span.light,
		section#sistemaTipografico div.letrasN.TextSerif p span.light,
		section#familiasyExtensiones div.text div.serif p.nombreVarianteTipo.light{
		  font-family: "IndivisaTextSerif";
		  font-weight: 300;
		}
		section#sistemaTipografico div.text div.serif p.nombreVarianteTipo.light-italic,
		section#sistemaTipografico div.letrasA.TextSerif-Italic p span.light,
		section#sistemaTipografico div.letrasN.TextSerif p span.light-italic,
		section#familiasyExtensiones div.text div.serif p.nombreVarianteTipo.light-italic{
		  font-family: "IndivisaTextSerif";
		  font-weight: 300;
		  font-style: italic;
		}

		/*Display Sans*/
		section#sistemaTipografico div.display div.sans p.nombreVarianteTipo.heavy,
		section#familiasyExtensiones div.display div.sans p.nombreVarianteTipo.heavy{
		  font-family: "IndivisaDisplaySans";
		  font-weight: 900;
		}
		section#sistemaTipografico div.display div.sans p.nombreVarianteTipo.heavy-italic,
		section#familiasyExtensiones div.display div.sans p.nombreVarianteTipo.heavy-italic,
		section#instagram p.titulo{
		  font-family: "IndivisaDisplaySans";
		  font-weight: 900;
		  font-style: italic;
		}
		section#sistemaTipografico p.titulo,
		section#sistemaTipografico div.display div.sans p.nombreVarianteTipo.regular,
		section#familiasyExtensiones p.titulo,
		section#familiasyExtensiones div.display div.sans p.nombreVarianteTipo.regular,{
		  font-family: "IndivisaDisplaySans";
		  font-weight: 500;
		}
		section#sistemaTipografico div.display p.familiaTitulo.sans,
		section#sistemaTipografico div.display div.sans p.nombreVarianteTipo.regular-italic,
		section#familiasyExtensiones div.display div.sans p.nombreVarianteTipo.regular-italic{
		  font-family: "IndivisaDisplaySans";
		  font-weight: 500;
		  font-style: italic;
		}
		section#printweb p.titulo,section#sistemaTipografico p.varianteNumero,
		section#sistemaTipografico div.display div.sans p.nombreVarianteTipo.thin,
		section#familiasyExtensiones div.display div.sans p.nombreVarianteTipo.thin{
		  font-family: "IndivisaDisplaySans";
		  font-weight: 100;
		}
		section#sistemaTipografico div.display div.sans p.nombreVarianteTipo.thin-italic,
		section#familiasyExtensiones div.display div.sans p.nombreVarianteTipo.thin-italic{
		  font-family: "IndivisaDisplaySans";
		  font-weight: 100;
		  font-style: italic;
		}
		/*Display Serif*/
		section#sistemaTipografico div.display div.serif p.nombreVarianteTipo.heavy,
		section#familiasyExtensiones div.display div.serif p.nombreVarianteTipo.heavy {
		  font-family: "IndivisaDisplaySerif";
		  font-weight: 900;
		}
		section#sistemaTipografico div.display div.serif p.nombreVarianteTipo.heavy-italic,
		section#familiasyExtensiones div.display div.serif p.nombreVarianteTipo.heavy-italic{
		  font-family: "IndivisaDisplaySerif";
		  font-weight: 900;
		  font-style: italic;
		}

		section#sistemaTipografico div.display div.serif p.nombreVarianteTipo.regular,
		section#familiasyExtensiones div.display div.serif p.nombreVarianteTipo.regular{
		  font-family: "IndivisaDisplaySerif";
		  font-weight: 500;
		}

		section#sistemaTipografico div.display div.serif p.nombreVarianteTipo.regular-italic,
		section#familiasyExtensiones div.display div.serif p.nombreVarianteTipo.regular-italic{
		  font-family: "IndivisaDisplaySerif";
		  font-weight: 500;
		  font-style: italic;
		}

		section#sistemaTipografico div.display div.serif p.nombreVarianteTipo.thin,
		section#familiasyExtensiones div.display div.serif p.nombreVarianteTipo.thin{
		  font-family: "IndivisaDisplaySerif";
		  font-weight: 100;
		}
		section#sistemaTipografico div.display div.serif p.nombreVarianteTipo.thin-italic,
		section#familiasyExtensiones div.display div.serif p.nombreVarianteTipo.thin-italic{
		  font-family: "IndivisaDisplaySerif";
		  font-weight: 100;
		  font-style: italic;
		}

		.lineaAzulVertical{
		  border-right: 1px solid rgba(45, 79, 161, 0.40);
		}
		.backgroundAzulyBlanco{
		  background: rgba(45,80,161,1);
		  background: -moz-linear-gradient(top, rgba(45,80,161,1) 0%, rgba(45,80,161,1) 60%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%);
		  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(45,80,161,1)), color-stop(60%, rgba(45,80,161,1)), color-stop(40%, rgba(255,255,255,1)), color-stop(100%, rgba(255,255,255,1)));
		  background: -webkit-linear-gradient(top, rgba(45,80,161,1) 0%, rgba(45,80,161,1) 60%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%);
		  background: -o-linear-gradient(top, rgba(45,80,161,1) 0%, rgba(45,80,161,1) 60%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%);
		  background: -ms-linear-gradient(top, rgba(45,80,161,1) 0%, rgba(45,80,161,1) 60%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%);
		  background: linear-gradient(to bottom, rgba(45,80,161,1) 0%, rgba(45,80,161,1) 60%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%);
		  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2d50a1', endColorstr='#ffffff', GradientType=0 );

		}

		.backGroundAzul{
		  background: #2D4FA1;
		}
		.backgroundGris{
		  background: #EAEAEA;
		}
		.backgroundGrisClaro{
		  background: #f1f1f1;
		}
		.backgroundGrisClaro2{
		  background: #f2f2f2;
		}
		.backgroundAmarillo{
		  background: #FFD200;;
		}
		.textoAmarillo{
		  color: #FFD200;
		}
		.textoAzul{
		  color: #2D4FA1;
		}
		.textoGris{
		  color: #58595B;
		}
		.textoBlanco{
		  color: #fff;
		}
		hr.lineaAmarilla{
		  border: 0;
		  border-top: 10px solid #FFD200;
		  width: 15%;
		}
		hr.v1{
		  margin: 1rem 0 1rem auto;
		}
		hr.v2{
		  margin: 1rem auto 1rem 3rem;
		  border-top: 20px solid #FFD200;
		  width: 10%;
		}
		hr.v3{
		  margin: 1rem 1rem 1rem auto;
		  border-top: 20px solid #FFD200;
		  width: 50%;
		}


		/*Estilos para lazy load youtube*/
		.youtube {
		  background-color: #000;
		  position: relative;
		  padding-top: 56.25%;
		  overflow: hidden;
		  cursor: pointer;
		}
		.youtube img {
		  width: 100%;
		  /*height: 100%;*/
		  top: -16.82%;
		  left: 0;
		  opacity: 0.7;
		}
		.youtube .play-button {
		  width: 90px;
		  height: 60px;
		  background-color: #FFD200;
		  box-shadow: 0 0 30px rgba( 0,0,0,0.6 );
		  z-index: 1;
		  opacity: 0.8;
		  border-radius: 6px;
		}
		.youtube .play-button:before {
		  content: "";
		  border-style: solid;
		  border-width: 15px 0 15px 26.0px;
		  border-color: transparent transparent transparent #fff;
		}
		.youtube img,
		.youtube .play-button {
		  cursor: pointer;
		}
		.youtube img,
		.youtube iframe,
		.youtube .play-button,
		.youtube .play-button:before {
		  position: absolute;
		}
		.youtube .play-button,
		.youtube .play-button:before {
		  top: 50%;
		  left: 50%;
		  transform: translate3d( -50%, -50%, 0 );
		}
		.youtube iframe {
		  height: 100%;
		  width: 100%;
		  top: 0;
		  left: 0;
		}
		/* Fin Estilos para lazy load youtube*/
		.videoFull{
		  padding: 0;
		}

		.sticky-container{
		    padding:0px;
		    margin:0px;
		    position:fixed;
		    right:-130px;
		    top:230px;
		    width:210px;
		    z-index: 1100;
		}
		.sticky li{
		    list-style-type:none;
		    background:transparent;
		    color:#efefef;
		    height:40px;
		    padding:0px;
		    margin:0px 0px 1px 0px;
		    -webkit-transition:all 0.25s ease-in-out;
		    -moz-transition:all 0.25s ease-in-out;
		    -o-transition:all 0.25s ease-in-out;
		    transition:all 0.25s ease-in-out;
		    cursor:pointer;
		}
		.sticky li:hover{
		    margin-left:-115px;
		}
		.sticky li img{
		    float:left;
		    margin:2px 2px;
		    margin-right:5px;
		}
		.sticky li a p{
		    padding-top:5px;
		    margin:0px;
		    line-height:16px;
		    font-size:16px;
		    color: #fff;
		}
		.sticky li a{
			text-decoration:none;
		}
		.sticky li a p{
		   	color:#8a8d8e;
		}
		.sticky li a p:hover{
		    text-decoration:none;
		    color:#eec100;
		}
		/*Fin General*/

		/*Header*/
		.logo{
		  margin-top: 10px;
		}
		nav.navbar.navbar-light div.navbar-nav a.nav-item.nav-link {
		    display: inline-block;
		    color: #fff;
		}
		nav.navbar.navbar-light div.navbar-nav a.nav-item.nav-link.seccion:after {
		  content: '';
		  display: block;
		  width: 0;
		  height: 2px;
		  background: #FFD200;
		  margin: 10px auto 0 auto;
		  transition: width .3s;
		}
		nav.navbar.navbar-light div.navbar-nav a.nav-item.nav-link.seccion:hover::after, nav.navbar.navbar-light div.navbar-nav a.nav-item.nav-link.seccion:active::after{
		  width: 50%;
		}

		nav.navbar.navbar-light div.navbar-nav a.nav-item.nav-link.seccion.active:after {
		  content: '';
		  display: block;
		  width: 0;
		  height: 2px;
		  background: #FFD200;
		  margin: 10px auto 0 auto;
		  transition: width .3s;
		}
		nav.navbar.navbar-light div.navbar-nav a.nav-item.nav-link.seccion.active:after{
		  width: 50%;
		}

		nav.navbar.navbar-light div.navbar-nav a.nav-item.nav-link.translate{
		  text-transform: uppercase;
		}

		nav.navbar.navbar-light div.navbar-nav a.nav-item.nav-link.translate:hover,
		nav.navbar.navbar-light div.navbar-nav a.nav-item.nav-link.translate:active,
		footer a:hover,
		footer a:active {
		  color: #FFD200;
		  text-decoration: none;
		}

		nav.navbar.navbar-light div.navbar-nav a.nav-item.nav-link.translate.active{
		  color: #FFD200;
		}
		.navbar-light .navbar-toggler, .navbar-light .navbar-toggler:focus{
		  border-color: transparent;
		}
		.navbar-light .navbar-toggler-icon {
		  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 210, 0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
		  
		}
		/*Fin header*/

    </style>


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
		        
		        <a <?php echoActiveClassMenu("conoce-indivisa");?> class="nav-item nav-link seccion lang" href="conoce-indivisa.php" key="menu_conoceIndivisa" >Conoce Indivisa</a>
		        <a class="nav-item nav-link seccion lang" <?php cambiaLinksMenuAplicaciones("conoce-indivisa"); ?>  key="menu_aplicaciones" >Aplicaciones</a>
		        <a class="nav-item nav-link seccion lang" <?php cambiaLinksMenuDescargas("conoce-indivisa"); ?> key="menu_descarga">Descarga</a>
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