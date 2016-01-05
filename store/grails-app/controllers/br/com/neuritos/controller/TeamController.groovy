package br.com.neuritos.controller

import grails.transaction.Transactional
import br.com.neuritos.converter.domain.Quiz
import br.com.neuritos.converter.domain.Team
import br.com.neuritos.converter.domain.TeamUser
import br.com.neuritos.converter.domain.User

class TeamController {

	def springSecurityService
	def userService
	def teamService
	
	def create() {
		List<Team> listTeam = Team.findAll()
		render view:'create', model:[listTeam:listTeam]
	}
	
	@Transactional
	def save(Team teamInstance) {
		if (teamInstance == null) {
			notFound()
			return
		}

		teamInstance.user = springSecurityService.getCurrentUser()
		
		if (teamInstance.hasErrors()) {
			respond teamInstance.errors, view:'create'
			return
		}

		teamInstance.save flush:true
		
		redirect action:'allocateUsers', id:teamInstance.id as Long
	}
	
	
	def allocateUsers(Long id) {
		
		User owner = springSecurityService.getCurrentUser()
		List<User> listAvailableUser = userService.findAvailableUsersByTeamIdAndOwnerId(id, owner.id)
		Team team = Team.get(id)
		
		render view:'allocateUsers', model:[listAvailableUser:listAvailableUser, team:team]
	}
	

	def searchUser(User userInstance, Long idTeam) {
		
		User owner = springSecurityService.getCurrentUser()
		
		List<User> userList = userService.findAllWithParams(userInstance.name, userInstance.username, 
			userInstance.cpf, userInstance.phoneNumber, idTeam, owner.id)
		
		Team team = Team.get(idTeam)
		
		render view:'allocateUsers', model:[listAvailableUser:userList, team:team, params:userInstance]
	}
	
	def addUserToTeam(Long idUser, Long idTeam) {
		Team team = new Team()
		team.id = idTeam
		User user = new User()
		user.id = idUser
		
		TeamUser teamUser = new TeamUser()
		teamUser.team = team
		teamUser.user = user
		
		teamUser.save flush:true
		
		team = Team.get(idTeam)
		User owner = springSecurityService.getCurrentUser()
		List<User> listAvailableUser = userService.findAvailableUsersByTeamIdAndOwnerId(idTeam, owner.id)
		
		render (template:'/team/grid', model:[team:team, listAvailableUser:listAvailableUser])
	}
	
	def deleteUserFromTeam(Long idTeamUser, Long idTeam) {
		TeamUser teamUser = new TeamUser()
		teamUser.id = idTeamUser
		
		teamUser.delete flush:true
		
		Team team = Team.get(idTeam)
		User owner = springSecurityService.getCurrentUser()
		List<User> listAvailableUser = userService.findAvailableUsersByTeamIdAndOwnerId(idTeam, owner.id)
		render (template:'/team/grid', model:[team:team, listAvailableUser:listAvailableUser])
	}
	
	def show(Long id) {
		respond Quiz.get(id)
	}
	
	@Transactional
	def delete(Long id) {
		Team team = Team.get(id)
								
		team.delete flush:true
		
		redirect action: 'create'
	}
	
	def edit(Team teamInstance) {
		respond teamInstance
	}

	@Transactional
	def update(Team teamInstance) {
		if (teamInstance == null) {
			notFound()
			return
		}
		
		if (teamInstance.hasErrors()) {
			respond teamInstance.errors, view:'edit'
			return
		}

		teamInstance.save flush:true
		
		redirect action: 'create'
	}
}
