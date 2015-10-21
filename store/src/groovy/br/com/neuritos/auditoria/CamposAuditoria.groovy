package br.com.neuritos.auditoria

import br.com.neuritos.converter.domain.User


abstract class CamposAuditoria {
	
	Date dtCreated
	User userCreated
	Date dtUpdated
	User userUpdated
	Boolean enabled = 1
	Date dtEnabled 
}
