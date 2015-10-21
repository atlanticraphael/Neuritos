package br.com.neuritos.converter.domain

class Team {

	transient springSecurityService
	
	String name
	Date creationDate
	User user
	
	static hasMany = [teamUser: TeamUser, listQuiz:TeamQuiz]
	
	static mapping = {
		table 'TNE_TEAM'
		version false
	}

	static constraints = {
		name nullable: false, maxSize: 1020
		creationDate nullable: true
		user nullable:true 
	}
	
	def beforeInsert() {
		creationDate = new Date()
		user = springSecurityService.getCurrentUser()
	}
	
}
