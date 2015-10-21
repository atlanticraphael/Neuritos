(function($){ 
    $.fn.extend({  
        limit: function(limit,element) {
			var interval, f;
			var self = $(this);
			$(this).focus(function(){
				interval = window.setInterval(substring,100);
			});
			$(this).blur(function(){
				clearInterval(interval);
				substring();
			});
			substringFunction = "function substring(){ var val = $(self).val();var length = val.length;if(length > limit){$(self).val($(self).val().substring(0,limit));}";
			if(typeof element != 'undefined')
				substringFunction += "if($(element).html() != limit-length){$(element).html((limit-length<=0)?'0':limit-length);}"
			substringFunction += "}";
			eval(substringFunction);
			substring();
       } 
   }); 
})(jQuery);

function limitarTamanhoTextArea($elementoTextArea, limit, mensagem, index){
	var charsLeft = "charsLeft";
	if(mensagem == undefined || mensagem){
		var existeSpanComEsseNome = ($('#'+charsLeft).length == 1);
		var indexCharsLeft = 0;
		while(existeSpanComEsseNome){
			var charsLeft = 'charsLeft_'+indexCharsLeft++;
			existeSpanComEsseNome = ($('#'+charsLeft).length == 1);
		}

		var span = '<span style="font-size: 10px;">Você tem <span id="'+charsLeft+'"></span> caracteres para digitar.</span>';

		if($elementoTextArea.next().html() == undefined) {
			$elementoTextArea.after(span);
		}
	}
	// Adiciona a a��o de limite no TextArea
	$elementoTextArea.limit(limit, '#'+charsLeft);
}