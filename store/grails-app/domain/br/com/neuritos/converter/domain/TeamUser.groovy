package br.com.neuritos.converter.domain

class TeamUser {

	static belongsTo = [team:Team, user:User]

	static mapping = {
		table 'TNE_TEAM_USER'
		version false
		team {column name:"team_id"}
		user {column name:"user_id"}
	}
	
	static constraints = {
		team unique: 'user'
	}
}
