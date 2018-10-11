 jQuery(function($){
    	var arrLang ={
    		'en' :{
    			/*General*/
				
    			/*Menu*/
    			'menu_conoceIndivisa':'Know Indivisa',
    			'menu_aplicaciones': 'Implementations',
                'menu_descarga':'Download',
                'menu_en':'en',
                'menu_es':'sp',
                'menu_fr':'fr',
                'menu_pt':'pt',
                
                /*inicio*/
                'inicio-frase1':'<br><span>- </span>',
                'inicio-frase2-1':'',
                'inicio-frase2-2':'',
                'inicio-frase3':'',

                /*Tipografía para todos*/
                'paraTodo-titulo':'<br><span></span>',
                'paraTodo-p1':'',
                'paraTodo-p2':'',

                /*Aplicaciones*/
                'paraTodos-titulo':'<br><span></span>',
                'paraTodos-p1':'',
                'paraTodos-p2':'',
                'paraTodos-p3':'',
                'aplicaciones-branding':'<i class="fas fa-eye fa-2x"></i><br>Branding',
                'aplicaciones-publicaciones':'<i class="fab fa-leanpub fa-2x"></i><br>',
                'aplicaciones-administrativo':'<i class="far fa-file-alt fa-2x"></i><br>',
                'aplicaciones-publicidad':'<i class="far fa-comment-dots fa-2x"></i><br>',

                /*Print Web*/
                'printweb-titulo':'Print & Web',
                'printweb-btn-descargaGuia':'',

                /*Sistema Tipográfico*/
                'sistemaTipografico-titulo':'',
                'sistemaTipografico-variantes':'',
                'sistemaTipografico-subtituloA-1':'',
                'sistemaTipografico-subtituloA-2':'',
                'sistemaTipografico-descripcionText':'',
                'sistemaTipografico-subtituloB-1':'',
                'sistemaTipografico-subtituloB-2':'',
                'sistemaTipografico-descripcionDisplay':'',

                /*Descargas*/
                'descargas-titulo':'',
                'descargas-setGeneral-titulo':'',
                'descargas-setGeneral-contenido':'<span></span><br>',
                'descargas-setGeneral-btnDescarga':'<span></span><i class="fas fa-download"></i>',
                'descargas-setEditorial-titulo':'',
                'descargas-setEditorial-contenido':'<span></span><br>',
                'descargas-setEditorial-btnDescarga':'<span></span><i class="fas fa-download"></i>',
                'descargas-setWeb-titulo':'',
                'descargas-setWeb-contenido':'<span></span><br>eot / otf / sgv / ttf / woff / woff2',
                'descargas-setWeb-btnDescarga':'<span></span><i class="fas fa-download"></i>',
                'descargas-MUsuario-titulo':'',
                'descargas-btnDescarga':'<span></span><i class="fas fa-download"></i>',
                'descargas-InfoAct-titulo':'',
                'descargas-folleto-titulo':'',
                'descargas-frase':''

 

    		},
    		'es':{
    			/*Menu*/
                'menu_conoceIndivisa':'Conoce Indivisa',
                'menu_aplicaciones': 'Aplicaciones',
                'menu_descarga':'Descarga',
                'menu_en':'en',
                'menu_es':'es',
                'menu_fr':'fr',
                'menu_pt':'pt',

                /*inicio*/
                'inicio-frase1':'La identidad se construye<br><span>- cuando existe una voz única.</span>',
                'inicio-frase2-1':'Una sola voz para la',
                'inicio-frase2-2':'comunidad lasallista global',
                'inicio-frase3':'En un mundo diverso, nuestra tipografía es un elemento unificador que nos permite reconocernos como parte de una gran familia, y al mismo tiempo, celebrar la diversidad.',

                /*Tipografía para todos*/
                'paraTodos-titulo':'Tipografía<br><span>para todos</span>',
                'paraTodos-titulo-p1':'Gratuita y de libre acceso',
                'paraTodos-p2':'La Salle impacta la vida de 3, 423, 465 de personas en todo el mundo. La riqueza de lenguas y culturas que convergen en esta obra, está representada en cada trazo, reflejando nuestra personalidad, tradición y prestigio.',

                /*Aplicaciones*/
                'paraTodos-titulo':'Tipografía<br><span>para todo</span>',
                'paraTodos-p1':'25,000 glifos para 270 idiomas del alfabeto latino',
                'paraTodos-p2':'Con dos familias tipográficas, Indivisa es funcional y práctica.',
                'paraTodos-p3':'Mayúsculas, versalitas, superiores, ligaduras, cifras matemáticas, diacríticos, editoriales, etc., agregan una personalidad única a folletos, redes sociales o publicidad.',
                'aplicaciones-branding':'<i class="fas fa-eye fa-2x"></i><br>Branding',
                'aplicaciones-publicaciones':'<i class="fab fa-leanpub fa-2x"></i><br>Publicaciones',
                'aplicaciones-administrativo':'<i class="far fa-file-alt fa-2x"></i><br>Administrativo',
                'aplicaciones-publicidad':'<i class="far fa-comment-dots fa-2x"></i><br>Publicidad',

                /*Print Web*/
                'printweb-titulo':'Print & Web',
                'printweb-btn-descargaGuia':'Descargar guía',

                /*Sistema Tipográfico*/
                'sistemaTipografico-titulo':'Sistema tipográfico',
                'sistemaTipografico-variantes':'28 variantes tipográficas.',
                'sistemaTipografico-subtituloA-1':'Tipografías para',
                'sistemaTipografico-subtituloA-2':'lectura',
                'sistemaTipografico-descripcionText':'Proporciones y grosores ideales para lecturas inmersivas o fragmentarias, impresos o en web. Repertorio de caracteres adecuado para uso editorial.',
                'sistemaTipografico-subtituloB-1':'Tipografías para',
                'sistemaTipografico-subtituloB-2':'textos de impacto',
                'sistemaTipografico-descripcionDisplay':'Contrastante y expresiva, es ideal para comunicar mensajes de la marca en materiales publicitarios o de branding.',

                /*Descargas*/
                'descargas-titulo':'Descargas',
                'descargas-setGeneral-titulo':'Set general',
                'descargas-setGeneral-contenido':'<span>16 variantes</span><br>Administrativos, estudiantes y comunidad en general.',
                'descargas-setGeneral-btnDescarga':'<span>Descarga</span><i class="fas fa-download"></i>',
                'descargas-setEditorial-titulo':'Set editorial',
                'descargas-setEditorial-contenido':'<span>28 variantes</span><br>Áreas de diseño, comunicación, editorial, programación.',
                'descargas-setEditorial-btnDescarga':'<span>Descarga</span><i class="fas fa-download"></i>',
                'descargas-setWeb-titulo':'Set para aplicaciones Web',
                'descargas-setWeb-contenido':'<span>28 variantes</span><br>eot / otf / sgv / ttf / woff / woff2',
                'descargas-setWeb-btnDescarga':'<span>Descarga</span><i class="fas fa-download"></i>',
                'descargas-MUsuario-titulo':'Manual de usuario',
                'descargas-btnDescarga':'<span>Descarga</span><i class="fas fa-download"></i>',
                'descargas-InfoAct-titulo':'Información de actualizaciones',
                'descargas-folleto-titulo':'Folleto',
                'descargas-frase':'A 300 años de la Pascua de San Juan Bautista De La Salle, la tipografía Indivisa representa la expresión permanente de quiénes somos y quiénes aspiramos a ser.'
                


    		},
            'fr' :{
                /*General*/

                /*Menu*/
                'menu_conoceIndivisa':'Savoir Indivisa',
                'menu_aplicaciones': 'Implémentations',
                'menu_descarga':'Télécharger',
                'menu_en':'en',
                'menu_es':'sp',
                'menu_fr':'fr',
                'menu_pt':'pt',

                /*inicio*/
                'inicio-frase1':'<br><span>- </span>',
                'inicio-frase2-1':'',
                'inicio-frase2-2':'',
                'inicio-frase3':'',

                /*Tipografía para todos*/
                'paraTodo-titulo':'<br><span></span>',
                'paraTodo-p1':'',
                'paraTodo-p2':'',

                /*Aplicaciones*/
                'paraTodos-titulo':'<br><span></span>',
                'paraTodos-p1':'',
                'paraTodos-p2':'',
                'paraTodos-p3':'',
                'aplicaciones-branding':'<i class="fas fa-eye fa-2x"></i><br>',
                'aplicaciones-publicaciones':'<i class="fab fa-leanpub fa-2x"></i><br>',
                'aplicaciones-administrativo':'<i class="far fa-file-alt fa-2x"></i><br>',
                'aplicaciones-publicidad':'<i class="far fa-comment-dots fa-2x"></i><br>',

                /*Print Web*/
                'printweb-titulo':'',
                'printweb-btn-descargaGuia':'',

                /*Sistema Tipográfico*/
                'sistemaTipografico-titulo':'',
                'sistemaTipografico-variantes':'',
                'sistemaTipografico-subtituloA-1':'',
                'sistemaTipografico-subtituloA-2':'',
                'sistemaTipografico-descripcionText':'',
                'sistemaTipografico-subtituloB-1':'',
                'sistemaTipografico-subtituloB-2':'',
                'sistemaTipografico-descripcionDisplay':'',

                /*Descargas*/
                'descargas-titulo':'',
                'descargas-setGeneral-titulo':'',
                'descargas-setGeneral-contenido':'<span></span><br>',
                'descargas-setGeneral-btnDescarga':'<span></span><i class="fas fa-download"></i>',
                'descargas-setEditorial-titulo':'',
                'descargas-setEditorial-contenido':'<span></span><br>',
                'descargas-setEditorial-btnDescarga':'<span></span><i class="fas fa-download"></i>',
                'descargas-setWeb-titulo':'',
                'descargas-setWeb-contenido':'<span></span><br>eot / otf / sgv / ttf / woff / woff2',
                'descargas-setWeb-btnDescarga':'<span></span><i class="fas fa-download"></i>',
                'descargas-MUsuario-titulo':'',
                'descargas-btnDescarga':'<span></span><i class="fas fa-download"></i>',
                'descargas-InfoAct-titulo':'',
                'descargas-folleto-titulo':'',
                'descargas-frase':''


            },
            'pt' :{
                /*General*/

                /*Menu*/
                'menu_conoceIndivisa':'Conheça a Indivisa',
                'menu_aplicaciones': 'Implementações',
                'menu_descarga':'Baixar',
                'menu_en':'en',
                'menu_es':'sp',
                'menu_fr':'fr',
                'menu_pt':'pt',

                /*inicio*/
                'inicio-frase1':'<br><span>- </span>',
                'inicio-frase2-1':'',
                'inicio-frase2-2':'',
                'inicio-frase3':'',

                /*Tipografía para todos*/
                'paraTodo-titulo':'<br><span></span>',
                'paraTodo-p1':'',
                'paraTodo-p2':'',

                /*Aplicaciones*/
                'paraTodos-titulo':'<br><span></span>',
                'paraTodos-p1':'',
                'paraTodos-p2':'',
                'paraTodos-p3':'',
                'aplicaciones-branding':'<i class="fas fa-eye fa-2x"></i><br>',
                'aplicaciones-publicaciones':'<i class="fab fa-leanpub fa-2x"></i><br>',
                'aplicaciones-administrativo':'<i class="far fa-file-alt fa-2x"></i><br>',
                'aplicaciones-publicidad':'<i class="far fa-comment-dots fa-2x"></i><br>',

                /*Print Web*/
                'printweb-titulo':'',
                'printweb-btn-descargaGuia':'',

                /*Sistema Tipográfico*/
                'sistemaTipografico-titulo':'',
                'sistemaTipografico-variantes':'',
                'sistemaTipografico-subtituloA-1':'',
                'sistemaTipografico-subtituloA-2':'',
                'sistemaTipografico-descripcionText':'',
                'sistemaTipografico-subtituloB-1':'',
                'sistemaTipografico-subtituloB-2':'',
                'sistemaTipografico-descripcionDisplay':'',

                /*Descargas*/
                'descargas-titulo':'',
                'descargas-setGeneral-titulo':'',
                'descargas-setGeneral-contenido':'<span></span><br>',
                'descargas-setGeneral-btnDescarga':'<span></span><i class="fas fa-download"></i>',
                'descargas-setEditorial-titulo':'',
                'descargas-setEditorial-contenido':'<span></span><br>',
                'descargas-setEditorial-btnDescarga':'<span></span><i class="fas fa-download"></i>',
                'descargas-setWeb-titulo':'',
                'descargas-setWeb-contenido':'<span></span><br>eot / otf / sgv / ttf / woff / woff2',
                'descargas-setWeb-btnDescarga':'<span></span><i class="fas fa-download"></i>',
                'descargas-MUsuario-titulo':'',
                'descargas-btnDescarga':'<span></span><i class="fas fa-download"></i>',
                'descargas-InfoAct-titulo':'',
                'descargas-folleto-titulo':'',
                'descargas-frase':''


            }
    	};
        var lang = 'en';
        /*Cambiar textos*/
        $('.lang').each(function(index, element){
                $(this).html(arrLang[lang][$(this).attr('key')]);
        });
    	$(function(){

    		$('.translate').click(function(){
    			var lang = $(this).attr('id');
                /*Cambiar textos*/
    			$('.lang').each(function(index, element){
	    			$(this).html(arrLang[lang][$(this).attr('key')]);
	    		});
                /*Cambiar descargables*/
                $('.descargable').each(function(index, element){
                    $(this).attr("href",arrLang[lang][$(this).attr('key')]);
                });
                /*Cambiar place holder*/
                $('.placeForm').each(function(index, element){
                    $(this).attr("placeholder",arrLang[lang][$(this).attr('key')]);
                });

                /*Cambiar logo*/
                $('.logo').each(function(index, element){
                    $(this).attr("src",arrLang[lang][$(this).attr('key')]);
                });

    		});
    	});
});