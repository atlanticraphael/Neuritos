package br.com.neuritos.converter.domain

class Quiz {

	transient springSecurityService
	
	String name
	Date creationDate
	Account account
	Boolean sent
	Date sentDate
		
	static hasMany = [listTeamQuiz:TeamQuiz, listQuestionQuiz:QuestionQuiz]
	
	static mapping = {
		table 'TNE_QUIZ'
		version false
	}

	static constraints = {
		name nullable: true, maxSize: 1020
		creationDate nullable: true
		account nullable: true
		sent nullable: true
		sentDate nullable: true
	}
	
	def beforeInsert(){
		creationDate = new Date()
		account = springSecurityService.getCurrentUser().getAccount()
	}
	
	public Integer countMembers(){
		int countMembers = 0
		for(TeamQuiz teamQuiz : listTeamQuiz){
			for(teamUser in teamQuiz?.team?.listTeamUser){
				countMembers++
			}
		}
		return countMembers
	}
}
