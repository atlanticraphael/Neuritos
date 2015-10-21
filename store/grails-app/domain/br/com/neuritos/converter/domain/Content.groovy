package br.com.neuritos.converter.domain

import java.util.Date;

import br.com.neuritos.converter.domain.enums.ContentType

class Content {

	transient springSecurityService
	
	String name
	String path
	ContentType contentType

	static mapping = {
		table 'TNE_CONTENT'
		version false
	}
		
    static constraints = {
		name nullable: true, maxSize: 1020
		path nullable: true, maxSize: 1020
		contentType nullable: true, maxSize: 1020
    }
}
