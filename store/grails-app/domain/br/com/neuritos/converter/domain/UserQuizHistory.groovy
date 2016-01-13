package br.com.neuritos.converter.domain

class UserQuizHistory {

	Date startDate
	Date finishDate

	static belongsTo = [quiz:Quiz, user:User]
		
	static mapping = {
		table 'TNE_USER_QUIZ_LOG'
		version false
		quiz {column name:"quiz_id"}
		user {column name:"user_id"}
		listUserQuestions joinTable: [name: 'TNE_USER_QUIZ_QUESTION',
			column: 'USERQUESTION_ID',
			   key: 'USERQUIZ_ID']
	}

	static constraints = {
		startDate nullable: true
		finishDate nullable: true
	}
	
	
	def beforeInsert() {
		startDate = new Date()
		finishDate = new Date()
	}
}
