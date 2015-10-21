package br.com.neuritos.converter.domain

class Choice {

	String text
	Long optionOrder
	Boolean answer
	Question question
	
	static belongsTo = [Question]
	
	static mapping = {
		table 'TNE_CHOICE'
		version false
	}

	static constraints = {
		text			nullable: true, maxSize: 1020
		optionOrder		nullable: true
		answer			nullable: true   
	}
}
