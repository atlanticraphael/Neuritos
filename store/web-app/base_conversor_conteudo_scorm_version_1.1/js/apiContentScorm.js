/**
 * API para visualizar conteudos em SCORM
 * @version 1.0
 */
function APIContntScorm(){
	this.next = function next(){
		$previousMenu = $("#previousMenu");
		$nextMenu = $("#nextMenu");
		$menu = $("#"+$nextMenu.val());
		$totalPage = $("#totalPage");
		$numPage = $("#numPage");
		$lastPageView = $("#lastPageView");
		
		if($nextMenu.val() != ""){
			$.ajax({
				url: this.getParameterByName("contextPath")+'?action=next&currentPageNum='+$numPage.text()+'&maxPageNum='+$totalPage.val(),
				type:'post',
				dataType: "jsonp",
				jsonpCallback: 'callback',
				async: false,
				crossDomain:true,
				cache:false,
				error: function() {
					console.log('error function navNext() Scorm');
				}
			});	

			$("#bb-nav-prev").show();
			var page = parseInt($numPage.text())+1;
			$numPage.text(page);
			$lastPageView.val(page);
			$previousMenu.val($menu.attr('data-previous-menu'));
			$nextMenu.val($menu.attr('data-next-menu'));
			$("#next").attr('href',$menu.attr("data-page"));
			
			if(page == $totalPage.val()){
				$("#bb-nav-next").hide();
			}
			this.calculePercent(page, $totalPage.val());
		}
	};
	this.back = function back(){
		$previousMenu = $("#previousMenu");
		$nextMenu = $("#nextMenu");
		$menu = $("#"+$previousMenu.val());
		$totalPage = $("#totalPage");
		$numPage = $("#numPage");
		$lastPageView = $("#lastPageView");
		
		var page = parseInt($numPage.text())-1;
		if($previousMenu.val() != ""){
			$.ajax({
			  	url: this.getParameterByName("contextPath")+'?action=prev&currentPageNum='+page,
			    type:'post',
				dataType: "jsonp",
				jsonpCallback: 'callback',	
			    async: false,
			    cache:false,
			    crossDomain:true,
			    error: function() {
			    	console.log('error function navPrev() Scorm');
			    }
		    });
			
			$("#bb-nav-next").show();
			
			$numPage.text(page);
			$lastPageView.val(page);
			$previousMenu.val($menu.attr('data-previous-menu'));
			$nextMenu.val($menu.attr('data-next-menu'));
			$("#back").attr('href',$menu.attr("data-page"));
			
			if(page == 1){
				$("#bb-nav-prev").hide();
			}
			this.calculePercent(page, $totalPage.val());
		}
	};
	/**
	 * Metodo que redireciona para a pagina passada como parametro
	 */
	this.goToPage = function goToPage(page, menu){
		$menu = $("#"+menu.id); 
		$previousMenu = $("#previousMenu");
		$nextMenu = $("#nextMenu");
		$lastPageView = $("#lastPageView");
		$totalPage = $("#totalPage");
		$numPage = $("#numPage");
		
		$.ajax({
		  	url: this.getParameterByName("contextPath")+'?action=goToPage&page='+page,
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
		
		$numPage.text(page);
		$lastPageView.val(page);
		$previousMenu.val($menu.attr('data-previous-menu'));
		$nextMenu.val($menu.attr('data-next-menu'));
		menu.href = $menu.attr('data-page');
		this.calculePercent(page, $totalPage.val());
	};
	/**
	 * Metodo que inicia o conteudo Scorm e retornando da ultima vizualização feita 
	 * pelo usuário
	 */
	this.startContentScorm = function startContentScorm(){
		$previousMenu = $("#previousMenu");
		$nextMenu = $("#nextMenu");
		$lastPageView = $("#lastPageView");
		$totalPage = $("#totalPage");
		$totalPageHeader = $("#totalPageHeader");
		$numPage = $("#numPage");
		var numPage = 0;
		
		$.ajax({
		  	url: this.getParameterByName("contextPath")+'?action=openContent&selectedContentId='+this.getParameterByName('selectedContentId')+'&userId='+this.getParameterByName('userId')+'&programId='+this.getParameterByName('programId'),
		  	type:'post',
			dataType: "jsonp",
			jsonpCallback: 'callback',
		    async: true,
		    crossDomain:true,
		    error: function() {
		    	console.log('error function startContentScorm()');
		    	numPage = 1;
		    	$lastPageView.val(1);
		    	$menu = $("#menu"+1);
		    	$previousMenu.val($menu.attr('data-previous-menu'));
				$nextMenu.val($menu.attr('data-next-menu'));
				$("#iFrame").attr('src', $menu.attr('data-page'));
				
				$numPage.text(numPage);
				$("#totalPageHeader").text($totalPage.val());
				new APIContntScorm().calculePercent(numPage, $totalPage.val());
		    },
		    success: function(data) {
				var json = JSON.parse(data);
		    	numPage = parseInt(json.lastPageView);
		    	$lastPageView.val(json.lastPageView);
		    	$menu = $("#menu"+json.lastPageView);
		    	$previousMenu.val($menu.attr('data-previous-menu'));
				$nextMenu.val($menu.attr('data-next-menu'));
				$("#iFrame").attr('src', $menu.attr('data-page'));
				
				$totalPageHeader.text($totalPage.val());
				$numPage.text(numPage);
				new APIContntScorm().calculePercent(numPage, $totalPage.val());
		    }
	    });		
	};
	/**
	 * Metodo que inicia o conteudo Scorm versão 1.1 e retornando da ultima vizualização feita 
	 * pelo usuário
	 */
	this.startContentScorm_1_1 = function startContentScorm_1_1(){
		$previousMenu = $("#previousMenu");
		$nextMenu = $("#nextMenu");
		$lastPageView = $("#lastPageView");
		$totalPage = $("#totalPage");
		$totalPageHeader = $("#totalPageHeader");
		$numPage = $("#numPage");
		
		$.ajax({
		  	url: this.getParameterByName("contextPath")+'?action=openContent&selectedContentId='+this.getParameterByName('selectedContentId')+'&userId='+this.getParameterByName('userId')+'&programId='+this.getParameterByName('programId'),
		  	type:'post',
			dataType: "jsonp",
			jsonpCallback: 'callback',
		    async: true,
		    crossDomain:true,
		    error: function(xhr, status, error) {
		    	console.log('error function startContentScorm()');
		    	$("#lastPage").val(1)
		    	
		    },
		    success: function(data) {
				var json = JSON.parse(data);
		    	$("#lastPage").val(parseInt(json.lastPageView));
		    }
	    });		
	};
	/**
	 * Metodo para voltar a tela do respectivo modulo
	 */
	this.comeBackForModule = function (){
		$userId = $("#userId");
		$contentAccessLogId = $("#contentAccessLogId");
		$lastPageView = $("#lastPageView");
		
		$.ajax({
		  	url: this.getParameterByName("contextPath")+'?action=comeBackForModule&currentPageNum='+$lastPageView.val(),
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
	 * Metodo para voltar a tela do respectivo modulo
	 */
	this.comeBackForModuleScorm1_1 = function (){
		$userId = $("#userId");
		$contentAccessLogId = $("#contentAccessLogId");
		$lastPageView = $("#lastPageView");
		
		$.ajax({
		  	url: this.getParameterByName("contextPath")+'?action=comeBackForModule&currentPageNum='+course.GetCurrentScreenNumber(),
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
	 * Metodo buscar o valor do parametros passado por Query String 
	 * @param name - Nome do parametro passado na Query String
	 */
	this.getParameterByName = function (name) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	        results = regex.exec(location.search);
	    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	};
	/**
	 * Calcula a porcentagem de progresso do conteudo
	 * @param page
	 * @param totalPage
	 */
	this.calculePercent = function (page, totalPage){
		var percentProgress = Math.round(parseInt(page)/totalPage*100);
		$("#percent").text(percentProgress);
		$("progress").val(percentProgress);
	};
}