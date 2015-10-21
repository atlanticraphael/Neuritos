/**
 * API para visualizar conteudos em SCORM
 * @version 1.0
 */
function APIContentPDF(){
	this.next = function next(){
		$previousMenu = $("#previousMenu");
		$nextMenu = $("#nextMenu");
		$menu = $("#"+$nextMenu.val());
		$totalPage = $("#totalPage");
		$numPage = $("#numPage");
		$lastPageView = $("#lastPageView");

		// console.info(">>" + $nextMenu.val());
		// console.info(">>" + $menu.attr('data-page'));

		if($nextMenu.val() != ""){
			$(".presenter img").attr('src', 'img/slides/' + $menu.attr('data-page')); 

			$.ajax({
				url: this.getParameterByName("contextPath")+'?action=next&currentPageNum='+$numPage.text()+'&maxPageNum='+$totalPage.val(),
				type:'post',
				dataType: "jsonp",
				jsonpCallback: 'callback',
				async: false,
				crossDomain:true,
				cache:false,
				error: function() {
					console.log('error function navNext()');
				}
			});

			$("#bb-nav-prev").show();
			var page = parseInt($numPage.text())+1;
			this.calculePercent(page, $totalPage.val());
			$numPage.text( page + "/" + $("#totalPage").val() );

			//Mecanica de troca de página
			$lastPageView.val(page);
			$previousMenu.val($menu.attr('data-previous-menu'));
			$nextMenu.val( $menu.attr('data-next-menu') );
			this.pintaMenu($menu);
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
						
			$(".presenter img").attr('src', 'img/slides/' + $menu.attr('data-page')); 
			
			$("#bb-nav-next").show();
			
			this.calculePercent(page, $totalPage.val());
			$numPage.text( page + "/" + $("#totalPage").val() );
			$lastPageView.val(page);
			$previousMenu.val($menu.attr('data-previous-menu'));
			$nextMenu.val($menu.attr('data-next-menu'));
			// $("#back").attr('href',$menu.attr("data-page"));
		}
		this.pintaMenu($menu);
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
		
		$(".presenter img").attr('src', 'img/slides/' + $menu.attr('data-page')); 	
		
		this.calculePercent(page, $totalPage.val());
		$numPage.text( page + "/" + $("#totalPage").val() );

		$lastPageView.val(page);
		$nextMenu.val($menu.attr('data-next-menu'));
		$previousMenu.val($menu.attr('data-previous-menu'));
		
		this.pintaMenu($menu);
	};
	/**
	 * Metodo que inicia o conteudo Scorm e retornando da ultima vizualização feita 
	 * pelo usuário
	 */
	this.startContentPDF = function startContentPDF(){
		$previousMenu = $("#previousMenu");
		$nextMenu = $("#nextMenu");
		$lastPageView = $("#lastPageView");
		$totalPage = $("#totalPage");
		$numPage = $("#numPage");
		var numPage = 0;

		$("#previousMenu").val( "menu0" );
		$("#nextMenu").val( "menu2" );
		$("#lastPageView").val( "1" );

		//Apresenta o primeiro conteúdo
		$(".presenter img").attr('src', 'img/slides/' + $( "#menu1" ).attr('data-page')); 			

		// $nextMenu.val( $( "#menu2" ).attr('data-page') )
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

		if( page == 1 ){
			$("#bb-nav-prev").hide();
		}else{
			$("#bb-nav-prev").show();
		}

		if( page == $totalPage.val() ){
			$("#bb-nav-next").hide();
		}else{
			$("#bb-nav-next").show();
		}
	};		
	/**
	 * pinda o menu selecionado
	 * @param menuAtual
	 * @param 
	 */
	this.pintaMenu = function (menuAtual){
		$("#menu-toc li").each(function(){
			console.info($(this));
			$(this).removeClass('menu-toc-current');
		});
		menuAtual.parent().addClass('menu-toc-current');
	};	
}