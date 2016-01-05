package br.com.neuritos.quiz

import grails.transaction.Transactional
import groovy.sql.Sql
import br.com.neuritos.converter.domain.User

@Transactional
class UserService {

	def dataSource

	List<User> findAllWithParams(String name, String username, String cpf, String phoneNumber, Long idTeam, Long idOwner){
		def sql = new Sql(dataSource)

		String whereClause = " WHERE U.QUIZ_ENABLE = 1 "
		String whereClauseName = name != null ? " UPPER(U.NAME) LIKE UPPER('%${name}%')" : ''
		String whereClauseUsername = username != null ? " UPPER(U.USERNAME) LIKE UPPER('%${username}%') " :  ''
		String whereClauseCpf =  cpf != null ? " U.CPF LIKE '%${cpf}%' " : ''
		String whereClausePhoneNumber = phoneNumber != null ? " U.PHONE_NUMBER LIKE '%${phoneNumber}%' " : ''

		StringBuilder sb = new StringBuilder(" SELECT * FROM TNE_USER U  ")
		sb.append(whereClause)

		if (name != null)
			sb.append(" AND ").append(whereClauseName)

		if (username != null)
			sb.append(" AND ").append(whereClauseUsername)
		
		if (cpf != null)
			sb.append(" AND ").append(whereClauseCpf)
		
		if (phoneNumber != null)
			sb.append(" AND ").append(whereClausePhoneNumber)
		
		sb.append(" AND U.ID NOT IN(SELECT TU.USER_ID FROM TNE_TEAM_USER TU ")
		sb.append(" WHERE TU.TEAM_ID = '${idTeam}') ")
		sb.append(" AND U.OWNER_ID  = '${idOwner}' ")

		def rows = sql.rows(sb.toString())

		List<User> listUser = new ArrayList<User>()
		rows.each { row ->
			User user = new User()
			user.id          = row.id
			user.name       = row.name
			user.cpf = row.cpf
			user.phoneNumber = row.phone_number
			user.username        = row.username

			listUser << user
		}

		sql.close()
		return listUser
	}

	def findAvailableUsersByTeamIdAndOwnerId(Long idTeam, Long idOwner) {
		def sql = new Sql(dataSource)

		def rows = sql.rows("""

			SELECT * FROM TNE_USER U
			WHERE U.QUIZ_ENABLE = 1
			AND U.ID NOT IN(
				SELECT TU.USER_ID FROM TNE_TEAM_USER TU
				WHERE TU.TEAM_ID = '${idTeam}') 
				AND U.OWNER_ID  = '${idOwner}'
				""")

		List<User>  listUsers = new ArrayList<User>()

		rows.each{ row ->
			User user = new User()
			user.id    = row.id
			user.name  = row.name
			user.cpf  = row.cpf
			user.phoneNumber  = row.phone_number
			user.username        = row.username

			listUsers << user
		}

		sql.close()

		listUsers
	}
}
