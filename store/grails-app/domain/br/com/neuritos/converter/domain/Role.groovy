package br.com.neuritos.converter.domain


class Role {

	String authority

	static hasMany = [listUsers: User]

	static mapping = {
		table 'TNE_ROLE'
		version false
		listUsers joinTable: [name: 'TNE_USER_TNE_ROLE',
							column: 'TNE_USER_ID',
							   key: 'ROLE_ID']
		cache true
		authority {column name:"name"}
	}

	static constraints = {
		authority nullable: true, maxSize: 1020, unique: true
	}
	
	@Override
	public String toString() {
		authority
	}
}
