dataSource {
	pooled = false
	jmxExport = false
	driverClassName = "oracle.jdbc.driver.OracleDriver"
	dialect = "br.com.neuritos.persistence.dialect.SequencePerTableOracleDialect"
}
hibernate {
	cache.use_second_level_cache = true
	cache.use_query_cache = false
//    cache.region.factory_class = 'net.sf.ehcache.hibernate.EhCacheRegionFactory' // Hibernate 3
	cache.region.factory_class = 'org.hibernate.cache.ehcache.EhCacheRegionFactory' // Hibernate 4
	singleSession = true // configure OSIV singleSession mode
}

// environment specific settings
environments {
	development {
		dataSource {
			dbCreate = "validate" // one of 'create', 'create-drop', 'update', 'validate', ''
			//jndiName = "java:comp/env/neuritosDatasource"
		
			//##########################################################################################
			//                                NEURITOS STORE
			//##########################################################################################
			url = "jdbc:oracle:thin:@10.20.0.30:1521/pdbstore"
			username= "NEURITOS_STOR"
			password= "oracle_4U"
		}
	}
	
	test {
		dataSource {

			//##########################################################################################
			//                            	  TESTE DE FÃƒÆ’Ã¯Â¿Â½BRICA
			//##########################################################################################
			dbCreate = "validate"
			jndiName = "java:comp/env/neuritosDatasource"
			
//			url = "jdbc:oracle:thin:@10.10.0.61:1521/APPNDEMO"
//			username= "factory_test"
//			password= "Atlc2015Test"
		}
	}
	
	production {
		dataSource {

			dbCreate = "validate"
			jndiName = "java:comp/env/neuritosDatasource"

			//##########################################################################################
			//                            	  TESTE DE DEMO
			//##########################################################################################
//			url = "jdbc:oracle:thin:@dbne-demo.cyajukfyqbrx.sa-east-1.rds.amazonaws.com:1521/dbne"
//			username= "flytour"
//			password= "fl2014TourAbc"
//			url = "jdbc:oracle:thin:@dbne-demonew.cyajukfyqbrx.sa-east-1.rds.amazonaws.com:1521/dbne"
//			username= "neuritos"
//			password= "oracle_4U"
	
		}
	}
}
