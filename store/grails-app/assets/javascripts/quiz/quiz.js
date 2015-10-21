function index() {
	window.location.href = getContextPath() + '/quiz';
}

function allocateQuestion(idQuestion, idQuiz) {
	$.ajax({
		url:  getContextPath() + '/quiz/addQuestionToQuiz',
		data: {
			idQuestion: idQuestion,
			idQuiz: idQuiz,
		},
		error: function(xhr, status, error) {
		  console.log("Ocorreu um erro no processamento.");
		},
	    success: function(data) {
    		$('#quizQuestionDiv').fadeOut('fast', 
    				function() {$
    					(this).html(data).fadeIn('slow');
    				}
    		);
	    }
	});
}

function allocateTeam(idTeam, idQuiz) {
	$.ajax({
		url:  getContextPath() + '/quiz/addTeamToQuiz',
		data: {
			idTeam: idTeam,
			idQuiz: idQuiz,
		},
		error: function(xhr, status, error) {
			console.log("Ocorreu um erro no processamento.");
		},
		success: function(data) {
			$('#quizTeamDiv').fadeOut('fast', 
					function() {$
				(this).html(data).fadeIn('slow');
			}
			);
		}
	});
}

function deleteQuestionFromQuiz(idQuestionQuiz, idQuiz) {
	$.ajax({
		url:  getContextPath() + '/quiz/deleteQuestionFromQuiz',
		data: {
			idQuestionQuiz: idQuestionQuiz,
			idQuiz: idQuiz,
		},
		error: function(xhr, status, error) {
			console.log("Ocorreu um erro no processamento.");
		},
		success: function(data) {
			$('#quizQuestionDiv').fadeOut('fast', 
					function() {$
				(this).html(data).fadeIn('slow');
			}
			);
		}
	});
}

function deleteTeamFromQuiz(idTeamQuiz, idQuiz) {
	$.ajax({
		url:  getContextPath() + '/quiz/deleteTeamFromQuiz',
		data: {
			idTeamQuiz: idTeamQuiz,
			idQuiz: idQuiz,
		},
		error: function(xhr, status, error) {
			console.log("Ocorreu um erro no processamento.");
		},
		success: function(data) {
			$('#quizTeamDiv').fadeOut('fast', 
					function() {$
				(this).html(data).fadeIn('slow');
			}
			);
		}
	});
}
