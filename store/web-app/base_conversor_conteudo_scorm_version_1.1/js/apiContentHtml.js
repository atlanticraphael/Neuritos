/**
 * API para visualizar conteudos em HTML
 * @version 1.0
 */
function ApiContentHtml(){
	/**
	 * Metodo para iniciar o conteudo quando utilizar a chamada do conteudo po javascript
	 * @param userId - Id do usuario
	 * @param selectedContentId - Id do conteudo que quer visualizar
	 */
	this.openContentHtml = function (userId, selectedContentId){
		$selectedContentId = $("#selectedContentId");
		$userId = $("#userId");
		$contentAccessLogId = $("#contentAccessLogId");
		$currentPageNum = $("#currentPageNum");
		
		$.ajax({
		  	url: 'http://localhost:8080/NeuritosWeb/content/html?action=openContent&selectedContentId='+selectedContentId+'&userId='+userId,
		  	type:'post',
		    dataType: 'json',
		    async: false,
		    crossDomain:true,
		    error: function() {
		    	console.log('error function openContentHtml()');
		    },
		    success: function(properties) {
		    	$selectedContentId.val(properties.selectedContentId);
		    	$userId.val(properties.userId);
		    	$contentAccessLogId.val(properties.contentAccessLogId);
		    	$currentPageNum.val(properties.currentPage);
		    }
	    });	
	};
	/**
	 * Metodo para navegar para a proxima pagina do conteudo
	 * @param currentPageNum - Pagina atual do conteudo
	 * @param maxPageNum - Total de paginas do conteudo
	 */
	this.navNext = function (currentPageNum, maxPageNum){
		$selectedContentId = $("#selectedContentId");
		$userId = $("#userId");
		$contentAccessLogId = $("#contentAccessLogId");
		$selectedContentId = $("#selectedContentId");
		$currentPageNum = $("#currentPageNum");
		
		$.ajax({
		  	url: this.getParameterByName('contextPath')+'?action=next&currentPageNum='+currentPageNum+'&maxPageNum='+maxPageNum,
			type:'post',
		    dataType: "jsonp",
			jsonpCallback: 'callback',
		    async: false,
		    crossDomain:true,
		    cache:false,
		    error: function(xhr, status, error) {
		    	console.log('error function navNext()');
		    },
		    success: function(data) {
				var json = JSON.parse(data);
		    	$contentAccessLogId.val(json.contentAccessLogId);
		    	$currentPageNum.val(json.currentPageNum);
		    }
	    });	
	};
	/**
	 * Metodo para navegar para a pagina anterior
	 * @param currentPageNum - Pagina atual do conteudo
	 */
	this.navPrev = function (currentPageNum){
		$userId = $("#userId");
		$contentAccessLogId = $("#contentAccessLogId");
		$selectedContentId = $("#selectedContentId");
		$currentPageNum = $("#currentPageNum");
		
		$.ajax({
		  	url: this.getParameterByName('contextPath')+'?action=prev&currentPageNum='+currentPageNum,
			type:'post',
		    dataType: "jsonp",
			jsonpCallback: 'callback',
		    async: false,
		    cache:false,
		    crossDomain:true,
		    error: function() {
		    	console.log('error function navPrev()');
		    },
		    success: function(data) {
				var json = JSON.parse(data);
		    	$contentAccessLogId.val(json.contentAccessLogId);
		    	$currentPageNum.val(json.currentPageNum);
		    }
	    });	
	};
	/**
	 * Metodo para voltar a tela dos modulos
	 */
	this.comeBackForModule = function (){
		$userId = $("#userId");
		$contentAccessLogId = $("#contentAccessLogId");
		$currentPageNum = $("#currentPageNum");
		
		$.ajax({
		  	url: this.getParameterByName('contextPath')+'?action=comeBackForModule&currentPageNum='+$currentPageNum.val(),
			type:'post',
		    dataType: "jsonp",
			jsonpCallback: 'callback',
		    async: false,
		    cache:false,
		    crossDomain:true,
		    error: function() {
		    	console.log('error function comeBackForModule()');
		    },
		    success: function(data) {
				var json = JSON.parse(data);
		    	window.location.href=json.urlReturn;
		    }
	    });	
	};
	/**
	 * Metodo para navegar ate determinada pagina
	 * @param page - Número da pagina que sera redirecionada
	 */
	this.goToPage = function (page){
		$userId = $("#userId");
		$contentAccessLogId = $("#contentAccessLogId");
		$currentPageNum = $("#currentPageNum");
		
		$.ajax({
		  	url: this.getParameterByName('contextPath')+'?action=goToPage&page='+page,
			type:'post',
		    dataType: "jsonp",
			jsonpCallback: 'callback',
		    async: false,
		    cache:false,
		    crossDomain:true,
		    error: function() {
		    	console.log('error function goToPage()');
		    }
	    });	
	};
	/**
	 * Metodo buscar o valor do parametros passado por Query String 
	 * @param name - Nome do parametro passado na Query String
	 */
	this.getParameterByName = function (name) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	        results = regex.exec(location.search);
	    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	};
}