package br.com.neuritos.converter.domain

class Quiz {

	transient springSecurityService
	
	String name
	Date creationDate
	Account account
	Boolean sent
	Date sentDate
		
	static hasMany = [listTeamQuiz:TeamQuiz, listQuestionQuiz:QuestionQuiz, listUserQuiz:UserQuizHistory]
	
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
	
	public Integer countMembersInUserQuiz(){
		int countMembers = 0
		for(UserQuizHistory userQuiz : listUserQuiz){
			countMembers++
		}
		return countMembers
	}
	
	public Integer countFinalizedUser(){
		int countMembers = 0
		for(UserQuizHistory userQuiz : listUserQuiz){
			if(userQuiz?.finishDate){
				countMembers++
			}	
		}
		return countMembers
	}
	
}
