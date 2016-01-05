$(document).ready(function(){
	
	var isTelaLogin = window.location.pathname.indexOf("login") != -1 ? true : false;
	if(isTelaLogin == false){
		changeSystemLanguage();
	}
	
	$('*[required]').each(function(index, element){
		$element = $(element);
		var id = $element.attr('id')
		var $for = $('*[for="'+id+'"]')
		if($for.find('.required-indicator').length == 0){
			$('*[for="'+id+'"]').append('<span class="required-indicator">*</span>');
		}
	});
});

function getContextPath() {
   return window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
}

function changeSystemLanguage(){
	$(".fa-check").each(function(index, element){
		if($(element).attr('data-value') == language){
			$(element).show();
		}else{
			$(element).hide();
		}
	});
}

