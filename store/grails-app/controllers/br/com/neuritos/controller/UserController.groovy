package br.com.neuritos.controller

import br.com.neuritos.converter.domain.Account
import br.com.neuritos.converter.domain.Role
import br.com.neuritos.converter.domain.User
import br.com.neuritos.converter.domain.UserRole
import grails.transaction.Transactional

class UserController {

	def springSecurityService
	
    def index() {
		List<User> listUser = User.findAllByOwner(springSecurityService.getCurrentUser())
		render view:'index', model:[edit:false, listUser:listUser]
	}
	
	def create() {
		respond new User(params)
	}
	
	def createUserStore() {
		respond new User(params)
	}
	
	@Transactional
	def saveUser(User userInstance) {
		if (userInstance == null) {
			notFound()
			return
		}

		if (userInstance.hasErrors()) {
			respond userInstance.errors, view:'create'
			return
		}

		userInstance.quizEnable = true
		userInstance.owner = springSecurityService.getCurrentUser()
		userInstance.save flush:true
		
		Account account = new Account()
		account.user = userInstance
		account.description = 'default account'
		
		account.save flush:true
		
		redirect action:'createUserStore'
	}
	
	@Transactional
	def save(User userInstance) {
		if (userInstance == null) {
			notFound()
			return
		}

		if (userInstance.hasErrors()) {
			respond userInstance.errors, view:'create'
			return
		}

		userInstance.save flush:true
		
		Account account = new Account()
		account.user = userInstance
		account.description = 'default account'
		
		account.save flush:true
		
		Role role = Role.findByAuthority('ROLE_ACCOUNT_MANAGER')
		
		UserRole userRole = new UserRole()
		userRole.user = userInstance
		userRole.role = role
		
		userRole.save flush:true
		

		redirect uri:'/login/auth'
	}
}
