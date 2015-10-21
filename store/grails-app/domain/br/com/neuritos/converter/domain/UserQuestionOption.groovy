package br.com.neuritos.converter.domain

class UserQuestionOption {

	String questionText
	boolean correct
	UserQuestion userQuestion
	
	static belongsTo = [user:User, questionOption:Choice]

	static mapping = {
		table 'TNE_USER_QUESTION_OPTION'
		version false
		user {column name:"user_id"}
		questionOption {column name:"question__option_id"}
	}

	static constraints = {
		questionText nullable: true, maxSize: 1020
		correct nullable:true
	}
}
