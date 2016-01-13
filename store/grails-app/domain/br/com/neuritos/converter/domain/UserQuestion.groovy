package br.com.neuritos.converter.domain

class UserQuestion {

	String questionText
	
	static hasMany = [listUserQuestionOption: UserQuestionOption]
	static belongsTo = [user:User, question:Question]

	static mapping = {
		table 'TNE_USER_QUESTION'
		version false
		user {column name:"user_id"}
		question {column name:"question_id"}
		listUserQuiz joinTable: [name: 'TNE_USER_QUIZ_QUESTION',
							   column: 'USERQUIZ_ID',
							      key: 'USERQUESTION_ID']
	}

	static constraints = {
		questionText nullable: true, maxSize: 1020
	}
}
