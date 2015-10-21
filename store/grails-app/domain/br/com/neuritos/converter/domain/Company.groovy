package br.com.neuritos.converter.domain

class Company {

	String name
	String logo
	String teamplateUser
	
	static hasMany = [listUser: User]
	
	static mapping = {
		table 'TNE_COMPANY'
		version false
	}

	static constraints = {
		name nullable: false, maxSize: 1020
		logo nullable: false, maxSize: 1020
		teamplateUser nullable: false, maxSize: 1020
	}
	
}
