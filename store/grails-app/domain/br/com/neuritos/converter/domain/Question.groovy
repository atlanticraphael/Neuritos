package br.com.neuritos.converter.domain

class Question {

	String header
	int optionsQuantity
	boolean neuritosImport
	Long questionIdNeuritos
	
	static hasMany = [listOptions: Choice]
	static belongsTo = [Quiz]
	
	static mapping = {
		table 'TNE_QUESTION'
		version false
	}

	static constraints = {
		header nullable: false, maxSize: 1020
		optionsQuantity nullable: true  
		neuritosImport nullable: true  
		questionIdNeuritos  nullable: true  
	}
}
