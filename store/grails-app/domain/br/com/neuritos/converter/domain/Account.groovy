package br.com.neuritos.converter.domain

import java.util.Date;

import br.com.neuritos.converter.domain.enums.ContentType

class Account {

	transient springSecurityService
	
	String description
	User user
	
	static mapping = {
		table 'TNE_ACCOUNT'
		version false
	}
		
    static constraints = {
		description nullable: true, maxSize: 820
		user nullable:true
    }
}
