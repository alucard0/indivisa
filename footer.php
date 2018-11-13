<?php
/**
* 	@author Amilkhael Chávez Delgado;
*	Documento: Footer para las páginas
*/
?>

<footer class="container-fluid backGroundAzul">
	<div class="row fila-1">
		<div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
			<p class="titulo textoBlanco"><span>Indivisa</span>font</p>
			<div class="row filaPremios">
				<img src="images/footer/2_FOOTER_DISENAMEXICO_40.png" alt="" class="img-fluid">
				<img src="images/footer/2_FOOTER_PREMIO1_40.png" alt="" class="img-fluid">
				<img src="images/footer/2_FOOTER_PREMIO2_40.png" alt="" class="img-fluid">
				<p class="textoBlanco premiosTexto">Premio al Ganador Absoluto en Diseño de Comunicaciones Visuales 2018</p>
				<p class="textoBlanco premiosTexto">Premio al Mejor Proyecto - Publicaciones Editoriales 2018</p>
			</div>
			<div class="row">
				<div class="col-xl-10 offset-xl-2">
					<p class="contacto lang" key="footer-contacto">Contacto</p>
					<div class="row">
						<div class="col">
							<a href="mailto:indivisafont@lasalle.org" class="textoBlanco lang" key="footer-reportaFalla">Reporta fallas en la tipografía</a>
						</div>
					</div>
					<div class="row">
						<div class="col d-none d-sm-inline">
							<a href="http://www.lasalle.mx/terminos-y-condiciones/" target="_blank" class="textoBlanco lang" key="footer-terminos">Términos y condiciones</a> <span class="textoBlanco ">|</span> <a href="http://www.lasalle.mx/privacidad/" target="_blank" class="textoBlanco lang" key="footer-privacidad">Aviso de privacidad</a>
						</div>
						<div class="col d-block d-sm-none colLegales">
							<a href="http://www.lasalle.mx/terminos-y-condiciones/" target="_blank" class="textoBlanco lang" key="footer-terminos">Términos y condiciones</a> 
							<br>
							<a href="http://www.lasalle.mx/privacidad/" target="_blank" class="textoBlanco lang" key="footer-privacidad">Aviso de privacidad</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 text-right align-self-end">
			<img src="images/footer/1_FOOTER_SIGNUM-FIDEI_150.png" alt="" class="img-fluid">
			<a href="http://www.lasalle.org/" target="_blank">
				<img src="images/footer/1_FOOTER_LASALLEORG_150.png" alt="" class="img-fluid">
			</a>
		</div>
	</div>
	<div class="row">
		<div class="col-12 fila-2">
			<hr class="lineaBlanca">
		</div>
		<div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 align-self-end">

			<p class="textoBlanco lang" key="footer-derechos">Todos los derechos Reservados  Universidad La Salle México 2018</p>
			<!--
			<p class="textoBlanco cookies lang" key="footer-cookies-p1">Este sitio utiliza cookies. Al continuar navegando por el sitio, usted acepta nuestro uso de cookies.</p> <a href="#" target="_blank" class="textoBlanco lang" key="footer-cookies-p2">Revisa nuestra información de cookies para más detalles.</a>
		-->
		</div>
		<div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5 text-right align-self-end">

			<div class="row justify-content-end">
				<div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
					<img src="images/footer/1_FOOTER_300LASALLE_150.png" alt="" class="img-fluid">
				</div>
				<div class="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
					<a href="https://twitter.com/lasalleorg?lang=en" target="_blank">
						<img src="images/footer/1_FOOTER_TWITTER_150.png" alt="" class="img-fluid">
					</a>
				</div>
				<div class="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
					<a href="https://www.facebook.com/lasalleorg/" target="_blank">
						<img src="images/footer/1_FOOTER_FACEBOOK_150.png" alt="" class="img-fluid">
					</a>
				</div>
				<div class="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
					<a href="https://www.instagram.com/indivisafont/" target="_blank">
						<img src="images/footer/1_FOOTER_INSTAGRAM_150.png" alt="" class="img-fluid">
					</a>
				</div>
			</div>
		</div>
	</div>
	
	
</footer>
	
	<!--js-->
	<script src="js/jquery-3.1.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	 <script src="js/lenguaje.js"> </script>
	<script src="js/descargable.js"></script>
	<script>
		$(document).ready(function()
		{	
			lazyloadVideo();

		    //LazyLoad video youtube
		    function lazyloadVideo() {
				var youtube = document.querySelectorAll( ".youtube" );
				for (var i = 0; i < youtube.length; i++) 
				{
					var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
					var image = new Image();
							image.src = source;
							image.addEventListener( "load", function() {
								youtube[ i ].appendChild( image );
							}( i ) );
						
							youtube[i].addEventListener( "click", function() {

								var iframe = document.createElement( "iframe" );

									iframe.setAttribute( "frameborder", "0" );
									iframe.setAttribute( "class", "videos" );
									iframe.setAttribute( "allowfullscreen", "" );
									iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&amp;showinfo=0" );

										this.innerHTML = "";
										this.appendChild( iframe );
							} );	
				};
			};
		});
	</script>
	<script>
		$("#modalEULA").scroll(function() {
			var faltante=$(window).height()+$("#modalEULA").scrollTop();
			//console.log(faltante+" "+$("#modalEULA").scrollTop()+" "+$(window).height());
			//console.log($('#modalEULA')[0].scrollHeight);
		   if(faltante >= $('#modalEULA')[0].scrollHeight) {
		    	
		   	$('.botonDescarga').removeAttr('disabled');
		   }
		   else
		   {
		   		$('.botonDescarga').attr('disabled','disabled');
		   }
		});

	</script>
	<script type="text/javascript">
		function cambiarID(tipoID){
			$('.botonDescarga').attr("id",tipoID);
		}
	</script>
	<!--Scroll y URL-->
	<script>
		$('a[href*="#"]')
		  // Remove links that don't actually link to anything
			.not('[href="#"]')
			.not('[href="#0"]')
		 	.click(function(event) 
		 	{
			    // On-page links
			    if (
			      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			      && 
			      location.hostname == this.hostname
			    ) 
			    {
			    	// Figure out element to scroll to
			    	var target = $(this.hash);
			    	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			    	// Does a scroll target exist?
			     	if (target.length) 
			     	{
			        	// Only prevent default if animation is actually gonna happen
			    		event.preventDefault();
			        	$('html, body').animate({
			        		scrollTop: target.offset().top
			        	}, 1000, function() 
			        	{
				        	// Callback after animation
				        	// Must change focus!
				        	var $target = $(target);
				        	$target.focus();
				        	if ($target.is(":focus")) { // Checking if the target was focused
				        		return false;
				        	} else {
				            	$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				            	$target.focus(); // Set focus again
				        	};
			        	});
			    	}
			    }
			});
	</script>
</body>
</html>