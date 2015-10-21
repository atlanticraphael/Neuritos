/****************************************************************************
** Desenvolvido por: Equipe webAula						                   **
** Data modifica��o: 28/10/2004                                            **
** Contato: (31) 3273.2822			                                       **
** Objetivo: - Evitar que o carregamento de arquivos que estejam em cache  **
**           - Fazer comunica��o SCORM entre o conte�do e o LMS            **
**           - Permitir que o Flash acesse algumas vari�veis SCORM Padr�o  **
**           - Recupera valores enviados via querystring para o htm        **
*****************************************************************************/

// Identifica qual � o ID do t�pico para ser utilizado durante as fun��es de setagem de vari�veis.
var idFlash = "topico";

// Armazena a p�gina que o usu�rio parou
var pagina = 0;


/**
 * Atualiza o campo Lesson Location do banco
 * @param str - Novo valor para o campo
 */
function setLessonLocation(str) {
	var paginaAtual = str.substring(0, str.indexOf("$"));
	if( paginaAtual != $('#page').val() ){
		$('#page').val(paginaAtual);
		new APIContentController().goToPage();
	}
}


function doLMSGetValue(name)
{
   pagina = new APIContentController().getParameterByName('pagina');
   if( pagina == "" || pagina == null || pagina == undefined){
   		return "1$1;0000000000000000000000000000000";
   }else{
   	return pagina +"$1;0000000000000000000000000000000";
   }
}

/**
 * Atualiza o campo Lesson Status do banco
 * @param str - Novo valor para o campo
 */
function setLessonStatus(str) {
	doLMSSetValue('cmi.core.lesson_status', str);
	doLMSCommit();
}

/**
 * Atualiza o campo Suspend Data do banco
 * @param str - Novo valor para o campo
 */
function setSuspendData(str) {
	doLMSSetValue('cmi.suspend_data', str);
}

/**
 * Atualiza o campo Score Raw do banco
 * @param str - Novo valor para o campo
 */
function setScoreRaw(str) {
	doLMSSetValue('cmi.core.score.raw', str);
}

/**
 * Atualiza o campo Comments do banco
 * @param str - Novo valor para o campo
 */
function setComments(str) {
	doLMSSetValue('cmi.comments', str);
}

/**
 * Carrega o SWF levando as informa��es passadas no HTML
 * @param largura - Valor num�rico para a largura do SWF ou string 100% para ser redimension�vel
 * @param altura - Valor num�rico para a altura do SWF ou string 100% para ser redimension�vel
 * @param nome - Arquivo a ser carregado
 */
function carregaFlash(largura, altura, nome) {
	// var ar_querystring = new Array();
	// for(i = 3; i < arguments.length; i++) {
	// 	ar_querystring[i - 3] = "&" +  arguments[i];
	// }
	// var querystring = ar_querystring.join("");
	var querystring = "&moduloatual=1&topicoatual=1";
	// console.info(querystring);

	document.getElementById("curso").innerHTML = "<OBJECT classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' " +
														 "codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' " +
														 "WIDTH='" + largura +"' " +
														 "HEIGHT='"+ altura +"' " +
														 "id='" + idFlash + "' " +
														 "ALIGN='top'>" +
													"<PARAM  NAME='movie' VALUE='" + nome +"?" + querystring +"'>" +
													"<PARAM NAME=loop VALUE=false>" +
													"<PARAM NAME=quality VALUE=best>" +
													"<PARAM NAME=wmode VALUE=transparent>" +
													"<PARAM NAME=salign VALUE=MM>" +
													"<PARAM NAME=bgcolor VALUE=#FFFFFF>" +
													"<EMBED  src='" + nome + "?" + querystring +"' " +
														 "loop=false " +
														 "quality=best " +
														 "salign=MM " +
														 "bgcolor=#FFFFFF " +
														 "WIDTH='"+largura+"' " +
														 "HEIGHT='"+ altura +"' " +
														 "NAME='" + idFlash + "' " +
														 "ALIGN='top' " +
														 "wmode='transparent' " +
														 "TYPE='application/x-shockwave-flash' " +
														 "PLUGINSPAGE='http://www.macromedia.com/go/getflashplayer'>" +
														 "</EMBED>" +
												 "</OBJECT>";
	/*document.topico.SetVariable("nomeCompleto", doLMSGetValue('cmi.core.student_name'));
	document.topico.SetVariable("lessonLocation", doLMSGetValue('cmi.core.lesson_location'));
	document.topico.SetVariable("lessonStatus", doLMSGetValue('cmi.core.lesson_status'));
	document.topico.SetVariable("suspendData", doLMSGetValue('cmi.suspend_data'));
	document.topico.SetVariable("scoreRaw", doLMSGetValue('cmi.core.score.raw'));
	document.topico.SetVariable("comments", doLMSGetValue('cmi.comments'));*/
}

/**
 * Recupera os valores da querystring enviada para o html
 */
function GetQueryStringValue(variable) {
	var QueryString = document.location.search;
	var voffset = QueryString.indexOf(variable, 0);
	var soffset = 0;
	var aoffset = 0;

	if (voffset == -1) {
		return ("");
	}
	
	soffset = QueryString.indexOf("=", voffset);

	if (soffset == -1) {
		return ("");
	}
	
	aoffset = QueryString.indexOf("&", soffset);

	if (aoffset == -1) {
		return (unescape(QueryString.substring((soffset + 1), QueryString.length)));
	} else {
		return (unescape(QueryString.substring((soffset + 1), aoffset)));
	}
}

/**
 * Atribui valor true a vari�vel do objeto t�pico da janela pai
 */
function simulacaoFinalizada() {
	window.opener.document.topico.SetVariable("simulacaoFinalizada", "true");	
}