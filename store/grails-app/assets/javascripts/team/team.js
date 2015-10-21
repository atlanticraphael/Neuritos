//= require jquery
//= require jquery-ui

function allocateUser(idUser, idTeam) {
	$.ajax({
		url:  getContextPath() + '/team/addUserToTeam',
		data: {
			idUser: idUser,
			idTeam: idTeam,
		},
		error: function(xhr, status, error) {
		  console.log("Ocorreu um erro no processamento.");
		},
	    success: function(data) {
    		$('#teamUserDiv').fadeOut('fast', 
    				function() {$
    					(this).html(data).fadeIn('slow');
    				}
    		);
	    }
	});
}

function deleteUserFromTeam(idTeamUser, idTeam) {
	$.ajax({
		url:  getContextPath() + '/team/deleteUserFromTeam',
		data: {
			idTeamUser: idTeamUser,
			idTeam: idTeam,
		},
		error: function(xhr, status, error) {
			console.log("Ocorreu um erro no processamento.");
		},
		success: function(data) {
			$('#teamUserDiv').fadeOut('fast', 
					function() {$
				(this).html(data).fadeIn('slow');
			}
			);
		}
	});
}

function allocateUsers(idTeam) {
	window.location.href = getContextPath() + '/team/allocateUsers/' + idTeam;
}

