package br.com.neuritos.converter.domain

import br.com.neuritos.auditoria.CamposAuditoria
import br.com.neuritos.converter.domain.enums.ApplicationLanguage


class User extends CamposAuditoria{

	transient springSecurityService
	
	/**
	 * Spring security fields
	 */
	String username
	String password
	boolean accountExpired
	boolean accountLocked
	boolean passwordExpired
	
	static transients = ['springSecurityService']
	
	
	String name
	Date beginvalidity
	Date dateHourCreated
	Date dateHourUpdated
	Date endvalidity
	Date passwordDateExpired
	String passwordLastChanged
	ApplicationLanguage applicationLanguage
	String phoneNumber
	Long neuritosUserId
	String cpf
	boolean quizEnable
	User owner
	Account account
	
	static hasMany = [listRoles: Role]
	static belongsTo = [Role, Company, User]
	static hasOne = [account:Account]
	static mappedBy = [ owner: "none"]

	static mapping = {
		table 'TNE_USER'
		version false
		listRoles joinTable: [name: 'TNE_USER_TNE_ROLE',
							column: 'ROLE_ID',
							   key: 'TNE_USER_ID']
		password {column name: "password"}
		enabled  {column name:"enable"}
		owner {column name:"owner_id"}
	}

	static constraints = {
		beginvalidity nullable: true
		dateHourCreated nullable: true
		dateHourUpdated nullable: true
		endvalidity nullable: true
		cpf nullable: true
		name nullable:true
		accountExpired nullable: true, blank:true
		accountLocked nullable: true, blank:true
		passwordExpired nullable: true, blank:true
		password nullable: true, maxSize: 1020
		passwordDateExpired nullable: true
		passwordLastChanged nullable: true, maxSize: 1020
		username nullable: true, maxSize: 1020, unique: true
		applicationLanguage nullable: true
		phoneNumber nullable: true, maxSize: 1020, unique: true
		neuritosUserId nullable:true 
		dtUpdated nullable: true
		dtEnabled nullable: true
		dtCreated nullable: true
		userCreated nullable: true
		userUpdated nullable: true
		enabled nullable: true
		quizEnable nullable:false
		account nullable:true, unique:true
		owner nullable:true
	}
	
	Set<Role> getAuthorities() {
		UserRole.findAllByUser(this).collect { it.role }
	}

	def beforeInsert() {
		dtEnabled = new Date()
		dtCreated = new Date()
		userCreated = springSecurityService.getCurrentUser()
		
		if (!quizEnable) {
			encodePassword()
		}
	}
	
	def beforeUpdate() {
		dtUpdated = new Date()
		userUpdated = springSecurityService.getCurrentUser()
		
		if (isDirty('password') && !userUpdated.quizEnable && !quizEnable) {
			encodePassword()
		}
	}
	
	protected void encodePassword() {
		password = springSecurityService?.passwordEncoder ? springSecurityService.encodePassword(password) : password
	}
	
}
