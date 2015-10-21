//= require jquery
//= require jquery-ui

$(function(){
	if ($("#questionId").val() > 0) {
		loadAlternatives();
	}
	
})


function changeAnswerValue(value) {
	$("#answer").val(value);
}

function addAlternatives(alternatives) {
	var qtAlternatives = alternatives;
	if(alternatives.value > 0){
		qtAlternatives = alternatives.value;
	}
	
	if(qtAlternatives > 0){
		$divAlternatives = $('body').find('#divAlternatives');
		$divAlternatives.empty();
		for(var i = 0; i < qtAlternatives; i++){
			$divAlternatives.append("" +
					"<div class='form-group'>" +
					"	<div><label class='col-md-10 no-pad-l'>Enunciado</label>" +
					"	<label class='align-right'><input type='radio' id='radio_"+ i +"' name='radioOption' onclick='changeAnswerValue("+ (i) +")'>Correta</input></label>" +
					"</div>" +
					"<div class='input-group'>" +
					"	<div class='input-group-addon'><i class='icon fa fa-file-text'></i></div>" +
					"	<textarea rows='2' id='textarea_"+ i +"' class='form-control' name='text'></textarea></div>" +
					"</div>");
		}
	}
}


function loadAlternatives() {
	$.ajax({
		url: getContextPath() + '/question/loadAlternatives',
		dataType: 'json',
		data: {
			questionId:  $("#questionId").val(),
		},
		error: function(xhr, status, error) {
		  console.log("Ocorreu um erro no processamento.");
		},
	    success: function(listAlternatives) {
	    	if(listAlternatives.length > 0){
	    		addAlternatives(listAlternatives.length);
    			for(var i = 0; i < listAlternatives.length; i++){
    				$('#textarea_' + i).val(listAlternatives[i].text);
    				$('#radio_' + i).prop('checked', listAlternatives[i].answer);
    				
    				if (listAlternatives[i].answer) {
    					changeAnswerValue(i);
    				}
    			}	
    		}
	    }
	});
}