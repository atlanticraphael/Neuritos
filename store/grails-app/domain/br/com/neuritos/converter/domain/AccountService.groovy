package br.com.neuritos.converter.domain

class AccountService {

	static belongsTo = [account:Account, service:Service]

	static mapping = {
		table 'TNE_ACCOUNT_SERVICE'
		version false
		account  {column name:"account_id"}
		service {column name:"service_id"}
	}

	static constraints = {}
}
