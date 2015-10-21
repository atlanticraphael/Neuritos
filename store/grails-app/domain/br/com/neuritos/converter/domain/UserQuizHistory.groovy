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
	}

	static constraints = {
		startDate nullable: false
		finishDate nullable: false
	}
	
	
	def beforeInsert() {
		startDate = new Date()
		finishDate = new Date()
	}
}
