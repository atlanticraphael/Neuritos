package br.com.neuritos.converter.domain

import java.util.Date;

import br.com.neuritos.converter.domain.enums.ContentType

class Conversion {

	transient springSecurityService

	Date dateCreationRequest
	Content content
			
	static mapping = {
		table 'TNE_CONVERSION'
		version false
	}
	
    static constraints = {
		dateCreationRequest nullable: true
    }
	
	def beforeInsert() {
		dateCreationRequest = new Date()
	}
	
}
