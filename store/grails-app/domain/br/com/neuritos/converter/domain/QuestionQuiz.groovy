package br.com.neuritos.converter.domain

class QuestionQuiz {

	Date creationDate
	
	static belongsTo = [question:Question, quiz:Quiz]

	static mapping = {
		table 'TNE_QUESTION_QUIZ'
		version false
		question {column name:"question_id"}
		quiz {column name:"quiz_id"}
	}

	static constraints = {
		quiz(nullable: true)
		question unique: 'quiz'
		creationDate nullable:true
	}
	
	def beforeInsert() {
		creationDate = new Date()
	}
	
}
