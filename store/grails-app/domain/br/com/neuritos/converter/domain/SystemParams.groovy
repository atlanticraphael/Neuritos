package br.com.neuritos.converter.domain

class SystemParams {

	String codParam
	String cod
	Date dateHourCreated 
	Date dateHourUpdated
	String descParam
	String nameParam
	Long numParam
	String textParam
	String typeParam
	Long userCreatedId
	Long userUpdatedId
	Long isEditable
	String preview
	
	static hasMany = [listSystemParamsField: SystemParamsField]

	static mapping = {
		version false
		table "TNE_SYSTEM_PARAMS" 
	}

	static constraints = {
		
		codParam         nullable: true, maxSize: 1020 
		cod              nullable: true, maxSize: 1020
		dateHourCreated  nullable: true
		dateHourUpdated  nullable: true
		descParam        nullable: true, maxSize: 1020
		nameParam        nullable: true, maxSize: 1020
		numParam         nullable: true
		textParam        nullable: true, maxSize: 1020
		typeParam        nullable: true, maxSize: 1020
		userCreatedId    nullable: true
		userUpdatedId    nullable: true
		isEditable       nullable: false
		preview          nullable: true
  }
}
