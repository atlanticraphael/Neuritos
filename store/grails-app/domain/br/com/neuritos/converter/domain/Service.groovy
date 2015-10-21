package br.com.neuritos.converter.domain

class Service {

	String name
	float price
	
	static mapping = {
		table 'TNE_SERVICE'
		version false
	}
	
    static constraints = {
		name nullable: true, maxSize: 1020
		price nullable: true
    }
}
