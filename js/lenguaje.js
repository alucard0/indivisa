 jQuery(function($){
    	var arrLang ={
    		'en' :{
    			/*General*/
				
    			/*Menu*/
    			'menu_conoceIndivisa':'About Indivisa',
    			'menu_aplicaciones': 'Features',
                'menu_descarga':'Download',
                'menu_en':'en',
                'menu_es':'sp',
                'menu_fr':'fr',
                'menu_pt':'pt',
                
                /*inicio*/
                'inicio-frase1':'When a unique voice exists<br><span>- identity is built.</span>',
                'inicio-frase2-1':'A single voice for the',
                'inicio-frase2-2':'global Lasallian community',
                'inicio-frase3':'In a diverse world, our font is a unifying element that allows us to recognize ourselves as part of a large family, and at the same time, to celebrate diversity.',

                /*Tipografía para todos*/
                'paraTodos-titulo':'Typography<br><span>for everyone</span>',
                'paraTodos-p1':'Free and open access',
                'paraTodos-p2':'La Salle impacts the lives of 3, 423, 465 people around the world. The richness of the languages and cultures that converge in this work is represented in each stroke, reflecting our personality, tradition and prestige.',

                /*Aplicaciones*/
                'paraTodo-titulo':'Typography<br><span>for everything</span>',
                'paraTodo-p1':'25,000 glyphs<br> <span>for</span> 270 languages<br> <span class="alfabeto">of the Latin alphabet</span>',
                'paraTodo-p2':'With two font families,<br> Indivisa is functional and practical.',
                'paraTodo-p3':'<span>Capital letters, small caps, superiors, ligatures,<br> mathematical figures, diacritics, editorial design, etc.,</span><br> add a unique personality<br> to brochures, social networks or advertising. ',
                'aplicaciones-branding':'Corporate identity',
                'aplicaciones-branding-descripcion':'Corporate stationery, institutional communiqué, corporate events, engagement campaigns',
                'aplicaciones-publicaciones':'Publications',
                'aplicaciones-publicaciones-descripcion':'Brochures, books, magazines, newspapers, manuals, essays, theses, gazettes',
                'aplicaciones-administrativo':'Administrative',
                'aplicaciones-administrativo-descripcion':'Presentations, letters, reports, circulars',
                'aplicaciones-publicidad':'Advertising',
                'aplicaciones-publicidad-descripcion':'Display advertising, bus shelters, posters, campaigns in social media, press insertions',

                /*Print Web*/
                'printweb-titulo':'Print & Web',
                'printweb-btn-descargaGuia':'<span>Download</span><i class="fas fa-download"></i>',
                'printweb-descargable-guia':'descargables/GUIDE-PRINT-WEB_EN.pdf',

                /*Sistema Tipográfico*/
                'sistemaTipografico-titulo':'Font system',
                'sistemaTipografico-variantes':'28 font variants.',
                'sistemaTipografico-subtituloA-1':'Font for ',
                'sistemaTipografico-subtituloA-2':'reading',
                'sistemaTipografico-descripcionText':'Proportions and thicknesses ideal for immersive or fragmentary readings, printed or on the web. Repertory of characters suitable for editorial use.',
                'sistemaTipografico-subtituloB-1':'Fonts for ',
                'sistemaTipografico-subtituloB-2':'impact texts',
                'sistemaTipografico-descripcionDisplay':'Contrasting and expressive, it is ideal for communicating brand messages in advertising or branding materials.',

                /*Descargas*/
                'descargas-titulo':'Download',
                'descargas-setGeneral-titulo':'General set',
                'descargas-setGeneral-contenido':'<span>16 variants</span><br>Administrators, students and community in general.',
                'descargas-setGeneral-btnDescarga':'<span>Download</span><i class="fas fa-download"></i>',
                'descargas-setEditorial-titulo':'Editorial set',
                'descargas-setEditorial-contenido':'<span>28 variants</span><br>Design, communication, editorial, and programming areas. ',
                'descargas-setEditorial-btnDescarga':'<span>Download</span><i class="fas fa-download"></i>',
                'descargas-setWeb-titulo':'Web applications set',
                'descargas-setWeb-contenido':'<span>28 variants</span><br>eot / otf / sgv / ttf / woff / woff2',
                'descargas-setWeb-btnDescarga':'<span>Download</span><i class="fas fa-download"></i>',
                'descargas-MUsuario-titulo':'User manual',
                'descargaManual':'descargables/Indivisa_Manual_English.pdf',
                'descargas-btnDescarga':'<span>Download</span><i class="fas fa-download"></i>',
                'descargas-InfoAct-titulo':'Update information',
                'descargas-folleto-titulo':'Brochure',
                'descargas-frase':'Three hundred years after the Easter of St. John Baptist de la Salle, Indivisa font represents the permanent expression of who we are and who we aspire to be.',
                'eula-titulo':'End user license agreement (EULA)',
                'eula-intro':'By accessing, installing or using the font family software you agree to the terms hereof stablished.',
                'eula-p1':'This is a legal agreement between the LA SALLE A.C. university and the person with available access to the text font(s) or who is the end user or licensee (you). You hereby agree to be subject to the terms of this agreement by downloading, installing, copying or any means of access to the text font. If you do not agree with the terms of this license, do not install, distribute or use the font by any means.',
                'eula-p2':'When accepting all of the conditions hereof stablished, the LA SALLE A.C. university agrees to grant a revocable, non-exclusive, non-transferable license to install and use the font software for all the computers used exclusively for activities, projects, advertising, works, designs, and any type of item of the LA SALLE A.C. university. The commercialization of the font software or its use for personal or commercial projects that are not related to the university is not permitted. <br>If your purpose is to use the font software in any way that is not explicitly allowed in this agreement or you are not sure if that use is not allowed, please contact the LA SALLE A.C. university. The lack of contact with the LA SALLE A.C. university for the approval of that use, or the lack of a specific prohibition in this agreement, shall not be interpreted as a waiver of this agreement or on the contrary, as the authorization of use.',
                'eula-p3':'The license granted to you under this agreement includes the use of the font software by the members of the LA SALLE A.C. university and for external use by suppliers. The members include employees, administrators, directors, agents, service providers, personnel with shared agreements, subcontractors and / or persons authorized by the LA SALLE A.C. university. You must ensure that people who use the software through the font, comply with the terms of this agreement. If you are a design, advertising or similar agency, you must also comply with the terms of this agreement.',
                'eula-p4':'The use of font software with @ font-face, Cufón or any other typographic implementation on the web is only allowed if there is an adequate protection on the server so that it cannot be downloaded directly and the corresponding formats must be requested from the LA SALLE A.C. university. No amendment to the formats is allowed without prior authorization from the LA SALLE A.C. university.',
                'eula-p5':'The license granted in this agreement allows you to install and use the software in any computer as long as its use is limited to the terms hereof stablished. This is not a commercial license, so any type of payment for its acquisition is sanctioned and must be notified to the LA SALLE A.C. university. ',
                'eula-p6':'You and the persons to whom you share the font with shall never: (a) sell, license, sub-license, assign, rent, lend or transfer the software or its rights of use to any third party; (b) copy, adapt, modify, alter, decompile, disassemble or otherwise, or create works that derive from the font software in whole or in part, or allow another person to do so or make use, by any means, of the typography; (c) use the software in any way that violates the agreement or any applicable law or regulatory requirement (including export laws) at any place of use; (d) the use of the font(s) to create or distribute any electronic document, graphic or other material in which the software is included, or part of it, in a mode or format that allows editing, modification, improvement, amendments, or software extraction.',
                'eula-p7':'Only if necessary, a copy of the font software can be given to a printing or production service to prepare documents, as long as the licensee makes sure to share this license and ideally, to destroy all of the copies once the work is completed. However, you must ensure that, if possible, the transmission of the software is in PDF format. ',
                'eula-p8':'The LA SALLE A.C. university possesses the exclusive rights of the software and is legally protected by the corresponding institutions. You agree that the university possesses all the physical rights of use and distribution (without limitation) and ENIGMA DISEÑO, the copyright. You also agree that the LA SALLE A.C. university holds the exclusive rights of the trademarks (registered or unregistered) associated with the font software and it is not permitted to modify said brands in any way without prior written consent.',
                'eula-p9':'You agree not to create derivative works or works based on the design incorporated in the font software. Except for what is authorized in this document, the concessionaire undertakes not to copy any written material, which may accompany the software or the software itself.',
                'eula-p10':'In no case shall the LA SALLE A.C. university be liable for indirect, incidental, consequential, special or exemplary damages (including, but not limited to, damages for loss or benefits, information savings, or business interruption) by virtue of any cause of action arising from the use or the inability to use the software. If the copy of the software is defective, it shall be replaced by a new one in a reasonable manner.',
                
                /*Instagram*/
                'instagram-titilo-p1':'¡Indivisa<span>font</span>',
                'instagram-titilo-p2':'in the world',
                'instagram-subtitilo':'Do you have a lot of people in all your proyectos?<br>Share your creations on instagram!',

                /*Footer*/
                'footer-contacto':'Contact',
                'footer-reportaFalla':'Report faults in typography',
                'footer-terminos':'Terms and Conditions',
                'footer-privacidad':'Privacy policy',
                'footer-derechos':'All Rights Reserved. La Salle University Mexico 2018',
                'footer-cookies-p1':'This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies.',
                'footer-cookies-p2':'Review our cookies information for more details.',

                /*Conoce Inidivisa*/
                /*Inicio Conoce*/
                'inicio-tituloConoce':'The Font System of the<br> Lasallian community',
                'inicio-subtitulo':'Indivisa Manent<br><span class="textoAmarillo">(permanently indivisible)<span>',
                'inicioConoce-descripcion':'With a careful balance between functionality and personality, the font system covers all the needs of institutional communication through a graphic voice of human and ecumenical character, where the Lasallian spirit converges in a context of contemporary use.',
                
                /*Sistema tipografico Conoce*/
                'sistemaConoce-subtitulo':'A font with<br> a Lasallian spirit',
                'sistemaConoce-frase':'Typography is unique; it should reflect who we are, what we think, what we do and what we long for.',
                'sistemaConoce-progresista':'Progressive',
                'sistemaConoce-amigable':'Friendly',
                'sistemaConoce-humana':'Human',
                'sistemaConoce-cercana':'Approchable',
                'sistemaConoce-integral':'Integral',
                'sistemaConoce-versatil':'Versatile',
                'sistemaConoce-expresiva':'Expressive',
                'sistemaConoce-dinamica':'Dynamic',
                'sistemaConoce-formal':'Formal and Juvenile',
                'sistemaConoce-proceso':'Process',
                'sistemaConoce-descripcion':'The letters were designed to convey both the human and disciplined spirit, as well as the Lasallian fraternity.',
                'conoceIndivisa-g':'images/contenido/conoceIndivisa/G-EN.png',

                /*Familias y extensiones*/
                'familiasyExtensiones-titulo':'Families and extensions',
                'familiasyExtensiones-subtitulo':'Designed to endure the great editorial, digital and printed complexity that our institutions require.',
                'familiasyExtensiones-subtitulo-p1':'Functional and versatile, it is readable in small sizes, and powerful to to build distinctive messages.',

                /*Rasgos distitinvos*/
                'rasgosDistintivos-titulo':'Features',

                /*Multilingüístico*/
                'multilinguistico-titulo':'Multilingual',
                'multilinguistico-subtitulo':'A System that represents the Lasallian identity globally',
                'multilinguistico-idiomas':'270 languages<br><span>of the Latin alphabet</span>',
                'multilinguistico-glifos':'25,000 glyphs',
                'multilinguistico-variantes':'28 variants<br><span>16 Indivisa text variants</span><br><span>12 Indivisa display variants</span>'

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
                'paraTodo-titulo':'Tipografía<br><span>para todo</span>',
                'paraTodo-p1':'25,000 glifos<br> <span>para</span> 270 idiomas<br> <span class="alfabeto">del alfabeto latino</span>',
                'paraTodo-p2':'Con dos familias tipográficas,<br>Indivisa es funcional y práctica.',
                'paraTodo-p3':'<span>Mayúsculas, versalitas, superiores, ligaduras,<br> cifras matemáticas, diacríticos, editoriales, etc.,</span><br> agregan una personalidad única<br> a folletos, redes sociales o publicidad.',
                'aplicaciones-branding':'Identidad corporativa',
                'aplicaciones-branding-descripcion':'Papelería corporativa, comunicados, eventos corporativos, campañas de pertenencia, campañas internas',
                'aplicaciones-publicaciones':'Publicaciones',
                'aplicaciones-publicaciones-descripcion':'Folletería, libros, revistas, periódicos, manuales, ensayos, tesis, gacetas',
                'aplicaciones-administrativo':'Administrativo',
                'aplicaciones-administrativo-descripcion':'Presentaciones, cartas, reportes, circulares',
                'aplicaciones-publicidad':'Publicidad',
                'aplicaciones-publicidad-descripcion':'Espectacular, parabuses, lonas, posters, campañas en redes sociales, inserciones de prensa',

                /*Print Web*/
                'printweb-titulo':'Print & Web',
                'printweb-btn-descargaGuia':'<span>Descarga</span><i class="fas fa-download"></i>',
                'printweb-descargable-guia':'descargables/GUIA-PRINT-WEB_ES.pdf',

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
                'descargaManual':'descargables/Indivisa_Manual_Espanol.pdf',
                'descargas-btnDescarga':'<span>Descarga</span><i class="fas fa-download"></i>',
                'descargas-InfoAct-titulo':'Información de actualizaciones',
                'descargas-folleto-titulo':'Folleto',
                'descargas-frase':'A 300 años de la Pascua de San Juan Bautista De La Salle, la tipografía Indivisa representa la expresión permanente de quiénes somos y quiénes aspiramos a ser.',
                'eula-titulo':'End user license agreement (EULA)',
                'eula-intro':'Usted acepta los términos de este acuerdo mediante el acceso, la instalación o el uso del software de la familia tipográfica.',
                'eula-p1':'Este es un acuerdo legal entre la universidad la salle a.c. y la persona que tenga disponible la(s) fuente(s) tipográfica(s) o que sea el usuario final o licenciatario (usted). Usted acepta que quedará vinculado por los términos de este acuerdo mediante la descarga, instalación, copia o cualquier medio de acceso a la fuente tipográfica. Si no está de acuerdo con los términos de esta licencia, no instale, distribuya o utilice por ningún medio la fuente.',
                'eula-p2':'Al aceptar usted todas las condiciones, la universidad la salle a.c. está de acuerdo con concederle una licencia de uso revocable, no exclusiva, no transferible para instalar y utilizar el software tipográfico todas las computadoras necesarias para uso relacionado exclusivamente con actividades, proyectos, publicidad, trabajos, diseños, y cualquier tipo de piezas de la universidad la salle a.c. No está permitida la comercialización del software tipográfico ni su uso en proyectos personales o comerciales que no tengan relación con la universidad la salle a.c.<br>Si su propósito es utilizar el software tipográfico de algún modo que no esté explícitamente permitido en este acuerdo o no está seguro si ese uso no está permitido, por favor contacte a la universidad la salle a.c. La falta de contacto con la universidad la salle a.c. para la aprobación de ese uso, o la falta de una prohibición específica en este acuerdo, no deberá ser interpretada como una renuncia a este acuerdo o por el contrario, como la autorización de uso.',
                'eula-p3':'La licencia concedida a usted bajo este acuerdo incluye el uso del software tipográfico por los miembros de la universidad la salle a.c. y para uso exterior por parte de proveedores. Los miembros incluyen empleados, administrativos, directores, agentes, proveedores de servicios, personal con convenios, subcontratistas y/o las personas autorizadas por la universidad la salle a.c. Usted debe procurar que las personas que usen el software tipográfico por medio de su fuente, cumplan con los términos de este acuerdo. Si usted es una agencia de diseño, publicidad o similar debe también cumplir con los afectos de este acuerdo.',
                'eula-p4':'El uso del software tipográfico con @font-face, Cufón o cualquier otro tipo de implementación tipográfica en web solo está permitida si existe la protección debida en el servidor para que no pueda ser descargada directamente y se tendrán que solicitar los formatos correspondientes a la universidad la salle a.c. No está permitido ningún tipo de conversión en los formatos sin previa autorización de la universidad la salle a.c.',
                'eula-p5':'La licencia concedida en el presente acuerdo le permite instalar y utilizar el software en cualquier computadora siempre y cuando su uso se limite a los especificados en este acuerdo. La licencia no es comercial por lo que cualquier tipo de pago por su adquisición está sancionado y deberá ser notificado a la universidad la salle a.c.',
                'eula-p6':'Usted y las personas a quien usted comparta la fuente no deben en ningún momento: (a) vender, licenciar, sub-licenciar, ceder, alquilar, prestar o transferir el software o su derecho de uso a ningún tercero; (b) copiar, adaptar, modificar, alterar, descompilar, desmontar o al contrario, ni crear trabajos que se deriven del software de fuentes en su totalidad o en parte, o permitir que otra persona lo haga, ni hacer uso, por cualquier medio de la tipografía; (c) utilizar el software en cualquier forma que se incumpla el acuerdo o cualquier ley aplicable o requisito reglamentario (incluyendo las leyes de exportación) en cualquier lugar de uso; (d) el uso de la(s) fuente(s) para crear o distribuir cualquier documento electrónico, material gráfico o de otro tipo en el que se incluya el software, o parte de él, de una manera o formato que permita la edición, modificación, mejoras, modificaciones, o la extracción de software.',
                'eula-p7':'Si es absolutamente necesario, se puede dar una copia del software tipográfico a una imprenta o servicio de producción para preparar documentos, siempre y cuando el licenciatario se asegure de compartir esta licencia e idealmente que todas las copias del software se destruyan una vez completado el trabajo. No obstante, usted debe asegurarse que en medida de lo posible, dicha transmisión del software sea por medio de un pdf.',
                'eula-p8':'El software es propiedad exclusiva de la universidad la salle a.c. y está protegido legalmente por las instituciones correspondientes. Usted acepta que la universidad la salle a.c. posee todos los derechos físicos de uso y distribución (sin limitación) y enigma diseño los derechos morales de autor e intelectuales. También acepta que las marcas comerciales (registradas o no registradas) asociadas con el software tipográfico son propiedad exclusiva de la universidad la salle a.c. y no está permitido modificar dichas marcas de ninguna manera sin el consentimiento previo por escrito.',
                'eula-p9':'Usted se compromete a no crear trabajos derivados o basados en el diseño incorporado en el software tipográfico. A excepción de lo permitido en este documento, el concesionario se compromete a no copiar ningún material escrito, que puede acompañar al software o al software en sí.',
                'eula-p10':'En ningún caso la universidad la salle a.c. será responsable por daños indirectos, incidentales, consecuentes, especiales o ejemplares (incluyendo, pero no limitado a, daños por pérdida o beneficios, ahorros de información, o interrupción de negocio) en virtud de cualquier causa de acción que surja del uso o la imposibilidad de utilizar el software. Si la copia del software está defectuosa, será remplazada por una nueva dess manera razonable.',

                /*Instagram*/
                'instagram-titilo-p1':'¡Indivisa<span>font</span>',
                'instagram-titilo-p2':'en el mundo!',
                'instagram-subtitilo':'¿Ya aplicaste indivisafont en tus proyectos?<br>Comparte tus artes en instagram!',

                /*Footer*/
                'footer-contacto':'Contacto',
                'footer-reportaFalla':'Reporta fallas en la tipografía',
                'footer-terminos':'Términos y condiciones',
                'footer-privacidad':'Aviso de privacidad',
                'footer-derechos':'Todos los derechos Reservados  Univeresidad La Salle México 2018',
                'footer-cookies-p1':'Este sitio utiliza cookies. Al continuar navegando por el sitio, usted acepta nuestro uso de cookies.',
                'footer-cookies-p2':'Revisa nuestra información de cookies para más detalles.',

                /*Conoce Inidivisa*/
                /*Inicio Conoce*/
                'inicio-tituloConoce':'Una voz gráfica que dará<br>consistencia a nuestra identidad',
                'inicio-subtitulo':'Indivisa Manent<br><span class="textoAmarillo">(lo unido permanece)<span>',
                'inicioConoce-descripcion':'Con un cuidado balance entre funcionalidad y personalidad, el sistema tipográfico cubre todas las necesidades de comunicación institucional mediante una voz gráfica de carácter humano y ecuménico, donde converge el espíritu lasallista en un contexto de uso contemporáneo.',

                /*Sistema tipografico Conoce*/
                'sistemaConoce-subtitulo':'Tipografía con<br>espíritu lasallista',
                'sistemaConoce-frase':'La tipografía es única y debe reflejar lo que somos, pensamos, hacemos y anhelamos.',
                'sistemaConoce-progresista':'Progresista',
                'sistemaConoce-amigable':'Amigable',
                'sistemaConoce-humana':'Humana',
                'sistemaConoce-cercana':'Cercana',
                'sistemaConoce-integral':'Integral',
                'sistemaConoce-versatil':'Versátil',
                'sistemaConoce-expresiva':'Expresiva',
                'sistemaConoce-dinamica':'Dinámica',
                'sistemaConoce-formal':'Formal y Juvenil',
                'sistemaConoce-proceso':'Proceso',
                'sistemaConoce-descripcion':'Las letras fueron diseñadas para transmitir tanto el espíritu humano y disciplinado, así como la fraternidad.',
                'conoceIndivisa-g':'images/contenido/conoceIndivisa/G-ESP.png',

                /*Familias y extensiones*/
                'familiasyExtensiones-titulo':'Familias y extensiones',
                'familiasyExtensiones-subtitulo':'Diseñada para cumplir con los requerimientos de comunicación escrita de la comunidad lasallista.',
                'familiasyExtensiones-subtitulo-p1':'Funcional y versátil, es legible en textos con puntajes pequeños y potente en textos grandes.',
                
                /*Rasgos distitinvos*/
                'rasgosDistintivos-titulo':'Rasgos distintivos',

                /*Multilingüístico*/
                'multilinguistico-titulo':'Multilingüístico',
                'multilinguistico-subtitulo':'Un Sistema que representa el lasallismo a nivel global',
                'multilinguistico-idiomas':'270 idiomas<br><span>con el alfabeto latino</span>',
                'multilinguistico-glifos':'25,000 glifos',
                'multilinguistico-variantes':'28 varientes<br><span>16 variantes de Indivisa Text</span><br><span>12 variantes Indivisa Display</span>'


    		},
            'fr' :{
                /*General*/

                /*Menu*/
                'menu_conoceIndivisa':'Qu’est-ce qu’Indivisa',
                'menu_aplicaciones': 'Applications',
                'menu_descarga':'Télécharger',
                'menu_en':'en',
                'menu_es':'sp',
                'menu_fr':'fr',
                'menu_pt':'pt',

                /*inicio*/
                'inicio-frase1':'L’identité se construit<br><span>- lorsqu’une seule voix se fait entendre.</span>',
                'inicio-frase2-1':'Une seule voix pour la',
                'inicio-frase2-2':'communauté lasalienne mondiale',
                'inicio-frase3':'Dans ce monde divers, notre typographie est un élément d’unification qui nous permet de nous reconnaître comme membres d’une grande famille, tout en célébrant la diversité.',

                /*Tipografía para todos*/
                'paraTodos-titulo':'Une typographie<br><span>pour tous</span>',
                'paraTodos-p1':'Gratuite et en libre accès',
                'paraTodos-p2':'Les Frères des Écoles chrétiennes influencent la vie de 3.423. 465 personnes dans le monde. La richesse des langues et des cultures réunies dans l’œuvre lasalienne est représentée dans chaque trait et reflète notre personnalité, nos traditions et notre prestige.',

                /*Aplicaciones*/
                'paraTodo-titulo':'Une typographie<br><span>pour tous</span>',
                'paraTodo-p1':'25.000 glyphes<br> <span>pour</span> 270 langues<br> <span class="alfabeto">de l’alphabet latin</span>',
                'paraTodo-p2':'Avec ses deux familles de polices de caractères,<br> Indivisa est pratique et fonctionnelle.',
                'paraTodo-p3':'<span>Majuscules, petites capitales, exposants, ligatures,<br> chiffres mathématiques, diacritiques, éditoriaux</span><br> donnent une personnalité unique<br> aux brochures, réseaux sociaux et supports publicitaires.',
                'aplicaciones-branding':'L\'identité d\'entreprise',
                'aplicaciones-branding-descripcion':'Papeterie d\'entreprise, communiqué institutionnel, événements corporatifs',
                'aplicaciones-publicaciones':'Publications',
                'aplicaciones-publicaciones-descripcion':'Brochures, livres, magazines, journaux, manuels, essais, thèses, gazettes',
                'aplicaciones-administrativo':'Documents administratifs',
                'aplicaciones-administrativo-descripcion':'Présentations, lettres, rapports, circulaires',
                'aplicaciones-publicidad':'Publicité',
                'aplicaciones-publicidad-descripcion':'Publicité display, abris de bus, affiches, campagnes dans les médias sociaux, insertions de presse',

                /*Print Web*/
                'printweb-titulo':'Impression & Web',
                'printweb-btn-descargaGuia':'<span>Téléchargement</span><i class="fas fa-download"></i>',
                'printweb-descargable-guia':'descargables/GUIDE-PRINT-WEB_FR.pdf',

                /*Sistema Tipográfico*/
                'sistemaTipografico-titulo':'Système typographique',
                'sistemaTipografico-variantes':'28 variantes typographiques',
                'sistemaTipografico-subtituloA-1':'Polices de caractères pour la',
                'sistemaTipografico-subtituloA-2':'lecture',
                'sistemaTipografico-descripcionText':'Tailles et proportions idéales pour les lectures prolongées ou fragmentaires, sur impression ou sur le web. Répertoire des polices de caractères adaptées à l’usage éditorial.',
                'sistemaTipografico-subtituloB-1':'Police pour',
                'sistemaTipografico-subtituloB-2':'textes destinés à créer un impact',
                'sistemaTipografico-descripcionDisplay':'Contrastée et expressive, elle est idéale pour faire passer des messages de la marque sur des supports publicitaires ou des labels.',

                /*Descargas*/
                'descargas-titulo':'Téléchargements',
                'descargas-setGeneral-titulo':'Set général',
                'descargas-setGeneral-contenido':'<span>16 variantes</span><br>Agents administratifs, étudiants et communauté.',
                'descargas-setGeneral-btnDescarga':'<span>Téléchargement</span><i class="fas fa-download"></i>',
                'descargas-setEditorial-titulo':'Set éditorial',
                'descargas-setEditorial-contenido':'<span>28 variantes</span><br>Design, communication, édition, programmation.',
                'descargas-setEditorial-btnDescarga':'<span>Téléchargement</span><i class="fas fa-download"></i>',
                'descargas-setWeb-titulo':'Set pour application Web ',
                'descargas-setWeb-contenido':'<span></span><br>eot / otf / sgv / ttf / woff / woff2',
                'descargas-setWeb-btnDescarga':'<span>Téléchargement</span><i class="fas fa-download"></i>',
                'descargas-MUsuario-titulo':'Manuel de l’usager',
                'descargaManual':'descargables/Indivisa_Manual_Francais.pdf',
                'descargas-btnDescarga':'<span>Téléchargement</span><i class="fas fa-download"></i>',
                'descargas-InfoAct-titulo':'Information sur les mises à jour',
                'descargas-folleto-titulo':'Brochure',
                'descargas-frase':'Trois cents ans après la Pâques de saint Jean-Baptiste de La Salle, la typographie Indivisa est l’expression permanente de qui nous sommes et de ce que nous aspirons à être.',
                'eula-titulo':'Contrat de licence pour l’utilisateur final (eula)',
                'eula-intro':'Vous acceptez les termes de ce contrat lorsque vous accédez au Logiciel de fonte, l’installez ou l’utilisez.',
                'eula-p1':'Ce contrat constitue un accord ayant force de loi entre l’universidad la salle a.c. et la personne qui dispose du (des) Caractère(s) typographique(s) qu’il contient, en détient la licence ou en est l’utilisateur final (vous). Vous acceptez d’être lié par les termes de ce contrat lorsque vous téléchargez, installez, copiez la fonte ou y accédez de quelque façon que ce soit. Si vous refusez les termes de cette licence, veuillez ne pas installer, distribuer ou utiliser ce logiciel.',
                'eula-p2':'Lorsque vous acceptez toutes les conditions de ce contrat, l’universidad la salle a.c. s’engage à vous accorder une licence d’utilisation révocable, non exclusive et non transférable pour installer et utiliser le Logiciel de fonte sur autant de postes que vous le souhaitez. Son usage est exclusivement réservé à des activités, projets, supports publicitaires, travaux, designs et autres productions de l’université la salle a.c. La commercialisation de ce logiciel et son utilisation dans des projets personnels ou commerciaux sans rapport avec l’universidad la salle a.c. sont interdites.<br>Si vous avez l’intention de faire de ce Logiciel de fonte une utilisation qui n’est pas explicitement autorisée dans ce contrat ou dont vous n’êtes pas certain(e) qu’elle le soit, vous devez contacter l’universidad la salle a.c. pour obtenir l’autorisation de cette utilisation. La non-demande d’autorisation à l’universidad la salle a.c. ou l’absence d’une interdiction spécifique dans ce contrat ne peuvent être interprétées comme un renoncement à ce contrat ou, au contraire, comme une autorisation d’utilisation.',
                'eula-p3':'La licence qui vous est accordée aux termes de ce contrat inclut l’utilisation du Logiciel par les membres de l’universidad la salle a.c. et son usage externe par des fournisseurs. Ces membres sont les employés, les cadres administratifs, les cadres dirigeants, les agents, les fournisseurs de services, le personnel sous contrat, les sous-traitants et/ou les personnes autorisées par l’universidad la salle a.c. Vous devez vous assurer que les personnes utilisant le Logiciel de fonte depuis sa source le font dans le respect des termes de ce contrat. Si vous êtes une agence de design ou de publicité ou que vous exercez une activité similaire, vous êtes également tenu(e) au respect des termes de ce contrat.',
                'eula-p4':'L’utilisation du Logiciel avec @font-face, Cufón ou tout autre type de générateur de police sur le web n’est autorisée que si le serveur est muni d’une protection adéquate contre son téléchargement direct, obligeant l’utilisateur à demander les formats correspondants à l’universidad la salle a.c. Aucune conversion dans d’autres formats n’est autorisée sans l’accord préalable de l’universidad la salle a.c.',
                'eula-p5':'La licence accordée dans ce contrat vous permet d’installer et d’utiliser le Logiciel sur n’importe quel ordinateur, dans la limite des utilisations spécifiées dans ce contrat. La licence ne revêtant pas de caractère commercial, tout paiement versé ou perçu en échange de son acquisition est passible de sanctions et doit être notifié à l’universidad la salle a.c.',
                'eula-p6':'Vous-même et les personnes avec qui vous partagez la source ne pouvez en aucun cas : (a) vendre, accorder une licence ou une sous-licence, céder, louer, prêter ou transférer le Logiciel ou son droit d’utilisation ; (b) copier, adapter, modifier, altérer, décompiler, désassembler, pratiquer la rétro-ingénierie, créer des travaux totalement ou partiellement dérivés du code source du Logiciel ou permettre à une autre personne de le faire ou de faire usage du Caractère typographique ; (c) faire du logiciel une utilisation violant les termes de ce contrat ou contrevenant à toute loi ou règlementation en vigueur (y compris les lois d’exportation), quel que soit le lieu d’utilisation ; (d) utiliser la ou les source(s) pour créer ou distribuer un document électronique, du matériel graphique ou autre dans lequel le Logiciel serait totalement ou partiellement inclus d’une façon ou sous un format permettant l’édition, la modification, l’amélioration ou l’extraction du Logiciel.',
                'eula-p7':'En cas de besoin absolu, une copie du Logiciel de fonte peut être remise à une imprimerie ou à un service de production pour préparer des documents, à condition que vous vous assuriez de partager cette licence et que toutes les copies du Logiciel soient entièrement détruites une fois les travaux achevés. Vous devez de même veiller à ce que la transmission du Logiciel soit effectuée, dans la mesure du possible, sous forme de fichier pdf.',
                'eula-p8':'Ce Logiciel est la propriété exclusive de l’universidad la salle a.c. et il est placé sous la protection juridique des institutions compétentes. Vous acceptez que  l’ universidad la salle a.c. en possède tous les droits d’utilisation et de distribution (sans limitation) ainsi que tous les droits d’auteur moraux et patrimoniaux. Vous acceptez également que les marques commerciales (déposées ou non) associées au Logiciel de fonte sont la propriété exclusive de l’universidad la salle a.c. et qu’elles ne peuvent être modifiées sans son consentement écrit préalable.',
                'eula-p9':'Vous vous engagez à ne pas créer de versions dérivées du design intégré au Logiciel de fonte ou inspirées de ce design. À l’exception de ce qui est permis dans ce document, le concessionnaire s’engage à ne pas copier le matériel écrit pouvant accompagner ce Logiciel, ni le Logiciel lui-même.',
                'eula-p10':'L’universidad la salle a.c. ne sera en aucun cas tenue pour responsable des dommages indirects, incidents, consécutifs, spéciaux ou punitifs (y compris, mais sans s’y limiter, les dommages et intérêts sur les pertes ou bénéfices, les économies d’information ou l’interruption des activités) causés par l’utilisation du Logiciel ou l’impossibilité de l’utiliser. Si la copie du Logiciel s’avère défectueuse, elle sera raisonnablement remplacée par une nouvelle copie.',

                /*Instagram*/
                'instagram-titilo-p1':'¡Indivisa<span>font</span>',
                'instagram-titilo-p2':'dans le monde',
                'instagram-subtitilo':'Avez-vous beaucoup de gens dans tous vos projets?<br> Partagez vos créations sur instagram!',

                /*Footer*/
                'footer-contacto':'Contact',
                'footer-reportaFalla':'Signaler les fautes de typographie',
                'footer-terminos':'Termes et conditions',
                'footer-privacidad':'Politique de confidentialité',
                'footer-derechos':'Tous droits réservés. Université La Salle Mexique 2018',
                'footer-cookies-p1':'Ce site utilise des cookies. En poursuivant votre navigation sur ce site, vous acceptez notre utilisation des cookies.',
                'footer-cookies-p2':'Consultez nos informations de cookies pour plus de détails.',

                /*Conoce Inidivisa*/
                /*Inicio Conoce*/
                'inicio-tituloConoce':'Indivisa Font, le système typographique<br> de la communauté lasallienne',
                'inicio-subtitulo':'Indivisa Manent<br><span class="textoAmarillo">(demeurer inséparables)<span>',
                'inicioConoce-descripcion':'Possédant un équilibre délicat entre fonctionnalité et personnalité, le système typographique répond à tous les besoins de communication institutionnellegrâce à une voix graphique à caractère humain et œcuménique, où transparaît l’esprit lasallien dans un contexte d’utilisation contemporaine.',

                /*Sistema tipografico Conoce*/
                'sistemaConoce-subtitulo':'Une typographie dans<br> l’esprit lasallien',
                'sistemaConoce-frase':'La typographie est unique et doit refléter ce que nous sommes, ce que nous pensons, ce que nous faisons et ce à quoi nous aspirons.',
                'sistemaConoce-progresista':'Progressif',
                'sistemaConoce-amigable':'Amical',
                'sistemaConoce-humana':'Humain',
                'sistemaConoce-cercana':'Proche',
                'sistemaConoce-integral':'Intégral',
                'sistemaConoce-versatil':'Polyvalent',
                'sistemaConoce-expresiva':'Expressif',
                'sistemaConoce-dinamica':'Dynamique',
                'sistemaConoce-formal':'Formel et Juvénile',
                'sistemaConoce-proceso':'Processus',
                'sistemaConoce-descripcion':'Les lettres ont été conçues pour transmettre aussi bien l’esprit humain et discipliné que la fraternité des lasalliens.',
                'conoceIndivisa-g':'images/contenido/conoceIndivisa/G-FR.png',

                /*Familias y extensiones*/
                'familiasyExtensiones-titulo':'Familles et extensions',
                'familiasyExtensiones-subtitulo':'Conçu pour supporter la grande complexité éditoriale, numérique et imprimée que nos institutions ont besoin.',
                'familiasyExtensiones-subtitulo-p1':'Fonctionnelle et adaptable, elle est lisible pour des textes à petits caractères et dégage de la puissance dans les textes à gros caractères.',

                /*Rasgos distitinvos*/
                'rasgosDistintivos-titulo':'Traits',

                /*Multilingüístico*/
                'multilinguistico-titulo':'Multilinguistique',
                'multilinguistico-subtitulo':'Un système qui représente l’esprit lasallien de toute la planète',
                'multilinguistico-idiomas':'270 langues<br><span>de l’alphabet latin</span>',
                'multilinguistico-glifos':'25,000 glyphes',
                'multilinguistico-variantes':'28 variantes typographiques<br><span>16 variantes d’indivisa text</span><br><span>12 variantes d’indivisa display</span>'


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
                'printweb-btn-descargaGuia':'<span> </span><i class="fas fa-download"></i>',

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
                'descargas-frase':'',
                'eula-titulo':'End user license agreement (EULA)',
                'eula-intro':'',
                'eula-p1':'',
                'eula-p2':'',
                'eula-p3':'',
                'eula-p4':'',
                'eula-p5':'',
                'eula-p6':'',
                'eula-p7':'',
                'eula-p8':'',
                'eula-p9':'',
                'eula-p10':''
            }
    	};
        
        
        //Primera vez que ingresa

        if(localStorage.getItem("idiomaDefault") == null)
        {
            var lang = 'es';
        }
        else//Ya hay un idioma definido
        {
            var lang = localStorage.getItem("idiomaDefault");
            //Cambiar textos
            $('.lang').each(function(index, element){
                    $(this).html(arrLang[lang][$(this).attr('key')]);
            });

            /*Cambiar descargables*/
            $('.descargable').each(function(index, element){
                $(this).attr("href",arrLang[lang][$(this).attr('keyb')]);
            });

            $(".translate").siblings().removeClass('active')
            $("#"+lang).addClass('active');

            switch(lang) {
                case 'es':
                    $('#videoHermano').attr('data-embed', 'YcjlltwSOBI');
                    $('#videoPrincipal').attr('data-embed', 'IwObzK2Z3Rc');               
                break;
                
                case 'fr':
                    $('#videoHermano').attr('data-embed', 'mu6JaeXZcns');
                    $('#videoPrincipal').attr('data-embed', '90A914_14gA');
                break;
                
                case 'en':
                    $('#videoHermano').attr('data-embed', '2HiQBBHvvkI');
                    $('#videoPrincipal').attr('data-embed', 'Gh6aYO1dQsg');
                break;

                default:
                    $('#videoHermano').attr('data-embed', 'YcjlltwSOBI');
                    $('#videoPrincipal').attr('data-embed', 'IwObzK2Z3Rc');
            }

        }
        

    	$(function(){

    		$('.translate').click(function()
            {
    			var lang = $(this).attr('id');
                /*Cambiar textos*/
    			$('.lang').each(function(index, element){
	    			$(this).html(arrLang[lang][$(this).attr('key')]);
	    		});
                /*Cambiar descargables*/
                $('.descargable').each(function(index, element){
                    $(this).attr("href",arrLang[lang][$(this).attr('keyb')]);
                });

                /*Cambiar place holder*/
                $('.placeForm').each(function(index, element){
                    $(this).attr("placeholder",arrLang[lang][$(this).attr('key')]);
                });

                /*Cambiar imagen*/
                $('.imagenIdioma').each(function(index, element){
                    $(this).attr("src",arrLang[lang][$(this).attr('key')]);
                });
                
                $(this).siblings().removeClass('active')
                $(this).addClass('active');

                /*Cambiar Metas*/
                switch(lang) {
                    case 'es':
                        $('meta[name=description]').attr('content', 'Una sola “voz” para todos, para todo. Tipografía oficial de La Salle en el mundo: 5 continentes, 80 países, 1 millón de estudiantes.');
                        $('meta[property=og\\:title]').attr('content', 'Indivisa Font: Tipografía La Salle.  Diseño| Marca | Comunicación');
                        $('meta[property=og\\:description]').attr('content', 'Indivisa Font: Una sola “voz” para todos, para todo.');
                        $('meta[name=twitter\\:title]').attr('content', 'Indivisa Font: Tipografía La Salle.  Diseño| Marca | Comunicación');
                        $('meta[name=twitter\\:description]').attr('content', 'Indivisa Font: Una sola “voz” para todos, para todo.');
                        break;
                    case 'fr':
                        $('meta[name=description]').attr('content', 'Une seule “voix” pour tous, pour tout. Typographie officielle de La Salle dans le monde : 5 continents, 80 pays, 1 million d’étudiants.');
                        $('meta[property=og\\:title]').attr('content', 'Indivisa Font: Typographie La Salle.  Design| Marque | Communication');
                        $('meta[property=og\\:description]').attr('content', 'Indivisa Font : Une seule “voix” pour tous, pour tout.');
                        $('meta[name=twitter\\:title]').attr('content', 'Indivisa Font: Typographie La Salle.  Design| Marque | Communication');
                        $('meta[name=twitter\\:description]').attr('content', 'Indivisa Font : Une seule “voix” pour tous, pour tout.');
                        break;
                    case 'en':
                        $('meta[name=description]').attr('content', 'One “voice” for everyone, for everything. La Salle oficial font in the world: 5 continents, 80 countries, 1 million students.');
                        $('meta[property=og\\:title]').attr('content', 'Indivisa Font: La Salle Font.  Design| Brand | Communication');
                        $('meta[property=og\\:description]').attr('content', 'Indivisa Font: One “voice” for everyone, for everything.');
                        $('meta[name=twitter\\:title]').attr('content', 'Indivisa Font: La Salle Font.  Design| Brand | Communication');
                        $('meta[name=twitter\\:description]').attr('content', 'Indivisa Font: One “voice” for everyone, for everything.');
                        $('#videoHermano').attr('data-embed', 'HyHNuVaZJ-k');
                        break;
                    case 'pt':
                        $('meta[name=description]').attr('content', '');
                        break;
                    default:
                        $('meta[name=description]').attr('content', 'Una sola “voz” para todos, para todo. Tipografía oficial de La Salle en el mundo: 5 continentes, 80 países, 1 millón de estudiantes.');
                        $('meta[property=og\\:title]').attr('content', 'Indivisa Font: Tipografía La Salle.  Diseño| Marca | Comunicación');
                        $('meta[property=og\\:description]').attr('content', 'Indivisa Font: Una sola “voz” para todos, para todo.');
                        $('meta[name=twitter\\:title]').attr('content', 'Indivisa Font: Tipografía La Salle.  Diseño| Marca | Comunicación');
                        $('meta[name=twitter\\:description]').attr('content', 'Indivisa Font: Una sola “voz” para todos, para todo.');
                }

                //Se asigna el idioma default
                if(typeof(Storage) !== "undefined") 
                {
                    localStorage.setItem("idiomaDefault",lang);
                    location.reload();
                    //$('#videoHermano').load('',lazyloadVideo());
                } 
                else 
                {
                    //document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
                    console.log("Sorry, your browser does not support web storage...");
                }

    		});
            /*Cambiar videos*/
            //console.log(localStorage.getItem("idiomaDefault"));
    	});
});

