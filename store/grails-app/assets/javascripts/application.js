$(document).ready(function(){
	
	var isTelaLogin = window.location.pathname.indexOf("login") != -1 ? true : false;
	if(isTelaLogin == false){
		changeLanguageOfSystem();
	}
});

function getContextPath() {
   return window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
}

function changeLanguageOfSystem(){
	$(".fa-check").each(function(index, element){
		if($(element).attr('data-value') == language){
			$(element).show();
		}else{
			$(element).hide();
		}
	});
}

