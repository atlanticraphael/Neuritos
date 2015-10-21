/**
 * API para enviar informações para as Servlets de controle de conteúdo
 * @version 1.0
 */
function APIContentController(){

		/**
		 *	Método que envia par o controller a informação de avanço de conteúdo
		 *	params (currentPageNum, maxPageNum)
		 */
		this.next = function next(currentPageNum, maxPageNum){
			var $maxPageNum = $('#totalPage');

			$.ajax({
				url: this.getParameterByName("contextPath")+'?action=next&currentPageNum='+currentPageNum+'&maxPageNum='+$maxPageNum,
				type:'post',
				dataType: "jsonp",
				jsonpCallback: 'callback',
				async: false,
				crossDomain:true,
				cache:false,
				error: function() {
					console.log('error function navNext() Scorm Flash');
				}
			});					

		};

		this.prev = function prev(){
			var $currentPageNum = $('#page').val();
			
			$.ajax({
				url: this.getParameterByName("contextPath")+'?action=prev&currentPageNum='+$currentPageNum,
				type:'post',
				dataType: "jsonp",
				jsonpCallback: 'callback',
				async: false,
				crossDomain:true,
				cache:false,
				error: function() {
					console.log('error function navPrev() Scorm Flash');
				}
			});	

		};

		this.prev = function prev(){
			var $currentPageNum = $('#page').val();
			
			$.ajax({
				url: this.getParameterByName("contextPath")+'?action=prev&currentPageNum='+$currentPageNum,
				type:'post',
				dataType: "jsonp",
				jsonpCallback: 'callback',
				async: false,
				crossDomain:true,
				cache:false,
				error: function() {
					console.log('error function navPrev() Scorm Flash');
				}
			});	

		};
		
		/**
		 * Metodo que inicia o conteudo Scorm e retornando da ultima vizualização feita 
		 * pelo usuário
		 * params (userId, selectedContentId)
		 * 
		 */
		this.startContent = function startContent( ){
			
			$.ajax({
				url: this.getParameterByName("contextPath")+'?action=openContent&selectedContentId='+this.getParameterByName('selectedContentId')+'&userId='+this.getParameterByName('userId')+'&programId='+this.getParameterByName('programId'),
				type:'post',
				dataType: "jsonp",
				jsonpCallback: 'callback',
				async: false,
				crossDomain:true,
				cache:false,
				error: function(e) {
					console.log('error function startContent() Scorm Flash');
					// console.log(e);
				}
			});	
		};

		/**
		 * Metodo para voltar a tela do respectivo modulo
		 * params (currentPageNum)
		 */
		this.comeBackForModule = function ( ){
			var $currentPageNum = $('#page').val();

			$.ajax({
			  	url: this.getParameterByName("contextPath")+'?action=comeBackForModule&currentPageNum='+$currentPageNum,
			    type:'post',
				dataType: "jsonp",
				jsonpCallback: 'callback',
			    async: false,
			    cache:false,
			    crossDomain:true,
			    error: function() {
			    	console.log('error function comeBackForModule() Scorm');
			    },
			    success: function(data) {
					var json = JSON.parse(data);
			    	window.location.href=json.urlReturn;
			    }
		    });	
		};

		/**
		 * Metodo que trata a URL pegando informações da mesma
		 */
		this.getParameterByName = function (name) {
		    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		        results = regex.exec(location.search);
		    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		};

		/**
		 * Metodo que redireciona para a pagina passada como parametro
		 */
		this.goToPage = function goToPage(){
			console.info("goToPage");
			
			$page = $("#page").val();
			
			$.ajax({
			  	url: this.getParameterByName("contextPath")+'?action=goToPage&page='+$page,
			    type:'post',
				dataType: "jsonp",
				jsonpCallback: 'callback',
			    async: false,
			    cache:false,
			    crossDomain:true,
			    error: function() {
			    	console.log('error function goToPage() Scorm');
			    }
		    });	
			
		};

}