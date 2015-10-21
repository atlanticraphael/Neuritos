package br.com.neuritos.converter.domain

class TeamQuiz {

	Date creationDate
	Date totalTime
	Date quizTime
	
	static belongsTo = [team:Team, quiz:Quiz]

	static mapping = {
		table 'TNE_TEAM_QUIZ'
		version false
		team {column name:"team_id"}
		quiz {column name:"quiz_id"}
	}

	static constraints = {
		quiz(nullable: true)
		creationDate nullable:true 
		totalTime nullable:true 
		quizTime nullable:true 
	}
	
	def beforeInsert() {
		creationDate = new Date()
		totalTime = new Date()
		quizTime = new Date()
	}
	
}
