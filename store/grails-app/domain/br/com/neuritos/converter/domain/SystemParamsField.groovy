package br.com.neuritos.converter.domain

class SystemParamsField {

	String name
	String description
	String paramValue
	String fieldType
	Long orderNumber
	
	static belongsTo = [systemParams: SystemParams]

	static mapping = {
		id generator: "assigned"
		version false
		table "TNE_SYSTEM_PARAMS_FIELD" 
		systemParams column:'systemParams_id'
		paramValue sqlType: 'Clob'
	}

	static constraints = {
		
		name             nullable: true, maxSize: 1020 
		description      nullable: true, maxSize: 1020
		paramValue       nullable: true
		fieldType        nullable: true
		orderNumber      nullable: true
    }
	
	@Override
	public String toString() {
		return this.name
	}
}
