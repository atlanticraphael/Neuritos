package br.com.neuritos.converter.domain

class UserQuestion {

	String questionText
	
	static belongsTo = [user:User, question:Question, userQuestionOption:UserQuestionOption]

	static mapping = {
		table 'TNE_USER_QUESTION'
		version false
		user {column name:"user_id"}
		question {column name:"question_id"}
	}

	static constraints = {
		questionText nullable: true, maxSize: 1020
	}
}
