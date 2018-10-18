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
                'paraTodos-titulo':'<br><span></span>',
                'paraTodos-p1':'',
                'paraTodos-p2':'',

                /*Aplicaciones*/
                'paraTodo-titulo':'<br><span></span>',
                'paraTodo-p1':'',
                'paraTodo-p2':'',
                'paraTodo-p3':'',
                'aplicaciones-branding':'<i class="fas fa-eye fa-2x"></i><br>Branding',
                'aplicaciones-publicaciones':'<i class="fab fa-leanpub fa-2x"></i><br>',
                'aplicaciones-administrativo':'<i class="far fa-file-alt fa-2x"></i><br>',
                'aplicaciones-publicidad':'<i class="far fa-comment-dots fa-2x"></i><br>',

                /*Print Web*/
                'printweb-titulo':'Print & Web',
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
                'eula-p10':'In no case shall the LA SALLE A.C. university be liable for indirect, incidental, consequential, special or exemplary damages (including, but not limited to, damages for loss or benefits, information savings, or business interruption) by virtue of any cause of action arising from the use or the inability to use the software. If the copy of the software is defective, it shall be replaced by a new one in a reasonable manner.'

 

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
                'paraTodo-p1':'25,000 glifos para 270 idiomas del alfabeto latino',
                'paraTodo-p2':'Con dos familias tipográficas, Indivisa es funcional y práctica.',
                'paraTodo-p3':'Mayúsculas, versalitas, superiores, ligaduras, cifras matemáticas, diacríticos, editoriales, etc., agregan una personalidad única a folletos, redes sociales o publicidad.',
                'aplicaciones-branding':'<i class="fas fa-eye fa-2x"></i><br>Branding',
                'aplicaciones-publicaciones':'<i class="fab fa-leanpub fa-2x"></i><br>Publicaciones',
                'aplicaciones-administrativo':'<i class="far fa-file-alt fa-2x"></i><br>Administrativo',
                'aplicaciones-publicidad':'<i class="far fa-comment-dots fa-2x"></i><br>Publicidad',

                /*Print Web*/
                'printweb-titulo':'Print & Web',
                'printweb-btn-descargaGuia':'<span>Descargar guía </span><i class="fas fa-download"></i>',

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
                'eula-p10':'En ningún caso la universidad la salle a.c. será responsable por daños indirectos, incidentales, consecuentes, especiales o ejemplares (incluyendo, pero no limitado a, daños por pérdida o beneficios, ahorros de información, o interrupción de negocio) en virtud de cualquier causa de acción que surja del uso o la imposibilidad de utilizar el software. Si la copia del software está defectuosa, será remplazada por una nueva dess manera razonable.'
                


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
                'paraTodo-p1':'25.000 glyphes pour 270 langues de l’alphabet latin',
                'paraTodo-p2':'Avec ses deux familles de polices de caractères, Indivisa est pratique et fonctionnelle.',
                'paraTodo-p3':'Majuscules, petites capitales, exposants, ligatures, chiffres mathématiques, diacritiques, éditoriaux donnent une personnalité unique aux brochures, réseaux sociaux et supports publicitaires.',
                'aplicaciones-branding':'<i class="fas fa-eye fa-2x"></i><br>Labels',
                'aplicaciones-publicaciones':'<i class="fab fa-leanpub fa-2x"></i><br>Publications',
                'aplicaciones-administrativo':'<i class="far fa-file-alt fa-2x"></i><br>Documents administratifs',
                'aplicaciones-publicidad':'<i class="far fa-comment-dots fa-2x"></i><br>Publicité',

                /*Print Web*/
                'printweb-titulo':'Impression & Web',
                'printweb-btn-descargaGuia':'<span>Télécharger le guide</span><i class="fas fa-download"></i>',

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
                'eula-p10':'L’universidad la salle a.c. ne sera en aucun cas tenue pour responsable des dommages indirects, incidents, consécutifs, spéciaux ou punitifs (y compris, mais sans s’y limiter, les dommages et intérêts sur les pertes ou bénéfices, les économies d’information ou l’interruption des activités) causés par l’utilisation du Logiciel ou l’impossibilité de l’utiliser. Si la copie du Logiciel s’avère défectueuse, elle sera raisonnablement remplacée par une nouvelle copie.'


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
        var lang = 'es';
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

                /*Cambiar Metas*/
                switch(lang) {
                    case 'es':
                        $('meta[name=description]').attr('content', 'Una sola “voz” para todos, para todo. Tipografía oficial de La Salle en el mundo: 5 continentes, 80 países, 1 millón de estudiantes.');
                        $('meta[property=og\\:title]').attr('content', 'Indivisa Font: Tipografía La Salle.  Diseño| Marca | Comunicación');
                        break;
                    case 'fr':
                        $('meta[name=description]').attr('content', 'Une seule “voix” pour tous, pour tout. Typographie officielle de La Salle dans le monde : 5 continents, 80 pays, 1 million d’étudiants.');
                        $('meta[property=og\\:title]').attr('content', 'Indivisa Font: Typographie La Salle.  Design| Marque | Communication');
                        break;
                    case 'en':
                        $('meta[name=description]').attr('content', '');
                        break;
                    case 'pt':
                        $('meta[name=description]').attr('content', '');
                        break;
                    default:
                        $('meta[name=description]').attr('content', 'Una sola “voz” para todos, para todo. Tipografía oficial de La Salle en el mundo: 5 continentes, 80 países, 1 millón de estudiantes.');
                }

    		});
    	});
});