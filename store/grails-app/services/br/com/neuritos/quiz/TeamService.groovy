package br.com.neuritos.quiz

import br.com.neuritos.converter.domain.Team
import br.com.neuritos.converter.domain.User
import grails.transaction.Transactional
import groovy.sql.Sql

@Transactional
class TeamService {

	def dataSource
	
	 def findAvailableTeamByQuizIdAndOwnerId(Long idQuiz, Long idOwner) {
		def sql = new Sql(dataSource)
		
		def rows = sql.rows("""

			SELECT T.ID, T.NAME, U.ID AS "USER_ID", U.NAME AS "USER_NAME" FROM TNE_TEAM T
			INNER JOIN TNE_USER U ON T.USER_ID = U.ID
			WHERE T.ID NOT IN(
				SELECT TQ.TEAM_ID FROM TNE_TEAM_QUIZ TQ
				WHERE TQ.QUIZ_ID = '${idQuiz}')
				AND T.USER_ID = '${idOwner}'
				""")
				
		List<Team>  listTeam = new ArrayList<Team>()
		
		rows.each{ row ->
			Team team = new Team()
			User user = new User()
			team.id    = row.id
			team.name  = row.name
			user.id = row.user_id
			user.name = row.user_name
			team.user = user
			
			listTeam << team
		}
		
		sql.close()
		
		listTeam
		
    }
}
