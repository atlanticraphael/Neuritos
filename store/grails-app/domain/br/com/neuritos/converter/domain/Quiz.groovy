package br.com.neuritos.converter.domain

class Quiz {

	transient springSecurityService
	
	String name
	Date creationDate
	Account account
	
	static hasMany = [listTeamQuiz:TeamQuiz, listQuestionQuiz:QuestionQuiz]
	
	static mapping = {
		table 'TNE_QUIZ'
		version false
		listTeamQuiz cascade: 'none'
		listQuestionQuiz cascade: 'none'
	}

	static constraints = {
		name nullable: true, maxSize: 1020
		creationDate nullable: true
		account nullable:true
	}
	
	def beforeInsert(){
		creationDate = new Date()
		account = springSecurityService.getCurrentUser().getAccount()
	}
}
